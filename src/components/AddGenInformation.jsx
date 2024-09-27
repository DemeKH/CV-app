function AddGenInformation() {
  return (
    <div className="general-info info">
      <div className="names-input input">
        <p>First Name:</p>
        <input type="text" className="name-input" />

        <p>Last Name:</p>
        <input type="text" className="name-input" />
      </div>
      <div className="input">
        <p>Email:</p>
        <input type="email" />
      </div>
      <div className="input">
        <p>Phone number:</p>
        <input type="number" />
      </div>
    </div>
  );
}

export default AddGenInformation;
