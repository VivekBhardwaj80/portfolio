import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import Login from "../pages/admin/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/admin/Dashboard";
import Profile from "../pages/admin/Profile";
import Education from "../pages/admin/Education";
import Experience from "../pages/admin/Experience";
import Skills from "../pages/admin/Skills";
import Projects from "../pages/admin/Projects";
import Feedback from "../pages/admin/Feedback";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminRoutes = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <AdminLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="feedback" element={<Feedback />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRoutes;
