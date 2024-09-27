// Modal.js
import AddGenInformation from "./AddGenInformation";
import AddExperience from "./AddExperience";
import AddEducation from "./AddEducation";

const AddInfoForm = ({ setIsFormOpen }) => {
  return (
    <>
      <form>
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
