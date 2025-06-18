class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {

        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course has been added by ${this.username}`)
    }
}

const Teacher1 = new Teacher("Mustafa", "mustafa@gmail.com", "12121212")

Teacher1.logMe()

const headTeacher = new User("principal")
headTeacher.logMe()

console.log(Teacher1 instanceof User)