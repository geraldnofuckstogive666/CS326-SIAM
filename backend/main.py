from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import create_db
import crud, schemas

app = FastAPI()


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend")

app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

# CORS (safe for both local + deployment)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize DB safely
@app.on_event("startup")
def startup():
    create_db()

# Health check (Render uses this often)
@app.get("/health")
def health():
    return {"status": "ok"}

# CRUD endpoints
@app.get("/api/tasks")
def get_tasks():
    return crud.get_tasks()

@app.post("/api/tasks")
def create_task(task: schemas.TaskCreate):
    return crud.create_task(task)

@app.put("/api/tasks/{task_id}")
def update_task(task_id: int, task: schemas.TaskUpdate):
    return crud.update_task(task_id, task)

@app.delete("/api/tasks/{task_id}")
def delete_task(task_id: int):
    return crud.delete_task(task_id)

@app.patch("/api/tasks/{task_id}/toggle")
def toggle_task(task_id: int):
    return crud.toggle_task(task_id)

@app.get("/")
def serve_frontend():
    return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))

@app.get("/dashboard.html")
def dashboard():
    return FileResponse(os.path.join(FRONTEND_DIR, "dashboard.html"))