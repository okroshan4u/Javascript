// ES6 ==> these all came after the es6
class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toLowerCase()}`
    }
}

const userOne = new user("Roshan","okroshan4u@gmail.com", "12354")

console.log(userOne.encryptPassword())
console.log(userOne.changeUserName())


// behind the scene if we do have classes in js

function User(username, email,password){
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toLowerCase()}`
}

