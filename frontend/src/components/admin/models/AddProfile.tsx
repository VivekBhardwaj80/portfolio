import { useState, type ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

type Props = {
  onClose: () => void;
};

const AddProfile = ({ onClose }: Props) => {
  const [name, setName] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [linkedIn, setLinkedIn] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
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
        <div className="flex items-start gap-2 p-4 ">
          <div className="w-1/4 flex flex-col items-center">
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
          <div className="w-3/4 flex flex-col gap-1">
            <div className="flex flex-col gap-0.5">
              <label htmlFor="name" className="font-semibold text-sm">
                Name
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
            <div className="flex flex-col gap-0.5">
              <label htmlFor="name" className="font-semibold text-sm">
                Headline
              </label>
              <input
                type="text"
                name="headline"
                id="headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] pr-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold">
              Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write something about yourself..."
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="name" className="font-semibold">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-2 md:gap-6 gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="startYear" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="startYear" className="font-semibold">
                Phone
              </label>
              <input
                type="number"
                name="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                className="border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-1 mt-2 items-center border md:px-2 md:py-1 px-1 py-0.5 rounded outline-none border-gray-300">
            <p className="md:px-2 md:py-1 px-1 py-0.5 rounded-full text-[#c12d7f]">
              <FaInstagram size={25} />
            </p>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="w-full border px-2 text-gray-500 py-1 border-gray-100 outline-gray-300 rounded"
            ></input>
          </div>
          <div className="flex gap-1 mt-2 items-center border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400">
            <p className="md:px-2 md:py-1 px-1 py-0.5 rounded-full text-[#3b15c5]">
              <FaFacebookF size={25} />
            </p>
            <input
              type="text"
              name="facebook"
              id="facebook"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              className="w-full border border-gray-100 outline-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mt-2 gap-1 border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400">
            <p className="md:px-2 md:py-1 px-1 py-0.5 rounded-full text-[#292F33]">
              <RiTwitterXFill size={25} />
            </p>
            <input
              type="text"
              name="twitter"
              id="twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="w-full border border-gray-100 outline-gray-300 rounded"
            />
          </div>
          <div className="flex items-center mt-2 gap-1 border md:px-2 md:py-1 px-1 py-0.5 rounded border-gray-300 outline-gray-400">
            <p className="text-[#0077B5] md:px-2 md:py-1 px-1 py-0.5 rounded-full">
              <FaLinkedinIn size={25} />
            </p>
            <input
              type="text"
              name="linkedIn"
              id="linkedIn"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
              className="w-full border border-gray-100 outline-gray-300 rounded"
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

export default AddProfile;
