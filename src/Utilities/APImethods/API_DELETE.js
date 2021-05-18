import { useState, useCallback } from "react";
import config from "../../Config";
// import { useAuth0 } from "@auth0/auth0-react";

export const API_DELETE = (endpointSuffix, recipeId) => {
  const [resDelete, setResDelete] = useState({
    isDeleting: false,
    isDeleteError: false,
    deleteErrorMessage: "",
    recordDeleted: false,
  });

  //   const { user } = useAuth0();
  //   const userId = user.sub.split("|")[1];
  //   const { getAccessTokenSilently } = useAuth0();

  const deleteData = useCallback(async () => {
    setResDelete((prevState) => ({ ...prevState, isDeleting: true }));
    try {
      //   const token = await getAccessTokenSilently();
      const token = process.env.REACT_APP_API_KEY;
      const result = await fetch(
        // `${config.API_ENDPOINT}/${endpointSuffix}/${userId}/${rowId}`,
        `${config.API_ENDPOINT}/${endpointSuffix}/${recipeId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (result.ok) {
        setResDelete((prevState) => ({
          ...prevState,
          isDeleting: false,
          isDeleteError: false,
          deleteErrorMessage: "",
          recordDeleted: true,
        }));
      } else {
        setResDelete((prevState) => ({
          ...prevState,
          isDeleting: false,
          isDeleteError: true,
          deleteErrorMessage: "Failed to delete record.",
          recordDeleted: false,
        }));
      }
    } catch (error) {
      setResDelete((prevState) => ({
        ...prevState,
        isDeleting: false,
        isDeleteError: true,
        deleteErrorMessage: "Unable to delete record.",
        recordDeleted: false,
      }));
    }
    //   }, [endpointSuffix, userId, getAccessTokenSilently, rowId]);
  }, [endpointSuffix, recipeId]);
  return [resDelete, deleteData];
};
