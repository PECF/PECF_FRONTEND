import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import React from "react";

export const PrivateRoute: React.FC<{
  exact?: boolean;
  path: string;
}> = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/" />;
      }}></Route>
  );
};

