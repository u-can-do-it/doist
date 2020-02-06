import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuthState from "../store/AuthState";

const AuthenticatedRoute = ({ component: C, ...rest }) => {
  const { auth } = useAuthState();
  const isLogedIn = !!auth.token;
  return (
    <Route
      {...rest}
      render={props =>
        isLogedIn ? <C {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default AuthenticatedRoute;
