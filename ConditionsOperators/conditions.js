// conditions: case #1
const apples = 19;

if (apples >= 0 && apples < 50) {
    //console.log("your apples are less than 50 pieces");
}

if (apples >= 0 && apples < 100) {
    //console.log("your apples are more than 50 but less than 100 pieces");
}

if (apples >= 100) {
    //console.log("your apples are more than or equal to 100");
}

// case #2

if (apples >= 100) {
    console.log("you have more than or equal to 100 apples");
} else if (apples >= 50) {
    console.log("you have more than 50 apples");
} else {
    console.log("you have less than 50 apples ");
}

const array = ["a", "b", "c"];
const result = array.forEach((ele, index) => {
    console.log(`${index} : ${ele}`);
});
console.log(result);
