function add(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = "";

  let carry = 0;
  
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += a[i--] - "0";
    if (j >= 0) sum += a[j--] - "0";

    sum = sum + carry;

    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  return result;
}

let a = "9999";
let b = "999";

console.log(add(a, b));
