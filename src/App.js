import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/sign-up/SignUpPage";

import useAuthState from "./store/AuthState";

const App = () => {
  const { auth } = useAuthState();

  return (
    <>
      <Switch>
        <Route path="/dashboard/:separator?">
          {auth.token ? (
            <Layout>
              <Route path="/dashboard/:separator?" component={DashboardPage} />
            </Layout>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route path="/login">
          {auth.token ? <Redirect to="/dashboard" /> : <LoginPage />}
        </Route>
        <Route path="/signup">
          {auth.token ? <Redirect to="/dashboard" /> : <SignUpPage />}
        </Route>

        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
