import { LuFolderOpen } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { IoMdEye } from "react-icons/io";
import { MessageSquareMore } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "JAN", sales: 9000 },
  { name: "FEB", sales: 1000 },
  { name: "MARCH", sales: 7000 },
  { name: "APRIL", sales: 2000 },
  { name: "MAY", sales: 6000 },
  { name: "JUNE", sales: 8000 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Welcome admin</h1>
        <p className="text-white">
          Here's an overview of your portfolio stats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Visitors Card */}
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Total Projects</h3>
            <div className="h-10 w-10 rounded-full bg-indigo-400 flex items-center justify-center">
              <LuFolderOpen className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">1,234</p>
          <p className="text-sm text-green-600 font-medium">
            +12% from last month
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Total Skills</h3>
            <div className="h-10 w-10 rounded-full bg-indigo-400 flex items-center justify-center">
              <GrTechnology className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">1,234</p>
          <p className="text-sm text-green-600 font-medium">
            +12% from last month
          </p>
        </div>

        {/* Projects Card */}
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">View this month</h3>
            <div className="h-10 w-10 rounded-full bg-indigo-400 flex items-center justify-center">
              <IoMdEye className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">12</p>
          <p className="text-sm text-gray-600">3 in progress</p>
        </div>

        {/* Messages Card */}
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Feedback</h3>
            <div className="h-10 w-10 rounded-full bg-indigo-400 flex items-center justify-center">
              <MessageSquareMore className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">24</p>
          <p className="text-sm text-gray-600">5 unread</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-6">
        <div className="flex-[2] bg-white rounded-lg overflow-hidden ">
          <div className="flex w-full bg-[#eacbff] justify-between px-4 py-2 items-center">
            <h3 className="text-neutral-600 font-bold text-[17px] ">
              Recent Projects
            </h3>
            <button className="text-gray-600 text-sm px-3 py-1 bg-[#c381ec] rounded-full hover:bg-white cursor-pointer hover:font-semibold transition ">
              View All
            </button>
          </div>
          <div className="py-4 px-4 grid grid-cols-3 gap-6">
            <div className="flex flex-col items-start">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/001/948/855/small/flat-design-abstract-background-free-vector.jpg"
                alt="project-image"
                className="w-full h-[100px] object-cover"
              />
              <p className="text-semibold text-[17px] text-gray-500">
                project name
              </p>
              <button className="py-1 px-3 text-white text-center bg-indigo-400 rounded-full">
                project-see
              </button>
            </div>
            <div className="bg-red-400"></div>
            <div className="bg-red-400">a</div>
          </div>
        </div>
        <div className="flex-1 bg-amber-200 rounded-lg"></div>
      </div>
      <div className="mt-3 w-full h-60 bg-white rounded-lg py-6 px-4">
        <h3 className="text-neutral-600 font-bold text-[17px] mb-2">
          Portfolio View
        </h3>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#e12afb"
              fill="#9810fa "
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
