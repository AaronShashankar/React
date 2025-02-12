"use strict";
// let a = 5;
// let a  = "this is aaron"
// console.log(a);

//function
// function hello(){
//     console.log("Hey Aaron")
// }

// //objects
// let a ={
//     r: 34,
//     s:35,
//     func: function myFunc(number){
//         console.log("The number is " + number);

//     }
// }

// document.addEventListener("click", function click(){
//     console.log("clicked");
//     alert("hello there")
//     let conformation = confirm("Are you Sure!!!");
//     console.log(conformation);

// })

// let arr = [34, 35, 36, 37, 10, 11, 12, 13];

// //normal function
// function myfunc(number){
//     console.log("the number is " + number );
// }
// myfunc();

// //this function will be undefined this doesn't work on this function
// function myfun(number){
//     console.log("The number is "+ this);
// }
// myfun();

// //arrow function
// let arrFunc = (number)=>{
//     console.log("The number is "+ this);
// }
// arrFunc();

// let obj = {
//   a: 1,
//   b: 2,
//   func: function (number) {
//     console.log(this);
//   },  // "this " will return object obj key and value
// };

// //calback
// // it is a function that inovkes only after the certrain work is completed.
// // callback function is a function passed itno antoher function as an argument which is then invoked inside the outere function to complete an action.
// // setTimeout(()=>{},timeout)  there is one function and another time.
// //example
// setTimeout(() => {
//     console.log("I will be there after 5 second.")
// }, 5000);

// console.log("I will be there immidetely");

// const callback = (arg) =>{
//     console.log(arg);
// }

// const loadScript = (src, callback)=>{
//   let sc =  document.createElement("Script")
//   sc.src = src;
//   sc.onload= callback("Harry");
//   document.head.append(sc)
// }

// loadScript("https://www.w3schools.com/react/default.asp", callback)

// Promise
// it is something that will be available in the futur when the task is pending or fulfilled jor rejected
// let myPromise = new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("01_My task is completed");
//         resolve("02_This is what i return : promise says");
//     }, 3000);
// })

// myPromise.then((a)=>{  // a will return the value with who it is resolved
//     console.log(a)
// })

// console.log("This is promises");

// let myPromise = new Promise((resolve, reject) => {
//   let a = Math.random();
//   if (a < 0.5) {
//     reject("no random number was found");
//   } else {
//     setTimeout(() => {
//       console.log("01_My task is completed");
//       resolve("02_This is what i return : promise says");
//     }, 3000);
//   }
// });

// myPromise
//   .then((a) => {
//     // a will return the value with who it is resolved
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
