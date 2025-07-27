// Products.jsx
import AdminLayout from "../layouts/AdminLayout";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
