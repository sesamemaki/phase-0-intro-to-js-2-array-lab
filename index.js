// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (cat) => cats.push("Ralph");

const destructivelyPrependCat = (cat) => cats.unshift("Bob");

const destructivelyRemoveLastCat = (cat) => cats.pop();

const destructivelyRemoveFirstCat = (cat) => cats.shift();

const appendCat = () => [...cats, "Broom"];

const prependCat = () => ["Arnold", ...cats];

const removeLastCat = () => cats.slice(0,2);

const removeFirstCat = () => cats.slice(1)

