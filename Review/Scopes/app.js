// Scope variable
let c = 0;
const a = 104;

function calculate(a, b) {
    c = a + b;
}
console.log("c value:", c); // expected output: 0
calculate(8, 7);
console.log("c value:", c); // expected output: 15

/**
 * Priority:
 * 1. Inside function
 * 2. Parameter function
 * 3. Outside function
 */

// context - object
const person = {
    name: "Roza",
    age: 27,
    country: "Uzbekistan",

    greet() {
        console.log("hi, how are you doing?");
    },

    introduce() {
        console.log(
            `My name is ${this.name}, I am ${this.age} and I come from ${this.country}`
        );
        // function tellYourAge() {
        //     console.log(`I am ${this.age}`); // expected output: undefined because the function we wrote inside object method meaning default function pointed to the method of an object not an object
        // }

        // solution for above problem => arrow function does not change the context
        const tellYourAge = () => {
            console.log(`she is ${this.age} years old`);
        };

        tellYourAge();
    },
};
person.greet();
person.introduce();

// OOP context => Objectga qaratilgan

////////////////////////////////////////////
function grate() {
    console.log(`i am ${this.name}`);
    console.log(this);
}
grate();
