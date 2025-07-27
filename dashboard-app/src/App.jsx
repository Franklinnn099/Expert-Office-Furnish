import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Categories from "./pages/Categories";
import Customers from "./pages/Customers";
import Reviews from "./pages/Reviews";
import Blogposts from "./pages/Blogposts";
import Users from "./pages/Users";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"}>
      <Routes>
        <Route path="/" element={<Dashboard toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogposts" element={<Blogposts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
