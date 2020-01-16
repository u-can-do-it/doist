import React, { createContext, useReducer, useContext } from "react";

import useAuthState from "./AuthState";

//import useAuthState from "./AuthState";
import { fetchTasksWithUserToken, saveNewTask } from "../api/data";
import { sortTaskList } from "../helpers/sortTaskList";

/* Action Types */
const types = {
  FETCH_START: "FETCH_START",
  FETCH_OK: "FETCH_OK",
  FETCH_ERROR: "FETCH_ERROR",
  SET_FILTER: "SET_FILTER",
  ADD_TASK: "ADD_TASK"
};

/* Define a context and a reducer for updating the context */
const TasksStateContext = createContext();

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
  activeFilter: ""
};

const tasksStateReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case types.FETCH_START:
      return {
        ...state,
        isFetching: true
      };

    case types.FETCH_OK:
      return {
        ...state,
        isFetching: false,
        tasks: action.payload
      };

    case types.FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case types.SET_FILTER:
      return {
        ...state,
        activeFilter: action.payload
      };

    case types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    default:
      return state;
  }
};

/* Export a component to provide the context to its children.  */

export const TasksStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksStateReducer, initialState);

  return (
    <TasksStateContext.Provider value={[state, dispatch]}>
      {children}
    </TasksStateContext.Provider>
  );
};

const useTaskState = () => {
  const user = useAuthState();
  const [tasksState, dispatch] = useContext(TasksStateContext);
  const fetchTasks = async () => {
    if (!user.auth.token) {
      console.log("No user");
      return;
    }
    dispatch({ type: types.FETCH_START });
    const response = await fetchTasksWithUserToken(user.auth.token);
    const data = response.data;
    const sortedList = sortTaskList(data);
    dispatch({ type: types.FETCH_OK, payload: sortedList });
  };

  const setFilter = filter =>
    dispatch({ type: types.SET_FILTER, payload: filter });

  const addTask = async task => {
    try {
      const response = await saveNewTask(task, user.auth.token);

      const newTask = response.data;
      dispatch({ type: types.ADD_TASK, payload: newTask });
    } catch (error) {
      dispatch({ type: types.FETCH_ERROR, payload: error });
    }
  };

  return {
    ...tasksState,
    fetchTasks,
    setFilter,
    addTask
  };
};

export default useTaskState;
