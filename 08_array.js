//array

const arr = [2,"Roshan", 25,  't', null];

// console.log(arr[0]);
// console.log(arr);
arr.push(3);

console.log("Printing array at line 9",arr);

result = arr.pop();  // Removes the original array
// console.log("The popped element from the array is ", result);
// console.log(arr);

const index = arr.indexOf("Roshan");

// console.log(arr.indexOf("Roshan")) // 1 =>it is in the array so it is throwing 1
// console.log(arr.indexOf("R")) // -1 => it is not in the array so it is throwing -1

// console.log(arr.slice(1,3)); // slice does not modifies the original array
// console.log(arr);

let removed;

// if( index !== -1){ // so here we are saying that run  only if it is there in the array
//     removed = arr.splice(index, 1); // splice modifies the original array 
   
// }
  // console.log(removed);
  // console.log(arr);

  // console.log(arr.splice(1,3))
  // console.log(arr);


  // console.log(arr.includes(9));

console.log("Printing array at line 38",arr);

  // console.log(arr.join())
  //or
  const newarr = arr.join(); // converts the array into a string 
  console.log(newarr);
  console.log(typeof newarr);

  // arr.unshift("new"); // modifies the original array and add the passed argument at the first positon of the existing array by shifting all the arrays to the right which is not good for larger array
  // console.log(arr.length);
  // console.log(arr);


// arr.shift()// it removes the first element from the array and shift allthe elemnent to the left and reduces the lenght of the original array
// console.log(arr.length);
// console.log(arr);

