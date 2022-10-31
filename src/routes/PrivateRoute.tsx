// Path: src/routes/PrivateRoute.tsx
// Language: typescript jsx

import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

interface PrivateRouteProps extends RouteProps {
  element: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  ...rest
}) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={
        currentUser ? (
          element
        ) : (
          <Navigate to={{ pathname: "/login", state: { from: rest.path } }} />
        )
      }
    />
  );
};
