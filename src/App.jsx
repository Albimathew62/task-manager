import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
        <nav className="p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">Task Manager</h1>
          <div className="flex gap-4 items-center">
            <Link to="/">Home</Link>
            <Link to="/add">Add Task</Link>
            <ThemeToggle />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="border px-3 py-1 rounded"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
