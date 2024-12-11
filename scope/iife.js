function addUser() {
    console.log("add user");
}
addUser();

//IIFE
(function getUser() {
    console.log("get user");
})();


( () => {
    console.log("get user");
})();
