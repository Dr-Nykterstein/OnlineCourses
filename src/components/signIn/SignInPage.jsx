import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import AuthForm from '../authForm/AuthForm';
import FormInput from '../formInput/FormInput';

import './SignInPage.scss';

const INPUTS = [
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

const SignInPage = () => {
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;
  const baseClassName = 'sign-in-page';

  return (
    <div className={baseClassName}>
      <FormProvider {...form}>
        <AuthForm
          title="Log in"
          onSubmit={handleSubmit(console.log)}
          formAfter={
            <p className={`${baseClassName}__form-text`}>
              Do not have an account?&nbsp;
              <Link to="/sign-up">Sign up!</Link>
            </p>
          }
          submitButtonText="Log in"
          submitButtonDisabled={isDirty && !isValid}
        >
          {INPUTS.map(({ label, name, type, placeholder, validation }, i) => (
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

export default SignInPage;
