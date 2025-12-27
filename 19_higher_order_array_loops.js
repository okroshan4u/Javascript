// for of
// ["","",""]  ==> there may be a case where there is string inside the array or objects  inside the array
// [{},{},{}]


// for (const element of object) { // here orbject means on any element like array or object
    
// }
// const arr = ["Roshan", "Ram", "Kumar"]
// const arr = [1,2,4,8,41,15]
// for (const elem of arr) {
//     console.log(elem*2);
// }

// const fatc = "Hello Roshan you have failed the examination"
// for (const elem of fatc) {
//     console.log(`the strings of the fact is ${elem}`);
// }

// Map

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")
// map.set('IN', "IND")   // where it will overide the previous value India with IND but the position will be same as before
// console.log(map)

// for (const [key, value] of map) { // to print the keys of map or values
//     console.log(key , ":-", value);
// }


// const myObj = {
//     'name':"Roshan",
//     "last name ": "Kumar ram"
// }
// for (const [i,j] of myObj) {
//     console.log( i , " :-", j); // not iteratable
// }


// To loop through the object we have forin loop
const myObj = {
    'js':"javascript",
    "cpp": "c++",
    rb : "Ruby",
    swift : "Swift",
    py: "Python"
}

// for (const key in myObj) {  

//     console.log(key ,":-",myObj[key])

// }

const prog = ['js', 'rb', 'swift', 'cpp', 'c#']

// for (const key in prog) {
// //    console.log(key) // 0,1,3,4 => yes , internally the js will store the arrays of keys(basically indexs of the array)
//  // and the object is designed for this reason that array have indexes(keys ) starting from 0 but in obj we can define by our own choice
//  console.log(prog[key])

// }                  


const map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "IND") 

// for (const key in map) { // map is not iteratable for forin loop
//     console.log(key)  
    
// }

// *************** for each loop ******************
// const coding = ['js', 'rb', 'swift', 'cpp', 'c#']
const coding = [1, 2, 3, 4 ,5]

// const evalualte = coding.forEach((code)=> code * 2); // foreach loop not return anything
// const evalualte = coding.forEach((code)=> console.log(code * 2)); // foreach loop not return anything
const evalualte = coding.forEach(function(code){
    // console.log(code*2)
} ); 
// console.log(evalualte)

// forEach can take the function as arguments
function printmyname(item){
    console.log("Roshan")
}

// printmyname()

// coding.forEach(printmyname)

// coding.forEach((item, index,array)=>{
//     console.log(item, array, index );
// })

const mycoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

mycoding.forEach((item)=>{
    console.log(item.languageFileName);
})
