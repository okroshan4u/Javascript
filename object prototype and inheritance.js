const user = {
  name:"Roshan"
}
console.log(user.toString()); // even though the toString is not in user js will get the from the prototype 

const parent = {
  greet() {
    console.log("Hello from parent");
  },
  say(){
      console.log("Hi from company")
  }
};

const child = Object.create(parent);

child.name = "Roshan";

// child.greet(); // Hello from parent
child.say(); // Hello from parent



