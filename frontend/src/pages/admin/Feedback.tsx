import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Feedback = () => {
  const [isRead] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end ">
        <div>
          <h1 className="md:text-3xl text-xl font-bold text-white mb-1">
            Feedback
          </h1>
          <p className="text-white md:text-lg text-sm">Check Your feedback.</p>
        </div>
        <div>
          <button className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] border-white border cursor-pointer">
            <IoAdd size={17} />
            New
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-white">
        <div className="flex flex-col gap-2 border p-3 shadow-2xl rounded-lg h-full">
          <p className="bg-indigo-500 w-fit md:px-2 px-3 md:text-[16px] text-sm py-1 rounded-full">
            Feedback Type
          </p>
          <p className="font-bold">
            Name: <span className="font-normal">UserName</span>
          </p>
          <p className="font-bold">
            Email: <span className="font-normal">Email</span>
          </p>
          <p className="font-bold">
            Company: <span className="font-normal">company</span>
          </p>
          <p className="font-bold">
            Role: <span className="font-normal">role</span>
          </p>
          <p className="font-bold">
            Message: <span className="font-normal">message</span>
          </p>
          <div className="flex items-center justify-between">
            {isRead && (
              <div className="flex items-center gap-2">
                <FaCheck className="p-1 w-5 h-5 border border-white rounded-full" />{" "}
                Read
              </div>
            )}
            <div className="flex items-center gap-2 mt-1">
              <p className="md:px-2 md:py-1 px-1 py-0.5 md:text-[15px] text-sm md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-[#c207dfa8]">
                Mark as Unread
              </p>
              <p className="md:px-2 md:py-1 px-1 py-0.5 md:text-[16px] text-[16px] md:rounded-lg rounded-md  lg:cursor-pointer shadow-lg h-fit bg-red-500">
                <MdDelete />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
