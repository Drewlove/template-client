import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = (props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <LogoutButton classNameProp="navbar__authentication-button" />
  ) : (
    <LoginButton classNameProp="navbar__authentication-button" />
  );
};

export default AuthenticationButton;
