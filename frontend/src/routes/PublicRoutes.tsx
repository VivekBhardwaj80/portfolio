import { Route, Routes } from "react-router-dom";
import PublicLayout from "../components/layouts/PublicLayout";
import Home from "../pages/public/Home";


type PublicRoutesProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const PublicRoutes = ({ darkMode, toggleDarkMode }: PublicRoutesProps) => {
  return (
    <div>
      <Routes>
        <Route
          element={
            <PublicLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        >
          <Route index element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublicRoutes;
