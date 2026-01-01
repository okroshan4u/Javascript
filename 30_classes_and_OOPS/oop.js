const user = {
    username:"Roshan",
    loginCount : 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) // {} => empty object

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    return this;
}

// const userOne = User("Roshan",14, true)
// const userTwo = User("Rahul",3, false)  // here this will oberride the prev one cause it is creating a new instance
// console.log(userOne)


const userOne = new User("Roshan",14, true)
const userTwo = new User("Rahul",3, false)  // here this will oberride the prev one cause it is creating a new instance
console.log(userOne)
console.log(userTwo)