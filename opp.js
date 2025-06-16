
// This all about object literal iin JavaScript
// Object Literal Syntax

const user = {
    username: "Mustafa",
    isLognCount: 8,
    isLogedIn: true,

    getuserDetails: function () {
        //console.log("Got user all details")
        // // console.log(`username${this.useranme}`)
        // console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getuserDetails())


function User(useranme, isLogedIn, isLognCount) {
    this.username = useranme
    this.isLogedIn = isLogedIn
    this.isLognCount = isLognCount

    this.greeting = function () {
        console.log(`welcome ${this.username}`)
    }

    return this
}
const userOne = new User("Mustafa", true, 8)
const userTwo = new User("Noor", true, 10)
console.log(userOne);
console.log(userTwo.constructor)