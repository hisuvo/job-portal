import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../pages/NotFound/Error";
import Home from "../pages/Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
