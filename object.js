function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(10))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)


function createeUser(username, score) {
    this.usernanme = username
    this.score = score
}

createeUser.prototype.incrment = function () {
    score++
}

createeUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`)
}

const tea = createeUser("Tea", 100)
const coffee = new createeUser("Coffee", 200)

coffee.printMe()