import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../Routes";

const ProtectedRoute = () => {
  const { authenticated } = useSelector((state) => state.auth);
  return authenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN} />;
};

export default ProtectedRoute;
