const TASK_KEY = "tasks";

export function getTasks() {
  const data = localStorage.getItem(TASK_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}
