//

console.log("== additional loops");

const users = [
  { id: 1, name: "aaaaaa", color: "green", marks: 20 },
  { id: 2, name: "bbbbbb", color: "blue", marks: 30 },
  { id: 3, name: "cccccc", color: "red", marks: 29 },
  { id: 4, name: "dddddd", color: "violet", marks: 45 },
  { id: 5, name: "eeeeee", color: "black", marks: 37 },
  { id: 6, name: "ffffff", color: "red", marks: 37 },
];

// for: execution speed fast
// for (let index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }

// forEach => to perform any operations
users.forEach((usr, i, usrrrr) => {
  console.log(usr, i, usrrrr);
});

// map loops => can returns something // inside JSX
// let def = 10;
// const usrArr = users.slice(0, def).map((usr) => {
//   return `${usr.color}: ${usr.name}`;
// });

// console.log(usrArr);

// filter ...
// const usrArr = users
//   .filter((usr) => {
//     return usr.marks > 30;
//   })
//   .map((usr01) => {
//     return {
//       name: usr01.name,
//       marks: usr01.marks,
//     };
//   });

// console.log(usrArr);

// find ...
// const temp = users.find((usr) => usr.color === "red");

// console.log(temp);

// // findIndex
// const usrIndex = users.findIndex((usr) => usr.marks === 45);

// console.log(usrIndex);

// while and do while ...
