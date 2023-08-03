//

console.log("== string ");

const fName = `Computer science`; // COMPU

// fName = "asdbkj";

// "", '', `` // define with different 3 types ...

console.log(fName);

// varible => 1. propery, 2. method

// 1. property
console.log(fName.length); // property

// 2. methods
const name1 = fName.slice(2, 5);
const name2 = fName.toUpperCase();

console.log(name1);
console.log(name2);

// const temp = 200;

// console.log(temp.toUpperCase());

const str1 = "abc";
const str2 = "xyz";
const str3 = "pqr";

console.log(str1 + str2 + str3); //

const mainStr = str1.concat(str2, str3);

console.log(mainStr);

//
const str5 = "testuser123@gmail.com     ";

console.log(str5.trimEnd());

//
const pin = "1234456";

console.log(pin.padStart(12, "*"));

console.log(str5.charAt(4));
