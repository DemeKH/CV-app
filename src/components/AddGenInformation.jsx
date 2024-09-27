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
    <div className="general-info info">
      <div className="names-input input">
        <p>First Name:</p>
        <input
          type="text"
          className="name-input"
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
        />

        <p>Last Name:</p>
        <input
          type="text"
          className="name-input"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <div className="input">
        <p>Email:</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="input">
        <p>Phone number:</p>
        <input
          type="number"
          onChange={(e) => setPhoneNum(Number(e.target.value))}
          value={phoneNum}
        />
      </div>
    </div>
  );
}

export default AddGenInformation;
