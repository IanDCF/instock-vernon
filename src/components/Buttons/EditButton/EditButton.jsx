import React from "react";
import editIcon from "../../../assets/icons/edit-24px.svg";

function EditButton({ buttonText }) {
  return (
    <button className="edit-btn">
      <img src={editIcon} alt="edit icon" />
      {buttonText}
    </button>
  );
}

export default EditButton;
