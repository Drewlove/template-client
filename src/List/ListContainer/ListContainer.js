import React from "react";
import FetchData from "../../FetchData/FetchData";
import List from "../List/List";

function RecipeListContainer() {
  return (
    <FetchData endpointArr={["recipes"]}>
      <List />
    </FetchData>
  );
}

export default RecipeListContainer;
