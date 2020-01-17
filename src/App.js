import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard/:separator" component={DashboardPage} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
