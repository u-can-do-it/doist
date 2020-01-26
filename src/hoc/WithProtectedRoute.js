import React from "react";
import useAuthState from "../store/AuthState";
import { Route, Redirect } from "react-router";

const WithProtectedRoute = ({
  onlyUser = true,
  onlyGuest = false,
  children,
  location,
  redirectTo,
  ...rest
}) => {
  const user = useAuthState();
  let shouldRedirect;
  if (onlyUser) shouldRedirect = user.auth.token;
  if (onlyGuest) shouldRedirect = !user.auth.token;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        shouldRedirect ? (
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

export default WithProtectedRoute;
