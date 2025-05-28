const userEmaiil = []

if (userEmaiil) {
    // console.log("got user eemal");
} else {
    // console.log("Don't have user email")
}

//false value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

// checking array

// if (userEmaiil.length === 0) {
//     console.log("Array is eeempty")
// }

// checking Object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object iis empty")
}




// Nulish Coalescing Opeerrrator (??)

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 30



console.log(val1)


//Terniary Operator

//condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less theen 80") : console.log("grater theen 80")



