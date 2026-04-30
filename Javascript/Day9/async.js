//Synchronise Programming
console.log(1);
console.log(2);

// executing one by one, new statement depend on the previous statement

// function sync1() {
//   let output = "console.log(1)";
//   console.log(output);
//   document.getElementById("result").innerText = output;

//   setTimeout(function () {
//     document.getElementById("result").innerText = "Updated after 2 sec";
//   }, 2000);
// }

setTimeout(() => {
  console.log("Hello, printed after 5 seconds");
}, 5000);

console.log(3);
console.log(4);
