// primitive datatype

// 7 types : String, Number, BigInt, Boolean, undefined, null, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail;

const id = Symbol("123")
const id2 = Symbol("123")
// console.log(id === id2) // false
// console.log(typeof id)

const bigNumber = 1234567890123456789012345678901234567890n

// non primitive datatype
//all the non primiitive return type is object means if you want to find functoin typrOf this will be function object
// 2 types : Object, Array

const heros = ["Thor", "Ironman", "Hulk"]

const myObj = {
    name: "Tony Stark",
    age: 40,
    isAvenger: true,
    friends: ["Thor", "Hulk"],
    address: {
        state: "New York",
        country: "USA"
    }
}

const myFunction = function () {
    console.log("Hello World")
}

console.log(typeof myFunction)