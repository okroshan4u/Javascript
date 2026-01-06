const user = {
     username : "Roshan",
     price :254,
     welcomeMessage: function(){
        console.log( `welcomback ${this.username} to your dashboard`);
        // console.log(this);
     }
     
}

// user.welcomeMessage();
// user.username = "Ram";
// user.welcomeMessage()

// console.log(this) // in node enviroment the grobal scope is empty object 

// function roti(){
//     console.log(this)  // but inside a funtion it will give bunch of options
// }
// function roti(){
//     let username = "Roshan"
//     // console.log(this.username) // undefined => we can only use this in object like this 
// }


// const roti = () => {
//     let username = "Roshan";
//     console.log(this.username); // undefined
//     console.log(this); // {}
// }
// roti()


// const addtwonum = (num1 ,num2) =>{
//     return num1 + num2;
// }

// const addtwonum = (num1 ,num2) => num1 + num2;
// const addtwonum = (num1 ,num2) => (num1 + num2);
const addtwonum = (num1 ,num2) => ({username: "Roshan", id: "124dc"});


// console.log(addtwonum(3,4));

const newArray = [1,2,3,4,5,6,7]
const modifiedarray = []

 newArray.forEach((num)=>{
    modifiedarray.push(num + 2);
})

console.log(modifiedarray);