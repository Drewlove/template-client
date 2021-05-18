import React from "react";
import NavBarDisplayMobile from "../NavBarDisplayMobile/NavBarDisplayMobile";
import NavBarDisplayWide from "../NavBarDisplayWide/NavBarDisplayWide";

function NavBarContainer() {
  return (
    <nav className="navbar">
      <NavBarDisplayMobile />
      <NavBarDisplayWide />
    </nav>
  );
}

export default NavBarContainer;
