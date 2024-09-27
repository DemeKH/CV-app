// Modal.js
import React from "react";
import AddGenInformation from "./AddGenInformation";
import AddExperience from "./AddExperience";
import AddEducation from "./AddEducation";

const AddInfoForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <AddGenInformation />
      <AddEducation />
      <AddExperience />
    </>
  );
};

export default AddInfoForm;
