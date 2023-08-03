//

console.log("== function ");

//

let c = 40;

function printName() {
  let a = 10;
  let b = 20;
  console.log(" Hello ...", a + b, c);

  if (a === 10) {
    console.log("asdakdsh", a, c);
  }
}

// console.log(c);
printName()

// printName(); // function call / function trigger

// 1. create func. which will

function doFiltering() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const a = [];
  const b = [];
  for (let index = 0; index < data.length; index++) {
    if (index % 2 === 0) a.push(index);
    else b.push(index);
  }

  console.log(a, b);
}

doFiltering();

function doSum(a, b, name, arr) {
  console.log(a + b, name);
  console.log(arr);
}

const p = 10;
const q = 20;

doSum(p, q, "ABC", ["a", "b"]);

function convertCase(s1) {
  console.log(s1.toUpperCase());
}

const str = "Hello, i'm learning JavaScript functions";

convertCase(str);
