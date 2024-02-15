// /**
//  * Loops
//  * while
//  * for
//  */

let count = 0;
while (count <= 10) {
    console.log("executed:", count);
    // count++;
    count = count + 1; // same logic as above count++
}
console.log("passed here");

for (let i = 0; i <= 10; i++) {
    console.log("executed:", i);
}

// reversed looping downward counting

for (let i = 10; i >= 0; i--) {
    console.log("executed:", i);
}

let name = "Tony";
for (let i = 0; i <= name.length; i++) {
    console.log(name[i]);
}

// of => value
let fruit = ["apple", "cherry", "lemon", "banana"];
for (const ele of fruit) {
    console.log("ele:", ele);
}

// in => index
for (const index in fruit) {
    console.log(index);
}

for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
