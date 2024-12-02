function calculateCartItem(items) {
    return items;
}

console.log(calculateCartItem(4));


//Rest operator
function calculateCartItem(val1, val2, ...items) {
    return items;
}

console.log(calculateCartItem(4,5,67,1));


//object
function getUser(anyObject) {
    console.log(`Username :${anyObject.name}\nAge:${anyObject.age}`);
}

getUser({name:"Joe",age:45});


//array
function findUserById(users,userId) {
    return users[userId];
}

console.log(findUserById([5,2,6,7],2));