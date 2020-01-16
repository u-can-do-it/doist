import React, { useState } from "react";

import FormInput from "../../components/form-input/FormInput";

import useAuthState from "../../store/AuthState";
import { Redirect } from "react-router";

const LoginPage = () => {
  const authState = useAuthState();
  const { auth, authLogin } = authState;

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { email, password } = form;

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
    authLogin(email, password);
  };

  const page = (
    <div>
      <div>
        <h1>Log in to the best to do app!</h1>
      </div>

      <form onSubmit={event => handleSubmit(event)}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <button>LOG IN</button>
      </form>
    </div>
  );

  return <div>{auth.token ? <Redirect to="/dashboard" /> : page}</div>;
};

export default LoginPage;
