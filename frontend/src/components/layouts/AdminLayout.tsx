import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/Sidebar";
import AdminTopbar from "../admin/Topbar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-700 via-purple-600 to-fuchsia-500">

      {/* Sidebar - Hidden on mobile, shown on md and up */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex-1 md:ml-48 lg:ml-55 transition-all duration-300">
        {/* Topbar */}
        <AdminTopbar setIsOpen={setIsOpen} />

        {/* Page Content */}
        <main className="p-3 md:px-6 md:py-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;