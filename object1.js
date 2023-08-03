//

console.log("== object");

let var1 = 100; // number
let str1 = "123"; // str
let isAdmin = true; // boolean
let weekDays = ["Sun", "Mon", "Wed"]; // datatype: object
// index: value

// Object: functionality/ convention

// user object
const user = {
  // property ...
  name: "Test user", // key: value
  age: 23,
  color: "Green",
  status: "in progress",
  attendance: [0, 3, 4, 5],
  address: {
    c_name: "xsaud",
    c_address: "asad",
    c_obj: [12, 23, 43],
  },

  // methods ..
};

const users = [
  { id: 1, user_name: "asdad", color: "asdd" }, // 0
  { id: 2, user_name: "asdad2", color: "asdd" },
  { id: 3, user_name: "asdad3", color: "asdd" },
  { id: 4, user_name: "asdad4", color: "asdd" },
];

console.log(user);

console.log(user["age"]); //find a avlue with key
console.log(user.status); // dor operator

console.log(user.address.c_address);

console.log(user.attendance[2]);

//

// simple function
// function with return value
// functional chaining
