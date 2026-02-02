import { IoAdd } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { useEffect, useState } from "react";
import AddProject from "../../components/admin/models/AddProjects";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { fetchProject } from "../../features/projects/projectSlice";

const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projectList, error, loading } = useSelector(
    (state: RootState) => state.project,
  );
  const [showAddProject, setShowAddProject] = useState(false);

  useEffect(() => {
    dispatch(fetchProject());
  }, [dispatch]);

  return (
    <>
      {showAddProject && (
        <AddProject onClose={() => setShowAddProject(false)} />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="md:text-3xl text-xl font-bold text-white mb-1">
              Projects
            </h1>
            <p className="text-white md:text-lg text-sm">
              List of all your portfolio projects.
            </p>
          </div>
          <div>
            <button
              className="flex flex-row items-center rounded-md text-white md:px-4 md:py-2 font-semibold md:text-xl px-2 py-1 md:gap-2 gap-1 bg-[#c12df7] cursor-pointer"
              onClick={() => setShowAddProject(true)}
            >
              <IoAdd size={20} />
              New
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start flex-wrap md:items-center gap-3">
          <div className="flex items-center md:gap-2 gap-1 bg-neutral-200 px-2 py-1 rounded-md">
            <label
              htmlFor="filter"
              className="text-neutral-600 text-sm md:text-lg font-medium flex items-center gap-1 md:px-2"
            >
              <FaFilter className="text-indigo-500" /> Filter By:
            </label>
            <select
              id="filter"
              className="md:px-3 md:py-2 px-1 py-0.5 rounded-md border border-indigo-400 focus:outline-none "
            >
              <option value="all">All Projects</option>
              <option value="complete">Complete</option>
              <option value="in-progress">In-Progress</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
          <div className="flex items-center md:gap-2 gap-1 bg-neutral-200 px-2 py-1 rounded-md">
            <label
              htmlFor="sort"
              className="text-neutral-600 text-sm md:text-lg font-medium flex items-center gap-1 md:px-2"
            >
              Sort By:
            </label>
            <select
              id="sort"
              className="md:px-3 md:py-2 px-1 py-0.5 rounded-md border border-indigo-400 focus:outline-none"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="Size">Size</option>
            </select>
          </div>
          <div className="flex items-center md:gap-2 gap-1 bg-neutral-200 px-2 py-1 rounded-md">
            <label
              htmlFor="choose"
              className="text-neutral-600 text-sm md:text-lg font-medium flex items-center gap-1 md:px-2"
            >
              Project
            </label>
            <select
              id="choose"
              className="md:px-3 md:py-2 px-1 py-0.5 rounded-md border border-indigo-400 focus:outline-none"
            >
              <option value="all">Web Design</option>
              <option value="complete">Frontend</option>
              <option value="in-progress">Backend</option>
              <option value="upcoming">MERN</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
          {loading && <p className="text-gray-400">Loading projects...</p>}
{error && <p className="text-red-400">{error}</p>}
          {projectList.length === 0 ? (
            <p className="text-gray-500">Project not added yet...</p>
          ) : (
            projectList.map((project, index) => (
              <div
                key={index}
                className="p-4 bg-neutral-100 rounded-lg flex flex-col justify-between"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="lg:h-27 md:h-20 h-22   w-full rounded-lg shadow-lg object-cover"
                />
                <p className="text-gray-800 md:text-xl text-sm font-medium md:mt-2 md:mb-2 mt-1 mb-1">
                  {project.name}
                </p>
                <span className="px-3 py-1 bg-[rgba(72,12,225,0.82)] w-fit rounded-full text-neutral-200 font-medium md:text-xl text-sm md:mb-2 mb-1">
                  {project.title}
                </span>
                <div className="flex justify-between items-center md:text-[16px] text-sm gap-2 text-gray-600 ">
                  <div className="flex items-center gap-1"><MdOutlineDateRange />
                  {project.date?.slice(0,4)}</div>
                  <p className={`md:text-[16px] text-sm font-semibold ${project.status === "inProgress" ?"text-yellow-500" : project.status === "complete" ? "text-green-500":"text-blue-500"} c`}>{project.status}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
