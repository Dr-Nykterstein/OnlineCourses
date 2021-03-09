import React, { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import AuthForm from '../authForm/AuthForm';
import FormInput from '../formInput/FormInput';

import './SignUpPage.scss';

const confirmPasswordInput = {
  id: 6,
  label: 'Confirm password',
  name: 'confirm-password',
  type: 'password',
  placeholder: 'Enter your password',
  validation: {},
};

const INPUTS = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    validation: {
      required: 'Please enter your name!',
      minLength: {
        value: 2,
        message: 'Name should have at least 2 characters',
      },
    },
  },
  {
    label: 'Surname',
    name: 'surname',
    type: 'text',
    placeholder: 'Enter your surname',
    validation: {
      required: 'Please enter your surname!',
      minLength: {
        value: 2,
        message: 'Surname should have at least 2 characters',
      },
    },
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    validation: {
      required: 'Please enter your email!',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Email is incorrect!',
      },
    },
  },
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Enter your username',
    validation: {
      required: 'Please enter your username!',
      minLength: {
        value: 3,
        message: 'Username should have at least 3 characters!',
      },
    },
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    validation: {
      required: 'Please enter your password!',
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        message:
          'Should contain at least one digit, one lower and one upper case!',
      },
      minLength: {
        value: 8,
        message: 'Should contain at least 8 characters!',
      },
    },
  },
];

const SignUpPage = () => {
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const {
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = form;
  const baseClassName = 'sign-up-page';
  const inputs = useMemo(
    () => [
      ...INPUTS,
      {
        ...confirmPasswordInput,
        validation: {
          ...confirmPasswordInput.validation,
          validate: (value) =>
            value === watch('password') || 'The password should match!',
        },
      },
    ],
    [watch]
  );

  return (
    <div className={baseClassName}>
      <FormProvider {...form}>
        <AuthForm
          title="Sign up"
          onSubmit={handleSubmit(console.log)}
          formAfter={
            <p className={`${baseClassName}__form-text`}>
              Already have an account?&nbsp;
              <Link to="/sign-in">Log in!</Link>
            </p>
          }
          submitButtonText="Sign up"
          submitButtonDisabled={isDirty && !isValid}
        >
          {inputs.map(({ label, name, type, placeholder, validation }, i) => (
            <FormInput
              /* eslint-disable-next-line react/no-array-index-key */
              key={i}
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

export default SignUpPage;
