export function AddEducation() {
  return (
    <div className="education-info info">
      <div className="input">
        <p>School name:</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Title of study:</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Date from:</p>
        <input type="date" />
      </div>
      <div className="input">
        <p>Date to:</p>
        <input type="date" />
      </div>
    </div>
  );
}

export default AddEducation;
