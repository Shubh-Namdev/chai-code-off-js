function getUser() {
    const username = "Adam";

    function getUserName() {
        const name = "Joe";
        console.log(name);
        console.log(username);
    }

    //console.log(name);
    console.log(username);
    getUserName();
}

getUser();

addUser("user")
function addUser(user) {    
    console.log("add user")
}
//addUser("user")


///addAnotherUser("user")
const addAnotherUser = function addAnotherUser(user) {    
    console.log("add user")
}
//addAnotherUser("user")
