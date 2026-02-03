import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1 from "../../assets/bookmark.png";

type PublicRoutesProps = {
  darkMode: boolean;
};

const Projects = ({ darkMode }: PublicRoutesProps) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "lgdj sjjween jwjs  ejesb skfe jsm jwne ksnfbr",
      image: project1,
      tech: ["React", "Node.Js", "MongoDB"],
    },
    {
      id: 2,
      title: "Chatly Platform",
      desc: "lgdj sjjween jwjs  ejesb skfe jsm jwne ksnfbr",
      image: project1,
      tech: ["React", "Node.Js", "MongoDB"],
    },
    {
      id: 3,
      title: " Fitness Tracker App",
      desc: "lgdj sjjween jwjs  ejesb skfe jsm jwne ksnfbr",
      image: project1,
      tech: ["React", "Node.Js", "MongoDB"],
    },
    {
      id: 4,
      title: "Content Generator",
      desc: "lgdj sjjween jwjs  ejesb skfe jsm jwne ksnfbr",
      image: project1,
      tech: ["VsCode", "React Native", "MongoDB"],
    },
  ];
  return (
    <div className="relative py-14">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #26c6da, #1f88e5  )",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
          >
            A showcase of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right, #1f2937, #111827)"
                  : "linear-gradient(to bottom right, #bbdff1, rgba(77,255,240,0.5))",
                borderColor: darkMode ? "#374151" : "e5e7eb",
              }}
              className="group rounded-xl border duration-300 hover:border-cyan-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5bd" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-between gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="flex items-center gap-2 bg-blue-400 px-3 py-2 rounded-lg">
                    <FaGithub />
                    <span >Code</span>
                    </div>
                    {/* Demo */}
                    <a
                      href="#"
                      style={{
                        background:
                          "linear-gradient(to right, #06b6d4, #67e8f9",
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:shadow-cyan-500/25 transition-all"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Demo</span>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            style={{
              backgroundColor: "linear-gradient(to right, #06b6d4, #67e8f9",
            }}
            className="inline-flex items-center font-semibold justify-center gap-2 px-7 py-4 text-sm rounded-funny hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
