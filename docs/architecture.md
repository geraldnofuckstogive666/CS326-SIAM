# System Architecture – TaskLite

## Overview
TaskLite is a simple full-stack task management system built using a client-server architecture. It was designed to demonstrate core software engineering concepts such as API design, CRUD operations, persistence, and basic DevOps practices.

---

## Architecture Style
The system follows a **3-tier architecture**:

1. Frontend (Presentation Layer)
2. Backend (Application Layer)
3. Database (Data Layer)

---

## System Components

### 1. Frontend
- HTML, CSS (Tailwind), JavaScript
- Responsible for UI rendering and user interactions
- Communicates with backend via REST API

### 2. Backend
- FastAPI (Python)
- Handles business logic and API requests
- Provides CRUD endpoints for tasks
- Manages validation and response formatting

### 3. Database
- SQLite
- Stores task records locally in `tasks.db`
- Lightweight and file-based for simplicity

---

## Data Flow

User → Frontend UI → Fetch API Request → FastAPI Backend → SQLite Database → Response → UI Update

---

## Design Decisions

- Chose FastAPI for simplicity and speed of development
- Used SQLite to avoid external database setup complexity
- Used REST API instead of WebSockets for maintainability
- Separated frontend and backend for modular design

---

## Future Improvements

- Add authentication system
- Replace SQLite with PostgreSQL for scalability
- Introduce WebSocket real-time updates
- Add containerization using Docker