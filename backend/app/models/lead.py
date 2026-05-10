from sqlalchemy import Column, Integer, String, ForeignKey, Float, Enum, Text
from sqlalchemy.orm import relationship
import enum
from app.models.base import Base

class LeadStatus(str, enum.Enum):
    NEW = "new"
    QUALIFIED = "qualified"
    LISTING_SENT = "listing_sent"
    VIEWING_SCHEDULED = "viewing_scheduled"
    VIEWING_COMPLETED = "viewing_completed"
    NEGOTIATION = "negotiation"
    BOOKING = "booking"
    CLOSED_WON = "closed_won"
    CLOSED_LOST = "closed_lost"

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"))
    assigned_agent_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    
    full_name = Column(String, index=True)
    phone_number = Column(String, index=True)
    email = Column(String, nullable=True)
    status = Column(Enum(LeadStatus), default=LeadStatus.NEW)
    
    # Requirements
    budget_min = Column(Float, nullable=True)
    budget_max = Column(Float, nullable=True)
    area_interest = Column(String, nullable=True)
    property_type = Column(String, nullable=True)
    notes = Column(Text, nullable=True)

    tenant = relationship("Tenant", back_populates="leads")
