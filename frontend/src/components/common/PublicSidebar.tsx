import { FiHome } from "react-icons/fi";
import { IoFolderOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "motion/react";

type PublicSidebarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const PublicSidebar = ({ darkMode, toggleDarkMode }: PublicSidebarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  
  const lightColors = {
    sidebarBg: "bg-linear-to-br from-cyan-200 to-cyan-500",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500",
  };

  const darkColors = {
    sidebarBg: "bg-linear-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };
  const colors = darkMode ? darkColors : lightColors;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    setActiveSection(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "project", "skill", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [
    { id: "home", label: "Home", Icon: <FiHome size={18} /> },
    { id: "about", label: "About", Icon: <IoBagHandleOutline size={18} /> },
    { id: "skill", label: "Skill", Icon: <GrTechnology size={18} /> },
    { id: "project", label: "Project", Icon: <IoFolderOutline size={18} /> },
    { id: "contact", label: "Contact", Icon: <CgMail size={18} /> },
  ];

  return (
    <aside
      className={`flex flex-col h-full px-4 py-8 overflow-y-auto 
    ${
      darkMode
        ? "bg-gray-900 text-white border-gray-800 border-r"
        : "bg-cyan-300 text-gray-700 border-gray-200"
    }`}
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col h-full rounded-md items-center justify-center ${colors.sidebarBg} backdrop-blur-lg rounded-2xl lg:px-4 `}
      >
        <span className={`text-xl mt-1 ${colors.textPrimary}`}>PortFolio</span>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 font-semibold text-md text-gray-600 px-3">
          {links.map(({ id, label, Icon }) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex px-11 py-2 rounded-md items-center gap-2 transition-all duration-200 cursor-pointer ${
                activeSection === id
                  ? "bg-cyan-200 text-black  shadow-lg"
                  : "hover:bg-cyan-100"
              }`}
            >
              {Icon}
              {label}
            </motion.button>
          ))}
        </div>
        <button
          onClick={toggleDarkMode}
          className={`mt-auto mx-3 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
    transition-all duration-300 cursor-pointer
    ${
      darkMode
        ? "bg-cyan-400 text-black hover:bg-cyan-500"
        : "bg-gray-900 text-white hover:bg-gray-800"
    }`}
        >
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </motion.div>
    </aside>
  );
};

export default PublicSidebar
