import { IoAdd } from "react-icons/io5";
import reactIcon from "../../assets/React-icon.png";
import { useState } from "react";

const Skills = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="md:text-3xl text-xl font-bold text-white mb-1">
            Skills
          </h1>
          <p className="text-white md:text-lg text-sm">
            List of all your portfolio Skills.
          </p>
        </div>
        <div>
          <button className="flex flex-row items-center rounded-md text-white md:px-4 md:py-2 font-semibold md:text-xl px-2 py-1 md:gap-2 gap-1 bg-[#c12df7] cursor-pointer">
            <IoAdd size={20} />
            New
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-3">
        <div
          className="bg-neutral-100 rounded-lg p-4"
          onClick={() => setIsClick(true)}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <p className="h-13 w-13 p-2 bg-indigo-200 rounded-md">
                <img src={reactIcon} alt="Icon-name" />
              </p>
              <p className="md:text-xl text-lg font-semibold">React</p>
            </div>
            <div>
              {isClick && (
                <p className="px-2 text-[rgb(130,125,64)] py-1 rounded-lg bg-[rgba(255,234,0,0.86)] lg:cursor-pointer shadow-lg">
                  Featured
                </p>
              )}
              {!isClick && (
                <div className="flex gap-2 text-white">
                  <p className="px-2 py-1 rounded-lg bg-indigo-500 lg:cursor-pointer shadow-lg">
                    edit
                  </p>
                  <p className="px-2 py-1 rounded-lg bg-red-500 lg:cursor-pointer shadow-lg">
                    delete
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold bg-neutral-400 w-fit px-3 py-1 rounded-md text-white">
              Frontend
            </p>
            <p>Range</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
