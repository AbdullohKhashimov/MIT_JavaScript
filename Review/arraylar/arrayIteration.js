// forEach(), map(), filter()

const list = [1, 4, 5, 3, 7, 4, 8];
const newList = list.map((n) => n * n);
console.log("newList:", newList);

const newList1 = list.map((n, idx) => {
    console.log(`${idx} => ${n}`);
    return n * 10;
});
console.log("newList1:", newList1);

console.log("=====1=====");

const newList2 = list.map((n, idx) => {
    return n === 4 ? n : null;
});
console.log("newList2:", newList2);

console.log("=====2======");

const newList3 = list.filter((n, idx) => {
    return n !== 4 ? n : null;
});
console.log("newList3:", newList3);

// reduce(), some(), method()

// reduce() method:
const digits = [2, 1, 4, 5, 3, 8];
// const resultate = digits.reduce((total, curVal, curIdx) => {
//     console.log(`${curIdx}: ${curVal}`);
//     return total + curVal;
// }, 0); // agar initial value ni kirgizmasak reduce method 0chi indexdan emas 1chi indexdan oqishni boshlaydi

// console.log("resultat:", resultate); 3 ta parametrni ichiga oladi

// some() method:
const resultate = digits.some((n, index) => {
    console.log(`${index}: => ${n}`);
    return n === 5;
});
console.log("resultate:", resultate);

const natijas = digits.every((ele, index) => {
    console.log(`${index}:=> ${ele}`);
    return ele > 0;
});
console.log("natijas:", natijas);

// forEach() => array dan hosil bolgan qiymatni yangi arrayga qaytarb beradi

const newList9 = [1, 4, 5, 3, 9, 8];
const newList10 = [];
newList9.forEach((ele, index) => {
    newList10.push(ele * ele);
});
console.log(newList10);

// map() will return a new array

const raqams = [1, 4, 5, 1, 5, 7, 9];
const raqamlarr = raqams.map((ele) => ele * ele);
console.log("raqamlarr:", raqamlarr);

// foreach => map bilan bir hil va u faqat loop qilib beradi va hech qanday value qaytarb bermaydi.
// some/every ohirigacha iteratsiya qilmaydi agar shart boshidan hatolik topsa srazu false value qaytaradi
