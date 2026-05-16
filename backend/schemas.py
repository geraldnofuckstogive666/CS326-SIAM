from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str
    description: str = ""
    priority: str = "Low"

class TaskUpdate(BaseModel):
    title: str
    description: str
    priority: str
    status: str
