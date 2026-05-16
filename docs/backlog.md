## 
# TaskLite Product Backlog

TaskLite is a lightweight task management system designed to help users organize daily tasks efficiently without requiring authentication or complex setup. This backlog captures the planned features and user stories for the system.

---

## User Stories

### 1. Add Task
As a user, I want to add a task so that I can track things I need to do.

**Priority:** High  
**Story Points:** 3  

**Acceptance Criteria:**
- User can input task title
- User can add description and priority
- Task appears in the task list after submission

---

### 2. Edit Task
As a user, I want to edit a task so that I can update incorrect or outdated information.

**Priority:** Medium  
**Story Points:** 5  

**Acceptance Criteria:**
- User can modify task title and description
- Changes are reflected immediately in the UI
- Updated timestamp is recorded

---

### 3. Delete Task
As a user, I want to delete a task so that I can remove unnecessary items.

**Priority:** High  
**Story Points:** 2  

**Acceptance Criteria:**
- Task is removed from UI and database
- No page reload required
- Confirmation or safe deletion behavior exists

---

### 4. Mark Task as Complete
As a user, I want to mark a task as complete so I can track progress.

**Priority:** High  
**Story Points:** 3  

**Acceptance Criteria:**
- Task status toggles between Pending and Completed
- UI visually reflects status change
- Data persists after refresh

---

### 5. Search Tasks
As a user, I want to search tasks so I can find specific items quickly.

**Priority:** Medium  
**Story Points:** 2  

**Acceptance Criteria:**
- Search filters tasks by title
- Results update dynamically
- Empty search returns all tasks

---

### 6. Filter Tasks by Status
As a user, I want to filter tasks by status so I can focus on pending or completed tasks.

**Priority:** Medium  
**Story Points:** 3  

**Acceptance Criteria:**
- User can filter by Pending or Completed
- Filter updates task list in real time

---

### 7. Assign Priority
As a user, I want to assign priority levels so I can organize tasks by importance.

**Priority:** Medium  
**Story Points:** 2  

**Acceptance Criteria:**
- Priority levels include Low, Medium, High
- Priority is visible in UI

---

### 8. View Dashboard Statistics
As a user, I want to see task statistics so I can understand my productivity.

**Priority:** High  
**Story Points:** 3  

**Acceptance Criteria:**
- Total tasks displayed
- Completed and pending tasks shown
- Completion percentage calculated

---

### 9. Persistent Data Storage
As a user, I want my tasks saved so that they remain after refresh.

**Priority:** High  
**Story Points:** 5  

**Acceptance Criteria:**
- Data stored in SQLite database
- Tasks persist after page reload

---

### 10. Input Validation
As a user, I want validation so that I cannot submit empty tasks.

**Priority:** High  
**Story Points:** 2  

**Acceptance Criteria:**
- Empty title is not allowed
- Error message is shown to user
