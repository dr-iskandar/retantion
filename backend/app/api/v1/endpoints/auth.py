from datetime import timedelta
from typing import Any
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app import crud, schemas
from app.api import deps
from app.core import security
from app.core.config import settings
from app.models.user import UserRole

router = APIRouter()

@router.post("/login", response_model=schemas.token.Token)
def login(
    db: Session = Depends(deps.get_db), form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    user = db.query(schemas.user.User).filter(schemas.user.User.email == form_data.username).first()
    if not user or not security.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    elif not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": security.create_access_token(
            user.email, expires_delta=access_token_expires, tenant_id=user.tenant_id
        ),
        "token_type": "bearer",
    }

@router.post("/register", response_model=schemas.user.User)
def register(
    *,
    db: Session = Depends(deps.get_db),
    tenant_in: schemas.tenant.TenantCreate,
    user_in: schemas.user.UserCreate,
) -> Any:
    # Check if tenant exists
    if crud.tenant.get_tenant_by_slug(db, slug=tenant_in.slug):
        raise HTTPException(
            status_code=400,
            detail="The tenant with this slug already exists in the system.",
        )
    
    # Check if user exists
    user = db.query(schemas.user.User).filter(schemas.user.User.email == user_in.email).first()
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    
    # Create tenant
    tenant = crud.tenant.create_tenant(db, obj_in=tenant_in)
    
    # Create user as Owner
    db_user = schemas.user.User(
        email=user_in.email,
        hashed_password=security.get_password_hash(user_in.password),
        full_name=user_in.full_name,
        tenant_id=tenant.id,
        role=UserRole.OWNER,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
