// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { addContact } from "./contactAPI";

// interface IContact {
//   firstName: string;
//   lastName?: string;
//   email: string;
//   message: string;
//   phone?: string;
// }

// interface IContactState {
//   contactList: IContact[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: IContactState = {
//   contactList: [],
//   loading: false,
//   error: null,
// };

// export const createContact = createAsyncThunk(
//   "contact/createContact",
//   async (contact: IContact, { rejectWithValue }) => {
//     try {
//       const res = await addContact(contact);
//       return res.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message);
//     }
//   },
// );

// const contactSlice = createSlice({
//   name: "contact",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createContact.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.contactList.push(action.payload);
//       })
//       .addCase(createContact.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default contactSlice.reducer;

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
      console.log("🔄 Redux thunk - Sending contact:", contact);
      const res = await addContact(contact);
      console.log("✅ Redux thunk - Success response:", res.data);
      return res.data;
    } catch (error: any) {
      console.error("❌ Redux thunk - Error caught:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      // Extract error message properly
      const errorMessage = 
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Failed to send message. Please try again.";
      
      return rejectWithValue(errorMessage);
    }
  },
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        console.log("🔄 Redux slice - Contact submission pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        console.log("✅ Redux slice - Contact submission fulfilled");
        state.loading = false;
        state.error = null;
        // Store the contact if it exists in response
        if (action.payload.contact) {
          state.contactList.push(action.payload.contact);
        }
      })
      .addCase(createContact.rejected, (state, action) => {
        console.log("❌ Redux slice - Contact submission rejected:", action.payload);
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = contactSlice.actions;
export default contactSlice.reducer;