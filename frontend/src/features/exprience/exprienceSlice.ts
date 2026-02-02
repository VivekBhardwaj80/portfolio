import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addExperience,
  deleteAllExperience,
  deleteOneExperience,
  getAllExperience,
  updateExperience,
} from "./exprienceAPI";

interface IExperience {
  _id?: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: string;
  isCurrent?: boolean;
  logo?:string
  working?:string
  technologies?:string
}

interface IExperienceState {
  experienceList: IExperience[];
  loading: boolean;
  error: string | null;
}

const initialState: IExperienceState = {
  experienceList: [],
  loading: false,
  error: null,
};

export const fetchExperience = createAsyncThunk(
  "experience/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllExperience();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to Add Experience",
      );
    }
  },
);

export const createExperience = createAsyncThunk(
  "experience/add",
  async (experienceData: FormData, { rejectWithValue }) => {
    try {
      const res = await addExperience(experienceData);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add Experience",
      );
    }
  },
);

export const editExperience = createAsyncThunk(
  "experience/update",
  async (
    { id, data }: { id: string; data: IExperience },
    { rejectWithValue },
  ) => {
    try {
      const res = await updateExperience(id, data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const removeOneExperience = createAsyncThunk(
  "experience/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await deleteOneExperience(id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data.message);
    }
  },
);
export const removeAllExperience = createAsyncThunk(
  "experience/deleteAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await deleteAllExperience();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data.message);
    }
  },
);

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch All
      .addCase(fetchExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experienceList = action.payload;
      })
      .addCase(fetchExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // create
      .addCase(createExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(createExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experienceList.push(action.payload);
      })
      .addCase(createExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // update
      .addCase(editExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(editExperience.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.experienceList.findIndex(
          (e) => e._id === action.payload._id,
        );
        if (index !== -1) state.experienceList[index] = action.payload;
      })
      .addCase(editExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // deleteOne
      .addCase(removeOneExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeOneExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.experienceList = state.experienceList.filter(
          (e) => e._id !== action.payload,
        );
      })
      .addCase(removeOneExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //   delete All
      .addCase(removeAllExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeAllExperience.fulfilled, (state) => {
        state.loading = false;
        state.experienceList = [];
      })
      .addCase(removeAllExperience.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload as string;
      });
  },
});

export default experienceSlice.reducer;
