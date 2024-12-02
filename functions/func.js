//functions

// function printName() {
//     console.log("joe");
// }

// printName();

function printName(userName) {
    console.log(userName);
}

printName("Joe");

function getUserName() {
    let userName = "Joe"
    return userName;
}

let username = getUserName();
console.log(username);


function userLoggedIn(userName) {
    if ( !userName) {
        console.log("please enter user name");
        return;
    }
    return `${username} logged in`;
}

console.log(userLoggedIn("Joe"));

