const user = new Object(); // 
user.name = "Jack";
user.email = "jack@gmail.com";

console.log(user);

const marvel = {name:"thor",movie:"action"};
const dc = {name:"batman",movie:"action"};

const heroes = { marvel,dc};
console.log(heroes);

const obAss = Object.assign({}, marvel,dc);
console.log(obAss);

console.log({...marvel,...dc});

console.log(Object.keys(obAss));
console.log(Object.values(obAss));
console.log(Object.entries(obAss));