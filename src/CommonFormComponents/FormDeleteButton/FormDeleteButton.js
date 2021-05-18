import React, { useState, useEffect } from "react";
import { API_DELETE } from "../../Utilities/APImethods/API_DELETE";
import Modal from "../../Modal/Modal";
import { useHistory } from "react-router-dom";

function FormDeleteButton(props) {
  const history = useHistory();

  const [resDelete, deleteData] = API_DELETE(
    props.endpointSuffix,
    props.recipeId
  );

  const [modal, setModal] = useState({
    display: false,
    text: "",
    type: "",
    redirect: false,
    redirectSuffix: "",
  });

  useEffect(() => {
    const modalDeleteSuccessful = {
      display: true,
      type: "notification",
      redirect: true,
      text: "Record deleted",
      redirectSuffix: props.redirectSuffix,
    };
    const modalDeleteFail = {
      display: true,
      type: "notification",
      redirect: false,
      text: resDelete.deleteErrorMessage,
      redirectSuffix: "",
    };

    if (resDelete.recordDeleted === true) {
      setModal(modalDeleteSuccessful);
    } else if (resDelete.isDeleteError === true) {
      setModal(modalDeleteFail);
    }
  }, [resDelete, props.redirectSuffix]);

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setModal({
      ...modal,
      display: true,
      type: "confirmation",
      text: "Delete this record?",
    });
  };

  const renderModal = () => {
    return modal.type === "notification"
      ? renderModalNotification()
      : renderModalConfirmation();
  };

  const renderModalNotification = () => {
    return (
      <Modal text={modal.text} handleModalClose={(e) => handleModalClose(e)} />
    );
  };

  const renderModalConfirmation = () => {
    return (
      <Modal
        text={modal.text}
        type={modal.type}
        handleModalClose={(e) => handleModalClose(e)}
        handleModalConfirm={(e) => deleteItem(e)}
        confirmAction="Delete"
      />
    );
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setModal({ ...modal, display: false });
    return modal.redirect === true
      ? history.push(`/${props.redirectSuffix}`)
      : null;
  };

  const deleteItem = (e) => {
    e.preventDefault();
    deleteData();
  };

  return (
    <div className="delete-button">
      {modal.display === true ? renderModal() : null}
      <button
        id="button-delete"
        className="button-save-delete button-save-delete_delete"
        value="delete"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  );
}

export default FormDeleteButton;
