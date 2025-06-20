const User = {
    _email: "mm@gmail.com",
    _password: "abcdef",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {

        this._email = value
    }
}

const h1 = Object.create(User)
console.log(h1.email)