import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "../../Routes";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = React.useState(false);

  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (!authenticated) {
      navigate(PATHS.LOGIN);
    } else {
      setAuthenticated(true);
    }
  }, [authenticated, navigate]);

  return authenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
