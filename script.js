let mainScreen = document.querySelector("#screen")
let calculusScreen = document.querySelector("#calculus")
let digits = document.querySelectorAll(".digit")
digits.forEach((digit) => {
    digit.addEventListener("click", function (){
        mainScreen.textContent += this.value
    })
})

let calcArray = []

//four basic operations
let operation = null
const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

let addButton = document.querySelector("#add")
addButton.addEventListener("click", () => {
    if(mainScreen.textContent
        || parseFloat(mainScreen.textContent) == 0){
        calcArray.push(parseFloat(mainScreen.textContent))
        calculusScreen.textContent = `${calcArray[0]} + `
        operation = add
        mainScreen.textContent = ""
        equalsButtton.addEventListener("click", equals)
        decimalButton.addEventListener("click", addDecimal)
    }
    checker()
})

let substractButton = document.querySelector("#substract")
substractButton.addEventListener("click", () => {
    if(mainScreen.textContent || parseFloat(mainScreen.textContent) == 0){
        calcArray.push(parseFloat(mainScreen.textContent))
        calculusScreen.textContent = `${calcArray[0]} - `
        operation = substract
        mainScreen.textContent = ""
        equalsButtton.addEventListener("click", equals)
    }
    checker()
})

let multiplyButton = document.querySelector("#multiply")
multiplyButton.addEventListener("click", () => {
    if(mainScreen.textContent || parseFloat(mainScreen.textContent) == 0){
        calcArray.push(parseFloat(mainScreen.textContent))
        calculusScreen.textContent = `${calcArray[0]} x `
        operation = multiply
        mainScreen.textContent = ""
        equalsButtton.addEventListener("click", equals)
    }
    checker()
})

let divideButton = document.querySelector("#divide")
divideButton.addEventListener("click", () => {
    if(mainScreen.textContent || parseFloat(mainScreen.textContent) == 0){
        calcArray.push(parseFloat(mainScreen.textContent))
        calculusScreen.textContent = `${calcArray[0]}  `
        operation = divide
        mainScreen.textContent = ""
        equalsButtton.addEventListener("click", equals)
    }
    checker()
})

//features
let equalsButtton = document.querySelector("#equals")
function equals(){
    if(mainScreen.textContent || parseFloat(mainScreen.textContent) == 0){
        calcArray.push(parseFloat(mainScreen.textContent))
        calculusScreen.textContent += calcArray[1]
        mainScreen.textContent = ""
        calc(operation)
        equalsButtton.removeEventListener("click", equals)
        if(parseFloat(mainScreen.textContent) % 1 == 0){
            decimalButton.addEventListener("click", addDecimal)
        }
    }
}

let clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
    mainScreen.textContent = ""
    calculusScreen.textContent = ""
    operation = null
    decimalButton.addEventListener("click", addDecimal)
})

let backspaceButton = document.querySelector("#backspace")
backspaceButton.addEventListener("click", () => {
    let splited = mainScreen.textContent.trim().split("")
    splited.pop()
    mainScreen.textContent = splited.join("")
})

let positiveNegativeButton  = document.querySelector("#positive-negative")
positiveNegativeButton.addEventListener("click", () => {
    
    let modifiedValue = mainScreen.textContent.trim().split("")
    console.log(modifiedValue)

    if(parseFloat(mainScreen.textContent) > 0){
        modifiedValue.unshift("-")
    } else if(parseFloat(mainScreen.textContent) < 0){
        modifiedValue.shift()
    }
    mainScreen.textContent = modifiedValue.join("")
})

let decimalButton = document.querySelector("#dot")
function addDecimal (){
    mainScreen.textContent += "."
    decimalButton.removeEventListener("click", addDecimal)
}
decimalButton.addEventListener("click", addDecimal)


//misc
function checker(){
    if(calcArray.length == 2){
        calc(operation)
    }
}
function calc(operation){
    mainScreen.textContent = calcArray.reduce(operation)
    calcArray = []
}