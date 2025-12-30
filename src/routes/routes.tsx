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
          { path: "social-impact", element: <BakanesPage /> },
          { path: "community", element: <BakanesPage /> },
          { path: "sponsors", element: <BakanesPage /> },
          { path: "marketplace", element: <BakanesPage /> },
          { path: "bakanes", element: <BakanesPage /> },
          { path: "content", element: <BakanesPage /> },
          { path: "actegories-actions", element: <BakanesPage /> },
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
