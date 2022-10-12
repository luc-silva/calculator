let mainScreen = document.querySelector("#screen")
let calculusScreen = document.querySelector("#calculus")

let digits = document.querySelectorAll(".digit")
digits.forEach((digit) => {
    digit.addEventListener("click", function (){
        mainScreen.textContent += this.value
    })
})

let calcArray = []
let operation = null

const add = (a, b) => a + b
const substract = (a, b) => a - b

let addButton = document.querySelector("#add")
addButton.addEventListener("click", () => {
    if(parseFloat(mainScreen.textContent)){
        calcArray.push(parseFloat(mainScreen.textContent))
        calculusScreen.textContent = `${calcArray[0]} + `
        operation = add
        mainScreen.textContent = ""
        equalsButtton.addEventListener("click", aoi)
    }
    checker()
})

let equalsButtton = document.querySelector("#equals")
function aoi(){
    if(parseFloat(mainScreen.textContent)){
        calcArray.push(parseFloat(mainScreen.textContent))
        console.log(calcArray)
        calculusScreen.textContent += calcArray[1]
        mainScreen.textContent = ""
        calc(operation)
        equalsButtton.removeEventListener("click", aoi)
    }
}

let clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    mainScreen.textContent = ""
    calculusScreen.textContent = ""
    operation = null
})

let backspaceButton = document.querySelector("#backspace")
backspaceButton.addEventListener("click", () => {
    let splited = mainScreen.textContent.trim().split("")
    splited.pop()
    mainScreen.textContent = splited.join("")
})


function checker(){
    if(calcArray.length == 2){
        calc(operation)
    }
}
function calc(operation){
    mainScreen.textContent = calcArray.reduce(operation)
    calcArray = []
}