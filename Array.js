// let myArr = [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(myArr)

// const numArr = [1, 2, 3, 4, 5]

// const myArr2 = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr2[4])

// ////Methods in Array//////

// numArr.push(9)
// numArr.pop()
// console.log(numArr)

// numArr.unshift(8)
// console.log(numArr)
// numArr.shift()
// console.log(numArr)//adds element at the start of the array

// console.log(numArr.includes(88))
// console.log(numArr.indexOf(4))

// const newArr = numArr.join()

// console.log(numArr)
// console.log(typeof newArr)



// ///Slice and Splice ////


// console.log("A", myArr)

// const myn1 = myArr.slice(1, 3)

// console.log(myn1)

// console.log("B", myArr)


// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr)
// console.log(myn2)


////Array PART 2//////

const my_hobbies = ["sports", "cooking", "reading"]
const dc_hobbies = ["Movies", "Playing", "Traveling"]

// my_hobbies.push(dc_hobbies)

// console.log(my_hobbies)

// const all_hobbies = my_hobbies.concat(dc_hobbies)
// console.log(all_hobbies)

// const all_new_hobbies = [...my_hobbies, ...dc_hobbies]
// console.log(all_new_hobbies)

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array)

console.log(Array.isArray("Mustafa"))
console.log(Array.from("Mustafa"))

console.log(Array.from({ name: "Mustafa" }))

let score1 = 100
let score2 = 200
let score3 = 300

comScore = Array.of(score1, score2, score3)
console.log(comScore)