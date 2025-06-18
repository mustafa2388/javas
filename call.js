function setUsername(username) {
    this.username = username
}

function createUser(username, email, Password) {
    setUsername(username)

    setUsername.call(this, username)

    this.email = email
    this.Password = Password
}

const Hello = new createUser("Mustafa", "mustafa@gmail.com", "12345678")
console.log(Hello)