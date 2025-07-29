import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";
import Categories from "./pages/Categories";
import Reviews from "./pages/Reviews";
import Blogposts from "./pages/Blogposts";

// User Management
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

// Admin Roles
import AdminRoles from "./pages/Adminroles";
import AddRole from "./pages/AddRole";                   // ✅ NEW
import EditAdminRole from "./pages/EditAdminRole";       // ✅ NEW

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"}>
      <AdminLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />

          {/* Customers */}
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomerDetails />} />

          {/* Other Pages */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blogposts" element={<Blogposts />} />

          {/* User Management */}
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />

          {/* Admin Roles */}
          <Route path="/admin-roles" element={<AdminRoles />} />
          <Route path="/add-role" element={<AddRole />} />                     {/* ✅ Add Role Route */}
          <Route path="/edit-role/:id" element={<EditAdminRole />} />         {/* ✅ Edit Role Route */}
        </Routes>
      </AdminLayout>
    </div>
  );
}
