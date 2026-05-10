from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from app.models.base import Base

class Tenant(Base):
    __tablename__ = "tenants"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    slug = Column(String, unique=True, index=True)
    logo_url = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    
    users = relationship("User", back_populates="tenant")
    leads = relationship("Lead", back_populates="tenant")
    properties = relationship("Property", back_populates="tenant")
