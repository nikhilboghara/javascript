//

console.log("=== function advanced");

// simple function

function flatNumber(a) {
  console.log(parseInt(a));
}

function addNumber(a, b) {
  // 100, 300
  const total = a + b; // 400

  //   console.log(total);

  if (total > 500) {
    multiplNumber(total, 125.77);
  } else {
    flatNumber(total);
  }
}

function multiplNumber(a, b) {
  // 400, 125.77
  const total = a * b;

  //   console.log(total);
  flatNumber(total);
}

function finalCalc(n1, n2) {
  // 100, 300
  addNumber(n1, n2);
}

const p1 = 100;
const p2 = 300;

finalCalc(p1, p2);

// function chaining ...
// conditional operation ...
