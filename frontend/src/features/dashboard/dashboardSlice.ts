import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDashboard } from "./dashboardAPI";

// interface IDashboard{
//     totals:{
//         projects:number,
//         skills:number,
//         feedback:number
//     }
//     recentProjects:any[]
//     skillDistribution:{name:string,percentage:number}[]
// }

interface IDashboard{
    totals:{
        projects:number,
        skills:number,
        feedback:number
    }
    recentProjects:any[]
    skillDistribution:{name:string, percentage:number, value:number}[]
}

interface IDashboardState {
  dashboardList: IDashboard | null;
  loading: boolean;
  error: string | null;
}

const initialState: IDashboardState = {
  dashboardList: null,
  loading: false,
  error: null,
};

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getDashboard();
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data.message);
    }
  },
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboardList = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer
