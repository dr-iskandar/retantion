from fastapi import APIRouter, Request, Query, HTTPException
from app.core.config import settings

router = APIRouter()

@router.get("/webhook")
async def verify_webhook(
    hub_mode: str = Query(None, alias="hub.mode"),
    hub_verify_token: str = Query(None, alias="hub.verify_token"),
    hub_challenge: str = Query(None, alias="hub.challenge")
):
    if hub_mode == "subscribe" and hub_verify_token == settings.WHATSAPP_VERIFY_TOKEN:
        return int(hub_challenge)
    raise HTTPException(status_code=403, detail="Verification failed")

@router.post("/webhook")
async def receive_message(request: Request):
    body = await request.json()
    # TODO: Parse WhatsApp JSON, find tenant by phone number, create/update lead
    print("Received WhatsApp message:", body)
    return {"status": "ok"}
