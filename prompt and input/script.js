// let username;
// username = window.prompt("What is your name")
// username = alert("What is your name")

// console.log(username)
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const span = document.querySelector("#text");
// let result;

btn.addEventListener('click',()=>{
     const result = input.value;
     span.textContent = input.value;
    console.log(result)
})

// const reuslt = input.value
// console.log(result)