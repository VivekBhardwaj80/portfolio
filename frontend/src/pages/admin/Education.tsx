import { IoAdd } from "react-icons/io5";
import tag from "../../assets/bookmark.png";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import AddEducation from "../../components/admin/models/AddEducation";

const Education = () => {
  const [showAdd, setShowAdd] = useState(false)
  return (
    <>
    {showAdd && (<AddEducation onClose={() => setShowAdd(false)} />)}
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
      <div className="grid grid-cols-1 gap-4 md:gap-6 mt-3 ">
        <div className="bg-white md:p-4 p-2 rounded-lg overflow-hidden">
          <div className="flex justify-between">
            <div className="flex">
              <div className="relative md:flex md:items-center md:justify-center">
                <img
                  src={tag}
                  alt="Bookmark"
                  className="md:w-30 md:h-15 h-8 w-12"
                />
                <p className="absolute lg:top-2 md:top-2 top-1.5 md:left-7.5 left-3.5 z-105 text-white text-center md:text-[18px] text-[6px] font-bold">
                  Master
                </p>
              </div>
              <div className="flex justify-between flex-col">
                <p className="font-bold lg:text-2xl md:text-xl text-[12px]">
                  MCA in Computer Application
                </p>
                <h4 className="md:text-lg text-[10px] text-gray-700 font-medium">
                  Future University Bareilly
                </h4>
              </div>
            </div>
            <div className="flex  md:gap-2 gap-1 text-white">
              <p className="md:px-2 md:py-1 px-1 py-0.5 md:text-xl text-sm md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-indigo-500">
                <MdModeEditOutline />
              </p>
              <p className="md:px-2 md:py-1 px-1 py-0.5 md:text-xl text-sm md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-red-500">
                <MdDelete />
              </p>
            </div>
          </div>
          <div className="md:md:ml-6 ml-2  flex justify-between items-center md:mt-3 mt-2">
            <p className="lg:text-xl md:text-lg text-[12px] font-semibold">
              MCA in Computer
            </p>
            <p className="lg:text-lg text-[10px] md:text-[16px] text-gray-500 lg:mr-14 md:mr-8">
              CGPA/Percentage/Present %
            </p>
          </div>
          <div className="md:mt-3 mt-2 md:ml-6 ml-2 flex items-center  md:gap-2 gap-1 text-[12px] md:text-[16px]">
            <MdDateRange className="text-indigo-300" />
            <p className="text-gray-500 ">
              StartDate - <span>EndDate/Present</span>
            </p>
          </div>
          <div className="lg:w-[97%]  md:my-3 my-2 md:ml-6 ml-2 border border-gray-300"></div>
          <div className="md:ml-6 ml-2 flex items-center md:gap-2 gap-1 text-gray-500 text-[10px] md:text-[16px]">
            <FaLocationDot className="text-indigo-300" /> Location{" "}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Education;
