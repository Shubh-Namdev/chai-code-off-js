class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log("logged in");
    }
}

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }
}

const ben = new Teacher("Ben","ben@stock.com");
const jack = new User("jack");
console.log(ben);
console.log(jack);
ben.logMe();

console.log(ben === jack);
console.log(Teacher === User);
console.log(Teacher instanceof User);
console.log(ben instanceof Teacher);
console.log(ben instanceof User);

