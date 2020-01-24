import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import WithPrivateRoute from "./hoc/WithPrivateRoute";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <WithPrivateRoute redirectTo="/login">
          <Layout>
            <Route path="/dashboard/:separator" component={DashboardPage} />
            <Route path="/dashboard/" component={DashboardPage} />
          </Layout>
        </WithPrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
