import api from "./api";

export const loginWithEmailAndPassword = (email, password) =>
  api.post("/auth", {
    email: email,
    password: password
  });
