const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Asynchronous operation completed');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log('Promise consumed');
})



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Another asynchronous operation completed');
        resolve()
    }, 1000)
}).then(function () {
    console.log('asyc 2 consumed')
})


const promseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Mustafa", email: "mustafa@gmail.com" })
    }, 1000)
})
promseThree.then(function (user) {
    console.log(user)
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Noor", Password: "1234" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => { console.log("The promiise is either resolved or rejected") })


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JAVA SCRIPT", Password: "1234" })
        } else {
            reject("Error: JS wrong")
        }
    }, 1000)
})

async function consumedPrromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (eroor) {
        console.log(eroor)
    }

}
consumedPrromiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log("E: ", error)

//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => console.log(error))