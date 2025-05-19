import React, { useState } from "react";

const Home = () => {
  // Sample initial tasks (you can replace with real data or props)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish assignment", status: "Pending" },
    { id: 2, title: "Review PRs", status: "Completed" },
    { id: 3, title: "Plan meeting", status: "Pending" },
  ]);

  // Toggle status between Completed and Pending
  const toggleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded shadow-md border mb-4 flex justify-between items-center ${
              task.status === "Completed"
                ? "bg-green-100 dark:bg-green-800"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p
                className={`mt-1 font-medium ${
                  task.status === "Completed"
                    ? "text-green-700 dark:text-green-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Status: {task.status}
              </p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => toggleStatus(task.id)}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                {task.status === "Completed" ? "Mark Pending" : "Mark Completed"}
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
