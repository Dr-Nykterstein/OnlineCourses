/* eslint-disable */
import React, { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import AuthForm from "../authForm/AuthForm";
import FormInput from "../formInput/FormInput";

import "./SignUpPage.scss";
import useHttp from "../../hooks/http.hook";
import ROUTES from "../../routes";

const confirmPasswordInput = {
  id: 6,
  label: "Confirm password",
  name: "confirm-password",
  type: "password",
  autocomplete: "on",
  placeholder: "Enter your password",
  validation: {},
};

const INPUTS = [
  {
    id: 1,
    label: "Name",
    name: "name",
    type: "text",
    autocomplete: "on",
    placeholder: "Enter your name",
    validation: {
      required: "Please enter your name!",
      minLength: {
        value: 2,
        message: "Name should have at least 2 characters",
      },
    },
  },
  {
    id: 2,
    label: "Surname",
    name: "surname",
    type: "text",
    autocomplete: "on",
    placeholder: "Enter your surname",
    validation: {
      required: "Please enter your surname!",
      minLength: {
        value: 2,
        message: "Surname should have at least 2 characters",
      },
    },
  },
  {
    id: 3,
    label: "Email",
    name: "email",
    type: "email",
    autocomplete: "on",
    placeholder: "Enter your email",
    validation: {
      required: "Please enter your email!",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Email is incorrect!",
      },
    },
  },
  {
    id: 4,
    label: "Username",
    name: "username",
    type: "text",
    autocomplete: "on",
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
    id: 5,
    label: "Password",
    name: "password",
    type: "password",
    autocomplete: "on",
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

const SignUpPage = () => {
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const {
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = form;

  const { loading, request, error } = useHttp();

  const [response, setResponse] = useState("");

  const registerHandler = async (data) => {
    try {
      setResponse("");
      // eslint-disable-next-line no-unused-vars
      const result = await request(ROUTES.API.AUTH.REGISTER, "POST", data);
      setResponse(result.message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };

  const baseClassName = "sign-up-page";
  const inputs = useMemo(
    () => [
      ...INPUTS,
      {
        ...confirmPasswordInput,
        validation: {
          ...confirmPasswordInput.validation,
          validate: (value) =>
            value === watch("password") || "The password should match!",
        },
      },
    ],
    [watch]
  );

  return (
    <div>
      <div className={baseClassName}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...form}>
          <AuthForm
            title="Sign up"
            onSubmit={handleSubmit(registerHandler)}
            error={<div className={`${baseClassName}__error`}>{error}</div>}
            response={
              <div className={`${baseClassName}__response`}>{response}</div>
            }
            formAfter={
              <p className={`${baseClassName}__form-text`}>
                Already have an account?&nbsp;
                <Link to={ROUTES.LOGIN}>Sign in!</Link>
              </p>
            }
            submitButtonText="Sign up"
            submitButtonDisabled={(isDirty && !isValid) || loading}
          >
            {inputs.map(
              ({
                id,
                autocomplete,
                label,
                name,
                type,
                placeholder,
                validation,
              }) => (
                <FormInput
                  key={id}
                  autocomplete={autocomplete}
                  label={label}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  validation={validation}
                />
              )
            )}
          </AuthForm>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignUpPage;
