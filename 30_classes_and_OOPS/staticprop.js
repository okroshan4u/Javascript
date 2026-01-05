class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    // createId(){
    //     return `123`
    // }                // here nothing is there to stop accessing it so anyone can access it but sometime we do not want to do that

    static createId(){  // here static will do that work(will prevent to accessing it ) for us
        return `123`
    } 
}

const Roshan = new User("Roshan")

// console.log(Roshan.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)  // this super key should be at the top before accessing this ow it will throw error
        this.email = email
    }

    addCourse(){
        console.log(`Teacher has added a new course named : ${this.username}`)
    }
}

const teacherOne = new Teacher("Rosahn", "okroshan4u@gmail.com")

// teacherOne.logMe()
console.log(teacherOne.createId())