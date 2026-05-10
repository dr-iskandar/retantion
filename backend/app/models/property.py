from sqlalchemy import Column, Integer, String, ForeignKey, Float, Text, Boolean
from sqlalchemy.orm import relationship
from app.models.base import Base

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"))
    
    title = Column(String, index=True)
    property_type = Column(String)  # House, Apartment, Land, etc.
    location = Column(String, index=True)
    price = Column(Float)
    
    description = Column(Text, nullable=True)
    bedrooms = Column(Integer, nullable=True)
    bathrooms = Column(Integer, nullable=True)
    land_size = Column(Float, nullable=True)
    building_size = Column(Float, nullable=True)
    
    is_available = Column(Boolean, default=True)
    main_image_url = Column(String, nullable=True)

    tenant = relationship("Tenant", back_populates="properties")
