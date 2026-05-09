const box = document.querySelectorAll(".box")
const box1 = document.querySelector("#grey");



// box.forEach(el =>{
//     el.addEventListener('click',()=>{
//         document.body.style.backgroundColor = el.id
//     })
// })
// or

// box.forEach(el => {
//     el.addEventListener('click', () => {
//         if (el.id == "grey") {
//             document.body.style.backgroundColor = "grey"
//         } else if (el.id == "red") {
//             document.body.style.backgroundColor = "red"
//         }
//         else if (el.id == "blue") {
//             document.body.style.backgroundColor = "blue"
//         }
//         else if (el.id == "white") {
//             document.body.style.backgroundColor = "white"
//         }
//     })
// })

box.forEach(function (el) {
    // console.log(el)
    // console.log(el.target)
    el.addEventListener('click', function (e) {
        if (e.target.id == 'grey') {
            document.body.style.backgroundColor = 'grey'
        } else if (e.target.id == 'red') {
            document.body.style.backgroundColor = 'red'
        } else if (e.target.id == 'blue') {
            document.body.style.backgroundColor = 'blue'
        } else if (e.target.id == 'white') {
            document.body.style.backgroundColor = 'white'
        }
    })
})
