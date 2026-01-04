class User{
    constructor(username,email,password ){
        this.username = username
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()  // here we are useing underscore(_) cause we want to separate them
        // we use _password to store the real value
        // so it doesn’t conflict with the getter and setter
    }
    set password(value){
        this._password = value  // if we will not the underscore(_) before password then there will be a race like who is going to set the value first and we get the error max callstack reached
        // here we are setting the same value as provided by the user but if anyone is trying to access that then we are changing somthing that from getter then we are giving that
    }

    get email(){
        return `${this._email.toUpperCase()}roshan`
    }
    set email(value){
        this._email =value
    }

}

const Roshan = new User("Roshan", "okroshan4u@gmail.com","abc")

console.log(Roshan.password)
console.log(Roshan.email)

