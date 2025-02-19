/*
1 meter = 3.2808 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const inputNumber = document.getElementById("init-number")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
let resultOne = document.getElementById("render-result-1")
let resultTwo = document.getElementById("render-result-2")
let resultThree = document.getElementById("render-result-3")

convertBtn.addEventListener("click" , function() {
        resultOne.innerHTML = `
        ${inputNumber.value} meters = ${(inputNumber.value * 3.281).toFixed(3)} feet | ${inputNumber.value} feet = ${(inputNumber.value / 3.281).toFixed(3)} meters
        `
        resultTwo.innerHTML = `
        ${inputNumber.value} liters = ${(inputNumber.value * 0.264).toFixed(3)} gallons | ${inputNumber.value} gallons = ${(inputNumber.value * 3.785).toFixed(3)} liters
        `
        resultThree.innerHTML = `
        ${inputNumber.value} kilos = ${(inputNumber.value * 2.205).toFixed(3)} pounds | ${inputNumber.value} pounds = ${(inputNumber.value / 2.205).toFixed(3)} meters
        `
})

resetBtn.addEventListener("click" , function() {
    window.location.reload()
})

