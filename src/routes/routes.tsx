import type { RouteObject } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { ProtectedRoute } from "../auth/ProtectedRoute";

// pages
import Login from "../pages/login/Login";
import BakanesPage from "../pages/bakanes/BakanesPage";
import Home from "../pages/home/Home";

export const routes: RouteObject[] = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { path: "", element: <Home /> },
          { path: "bakanes", element: <BakanesPage /> },
        ],
      },
    ],
  },

  {
    path: "/",
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <div /> },
    ],
  },

  {
    path: "*",
    element: <div>404 - No encontrado</div>,
  },
];
