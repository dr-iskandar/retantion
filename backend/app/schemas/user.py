from pydantic import BaseModel, EmailStr
from app.models.user import UserRole

class UserBase(BaseModel):
    email: EmailStr
    full_name: str | None = None
    role: UserRole = UserRole.AGENT

class UserCreate(UserBase):
    password: str
    tenant_id: int

class UserUpdate(BaseModel):
    full_name: str | None = None
    role: UserRole | None = None
    is_active: bool | None = None

class User(UserBase):
    id: int
    tenant_id: int
    is_active: bool

    class Config:
        from_attributes = True
