// const coding = ["python", "js", "swift", "Cpp", "Java"]

// const values = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })
// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4) // This will return a array
// console.log(newNums)

// // const newNums = myNums.filter((num) => {    // if you want to use carle braces or  scope  then you must write a return  weyword 
// //     return num > 4

// })

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }

// })
// console.log(newNums)


const books = [
    {
        title: 'Book 1', genre: 'Fiction', publishe: 1981, edition: 2004
    },
    {
        title: 'Book 2', genre: 'History', publishe: 2000, edition: 2007
    },
    {
        title: 'Book 3', genre: 'science', publishe: 1999, edition: 2002
    },
    {
        title: 'Book 4', genre: 'Sports', publishe: 1989, edition: 2003
    },
    {
        title: 'Book 5', genre: 'Nature', publishe: 1984, edition: 2008
    },
    {
        title: 'Book 6', genre: 'History', publishe: 2000, edition: 2013
    },

    {
        title: 'Book 7', genre: 'Science', publishe: 1992, edition: 2017
    },

    {
        title: 'Book 8', genre: 'Sports', publishe: 1971, edition: 2025
    },

];

// const userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks)
const userBooks = books.filter((bk) => {
    return bk.publishe >= 2000 && bk.genre === 'History'
})
// console.log(userBooks)




//MOREE AOUT MAP//

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums)

// const newNums = myNumbers.map((num) => { return num + 10 })
// console.log(newNums)

// const newNn = myNumbers.forEach((num) => {
//     myNumbers.push(num + 10)

// })
// console.log(myNumbers)

const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

// console.log(newNums)



//  REDUCE METHOD //


const myNumArr = [1, 2, 3]

// const myTotal = myNumArr.reduce(function (acc, carval) {

//     console.log(`acc: ${acc} and curval: ${carval}`)
//     return acc + carval
// }, 0)

const myTotal = myNumArr.reduce((acc, curval) => acc + curval, 0)

console.log(myTotal)

const myCurr = [
    {
        courseNamee: "py course",
        price: 6000
    },
    {
        courseNamee: "DS course",
        price: 3000
    },
    {
        courseNamee: "SW course",
        price: 2000
    },
    {
        courseNamee: "java course",
        price: 1000
    },
]

const priceToPay = myCurr.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)





