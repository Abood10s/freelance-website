import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const id = localStorage.getItem("id");
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

export const getUserInfo = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    if (response) {
      dispatch(setUser(response.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
export const EditField = (id, field, value) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await axios.get(`http://localhost:3001/users/${id}`);
    const updatedUser = {
      ...user.data,
      [field]: value,
    };
    const response = await axios.put(
      `http://localhost:3001/users/${id}`,
      updatedUser
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

export const userReducer = userSlice.reducer;
export default userSlice.reducer;
