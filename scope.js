let a = 300
if (true) {
    let a = 400
    // console.log("Inside if block:", a) // 400
}
//console.log(a)


// Nested Scope//

function one() {

    username = "Mustafa"

    function two() {
        const website = "youtube"
        // console.log(username) // Mustafa
    }
    //console.log(website)

    //two()

}
//one()

if (true) {
    username = "Mustafa"
    if (username === "Mustafa") {
        const website = " youtube"
        // console.log(username + website) // youtube
    }
    //console.log(username) // Mustafa
}
// ********************INTRESTING***********************

console.log(addone(5))
function addone(num) {
    return num + 1
}

// console.log(addtwo(4)) // ReferenceError: Cannot access 'addtwo' before initialization
// This will throw an error because addtwo is not hoisted


const addtwo = function (num) {
    return num + 2
}
console.log(addtwo(7))  // This will work because addtwo is called after its declaration