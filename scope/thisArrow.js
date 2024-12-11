//thiskeyword for object
const user = {
    name:"joe",
    email:"joe@gmail.com",
    welcome:function() { 
        console.log(this)
        console.log(`${this.name}, logged in`)
    }
}
//user.welcome();

user.name = "adam";
//user.welcome();

function getDate() {
    const username = "Ben";
    console.log(this);
}

console.log(this)
//getDate();


//arrow function

// function findUser() {
//     //some logic
//     console.log("finding user")
// }

const findUser = () => { console.log("finding user") }
console.log(findUser());

const getUser = () => { return "user" }
console.log(getUser());

const fetchUser = () => "user"
console.log(fetchUser());

const getUsers = () => ({name:"",email:""})
console.log(getUsers());