import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

import HomePage from "./pages/home/HomePage";
import SinUpPage from "./pages/sign-up/SignUpPage";

import ProtectedRoute from "./hoc/PortectedRoute";

const App = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute
          path="/login"
          component={LoginPage}
          redirectTo="/dashboard"
          guestOnly={true}
        />
        <ProtectedRoute
          path="/signup"
          component={SinUpPage}
          redirectTo="/dashboard"
          guestOnly={true}
        />

        <Layout>
          <ProtectedRoute
            path="/dashboard/:separator?"
            component={DashboardPage}
            redirectTo="/login"
          />
        </Layout>

        <ProtectedRoute
          path="/"
          component={HomePage}
          redirectTo="/dashboard"
          guestOnly={true}
        />
      </Switch>
    </>
  );
};

export default App;
