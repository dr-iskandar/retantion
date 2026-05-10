import json
from typing import Dict
from app.core.config import settings

class AIService:
    def __init__(self):
        self.api_key = settings.SECRET_KEY # Placeholder for OpenAI/Anthropic key

    async def extract_lead_info(self, chat_history: str) -> Dict:
        """
        Extract structured info from chat history using AI.
        """
        # Placeholder for actual LLM call
        # In a real scenario, we would prompt the LLM to return a JSON with:
        # full_name, budget, location_preference, property_type
        print(f"Analyzing chat history for lead extraction: {chat_history[:100]}...")
        
        return {
            "full_name": "Extracted Name",
            "budget": 5000000000,
            "location_preference": "BSD",
            "property_type": "House",
            "is_hot": True
        }

    async def summarize_chat(self, chat_history: str) -> str:
        """
        Generate a short summary of a long chat conversation.
        """
        return "Lead is looking for a 3-bedroom house in BSD with a budget of 5M."

ai_service = AIService()
