/**
 * Naming Standards:
 * 1. Camel case
 * 2. Snake case
 * 3. Kebab case
 * 4. Pascal case
 *  */

// Camel case:
const fName = "Tony";
function isPrime() {
    return true;
}
isPrime();

// Snake case:
const f_name = "Abu";
function is_Prime() {
    return true;
}

// Kebab case => asosan fayllarni nomlashda ishlatilinadi.

// Pascal Case: => asosan classlarni nomlashda ishlatiladi
class OurGroup {
    name;
    category;
    year;
}

class Person {
    // State
    // name = "";
    // age = 0;
    static serialNumber = "FA0678921";

    // Constructor
    constructor(name, age, guruh) {
        this.name = name;
        this.age = age;
        this.guruh = guruh;
        // this keyword objectga qaratilgan
    }

    // Methods;
    introduce() {
        console.log(
            `my name is ${this.name}, i am ${this.age} years old and I belong to ${this.guruh}`
        );
    }
    greet() {
        console.log("hey how are you ?");
    }

    static help() {
        console.log("Hii I am a person class. How may i help you today?");
    }
}

const studentA = new Person("Tony", 30, "MIT9");
console.log(studentA);
const studentB = new Person("Shawn", 27, "mit9");
console.log(studentB);

studentA.greet();
studentA.introduce();

console.log("============");

studentB.greet();
studentB.introduce();
Person.help();

const number1 = Person.serialNumber;
console.log("number1:", number1);
// static methods => classdan yasalgasn object bn emas balki chambarchas classni ozi bilan birga keladigon methodlar turiga kiradi
