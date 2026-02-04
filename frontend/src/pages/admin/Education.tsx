import { IoAdd } from "react-icons/io5";
import tag from "../../assets/bookmark.png";
import { MdDelete, MdDateRange, MdModeEditOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AddEducation from "../../components/admin/models/AddEducation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import {
  fetchEducation,
  removeEducation,
} from "../../features/education/educationSlice";
import EditEducation from "../../components/admin/models/editModel/EditEducation";

const Education = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { educationList, loading, error } = useSelector(
    (state: RootState) => state.education,
  );
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<any>(null);
  const handleDelete = async (id: string) => {
    await dispatch(removeEducation(id));
    dispatch(fetchEducation());
  };
  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);
  return (
    <>
      {showAdd && <AddEducation onClose={() => setShowAdd(false)} />}
      {showEdit && (
        <EditEducation
          onClose={() => setShowEdit(false)}
          education={selectedEducation}
        />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-end ">
          <div>
            <h1 className="md:text-3xl text-xl font-bold text-white mb-1">
              Education
            </h1>
            <p className="text-white md:text-lg text-sm">
              List of all your Education.
            </p>
          </div>
          <div>
            <button
              className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] cursor-pointer"
              onClick={() => setShowAdd(true)}
            >
              <IoAdd size={17} />
              New
            </button>
          </div>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {educationList.length === 0 ? (
          <p className="text-gray-400">No Education Added yet...</p>
        ) : (
          educationList.map((edu) => (
            <div
              key={edu._id}
              className="grid grid-cols-1 gap-4 md:gap-6 mt-3 "
            >
              <div className="bg-white md:p-4 p-2 rounded-lg overflow-hidden">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="relative md:flex md:items-center md:justify-center">
                      <img
                        src={tag}
                        alt="Bookmark"
                        className="md:w-30 md:h-15 h-8 w-12"
                      />
                      <p className="absolute lg:top-2 md:top-2 top-1.5 md:left-7 left-3.5 z-105 text-white text-center md:text-[12px] text-[6px] font-bold">
                        {edu.level}
                      </p>
                    </div>
                    <div className="flex justify-between flex-col">
                      <p className="font-bold lg:text-2xl md:text-xl text-[12px]">
                        {edu.degree || edu.fieldOfStudy}
                      </p>
                      <h4 className="md:text-lg text-[10px] text-gray-700 font-medium">
                        {edu.institutionName} - ({edu.institution})
                      </h4>
                    </div>
                  </div>
                  <div className="flex  md:gap-2 gap-1 text-white">
                    <p
                      className="md:px-2 md:py-1 px-1 py-0.5 md:text-xl text-sm md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-indigo-500 "
                      onClick={() => {
                        setSelectedEducation(edu);
                        setShowEdit(true);
                      }}
                    >
                      <MdModeEditOutline />
                    </p>
                    <p
                      className="md:px-2 md:py-1 px-1 py-0.5 md:text-xl text-sm md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-red-500"
                      onClick={() => handleDelete(edu._id!)}
                    >
                      <MdDelete />
                    </p>
                  </div>
                </div>
                <div className="md:md:ml-6 ml-2  flex justify-between items-center md:mt-3 mt-2">
                  <p className="lg:text-xl md:text-lg text-[12px] font-semibold">
                    {edu.degree}
                  </p>
                  <p className="lg:text-lg text-[10px] md:text-[16px] text-gray-500 lg:mr-14 md:mr-8">
                    {edu.grade || "N/A"} %
                  </p>
                </div>
                <div className="md:mt-3 mt-2 md:ml-6 ml-2 flex items-center  md:gap-2 gap-1 text-[12px] md:text-[16px]">
                  <MdDateRange className="text-indigo-300" />
                  <p className="text-gray-500 flex items-center">
                    {edu.startYear
                      ? new Date(edu.startYear).toLocaleDateString().slice(-4)
                      : "Start"}{" "}
                    -{" "}
                    {edu.endYear ? (
                      new Date(edu.endYear).toLocaleDateString().slice(-4)
                    ) : (
                      <p className="ml-1 px-3 py-1 bg-[#26e368] text-white text-center rounded-full">
                        {edu.isCurrent
                          ? "present"
                          : edu.endYear
                            ? new Date(edu.endYear).toLocaleString()
                            : "N/A"}
                      </p>
                    )}
                  </p>
                </div>
                <div className="lg:w-[97%]  md:my-3 my-2 md:ml-6 ml-2 border border-gray-300"></div>
                <div className="md:ml-6 ml-2 flex items-center md:gap-2 gap-1 text-gray-500 text-[10px] md:text-[16px]">
                  <FaLocationDot className="text-indigo-300" />{" "}
                  {edu.location}{" "}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Education;
