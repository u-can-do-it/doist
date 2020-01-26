import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import WithProtectedRoute from "./hoc/WithProtectedRoute";

import HomePage from "./pages/home/HomePage";
import SinUpPage from "./pages/sign-up/SignUpPage";

const App = () => {
  return (
    <>
      <Switch>
        <WithProtectedRoute
          redirectTo="/dashboard"
          onlyGuest={true}
          onlyUser={false}
        >
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SinUpPage} />
        </WithProtectedRoute>

        <WithProtectedRoute redirectTo="/login">
          <Layout>
            <Route path="/dashboard/:separator" component={DashboardPage} />
            <Route path="/dashboard/" component={DashboardPage} />
          </Layout>
        </WithProtectedRoute>
      </Switch>
    </>
  );
};

export default App;
