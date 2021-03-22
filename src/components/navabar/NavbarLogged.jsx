import React, { useState, useEffect, useContext } from "react";

import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import Button from "../button/Button";

import "./Navbar.css";
import ROUTES from "../../routes";

function NavbarLogged() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fas fa-door-open" />
            EasyLodging
          </Link>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apartments"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Apartments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/why-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          <div className="btns-position">
            {button && (
              <Link to={ROUTES.LOGIN}>
                <Button buttonStyle="btn-outline" onClick={logoutHandler}>
                  Log out
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLogged;
