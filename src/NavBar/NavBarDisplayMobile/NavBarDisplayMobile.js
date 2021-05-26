import React, { useState } from "react";
import NavBarLinksWrapper from "../NavBarLinksWrapper/NavBarLinksWrapper";
import AuthenticationButton from "../../Authentication/AuthenticationButton/AuthenticationButton";

export default function NavBarDisplayMobile() {
  const [openMenu, setMenu] = useState(false);

  const handleClick = (e) => {
    if (!openMenu) {
      document.addEventListener("mousedown", closeHamburgerMenu);
    }
    setMenu(!openMenu);
  };

  const closeHamburgerMenu = (e) => {
    if (e.target.className !== "navbar__authentication-button" && openMenu) {
      setMenu(!openMenu);
    }
  };

  const hasHamburgerOpenClassName = () => {
    return openMenu ? "hamburger-open" : "";
  };

  return (
    <section
      className="navbar__content navbar__content_display-mobile"
      onClick={(e) => (openMenu ? closeHamburgerMenu(e) : null)}
    >
      <button
        className="navbar__hamburger-button"
        onClick={(e) => handleClick(e)}
      >
        <div
          className={`navbar__hamburger-dash ${hasHamburgerOpenClassName()}`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`navbar__links-container ${hasHamburgerOpenClassName()}`}>
        <div className="navbar__links-content">
          <NavBarLinksWrapper />
        </div>
        <AuthenticationButton />
      </div>
    </section>
  );
}
