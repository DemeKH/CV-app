export function AddEducation({
  schoolName,
  setSchoolName,
  titleOfStudy,
  setTitleOfStudy,
  studyDateFrom,
  setstudyDateFrom,
  studyDateTo,
  setstudyDateTo,
}) {
  return (
    <div className="education-info info">
      <div className="input">
        <p>School name:</p>
        <input
          type="text"
          onChange={(e) => setSchoolName(e.target.value)}
          value={schoolName}
        />
      </div>
      <div className="input">
        <p>Title of study:</p>
        <input
          type="text"
          onChange={(e) => setTitleOfStudy(e.target.value)}
          value={titleOfStudy}
        />
      </div>
      <div className="input">
        <p>Date from:</p>
        <input
          type="number"
          min="1900"
          max="2099"
          onChange={(e) => setstudyDateFrom(e.target.value)}
          value={studyDateFrom}
        />
      </div>
      <div className="input">
        <p>Date to:</p>
        <input
          type="number"
          min="1900"
          max="2099"
          onChange={(e) => setstudyDateTo(e.target.value)}
          value={studyDateTo}
        />
      </div>
    </div>
  );
}

export default AddEducation;
