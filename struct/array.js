const mult = ["Mangoes", "Grapes",4,6,true,false,{}];

const heroes = new Array();
heroes.push("Dr. Stranger");
heroes.push("Hulk");
heroes.push("Thar");

// console.log(heroes);

// heroes.pop();
// console.log(heroes);

// heroes.unshift("Captain America");
// console.log(heroes);

// heroes.shift("Spider Man");
// console.log(heroes);

console.log(heroes.includes("Thar"));
console.log(heroes.indexOf("Hulk"));

const newArr = [2,3,5,6];
const joinedArr = newArr.join();
console.log(newArr);
console.log(joinedArr);

const slicedArr = newArr.slice(1,3);

console.log(newArr);
console.log(slicedArr);

const splicedArr = newArr.splice(1,3);
console.log(newArr);
console.log(splicedArr);