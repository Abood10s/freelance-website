import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../../Routes";

const ProtectedRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = React.useState(false);

  useEffect(() => {
    const storedAuthenticated = localStorage.getItem("authenticated");
    const requestedRoute = localStorage.getItem("requestedRoute");

    if (!storedAuthenticated) {
      // If not authenticated, store the requested route
      localStorage.setItem("requestedRoute", location.pathname);
      navigate(PATHS.LOGIN);
    } else {
      setAuthenticated(true);
      if (requestedRoute) {
        // If authenticated and a requested route is stored, navigate to it
        navigate(requestedRoute, { replace: true });
        localStorage.removeItem("requestedRoute");
      }
    }
  }, [authenticated, navigate, location.pathname]);

  return authenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
