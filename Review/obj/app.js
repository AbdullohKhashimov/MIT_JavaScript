/*
* Programming Paradigms: Functional Programmin & OOP 
     OOP Big 4 Concepts: 
     *1. Abstraction 
     *2. Encapsulation
     *3. Inheritence
     *4. Polymorphism
*/

// Object built via literal method:
const person = {
    // Property
    name: "Abu",
    age: 30,
    nationality: "Uzbek",

    // method
    greet() {
        console.log(`Hi, How are you doing?`);
    },
    introduce() {
        console.log(`i am ${this.name} and i am ${this.age} years old!`);
    },
};
// Person objectini keylari: name, age, nationality
// Person objectini valyulari: Abu, 30, Uzbek

// Accessing object key value paris
const a = person.name;
console.log("a value:", a);
person.greet();
person.introduce();

const pressbtn = document.getElementById("butt");
console.log(pressbtn);
pressbtn.addEventListener("click", function () {
    alert("You pressed the button");
});

// Primitive  type  Variables => does not have Reference but only has value
const x = "David"; // String
const b = 30; // Integer
const c = true; // Boolean
const d = null; // Null, undefined, ,,,, so on

let y = x;
y = "Ali";
console.log("y:", x);

// Object type Variables => has both types Reference and Value
const pet = {
    name: "Leosha",
    age: 3,
    type: "cat",
};
console.log("pet name:", pet.name);

const pet2 = pet;
pet2.name = "Tom";
console.log("pet2:", pet2.name);
console.log("pet name:", pet.name);

pet.name = "Leo";
console.log("pet2:", pet2.name);
console.log("pet name:", pet.name);

// Spread operator => qurilgan objectni valyusidan copy olib beradi yani:
const person2 = { ...person };
person2.name = "Rozzochka";
console.log("person name:", person.name);
console.log("person2 name:", person2.name);

// Object built via constructor

const obj = new Object();
obj.name = "Leyla";
obj.age = 27;
obj.hobby = "Drama";
console.log(
    `Her name is ${obj.name}, she is ${obj.age} and she loves watching ${obj.hobby}`
);

const keys = Object.keys(obj);
console.log("keys", keys);
const values = Object.values(obj);
console.log("Values:", values);
