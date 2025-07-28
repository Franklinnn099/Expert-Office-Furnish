import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Box,
  ShoppingCart,
  Users,
  Star,
  FileText,
  List,
  UserCheck,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-md p-5 overflow-y-auto">
      {/* Logo and Name */}
      <div className="flex items-center gap-3 mb-10 border-b pb-5 border-gray-200 dark:border-gray-700">
        <img
          src="/pics/Company logo.png"
          alt="Logo"
          className="h-12 w-12 object-cover rounded-full"
        />
        <span className="text-xl font-bold text-green-600 leading-tight">
          Expert Office Furnish
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-4 text-gray-700 dark:text-gray-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <Box size={20} /> Products
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <ShoppingCart size={20} /> Orders
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <Users size={20} /> Users
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <List size={20} /> Categories
        </NavLink>

        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <Star size={20} /> Reviews
        </NavLink>

        <NavLink
          to="/blogposts"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <FileText size={20} /> Blog Posts
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:text-green-600 ${
              isActive ? "text-green-600 font-semibold" : ""
            }`
          }
        >
          <UserCheck size={20} /> Customers
        </NavLink>
      </nav>
    </aside>
  );
}
