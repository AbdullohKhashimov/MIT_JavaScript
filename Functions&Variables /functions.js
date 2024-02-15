// what is function? malum bir operatsiyani amalga oshiruvchi codeblock
// firstclass object is the second name for function

// Function => Define and Call

function greet() {
    console.log("Welcome to class dear mit9 students");
}

// calling the function
greet();

// Function Criteries: Structure & Returning & Execution
// Structure : Regular, Expression & Arrow functions & Auto envoke functions

// Regular Functions:
function greeting() {
    console.log("Hello mit students from regular function");
}
greeting();

// Anonymous Functions:

const abc = function () {
    console.log("Hello world from Anonymous functions");
};
abc();

// Arrow Functions:
const cyz = () => {
    console.log("This is what we call as an arrow function");
};
cyz();

// Auto envoke functions:
(function () {
    console.log("Hello papi from auto envoke function");
})();

// Returning functions: return & void
function adds() {
    const a = 10;
    const b = 5;

    return a + b;
}

const result = adds();
console.log(result);

// Void functions: hechqanday qiymat qaytarmaydoi

function calculateVoid() {
    const d = 10;
    const c = 2;
    console.log("result:", d + c);
}
calculateVoid();
const g = calculateVoid();
console.log(g); // does not return any value

// Execution: Asynchronous & Synchronous
// tepadigi barcha yozilgan functionlar bu synchronous functionlardur

// Function argument & parameters
// define function with (parameter) => parameter function ni qurish qismida hosil buladi
function hisobla(a, b) {
    return a + b;
}
// call function with (argument) berilgan argument 9 va 11 natija esa ikkala berilgan argumentni yigindisini korsatadi
const natija = hisobla(9, 11);
console.log(natija);

// Function priority :(scope) termini bilan bogliq
// birinchi holatda function ichidagi argumentlardan  qidiradi
// ikkinchi ozini ichidagi variableni qiymatlaridan qidiradi agar uyerda qiymat topmasa parametrdan qidiradi
// uchinci holatda: agar bir parametrli function bolsa qiymatni function blockidan tashqarida izlaydi.
