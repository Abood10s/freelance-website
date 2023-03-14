import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { COLORS } from "./global";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./redux/AuthSlice";
import { router as routes } from "./Routes";
import { Spinner } from "./global/style";

const Navbar = lazy(() => import("./components/Navbar"));

const theme = {
  Global: COLORS,
};

function App() {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  const router = useRoutes(routes);
  const id = localStorage.getItem("id");
  useEffect(() => {
    if (id) {
      dispatch(setAuth(true));
    }
  }, [id]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {authenticated && (
          <Suspense fallback={<Spinner />}>
            <Navbar />
          </Suspense>
        )}
        <Suspense fallback={<Spinner />}>{router}</Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
