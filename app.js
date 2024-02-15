for (let i = 0; i <= 10; i++) {
    console.log("executed:", i);
}
// bir ozgaruvchi i ni belgiladik.
// va uning boshlangich qiymatini 0 ga tengladik
// va shartni 10 dan kichik yoki unga teng bolgunga qadar etib shart berdik.

for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

const fruits = ["apple", "cherry", "lemon", "banan"];
// fruits.map((ele, idx) => {
//     console.log(`${idx} : ${ele}`);
// });

// in => indexlarni olib beradi
for (const index in fruits) {
    console.log(index);
}
