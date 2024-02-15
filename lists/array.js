// Literal array
// What is an Array? => ozini ichki tartibiga ega bolgan maxsus object
const list = [1, 3, 5, 2, 3, 7, 9];
console.log("List:", list);

const fruits = ["Grape", "Watermelon", "Lemon", "Orange"];
console.log("Fruits before:", fruits);
console.log("===============");
fruits[0] = "melon";
console.log("fruits after:", fruits);

// Property: => length => qavs shartamas chunki u method emas balki property
const size = fruits.length;
console.log("size:", size);

/** Methods:
 * push(), pop(), unshift(), shift()
 * sort(), reverse(), indcludes(), indexOf()
 * toString(), join()
 * slice(), splice(), concat()
 **/

// push() method:
fruits.push("Anjir");
console.log("fruits after push:", fruits);

// unshift() method:
fruits.unshift("Mango");
console.log("fruits after unshift:", fruits);

// pop() method:
fruits.pop();
console.log("fruits with pop method:", fruits);
const deleted = fruits.pop();
console.log("fruits before pop:", fruits);
console.log("deleted item using pop:", deleted);

//shift() method:
fruits.shift();
console.log("fruits after shift:", fruits);
const deletedShift = fruits.shift();
console.log("deleted shift:", deletedShift);

// sort() method:
const list1 = [5, 3, 2, 6, 7, 9, 0];
console.log("before sort:", list1);
list1.sort();
console.log("list after sorting:", list1);

const names = ["John", "Edik", "Polvon", "Ahmed"];
console.log("names before sorting:", names);
names.sort();
console.log("sorted names:", names);

// reverse() method:
names.reverse();
console.log("names reversed:", names);
list1.reverse();
console.log("numbers reversed:", list1);

// inludes() method:
const result = fruits.includes("Orange");
console.log("result:", result);

// indexOf() method:
const result1 = fruits.indexOf("Banana");
console.log("result1:", result1);

// toString() method:
const result2 = names.toString();
console.log("toString method:", result2);

// join() method:
const result3 = names.sort().join(" ");
console.log("join:", result3);

// slice() method: => berilgan stringni malum bir bolagini ajratib olishda yordam beradi
const namee = ["Ali", "Abu", "Jonny"];
console.log("namee:", namee);

console.log("=============");

const natija = namee.slice(0, 2);
console.log("sliced natija:", natija);

const result4 = names.slice(0, 2); // => 0 ozi kiradi va 1 chi indeks ham kiradi 2 kirmedi
console.log("names sliced:", result4);

// splice() method: => ? chi indexdan boshlab nechtasini ochirishimiz kerakligini taminlaydi
const mevalar = ["olma", "anor", "tarvuz", "yongoq"];
// const natija1 = mevalar.splice(0, 2, "limon");
mevalar.splice(0, 2, "limon", "uzum");
console.log("spliced natija1:", mevalar);

// getting an index of a value in the array
// const fruit = fruits[0];
// console.log("fruit:", fruit);

// // Constructor arrays
// const list2 = new Array("Apple", "Banana", "Grape");
// console.log("List2:", list2);
