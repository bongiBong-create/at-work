import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../helpers/constants";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeUser(state, { payload }) {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    addUser(state, { payload }) {
      state.users.push({ ...payload, isArchive: false });
    },
    updateActiveUser(state, { payload }) {
      state.users = state.users.map((user) => {
        if (user.id == payload.id) {
          return {
            ...user,
            ...payload.activeProfile,
          };
        }
        return user;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload.map((user) => ({ ...user, isArchive: false }));
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { removeUser, addUser, updateActiveUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
