const marvelHeroes = ["spiderman", "thor","wolverine"];
const dcHeroes = ["batman","superman"];

//marvelHeroes.push(dcHeroes);

//console.log(marvelHeroes[3][1]);

const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);

const allHeroess = [...marvelHeroes, ...dcHeroes];
console.log(allHeroess);

const anotherArrary = [1,2,[3,4],5,[6,7,[8,9]]];
//console.log(anotherArrary[4][2][1]);
console.log(anotherArrary.flat(Infinity));

console.log(Array.from("This is a string"));
console.log(Array.of("[{},{}]"));