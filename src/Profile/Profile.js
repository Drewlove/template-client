import React from "react";
import { Link } from "react-router-dom";

export default function Profile(props) {
  const { first_name, last_name } = props.data[0];

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3"></div>
        <div className="col-md text-center text-md-left">
          <h2>
            {first_name} {last_name}
          </h2>
        </div>
      </div>
      <Link to={`/app/profile/form/${props.auth0SubID}`}>Edit</Link>
    </div>
  );
}
