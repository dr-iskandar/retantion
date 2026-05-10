from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Enum
from sqlalchemy.orm import relationship
import enum
from app.models.base import Base

class UserRole(str, enum.Enum):
    OWNER = "owner"
    MANAGER = "manager"
    AGENT = "agent"
    ADMIN = "admin"
    VIEWER = "viewer"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"))
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    role = Column(Enum(UserRole), default=UserRole.AGENT)
    is_active = Column(Boolean, default=True)

    tenant = relationship("Tenant", back_populates="users")
