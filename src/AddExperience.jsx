export function AddExperience() {
  return (
    <div className="experience-info info">
      <div className="input">
        <p>Company name:</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Position title:</p>
        <input type="text" />
      </div>
      <div className="input">
        <p>Responsibilities:</p>
        <textarea></textarea>
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

export default AddExperience;
