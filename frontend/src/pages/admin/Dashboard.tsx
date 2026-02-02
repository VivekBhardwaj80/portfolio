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
  Pie,
  PieChart,
  Cell,
} from "recharts";
import type { PieLabelRenderProps } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchDashboard } from "../../features/dashboard/dashboardSlice";

interface IPIEDATA {
  name: string;
  value: number;
  percentage?: number;
}

interface IData {
  name: string;
  sales: number;
}

const data: IData[] = [
  { name: "JAN", sales: 9000 },
  { name: "FEB", sales: 1000 },
  { name: "MARCH", sales: 7000 },
  { name: "APRIL", sales: 2000 },
  { name: "MAY", sales: 6000 },
  { name: "JUNE", sales: 8000 },
];

const renderCustomizedLabel = (props: PieLabelRenderProps) => {
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
  } = props;

  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={17}
      fontWeight="600"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ["#911ceb", "#c381ec", "#e41ceb", "#1ca6eb"];
interface IRecentProject {
  imageUrl: string;
  name: string;
  status: string;
}

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { dashboardList, error, loading } = useSelector(
    (state: RootState) => state.dashboard,
  );

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  const { totals, recentProjects, skillDistribution } = dashboardList || {};
  console.log("Dashboard data:", dashboardList);
  console.log("Skill Distribution:", skillDistribution);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Welcome admin</h1>
        <p className="text-white">
          Here's an overview of your portfolio stats.
        </p>
      </div>
      {error && <p className="text-red-400">{error}</p>}
      {loading && <p className="text-gray-400">Loading...</p>}
      {!dashboardList ? (
        <p className="text-gray-500">No any thing added now...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 md:gap-4 gap-3">
            {/* Total Visitors Card */}
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">Total Projects</h3>
                <div className="h-10 w-10 rounded-full bg-indigo-400 flex items-center justify-center">
                  <LuFolderOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {totals?.projects || 0}
              </p>
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
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {totals?.skills || 0}
              </p>
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
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {totals?.feedback || 0}
              </p>
              <p className="text-sm text-gray-600">5 unread</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:gap-6 md:gap-4 gap-3">
            <div className="flex-2 bg-white rounded-lg overflow-hidden flex flex-col min-h-70 ">
              <div className="flex w-full bg-[#eacbff] justify-between px-4 py-2 items-center">
                <h3 className="text-neutral-600 font-bold text-[17px] ">
                  Recent Projects
                </h3>
                <button className="text-gray-600 text-sm px-3 py-1 bg-[#c381ec] rounded-full hover:bg-white cursor-pointer hover:font-semibold transition ">
                  View All
                </button>
              </div>
              <div className="py-4 px-4 grid md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-4 gap-3 items-center  grow">
                {recentProjects?.map(
                  (recent: IRecentProject, index: number) => (
                    <div key={index} className="flex flex-col items-start">
                      <img
                        src={recent.imageUrl}
                        alt="project-image"
                        className="w-full h-30 rounded-lg object-cover"
                      />
                      <p className="font-semibold mt-1 text-[17px] text-gray-500">
                        {recent.name}
                      </p>
                      <button className="py-1 mt-1 px-3 font-medium text-white text-center bg-indigo-400 rounded-full">
                        {recent.status}
                      </button>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="flex-1 bg-white overflow-hidden rounded-lg flex flex-col min-h-70">
              <div className="flex w-full bg-[#eacbff] justify-between px-4 py-2 items-center">
                <h3 className="text-neutral-600 font-bold text-[17px]">
                  Skills Distribution
                </h3>
                <button className="text-gray-600 text-sm px-3 py-1 bg-[#c381ec] rounded-full hover:bg-white cursor-pointer hover:font-semibold transition">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-2 flex justify-center items-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={dashboardList?.skillDistribution || []}
                        dataKey="value" // FIXED: Changed from "values" to "value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={70}
                        label={renderCustomizedLabel}
                        labelLine={false}
                      >
                        {(dashboardList?.skillDistribution || []).map(
                          (entry, index) => (
                            <Cell
                              key={`cell-${entry.name}-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ),
                        )}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="col-span-2 flex flex-col justify-center gap-2 px-2 ">
                  {(skillDistribution || []).map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                        <span className="text-lg font-medium">
                          {entry.name}
                        </span>
                      </div>

                      <span className="text-lg font-semibold">
                        {entry.percentage}% {/* Shows 50% instead of 3 */}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-3 md:mt-1 w-full h-60 bg-white rounded-lg py-6 px-4">
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
        </>
      )}
    </div>
  );
};

export default Dashboard;
