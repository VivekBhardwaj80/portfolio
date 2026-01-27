import { IoAdd } from "react-icons/io5";
import user from "../../assets/user-profile.png";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import AddProfile from "../../components/admin/models/AddProfile";
import { useState } from "react";

const Profile = () => {
  const [showAddProfile, setShowAddProfile] = useState(false);
  return (
    <>
      {showAddProfile && (
        <AddProfile onClose={() => setShowAddProfile(false)} />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-end ">
          <div>
            <h1 className="md:text-3xl text-xl font-bold text-white mb-1">
              Profile
            </h1>
            <p className="text-white md:text-lg text-sm">
              Proof of your abilities.
            </p>
          </div>
          <div>
            <button
              className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] border-white border cursor-pointer"
              onClick={() => setShowAddProfile(true)}
            >
              <IoAdd size={17} />
              New
            </button>
          </div>
        </div>
        <div className=" rounded-lg p-3 md:mt-3">
          <div className="flex lg:gap-6 md:gap-4 gap-2">
            <img
              src={user}
              alt="User Profile"
              className="md:w-20 md:h-20 h-15 w-15 border-white border-2 rounded-full"
            />
            <div className="flex flex-col md:gap-2 gap-1">
              <h2 className="font-bold md:text-4xl text-2xl text-white">
                Vivek Sharma
              </h2>
              <div className="flex lg:gap-3 md:gap-2 gap-1 md:text-xl text-sm flex-wrap items-center font-medium text-white">
                <p>Developer</p>
                <GoDotFill className="text-sm font-normal" />
                <p>Role</p>
                <GoDotFill className="text-sm font-normal" />
                <p>what is that project</p>
              </div>
              <div className="flex gap-3 md:text-xl text-sm mt-1 md:mt-0">
                <a
                  className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                  href="https://github.com/VivekBhardwaj80"
                  target="__blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                  href="https://www.linkedin.com/in/vivek-sharma-1076a224a/"
                  target="__blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                  href="https://x.com/thisSideVivek"
                  target="__blank"
                >
                  <BsTwitterX />
                </a>
                <a
                  className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                  href=""
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 mt-3 ">
            <p className="h-fit md:px-5 md:py-2 px-3 py-1 bg-[#c12df7] shadow-lg border-white border text-center lg:text-2xl md:text-xl font-semibold text-white rounded-xl">
              12 Projects
            </p>
            <p className="h-fit md:px-5 md:py-2 px-3 py-1 bg-[#c12df7] shadow-lg border-white border text-center lg:text-2xl md:text-xl font-semibold text-white rounded-xl">
              12 Client
            </p>
            <p className="h-fit md:px-5 md:py-2 px-3 py-1 bg-[#c12df7] shadow-lg border-white border text-center lg:text-2xl md:text-xl font-semibold text-white rounded-xl">
              0 Experience
            </p>
            <p className="h-fit md:px-5 md:py-2 px-3 py-1 bg-[#c12df7] shadow-lg border-white border text-center lg:text-2xl md:text-xl font-semibold text-white rounded-xl">
              Viewer
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-4 gap-3 md:my-5 my-3 ">
            <div className="bg-[#c12df7] border-white border shadow-lg p-3 text-white rounded-lg">
              <h3 className="md:text-xl text-lg font-semibold md:mb-2">
                About Me
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                tempora doloribus voluptatem omnis nulla enim accusantium
                explicabo vel amet, exercitationem, itaque alias cum quia eum,
                nesciunt libero sequi animi incidunt!
              </p>
            </div>
            <div className="bg-[#c12df7] border-white border shadow-lg p-3 text-white rounded-lg flex flex-col flex-wrap">
              <h3 className="md:text-xl text-lg font-semibold md:mb-2 mb-1">
                Skills
              </h3>
              <div className="flex gap-x-3 gap-y-2 flex-wrap h-fit font-medium">
                <p className="md:px-3 md:py-2 px-2 py-1 bg-[#561a6c] w-fit rounded-lg shadow-xl">
                  React
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white">Recent Project</h3>
          <div className="py-4 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-3 items-center grow ">
            <div className="flex flex-col items-start relative lg:w-75 md:w-55 lg:h-40 md:h-30 rounded-lg">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/001/948/855/small/flat-design-abstract-background-free-vector.jpg"
                alt="project-image"
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute bottom-1 px-4">
                <p className="font-semibold text-[18px] text-gray-400">
                  project name
                </p>
                <p className=" font-medium text-gray-600">Based</p>
              </div>
            </div>
            <div className="flex flex-col items-start relative lg:w-75 md:w-55 lg:h-40 md:h-30 bg-amber-200 rounded-lg">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/001/948/855/small/flat-design-abstract-background-free-vector.jpg"
                alt="project-image"
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute bottom-1 px-4">
                <p className="font-semibold text-[18px] text-gray-400">
                  project name
                </p>
                <p className=" font-medium text-gray-600">Based</p>
              </div>
            </div>
            <div className="flex flex-col items-start relative lg:w-75 md:w-55 lg:h-40 md:h-30 bg-amber-200 rounded-lg">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/001/948/855/small/flat-design-abstract-background-free-vector.jpg"
                alt="project-image"
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute bottom-1 px-4">
                <p className="font-semibold text-[18px] text-gray-400">
                  project name
                </p>
                <p className=" font-medium text-gray-600">Based</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
