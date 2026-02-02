import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addFeedback,
  deleteAllFeedback,
  deleteOneFeedback,
  getAllFeedback,
  getSingleFeedback,
  updateFeedback,
} from "./feedbackAPI";

interface IFeedback {
  _id: string;
  message: string;
  feedbackType: string;
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  isRead?: boolean;
}

interface IFeedbackState {
  feedbackList: IFeedback[];
  loading: boolean;
  error: string | null;
}

const initialState: IFeedbackState = {
  feedbackList: [],
  loading: false,
  error: null,
};

export const fetchSingleFeedback = createAsyncThunk(
  "feedback/fetch",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await getSingleFeedback(id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const fetchAllFeedback = createAsyncThunk(
  "feedback/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllFeedback();
      return res.data;
    } catch (error: any) {
     return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const createFeedback = createAsyncThunk(
  "feedback/add",
  async (feedbackData: IFeedback, { rejectWithValue }) => {
    try {
      const res = await addFeedback(feedbackData);
      return res.data;
    } catch (error: any) {
     return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const editFeedback = createAsyncThunk(
  "feedback/update",
  async (
    { id, feedbackData }: { id: string; feedbackData: IFeedback },
    { rejectWithValue },
  ) => {
    try {
      const res = await updateFeedback(id, feedbackData);
      return res.data;
    } catch (error: any) {
     return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const removeSingleFeedback = createAsyncThunk(
  "feedback/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await deleteOneFeedback(id);
      return res.data;
    } catch (error: any) {
     return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const removeAllFeedback = createAsyncThunk(
  "feedback/deleteAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await deleteAllFeedback();
      return res.data;
    } catch (error: any) {
     return rejectWithValue(error.response?.data?.message);
    }
  },
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchAll
      .addCase(fetchAllFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbackList = action.payload;
      })
      .addCase(fetchAllFeedback.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
      })
    //   fetch Single
    .addCase(fetchSingleFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbackList = [action.payload];
      })
      .addCase(fetchSingleFeedback.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
      })
    //   update
    .addCase(editFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(editFeedback.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.feedbackList.findIndex((e)=>e._id === action.payload._id)
        if(index !== -1) state.feedbackList[index] = action.payload
      })
      .addCase(editFeedback.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
      })
    //   delete Single
    .addCase(removeSingleFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeSingleFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbackList = state.feedbackList.filter((e)=>e._id !== action.payload)
      })
      .addCase(removeSingleFeedback.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
      })
    //   delete All
    .addCase(removeAllFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeAllFeedback.fulfilled, (state) => {
        state.loading = false;
        state.feedbackList = []
      })
      .addCase(removeAllFeedback.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
      })
  },
});

export default feedbackSlice.reducer;
