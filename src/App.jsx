import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navabar/Navbar";
import useRoutes from "./useRoutes";
import "./App.css";
import useAuth from "./hooks/auth.hook";
import AuthContext from "./context/AuthContext";
import NavbarLogged from "./components/navabar/NavbarLogged";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        {isAuthenticated ? <NavbarLogged /> : <Navbar />}
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
