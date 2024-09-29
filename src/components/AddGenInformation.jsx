function AddGenInformation({
  firstName,
  lastName,
  email,
  phoneNum,
  setfirstName,
  setLastName,
  setPhoneNum,
  setEmail,
}) {
  return (
    <div className=" grid grid-cols-2 grid-rows-3 gap-x-5">
      <div className="">
        <label className="mb-2 text-sm font-medium text-black">
          First name:
        </label>
        <input
          type="text"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. Demetre"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
      </div>
      <div className="">
        <label className="mb-2 text-sm font-medium text-black">
          Last name:
        </label>
        <input
          type="text"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. Khvedelidze"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className=" col-span-2">
        <label className="mb-2 text-sm font-medium text-black"> Email:</label>
        <input
          type="email"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div className=" col-span-2">
        <label className="mb-2 text-sm font-medium text-black">
          Phone number:
        </label>
        <input
          type="number"
          className="bg-white text-orange-400 font-medium border border-orange-400 hover:bg-orange-400 hover:text-white hover:placeholder:text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
          placeholder="e.g. 558236914"
          onChange={(e) => setPhoneNum(Number(e.target.value))}
          value={phoneNum}
          required
        />
      </div>
    </div>
  );
}

export default AddGenInformation;
