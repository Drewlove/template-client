import React from "react";
import { Link } from "react-router-dom";

function NavBarLink(props) {
  return (
    <Link className={`navbar__link ${props.isCurrentPage}`} to={props.to}>
      {props.text}
    </Link>
  );
}

export default NavBarLink;
