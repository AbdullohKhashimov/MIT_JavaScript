class Account {
    // State
    #owner; // turns from public to private
    #amount; // private
    currency; // publoic

    // constructor
    constructor(owner, amount, currency = "USD") {
        this.#owner = owner;
        this.#amount = amount;
        this.currency = currency;
    }

    // Methods

    checkBal() {
        console.log(
            `Hi dear ${this.#owner} your estimated balance is: ${
                this.#amount
            } ${this.currency}`
        );
        this.#test();
    }
    deposit(money) {
        this.#amount += money;
    }
    getDetails() {
        console.log(
            `name: ${this.#owner} \nbalance is: ${this.#amount} ${
                this.currency
            }`
        );
    }
    #test() {
        console.log("this is only obtainable inside class");
    }
}

const acc = new Account("Tony", 1000);
acc.getDetails();

console.log("===========");

acc.deposit(7000);
acc.checkBal();

console.log("==========");

acc.deposit(15000);
acc.checkBal();

console.log("========");

// acc.owner = "Rozzochka"; // account name changes from Tony => Rozzochka
// acc.deposit(7000);
// acc.getDetails();
// acc.checkBal();
// acc.amount = 60000; // does not change the real balance because these features have been encapsulated
// acc.checkBal();

acc.checkBal();

/* Encapsulation includes: public/private/protected features */

// Inheritence

// Parent Class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getDetails() {
        console.log(`${this.brand} ${this.model}  `);
    }

    start() {
        console.log("start engine");
    }

    stop() {
        console.log("stop engine");
    }

    maximizdSpeed() {
        console.log(`maximal speed is not provided`);
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
    fillUpGasoline(a) {
        this.#fuel += a;
    }
    maximizdSpeed() {
        console.log(
            `${this.model} can reach up to the speed of ${this.speed} km/h`
        );
    }
}

class Tesla extends Car {
    #battery = 0;
    constructor(model, category, speed) {
        super("Tesla", "Model S", 330);
        this.category = category;
        this.speed = speed;
    }

    chargePower(b) {
        this.#battery += b;
    }

    maximizdSpeed() {
        console.log(
            `${this.model} can reach up to the speed of ${this.speed}km/h`
        );
    }
}

const camry = new Toyota("Camry", "sedan", 300);
camry.getDetails();
camry.start();
camry.maximizdSpeed();

console.log("=========");

const tessie = new Tesla("Model S", "SUV", 330);
tessie.getDetails();
tessie.start();
tessie.maximizdSpeed();

// polymorphism => same method but does different actions using the same method name
