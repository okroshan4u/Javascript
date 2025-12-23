// ########## Destructuring of Objects ############

const course = {
    courseName :"js in hindi",
    price : 1000,
    instructor: "Roshan"
}

// console.log(course.instructor) // every timewe have to write course then the key so that we can the desired value
// so we go for the destructuring 

// const {instructor} = course;
//or
const {instructor:teacher} = course;

// console.log(instructor);
console.log(teacher);