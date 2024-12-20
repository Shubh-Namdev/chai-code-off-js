function setUsername(username) {
    //complex db ops
    this.username = username;
}

function createUser(username,email,password) {
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const jack = new createUser("jack","jack@gmail.com","123HG");
console.log(jack);