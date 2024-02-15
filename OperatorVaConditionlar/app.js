/**
 * Operators:
 * ==, !=, ===, !==, <, <=, >, >=, &&, ||, !, !!
 * Ternary operator
 * Nullish operator
 */

// ikkita tenglik qiymatlarni qaytaradi holos
// === bu esa malumotni type va qiymatini solishtiradi

const a = 4;
const b = "4";
console.log("case one:", a == b); // only comparing the values
console.log("case two:", a === b); // compares the data type along with the given value

const x = 2;
const y = 3;

console.log("case three:", x !== y); // compares the value and data type
console.log("case four:", x != y); // compares the value only leaving the data type

const c = 5;
const d = 3;

const result = c > 0 && d > 0;
console.log("result:", result);

const resultat = a > 0 && b < 0;
console.log("resultat:", resultat);

const results = a > 0 || b < 0;
console.log("results:", results);

// Truthy : true, 5, 'hello ...
// falsy: false, null , 0, '', undefined

const n = "abu";
const natija = !!n;
console.log("natija:", natija);

const m = null;
const natija1 = !!m;
console.log("natija1:", natija1);

const z = "";
const natija2 = !z;
console.log("natija2:", natija2);

// Ternary operator:
const ab = 5;
const abc = ab > 0 ? "positive" : "negative";
console.log("bc:", abc); // expected output: positive because ab variable is greater than 0

// Nullish operator: => chap tarafda turgan qiymatni null yoki nullmasligini tekshiradi agar berilgan qiymat null bulmasa demak berilgan qiymatni qaytarb beradi
const ad = 9;
const bd = ad ?? 100;
console.log("bd:", bd);

// Conditions:
//1. If conditions
//2. switch conditions

// if condition:
const apple = 110;
// if (apple >= 0 && apple < 50) {
//     console.log("Your apples is less than 50");
// }
// if (apple >= 50 && apple < 100) {
//     console.log("your apples are not less than 50 and less than 100");
// }
// if (apple >= 100) {
//     console.log("You have 100 apples or more");
// }

if (apple >= 100) {
    console.log("you have 100 or more apples");
} else if (apple >= 50) {
    console.log("You have over 50 apples but less than 100");
} else {
    console.log("Your apples are less than 50");
}

const grade = "C";

switch (grade) {
    case "A":
        console.log("Your grade is best");
        break;
    case "B":
        console.log("Your grade is good");
        break;
    case "C":
        console.log("Your grade is less than average");
        break;
    default:
        console.log("Your grading process is still not complete");
        break;
}

// nullish operatorini syntaxi ?? ikkita sorov belgisi
