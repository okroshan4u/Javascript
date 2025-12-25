// with normal if else condition we can also define the like below
const balance = 100;
// if(balance>20) console.log("testing the if else loop"), console.log("reteting");

const emptyObect = {}

if(Object.keys(emptyObect).length === 0){   // way to check whether the object is empty or not
    // console.log("object is empty");
}


const arr = [];// true
// const arr = ""; // here i have not given anything or even space between so it will be a false statement a space that alone made the statement true that is why the first statement executed

if(arr){
    // console.log("if condition is true then it will run only");
}else{
    // console.log("On false this will be printed");
}

// we have the falsy value 

// false
// 0
// -0
// 0n        // BigInt zero
// ""        // empty string
// null
// undefined
// NaN


// we have the truthy value 
// true
// 1
// -1
// "hello"
// " "        // string with a space
// []
// {}
// function () {}

// ******************************************
// Nullish Coalescing opertor (??): null or undefined

// let val1 = 5 ?? 10
// let val1 = null ?? 10 // if null then print then take the value 10
let val1 = undefined ?? 10 
// console.log(val1)

// ***********************************
// Terniary Operator
// condition ? true:false

const bagPrice = 1000;

bagPrice<500?console.log("We can buy that bag"):console.log("bag is not affordable")