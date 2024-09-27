import { useState } from "react";

export function AddExperience() {
  const [companyName, setCompanyName] = useState("");
  const [positionAtCompany, setPositionAtCompany] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [companyDateFrom, setCompanyDateFrom] = useState("");
  const [companyDateTo, setCompanyDateTo] = useState("");

  return (
    <div className="experience-info info">
      <div className="input">
        <p>Company name:</p>
        <input
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
        />
      </div>
      <div className="input">
        <p>Position title:</p>
        <input
          type="text"
          onChange={(e) => setPositionAtCompany(e.target.value)}
          value={positionAtCompany}
        />
      </div>
      <div className="input">
        <p>Responsibilities:</p>
        <textarea
          onChange={(e) => setResponsibilities(e.target.value)}
          value={responsibilities}
        ></textarea>
      </div>
      <div className="input">
        <p>Date from:</p>
        <input
          type="date"
          onChange={(e) => setCompanyDateFrom(e.target.value)}
          value={companyDateFrom}
        />
      </div>
      <div className="input">
        <p>Date to:</p>
        <input
          type="date"
          onChange={(e) => setCompanyDateTo(e.target.value)}
          value={companyDateTo}
        />
      </div>
    </div>
  );
}

export default AddExperience;
