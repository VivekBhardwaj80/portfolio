import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/Sidebar";
import AdminTopbar from "../admin/Topbar";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Topbar + Content */}
      <div className="lg:pl-64">
        <AdminTopbar setIsOpen={setIsOpen} />

        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
