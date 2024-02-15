// Nullish Operators:

// truthy values: true, 5, "hello"
// falsy values: false, null, "", undefined

// !! ikki undov belgisi chap tarafdegi qiymat qandoq bulsa ushani boolean holatda true yoki false qilib  qaytaradi
// ! bir undov belgi bulsa falsy qiymatni truthy qiymatga aylantrb beradi
const a = "";
const result = !a;
console.log("result:", result);

const b = { name: "abu" };
const resultat = !!a;
console.log("resultat:", resultat);

// Ternary operators ?:
const ab = 5;
const c = ab > 3 ? "positive" : "negative";
console.log("c:", c);

// Nullish Operator ?? : => agar chap tarafdegi qiymatni null yoki null emasligini tekshiradi va agar qiymat null bolmasa usha qiymatni ozini qaytaradi agar null bolsa ong tarafda berilgan qiymatni qaytarb beradi
const d = 6;
const e = d ?? 100;
console.log(e);

// ternary operatorda = > ? dan oldin string bersak demak falsy yoki truthy valueligini tekwiradi
// undefined qiymati shartli null.
