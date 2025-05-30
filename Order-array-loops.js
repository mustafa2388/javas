// for of loops

const arr = [1, 2, 3, 4, 5, 6, 7]
for (const num of arr) {
    // console.log(num)
}

// const fullName = "Mustafa noor"

// for (const mySelf of fullName) {
//     if (mySelf == " ") {
//         console.log("EEmpty spaces are found code has to be break")

//         continue;
//     }
//     console.log(`Each char is ${mySelf}`)
// }

const fullName = "Mustafa noor"

for (const mySelf of fullName) {
    if (mySelf == " ") {
        // console.log("EEmpty spaces are found code has to be break")
        break;
    }
    // console.log(`Each char is ${mySelf}`)
}


const map = new Map()
map.set("Pak", "Pakistan")
map.set("Jp", "Japan")
map.set("IN", "India")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value)

// }

// const myObj = {
//     game1: 'NFS',
//     game2: 'PUBG'
// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value)

// }