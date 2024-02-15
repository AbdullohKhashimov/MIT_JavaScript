// Scope tushunchasi
// Context tushunchasiga tohtalamiz

// scope tushunchasi variable ga bogliq kategoriya
let c = 0;
function calculate(a, b) {
    // return a + b;
    c = a + b;
}

console.log("c value:", c);
calculate(7, 9);
console.log("c qiymati:", c);

/* Priority 
1. Inside function 
2. Parameter function 
3. Outside function 
*/

let z = 0;
const x = 104;
function add(x, y) {
    z = x + y;
}
console.log("z value:", z);
add(15, 17);
console.log("z qiymati:", z);

// context - object
const person = {
    name: "Jason",
    age: 35,
    nation: "British",
    greet() {
        console.log(`hi, how are you doin?`);
    },
    introduce() {
        console.log(`I am ${this.name} and I am ${this.age}`);

        function from() {
            console.log(`I am ${this.nation}`);
        }
        from(); // Person objecti orqali ishga tushmahganligi sabab qiymatni kora olmimiz chunki bu function introduce methodiga bogliq bolgan funksiyadur
        // before this
        const tellUsCountry = () => {
            // after this = person
            console.log(`I am ${this.nation}`);
        };
        tellUsCountry();
    },
};
person.greet();
person.introduce();

// OOP context => Object

// Function Structure criteria: => Regular, Anonym, Arrow

function salomlash() {
    console.log(`I am ${this.name}`);
    console.log(this);
}
salomlash();
