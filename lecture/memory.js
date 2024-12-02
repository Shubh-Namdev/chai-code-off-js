let userName1 = "Joe Root";
let userName2 = userName1;

userName2 = "Ole Pop";

console.log(userName1);
console.log(userName2);


let user1 = {
    email:"joe@something.com",
    name:"Joe Root"
}

let user2 = user1;
user2.email = "joe@gmail.com";

console.log(user1.email);
console.log(user2.email);