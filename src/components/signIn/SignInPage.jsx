import React, { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import AuthForm from "../authForm/AuthForm";
import FormInput from "../formInput/FormInput";

import "./SignInPage.scss";
import useHttp from "../../hooks/http.hook";
import AuthContext from "../../context/AuthContext";

const INPUTS = [
  {
    id: 1,
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Enter your username",
    validation: {
      required: "Please enter your username!",
      minLength: {
        value: 3,
        message: "Username should have at least 3 characters!",
      },
    },
  },
  {
    id: 2,
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    validation: {
      required: "Please enter your password!",
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message:
          "Should contain at least one digit, one lower and one upper case!",
      },
      minLength: {
        value: 8,
        message: "Should contain at least 8 characters!",
      },
    },
  },
];

const SignInPage = () => {
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const { handleSubmit } = form;
  const baseClassName = "sign-in-page";

  const auth = useContext(AuthContext);

  const { request, error } = useHttp();

  const loginHandler = async (data) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await request(ROUTES.API.AUTH.LOGIN, "POST", data);
      auth.login(result.token, result.userId);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };

  return (
    <div className={baseClassName}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...form}>
        <AuthForm
          title="Sign in"
          onSubmit={handleSubmit(loginHandler)}
          error={<div className={`${baseClassName}__error`}>{error}</div>}
          formAfter={
            <p className={`${baseClassName}__form-text`}>
              Do not have an account?&nbsp;
              <Link to={ROUTES.REGISTER}>Sign up!</Link>
            </p>
          }
          submitButtonText="Sign in"
        >
          {INPUTS.map(({ id, label, name, type, placeholder, validation }) => (
            <FormInput
              id={id}
              label={label}
              type={type}
              name={name}
              placeholder={placeholder}
              validation={validation}
            />
          ))}
        </AuthForm>
      </FormProvider>
    </div>
  );
};

export default SignInPage;
