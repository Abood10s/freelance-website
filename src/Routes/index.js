import { lazy } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/profile"));
const BestMatches = lazy(() => import("../pages/BestMatches"));
const MostRecent = lazy(() => import("../pages/MostRecent"));
const SavedJobs = lazy(() => import("../pages/SavedJobs"));
const Search = lazy(() => import("../pages/Search"));
const LoginForm = lazy(() => import("../components/forms/loginform/LoginForm"));

export const PATHS = {
  SIGNUP: "/signup",
  LOGIN: "/login",
  PROFILE: "/profile",
  SEARCH: "/search/:query",
  HOME: "/home",
  BESTMATCHES: "/home",
  MOSTRECENT: "/home/mostrecent",
  SAVEDJOBS: "/home/savedjobs",
};

export const router = [
  { path: PATHS.LOGIN, element: <LoginForm /> },
  { path: PATHS.SIGNUP, element: <LoginForm /> },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
        children: [
          { index: true, path: PATHS.BESTMATCHES, element: <BestMatches /> },
          { path: PATHS.MOSTRECENT, element: <MostRecent /> },
          { path: PATHS.SAVEDJOBS, element: <SavedJobs /> },
        ],
      },
      { path: PATHS.PROFILE, element: <Profile /> },
      { path: PATHS.SEARCH, element: <Search /> },
    ],
  },
  { path: "*", element: <h1>Page not found</h1> },
];
