import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setError, setAuth } from "../redux/AuthSlice";
import { setUser } from "../redux/UserSlice";
import axios from "axios";

function useAuth() {
  const dispatch = useDispatch();

  const handleAuth = useCallback(
    async (email, password) => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get(
          `http://localhost:3001/users?email=${email}&password=${password}`
        );
        if (res.data.length > 0) {
          dispatch(setLoading());
          dispatch(setAuth(true));
          localStorage.setItem("id", `${res.data[0].id}`);
          dispatch(setUser({ ...res.data[0] }));
        } else {
          dispatch(setAuth(false));
        }
      } catch (error) {
        dispatch(setLoading());
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading());
      }
    },
    [dispatch]
  );

  return handleAuth;
}

export default useAuth;
