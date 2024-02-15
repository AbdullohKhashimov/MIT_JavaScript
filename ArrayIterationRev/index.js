// forEach, map, filter => immutable methods

const list = [1, 4, 5, 3, 7, 4, 8];
const newList = list.map((ele) => ele * ele);
console.log("newList:", newList);
// quyidagi misolda: map() methodi arrayni ichidagi har bir value sini qolga olib beryapti va uning kvadratini yangi newList arrayga qaytarb beryapti

// reformation of the code aboe
const newList2 = list.map((ele, idx) => {
    // console.log(`${idx}: ${ele}`);
    // return ele * 10;
    return ele === 4 ? ele : null;
});

console.log("newList2:", newList2);
// reformatted codeblock da arraydagi har bir qiymatni olib ularni har birini 10ga kopaytrb chiqyapti

// filter() method:
const newList3 = list.filter((ele, index) => {
    return ele !== 4 ? ele : null;
});

console.log("newList3:", newList3);
// filter() asosan bor arrayni malum bir shartlar bn filter qilib bizga kere bulgan valyulardan yangi array hosil qiliwimzda yordam beradi

//reduce(), some(), every()

// reduce() method:
const numbers = [2, 1, 4, 5, 3, 8];
const result = numbers.reduce((total, curVal, curIdx) => {
    console.log(`${curIdx}: ${curVal}`);
    console.log("total:", total);
    return total + curVal;
}, 0); // initial value = 0. if initial val is not inserted then reduce method will start reading the array from the first index

console.log("result:", result);

// some() method:

const result2 = numbers.some((value, index) => {
    console.log(`${index}:-> ${value}`);
    return value === 5;
});

console.log("result2:", result2);

// every() method
const result3 = numbers.every((value, index) => {
    console.log(`${index}: ${value}`);
    return value > 0;
});

console.log("result3:", result3); // expected output: false // because in numbers array the every single value is not equalt to 5
console.log("result3:", result3); // expected output: true // because every single value in numbers array is positive and not negative meaning every single val is greater than 0
