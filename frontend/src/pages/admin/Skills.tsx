import { IoAdd } from "react-icons/io5";
import { useEffect, useState } from "react";
import AddSkill from "../../components/admin/models/AddSkill";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { fetchSkill, removeOneSkill } from "../../features/skill/skillSlice";
import EditSkill from "../../components/admin/models/editModel/EditSkill";

const Skills = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { skillList, error, loading } = useSelector(
    (state: RootState) => state.skill,
  );
  const [showAddSkill, setShowSkill] = useState<boolean>(false);
  const [showEditSkill, setShowEditSkill] = useState<boolean>(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const handleDelete = async (id: string) => {
    await dispatch(removeOneSkill(id));
    dispatch(fetchSkill());
  };

  useEffect(() => {
    dispatch(fetchSkill()); 
  }, [dispatch]);

  return (
    <>
      {showAddSkill && <AddSkill onClose={() => setShowSkill(false)} />}
        {showEditSkill && <EditSkill onClose={()=>setShowEditSkill(false)} skill={selectedSkill} />}
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
            <button
              className="flex flex-row items-center rounded-md text-white md:px-4 md:py-2 font-semibold md:text-xl px-2 py-1 md:gap-2 gap-1 bg-[#c12df7] cursor-pointer"
              onClick={() => setShowSkill(true)}
            >
              <IoAdd size={20} />
              New
            </button>
          </div>
        </div>
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {skillList.length === 0 ? (
          <p className="text-gray-400">Not Skill added yet..</p>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-3"
          >
          {skillList.map((skill, index) => (
              <div key={index} className="bg-neutral-100 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <p className="h-13 w-13 p-2 bg-indigo-200 rounded-md">
                      <img src={skill.icon?skill.icon :""} alt={skill.name} />
                    </p>
                    <p className="md:text-xl text-lg font-semibold">
                      {skill.name}
                    </p>
                  </div>
                  {skill.isFeatured && (
                    <p className="px-2 text-[rgb(130,125,64)] py-1 rounded-lg bg-[rgba(255,234,0,0.86)] lg:cursor-pointer shadow-lg">
                      Featured
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <p className="font-bold bg-indigo-400 w-fit px-3 py-1 rounded-md text-white">
                    {skill.level}
                  </p>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="font-bold bg-gray-400 w-fit px-3 py-1 rounded-md text-white">
                    {skill.category}
                  </p>
                  <div className="flex gap-2 text-white">
                    <button className="px-2 py-1 rounded-lg bg-indigo-500 lg:cursor-pointer shadow-lg"
                    onClick={()=>{setSelectedSkill(skill);
                      setShowEditSkill(true);}
                    
                    }
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 rounded-lg bg-red-500 lg:cursor-pointer shadow-lg"
                      onClick={() => handleDelete(skill._id!)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>))}
            </div>
        )}
      </div>
    </>
  );
};

export default Skills;
