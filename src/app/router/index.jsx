import { createHashRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../../components/main-layout";
import { Users } from "../../pages/users";
import { UserDetails } from "../../pages/user-details";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to={"/list"} /> },
      { path: "list", element: <Users /> },
      { path: "list/:id", element: <UserDetails /> },
    ],
  },
]);
