// // Object literals///

// const { use } = require("react")

// const sym = Symbol("Key1")

// const User = {
//     name: "Mustafa",
//     [sym]: "myKey1",
//     "fullName": "Mustafa Noor",
//     age: 23,
//     location: "Peshawar",
//     email: "Mustafa12@gmail.com",
//     isLoggedIn: false,

// }

// console.log(User.email)
// console.log(User["email"])
// console.log(User["fullName"])
// console.log(User[sym])

// User.email = "Salman@gmail.com"
// // Object.freeze(User)
// User.email = "Hello@gmail.com"
// console.log(User)

// User.greeting = function () {
//     console.log("Hello User")
// }

// User.greetingTwo = function () {
//     console.log(`Hello User, ${this.name}`)
// }

// console.log(User.greeting())
// console.log(User.greetingTwo())

/////Singleton/// OR Constructor




const regularUser = {
    name: "Mustafa",
    email: "abc@gmail.com",
    isLoggedIn: false
}

// console.log(regularUser.fullname.userfyllname.firstname.lastname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

const users = [
    {
        id: 12,
        email: "a@gmail.com"
    },

    {
        id: 12,
        email: "A@gmail.com"
    },
    {
        id: 15,
        email: "B@gmail.com"
    }
]
users[1].email
// console.log(regularUser)

// console.log(Object.keys(regularUser))
// console.log(Object.values(regularUser))
// console.log(Object.entries(regularUser))

// console.log(regularUser.hasOwnProperty("age"))

const course = {
    coursename: "Javascript",
    Price: "999",
    courseInst: "Mustafa",
}

// course.courseInst

const { courseInst: teacher } = course

console.log(teacher)