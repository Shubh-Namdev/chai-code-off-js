class User {
    constructor(username) {
        this.username = username;
    }

    static logMe() {
        console.log("you are about to login");
    }
}

const jack = new User("jack");
console.log(jack);
User.logMe();

