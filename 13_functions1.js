

function printmyname() {
    console.log("R");
    console.log("o");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
}
// printmyname();

// function add(num1, num2){
//     console.log(num1+num2)
// }

// add(3,5);
// const result = add(3,5);
// console.log("Result is : ",result); // undefined => cause the function is not returning anything it is just logging that is why


function add(num1, num2){  // here num1 and num2 are knowon as parameters 
    // return (num1+num2);
    let result =  (num1+num2);
    return result;
}

// add(3,5);
const result = add(3,5); // here 3 and 5 are known as arguments 
// console.log("Result is : ",result); // 8

function loginUserMessage(username = "Jalic"){  // here we are passing a default value to the username if user is not providing any value 
    if(username){
         return `${username} just loggedin `
    }else{
        return "provide username please"
    }
   
}

// const res = loginUserMessage("Roshan");
const res = loginUserMessage(); 
// console.log(res);


// ******************* rest operator *********************

// function calculateCartPrice(...num){ // here ... is the rest operator
//     return num;
// }
function calculateCartPrice(val1, val2,...num){ 
    return num;                                 // [520,1458] will be returned
}
// console.log(calculateCartPrice(200,120,520,1458));

const user = {
    username: "Roshan",
    money : 452
}


function handleObject(anyObject){
    return `The username is ${anyObject.username} and the money user has is ${anyObject.money}`
}

// console.log(handleObject(user))
// console.log(handleObject({
//     username:"Janny",
//     money: 251
// }))

const newArray = [200,100,145,854];

function returnSecondValue(getarray){
    return getarray[1];
}

// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([145,258,200,1254]))