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
    <div className=" grid grid-cols-2 grid-rows-3 gap-x-5">
      <div className="mb-5 col-span-2">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          School name:
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. Tbilisi state university"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 col-span-2">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title of study:
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. Computer Science"
          value={titleOfStudy}
          onChange={(e) => setTitleOfStudy(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 col-span-1">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          From:
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. 2016"
          onChange={(e) => setstudyDateFrom(e.target.value)}
          value={studyDateFrom}
          required
        />
      </div>
      <div className="mb-5 col-span-1">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          To:
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. 2020"
          onChange={(e) => setstudyDateTo(e.target.value)}
          value={studyDateTo}
          required
        />
      </div>
    </div>
  );
}

export default AddEducation;
