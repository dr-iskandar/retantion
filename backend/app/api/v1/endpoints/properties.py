from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from app.api import deps
from app.models.property import Property
from app.core.storage import storage_service
import uuid

router = APIRouter()

@router.post("/")
async def create_property(
    *,
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user),
    title: str = Form(...),
    description: str = Form(None),
    price: float = Form(...),
    location: str = Form(...),
    property_type: str = Form(...),
    images: List[UploadFile] = File(...)
) -> Any:
    # 1. Upload images to MinIO
    image_urls = []
    for image in images:
        file_content = await image.read()
        file_ext = image.filename.split('.')[-1]
        object_name = f"properties/{uuid.uuid4()}.{file_ext}"
        
        url = await storage_service.upload_file(
            file_data=file_content,
            bucket_name=f"tenant-{current_user.tenant_id}",
            object_name=object_name,
            content_type=image.content_type
        )
        image_urls.append(url)

    # 2. Save property to DB
    db_obj = Property(
        tenant_id=current_user.tenant_id,
        title=title,
        description=description,
        price=price,
        location=location,
        property_type=property_type,
        images=image_urls, # Store as JSON/List in DB
    )
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj

@router.get("/")
def list_properties(
    db: Session = Depends(deps.get_db),
    current_user = Depends(deps.get_current_user),
) -> Any:
    return db.query(Property).filter(Property.tenant_id == current_user.tenant_id).all()
