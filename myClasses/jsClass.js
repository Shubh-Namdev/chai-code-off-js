// class User {
//         constructor(username,email,password) {
//             this.username = username
//             this.email = email
//             this.password = password
//         }

//         logMe() {
//             console.log(`Username - ${this.username}`);
//         }
// }

// const jack = new User("jack","jack@google.com","HGW$12");
// console.log(jack);

//behind the scene
function User(username,email,password) {
    this.username = username
    this.email = email
    this.password = password

    User.prototype.logMe = function() {
        console.log(`Username - ${this.username}`)
    }
}

const joe = new User("joe","joe@gmail.com","123HG");
console.log(joe);
joe.logMe();