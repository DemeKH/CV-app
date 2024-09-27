import { useState } from "react";

export function AddEducation() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [studyDateFrom, setstudyDateFrom] = useState("");
  const [studyDateTo, setstudyDateTo] = useState("");

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
          type="date"
          onChange={(e) => setstudyDateFrom(e.target.value)}
          value={studyDateFrom}
        />
      </div>
      <div className="input">
        <p>Date to:</p>
        <input
          type="date"
          onChange={(e) => setstudyDateTo(e.target.value)}
          value={studyDateTo}
        />
      </div>
    </div>
  );
}

export default AddEducation;
