from sqlalchemy.orm import Session
from app.models.tenant import Tenant
from app.schemas.tenant import TenantCreate

def create_tenant(db: Session, obj_in: TenantCreate) -> Tenant:
    db_obj = Tenant(
        name=obj_in.name,
        slug=obj_in.slug
    )
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj

def get_tenant_by_slug(db: Session, slug: str) -> Tenant | None:
    return db.query(Tenant).filter(Tenant.slug == slug).first()
