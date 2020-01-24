import React from "react";
import useAuthState from "../store/AuthState";
import { Route, Redirect } from "react-router";

const WithPrivateRoute = ({ children, location, redirectTo, ...rest }) => {
  const user = useAuthState();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default WithPrivateRoute;
