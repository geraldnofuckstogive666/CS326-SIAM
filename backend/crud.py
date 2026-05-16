from database import get_connection

def get_tasks():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tasks")
    rows = cursor.fetchall()
    conn.close()

    return [
        {"id": r[0], "title": r[1], "description": r[2], "priority": r[3], "status": r[4]}
        for r in rows
    ]

def create_task(task):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)",
        (task.title, task.description, task.priority),
    )

    conn.commit()
    conn.close()
    return {"message": "Task created"}

def update_task(task_id, task):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE tasks
        SET title=?, description=?, priority=?, status=?
        WHERE id=?
    """, (task.title, task.description, task.priority, task.status, task_id))

    conn.commit()
    conn.close()
    return {"message": "Task updated"}

def delete_task(task_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM tasks WHERE id=?", (task_id,))
    conn.commit()
    conn.close()

    return {"message": "Task deleted"}

def toggle_task(task_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT status FROM tasks WHERE id=?", (task_id,))
    row = cursor.fetchone()

    if not row:
        conn.close()
        return {"error": "Task not found"}

    status = row[0]
    new_status = "Completed" if status == "Pending" else "Pending"

    cursor.execute(
        "UPDATE tasks SET status=? WHERE id=?",
        (new_status, task_id)
    )

    conn.commit()
    conn.close()

    return {"message": "Toggled"}