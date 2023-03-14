import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setUser, setError } from "../redux/UserSlice";
import axios from "axios";

function useGetUserInfo() {
  const dispatch = useDispatch();

  const getUserInfo = useCallback(async () => {
    dispatch(setLoading(true));

    try {
      const id = localStorage.getItem("id");
      const response = await axios.get(`http://localhost:3001/users/${id}`);
      if (response) {
        dispatch(setUser(response.data));
      }
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading());
    } finally {
      dispatch(setLoading());
    }
  }, [dispatch]);

  return getUserInfo;
}

export default useGetUserInfo;
