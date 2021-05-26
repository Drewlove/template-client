import React from "react";
import NavBarLink from "../NavBarLink/NavBarLink";
import { useLocation } from "react-router-dom";

function NavBarLinksWrapper() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
  ];

  let location = useLocation();

  const hasCurrentPageClassName = (path) => {
    return location.pathname === path ? "navbar__link_current-page" : "";
  };

  const renderLinks = () => {
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

export default NavBarLinksWrapper;
