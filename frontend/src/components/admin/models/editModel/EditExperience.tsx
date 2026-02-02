import { useState, type ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../app/store";
import {
  editExperience,
  fetchExperience,
} from "../../../../features/exprience/exprienceSlice";

type Props = {
  onClose: () => void;
  experience: any;
};

const EditExperience = ({ onClose, experience }: Props) => {
  const [companyName, setCompanyName] = useState<string>(
    experience.company || "",
  );
  const [companyRole, setCompanyRole] = useState<string>(experience.role || "");
  const [startYear, setStartYear] = useState<string>(
    experience.startDate ? experience.startDate.slice(0, 10) : "",
  );
  const [endYear, setEndYear] = useState<string>(
    experience.endDate ? experience.endDate.slice(0, 10) : "",
  );
  const [location, setLocation] = useState<string>(experience.location || "");
  const [description, setDescription] = useState<string>(
    experience.description || "",
  );
  const [working, setWorking] = useState<string>(experience.working || "");
  const [technologies, setTechnologies] = useState<string>(
    experience.technologies || "",
  );
  const [isCurrentWorking, setIsCurrentWorking] = useState<boolean>(
    experience.isCurrent || false,
  );

  const [image, setImage] = useState<File | null>(experience.image || "");
  const [preview, setPreview] = useState<string | null>(
    experience.image || null,
  );

  const dispatch = useDispatch<AppDispatch>();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSave = async () => {
    if (!experience?._id) {
      alert("No experience selected to edit");
      onClose()
      return;
    }
    const payload = {
      company: companyName,
      role: companyRole,
      startDate: startYear,
      endDate: endYear,
      location,
      working,
      description,
      isCurrent: isCurrentWorking,
      technologies,
      image,
    };
    await dispatch(editExperience({ id: experience._id, data: payload }));
    await dispatch(fetchExperience());
    onClose();
  };
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
          <div className="flex items-start gap-2 p-4">
            <div className=" w-1/4 flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                <div className="md:w-24 md:h-24 h-17 w-17 rounded-full bg-gray-400 overflow-hidden flex items-center justify-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">No Logo</span>
                  )}
                </div>
                <label
                  htmlFor="image"
                  className="mt-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm md:px-4 md:py-1.5 px-3 py-1 rounded transition"
                >
                  Upload
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="w-3/4 flex flex-col gap-1">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="companyName" className="font-semibold">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
                  placeholder="Write your company name..."
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="companyRole" className="font-semibold">
                  Company Role
                </label>
                <input
                  type="text"
                  name="companyRole"
                  id="companyRole"
                  value={companyRole}
                  onChange={(e) => setCompanyRole(e.target.value)}
                  className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
                  placeholder="Write your Role..."
                />
              </div>
            </div>
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
          {isCurrentWorking && (
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="working" className="font-semibold">
                working
              </label>
              <textarea
                name="working"
                id="working"
                value={working}
                onChange={(e) => setWorking(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
                placeholder="Write about your work..."
              />
            </div>
          )}
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
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="technologies" className="font-semibold">
              Technologies
            </label>
            <input
              type="text"
              name="technologies"
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
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
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExperience;
