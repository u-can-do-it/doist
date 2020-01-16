import api from "./api";

export const fetchTasksWithUserToken = token =>
  api.get("/tasks", {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    }
  });

export const saveNewTask = (task, token) =>
  api.post("/tasks", task, {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    }
  });
