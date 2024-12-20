const myStr = "something     ";

//console.log(myStr.trim().length);
//console.log(myStr.trueLength());

const myHeros = ["thor","spiderman"];
const heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower : function() {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

//add method/properties to the topmost parent
Object.prototype.add = function() {
    console.log("this will add some value");
}

//heroPower.add();
//myHeros.add();

//add method/properties to the specific
Array.prototype.addSome = function() {
    console.log("this will add some more values");
}

//myHeros.addSome();
//heroPower.addSome();

String.prototype.trueLength = function() {
    return this.trim().length;
}

console.log(myStr.trim().length);
console.log(myStr.trueLength());
console.log("prototype    ".trueLength());
console.log("say".trueLength());