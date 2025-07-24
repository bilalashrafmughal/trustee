import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/Login";
import Accounts from "@/pages/auth-pages/Accounts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/accounts",
    element: <Accounts />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
