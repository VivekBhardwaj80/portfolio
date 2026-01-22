import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import Login from "../pages/admin/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/admin/Dashboard";
import Profile from "../pages/admin/Profile";
import Seo from "../pages/admin/SEO";
import Education from "../pages/admin/Education";
import Experience from "../pages/admin/Experience";
import Skills from "../pages/admin/Skills";
import Projects from "../pages/admin/Projects";
import Feedback from "../pages/admin/Feedback";
import {ToastContainer  } from 'react-toastify'
const AdminRoutes = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route
          element={
            <ProtectedRoutes>
              <AdminLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/seo" element={<Seo />} />
          <Route path="/admin/education" element={<Education />} />
          <Route path="/admin/experience" element={<Experience />} />
          <Route path="/admin/skills" element={<Skills />} />
          <Route path="/admin/projects" element={<Projects />} />
          <Route path="/admin/feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRoutes;
