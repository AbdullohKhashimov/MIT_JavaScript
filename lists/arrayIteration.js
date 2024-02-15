//Asosiy iteration methodlari: forEach(), map(), filter() => immutable methods
// forEach() method:
const list = [1, 4, 5, 3, 7, 4, 8];
const newList = [];
list.forEach((ele, index) => {
    newList.push(ele * ele);
});
console.log("newList:", newList);

// map() returns a new array
const newList1 = list.map((ele) => ele * ele);
console.log("NewList1:", newList1);

const newlist = list.map((ele, index) => {
    console.log(`${index} => ${ele}`);
    return ele * 10;
});
console.log("newlist:", newlist);

//
const newList3 = list.map((ele, index) => {
    return ele === 4 ? ele : null;
});
console.log("newList3:", newList3);

console.log("=========");

// filter() method:
const newlist2 = list.filter((ele, index) => {
    return ele === 4 ? ele : null;
});
console.log("newlist2:", newlist2);

const nums = [3, 5, 1, 9, 7, 8, 6];
nums.forEach((ele, index) => {
    console.log(`${index}: ${ele}`);
});

// Yordamchi iteration methodlari: reduce(), some(), every()

// reduce() method:
const raqamlar = [2, 1, 4, 5, 3, 8];
const natija3 = raqamlar.reduce((total, curVal, curIdx) => {
    console.log(`${curIdx} : ${curVal}`);
    console.log(total);
    return total + curVal;
}, 0);
console.log("natija3:", natija3);

console.log("//////////////////////////");
// some() method: array ichidagi brorta qiymat = ga teng bolsa
const digits = [2, 1, 4, 5, 3, 8];
const natija5 = digits.some((ele, idx) => {
    console.log(`${idx} : ${ele}`);
    return ele === 5;
});
console.log("natija5:", natija5);

//every() method:arrayda berilgan har bir qiymat ? ga teng bolsagina true qaytaradi
const digits2 = [2, 1, 4, 5, 3, 8];
const natija6 = digits.every((ele, index) => {
    console.log(`${index} : ${ele}`);
    // return ele === 4; // false because values in an array is different in values
    return ele > 0; // true: because every single value in an array is greater than 0 and all positive numnbers
});
console.log("natija6:", natija6);
