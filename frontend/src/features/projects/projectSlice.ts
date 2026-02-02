import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProject,
  deleteProject,
  getProject,
  getSingleProject,
  updateProject,
} from "./projectAPI";

interface IProject {
  _id?: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveDemo?: string;
  imageUrl?: string;
  date?:string
  name:string
  status:string
}

interface IProjectState {
  projectList: IProject[];
  loading: boolean;
  error: string | null;
}

const initialState: IProjectState = {
  projectList: [],
  loading: false,
  error: null,
};

export const fetchProject = createAsyncThunk(
  "project/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getProject();
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);
export const fetchSingleProject = createAsyncThunk(
  "project/fetch",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await getSingleProject(id);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const editProject = createAsyncThunk(
  "project/update",
  async ({ id, data }: { id: string; data: IProject }, { rejectWithValue }) => {
    try {
      const res = await updateProject(id, data);
      return res.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const createProject = createAsyncThunk(
  "project/add",
  async ( data: FormData , { rejectWithValue }) => {
    try {
      const res = await addProject(data);
      return res.data.data;
    } catch (error:any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const removeProject = createAsyncThunk(
  "project/delete",
  async (_, { rejectWithValue }) => {
    try {
      const res = await deleteProject();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // fetchAll
        .addCase(fetchProject.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchProject.fulfilled, (state,action)=>{
            state.loading = false
            state.projectList = action.payload
        })
        .addCase(fetchProject.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        // fetchSingle
        .addCase(fetchSingleProject.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchSingleProject.fulfilled, (state,action)=>{
            state.loading = false
            state.projectList = [action.payload]
        })
        .addCase(fetchSingleProject.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        // add
        .addCase(createProject.pending,(state)=>{
            state.loading = true
        })
        .addCase(createProject.fulfilled, (state,action)=>{
            state.loading = false
            state.projectList.push(action.payload)
        })
        .addCase(createProject.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        // update
        .addCase(editProject.pending,(state)=>{
            state.loading = true
        })
        .addCase(editProject.fulfilled, (state,action)=>{
            state.loading = false
            const index = state.projectList.findIndex((e)=>e._id === action.payload._id)
            if(index !== -1) state.projectList[index] = action.payload
        })
        .addCase(editProject.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        // delete
        .addCase(removeProject.pending,(state)=>{
            state.loading = true
        })
        .addCase(removeProject.fulfilled, (state)=>{
            state.loading = false
            state.projectList = []
        })
        .addCase(removeProject.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})


export default projectSlice.reducer