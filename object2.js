//

console.log("== object");

let var1 = 100; // number
let str1 = "123"; // str
let isAdmin = true; // boolean
let weekDays = ["Sun", "Mon", "Wed"]; // datatype: object
// index: value

// Object: functionality/ convention

// user object
// const user = {
//   // property ...
//   name: "Test user", // key: value
//   age: 23,
//   color: "Green",
//   status: "in progress",
//   attendance: [0, 3, 4, 5],
//   address: {
//     c_name: "xsaud",
//     c_address: "asad",
//     c_obj: [12, 23, 43],
//   },

//   // methods ..
// };

const users = [
  { id: 1, user_name: "asdad", color: "asdd" }, // 0
  { id: 2, user_name: "asdad2", color: "asdd" },
  { id: 3, user_name: "asdad3", color: "asdd" },
  { id: 4, user_name: "asdad4", color: "asdd" },
];

// console.log(user);

// console.log(user["age"]); //find a avlue with key
// console.log(user.status); // dor operator

// console.log(user.address.c_address);

// console.log(user.attendance[2]);

//

// simple function
// function with return value
// functional chaining

////
const user = {
  // property ...
  name: "Test user", // key: value
  age: 23,
  color: "Green",
  status: "in progress",
  attendance: [0, 3, 4, 5],
  marks: [32, 45, 76, 98, 45],
  address: {
    c_name: "xsaud",
    c_address: "asad",
    c_obj: [12, 23, 43],
  },

  // methods ...
  printName: function () {
    // console.log("Test user, Green, 23"); // format
    return `${this.name}, ${this.color}, ${this.age}`;
  },

  calculateMarks: function () {
    return 123 + 321 + 3443;
  },
};

// console.log(user);
const res = user.printName();
const total = user.calculateMarks();

// console.log(total);

// console.log(res);

//
const testStr = "Hello world";
// property: dot operator, method: ()
// console.log(testStr.toUpperCase());
// method will need invocation ...

////

const user1 = {
  // property ...
  name: "Test user", // key: value
  age: 23,
  color: "Green",
  status: "in progress",
  attendance: [0, 3, 4, 5],
  marks: [32, 45, 76, 98, 45],
  address: {
    c_name: "xsaud",
    c_address: "asad",
    c_obj: [12, 23, 43],
  },
};

// for in loop: to looping in object ...
for (const key in user1) {
  if (Object.hasOwnProperty.call(user1, key)) {
    // checks: if youre running loop in object and it has key
    // console.log(key, user1);

    const entry = user1[key];

    console.log(entry);
  }
}

// for of:
// for (const iterator of object) {
// }

// const cars = [{car1 record}, {car2 record}, {car3 record}]

// forEach = important ...

// Basic loops ...

// map, filter, ....
