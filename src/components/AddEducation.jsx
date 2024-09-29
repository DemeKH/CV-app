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
      <div className=" col-span-2">
        <label className="mb-2 text-sm font-medium text-black">
          School name:
        </label>
        <input
          type="text"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. Tbilisi state university"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
        />
      </div>
      <div className=" col-span-2">
        <label className="mb-2 text-sm font-medium text-black">
          Title of study:
        </label>
        <input
          type="text"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. Computer Science    "
          value={titleOfStudy}
          onChange={(e) => setTitleOfStudy(e.target.value)}
          required
        />
      </div>
      <div className=" col-span-1">
        <label className="mb-2 text-sm font-medium text-black"> From:</label>
        <input
          type="number"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. 2016"
          onChange={(e) => setstudyDateFrom(e.target.value)}
          value={studyDateFrom}
          required
        />
      </div>
      <div className=" col-span-1">
        <label className="mb-2 text-sm font-medium text-black"> To:</label>
        <input
          type="number"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
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
