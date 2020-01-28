import React, { createContext, useReducer, useContext } from "react";

import useAuthState from "./AuthState";

//import useAuthState from "./AuthState";
import {
  fetchTasksWithUserToken,
  saveNewTask,
  saveExistingTask,
  executeTask
} from "../api/data";
import { TasksList } from "../utils/TaskList";

/* Action Types */
const types = {
  FETCH_START: "FETCH_START",
  FETCH_OK: "FETCH_OK",
  FETCH_ERROR: "FETCH_ERROR",
  SET_FILTER: "SET_FILTER",
  ADD_TASK_START: "ADD_TASK",
  ADD_TASK_OK: "ADD_TASK_OK",
  DELETE_TASK: "DELETE_TASK",
  TASK_EDIT_START: "TASK_EDIT_START",
  TASK_EDIT_OK: "TASK_EDIT_OK",
  TASK_EDIT_ERROR: "TASK_EDIT_ERROR"
};

/* Define a context and a reducer for updating the context */
const TasksStateContext = createContext();

const initialState = {
  tasks: null,
  isFetching: false,
  isAdding: false,
  error: null,
  activeFilter: ""
};

const tasksStateReducer = (state, action) => {
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

    case types.ADD_TASK_START:
      return {
        ...state,
        isAdding: true
      };

    case types.ADD_TASK_OK:
      state.tasks.addTask(action.payload);
      return {
        ...state,
        isAdding: false
      };

    case types.DELETE_TASK:
      state.tasks.deleteTask(action.payload);
      return {
        ...state
      };
    case types.TASK_EDIT_START:
      return {};

    case types.TASK_EDIT_OK:
      state.tasks.editTask(action.payload);
      return {
        ...state
      };
    case types.TASK_EDIT_ERROR:
      return {
        ...state,
        error: action.payload
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

    const list = new TasksList(data);

    dispatch({ type: types.FETCH_OK, payload: list });
  };

  const setFilter = filter =>
    dispatch({ type: types.SET_FILTER, payload: filter });

  const addTask = async task => {
    dispatch({ type: types.ADD_TASK_START });
    try {
      const response = await saveNewTask(task, user.auth.token);
      const newTask = response.data;
      dispatch({ type: types.ADD_TASK_OK, payload: newTask });
    } catch (error) {
      dispatch({ type: types.FETCH_ERROR, payload: error });
    }
  };

  const deleteTask = async task => {
    try {
      await executeTask(task, user.auth.token);
      dispatch({ type: types.DELETE_TASK, payload: task });
    } catch (error) {
      console.log(error);
    }
  };
  const editTask = async task => {
    try {
      await saveExistingTask(task, user.auth.token);
      dispatch({ type: types.TASK_EDIT_OK, payload: task });
    } catch (error) {
      dispatch({ type: types.TASK_EDIT_OK, payload: error.data });
    }
  };

  return {
    ...tasksState,
    fetchTasks,
    setFilter,
    addTask,
    deleteTask,
    editTask
  };
};

export default useTaskState;
