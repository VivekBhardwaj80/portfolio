import react from "../../assets/react.png";
import socket from "../../assets/Socket.io.png";
import tailwindCSS from "../../assets/tailwindcss.png";
import typescript from "../../assets/typescript.png";

type PublicRoutesProps = {
  darkMode: boolean;
};

const Skills = ({ darkMode }: PublicRoutesProps) => {
  const skills = [
    {
      name: "react",
      icon: react,
      level: 95,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "socket",
      icon: socket,
      level: 85,
      color: "from-[#136163] to-[#1a98a6]",
    },
    {
      name: "tailwindCSS",
      icon: tailwindCSS,
      level: 90,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "typescript",
      icon: typescript,
      level: 80,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="py-14 relative overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
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
              Skills
            </span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            excepturi aut enim voluptates iste! Maxime voluptatum provident enim
            nam sequi.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 100}`}
            >
              <div
                style={{
                  background: darkMode
                    ? "linear-gradient(to bottom right, #1f2937, #111827)"
                    : "linear-gradient(to bottom right, #bbdff1, rgba(77,255,240,0.5))",
                  borderColor: darkMode ? "#374151" : "#e5e7eb",
                }}
                className="group h-full p-6 rounded-xl border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
              >
                <div className="flex items-center mb-6">
                  <div
                    style={{
                      background: darkMode
                        ? "linear-gradient(to bottom right, #374151, #1f2937)"
                        : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                    }}
                    className="w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold ml-4"
                    style={{ color: darkMode ? "white" : "#1f2937" }}
                  >
                    {skill.name}
                  </h3>
                </div>
                <div className="mb-2 flex justify-between items-center">
                  <span
                    className="font-medium"
                    style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                  >
                    Proficiency
                  </span>
                  <span
                    style={{
                      background:
                        "linear-gradient(to bottom right, #06b6d4, #67e8f9)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                    className="font-bold"
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="w-full rounded-full h-3 overflow-hidden"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                  }}
                >
                  <div
                    className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-in-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div
                  className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}
                >
                  <div
                    className="h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #06b6d4, #67e8f9)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
