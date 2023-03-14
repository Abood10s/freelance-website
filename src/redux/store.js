import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./AuthSlice";
import jobsReducer from "./JobsSlice";
import { userReducer } from "./UserSlice";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    auth: authReducer,
  },
});
