
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)

// console.log(Math.PI)
// Math.PI = 4



const dish = {
    name: "russian salad",
    price: 300,
    isAvailabl: true,

    orderDish: function () {
        console.log("Dish is not ready yet")

    }

}
console.log(Object.getOwnPropertyDescriptor(dish, "name"))

// Object.defineProperty(dish, "name", {
//     writable: false,
//     enumerable: false

// })
// console.log(Object.getOwnPropertyDescriptor(dish, "name"))

for (let [key, value] of Object.entries(dish)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}