const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.toDateString());
console.log(currentDate.toISOString());
console.log(currentDate.toJSON());
console.log(currentDate.toLocaleString());
console.log(currentDate.toUTCString());
console.log("--------------------------------------------------------------------");

const otherDate = new Date('2023','0','23','15','20','23');
console.log(otherDate.toLocaleString());
console.log("--------------------------------------------------------------------");


const someDate = Date.now();
console.log(someDate.toLocaleString());
const userDate = new Date("2024-12-01T09:48:58.999Z");
console.log(userDate.toISOString());
