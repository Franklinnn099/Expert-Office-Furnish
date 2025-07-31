// src/App.jsx

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import AdminLayout from "./layouts/AdminLayout";

// Dashboard
import Dashboard from "./pages/Dashboard";

// Products
import Products from "./pages/Products";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

// Orders
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";

// Customers
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";

// Categories & Blog
import Categories from "./pages/Categories";
import Blogposts from "./pages/Blogposts";

// Discounts
import Discounts from "./pages/Discounts";
import CreateDiscount from "./pages/CreateDiscount";
import EditDiscount from "./pages/EditDiscount";

// Analytics
import AnalyticsOverview from "./pages/AnalyticsOverview";
import SalesPerformance from "./pages/SalesPerformance";
import TopProducts from "./pages/TopProducts";
import UserBehavior from "./pages/UserBehavior";

// User Management
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

// Admin Roles
import AdminRoles from "./pages/Adminroles";
import AddRole from "./pages/AddRole";
import EditAdminRole from "./pages/EditAdminRole";

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

          {/* Categories & Blog */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/blogposts" element={<Blogposts />} />

          {/* Analytics */}
          <Route path="/analytics" element={<AnalyticsOverview />} />
          <Route path="/analytics/sales-performance" element={<SalesPerformance />} />
          <Route path="/analytics/top-products" element={<TopProducts />} />
          <Route path="/analytics/user-behavior" element={<UserBehavior />} />

          {/* Discounts */}
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/discounts/create" element={<CreateDiscount />} />
          <Route path="/discounts/edit/:id" element={<EditDiscount />} />

          {/* User Management */}
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />

          {/* Admin Roles */}
          <Route path="/admin-roles" element={<AdminRoles />} />
          <Route path="/add-role" element={<AddRole />} />
          <Route path="/edit-role/:id" element={<EditAdminRole />} />
        </Routes>
      </AdminLayout>
    </div>
  );
}
