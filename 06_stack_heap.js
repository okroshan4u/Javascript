let name1 = "Roshan"
let name2 = name1
name2 = "Ram"

// console.table([name1,name2]) // all the primitive datatypes goes in stack memory and actually they get copied as we assingn 

let obj = {
    name:"Roshan",
    age : 22
}

let obj2 = obj
obj2.age = 23

console.log(obj)
console.log(obj2) // all the non primitive will go 
// in heap memory means only the variables 
// names of the non primitive will go in the
//  stack memory but their value will go in 
// the heap memory and it does not heap does
//  not copy it directly changes in the original 
// as it reference to the same heap memory
