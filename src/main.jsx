import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes.jsx";
import AuthContextProvider from "./AuthContextProvider/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
