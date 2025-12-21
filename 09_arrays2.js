const marvel_heros = ["Ironman", "Captain", "Spiderman"]
const dc_heros = ["Superman", "Batman", "wonderwoman"]

// +++++++++++++++++++merging of array+++++++++++++++++++++++++++++++++
// marvel_heros.push(dc_heros); // // it directly pushes the dc_heros arrays as argument meaning it modifies the original array

// console.log(marvel_heros); 

// const new_merged_array = marvel_heros.concat(dc_heros); // it gives a new array with merged array and does not modifies the original array

// console.log(new_merged_array);

// const merged = [...marvel_heros , ...dc_heros]; // it does not have any limitations we can give as much as array we want 
// console.log(merged);

const indan_super_heros  = ["Nagraj", "Shaktiman","Juniorji","Hero"];

// const all_heros = [...marvel_heros,...dc_heros,...indan_super_heros];
// console.log(all_heros);


const nested_arrays = [1,2,3,[4,5,6],[7,8,[9,10,11,[13,14],12],15],"Roshan", null,["t"]] // now this is a nested array and we want to only simple array with all the values  for that we have flat method below

const flatted_array_1 = nested_arrays.flat(1) // here 1 means flat the array with 1 depth 
const flatted_array_2 = nested_arrays.flat(2) // here 2 means flat the array with 2 depth 
const flatted_array = nested_arrays.flat(Infinity) // here infinity means flat the array with max depth possible , we could have given 1,2 as per our choice

// console.log(flatted_array_1);
// console.log(flatted_array_2);
// console.log(flatted_array);


// console.log(Array.isArray("Roshan"));
// console.log(Array.from("Roshan")); // it will convert into array from "Roshan"

// console.log(Array.from({name:"Roshan"})); // here we have to tell that we want to make array of keys or values 

const score1 = 200;
const score2 = 100;
const score3 = 300;

// console.log(Array.of(score1, score2,score3)); so it pushes all in a new array 
// console.log(Array.of(marvel_heros, dc_heros, indan_super_heros ));