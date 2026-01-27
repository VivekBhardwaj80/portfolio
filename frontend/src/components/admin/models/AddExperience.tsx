import { useState } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  onClose: () => void;
};

const AddExperience = ({ onClose }: Props) => {
  const [companyName, setCompanyName] = useState<string>("");
  const [companyRole, setCompanyRole] = useState<string>("");
  const [startYear, setStartYear] = useState<string>("");
  const [endYear, setEndYear] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isCurrentWorking, setIsCurrentWorking] = useState<boolean>(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full mx-auto bg-black/70">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-xl p-4 max-h-[95vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Add Experience</p>
          <button onClick={onClose} className="cursor-pointer">
            <IoClose size={22} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] pr-2">
          
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="name" className="font-semibold">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="name" className="font-semibold">
              Role/Position
            </label>
            <input
              type="text"
              name="companyRole"
              id="companyRole"
              value={companyRole}
              onChange={(e) => setCompanyRole(e.target.value)}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          
          <div className="grid md:grid-cols-2 grid-cols-1 mt-2 md:gap-6 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="startYear" className="font-semibold">
                Start Year
              </label>
              <input
                type="date"
                name="startYear"
                id="startYear"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
            {!isCurrentWorking && (
              <div className="flex flex-col gap-1">
                <label htmlFor="endYear" className="font-semibold">
                  End Year
                </label>
                <input
                  type="date"
                  name="endYear"
                  id="endYear"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
                />
              </div>
            )}
          </div>
          <div
            className="mt-2 flex gap-2 items-center cursor-pointer"
            onClick={() => setIsCurrentWorking((prev) => !prev)}
          >
            <div
              className={`md:w-14 md:h-6 w-12 h-5 rounded-full transition-colors duration-300 relative ${isCurrentWorking ? "bg-green-500" : "bg-gray-200"}`}
            >
              <div
                className={`bg-white absolute md:w-7 md:h-6 w-5 h-5 border border-gray-400 rounded-full transition-transform duration-300 ${isCurrentWorking ? "translate-x-7" : "translate-x-0"}`}
              />
            </div>
            <p>Currently Working</p>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="name" className="font-semibold">
              Location
            </label>
            <input
              name="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="name" className="font-semibold">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-end gap-3 mt-4 pt-4 border-t">
          <button
            className="px-3 py-1 border rounded cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
