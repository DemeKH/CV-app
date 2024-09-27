function AddGenInformation() {
    return ( 
        <div className="general-info">
            <div className="names-input">
            <p>First Name</p>
            <input type="text" />

            <p>Last Name</p>
            <input type="text" />
                
            </div>
            <p>Email:</p>
            <input type="email"/>

            <p>Phone number:</p>
            <input type="number"/>
        </div>
     );
}

export default AddGenInformation;