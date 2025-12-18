const arr = [1,2,3,4,5,6
// const n = arr.length
// // console.log(n)
// let max = 0;
// for(let i = 0; i<arr.length;i++){
//     for(let j = 0; j<arr.length ; j++){
//         const  product = arr[i]*arr[j];
//         if(product > max){ 
//           max = product;
            
//         }
//     }
// }

// console.log(max)

// if array has contined only postive numbers then 
// sorting in descending order
// console.log("if we are sorting in descending order")
// arr.sort((a,b)=> b-a);
// console.log(arr)

// console.log(arr[0]*arr[1]);

// sorting in ascending order

// console.log("if we are sorting in ascending order")
// arr.sort((a,b)=> a - b);
// console.log(arr)
// console.log(arr[arr.length - 1]* arr[arr.length-2]);


function maxPrd(arr){
    const max1 = Math.max(...arr);
    
    const remaining = arr.filter((num) => num !== max1);
    const max2 = Math.max(...remaining);
    
    
    return max1*max2;
}

const maxhere = maxPrd(arr)

console.log(maxhere)