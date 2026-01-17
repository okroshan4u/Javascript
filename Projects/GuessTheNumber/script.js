const input = document.querySelector("#input")
const form = document.querySelector("form")
const btn = document.querySelector(".btn")
const win = document.querySelector(".win")
const num = Math.round((Math.random() * 100 + 1), 2)
console.log(num)

let prevGuess = document.querySelector('.prevGuess');
let remainGuess = document.querySelector('.remainGuess');

previous = [];

let attempts = 9;
remainGuess.innerHTML = attempts

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(num)
    previous.push(input.value)
    console.log(previous)
    prevGuess.innerHTML = previous
    // console.log(prevGuess.push(input.value))
    if (num > input.value) {
        // console.log("Enter a greater number")
        win.innerHTML = "Enter a greater number";
    } else if (num < input.value) {
        // console.log("Enter a lower number ")
        win.innerHTML = "Enter a lower number ";
    } else if (num == input.value) {
        // console.log("You won the game")
        win.innerHTML = "You Won !";
        btn.disabled = true;
        const replay = document.createElement("button");
        replay.className = "replay"
        replay.innerHTML = "Replay"
        replay.style.padding = '8px 10px'
        win.appendChild(replay)
        replay.addEventListener("click", () => {
            btn.disabled = false;
            form.reset();
            previous.length = 0;
            attempts = 10;
        })

    }


    remainGuess.innerHTML = attempts;
    attempts = attempts - 1;

    if (remainGuess.innerHTML == 0 && num != input.value) {
        win.innerHTML = "You lose the game! \n Start Over"
        btn.disabled = true;
        const startover = document.createElement("button");
        startover.className = "startoverbtn"
        startover.innerHTML = "Start Over"
        win.appendChild(startover)
        startover.addEventListener("click", () => {
            btn.disabled = false;
            form.reset();
            previous.length = 0;
            attempts = 10;
        })
    }

})