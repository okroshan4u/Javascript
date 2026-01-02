function multipybythree(num){
    return num*3;
}

multipybythree.power = 2

console.log(multipybythree(3))
console.log(multipybythree.prototype)
console.log(multipybythree.power)


function creatUser(username, price){
    this.username = username
    this.price = price
}
// above one the a function and but behind 
// the scene everything is a object so it has 
// the properties and we can add our custom properties to it

// &&&&&&&&&&&&&&& below how we can add custom properties &&&&&&&&&&&&&&&&&&&

creatUser.prototype.increment = function(){
    this.price++   // here this refers to the current context
}

creatUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}


console.log(creatUser.prototype)

// const userOne = creatUser("Roshan", 25) // here we are not using the new keyword 
// // that why it is gining the undefined cause it does not know the context 
// // but with new it will know 
// console.log(userOne) 


const userOne = new creatUser("Roshan", 25)
const userTwo = new creatUser("Ram", 250)

// userOne.printMe()
// userOne.increment()
userTwo.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this
 is bound to the newly created object. If no explicit return value is specified from the constructor, 
 JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

