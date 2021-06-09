import React, { useState, useEffect } from "react";
import FormSaveButton from "../CommonFormComponents/FormSaveButton/FormSaveButton";

export default function ProfileForm(props) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  useEffect(() => {
    setFirstName(props.data[0].first_name);
  }, [props.data]);

  useEffect(() => {
    setLastName(props.data[0].last_name);
  }, [props.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <FormSaveButton
        formData={{ first_name: first_name, last_name: last_name }}
        formName="user"
        endpointSuffix="users"
        redirectSuffix="app/profile"
        rowId={props.auth0SubID}
        // setFormError={setFormError}
      />
    </form>
  );
}
