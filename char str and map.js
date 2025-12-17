const arr = [100, "q", "Roshan", 10, 8,"c"];

const number = [];
const str1 = [];
const ch = [];

arr.forEach((ele)=>{
  if(typeof ele == "number") number.push(ele);
  else if (typeof ele == "string" && ele.length === 1) ch.push(ele);
  else if (typeof ele == "string") str1.push(ele)
})


console.log(number, str1,ch)