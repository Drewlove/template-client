import React from "react";
import Profile from "../Profile/Profile";
import FetchData from "../FetchData/FetchData";
import { GET_USER } from "../Utilities/GET_USER";

function ProfileContainer() {
  let auth0SubID = GET_USER();

  return (
    <>
      <main className="main">
        <FetchData endpointArr={[`users/${auth0SubID}`]}>
          <Profile />
        </FetchData>
      </main>
    </>
  );
}

export default ProfileContainer;
