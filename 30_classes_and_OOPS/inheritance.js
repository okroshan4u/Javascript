class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is : ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`Teacher has added a course by the name ${this.username}`)
    }

}

const userOne = new Teacher("Roshan","okroshan4u@gmail.com", "123")

// userOne.addCourse()
// userOne.logMe()


const userTwo = new User("Roshan")
// userTwo.logMe()
// userTwo.addCourse() // error as it will not have the access of the addCourse 


// console.log(userOne instanceof Teacher) // true
// console.log(userOne instanceof User) // true
// console.log(userTwo instanceof User) // true
console.log(userTwo instanceof Teacher) // false