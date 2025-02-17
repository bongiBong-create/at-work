import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  archive: [],
  isLoading: false,
  error: "",
};

const archiveSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addArchiveUser(state, { payload }) {
      state.archive.push({ ...payload, isArchive: true });
    },
    removeArchiveUser(state, { payload }) {
      state.archive = state.archive.filter((user) => user.id !== payload);
    },
    updateArchiveUser(state, { payload }) {
      state.archive = state.archive.map((user) => {
        if (user.id === payload.id) {
          return {
            ...user,
            ...payload.archiveProfile,
          };
        }
        return user;
      });
    },
  },
});

export const { addArchiveUser, removeArchiveUser, updateArchiveUser } =
  archiveSlice.actions;
export const archiveReducer = archiveSlice.reducer;
