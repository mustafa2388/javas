let a = 300
if (true) {
    let a = 400
    console.log("Inside if block:", a) // 400
}
//console.log(a)


// Nested Scope//

function one() {

    username = "Mustafa"

    function two() {
        const website = "youtube"
        console.log(username) // Mustafa
    }
    //console.log(website)

    //two()

}
one()