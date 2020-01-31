import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ shouldRedirect, children, redirectTo, ...rest }) => {
  const route = shouldRedirect ? <Redirect to={redirectTo} /> : children;

  return <Route {...rest}>{route}</Route>;
};

export default PrivateRoute;
