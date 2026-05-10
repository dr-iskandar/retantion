# Retantion Property CRM

Modern Property CRM with WhatsApp/Web Chat integration, AI Sales Copilot, and Sales Playbook automation.

## Tech Stack

- **Backend**: FastAPI (Python)
- **Frontend**: Next.js (TypeScript)
- **Database**: PostgreSQL + pgvector
- **Cache/Queue**: Redis
- **Object Storage**: MinIO
- **Infrastructure**: Docker Compose

## Development Setup

1. **Clone the repository**
2. **Start the infrastructure**
   ```bash
   docker-compose up -d
   ```
3. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
