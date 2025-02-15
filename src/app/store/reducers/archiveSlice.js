import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  archive: [],
  isLoading: false,
  error: "",
};

const archiveSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const archiveReducer = archiveSlice.reducer;
