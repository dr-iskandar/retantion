from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api import deps
from app.models.lead import Lead, LeadStatus
from pydantic import BaseModel

router = APIRouter()

class WidgetLeadCreate(BaseModel):
    tenant_id: int
    full_name: str
    phone_number: str
    email: str | None = None
    message: str | None = None

@router.post("/capture")
def capture_lead(
    *,
    db: Session = Depends(deps.get_db),
    lead_in: WidgetLeadCreate,
) -> Any:
    # Basic lead creation from widget
    db_obj = Lead(
        tenant_id=lead_in.tenant_id,
        full_name=lead_in.full_name,
        phone_number=lead_in.phone_number,
        email=lead_in.email,
        notes=lead_in.message,
        status=LeadStatus.NEW
    )
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return {"status": "success", "lead_id": db_obj.id}
