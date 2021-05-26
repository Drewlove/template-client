import React from "react";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBarLinksWrapper() {
  const navLinksAuthenticated = [
    { to: "/app/home", text: "Home" },
    { to: "/app/to-dos", text: "To Do" },
  ];

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
  ];

  let location = useLocation();
  let { isAuthenticated } = useAuth0();

  const hasCurrentPageClassName = (path) => {
    return location.pathname === path ? "navbar__link_current-page" : "";
  };

  const renderLinks = () => {
    let links;
    isAuthenticated ? (links = navLinksAuthenticated) : (links = navLinks);
    return links.map((key) => {
      return (
        <NavBarLink
          key={key.to}
          to={key.to}
          text={key.text}
          isCurrentPage={hasCurrentPageClassName(key.to)}
        />
      );
    });
  };

  return <>{renderLinks()}</>;
}
