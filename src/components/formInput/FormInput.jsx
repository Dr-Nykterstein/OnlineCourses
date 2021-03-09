import React from 'react';
import { useFormContext } from 'react-hook-form';

import './FormInput.scss';

const FormInput = ({ type, name, label, placeholder, validation }) => {
  const baseClassName = 'form-input';
  const {
    errors: { [name]: error = false },
    register,
  } = useFormContext();

  return (
    <label
      className={`${baseClassName} ${error && `${baseClassName}--invalid`}`}
    >
      <span className={`${baseClassName}__label`}>{label}</span>
      <input
        className={`${baseClassName}__input`}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register(validation)}
      />
      {error && (
        <span className={`${baseClassName}__error`}>{error?.message}</span>
      )}
    </label>
  );
};

export default FormInput;
