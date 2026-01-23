import {
  BellIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { RiArrowDropDownLine } from "react-icons/ri";

type TopbarProps = {
  setIsOpen: (val: boolean) => void;
};

const AdminTopbar = ({ setIsOpen }: TopbarProps) => {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between px-4 py-0.5 bg-white/10 backdrop-blur-md border-b border-white/20 md:px-6">
      {/* Mobile menu button - only visible on small screens */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Spacer for alignment on mobile */}
      <div className="md:hidden flex-1" />

      {/* Right side icons */}
      <div className="ml-auto flex items-center gap-3">
        <button className="relative p-2 rounded-full hover:bg-purple-300 cursor-pointer">
          <BellIcon className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-400 cursor-pointer">
          <UserCircleIcon className="h-8 w-8 text-gray-600" />
          <div className="hidden md:block">
            <span className="font-medium text-white">Admin</span>
          </div>
        </div>
        <div className="text-white hover:bg-purple-400 cursor-pointer rounded-full">
          <RiArrowDropDownLine size={25}/>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
