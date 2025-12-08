const nums = [1,2,3]

// const modified = nums.map(function(num){
//     return num*2;
// })

const modified = nums.map((num)=>{
    return num*2;
})

console.log(modified);