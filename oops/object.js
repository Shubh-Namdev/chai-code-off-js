const user ={
    username:"Jack",
    email:"jack@gmail.com",
    age:34,

    greetUser:function() {
        console.log(`hey,${this.username}`);
    }
}
console.log(user);

function User(username,email,age) {
    this.username = username;
    this.email = email;
    this.age = age;
    this.greet = function() {
        console.log(`hey,${this.username}`);
    }

    return this;
}

const joe = new User("Joe","joe@gmail.com",45);
joe.greet();
const ben = new User("Ben","ben@gmail.com",35);
ben.greet();
console.log(joe);
console.log(ben);
console.log(this);