import React, { useState, useLayoutEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import useAuthState from "../store/AuthState";

const ProtectedRoute = ({
  guestOnly = false,
  component: C,
  redirectTo = "/",
  path,

  ...restProps
}) => {
  const { auth } = useAuthState();
  const [shouldRedirect, setShouldRedirect] = useState();

  useLayoutEffect(() => {
    const logedIn = !!auth.token;
    setShouldRedirect(!(logedIn === !guestOnly));
    // eslint-disable-next-line
  }, [auth]);

  return (
    <Route
      path={path}
      {...restProps}
      render={props =>
        shouldRedirect ? <Redirect to={redirectTo} /> : <C {...props} />
      }
    ></Route>
  );
};

export default ProtectedRoute;
