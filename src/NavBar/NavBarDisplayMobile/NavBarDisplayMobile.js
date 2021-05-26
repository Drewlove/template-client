import React, { useState } from "react";
import NavBarLinksWrapper from "../NavBarLinksWrapper/NavBarLinksWrapper";
import AuthenticationButton from "../../Authentication/AuthenticationButton/AuthenticationButton";

function NavBarDisplayMobile() {
  const [openMenu, setMenu] = useState(false);

  const handleClick = () => {
    console.log("clicking");
    if (!openMenu) {
      document.addEventListener("mousedown", closeHamburgerMenu);
    }
    setMenu(!openMenu);
  };

  const closeHamburgerMenu = () => {
    if (openMenu) setMenu(!openMenu);
  };

  const hasHamburgerOpenClassName = () => {
    return openMenu ? "hamburger-open" : "";
  };

  return (
    <section
      className="navbar__content navbar__content_display-mobile"
      onClick={() => (openMenu ? handleClick() : null)}
    >
      <button
        className="navbar__hamburger-button"
        onClick={() => handleClick()}
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

export default NavBarDisplayMobile;
