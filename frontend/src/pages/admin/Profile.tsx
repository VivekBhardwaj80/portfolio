import { IoAdd } from "react-icons/io5";
import user from "../../assets/user.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import AddProfile from "../../components/admin/models/AddProfile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { fetchProfile } from "../../features/profile/profileSlice";
import { Edit } from "lucide-react";
import EditProfile from "../../components/admin/models/editModel/EditProfile";

const Profile = () => {
  const [showAddProfile, setShowAddProfile] = useState<boolean>(false);
  const [showEditProfile, setShowEditProfile] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {
    profileList,
    recentProjects,
    skill,
    error,
    loading,
    experience
  } = useSelector((state: RootState) => state.profile);
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  return (
    <>
      {showAddProfile && (
        <AddProfile onClose={() => setShowAddProfile(false)} />
      )}
      {showEditProfile && (
        <EditProfile onClose={() => setShowEditProfile(false)} profile={selectedProfile} />
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
          <div className="flex gap-2">
            <button
              className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] border-white border cursor-pointer"
              onClick={() => setShowAddProfile(true)}
            >
              <IoAdd size={17} />
              New
            </button>
            {profileList.map((profile,index)=>(
            <button 
            key={index}
              className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] border-white border cursor-pointer"
              onClick={() => {setShowEditProfile(true);setSelectedProfile(profile)}}
            >
              <Edit size={17} />
              Edit
            </button>))}
          </div>
        </div>
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {profileList.length === 0 ? (
          <p className="text-gray-400">No Profile Added yet...</p>
        ) : (
          profileList.map((profile, index) => (
            <div key={index} className=" rounded-lg p-3 md:mt-3">
              <div className="flex lg:gap-6 md:gap-4 gap-2">
                {profile ? (
                  <img
                    src={String(profile.profileImage) || user}
                    alt={profile.name}
                    className="md:w-20 md:h-20 h-15 w-15 border-white border-2 rounded-full"
                  />
                ) : (
                  <img
                    src={user}
                    alt="User Profile"
                    className="md:w-20 md:h-20 h-15 w-15 border-white border-2 rounded-full"
                  />
                )}
                <div className="flex flex-col md:gap-2 gap-1">
                  <h2 className="font-bold md:text-4xl text-2xl text-white">
                    {profile.name || "User"}
                  </h2>
                  <div className="flex lg:gap-3 md:gap-2 gap-1 md:text-xl text-sm flex-wrap items-center font-medium text-white">
                    <p>{profile.headline || "N/A"}</p>
                  </div>
                  {profile.socialLinks ? (
                    <div className="flex gap-3 md:text-xl text-sm mt-1 md:mt-0">
                      {profile.socialLinks.github ? (
                        <a
                          className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                          href={profile.socialLinks.github}
                          target="__blank"
                        >
                          <FaGithub />
                        </a>
                      ) : (
                        ""
                      )}
                      {profile.socialLinks.linkedIn ? (
                        <a
                          className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                          href="https://www.linkedin.com/in/vivek-sharma-1076a224a/"
                          target="__blank"
                        >
                          <FaLinkedin />
                        </a>
                      ) : (
                        ""
                      )}
                      {profile.socialLinks.X ? (
                        <a
                          className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                          href="https://x.com/thisSideVivek"
                          target="__blank"
                        >
                          <BsTwitterX />
                        </a>
                      ) : (
                        ""
                      )}
                      {profile.socialLinks.instagram ? (
                        <a
                          className="px-2 py-2 bg-[#c12df7] border-white border text-white rounded-full"
                          href=""
                        >
                          <AiFillInstagram />
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 mt-3 ">
                <p className="h-fit flex flex-col items-center md:px-5 md:py-2 px-3 py-1 bg-[#c12df7] shadow-lg border-white border text-center lg:text-2xl md:text-xl font-semibold text-white rounded-xl">
                  {recentProjects.length === 0 ? 0 : recentProjects.length}{" "}
                  project
                </p>
                <p className="h-fit md:px-5 md:py-2 px-3 py-1 bg-[#c12df7] shadow-lg border-white border text-center lg:text-2xl md:text-xl font-semibold text-white rounded-xl">
                  {experience} Experience
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
                  <p className="text-sm">{profile.bio}</p>
                </div>
                <div
                  key={index}
                  className="bg-[#c12df7] border-white border shadow-lg p-3 text-white rounded-lg flex flex-col flex-wrap"
                >
                  <h3 className="md:text-xl text-lg font-semibold md:mb-2 mb-1">
                    Skills
                  </h3>
                  <div className="flex gap-x-3 gap-y-2 flex-wrap h-fit font-medium">
                    {skill.length === 0
                      ? ""
                      : skill.map((sk, index) => (
                          <p
                            key={index}
                            className="md:px-3 md:py-2 px-2 py-1 bg-[#561a6c] w-fit rounded-lg shadow-xl"
                          >
                            {sk.name}
                          </p>
                        ))}
                  </div>
                </div>
              </div>
              {recentProjects.length === 0
                ? ""
                : recentProjects.map((project, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-medium text-white">
                        Recent Project
                      </h3>
                      <div className="py-4 px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-3 items-center grow">
                        <div
                          key={index}
                          className="flex flex-col items-start relative lg:w-75 md:w-55 lg:h-40 md:h-30 rounded-lg bg-white"
                        >
                          <img
                            src={project.imageUrl}
                            alt={project.name}
                            className="w-full h-full rounded-lg object-cover"
                          />
                          <div className="absolute bottom-1 px-4">
                            <p className="font-semibold text-[18px] text-[#ab10d6]">
                              {project.name}
                            </p>
                            <p className=" font-medium text-gray-600">
                              {project.status}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Profile;
