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
