class Account {
    // state part
    #owner;
    #amount;
    currency;

    // constructor
    constructor(owner, amount, currency = "USD") {
        this.#owner = owner;
        this.#amount = amount;
        this.currency = currency;
    }
    // methods
    checkBalance() {
        console.log(
            `Hi ${this.#owner}, your estimated balance is ${this.#amount}${
                this.currency
            }`
        );
        this.#test();
    }
    deposit(cash) {
        this.#amount += cash;
    }
    #test() {
        console.log(`this is only obtainable inside class`);
    }
    #withdraw(b) {
        this.#amount -= b;
    }
}
// const myAcc = new Account("Tony", 2000);
// myAcc.checkBalance();
// console.log("------------");
// myAcc.deposit(900);
// myAcc.checkBalance();
// console.log("==============2============");
// myAcc.owner = "Roza";
// myAcc.checkBalance();
// console.log("===========3===========");
// myAcc.amount = 20000000;
// myAcc.checkBalance();

// console.log("//////////////////");
// console.log(myAcc.currency);

// Encapsulation ? => public, private, protected

// #private => if we use pound sign it will turn our code from public to private

// Parent Class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getDetails() {
        console.log(`${this.brand} ${this.model}`);
    }
    start() {
        console.log("start engine");
    }
    stop() {
        console.log("stop engine");
    }
    maximizeSpeed() {
        console.log("Max speed is not provided");
    }
}

// Child class
class Toyota extends Car {
    #fuel = 0;
    constructor(model, category, speed) {
        super("Toyota", model);
        this.category = category;
        this.speed = speed;
    }
    fillupGasoline(a) {
        this.#fuel += a;
    }
    maximizeSpeed() {
        console.log(`${this.model} can reach up to: ${this.speed} km/h`);
    }
}

const newCar = new Toyota("Camry", "sedan", 240);
newCar.getDetails();
newCar.start(); // methods which are not exist in toyota class usually goes up to the parent and request to use the properties written in parent class
// Polymorphism
newCar.maximizeSpeed();
// newCar.stop();
// newCar.fillupGasoline(20);

console.log("============");

// child class

class Tesla extends Car {
    #battery = 70;
    constructor(model, category, speed) {
        super("Tesla", "model S", 300);

        this.category = category;
        this.speed = speed;
    }

    chargePower(c) {
        this.#battery += c;
    }
    maximizeSpeed() {
        console.log(`${this.model} can reach up to: ${this.speed} km/h`);
    }
}

const tessie = new Tesla("Model S", "suv", 300);
tessie.getDetails();
tessie.start();
// polymorphism
tessie.maximizeSpeed();
// tessie.stop();
// tessie.chargePower(55);
