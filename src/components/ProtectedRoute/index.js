import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginForm from "../forms/loginform/LoginForm";

const ProtectedRoute = () => {
  const { authenticated } = useSelector((state) => state.auth);
  return authenticated ? <Outlet /> : <LoginForm />;
};

export default ProtectedRoute;
