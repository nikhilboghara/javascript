         // function printok(nikhil,boghara) {
//     console.log(nikhil,boghara);
// }
// printok(age=22,bod=13)





///////////practice/////////////


// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length);

// let n0= "string";
// console.log(typeof(n0));

// const n00="nikhil boghara"
// console.log(n00.replace("boghara","patel"));

// const n01="  nikhil patel   "
// console.log(n01.trim());

// const n02="8"
// console.log(n02.padStart(5,"x"));

// const n002="8"
// console.log(n002.padEnd(5,"x"));

// const n3="nikhil"
// for (let index = 0; 1< index.length; index++) {
//     n3=index[1]
    
// }
// console.log(n3);

// const text1 = "The rain in SPAIN stays mainly in the plain";
// console.log(text1.match(/ain/g));

// // let text0 = "The rain in SPAIN stays mainly in the plain";
// // console.log(text0.matchAll("rain");

// ///////////////if-else///////////////






// function nik66(a) {
//     // const result;
//    if (a>9) {
//     result="you win"
//        } else{
//         result="you loss"
//        }
//       return result; 
// }
// console.log(nik66(88));



// ////////////////////for-loop ///////////////



// for (let index = 0; index < 10; index++) {
//     //   console.log(index);
  
// //     let a = 20;
  
// //     if (index % 2 === 0) {
// //       console.log(index);
// //     }
// //   }
  
// // //   let a = 30;
  
// // //   console.log(a);

// // for (let index = 0; index < 40; index++) {
// //     //   console.log(index);
// //     //   
// //       if (index %5 === 0){    
// //         console.log(index);
        
// //       }
// // }

//     ////////////DATES//////////

//     const nikk="dates"
//     console.log(nikk);



//     const d= new Date()
//     console.log(d);

//     const dd = new Date("13-jan-1999")
//     console.log(dd);

//     const ddd= new Date() ;   
//     console.log(ddd.toString());


//     const d0=new Date("2017-04-05")
//     console.log(d0.getFullYear());
//     console.log(d0.getDate());
//     console.log(d0.getDay());


//     const d7=new Date()
//     console.log(d7.getDate());

//     const d5=new Date()
//     console.log(d5.setDate(2000,09,09));
//     console.log(d5.setFullYear(2014));



//////////////dom/////////////


// console.log("===dom");


// const imgDemo=document.getElementById("photo");
// const btnDemo=document.getElementById("button");
// const inp=document.getElementById("holder");   


// btnDemo.onclick=function () {
//      console.log("click");
//      imgDemo.src = newupdate;



// }
/////////////////////////////array/////////////////



// const arr1 = [12, 43, 1, 2, 3, 4];
// const arr2 = ["a", "b", "c"];

// console.log(Math.max(...arr1)); // 12,43,1
// console.log(...arr2);



// let c = 40;

// function printName() {
//   let a = 10;
//   let b = 20;
//   console.log(" Hello ...", a + b, c);

//   if (a === 10) {
//     console.log("asdakdsh", a, c);
//   }
// }

// console.log(c);



/////////////////////timing/////////////



// const timer1=document.getElementById("timer");

// const start1=document.getElementById("start");
// const hold1=document.getElementById("hold");

// let intervalId=null;
// let timeoutId=null;
// let counter=0;

// start1.onclick=function () {
//   intervalId = setInterval(() => {
//     counter=counter+1;
//     timer1.innerHTML=counter
//   }, 1000);
// }

// hold1.onclick=function () {
//   timeoutId=setTimeout(() => {
//     console.log("dlt all data");
    
//   }, 5000);
  
// };

// const pause1=document.getElementById("pause");
// const reset1=document.getElementById("reset");

// pause1.onclick=function () {
//   clearInterval(intervalId);
  
// };

// reset1.onclick=function () {
//   clearTimeout(timeoutId);
  
// };






// let arr032 = [89, 53, 78, 43, 23, 90, 98];

// // write your code here ...
// let sum2 = 0
// for (let index = 0; index < arr032.length; index++) {
//     sum2 += arr032[index]
// }
// console.log(sum2);



// const cars = ["BMW", "Volvo", "Mini"];

// for (const key in cars) {

//   console.log(cars);

  
// }
    
  

// const a =[3,5,8]
//   const b=4
//  a.push(b)

// console.log(a);


// const nn=[22,33,44,55,66,77,8,]
//  const nn0 =nn.filter((x)=>{
// return x 5===0
// })

// console.log(nn0);

//////

// const head1 = document.getElementById("h2")

// head1.innerHTML= "hihello";
// head1.style.color="blue"




// console.log(head1);

// const img2 ="silhouette-bridge-crab-plover-birds-image-taken-surat-city-golden-hour-photographers-stunning-170042876"
// const img1=document.getElementById("img")
// const btn1=document.getElementById("btn")


// btn1.onclick = function () {
//   console.log("btn1");
//   img1.src=img2;

// }


// let age="19"


// if (age==1) {
//   console.log("you can drive");
  
// }else
// console.log("yo can not  drive");

// let a=10, b=20
// // let c=a+b

// function c1() {
//   let a=10, b=20, c=a+b
//   console.log(c);
// }
// c1()

// /////////////or//////////


// function c2(a,b) {
//    let c = a-b
//    console.log(c);
// }
// c2(20,5)


// function name1(a,b) {
//   return a*b
// }
// console.log(name1(2,3));

///////////////////////////

// const abc=[2,5,8]

// const cba=abc.reduce((nik,boghara,ind,arr)=>{
//   return nik += boghara
// })

// console.log(cba);


///////////////////////////////////////////////////////////



let n=5
let n2=""

for (let index = 0; index < n; index++) {
  for (let j = 0; j <index; j++) {
    n2 += "*"
  }
   n2+="\n"
}
console.log(n2);

/////////////////////////////////////////////////////

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);
   
//////////////////////////////////////////////////////////////////////

// alert("not found")

// let a =prompt("hello")

////////////////////////////////////////////////////
// a=33,b=44,
// console.log(Math.max(a ,b));


// let text = "HELLO WORLD";
// console.log(text.charAt(6));

// let ss= 15*6
// console.log(ss);


 ////////////////////function///////////////


 function nae() {
 let x=5 ,y=6

 console.log(x+y);
  
 }
 nae()
//////////////////////////////////////
 const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log();


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[3]); 

///////////////////////////////

let n9=5
 
for (let i = 0; i < n9; i++) {
  
  console.log(2*i);
}