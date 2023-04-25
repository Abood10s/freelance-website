import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { COLORS } from "./global";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "./redux/AuthSlice";
import { router as routes } from "./Routes";
import { Spinner } from "./global/style";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const theme = {
  Global: COLORS,
};

function App() {
  const dispatch = useDispatch();
  let authenticated = localStorage.getItem("authenticated");
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
        {authenticated && <Navbar />}
        <Suspense fallback={<Spinner />}>{router}</Suspense>
        {authenticated && <Footer />}
      </ThemeProvider>
    </div>
  );
}

export default App;
