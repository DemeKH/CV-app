// Modal.js
import AddGenInformation from "./AddGenInformation";
import AddExperience from "./AddExperience";
import AddEducation from "./AddEducation";

const AddInfoForm = ({ setIsFormOpen }) => {
  return (
    <>
      <form className="border-black border-2 border-solid">
        <h1>Add Information</h1>
        <AddGenInformation />
        <AddEducation />
        <AddExperience />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setIsFormOpen(false);
          }}
          className="main-btn"
        />
      </form>
    </>
  );
};

export default AddInfoForm;
