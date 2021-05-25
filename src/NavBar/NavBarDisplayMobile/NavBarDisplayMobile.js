import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBarLinksWrapper from "../NavBarLinksWrapper/NavBarLinksWrapper";

function NavBarDisplayMobile() {
  const [openMenu, setMenu] = useState(false);

  const handleClick = () => {
    if (!openMenu) {
      document.addEventListener("mousedown", closeHamburgerMenu);
    }
    setMenu(!openMenu);
  };

  let location = useLocation();

  useEffect(() => {
    closeHamburgerMenu();
  }, [location]);

  const isMenuOpen = () => {
    return openMenu ? "hamburger-open" : "";
  };

  const closeHamburgerMenu = () => {
    // console.log(`Menu is open: ${openMenu}`);
    if (openMenu) setMenu(!openMenu);
  };

  return (
    <section className="navbar__content navbar__content_display-mobile">
      <button
        className="navbar__hamburger-button"
        onClick={() => handleClick()}
      >
        <div className={`navbar__hamburger-dash ${isMenuOpen()}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`navbar__links-container ${isMenuOpen()}`}>
        <div className="navbar__links-content">
          <NavBarLinksWrapper />
        </div>
      </div>
    </section>
  );
}

export default NavBarDisplayMobile;
