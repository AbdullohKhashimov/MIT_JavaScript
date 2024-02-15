// arraylarni hosil qilishni ikki hil yoli bor
// 1. arrays built via literal

const list = [1, 4, 5, 2, 3, 7, 9];
console.log("list:", list);

// 2. array built via constructor

const list2 = new Array("apple", "cherry", "banan");
console.log("list:", list2);

const fruits = ["apple", "melon", "cherry", "banan"];
console.log("fruits:", fruits);

// arrayni valuelari: apple, melon, cherry, banan
// Index : 0, 1 , 2, 3
// Arraylarda boshlangich raqami 0 ga teng yani 1 chi item 0chi index hisoblanadi

const fruit = fruits[0];
console.log("fruit:", fruit);

// Mixed array
const box = ["apple", "banana", "cherry"];
console.log("box:", box); // before any changes
box[0] = "melon";
console.log("changed box:", box);

// Property => azaldan tahlab berilgan object
// Property length
const size = box.length;
console.log("size:", size);
box[box.length] = "lemon";
console.log("box:", box);

// Regular Methods  => push(), pop(), shift(), unshift()
// sort(), reverse(), includes(), indexOf()
// toString(), join()
// slice(), splice(), concat()

// push()
const mevalar = ["uzum", "gilos", "qovun"];
mevalar.push("tarvuz");
console.log("after:", mevalar);

// unshift
mevalar.unshift("mango");
console.log("mevlar:", mevalar);

// pop()
mevalar.pop();
console.log("meva:", mevalar);
const meva = mevalar.pop();
console.log("olingan meva:", meva);

// shift()
mevalar.shift();
console.log("shift:", mevalar);

// Sorting numbers
const nums = [5, 3, 2, 6, 7, 9, 0];
nums.sort();
console.log("sorted numbers:", nums);

// Sorting String
const names = ["Shone", "Abu", "Tony", "Mike", "Zubair"];
names.sort();
console.log("sorted strings: ", names);

// reverse()
names.reverse();
console.log("reversed string:", names);

const result = names.includes("Ilhom");
console.log("result:", result);

// indexOf()
const natija = names.indexOf("Tony");
console.log("index of natijasi:", natija);

// toString()
const result1 = names.toString();
console.log("result1:", result1);
console.log(typeof result1);

// join()
const result2 = names.join("+");
console.log("result2:", result2);
console.log(typeof result2);

// slice() => berilgan stringdan malum bir bolagini ajratib olishda yordam beradi
const newNames = names.slice(0, 2);
console.log("newNames:", newNames);

// splice() => berilgan malum bir indeksdan boshlab nechtasini delete qilishimizni korsatamiz va ularni uchirib beradi
console.log("ismlar:", names);
names.splice(1, 2, "Roza", "billie");
console.log("spliced names array:", names);

//Mutable array methods: => push(), pop(), unshift(), shift(), sort(), reverse(), splice()
// Immutable array methods: => includes(), indexOf(), toString(), join(), slice(), concat()

// Concat()
const numbers2 = [1, 2, 4, 11];
const newNums = names.concat(numbers2);
console.log(newNums);
console.log(names);
