import React from 'react';

import './AuthForm.scss';

const AuthForm = ({
  children,
  submitButtonText,
  submitButtonDisabled,
  title,
  formAfter,
  onSubmit,
}) => {
  const baseClassName = 'auth-form';

  return (
    <form className={baseClassName} onSubmit={onSubmit}>
      <h2 className={`${baseClassName}__title`}>{title}</h2>
      <div className={`${baseClassName}__content`}>{children}</div>
      <button
        type="submit"
        className={`${baseClassName}__submit-button`}
        disabled={submitButtonDisabled}
      >
        {submitButtonText}
      </button>
      <div className={`${baseClassName}__footer`}>{formAfter}</div>
    </form>
  );
};

export default AuthForm;
