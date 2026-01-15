const form = document.querySelector("form")
// const height = document.querySelector(".input")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const info = document.querySelector("#info")

let bmi;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)

    const height = parseInt(document.querySelector("#height").value) / 100;
    const weight = parseInt(document.querySelector("#weight").value)

    if (height == "" || height == null || isNaN(height)) {
        result.innerHTML = `Please enter a valid height is ${height}`
    } else if (weight == "" || weight == null || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight is ${weight}`
    } else {
        bmi = (weight / (height * height)).toFixed(2)
        result.innerHTML = bmi
        if (bmi < 18.5) {
            info.innerHTML = `You are underWeight `
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            info.innerHTML = `You have healthy weight `
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            info.innerHTML = `You are overweight`
        } else {
            info.innerHTML = `You have obesity`
        }
    }

})