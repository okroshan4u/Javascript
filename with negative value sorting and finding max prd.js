const arr = [-3,-2,5,7];

function maxPrd(arr){
  const sorted = [...arr].sort((a,b)=>b-a);
  const n = sorted.length;
  
  return Math.max(
    sorted[0]*sorted[1],
    sorted[n-1]*sorted[n-2]
    
    )
}

console.log(maxPrd(arr))