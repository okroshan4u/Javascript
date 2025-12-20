// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1) // type coersion
// console.log(2>"1") // type coersion
// console.log(2<"1") // type coersion

// console.log(null>0) //== and relational operators use different coercion rules in JavaScript.
// console.log(null==0) //For comparisons (> < >= <=), null is converted to 0, so null >= 0 is true while null > 0 is false.
// console.log(null>=0)// For ==, null is only equal to undefined, not 0, so null == 0 is false

const id = Symbol("123")
const id2 = Symbol("123")
// console.log(id === id2) // flase

const arr = ["Shaktiman", "Junior ji" , "Hero" ,"He Man", "Lal Pari"]

const obj  = {
    name: "Roshan",
    age : 23
}
const myfun = function(){
    console.log("This is inside a function")
}

// console.log(typeof myfun) // function but actually it is function object
// console.log(typeof arr) // object 
// console.log(typeof obj) // object 