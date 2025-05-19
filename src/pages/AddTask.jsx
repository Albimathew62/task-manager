import { useState } from "react";
import { getTasks, saveTasks } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) {
      alert("Title and Due Date are required");
      return;
    }

    const newTask = {
      title,
      description: desc,
      dueDate: date,
      status: "Pending",
    };

    const currentTasks = getTasks();
    saveTasks([...currentTasks, newTask]);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
