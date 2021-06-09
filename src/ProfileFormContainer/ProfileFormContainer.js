import React from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import FetchData from "../FetchData/FetchData";
import { GET_USER } from "../Utilities/GET_USER";

function ProfileFormContainer() {
  let auth0SubID = GET_USER();

  return (
    <>
      <main className="main">
        <FetchData endpointArr={[`users/${auth0SubID}`]}>
          <ProfileForm auth0SubID={auth0SubID} />
        </FetchData>
      </main>
    </>
  );
}

export default ProfileFormContainer;
