let operator
let firstOp = ""
let secondOp = ""
let screen = document.querySelector("#screen")
let digits = document.querySelectorAll(".digit")
digits.forEach((digit) => {
    digit.addEventListener("click", getFirstValue)
})

//operations
const add = (a, b) => a + b
let addButton = document.querySelector("#add")
addButton.addEventListener("click", () => {
    operator = add
    checker()
})

const divide = (a, b) => a / b
let divideButton = document.querySelector("#divide")
divideButton.addEventListener("click", () => {
    operator = divide
    checker()
})

const multiply = (a, b) => a * b
let multiplyButton = document.querySelector("#multiply")
multiplyButton.addEventListener("click", () => {
    operator = multiply
    checker()
})

const substract = (a, b) => a - b
let substractButton = document.querySelector("#substract")
substractButton.addEventListener("click", () => {
    operator = substract
    checker()
})

let equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    calc(firstOp, operator, secondOp)
})
function calc(a, ope, b) {
    result = ope(parseFloat(a), parseFloat(b))
    screen.textContent = result
    firstOp = result
    secondOp = ""
    operator = ""
}

//misc
function checker(){
    if(typeof firstOp == "string"){
    digits.forEach((digit) => {
        digit.removeEventListener("click", getFirstValue)
        })
    digits.forEach((digit) => {
        digit.addEventListener("click", getSecondValue)
        })
    }   
}

function getFirstValue(){
    screen.textContent += this.value
    firstOp += this.value
}
function getSecondValue(){
    screen.textContent += this.value
    secondOp += this.value
}

