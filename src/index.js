import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import App from "./App";
import { AppProvider } from "./ContextAPI/CreateContext";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NewUser from "./Pages/NewUser";
import { AuthProvider } from "./ContextAPI/AuthContextApi";
import EditPage from "./Pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/newUser",
    element: <NewUser />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthProvider>
      <AppProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AppProvider>
    </AuthProvider>
  </>
);
