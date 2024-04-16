import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivetRoute from "./PrivetRoute";
import Updateprofile from "../Pages/UpdateProfile/Updateprofile";
import Contact from "../Pages/Home/Contact/Contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cardDetails/:id",
        element: (
          <PrivetRoute>
            <CardDetails></CardDetails>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://sabbirhossain-28.github.io/estate-data-json/sagmentData.json"
          ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivetRoute>
            <Updateprofile></Updateprofile>
          </PrivetRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivetRoute>
            <Contact></Contact>
          </PrivetRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
