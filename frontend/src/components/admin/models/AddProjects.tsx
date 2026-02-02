import { useState, type ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { createProject } from "../../../features/projects/projectSlice";
import type { AppDispatch } from "../../../app/store";

type Props = {
  onClose: () => void;
};

const AddProject = ({ onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [liveDemo, setLiveDemo] = useState<string>("");
  const [description, setDescription] = useState<string>();
  const [techStack, setTechStack] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!title || !description || !status || !techStack || !name) {
      alert("please fill all field");
      return;
    }
    if (!image) {
      alert("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("techStack", techStack.join(","));
    if (status) formData.append("status", status);
    if (date) formData.append("date", date);
    if (github) formData.append("githubLink", github);
    if (liveDemo) formData.append("liveDemo", liveDemo);
    if (image) formData.append("image", image);
    dispatch(createProject(formData));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full mx-auto bg-black/70">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-xl p-4 max-h-[95vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Add Profile</p>
          <button onClick={onClose} className="cursor-pointer">
            <IoClose size={22} />
          </button>
        </div>
        <div className="flex items-start gap-2 p-4 justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="md:w-55 md:h-30 h-17 w-17 rounded-md bg-gray-400 overflow-hidden flex items-center justify-center">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm">No image</span>
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
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] pr-2">
          <div className="grid md:grid-cols-2 grid-cols-1 mt-2 md:gap-6 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold">
                Project Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="startYear" className="font-semibold">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-2 md:gap-6 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="startYear" className="font-semibold">
                Project Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold">
                Project status
              </label>
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              >
                <option value="complete" defaultValue={"complete"}>
                  Complete
                </option>
                <option value="inProgress">In-Progress</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <label htmlFor="techStack" className="font-semibold">
              Technologies
            </label>
            <input
              type="text"
              name="techStack"
              id="techStack"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value.split(","))}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <label htmlFor="description" className="font-semibold">
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
          <div className="flex flex-col mt-2 gap-1">
            <label htmlFor="github" className="font-semibold">
              <p className="flex items-center gap-2">
                Github link{" "}
                <span className="text-lg">
                  <FaGithub />
                </span>
              </p>
            </label>
            <input
              type="text"
              name="github"
              id="github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <label htmlFor="liveDemo" className="font-semibold">
              <p className="flex items-center gap-2">
                Live link{" "}
                <span className="text-lg">
                  <RiLiveFill />
                </span>
              </p>
            </label>
            <input
              type="text"
              name="liveDemo"
              id="liveDemo"
              value={liveDemo}
              onChange={(e) => setLiveDemo(e.target.value)}
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

export default AddProject;
