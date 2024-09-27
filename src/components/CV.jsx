const CV = ({
  setIsFormOpen,
  schoolName,
  titleOfStudy,
  studyDateFrom,
  studyDateTo,
  firstName,
  lastName,
  email,
  phoneNum,
  companyName,
  positionAtCompany,
  responsibilities,
  companyDateFrom,
  companyDateTo,
}) => {
  const now = new Date().getFullYear();

  return (
    <>
      <div className="cv">
        <h1>{`${firstName} ${lastName}`}</h1>
        <div className="contact-info section">
          <p>Email: {email}</p>
          <p>Phone: {phoneNum}</p>
        </div>
        <div className="section">
          <h3>{schoolName}</h3>
          <ul>
            <li>
              {titleOfStudy},
              {` ${studyDateFrom} - ${
                studyDateTo > now ? `expected ${studyDateTo}` : studyDateTo
              }`}
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>{companyName}</h3>
          <ul>
            <li>
              {positionAtCompany}, {`${companyDateFrom}-${companyDateTo}`}
            </li>
          </ul>
          <p>{responsibilities}</p>
        </div>
      </div>
      <button onClick={() => setIsFormOpen(true)} className="main-btn">
        Edit
      </button>
    </>
  );
};

export default CV;
