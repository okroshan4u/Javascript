// weakmap
let weak = new WeakMap();

let obj = {key: "Roshan"};

weak.set(obj, "Employee");

obj = null

console.log(weak.get(obj))

// weakset 

let weakset = new WeakSet();

let obj = {name: "Roshan"}

weakset.add(obj);
obj = null

console.log(weakset.has(obj))
