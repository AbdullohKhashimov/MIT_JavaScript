// arrays built via Literal

// What is an array? => bu ozining ichki tartibiga ega bolgan maxsus object

const list = [1, 4, 5, 2, 3, 7, 9];
console.log("list:", list);

const fruits = ["apple", "melon", "cherry", "banan"];
console.log("fruits:", fruits);

const fruit = fruits[0];
console.log("fruit:", fruit);

const list1 = ["apple", "banana", "cherry"];
// console.log("list1 before:", list1);
// list1[0] = "melon";
// console.log("list1 after:", list1);

// Property : length
const size = list1.length;
console.log("size:", size);

//

/** Methods: Regular
 * push(), pop(), unshift(), shift()
 * sort(), reverse(), includes(),indexOf()
 * toString(), join()
 * slice(), splice(), concat()
 *  */

// push() method: => listni ohuriga item qowb beradi
console.log("List1 before:", list1);
list1.push("lemon");
console.log("list1 after:", list1);

// unshift() method: listni boshiga itemni qoshib beradi
list1.unshift("melon");
console.log("list1 unshift:", list1);

// pop() method: removes an item from the last index of an array
list1.pop();
console.log("list1 pop:", list1);
const frute = list1.pop();
console.log("deleted item:", frute);

// shift() method: removes an item from the first index of an array
list1.shift();
console.log("list1 shift:", list1);
const meva = list1.shift();
console.log("deleted item:", meva);

// sort method():
const raqamlar = [5, 3, 2, 6, 7, 9, 0];
console.log("before:", raqamlar);
raqamlar.sort();
console.log("after:", raqamlar);

// includes() method:
const resultat = list1.includes("banana");
console.log("resultat:", resultat);

// slice() method:
const names = ["ali", "shone", "abu", "tony"];
const natija = names.slice(1, 3);
console.log("names:", natija);

// splice() method:
const familya = ["salimov", "vahidov", "shermatov"];
familya.splice(0, 2, "hakimjonov", "abduvahidov");
console.log(familya);

const joint = names.concat(familya);
console.log("joint:", joint);
// arrays built via constructor
// const list2 = new Array("apple", "cherry", "banana");
// console.log("list2:", list2);
