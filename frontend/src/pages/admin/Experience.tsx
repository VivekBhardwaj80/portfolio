import { IoAdd } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AddExperience from "../../components/admin/models/AddExperience";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import {
  fetchExperience,
  removeOneExperience,
} from "../../features/exprience/exprienceSlice";
import EditExperience from "../../components/admin/models/editModel/EditExperience";

const Experience = () => {
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [showEditExperience, setShowEditExperience] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>();
  const dispatch = useDispatch<AppDispatch>();
  const { experienceList, error, loading } = useSelector(
    (state: RootState) => state.experience,
  );

  const handleDelete = async (id: string) => {
    await dispatch(removeOneExperience(id));
    dispatch(fetchExperience());
  };

  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);

  return (
    <>
      {showAddExperience && (
        <AddExperience onClose={() => setShowAddExperience(false)} />
      )}
      {showEditExperience && (
        <EditExperience
          onClose={() => setShowEditExperience(false)}
          experience={selectedExperience}
        />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-end ">
          <div>
            <h1 className="md:text-3xl text-xl font-bold text-white mb-1">
              Experience
            </h1>
            <p className="text-white md:text-lg text-sm">
              My Professional journey and career history.
            </p>
          </div>
          <div>
            <button
              className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] border-white border cursor-pointer"
              onClick={() => setShowAddExperience(true)}
            >
              <IoAdd size={17} />
              New
            </button>
          </div>
        </div>
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {experienceList.length === 0 ? (
          <p className="text-gray-400">Don't have Experience Yet...</p>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-white">
            {experienceList.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border p-3 shadow-2xl rounded-lg h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    {experience.logo && (
                      <>
                        <img
                          src={experience.logo}
                          alt="logo"
                          className="p-2 w-10 rounded-lg shadow-lg"
                        />
                        <p className="font-bold">{experience.company}</p>{" "}
                      </>
                    )}
                  </div>
                  <div className="flex justify-end md:gap-2 gap-1 text-white">
                    <button
                      className="md:px-2 md:py-1 px-1 py-0.5 md:text-xl text-sm md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-indigo-500"
                      onClick={() => {
                        setSelectedExperience(experience);
                        setShowEditExperience(true);
                      }}
                    >
                      <MdModeEditOutline />
                    </button>
                    <p
                      className="md:px-2 md:py-1 px-1 py-0.5 md:text-xl text-sm md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-red-500"
                      onClick={() => handleDelete(experience._id!)}
                    >
                      <MdDelete />
                    </p>
                  </div>
                </div>
                <p className="lg:text-xl md:text-lg font-bold">
                  {experience.role}
                </p>
                <p className="flex items-center gap-2 text-[16px]">
                  <MdDateRange />
                  {experience.startDate.slice(0, 4)} -{" "}
                  {experience.endDate
                    ? experience.endDate.slice(0, 4)
                    : "Present"}
                </p>
                <p className="flex items-center gap-2 text-[16px] font-medium">
                  <FaLocationDot />
                  {experience.location}
                </p>
                {experience.isCurrent && (
                  <div className="grow">
                    <p className="px-2 py-1 bg-[#7aff27a1] w-fit rounded-full">
                      Currently working
                    </p>
                    <p className="">{experience.working}</p>
                  </div>
                )}
                <div className="border border-gray-300 "></div>
                <div className="">
                  <h3 className="text-[17px] font-semibold ">Description</h3>
                  <p>{experience.description}</p>
                </div>
                <div className="flex flex-wrap w-full gap-1">
                  <p className="font-medium">Technologies:</p>
                  <p className="wrap-break-word overflow-hidden">
                    {experience.technologies}
                  </p>
                </div>
                <p></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Experience;
