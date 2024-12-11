
/*
//forof
const fruits = ["mangoes","apples","grapes","bananas"];

//getting values using forof
for (const fruit of fruits) {
    //console.log(fruit);
}


const books = new Map();
books.set('name','jack');
books.set('age',54);
books.set('id',"G56757GJHG");

//console.log(books);
for (const [key,value] of books) {
    //console.log(`Key :${key}, Value:${books.get(key)}`);
    //console.log(key,value);
}


const objArr = [
    {name:"jack",age:54},
    {name:"john",age:24},
    {name:"joe",age:32}
]

for (const user of objArr) {
    console.log(user);
    console.log(user.name);
}


const user = {
    name:"jack",
    age:34
}

for (const element of user) {
    console.log(element);
}
*/


/*
//forin
const heroes = ["spiderman","thor","wolverine"];

//will get keys
for (const hero in heroes) {
    // console.log(hero);
    // console.log(heroes[hero]);
}


const vehicleMap = new Map();
vehicleMap.set('enginePowerInHp',2300);
vehicleMap.set('brand','tata');
vehicleMap.set("model",2023);

for (const vehicle in vehicleMap) {
    //console.log(vehicle);
}


const laptops = [
    {screenInInch:15.6,brand:"hp",price:34566},
    {screenInInch:15.0,brand:"dell",price:30566},
    {screenInInch:14.0,brand:"hp",price:44566}
]

for (const lappy in laptops) {
    //console.log(lappy);
}

const hpLaptop = {
    screenInInch:15.6,
    brand:"hp",
    price:34566
}

for (const element in hpLaptop) {
    console.log(element);
    console.log(hpLaptop[element]);
}
*/


//foreach

const users = [
    { name:"jack", id:"HUKH576J", age:56 },
    { name:"john", id:"HUKHJ76J", age:26 },
    { name:"joe", id:"HSERH576J", age:34 },
    { name:"ben", id:"HUK6J", age:45 }
]

// users.forEach(function (user) { 
//     console.log(user);
// })

users.forEach( (user) => {
    //console.log(user);
})


const myNum = [4,1,6,7,12];

//filter
const filteredAge = users.filter( (user) => user.age > 35 && user.name === "ben");
//console.log(filteredAge);

//map
const updatedArr = myNum.map( ( num ) => num + 1);
//console.log(updatedArr);

const updatedData = myNum.map( ( num ) => num*2 )
                         .map( ( num ) => num+2 )
                         .filter( ( num ) => num > 20 )
//console.log(updatedData);


//reduce 
const totalAmount = myNum.reduce( function (a,c) {
    return a + c;
},0)
console.log(totalAmount);

















