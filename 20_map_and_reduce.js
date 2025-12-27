const coding = [2,3,4,7]
// const values = coding.forEach((item)=>{
//     console.log(item)
// })

// const values = coding.map((item)=>{
//     return item*2;  // it will return a new array with modified values 
// })

// console.log(values)


const newarr = []

// const newnums = coding.filter((nums)=>{
//     // console.log(nums*2)
//     return nums*2;
// })
coding.filter((nums)=>{
    // console.log(nums*2)
    newarr.push(nums*2);
})

// console.log(newarr)
// console.log(newarr.pop())
// console.log(newarr)

// chaning in map 
const numarr = [];
// const newnums = coding.map((num)=> num*3).map((num)=> num +1).filter((num)=>{
//     if(num > 20){
//         numarr.push(num);
//     }else{
//         // console.log(num)
//     }
// })

// console.log(numarr)

// const reducenum = coding.reduce((acc, currval)=>{
//     console.log(`${acc} and the ${currval}`);
//     return acc + currval
// },0)

// console.log(reducenum);

const shoppingCart = [
    {
        course: "py",
        price:20
    },
    {
        course: "rb",
        price:120
    },
    {
        course: "swift",
        price:125
    },
    {
        course: "node",
        price:400
    },
]

const totalprice = shoppingCart.reduce((acc,item)=> {
    return acc + item.price 
},0)

console.log(totalprice)
