import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  jobsData: [],
  totalCount: 0,
  recentJobs: [],
  savedJobs: [],
  searchedJobs: [],
  history: [],
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
    getHistory: (state, action) => {},
    saveJob: (state, action) => {
      const jobId = action.payload.id;
      if (!state.savedJobs.some((job) => job.id === jobId)) {
        state.savedJobs.push(action.payload);
      }
    },
    addRecentSearch: (state, action) => {
      if (!state.history.includes(action.payload)) {
        state.history.push(action.payload);
      }
    },
    setLoading: (state, action) => {
      const { payload = false } = action;
      state.isLoading = payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});
export const {
  getJobs,
  saveJob,
  getSearchedJobs,

  addRecentSearch,
  getRecentJobs,
  setLoading,
  setTotalCount,
  setError,
} = jobsSlice.actions;
//===================================================
export const getAllJobs = (page) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `http://localhost:3001/jobs?_page=${page}&_limit=5`
    );
    if (response) {
      dispatch(getJobs(response.data));
      dispatch(setTotalCount(response.headers["x-total-count"]));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
//====================================================
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
//======================================================
export const sendSearchHistory = (query) => async (dispatch) => {
  const id = localStorage.getItem("id");
  try {
    const response = await axios.post(
      `http://localhost:3001/users/${id}/history`,
      { query }
    );
    if (response) {
      dispatch(addRecentSearch(response.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
//========================================================
export const getHistory = () => async (dispatch, getState) => {
  const id = localStorage.getItem("id");

  try {
    const response = await axios.get(
      `http://localhost:3001/users/${id}/history`
    );
    if (response) {
      dispatch(addRecentSearch(response.data));
      console.log(response.data);
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};
//========================================================
export const getAllSearchedJobs = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(addRecentSearch(query));
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
//=========================================================
export const filterJobs = (filter, query, searched) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `http://localhost:3001/jobs?topic_like=${searched}&${filter}_like=${query}`
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
