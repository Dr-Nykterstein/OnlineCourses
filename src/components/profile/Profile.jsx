/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";
function Profile() {
  const baseClassName = "profile-page";
  return (
    <div className="profile">
      <h1>Basic information</h1>
      <div className="user-info">
        <ul className="Upper">
          <p className={`${baseClassName}__lable-text`}>Name:</p>
          <p className={`${baseClassName}__lable-text`}>Surname: </p>
          <p className={`${baseClassName}__lable-text`}>Email: </p>
        </ul>
        <ul className="Upper">
          <p className={`${baseClassName}__value-text`}>Smth name </p>
          <p className={`${baseClassName}__value-text`}>Smth surname </p>
          <p className={`${baseClassName}__value-text`}>Smth@email.com </p>
        </ul>
      </div>
      <p className={`${baseClassName}__form-text`}>
        <Link to="">Change password?</Link>
      </p>
    </div>
  );
}

// forgot your password?&nbsp;
export default Profile;
