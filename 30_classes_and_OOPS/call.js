function SetUsername(username) {
    // Performs complex database operations related to setting the username
    this.username = username
    console.log("SetUsername called")
}

function createUser(username, email, password) {
    // Calls SetUsername, but since it's not bound to this object,
    // the username is not stored on the new user instance
    // SetUsername(username)

    //Regular function calls lose this
    // .call(), .apply(), or .bind() are used to share this explicitly

    SetUsername.call(this, username)

    // Assign email and password to the newly created user object
    this.email = email
    this.password = password
}

const userOne = new createUser("Roshan", "okroshan4u@gmail.com", "123")

// Logs the created user object to the console
console.log(userOne)
