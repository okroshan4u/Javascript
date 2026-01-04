const User = {
    _email: 'okroshan4u@gmail.com', // _email says that we are 
    // defining a private
    //  property so underscore(_) tellthat this is private not exactly
    _password:"ABC",

    get email(){
        return this._email.toUpperCase()
    },
    set email (value) {
        this._email = value
    }
}

const Roshan = Object.create(User)

console.log(Roshan.email) // 