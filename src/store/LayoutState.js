import React, { createContext, useReducer, useContext } from "react";

/* Action Types */
const types = {
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR"
};

/* Define a context and a reducer for updating the context */
const LayoutStateContext = createContext();

const initialState = {
  isSidebarOpen: false
};

const layoutStateReducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      };

    default:
      return state;
  }
};

/* Export a component to provide the context to its children.  */

export const LayoutStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(layoutStateReducer, initialState);

  return (
    <LayoutStateContext.Provider value={[state, dispatch]}>
      {children}
    </LayoutStateContext.Provider>
  );
};

const useTaskState = () => {
  const [layoutState, dispatch] = useContext(LayoutStateContext);

  const toggleSidebarOpen = () => dispatch({ type: types.TOGGLE_SIDEBAR });

  return {
    layoutState,
    toggleSidebarOpen
  };
};

export default useTaskState;
