import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addContact } from "./contactAPI";

interface IContact {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
  phone?: string;
}

interface IContactState {
  contactList: IContact[];
  loading: boolean;
  error: string | null;
}

const initialState: IContactState = {
  contactList: [],
  loading: false,
  error: null,
};

export const createContact = createAsyncThunk(
  "contact/createContact",
  async (contact: IContact, { rejectWithValue }) => {
    try {
      const res = await addContact(contact);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contactList.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default contactSlice.reducer;
