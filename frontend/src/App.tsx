import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    AOS.refresh();
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        darkMode
          ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
          : "bg-linear-to-br from-cyan-400 to-blue-400 min-h-screen"
      }
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        style={{ zIndex: 99999 }}
      />
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
