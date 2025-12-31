const PromiseOne = new Promise(function(resolve,reject){
    // Do as async task
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async  task is complete")
        resolve();
    },1000)
})

PromiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete")
        resolve()
    },1000)
}).then(function(){
    console.log("PromiseTwo is consumed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("PromiseTheree completed")
        resolve({username:"Roshan", email:"okrohan4u@gmail.com"})
    },1000)
})

promiseThree.then(function(user){

})
