// import { useState } from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

type TopbarProps = {
  setIsOpen: (val: boolean) => void;
};

const AdminTopbar = ({ setIsOpen }: TopbarProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-xl">☰</span>
      </button>

      <div className="flex items-center gap-4">
        <BellIcon className="h-6 w-6 text-gray-600" />
        <div className="flex items-center gap-2">
          <UserCircleIcon className="h-8 w-8 text-gray-600" />
          <span className="font-semibold">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
