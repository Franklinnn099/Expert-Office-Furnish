import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../dashboard-app/src/pages/Dashboard";
import Products from "../../dashboard-app/src/pages/Products";
import Orders from "../../dashboard-app/src/pages/Orders";
import Categories from "../../dashboard-app/src/pages/Categories";
import Customers from "../../dashboard-app/src/pages/Customers";
import Reviews from "../../dashboard-app/src/pages/Reviews";
import BlogPosts from "../../dashboard-app/src/pages/BlogPosts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
      </Routes>
    </Router>
  );
}
