import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProfile,
  deleteProfile,
  getProfile,
  updateProfile,
} from "./profileAPI";

interface IProfile {
  _id?: string;
  name: string;
  headline: string;
  bio: string;
  location?: string;
  email?: string;
  phone?: number;
  website?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    facebook?: string;
    X?: string;
    linkedIn?: string;
    instagram?: string;
  };
  profileImage?: File;
}

interface IProfileState {
  profileList: IProfile[];
  recentProjects: any[];
  experience: any[];
  education: any[];
  skill: any[];
  loading: boolean;
  error: string | null;
}

const initialState: IProfileState = {
  profileList: [],
  recentProjects: [],
  skill: [],
  experience: [],
  education: [],
  loading: false,
  error: null,
};

export const fetchProfile = createAsyncThunk(
  "profile/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getProfile();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);
export const createProfile = createAsyncThunk(
  "profile/add",
  async (profileData: FormData, { rejectWithValue }) => {
    try {
      const res = await addProfile(profileData);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const editProfile = createAsyncThunk(
  "profile/update",
  async (profileData: FormData, { rejectWithValue }) => {
    try {
      const res = await updateProfile(profileData);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const removeProfile = createAsyncThunk(
  "profile/delete",
  async (_, { rejectWithValue }) => {
    try {
      const res = await deleteProfile();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.data;

        state.profileList = data.existingProfile ? [data.existingProfile] : [];
        state.recentProjects = data.recentProject || [];
        state.skill = data.skill || [];
        state.experience = data.experience || [];
        state.education = data.education || [];
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add
      .addCase(createProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profileList.push(action.payload);
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // update
      .addCase(editProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.profileList.findIndex(
          (e) => e._id === action.payload._id,
        );
        if (index !== -1) state.profileList[index] = action.payload;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // delete
      .addCase(removeProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeProfile.fulfilled, (state) => {
        state.loading = false;
        state.profileList = [];
      })
      .addCase(removeProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default profileSlice.reducer;
