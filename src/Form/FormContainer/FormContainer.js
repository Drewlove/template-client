import React from "react";
import { useParams } from "react-router-dom";
import Form from "../Form/Form";
import FetchData from "../../FetchData/FetchData";

function FormContainer() {
  const { recipeId } = useParams();
  let endpointArr = recipeId === `new` ? [] : [`recipes/${recipeId}`];

  return (
    <>
      <FetchData endpointArr={endpointArr}>
        <Form />
      </FetchData>
    </>
  );
}

export default FormContainer;
