var c = 200
let d = 145
if(true){
    let a = 10;
    const b = 25;
    var c = 35;

    // console.log(c + d)   // whatever is declared outside or above/previous of the scope that is accesible to the inner scope and vice versa is not
}

function getarray(){
    var c = 400;   // since this var is inside a funtion hence it is not accessible

}

// console.log(a)
// console.log(b)
// console.log(c)  // 35 as var is a grobal or funtional scope 


console.log(addone(5));  // this will execute due to hoisting 

function addone(num){
    return num + 1;         // here we can define the funtion in two ways like addone and addtwo funtion
}

// addone(5)



// console.log(addtwo(5)); // here it will throw an error cause  
const addtwo = function(num){
    return num + 2;
}

// addtwo(4) here it will execute 


// Function Expression + const hoisting

// addtwo is a function expression

// It is stored in a variable (const addtwo)

// Variables declared with const are hoisted but NOT initialized

// So JavaScript treats it like this:

// const addtwo;   // hoisted but uninitialized ❌
// console.log(addtwo(5)); // ReferenceError
// addtwo = function(num){
//     return num + 2;
// }


// 📌 This puts addtwo in the Temporal Dead Zone (TDZ)
// Accessing it before initialization causes a ReferenceError