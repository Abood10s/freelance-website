import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  theUser: {},
  isLoading: false,
  error: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.theUser = action.payload;
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
export const { setUser, setLoading, setError } = userSlice.actions;
//=============================================================

export const getUserInfo = () => async (dispatch) => {
  const id = localStorage.getItem("id");

  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `https://mock-freelancing-website-api.onrender.com/users/${id}`
    );
    if (response) {
      dispatch(setUser(response.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
//=============================================================
export const EditField = (field, value) => async (dispatch) => {
  const id = localStorage.getItem("id");
  dispatch(setLoading(true));
  try {
    const user = await axios.get(
      `https://mock-freelancing-website-api.onrender.com/users/${id}`
    );
    const updatedUser = {
      ...user.data,
      [field]: value,
    };
    const response = await axios.put(
      `https://mock-freelancing-website-api.onrender.com/users/${id}`,
      updatedUser
    );
    if (response) {
      dispatch(setUser(response.data));
      window.location.reload();
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
//=========================================================

export const userReducer = userSlice.reducer;
export default userSlice.reducer;
