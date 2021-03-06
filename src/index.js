import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthStateProvider } from "./store/AuthState";
import { TasksStateProvider } from "./store/TaskState";
import { LayoutStateProvider } from "./store/LayoutState";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";

const app = (
  <AuthStateProvider>
    <TasksStateProvider>
      <LayoutStateProvider>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </LayoutStateProvider>
    </TasksStateProvider>
  </AuthStateProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
