import { Route, Routes } from "react-router-dom";
import PublicLayout from "../components/layouts/PublicLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Projects from "../pages/public/Projects";
import Skills from "../pages/public/Skills";
import Contact from "../pages/public/Contact";
const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublicRoutes;
