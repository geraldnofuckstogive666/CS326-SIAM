# QA Plan – TaskLite

## Overview
The QA strategy ensures that TaskLite functions correctly across all core features including task creation, updates, deletion, and toggling.

---

## Test Types

### 1. Unit Testing
- Tests individual CRUD functions
- Ensures correct database operations

### 2. Integration Testing
- Tests API endpoints with simulated requests
- Ensures frontend-backend communication works

### 3. System Testing
- Full workflow testing from UI to database

---

## Entry Criteria
- Application builds successfully
- Backend server starts without errors

## Exit Criteria
- All test cases pass
- No high severity bugs remain

---

## Test Coverage Achieved
- Task creation
- Task deletion
- Task update
- Toggle completion
- Fetch all tasks

---

## Outcome
All tests passed successfully after fixing initial API routing issues.