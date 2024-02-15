class Account {
    // State:
    owner;
    amount;
    currency;

    //Constructor:
    constructor(owner, amount, currency = "usd") {
        this.owner = owner;
        this.amount = amount;
        this.currency = currency;
    }

    // Methods
    checkBalance() {
        console.log(
            `Hi, ${this.owner} your estimated balance is: ${this.amount} ${this.currency}`
        );
    }
    deposit(money) {
        this.amount += money;
    }
}

const acc = new Account("Abu", 1000);
acc.checkBalance();

console.log("===========");

acc.deposit(9000);
acc.checkBalance();

console.log("====2====");

acc.owner = "Edik";
acc.checkBalance();

console.log("====3=====");

acc.amount = 20000;
acc.checkBalance();

// Encapsulation: => public, private, protected features
// # reverts public info to private information
// _ provides us with protected informatiomn

// Encapsulated class

class Karta {
    // State:
    #egasi;
    #miqdori;
    curency;

    // constructor => constructor cannot be public or private
    constructor(egasi, miqdori, curency = "uzs") {
        this.#egasi = egasi;
        this.#miqdori = miqdori;
        this.curency = curency;
    }
    hisobTekshirish() {
        console.log(
            `Salom ${this.#egasi}, hisobingizdagi balans: ${this.#miqdori} ${
                this.curency
            }`
        );
        this.#test();
    }
    pulQoshish(pul) {
        this.#miqdori += pul;
    }

    #test() {
        console.log("This is only obtainable inside class");
    }
}
const yangiShot = new Karta("Asili", 5000000);
yangiShot.hisobTekshirish();

yangiShot.pulQoshish(2000000);
yangiShot.hisobTekshirish();

yangiShot.pulQoshish(1000000);
yangiShot.hisobTekshirish();

console.log("=========2============");
console.log(yangiShot.egasi);
console.log(yangiShot.miqdori);

///////////////////////////////////////////////
//// Inheritance /////////
///////////////////////////////////////////////
// Parent Class
class Car {
    // State
    model;
    brand;

    // Constructor:
    constructor(model, brand) {
        this.model = model;
        this.brand = brand;
    }
    // Methods
    getDetails() {
        console.log(`${this.brand} ${this.model}`);
    }
    start() {
        console.log(`engine start`);
    }
    stop() {
        console.log(`engine stop`);
    }
    maximizeSpeed() {
        console.log("Max speed is not provided");
    }
}

// Child Class
class Toyota extends Car {
    #fuel = 0;
    constructor(model, category, speed) {
        super("Toyota", model);
        this.category = category;
        this.speed = speed;
    }
    fillUpGas(a) {
        this.#fuel += a;
    }
    maximizeSpeed() {
        console.log(
            `${this.model} can reach up to the speed of ${this.speed}km/h`
        );
    }
}

const camrey = new Toyota("Camry", "Sedan", 240);
camrey.getDetails();
camrey.start();
camrey.stop();
camrey.fillUpGas(20);

// Child class continues

class Tesla extends Car {
    #battery = 0;
    constructor(model, category, speed) {
        super("Tesla", model);
        this.category = category;
        this.speed = speed;
    }
    chargePower(b) {
        this.#battery += b;
    }
    maximizeSpeed() {
        console.log(
            `${this.model} can reach up to the speed of ${this.speed} km/h`
        );
    }
}

const tessie = new Tesla("Model S", "SUV", 330);
tessie.getDetails();
tessie.start();
tessie.stop();
tessie.chargePower();

// Polymorphism va Inheritance yonma yon yuradi
// this is what a polymorphism is
camrey.maximizeSpeed();
tessie.maximizeSpeed();
// bir hil nomli lekin boshqa boshqa operatsiyani bajaradigon method bu polymorphism

// reference = qaratilgan manzil
// nested objects = object ichidagi object

// static da class ichidagi public va protected malumotnigina classdan tashqarida chaqirsa buladi
// Polymorphism da childan oladi yani pastdan tepaga qarab yuradi
