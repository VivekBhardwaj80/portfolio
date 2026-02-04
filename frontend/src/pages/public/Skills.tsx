import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { fetchSkill } from "../../features/skill/skillSlice";

type PublicRoutesProps = {
  darkMode: boolean;
};

const Skills = ({ darkMode }: PublicRoutesProps) => {
  const [loadSkill, setLoadSkill] = useState<number>(6);
  const dispatch = useDispatch<AppDispatch>();
  const { skillList, loading } = useSelector(
    (state: RootState) => state.skill,
  );
  useEffect(() => {
    dispatch(fetchSkill());
  }, [dispatch]);

  const colors = [
    {
      color: "from-cyan-500 to-blue-500",
    },
    {
      color: "from-[#136163] to-[#1a98a6]",
    },
    {
      color: "from-cyan-500 to-cyan-600",
    },
    {
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
            A curated set of technologies and tools I use to build modern,
            scalable applications. This includes frontend and backend
            development, APIs, databases, cloud platforms, and supporting
            tools—focused on performance, clean architecture, and real-world
            problem solving.
          </p>
        </div>
        {loading && (
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text">
            Loading...
          </p>
        )}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skillList.slice(0, loadSkill).map((skill, index) => (
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
                    className={`h-full rounded-full bg-linear-to-r ${
                      colors[index % colors.length].color
                    } transition-all duration-1000 ease-in-out`}
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
        <div className="text-center mt-10">
          {loadSkill < skillList.length && (
            <button
              onClick={() => setLoadSkill(skillList.length)}
              className={`w-full sm:w-auto border-2 border-cyan-600 inline-flex items-center justify-center py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] cursor-pointer rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform ${darkMode ? "text-white bg-cyan-500/10" : "text-gray-800 bg-cyan-500/90"}`}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span>Load More</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
