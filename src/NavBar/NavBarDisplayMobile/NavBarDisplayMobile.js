import React, { useState } from "react";

function NavBarDisplayMobile() {
  const [openMenu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!openMenu);
  };

  const isMenuOpen = () => {
    return openMenu ? "navbar__hamburger-dash open" : "navbar__hamburger-dash";
  };

  return (
    <section className="navbar__content navbar__content_display-mobile">
      <button
        className="navbar__hamburger-button"
        onClick={() => handleClick()}
      >
        <div className={isMenuOpen()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </section>
  );
}

export default NavBarDisplayMobile;
