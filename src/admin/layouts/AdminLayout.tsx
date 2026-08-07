import { Outlet, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { isDemoLoggedIn } from "../demoAuth";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function AdminLayout() {
  if (!isDemoLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="admin-shell">
      <AdminSidebar />
      <motion.main
        className="lg:ml-64 min-h-screen p-6 lg:p-10 pt-20 lg:pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AdminHeader />
        <Outlet />
      </motion.main>
    </div>
  );
}
