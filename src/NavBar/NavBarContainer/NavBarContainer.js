import React from "react";
import NavBarDisplayMobile from "../NavBarDisplayMobile/NavBarDisplayMobile";
import NavBarDisplayWide from "../NavBarDisplayWide/NavBarDisplayWide";

export default function NavBarContainer() {
  return (
    <nav className="navbar">
      <NavBarDisplayMobile />
      <NavBarDisplayWide />
    </nav>
  );
}
