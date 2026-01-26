import { IoAdd } from "react-icons/io5"

const Profile = () => {
  return (
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
              <button className="flex flex-row items-center rounded-md text-white md:px-3 md:py-1 font-semibold md:text-xl px-2 py-1 gap-1 bg-[#c12df7] cursor-pointer">
                <IoAdd size={17} />
                New
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-6 mt-3 ">
            
          </div>
        </div>
  )
}

export default Profile