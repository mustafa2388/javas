class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static creatID() {
        return `123`
    }

}

const Hello = new User("Mustafa")
// console.log(Hello.creatID())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email

    }
}

const MakeUp = new Teacher("sam", "sam.com")
console.log(MakeUp.creatID())