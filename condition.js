//

console.log("== conditions ");

const isAdmin = true;
const isUser = false;

//

const creditedAmount = 10;
const debitedAmount = 20;

console.log(creditedAmount > debitedAmount);

// 1. if statment ... (100% posibility)
if (isAdmin) {
  console.log("The log in user is admin so we can proceed ...");
}

// 2. if else ... (50-50 2 conditions)
if (creditedAmount > debitedAmount) {
  //
  //
  console.log("you can borrow money");
} else {
  console.log("you dont have enpugh balance");
}

// ternary operator
creditedAmount > debitedAmount
  ? console.log("you can borrow money")
  : console.log("you dont have enpugh balance");
// condition ? true : false

// 3. else if ... (multiple possibilities, limited to 3 or 4 possibilities )
const diceValue = "4"; //  1 to 6

if (diceValue === 1) {
  console.log("Yuo got 1 ");
} else if (diceValue === 2) {
  console.log("You got 2 so +10 points");
} else if (diceValue === 3) {
  console.log("Bad luck, you failed ");
} else if (diceValue === 4) {
  console.log("asdasdda");
} else if (diceValue === 4) {
  console.log("rwrqweq");
} else if (diceValue === 6) {
  console.log("adaasd");
} else {
  console.log("Magic happened");
}

// ternary operator ...

// if we have more that 3 or 4 options then we will use switch case

// = assignment

// == conditional => it will check
// === conditions
