import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addEducation,
  deleteEducation,
  getAllEducation,
  updateEducation,
} from "./educationAPI";

interface Education {
  _id?: string;
  level: string;
  institution: string;
  institutionName: string;
  fieldOfStudy?: string;
  degree?: string;
  startYear: string;
  endYear?: string;
  isCurrent?: boolean;
  grade?: number;
  description?: string;
  location?: string;
}

interface EducationState {
  educationList: Education[];
  loading: boolean;
  error: string | null;
}
const initialState: EducationState = {
  educationList: [],
  loading: false,
  error: null,
};

export const fetchEducation = createAsyncThunk(
  "education/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllEducation();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to load educations",
      );
    }
  },
);

export const createEducation = createAsyncThunk(
  "education/add",
  async (educationData: Education, { rejectWithValue }) => {
    try {
      const res = await addEducation(educationData);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add educations",
      );
    }
  },
);

export const editEducation = createAsyncThunk(
  "education/update",
  async (
    { id, data }: { id: string; data: Education },
    { rejectWithValue },
  ) => {
    try {
      const res = await updateEducation(id,data);
      return res.data
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add educations",
      );
    }
  },
);

export const removeEducation = createAsyncThunk(
  "education/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await deleteEducation(id);
      return res.data
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add educations",
      );
    }
  },
);

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch ALl
      .addCase(fetchEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.loading = false;
        state.educationList = action.payload;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // create
      .addCase(createEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEducation.fulfilled, (state, action) => {
        state.loading = false;
        state.educationList.push(action.payload);
      })
      .addCase(createEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // update
      .addCase(editEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(editEducation.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.educationList.findIndex(
          (e) => e._id === action.payload._id,
        );
        if (index !== -1) state.educationList[index] = action.payload;
      })
      .addCase(editEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // delete
      .addCase(removeEducation.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeEducation.fulfilled, (state, action) => {
        state.loading = false;
        state.educationList = state.educationList.filter(
          (e) => e._id !== action.payload,
        );
      })
      .addCase(removeEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default educationSlice.reducer;
