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
      <div className="mb-5">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          First name:
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. Demetre"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Last name:
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. Khvedelidze"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5 col-span-2">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email:
        </label>
        <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div className="mb-5 col-span-2">
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Phone number:
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
