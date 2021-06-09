import React from "react";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBarLinksWrapper() {
  const navLinksAuthenticated = [
    { to: "/app/profile", text: "Profile" },
    { to: "/app/to-dos", text: "To Do" },
  ];

  const navLinks = [
    { to: "/home", text: "Home" },
    { to: "/about", text: "About" },
  ];

  let location = useLocation();
  let { isAuthenticated } = useAuth0();

  const hasCurrentPageClassName = (navLink) => {
    let currentPathArr = location.pathname.split("/");
    let currentPathAbbr = `/${currentPathArr[1]}/${currentPathArr[2]}`;
    return currentPathAbbr === navLink ? "navbar__link_current-page" : "";
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
