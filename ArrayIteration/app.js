// forEach, map, filter

const list = [1, 4, 6, 5, 2, 9, 3];
const newList = list.map((ele) => ele * ele);
console.log("newList:", newList);

// map() quyidagi case list nomli arraydagi har bir qiymatni oziga kopaytirib beryapti

const list2 = [2, 4, 6, 9, 8, 7, 5];
const newList2 = list2.map((ele, index) => {
    console.log(`${index} => ${ele}`);
    return ele * 10;
});
console.log("newList2:", newList2);

// quyidagi caseda: arrayda berilgan qiymatni har birini 10 ga kopaytirib yangi qiymat qaytarb beradi(new arrya)

// mapping with ternary
const list3 = [3, 9, 6, 4, 5, 2, 3, 8, 4];
const newList3 = list3.map((ele, index) => {
    return ele === 4 ? ele : null;
});
console.log("newList3:", newList3);

console.log("==============");

// filter() method:
const newList4 = list3.filter((ele, index) => {
    // return false;
    return ele !== 4 ? ele : null;
});
console.log("newList4:", newList4);

// yordamchi iteration methodlar
// reduce, some, every

const numbers3 = [2, 1, 4, 5, 9, 8, 6];
const natija = numbers3.reduce((total, curVal, curIndex) => {
    console.log(`${curIndex}: ${curVal}`);
    console.log("total:", total);
    return total + curVal;
}, 0); // agar initial valueni buyerda kirgizmasak reduce method arrayni 1 chi indeksdan boshlan oqib ketadi lekin natija ikkala holatda ham bir hil
console.log("natija:", natija);

const nums4 = [2, 1, 4, 5, 3, 8];
const natija1 = nums4.reduce((total, curVal, curIndex) => {
    console.log(`${curIndex}: ${curVal}`);
    console.log("total", total);
    return total + curVal;
}, 0); // buyerda initial value 100 ga teng birinchi qiymatni olib va song arrayda berilgan qiymatlarni qoshib boshlaydi va bzga totalni (100) qiymatini ichiga olgan holatda console ga chqarb beradi

console.log("natija1:", natija1);

// some() method:
const natija2 = nums4.some((ele, index) => {
    console.log(`${index}: ${ele}`);
    return ele === 0;
});
console.log("natija2:", natija2);

const natija3 = nums4.every((ele, index) => {
    console.log(`${index}: ${ele}`);
    return ele > 0;
});
console.log("natija3:", natija3);
