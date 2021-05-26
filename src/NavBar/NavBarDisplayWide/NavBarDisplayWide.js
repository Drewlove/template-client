import React from "react";
import NavBarLinksWrapper from "../NavBarLinksWrapper/NavBarLinksWrapper";
import AuthenticationButton from "../../Authentication/AuthenticationButton/AuthenticationButton";

export default function NavBarDisplayWide() {
  return (
    <section className="navbar__content navbar__content_display-wide">
      <NavBarLinksWrapper />
      <AuthenticationButton />
    </section>
  );
}
