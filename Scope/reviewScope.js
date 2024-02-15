// Scope => variable bogliq tushuncha
// Context => objectga bogliq tushuncha

// void function
// define part
function calculate(a, b) {
    const c = a + b;
    console.log("c value:", c);
}
// call part
calculate(14, 15);

let c = 10; // using c outside of function (root)
function calc(a, b) {
    c = a + b;
}
calc(14, 11);
console.log("c value:", c);

/* Priority  => qiymatni izlashi 
1. Inside function 
2. Parameter of function 
3. Outside function

*/

// Context - object
const persone = {
    name: "Abu",
    age: 30,
    nationalitiy: "Uzbek",
    greet() {
        console.log(`Hey, how you been ?`);
    },
    introduce() {
        console.log(`I am ${this.name} and i am ${this.age}`);
        // function sayYourAge() {
        //     console.log(`I am ${this.age} years old`);
        // }
        // sayYourAge(); // because in this case the function we wrote belongs to the introduce() method not the object
        const sayYourAge = () => {
            console.log(`I am ${this.age} years old`);
        };
        sayYourAge(); // Arrow function contextni ozgartirmedi
    },
};
persone.greet();
persone.introduce();

// OOP context => Object OOP da context asosan Objectga qaratilgan

// Function Structure criteria=> Regular, Anonym, Arrow, AutoInvoke

function greete() {
    console.log(`I am ${this.name}`);
}
greete();
