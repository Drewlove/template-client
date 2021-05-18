import React from "react";
import { API_GET } from "../Utilities/APImethods/API_GET";
// import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
// import Error from "../Error/Error";

function FetchData(props) {
  // const [{ data, isLoading, isError, error }] = API_GET(props.endpointArr);
  const [{ data, isLoading, isError, error }] = API_GET(props.endpointArr);

  const renderSkeleton = () => {
    // return <SkeletonLoader skeletonNumber={props.skeletonNumber} />;
    return <h1>Loading...</h1>;
  };

  const renderResults = () => {
    return isError ? renderError() : renderContainer();
  };

  const renderError = () => {
    // return <Error error={error} />;
    return (
      <h1>
        {error.status} {error.statusText}
      </h1>
    );
  };

  const renderContainer = () => {
    return (
      <>
        {React.cloneElement(props.children, {
          data: data,
        })}
      </>
    );
  };

  return <>{isLoading ? renderSkeleton() : renderResults()}</>;
}

export default FetchData;
