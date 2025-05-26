const { use } = require("react")

const user = {
    username: "Mustafa",
    price: 100,

    welcomeMeessage: function () {
        console.log(`${this.username} welcome to our website`)
        // console.log(this)
    }

}
// user.welcomeMeessage()
// user.username = "Noor"
// user.welcomeMeessage()

// console.log(this)

// function chai() {
//     let username = "Noor"
//     console.log(this.username) // undefined, because 'this' refers to the global object in non-strict mode
// }
//chai() // undefined


// const chai = function () {
//     let username = "Mustafa"
//     console.log(this.username)
// }


const chai = () => {
    let username = "Mustafa"
    // console.log(this)
}

chai() // undefined, because 'this' refers to the global object in non-strict mode

// const addition = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({ username: "Mustafas" })

console.log(addtwo(3, 4))