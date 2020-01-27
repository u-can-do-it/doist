import React, { useState, useEffect } from "react";

import useAuthState from "../../store/AuthState";

import { Link } from "react-router-dom";
import { StyledAuthForm } from "../../components/styles/AuthForm.styles";
import { StyledAuthPage } from "../../components/styles/AuthPage.styles";
import FormInput from "../../components/form-input/FormInput";
import ButtonWithSpinner from "../../components/ui/ButtonWithSpinner";

const SignUpPage = () => {
  const authState = useAuthState();

  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
    isValid: false,
    passwordFeedback: null,
    password2Feedback: null
  });
  const {
    email,
    password,
    password2,
    passwordFeedback,
    password2Feedback,
    isValid
  } = form;

  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => authState.clearError(), []);

  useEffect(() => {
    const set = () => {
      setError(authState.auth.error);
      setIsLoading(authState.auth.isFetching);
    };
    set();
  }, [authState.auth.error, authState.auth.isFetching]);

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== password2) {
      setForm({ ...form, password2Feedback: "Passwords don't match." });
      return;
    }

    if (isValid) {
      setForm({ ...form, password2Feedback: null });
      authState.authCreateAccount(email, password);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === "password") {
      const validation = validatePassword(value);
      setForm({
        ...form,
        [name]: value,
        isValid: validation.isValid,
        passwordFeedback: validation.feedback
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validatePassword = password => {
    let feedback = "";
    let isValid = true;

    if (password.length < 6) {
      feedback += "Minimum six characters";
      isValid = false;
    }

    if (!password.match(/[A-Z]/g)) {
      if (!isValid) {
        feedback += ", one capital letter";
      } else {
        feedback += "Minimum one capital letter";
        isValid = false;
      }
    }

    if (!password.match(/[0-9]/g)) {
      if (!isValid) {
        feedback += ", one number";
      } else {
        feedback += "Minimum one number";
        isValid = false;
      }
    }
    feedback += ".";

    return {
      isValid: isValid,
      feedback: isValid ? "" : feedback
    };
  };

  return (
    <StyledAuthPage>
      <div className="container">
        <div>
          <h1>Sign Up</h1>
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
            feedback={passwordFeedback}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="password2"
            value={password2}
            onChange={handleChange}
            label="Confirm Password"
            required
            feedback={password2Feedback}
          />
          {error ? <p>{error}</p> : null}
          <ButtonWithSpinner type="submit" isLoading={isLoading}>
            Create
          </ButtonWithSpinner>

          <p>
            If You have an account go to <Link to="/login">Log in</Link>
          </p>
        </StyledAuthForm>
      </div>
    </StyledAuthPage>
  );
};

export default SignUpPage;
