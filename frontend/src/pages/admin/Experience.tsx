import { IoAdd } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import company from "../../assets/search.png";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import AddExperience from "../../components/admin/models/AddExperience";

const Experience = () => {
  const [showAddExperience, setShowAddExperience] = useState(false)
  return (
    <>
    {showAddExperience && <AddExperience onClose={()=>setShowAddExperience(false)} />}
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
          <button className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] border-white border cursor-pointer">
            <IoAdd size={17} onClick={()=>setShowAddExperience(true)}/>
            New
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-white">
        <div className="flex flex-col gap-2 border p-3 shadow-2xl rounded-lg h-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center ">
              <img
                src={company}
                alt="Company logo"
                className="p-2 w-10 rounded-lg shadow-lg"
              />
              <p className="font-bold">Company</p>
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
          <p className="lg:text-xl md:text-lg font-bold">Senior Software Engineer</p>
          <p className="flex items-center gap-2 text-[16px]">
            <MdDateRange />
            Start - End/present
          </p>
          <p className="flex items-center gap-2 text-[16px] font-medium">
            <FaLocationDot />
            Location
          </p>
          <div className="grow">
            <p className="px-2 py-1 bg-[#7aff27a1] w-fit rounded-full">
              Currently working
            </p>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam cumque inventore, deserunt quidem praesentium tenetur?
              Ullam architecto et soluta distinctio repellendus mollitia
              quibusdam maxime. Ipsa sunt dolore aliquam cum?
            </p>
          </div>
          <div className="border border-gray-300 "></div>
          <div className="">
            <h3 className="text-[17px] font-semibold ">Description</h3>
            <p>Desc.</p>
          </div>
          <div className="flex flex-wrap w-full gap-1">
            <p className="font-medium">Technologies:</p>
            <p className="wrap-break-word overflow-hidden">
              java
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Experience;
