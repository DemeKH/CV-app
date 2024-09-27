function AddGenInformation() {
    return ( 
        <div className="general-info">
            <div className="names-input">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
                
            </div>
            <input type="email"/>
            <input type="number"/>
        </div>
     );
}

export default AddGenInformation;