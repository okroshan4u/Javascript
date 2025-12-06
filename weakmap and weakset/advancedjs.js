let weak = new WeakMap();

let obj = {key: "Roshan"};

weak.set(obj, "Employee");

obj = null
console.log(weak.get(obj))