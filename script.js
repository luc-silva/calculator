let screen = document.querySelector("#screen")
let digits = document.querySelectorAll(".digit")
digits.forEach((digit) => {
    digit.addEventListener("click", displayValue)
})

let arr = []
let clearButton = document.querySelector("#Clear")
clearButton.addEventListener("click", () => {
    screen.textContent = ""
    arr = []
})


let operator
const add = (a, b) => a + b
let addButton = document.querySelector("#add")
addButton.addEventListener("click", pushValue)

const divide = (a, b) => a + b
let divideButton = document.querySelector("#divide")
divideButton.addEventListener("click", pushValue)

const multiply = (a, b) => a + b
let multiplyButton = document.querySelector("#multiply")
multiplyButton.addEventListener("click", pushValue)

const substract = (a, b) => a + b
let substractButton = document.querySelector("#substract")
substractButton.addEventListener("click", pushValue)



let equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    pushValue()
    calc(arr)
})
function calc(array){
    let total = 0
    total = array.reduce(operator)
    return total
}

function pushValue(){
    if(screen.textContent !== ""){
        console.log(screen.textContent)
        arr.push(parseInt(screen.textContent))
    }
    if(arr.length == 2){
        calc(arr)
        arr = [calc(arr)]
        console.log(`calculado: ${calc(arr)}`, arr)
    }
    screen.textContent = ""
}


function displayValue(){
    screen.textContent += this.value
}

