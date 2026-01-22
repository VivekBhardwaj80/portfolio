import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/Sidebar";
import AdminTopbar from "../admin/Topbar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Hidden on mobile, shown on md and up */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 transition-all duration-300">
        {/* Topbar */}
        <AdminTopbar setIsOpen={setIsOpen} />

        {/* Page Content */}
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;