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
      <div className="relative w-5/6 h-5/6 2xl:w-2/5 2xl:h-4/5 xl:w-2/5 xl:h-4/5 lg:w-2/4 lg:h-4/5 md:w-4/6 md:h-5/6 sm:w-3/4 sm:h-4/5 shadow-lg">
        <div className="bg-gray-200 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-4xl sm:text-3xl mt-2 mb-2">{`${firstName} ${lastName}`}</h1>
          <div className="flex gap-5 mb-2">
            {window.innerWidth < 550 ? (
              <div className="flex flex-col justify-center items-center gap-3 mb-2">
                <p className="text-xs sm:text-sm">Email: {email}</p>
                <p className="text-xs sm:text-sm">Phone Number: {phoneNum}</p>
              </div>
            ) : (
              <div className="flex gap-5 mb-2">
                <p className="text-sm sm:text-sm">Email: {email}</p>
                <p className="text-sm sm:text-sm">Phone Number: {phoneNum}</p>
              </div>
            )}
          </div>
        </div>

        <div className="m-4">
          <h3 className="bg-gray-50 text-center font-medium">Education</h3>
          <ul className="p-2 list-disc font-medium">
            <li>
              {schoolName}, {titleOfStudy}
              <p className="text-gray-300 italic">
                {` ${studyDateFrom} - ${
                  studyDateTo > now ? `expected ${studyDateTo}` : studyDateTo
                }`}
              </p>
            </li>
          </ul>
        </div>

        <div className="m-4">
          <h3 className="bg-gray-50 text-center font-medium">
            Work Experience
          </h3>
          <ul className="p-2 list-disc font-medium">
            <li>
              {companyName}, {positionAtCompany}
              <p className="text-gray-300 italic">
                {`${companyDateFrom} - ${companyDateTo}`}
              </p>
              <p className="text-gray-500 italic">{responsibilities}</p>
            </li>
          </ul>
        </div>
        <svg
          className="absolute top-0 left-0 m-1 w-5 h-5 cursor-pointer"
          onClick={() => setIsFormOpen(true)}
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 25 4.03125 C 24.234375 4.03125 23.484375 4.328125 22.90625 4.90625 L 13 14.78125 L 12.78125 15 L 12.71875 15.3125 L 12.03125 18.8125 L 11.71875 20.28125 L 13.1875 19.96875 L 16.6875 19.28125 L 17 19.21875 L 17.21875 19 L 27.09375 9.09375 C 28.246094 7.941406 28.246094 6.058594 27.09375 4.90625 C 26.515625 4.328125 25.765625 4.03125 25 4.03125 Z M 25 5.96875 C 25.234375 5.96875 25.464844 6.089844 25.6875 6.3125 C 26.132813 6.757813 26.132813 7.242188 25.6875 7.6875 L 16 17.375 L 14.28125 17.71875 L 14.625 16 L 24.3125 6.3125 C 24.535156 6.089844 24.765625 5.96875 25 5.96875 Z M 4 8 L 4 28 L 24 28 L 24 14.8125 L 22 16.8125 L 22 26 L 6 26 L 6 10 L 15.1875 10 L 17.1875 8 Z" />
        </svg>
      </div>
    </>
  );
};

export default CV;
