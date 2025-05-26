function myName() {
    console.log("Mustafa")
}
myName()

function addTwoNumber(number1, number2) {
    console.log(number1 + number2)
}
addTwoNumber(5, 10)

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(5, 10)
console.log("Result:", result)

function loginUseerMessage(username = "Noor") {
    if (!username) {
        console.log("Please enter your nanme")
        return
    }

    return `${username} you just logged in`
}

console.log(loginUseerMessage("Mustafa"))

function calculateCartPricee(val1, val2, ...num1) {
    return num1

}
console.log(calculateCartPricee(200, 300, 4000, 5000))

const user = {
    username: "Mustafa",
    price: 199
}

function handleObject(anobject) {
    console.log(`Username is ${anobject.username} and the price is ${anobject.price}`)

}
handleObject(user)

handleObject({
    username: "Khan",
    price: 400
})

const myNewArray = [300, 400, 500, 600]

function returrnArray(geetArray) {
    return geetArray[3]
}
// console.log(returrnArray(myNewArray))
console.log(returrnArray([300, 400, 500, 600]))