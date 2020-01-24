import api from "./api";

export const loginWithEmailAndPassword = (email, password) =>
  api.post("/auth", {
    email: email,
    password: password
  });

export const signupWithEmailAndPassword = (email, password) =>
  api.put("/users", {
    email: email,
    password: password
  });
