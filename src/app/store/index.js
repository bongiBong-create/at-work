import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/usersSlice";
import { archiveReducer } from "./reducers/archiveSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    archive: archiveReducer,
  },
});
