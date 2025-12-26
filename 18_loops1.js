// for

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x 2 : `,i*2) ;
// }

// loop inside a loop

// for(let i = 0; i<10; i++){
//     console.log(`outer loop value : ${i}`)
//     for(let j = 0; j<=10; j++){
//         console.log( `Inner loop value is ${j} and outerloop value is ${i}`)
//     }
// }

const array = ["Shaktiman", "Hero", "juniorji"]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }

// for(let i = 0; i<= 20;i++){

//     if(i == 2){
//         console.log(`value ${i} is detected`)
//         continue
//     }
//     if(i == 10){
//         console.log(`value ${i} is detected`)
//         break
//     }
//     console.log(`Value of i is ${i}`)
// }

// ********************while loop*********************
// let i =0
// while (i<10) {
//     console.log(i*2);
//     i = i + 2
// }

// let hero = ["Superman", "Iron Man", "Thor"];
// let arrindex = 0;
// while(arrindex < hero.length){
//     console.log(hero[arrindex])
//     arrindex++
// }

// *************** do while loop ***************

let score = 1
do{
    console.log(`score is ${score}`);
    score++
}while(score <= 10)