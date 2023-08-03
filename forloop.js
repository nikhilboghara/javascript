//

console.log("====");

// for (let i = 0; i < 5; i++) {
//   //
//   //

//   /////
//   console.log(i);
// }

// initial value = 0;

// 1. initialisation
// 2. condition
// 3. increment/decrement operator

// Life cycle ...
// step 1: i = 0,
// step 2: i = 1,
// step 3; i = 2,
// step 4: i = 3,
// step 5: i = 4,
// step 6: i = 5 ===> condition break

////

let total = 0;

for (let index = 0; index < 10; index++) {
  total = total + index;
  console.log(index, total);
}

console.log(total);

// step 1: total = 0, index = 0, total => 0
// step 2: index = 1,  total => 1
// step 3: index = 2, 1 + 2 => 3
// step 4: index = 3, 3 + 3 => 6
// step 5: index = 4, 6 + 4 => 10
// step 6: index = 5

for (let index = 0; index < 10; index++) {
  //   console.log(index);

  let a = 20;

  if (index % 2 === 0) {
    console.log(index);
  }
}

let a = 30;

console.log(a);

// scope
// let, const

// Array ....

console.log("===");
