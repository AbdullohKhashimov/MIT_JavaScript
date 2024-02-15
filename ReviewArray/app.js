// what is an array?
// array bu ozini ichki tartibiga ega bogan mahsus object

// Arraylarni hosil qilishda ikki hil yol bor
//1. Literal Arrays
const number = [1, 4, 3, 5, 7, 8, 9, 2];
// console.log("numbers:", number);

const fruits = ["apple", "melon", "cherry", "banana"];
console.log("fruits:", fruits);

const fruit = fruits[0];
console.log("fruit:", fruit);

const mixed = [1, true, "apple", null];
console.log("mixed array:", mixed);

const fruits2 = ["apple", "banan", "cherry"];
fruits2[0] = "melon"; // removes apple value and melon will be inserted
console.log(fruits2);

// Array Property => length

// Length
const size = fruits2.length;
console.log("Size:", size);

/** Array Methods
 * push(), pop(), unshift(), shift() ===>>> mutable methods()
 * sort(), reverse(), inludes(), indexOf()
 * toString(), join()
 * slice(), splice(), concat()
 */

// push() method: => mutates the array meaing returns new array
fruits2.push("mandarin");
console.log("push:", fruits2);

// unshift() method: => adds a new item to the beginning of the array
fruits2.unshift("yongoq");
console.log("unshift:", fruits2);

// pop() method: => removes an item from the end of an array
fruits2.pop();
console.log("pop:", fruits2);
const removedFruit = fruits2.pop();
console.log("removedFruit:", removedFruit);

const meva = ["olma", "gilos", "tarvuz", "urik"];
console.log(meva);
// meva.pop();
// console.log("meva:", meva);
// const deleted = meva.pop();
// console.log("deleted meva:", deleted);

// shift() => removes an item from the beginning of the array
meva.shift();
console.log("shifted meva:", meva);
const birinchi = meva.shift();
console.log("birinchi meva ochirilishi:", birinchi);

// values: apple, melon, cherry, banana
// indexs: 0,1,2,3

// sort() method:
const nums2 = [5, 3, 6, 9, 1, 4, 2];
console.log("numbers before:", nums2);
nums2.sort();
console.log("numbers after:", nums2);

const names = ["shone", "bahrom", "ruza", "jovoh", "ali"];
console.log("names before:", names);
names.sort();
console.log("names after:", names);

// reverse() method:
names.reverse();
console.log("reversed names:", names);

nums2.reverse();
console.log("reversed numbers:", nums2);

// includes() method:
const resultes = names.includes("Tony");
console.log("includes?:", resultes);

// toString() method:
const reslt = names.toString();
console.log("reslt:", reslt);
console.log(typeof reslt);

// join() method:
const result2 = names.join("_"); // we can provide extra preference for join method
console.log("result2:", result2);

// slice() method: => berilgan arraydan malum bir bolagini ajratib oliw imkonini beradi
const newNames = names.slice(0, 2);
console.log("newNames:", newNames);

// splice() method: => malum bir indeksdan boshlab nechtasini ochirishimis kerakligini yozishimiz kerak va ochirilgan indeks orniga agar har qanday qiymat bersak ushani qoshib qoyadi listni ichiga
const langs = ["eng", "rus", "kor", "uzbek", "turkish", "chinese"];
langs.splice(1, 2, "arabic", "japanese");
console.log(langs);

// concat() method:
const veggies = ["baqlajon", "piyoz", "kartoshka"];
const newVegs = ["pomidor", "bodring", "lavlagi"];
const vegs = veggies.concat(newVegs);
console.log(veggies);
console.log(vegs);

// Mutable methods : ==>> push(), pop(), unshift(), shift(), sort(), reverse(), splice()
// Immutable methods: ==>> includes(), indexOf(), toString(), join(), slice(), concat()

/*
 *2. Constructor Array
 *const fruits = new Array("apple", "cherry", "banan");
 *console.log("fruits:", fruits);
 */
