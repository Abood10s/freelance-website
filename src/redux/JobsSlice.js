import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  jobsData: [],
  recentJobs: [],
  savedJobs: [],
  searchedJobs: [],
  isLoading: false,
  error: null,
};
export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    getJobs: (state, action) => {
      state.jobsData = [
        ...state.jobsData,
        ...action.payload.filter(
          (job) =>
            !state.jobsData.some((existingJob) => existingJob.id === job.id)
        ),
      ];
    },
    getRecentJobs: (state, action) => {
      state.recentJobs = [
        ...state.recentJobs,
        ...action.payload.filter(
          (job) =>
            !state.recentJobs.some((existingJob) => existingJob.id === job.id)
        ),
      ];
    },
    getSearchedJobs: (state, action) => {
      state.searchedJobs = [
        ...state.recentJobs,
        ...action.payload.filter(
          (job) =>
            !state.recentJobs.some((existingJob) => existingJob.id === job.id)
        ),
      ];
    },
    saveJob: (state, action) => {
      state.savedJobs = [...state.savedJobs, action.payload];
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
export const {
  getJobs,
  saveJob,
  getSearchedJobs,
  getRecentJobs,
  setLoading,
  setError,
} = jobsSlice.actions;
export const getAllJobs = (page) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `http://localhost:3001/jobs?_page=${page}&_limit=5`
    );
    if (response) {
      dispatch(getJobs(response.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
export const getAllRecentJobs = (page) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `http://localhost:3001/jobs?_sort=id&_order=desc&_page=${page}&_limit=5`
    );
    if (response) {
      dispatch(getRecentJobs(response.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
export const getAllSearchedJobs = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `http://localhost:3001/jobs?topic_like=${query}`
    );
    if (response) {
      dispatch(getSearchedJobs(response.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
export const filterJobs = (filter, query) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `http://localhost:3001/jobs?${filter}_like=${query}`
    );
    if (response) {
      dispatch(getSearchedJobs(response.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
export const jobsReducer = jobsSlice.reducer;
export default jobsSlice.reducer;
