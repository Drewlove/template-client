import React from "react";
import NavBarLink from "../NavBarLink/NavBarLink";
import { LINKS } from "../NavBarLinksConfig";
import { useLocation } from "react-router-dom";

function NavBarDisplayWide() {
  let location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path ? "navbar__link_current-page" : "";
  };

  const renderLinks = () => {
    return LINKS.map((key) => {
      return (
        <NavBarLink
          key={key.to}
          to={key.to}
          text={key.text}
          isCurrentPage={isCurrentPage(key.to)}
        />
      );
    });
  };

  return (
    <section className="navbar__content navbar__content_display-wide">
      {renderLinks()}
    </section>
  );
}

export default NavBarDisplayWide;
