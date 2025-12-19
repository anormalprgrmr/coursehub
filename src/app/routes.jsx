import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "../features/courses/pages/HomePage";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import ProfilePage from "../features/profile/pages/ProfilePage"
import ProtectedRoute from "../shared/components/protectedRoute/ProtectedRoute"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
