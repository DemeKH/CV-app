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
      <div className="col-span-2 ">
        <label className="mb-2 text-sm font-medium text-black">
          Company name:
        </label>
        <input
          type="text"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. Dimka Technologies"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
      <div className=" col-span-2">
        <label className="mb-2 text-sm font-medium text-black">
          Position at company:
        </label>
        <input
          type="text"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. Software Engineer"
          value={positionAtCompany}
          onChange={(e) => setPositionAtCompany(e.target.value)}
          required
        />
      </div>
      <div className=" col-span-2">
        <label className="mb-2 text-sm font-medium text-black">
          Responsibilities:
        </label>
        <textarea
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
        ></textarea>
      </div>
      <div className=" col-span-1">
        <label className="mb-2 text-sm font-medium text-black">From:</label>
        <input
          type="number"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. 2020"
          onChange={(e) => setCompanyDateFrom(e.target.value)}
          value={companyDateFrom}
          required
        />
      </div>
      <div className=" col-span-1">
        <label className="mb-2 text-sm font-medium text-black">To:</label>
        <input
          type="number"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
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
