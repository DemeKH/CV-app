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

  const [inputPageIndex, setInputPageIndex] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      {isFormOpen && (
        <AddInfoForm>
          <h1 className="col-span-3 text-orange-400 text-3xl text-center m-5">
            Add Information
          </h1>
          {inputPageIndex === 0 && (
            <>
              <div className="">
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
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setInputPageIndex((prev) => prev + 1);
                }}
                className="block ml-auto mt-2 text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md sm:w-auto px-5 py-2 text-center"
              >
                Next
              </button>
            </>
          )}
          {inputPageIndex === 1 && (
            <>
              <div className="md:flex gap-5">
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
              </div>
              <div className="flex flex-row justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setInputPageIndex((prev) => prev - 1);
                  }}
                  className="mt-2 w-full bg-white border-blue-700 border text-blue-700 font-medium rounded-lg text-md sm:w-auto px-5 py-2 text-center"
                >
                  Prev
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setInputPageIndex((prev) => prev + 1);
                  }}
                  className="block ml-auto mt-2 text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md sm:w-auto px-5 py-2 text-center"
                >
                  Next
                </button>
              </div>
            </>
          )}
          {inputPageIndex === 2 && (
            <>
              <div className="md:flex gap-5">
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
              </div>
              <div className="flex flex-row justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setInputPageIndex((prev) => prev - 1);
                  }}
                  className="mt-2 w-full bg-white border-blue-700 border text-blue-700 font-medium rounded-lg text-md sm:w-auto px-5 py-2 text-center"
                >
                  Prev
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsFormOpen(false);
                    setInputPageIndex(() => 0);
                  }}
                  className="block ml-auto mt-2 text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md sm:w-auto px-5 py-2 text-center"
                >
                  Submit
                </button>
              </div>
            </>
          )}
          <div className="flex justify-center">
            <button
              className={`${
                inputPageIndex === 0
                  ? "bg-orange-400 text-white"
                  : "bg-white text-orange-400"
              } rounded-full border border-orange-400 px-4 py-2 m-4`}
            >
              1
            </button>
            <button
              className={`${
                inputPageIndex === 1
                  ? "bg-orange-400 text-white"
                  : "bg-white text-orange-400"
              } rounded-full border border-orange-400 px-4 py-2 m-4`}
            >
              2
            </button>
            <button
              className={`${
                inputPageIndex === 2
                  ? "bg-orange-400 text-white"
                  : "bg-white text-orange-400"
              } rounded-full border border-orange-400 px-4 py-2 m-4`}
            >
              3
            </button>
          </div>
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
