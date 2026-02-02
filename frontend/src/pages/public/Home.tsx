import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";
import { IoIosMenu } from "react-icons/io";
import PublicSidebar from "../../components/common/PublicSidebar";
import { AnimatePresence, motion } from "motion/react";

type PublicRoutesProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
const Home = ({ darkMode, toggleDarkMode }: PublicRoutesProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <IoIosMenu
          size={30}
          className="cursor-pointer text-gray-700 dark:text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 flex lg:hidden">
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="relative z-50 w-64 h-full"
            >
              {" "}
              <PublicSidebar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div
        className={
          darkMode
            ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen "
            : "bg-linear-to-br from-cyan-500 to-blue-100 min-h-screen rounded-md"
        }
      >
        <section id="home" className="min-h-screen">
          <HeroSection darkMode={darkMode} />
        </section>
        <section id="about" className="min-h-screen">
          <About darkMode={darkMode} />
        </section>
        <section id="skill" className="min-h-screen">
          <Skills darkMode={darkMode}/>
        </section>
        <section id="project" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
