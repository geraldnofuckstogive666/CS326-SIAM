# Deployment Plan – TaskLite

## Platform
The application is deployed using **Render**, a cloud hosting platform suitable for lightweight backend services.

---

## Deployment Strategy
- Backend deployed as a Python Web Service
- FastAPI served using Uvicorn
- Frontend served through FastAPI static file routing

---

## Build Command
pip install -r backend/requirements.txt

---

## Start Command
uvicorn backend.main:app --host 0.0.0.0 --port 10000

---

## Environment Setup
- No external environment variables required
- SQLite database created automatically on startup

---

## Rollback Strategy
If deployment fails:
1. Revert to previous Git commit
2. Redeploy using Render dashboard
3. Validate `/health` endpoint before restoring traffic

---

## Verification Checklist
- `/health` returns status 200
- Dashboard loads correctly
- API endpoints respond properly
- Database persists tasks after restart