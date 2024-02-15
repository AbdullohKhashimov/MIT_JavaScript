// Array built via Literal
const numbers = [1, 3, 5, 2, 7, 9, 0];
console.log("numbers list:", numbers);

const fruites = ["cherry", "apple", "mango", "watermelon"];
console.log("fruits:", fruites);

// values of array: charry, apple, mango, watermelon
// Indexes of array: 0, 1 , 2 , 3

const fruit = fruites[0];
console.log(fruit);

// Mixed array
const box = ["book", 25, "ali", "jonny", 33];
console.log("box values:", box);

const list3 = ["apple", "banana", "cherry"];
list3[0] = "melon";
console.log(list3);
list3[3] = "lemon";
console.log("list3:", list3);

// Property => length
const size = list3.length;
console.log("size:", size);

list3[list3.length] = "strawberry"; // this sytax will help us to add an item to the last index of the given array
console.log("List3:", list3);

/*Method: Regular
push(), pop(), unshift(), shift()
sort(), reverse(), includes(), indexOf()
toString(), join(), slice(), splice()
concat()
 */

// push() => adds an item the last index of an array
list3.push("kitob");
console.log("list3 after changes:", list3);

// unshift() => adds an item the beggining of an array
list3.unshift("uyim");
console.log("list3:", list3);

// pop()=> removes an item from the last index of an array
list3.pop();
console.log("pop:", list3);
const fr = list3.pop();
console.log("deleted item:", fr);

// shift() => removes the first item from the array
list3.shift();
console.log("shift:", list3);
const shf = list3.shift();
console.log("removed item using shift:", shf);

// sort() => helps us to sort numbers/string accordingly
const nums = [5, 3, 4, 2, 9, 1, 0];
nums.sort();
console.log("sorting:", nums);

// string example for sort() method
const alpha = ["Nemati", "Tyson", "Khabib", "Abror", "shone"];
console.log("before sorting:", alpha);
alpha.sort();
console.log("after sorting:", alpha);

// reverse() method:
alpha.reverse();
console.log("reversed alpha:", alpha);

const result = alpha.includes("Kamol");
console.log("result value:", result);

// indexOF() method:
const res = alpha.indexOf("Kamol");
console.log("res:", res); // agar bor bolsa true yoq bolsa -1 qiymatini qaytaradi

// toString() method:
const resulte = alpha.toString();
console.log("resulte:", resulte); // reverts the information to string type

// join() method:
const result2 = alpha.join("_"); // can give extra order if we want to
console.log("result2:", result2);

// slice() method: berilgan listni malum bir bolagini ajratib oliw imkonini beradi
const students = ["ali", "bahrom", "jovoh", "tony"];
const newStudents = students.slice(1, 3);
console.log("sliced students list:", newStudents);

// splice() method: berilgan listni 0 chi indekisdan boshlan nechtasini ochirish kerak?
students.splice(1, 2, "Mashxur");
console.log("spliced students:", students);

// Mutable methods => push(), pop(), shift(), unshift(), sort(), reverse(), splice()
// Immutable methods => incliudes(), indexOf(), toString(), join(), slice(), concat()

// concat()
const alpha2 = ["bob", "brain"];
const alpha3 = alpha.concat(alpha2);
console.log(alpha3);

// Array built via constructor
const list2 = new Array("apple", "cherry", "melon");
// console.log("list2:", list2);
