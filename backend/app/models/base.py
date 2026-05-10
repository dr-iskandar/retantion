from datetime import datetime
from sqlalchemy import Column, DateTime
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
