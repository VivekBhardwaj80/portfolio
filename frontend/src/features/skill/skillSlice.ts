import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addSkill,
  deleteAllSkill,
  deleteOneSkill,
  getSkill,
  updateSkill,
} from "./skillAPI";

interface ISkill {
  _id?: string;
  level: string;
  name: string;
  category: string;
  icon?: string;
  isFeatured: boolean;
}

interface ISkillState {
  skillList: ISkill[];
  loading: boolean;
  error: string | null;
}

const initialState: ISkillState = {
  skillList: [],
  loading: false,
  error: null,
};

export const fetchSkill = createAsyncThunk(
  "skill/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getSkill();
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const createSkill = createAsyncThunk(
  "skill/add",
  async (skillData: FormData, { rejectWithValue }) => {
    try {
      const res = await addSkill(skillData);
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const editSkill = createAsyncThunk(
  "skill/update",
  async (
    { id, skillData }: { id: string; skillData: ISkill },
    { rejectWithValue },
  ) => {
    try {
      const res = await updateSkill(id, skillData);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const removeOneSkill = createAsyncThunk(
  "skill/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await deleteOneSkill(id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const removeAllSkill = createAsyncThunk(
  "skill/deleteAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await deleteAllSkill();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // fetch
      .addCase(fetchSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSkill.fulfilled, (state, action) => {
        state.loading = false;
        state.skillList = action.payload;
      })
      .addCase(fetchSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
    //   add
      .addCase(createSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSkill.fulfilled, (state, action) => {
        state.loading = false;
        state.skillList.unshift(action.payload);
      })
      .addCase(createSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
    //   update
    .addCase(editSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(editSkill.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.skillList.findIndex((e)=>e._id === action.payload._id)
        if(index !== -1) state.skillList[index] = action.payload
      })
      .addCase(editSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
    //   deleteOne
    .addCase(removeOneSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeOneSkill.fulfilled, (state, action) => {
        state.loading = false;
        state.skillList = state.skillList.filter((e)=>e._id !== action.payload)
      })
      .addCase(removeOneSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
    //   deleteAll
    .addCase(removeAllSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeAllSkill.fulfilled, (state) => {
        state.loading = false;
        state.skillList = []
      })
      .addCase(removeAllSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export default skillSlice.reducer
