import { useState, type ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/store";
import { createSkill } from "../../../features/skill/skillSlice";

type Props = {
  onClose: () => void;
};

const AddSkill = ({ onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [isFeatured, setIsFeatured] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSave =()=> {
    if(!name || !level || !category){
      alert("please fill all the field")
      return
    }
    const formData = new FormData()
    formData.append("name",name)
    formData.append("category",category)
    formData.append("level",level)
    if(image){
      formData.append("image",image)
    }
    formData.append("isFeatured",String(isFeatured))
    dispatch(createSkill(formData))
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full mx-auto bg-black/70">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-xl p-4 max-h-[95vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Add Profile</p>
          <button onClick={onClose} className="cursor-pointer">
            <IoClose size={22} />
          </button>
        </div>
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
          <div className="w-3/4 flex flex-col gap-1">
            <div className="flex flex-col gap-0.5">
              <label htmlFor="name" className="font-semibold">
                Skill Name
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
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name" className="font-semibold">
                Skill Category
              </label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              >
                <option value="frontend" defaultValue={"frontend"}>Frontend</option>
                <option value="backend">Backend</option>
                <option value="language">Language</option>
                <option value="tool">Tool</option>
                <option value="authentication">Authentication</option>
                <option value="api">API's</option>
                <option value="realtime">Realtime</option>
                <option value="devops">Devops</option>
                <option value="animation">Animation</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] pr-2">
          <div className="grid md:grid-cols-2 grid-cols-1 mt-2 md:gap-6 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold">
                Skill level
              </label>
              <select
                name="level"
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              >
                <option value="beginner" defaultValue={"beginner"}>Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="startYear" className="font-semibold">
                Featured
              </label>
              <div
            className="mt-2 flex gap-2 items-center cursor-pointer"
            onClick={() => setIsFeatured((prev) => !prev)}
          >
            <div
              className={`md:w-14 md:h-6 w-12 h-5 rounded-full transition-colors duration-300 relative ${isFeatured ? "bg-green-500" : "bg-gray-200"}`}
            >
              <div
                className={`bg-white absolute md:w-7 md:h-6 w-5 h-5 border border-gray-400 rounded-full transition-transform duration-300 ${isFeatured ? "translate-x-7" : "translate-x-0"}`}
              />
            </div>
          </div>
            </div>
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
          <button className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer" 
          onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
