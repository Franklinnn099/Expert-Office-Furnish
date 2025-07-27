// src/layouts/AdminLayout.jsx
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Navbar */}
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

          {/* Page Content */}
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
