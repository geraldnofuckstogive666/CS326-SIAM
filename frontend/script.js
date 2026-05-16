const API = "/api";

/* =========================
   USER DISPLAY
========================= */
const userEl = document.getElementById("user");
if (userEl) {
  userEl.innerText = localStorage.getItem("user") || "Guest";
}

/* =========================
   LOAD TASKS
========================= */
async function loadTasks() {
  try {
    const res = await fetch(`${API}/tasks`);

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    let tasks = await res.json();

    // SEARCH FILTER
    const searchEl = document.getElementById("search");
    const search = searchEl?.value?.toLowerCase();

    if (search) {
      tasks = tasks.filter(t =>
        t.title.toLowerCase().includes(search)
      );
    }

    renderStats(tasks);
    renderTasks(tasks);

  } catch (err) {
    console.error("loadTasks error:", err);
    alert("Failed to load tasks. Check backend connection.");
  }
}

/* =========================
   STATS
========================= */
function renderStats(tasks) {
  const total = tasks.length;
  const done = tasks.filter(t => t.status === "Completed").length;
  const pending = total - done;
  const rate = total ? Math.round((done / total) * 100) : 0;

  const totalEl = document.getElementById("total");
  const doneEl = document.getElementById("done");
  const pendingEl = document.getElementById("pending");
  const rateEl = document.getElementById("rate");

  if (totalEl) totalEl.innerText = total;
  if (doneEl) doneEl.innerText = done;
  if (pendingEl) pendingEl.innerText = pending;
  if (rateEl) rateEl.innerText = rate + "%";
}

/* =========================
   RENDER TASKS
========================= */
function renderTasks(tasks) {
  const container = document.getElementById("taskList");
  if (!container) return;

  container.innerHTML = "";

  tasks.forEach(t => {

    const priorityColor =
      t.priority === "High" ? "border-red-500" :
      t.priority === "Medium" ? "border-yellow-500" :
      "border-green-500";

    // ✅ NEW: status-based styling
    const isCompleted = t.status === "Completed";

    const cardStyle = isCompleted
      ? "bg-green-50 border-green-500"
      : "bg-white";

    const textStyle = isCompleted
      ? "text-green-700"
      : "text-gray-800";

    container.innerHTML += `
      <div class="${cardStyle} p-4 rounded-xl shadow border-l-4 ${priorityColor}">

        <div class="flex justify-between items-center">
          <h3 class="font-bold ${textStyle}">
            ${t.title}
          </h3>

          <span class="text-sm px-2 py-1 rounded 
            ${isCompleted ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-700'}">
            ${t.status}
          </span>
        </div>

        <p class="text-sm mt-1 ${isCompleted ? 'text-green-600' : 'text-gray-500'}">
          ${t.description || ""}
        </p>

        <div class="mt-3 flex gap-2">

          <button onclick="toggleTask(${t.id})"
            class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Toggle
          </button>

          <button onclick="deleteTask(${t.id})"
            class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>

        </div>

      </div>
    `;
  });
}

/* =========================
   ADD TASK
========================= */
async function addTask() {
  try {
    const titleEl = document.getElementById("title");
    const descEl = document.getElementById("desc");
    const priorityEl = document.getElementById("priority");

    if (!titleEl || !priorityEl) {
      throw new Error("Form elements missing");
    }

    const res = await fetch(`${API}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleEl.value,
        description: descEl?.value || "",
        priority: priorityEl.value
      })
    });

    if (!res.ok) throw new Error("Failed to create task");

    closeModal();
    await loadTasks();

  } catch (err) {
    console.error("addTask error:", err);
    alert("Could not add task.");
  }
}

/* =========================
   DELETE TASK
========================= */
async function deleteTask(id) {
  try {
    const res = await fetch(`${API}/tasks/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) throw new Error("Delete failed");

    loadTasks();

  } catch (err) {
    console.error("deleteTask error:", err);
    alert("Could not delete task.");
  }
}

/* =========================
   TOGGLE TASK
========================= */
async function toggleTask(id) {
  try {
    const res = await fetch(`${API}/tasks/${id}/toggle`, {
      method: "PATCH"
    });

    if (!res.ok) throw new Error("Toggle failed");

    loadTasks();

  } catch (err) {
    console.error("toggleTask error:", err);
    alert("Could not toggle task.");
  }
}

/* =========================
   MODAL CONTROLS
========================= */
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.classList.add("hidden");

  // RESET FIELDS (safe cleanup)
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const priority = document.getElementById("priority");

  if (title) title.value = "";
  if (desc) desc.value = "";
  if (priority) priority.selectedIndex = 0;
}

/* =========================
   INITIAL LOAD
========================= */
loadTasks();