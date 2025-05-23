let myArr = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr)

const numArr = [1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, 4, 5, 6)

console.log(myArr2[4])

////Methods in Array//////

numArr.push(9)
numArr.pop()
console.log(numArr)

numArr.unshift(8)
console.log(numArr)
numArr.shift()
console.log(numArr)//adds element at the start of the array

console.log(numArr.includes(88))
console.log(numArr.indexOf(4))

const newArr = numArr.join()

console.log(numArr)
console.log(typeof newArr)



///Slice and Splice ////


console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)

console.log("B", myArr)


const myn2 = myArr.splice(1, 3)
console.log("C", myArr)
console.log(myn2)