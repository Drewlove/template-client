import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBarDisplayWide() {
  let location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path ? "navbar__link_current-page" : "";
  };

  return (
    <section className="navbar__content navbar__content_display-wide">
      <Link className={`navbar__link ${isCurrentPage("/")}`} to="/">
        Home
      </Link>
      <Link className={`navbar__link ${isCurrentPage("/about")}`} to="/about">
        About
      </Link>
    </section>
  );
}

export default NavBarDisplayWide;
