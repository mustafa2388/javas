// class User {
//     constructor(username, email, password) {

//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Mustafa", "mustafa@gmail.com", "12345abcd")
// // console.log(user1)
// console.log(user1.encryptPassword())
// console.log(user1.changUserName())


//Behiind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

}

User.prototype.encryptPassword = function () {
    return `${this.password}`
}

User.prototype.changUserName = function () {
    return `${this.username.toUpperCase()}`
}

const user2 = new User("Noor", "Noor@gmail.com", "12345")
// console.log(user1)
console.log(user2.encryptPassword())
console.log(user2.changUserName())