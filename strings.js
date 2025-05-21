const name = "Mustafa"
const repoCounnt = 50

//console.log(name + repoCounnt + "value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCounnt}`)

const myName = new String('Mustafa-Noor-enggineer')

// console.log(myName[0])
// console.log(myName.__proto__)
// console.log(myName.length)
// console.log(myName.toUpperCase())
console.log(myName.charAt(4))
console.log(myName.indexOf('a'))

const newString = myName.substring(0, 9)
console.log(newString)

const anotherString = myName.slice(-6, 4)
console.log(anotherString)

const aString = "    Mustafa     "
console.log(aString)
console.log(aString.trim())

const url = "https://mustafa.com/noorr%10thall"

console.log(url.replace('%10', '-'))

console.log(url.includes("umar"))

console.log(myName.split('-'))


