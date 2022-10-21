// Path: src/routes/AdminRoute.tsx
// Language: typescript jsx

import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface AdminRouteProps extends RouteProps {
  element: React.ReactNode;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ element, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={
        currentUser && currentUser.role === "admin" ? (
          element
        ) : (
          <Navigate to={{ pathname: "/", state: { from: rest.path } }} />
        )
      }
    />
  );
};
