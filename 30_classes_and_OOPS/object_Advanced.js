console.log(Math.PI)

Math.PI = 5
// console.log(Math.PI) // 3.14 so Pi is not changeable cuause on the engine level
// it is hardCoded writable = false , enumerable = flase and configurable = flase 
// very deeply that is we can not change its value

// *********** to see that ************

const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// since everything in js is an object so we can create a object and set it own property
// but should be our own 

const tea = {
    name:"Elaichi Tea",
    price : 250,
    isAvailable:true,
    greet:function(){
        console.log("code will break")
    }
}

console.log(Object.getOwnPropertyDescriptor(tea,"name"))
//{
    //   value: 3.141592653589793,
    //   writable: false,
    //   enumerable: false,
    //   configurable: false
    // }
    
    Object.defineProperty(tea,'name',{
        writable:false,
        enumerable:false
    })
    
    console.log(Object.getOwnPropertyDescriptor(tea,"name"))


    tea.name = "Roshan" //{ price: 250, isAvailable: true } so it is not changing since we have 
    // console.log(tea)   // did writable = false


// for (const [key,value] of Object.entries(tea)) { 
//         console.log(`${key}: ${value}`)  // here we will get the function as well but we only wanted key-value pairs
// }

// for (const [key,value] of Object.entries(tea)) { 
//     if(typeof value !== 'function'){
//         console.log(`${key}: ${value}`)    
//     }
    
// }
