//Synchronise Programming
// console.log(1);
// console.log(2);

// executing one by one, new statement depend on the previous statement

// function sync1() {
//   let output = "console.log(1)";
//   console.log(output);
//   document.getElementById("result").innerText = output;

//   setTimeout(function () {
//     document.getElementById("result").innerText = "Updated after 2 sec";
//   }, 2000);
// }

// setTimeout(() => {
//   console.log("Hello, printed after 5 seconds");
// }, 5000);

// console.log(3);
// console.log(4);

//Maintaining the order of execution is important in programming,
//  especially when dealing with asynchronous operations.
//  In JavaScript, we can use callbacks, promises, and async/await to handle asynchronous code and ensure that it executes in the desired order.

// Callbacks are functions that are passed as arguments to other functions and are executed after a certain operation is completed. However,
//  they can lead to callback hell if there are multiple nested callbacks, making the code difficult to read and maintain.

async function hello() {
  console.log("Hello, printed after 2 seconds");
}

function apiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data fetched");
      resolve("200"); //200 means success in web APIs
    }, 2000);
  });
}

async function fetchWeather() {
  await apiCall(); //1st api call
  await apiCall(); //2nd api call
  //Output:
  // Weather data fetched after 2 seconds
  // Weather data fetched after 4 seconds
}

console.log(fetchWeather());

//IIFE Functions (Immediately Invoked Function Expressions)
// IIFE functions are a common pattern in JavaScript to create a new scope and execute code immediately. They can be used to avoid polluting the global scope and to create private variables and functions.

//syntax of IIFE
// (function () {
//   console.log("This is an IIFE function");
// })();

// are a common pattern in JavaScript
// to create a new scope and execute code immediately.
//  They can be used to avoid polluting the global scope
// and to create private variables and functions.

//above solution using async await and IIFE
(async function () {
  await apiCall(); //1st api call
  await apiCall(); //2nd api call
})();
