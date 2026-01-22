import { motion } from "framer-motion";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const links = [
  { name: "Dashboard", icon: HomeIcon, path: "/admin/dashboard" },
  { name: "Profile", icon: UserIcon, path: "/admin/profile" },
  { name: "SEO", icon: BriefcaseIcon, path: "/admin/seo" },
  { name: "Education", icon: BriefcaseIcon, path: "/admin/education" },
  { name: "Experience", icon: BriefcaseIcon, path: "/admin/experience" },
  { name: "Skills", icon: BriefcaseIcon, path: "/admin/skills" },
  { name: "Projects", icon: BriefcaseIcon, path: "/admin/projects" },
  { name: "Feedback", icon: EnvelopeIcon, path: "/admin/feedback" },
];

export default function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white shadow-lg z-50"
    >
      <div className="flex items-center justify-between p-5">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button onClick={() => setIsOpen(false)}>
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>
      </div>

      <nav className="mt-10">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center px-5 py-3 hover:bg-gray-800 transition-colors ${
              location.pathname === link.path ? "bg-gray-800" : ""
            }`}
          >
            <link.icon className="h-5 w-5 mr-3" />
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
