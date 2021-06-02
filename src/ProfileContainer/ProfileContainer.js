import React from "react";
import Profile from "../Profile/Profile";
import FetchData from "../FetchData/FetchData";

function ProfileContainer() {
  // const userId = useAuthId();
  return (
    <>
      <main className="main">
        {/* <FetchData endpointArr={[`departments/${userId}`]} skeletonNumber={1}> */}
        <FetchData endpointArr={["users"]}>
          <Profile />
        </FetchData>
      </main>
    </>
  );
}

export default ProfileContainer;
