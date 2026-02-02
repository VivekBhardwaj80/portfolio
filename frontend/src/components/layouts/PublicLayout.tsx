import Footer from "../common/Footer";
import PublicSidebar from "../common/PublicSidebar";
import { Outlet } from "react-router-dom";

type PublicLayoutProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const PublicLayout = ({ darkMode, toggleDarkMode }: PublicLayoutProps) => {
  return (
    <div className="flex min-h-screen ">
      {/* Public Sidebar*/}
      <div className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-white shadow-md z-40 rounded-md ">
        <PublicSidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Main Content (Right Side) */}
      <div className="flex-1 lg:ml-64 flex flex-col transition-all duration-300">
        <main className="flex-1 p-5 md:px-10 md:py-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
