import React, { createContext, useReducer, useContext } from "react";

import { loginWithEmailAndPassword } from "../api/auth";
import { persistState, getPersistedState } from "../helpers/persistState";

/* Action Types */
const types = {
  AUTH_START: "AUTH_START",
  AUTH_OK: "AUTH_OK",
  AUTH_ERROR: "AUTH_ERROR",
  AUTH_LOGOUT: "AUTH_LOGOUT"
};

/* Define a context and a reducer for updating the context */
const AuthStateContext = createContext();

const persistedState = getPersistedState("auth");
const initialState = {
  email: null,
  _id: null,
  token: null,
  error: null,
  isFetching: false,
  ...persistedState
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return {
        ...state,
        isFetching: true
      };

    case types.AUTH_OK:
      persistState(
        {
          email: action.payload.email,
          _id: action.payload._id,
          token: action.payload.token
        },
        "auth"
      );
      return {
        ...state,
        ...action.payload,
        isFetching: false
      };

    case types.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case types.AUTH_LOGOUT:
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
};

/* Export a component to provide the context to its children. */

export const AuthStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const [auth, dispatch] = useContext(AuthStateContext);

  const authLogin = async (email, password) => {
    dispatch({ type: types.AUTH_START });
    try {
      const response = await loginWithEmailAndPassword(email, password);
      const data = response.data;
      dispatch({
        type: types.AUTH_OK,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: types.AUTH_ERROR,
        payload: error.response
      });
    }
  };

  const authLogout = () => dispatch({ type: types.AUTH_LOGOUT });

  return {
    auth,
    authLogin,
    authLogout
  };
};

export default useAuthState;
