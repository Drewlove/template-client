import React, { useState } from "react";

function NavBarDisplayMobile() {
  const [openMenu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!openMenu);
  };

  const isMenuOpen = () => {
    return openMenu ? "hamburger-open" : "";
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
      <div className={`navbar__links-container ${isMenuOpen()}`}></div>
    </section>
  );
}

export default NavBarDisplayMobile;
