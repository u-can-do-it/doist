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

export const saveExistingTask = (task, token) =>
  api.put(`/tasks/${task._id}`, task, {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    }
  });

export const executeTask = (task, token) => {
  task.archived = true;
  console.log(task);
  return api.put(`/tasks/${task._id}`, task, {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    }
  });
};
