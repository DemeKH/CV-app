export function AddExperience({
  companyName,
  setCompanyName,
  positionAtCompany,
  setPositionAtCompany,
  responsibilities,
  setResponsibilities,
  companyDateFrom,
  setCompanyDateFrom,
  companyDateTo,
  setCompanyDateTo,
}) {
  return (
    <div className=" grid grid-cols-2 grid-rows-3 gap-x-5">
      <div className="mb-5 col-span-2">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Company name:
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. Dimka Technologies"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 col-span-2">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Position at company:
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. Software Engineer"
          value={positionAtCompany}
          onChange={(e) => setPositionAtCompany(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 col-span-2">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Responsibilities:
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-5 col-span-1">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          From:
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. 2020"
          onChange={(e) => setCompanyDateFrom(e.target.value)}
          value={companyDateFrom}
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
          placeholder="e.g. 2024"
          onChange={(e) => setCompanyDateTo(e.target.value)}
          value={companyDateTo}
          required
        />
      </div>
    </div>
  );
}

export default AddExperience;
