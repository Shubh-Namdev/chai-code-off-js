//Object literals

const mySymbol = Symbol();
const user = {
    name : "Adam Charles",
    age : 32,
    "full name" : "Something",
    doSmoke : false,
    task : ["cleaning","filtering"],
    address : { city:"London",state:"UK"},
    [mySymbol] : "key2",
    willDrive : function() { console.log("Driving")}
}

console.log(user.name);
console.log(user["age"]);
console.log(user["full name"]);
console.log(user.address.city);
console.log(user.willDrive());

user.doSmoke = true;

user.willQualify = function() {console.log("lets find")}

Object.freeze(user);
user.doSmoke = false;
console.log(user);

console.log(user.willQualify);
console.log(user.willQualify());

