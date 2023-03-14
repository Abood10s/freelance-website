import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser } from "./UserSlice";

const initialState = {
  authenticated: false,
  isLoading: false,
  error: null,
};
export const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.authenticated = action.payload;
    },
    setLoading: (state, action) => {
      const { payload = false } = action;
      state.isLoading = payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setAuth, setLoading, setError } = AuthSlice.actions;
export const handleAuth = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.get(
      `http://localhost:3001/users?email=${email}&password=${password}`
    );
    if (res.data.length > 0) {
      dispatch(setLoading());
      dispatch(setAuth(true));
      localStorage.setItem("id", `${res.data[0].id}`);
      dispatch(setUser(...res.data[0]));
      console.log(...res.data[0]);
    } else {
      dispatch(setAuth(false));
    }
  } catch (error) {
    dispatch(setLoading());
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};

export const authReducer = AuthSlice.reducer;
export default AuthSlice.reducer;
