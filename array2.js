//

console.log("== Array");

const a = 10; // number, string, boolean

// array
// const weekDays = ["Sunday", "Monday", "Tuesday"]; // object
// const testObj = {}; // object

// console.log(weekDays);
// console.log(typeof weekDays);

// console.log(weekDays[0]);
// console.log(weekDays[8]);

// console.log(weekDays.length - 1);

// console.log("===");
// for (let index = 0; index < weekDays.length; index++) {
//   console.log(weekDays[index]);
// }

// weekDays[0] = "Saturday";
// weekDays[10] = "asdad";

// console.log(weekDays[5]);

// console.log(weekDays);

// weekDays.push("saturday");
// weekDays.push("Mondddddd");
// weekDays.pop(); // 132
// weekDays.pop(); // 'wed

// console.log(weekDays);

// shift and unshift

//
const weekDays = ["Sunday", "Monday", "Tuesday"];

// console.log(weekDays);

// console.log(weekDays.join(","));

const arr1 = [12, 43, 1, 2, 3, 4];
const arr2 = ["a", "b", "c"];

console.log(Math.max(...arr1)); // 12,43,1
console.log(...arr2);

// console.log(weekDays.toString());

console.log(weekDays.sort()); // sort will be based on alphabetics

// weekDays.slice()

// 1.
// const arr3 = arr1.concat(arr2, arr3);
// console.log(arr3);

// 2. spread (...)

// const sprd = [...arr1, "abc", ...arr2, "xyz"];
// console.log(sprd);

// const tempArr = [];

// [1,2,3,4,5,6,7,8,9]
// [2,4,6,8,10]

const nestedArr = ["a", "b", "c", ["p", "q", "r", [1, 2, 3, 4]], {}];

console.log(nestedArr);

console.log(nestedArr[3]);

console.log(nestedArr[3][3][2]);
