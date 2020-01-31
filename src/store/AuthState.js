import React, { createContext, useReducer, useContext } from "react";

import {
  loginWithEmailAndPassword,
  signupWithEmailAndPassword
} from "../api/auth";
import {
  persistState,
  getPersistedState,
  deletePersistedState
} from "../utils/persistState";

/* Action Types */
const types = {
  AUTH_START: "AUTH_START",
  AUTH_OK: "AUTH_OK",
  AUTH_ERROR: "AUTH_ERROR",
  AUTH_LOGOUT: "AUTH_LOGOUT",
  AUTH_NEW_ACCOUNT: "AUTH_NEW_ACCOUNT",
  AUTH_CLEAR_ERROR: "AUTH_CLEAR_ERROR"
};

/* Define a context and a reducer for updating the context */
const AuthStateContext = createContext();

const initialState = {
  email: null,
  _id: null,
  token: null,
  error: null,
  isFetching: false
};

const persistedState = { ...initialState, ...getPersistedState("auth") };

const reducer = (state, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return {
        ...state,
        isFetching: true,
        error: null
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
        isFetching: false,
        error: null
      };

    case types.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case types.AUTH_LOGOUT:
      deletePersistedState("auth");
      return {
        ...initialState
      };

    case types.AUTH_NEW_ACCOUNT:
      return {
        ...state,
        ...action.payload
      };

    case types.AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

/* Export a component to provide the context to its children. */

export const AuthStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, persistedState);

  return (
    <AuthStateContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const [auth, dispatch] = useContext(AuthStateContext);

  const clearError = () => dispatch({ type: types.AUTH_CLEAR_ERROR });

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
      const data = error.response.data;
      dispatch({ type: types.AUTH_ERROR, payload: data });
    }
  };

  const authLogout = () => dispatch({ type: types.AUTH_LOGOUT });

  const authCreateAccount = async (email, password) => {
    dispatch({ type: types.AUTH_START });
    try {
      const response = await signupWithEmailAndPassword(email, password);
      const data = response.data;
      dispatch({
        type: types.AUTH_OK,
        payload: data
      });
    } catch (error) {
      const data = error.response.data;
      dispatch({ type: types.AUTH_ERROR, payload: data });
    }
  };

  return {
    auth,
    authLogin,
    authLogout,
    authCreateAccount,
    clearError
  };
};

export default useAuthState;
