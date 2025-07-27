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
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-md p-5">
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
      <nav className="space-y-6 text-gray-700 dark:text-gray-300">
        <NavLink to="/" className="flex items-center gap-3 hover:text-green-600">
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>
        <NavLink to="/products" className="flex items-center gap-3 hover:text-green-600">
          <Box size={20} /> Products
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-3 hover:text-green-600">
          <ShoppingCart size={20} /> Orders
        </NavLink>
        <NavLink to="/users" className="flex items-center gap-3 hover:text-green-600">
          <Users size={20} /> Users
        </NavLink>
        <NavLink to="/categories" className="flex items-center gap-3 hover:text-green-600">
          <List size={20} /> Categories
        </NavLink>
        <NavLink to="/reviews" className="flex items-center gap-3 hover:text-green-600">
          <Star size={20} /> Reviews
        </NavLink>
        <NavLink to="/blogposts" className="flex items-center gap-3 hover:text-green-600">
          <FileText size={20} /> Blog Posts
        </NavLink>
        <NavLink to="/customers" className="flex items-center gap-3 hover:text-green-600">
          <UserCheck size={20} /> Customers
        </NavLink>
      </nav>
    </aside>
  );
}
