let screen = document.querySelector("#screen")
let calculusScreen = document.querySelector("#calculus")

let operator

let firstValue = ""
let digits = document.querySelectorAll(".digit")
digits.forEach((digit) => {
    digit.addEventListener("click", function (){
        screen.textContent += this.value
        firstValue += this.value
    })
})

let arr = []
const add = (a, b) => a + b
let addButton = document.querySelector("#add")
addButton.addEventListener("click", () => {
    operator = add
    screen.textContent = ""
    if(firstValue){
        calculusScreen.textContent = `${firstValue} +`
        arr.push(parseFloat(firstValue))
    }
    firstValue = ""
})

let equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    if(firstValue){
        calculusScreen.textContent += ` ${firstValue}`
        arr.push(parseFloat(firstValue))
        firstValue = ""
        checker()  
    }
})
function checker(){
    if(arr.length == 2){
        calc(arr)
        // console.log(`calculado:`, arr)
        screen.textContent = arr[0]
    }
    // screen.textContent = ""
}
function calc(array){
    let total = 0
    total = array.reduce(operator)
    arr = [total]
}

