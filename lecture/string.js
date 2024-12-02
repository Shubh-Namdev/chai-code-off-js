let someString = "Some String";

console.log(someString);

let newString = new String("  new-string-var   ");

console.log(newString[6]);
console.log(newString.length);
console.log(newString.charAt(8));
console.log(newString);
console.log(newString.trim().indexOf('i'))
console.log(newString.trim());
const sep = newString.trim().split("-")
console.log(sep);