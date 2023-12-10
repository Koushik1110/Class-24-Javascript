"use strict";

//default parameter
// function doSum(a,b){
//   return a+ b;
// }

// console.log(doSum(2,3));

// value vs reference

//object
// const studentRegular = {
//   studentName: "Tahia",
//   age: 18,
// };

// const studentIrregular = studentRegular; //reference

// studentIrregular.studentName = "Tahmida";

// console.log(studentRegular);

//array

// const arr1 = [10,20,30,40];
// const arr2 = arr1; //reference

// arr2.push(50)

// console.log(arr1);

// value
//Object
// const studentRegular = {
//   studentName: "Tahia",
//   age: 18,
// };

// const studentIrregular = {...studentRegular}; //Value

// studentIrregular.studentName = "Tahmida";

// console.log(studentRegular);

// Array

// const arr1 = [10,20,30,40];
// const arr2 = [...arr1]; //Value

// arr2.push(50)

// console.log(arr1);

// first class function
//01. can be stored in a variable.
//02. passed as arg to other function.
//03. returned as values from other function.

// const firstClass = (a, b) => {
//   return a + b;
// };

// //console.log(firstClass(5.10));

// const otherFunction = (a, b, fn) => {
//   return fn(a, b);
// };

// console.log(otherFunction(10, 15, firstClass));

//higher order function
//callback function

// const hello = document.querySelector(".hello");

// const callback = () => {
//   document.body.style.backgroundColor = "pink";
// };

// hello.addEventListener("mouseover", callback);

//curying function

// function doMath(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// }

// const doMath = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;  //lambda calculus

// const result = doMath(10)(20)(30);
// console.log(result);

//side effect
// function foodCutter(quantity) {
//   return quantity * 4;
// }

// function addFlavour(pieces, fl) {
//   return pieces * fl;
// }

// function foodBlender(quantity, fl) {
//   const pieces = foodCutter(quantity);
//   return addFlavour(pieces, fl);
// }

// console.log(foodBlender(14,5));

// call
// function greet(greeting) {
//   return `${greeting}, ${this.name}`;
// }

// const person = { name: "Ebrahim" };
// const person2 = { name: "Jubaer" };

// const text = greet.call(person2, "Hello");
// console.log(text);

// Apply
// function greet(greeting) {
//   return `${greeting}, ${this.name}`;
// }

// const person = { name: "Rahat"};
// const person2 = { name: "Tushar"};

// const text = greet.apply(person, ["Hello"]);
// console.log(text);

//bind

// function calcAge(greeting) {
//   return `${greeting}, ${this.name}. You are ${
//     2023 - this.birthYear
//   } years old.`;
// }

// const associate1 = {name: "Habib", birthYear:1999};
// const associate2 = {name: "Arup", birthYear:1998};

// const calcAssociateAge = calcAge.bind(associate1)

// console.log(calcAssociateAge("Hello"));

//  IIFE
// Immediately Invoke Function Expression
// (function () {
//   const secret = "Human kind can not gain anything without first giving something in return. To obtain something, something of equal value must be lost. that is rhe first rule of equivalent exchange.";
//   console.log(secret);
// })();


//Closures
// function outerFunction() {
//   const myFavNum = 9;

//   function innerFunction() {
//     return myFavNum;
//   }
//   return innerFunction();
// }
// const myFunction = outerFunction();

// console.log(myFunction);