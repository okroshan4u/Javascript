// Singleton 
// Object.create  // here when we create a object like this means using contructor then it is singleton

// An object literal ({}) is often called a singleton because only one object instance exists.

// Constructors (new) and Object.create() do NOT create singletons by default because they can create multiple instances.

// A true singleton is achieved by controlling object creation so that the same instance is always returned.

// ++++++++++++++++++++++++++++++++++++
// object literals 

const  newsym = Symbol("key1")

// console.log(newsym);

const jsuser = {
    name: "Roshan",   // internally the js takes keys as string means name as "name"
    age : 25,
    "Full name": "Roshan kumar ram",
    [newsym]: "mykey1",
    location:"Odisha",
    email:"okroshan4u@gmail.com",
    isLoggedIn : false,
    lastLogingDays : ["Monday", "Friday"]
}
// ways to access the object values
// console.log(jsuser.name)
// console.log(jsuser["name"]);
// console.log(jsuser["Full name"]);

//how to ass and access a symbol in object 
// console.log(jsuser);
// console.log(typeof newsym);
// or 
// console.log(typeof jsuser[newsym]);
// console.log(Object.getOwnPropertySymbols(jsuser))

// loacking the object

jsuser.email = "okroshan4u@outlook.com";

// console.log(jsuser.email);

// Object.freeze(jsuser); // here we have loacked the object and now nothing can be changed

jsuser.email = "okroshan4u@yahoo.com";
// console.log(jsuser.email);

// calling a mehod 
jsuser.greetings = function(){
    console.log("Hello Roshan kumar ram how are you today??");
}
jsuser.greetingsTwo = function(){
    console.log(`Hello ${this.name} how are you today??`);
}
// console.log(jsuser.greetings());
jsuser.greetings(); // here we are calling funtion 
jsuser.greetingsTwo(); // here we are calling funtion 