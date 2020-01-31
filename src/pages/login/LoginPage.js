import React, { useState, useEffect } from "react";

import FormInput from "../../components/form-input/FormInput";

import useAuthState from "../../store/AuthState";
import { Link } from "react-router-dom";
import ButtonWithSpinner from "../../components/ui/ButtonWithSpinner";
import { StyledAuthForm } from "../../components/styles/AuthForm.styles";
import { StyledAuthPage } from "../../components/styles/AuthPage.styles";

const LoginPage = () => {
  const authState = useAuthState();
  const { auth, authLogin } = authState;

  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const set = () => {
      setError(auth.error);
      setIsLoading(auth.isFetching);
    };
    set();

    // eslint-disable-next-line
  }, [auth.error, auth.isFetching]);

  // eslint-disable-next-line
  useEffect(() => authState.clearError(), []);

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
    authLogin(email, password);
  };
  return (
    <StyledAuthPage>
      <div className="container">
        <div>
          <h1>Log in</h1>
        </div>

        <StyledAuthForm onSubmit={event => handleSubmit(event)}>
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
          {error ? <p>{error}</p> : null}
          <ButtonWithSpinner type="submit" isLoading={isLoading}>
            Log in
          </ButtonWithSpinner>
          <p>
            Don't have an account yet? <Link to="/signup">Sign up</Link>
          </p>
        </StyledAuthForm>
      </div>
    </StyledAuthPage>
  );
};

export default LoginPage;
