import { useState } from "react";
import AddInfoForm from "./components/AddInfoForm";
import AddGenInformation from "./components/AddGenInformation.jsx";
import AddExperience from "./components/AddExperience.jsx";
import AddEducation from "./components/AddEducation.jsx";
import CV from "./components/CV";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [positionAtCompany, setPositionAtCompany] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [companyDateFrom, setCompanyDateFrom] = useState("");
  const [companyDateTo, setCompanyDateTo] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [studyDateFrom, setStudyDateFrom] = useState("");
  const [studyDateTo, setStudyDateTo] = useState("");

  return (
    <div className="app ">
      {isFormOpen && (
        <AddInfoForm>
          <h1 className="text-white text-3xl text-center mb-4">
            Add Information
          </h1>
          <AddGenInformation
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNum={phoneNum}
            setfirstName={setfirstName}
            setLastName={setLastName}
            setPhoneNum={setPhoneNum}
            setEmail={setEmail}
          />
          <AddEducation
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            titleOfStudy={titleOfStudy}
            setTitleOfStudy={setTitleOfStudy}
            studyDateFrom={studyDateFrom}
            setstudyDateFrom={setStudyDateFrom}
            studyDateTo={studyDateTo}
            setstudyDateTo={setStudyDateTo}
          />
          <AddExperience
            companyName={companyName}
            setCompanyName={setCompanyName}
            positionAtCompany={positionAtCompany}
            setPositionAtCompany={setPositionAtCompany}
            responsibilities={responsibilities}
            setResponsibilities={setResponsibilities}
            companyDateFrom={companyDateFrom}
            setCompanyDateFrom={setCompanyDateFrom}
            companyDateTo={companyDateTo}
            setCompanyDateTo={setCompanyDateTo}
          />

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setIsFormOpen(false);
            }}
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </AddInfoForm>
      )}
      {!isFormOpen && (
        <CV
          setIsFormOpen={setIsFormOpen}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNum={phoneNum}
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          studyDateFrom={studyDateFrom}
          studyDateTo={studyDateTo}
          companyName={companyName}
          positionAtCompany={positionAtCompany}
          responsibilities={responsibilities}
          companyDateFrom={companyDateFrom}
          companyDateTo={companyDateTo}
        />
      )}
    </div>
  );
}

export default App;
