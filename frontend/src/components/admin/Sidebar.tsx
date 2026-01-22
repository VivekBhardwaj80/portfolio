import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  XMarkIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
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
  { name: "Education", icon: AcademicCapIcon, path: "/admin/education" },
  { name: "Experience", icon: BriefcaseIcon, path: "/admin/experience" },
  { name: "Skills", icon: CodeBracketIcon, path: "/admin/skills" },
  { name: "Projects", icon: CodeBracketIcon, path: "/admin/projects" },
  { name: "Feedback", icon: ChatBubbleLeftRightIcon, path: "/admin/feedback" },
];

export default function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay - Only shows on mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0
          h-screen w-64
          bg-gray-900 text-white
          shadow-xl
          z-40
          transition-transform duration-300 ease-in-out
          transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:block
        `}
        style={{
          // Force display block on md and above regardless of isOpen
          display: window.innerWidth >= 768 ? 'block' : isOpen ? 'block' : 'none',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          
          {/* Close button - only on mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-gray-300 hover:text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`
                flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white 
                transition-colors duration-200
                ${location.pathname === link.path ? 'bg-gray-800 text-white' : ''}
              `}
            >
              <link.icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}