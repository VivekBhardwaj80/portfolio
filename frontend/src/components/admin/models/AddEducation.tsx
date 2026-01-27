import { useState } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  onClose: () => void;
};

const AddEducation = ({ onClose }: Props) => {
  const [level, setLevel] = useState("");
  const [institution, setInstitution] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [degree, setDegree] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [grade, setGrade] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isCurrentStudy, setIsCurrentStudy] = useState(true);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full mx-auto bg-black/70">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-xl p-4 max-h-[95vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Add Education</p>
          <button onClick={onClose} className="cursor-pointer">
            <IoClose size={22} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] pr-2 mt-3">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="level" className="font-semibold">
                Education Level
              </label>
              <select
                id="level"
                name="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded outline-none border-gray-300"
              >
                <option aria-readonly>Education Level</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="diploma">Diploma</option>
                <option value="graduation">Graduation</option>
                <option value="postGraduation">Post Graduation</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="institution" className="font-semibold">
                Institution Name
              </label>
              <input
                type="text"
                name="institution"
                id="institution"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="name" className="font-semibold">
              Field of study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="name" className="font-semibold">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
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
            {!isCurrentStudy && (
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
            onClick={() => setIsCurrentStudy((prev) => !prev)}
          >
            <div
              className={`md:w-14 md:h-6 w-12 h-5 rounded-full transition-colors duration-300 relative ${isCurrentStudy ? "bg-green-500" : "bg-gray-200"}`}
            >
              <div
                className={`bg-white absolute md:w-7 md:h-6 w-5 h-5 border border-gray-400 rounded-full transition-transform duration-300 ${isCurrentStudy ? "translate-x-7" : "translate-x-0"}`}
              />
            </div>
            <p>Currently Studying</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 mt-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="level" className="font-semibold">
                Grade/CGPA
              </label>
              <input
                type="number"
                id="grade"
                name="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded outline-none border-gray-300"
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="institution" className="font-semibold">
                Location
              </label>
              <input
                type="location"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
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

export default AddEducation;
