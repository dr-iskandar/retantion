from fastapi import APIRouter
from app.api.v1.endpoints import auth, widget, properties

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(widget.router, prefix="/widget", tags=["widget"])
api_router.include_router(properties.router, prefix="/properties", tags=["properties"])
