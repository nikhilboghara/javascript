//

console.log("== Array");

const a = 10; // number, string, boolean

// array
const weekDays = [
  "Sunday", // 0
  "Monday", // 1
  "Tuesday", // 2
  "wed", //3
  123, //4
]; // object

console.log(weekDays);
// console.log(typeof weekDays);

// console.log(weekDays[0]);
// console.log(weekDays[8]);

// console.log(weekDays.length);

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
weekDays.pop(); // 132
weekDays.pop(); // 'wed

console.log(weekDays);

// shift and unshift
