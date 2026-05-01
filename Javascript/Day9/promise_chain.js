// Promise chains...?

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 3000);
  });
}

console.log("Fetching data 1...");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("promise fulfilled", res);
});

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 3000);
  });
}

console.log("Fetching data 2...");
let p2 = asyncFunc2();
p2.then((res) => {
  console.log("promise fulfilled", res);
});

// solution (promises chaining)

console.log("Fetching data 1...");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("promise fulfilled", res);
  console.log("Fetching data 2...");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log("promise fulfilled", res);
  });
});

//output
// Fetching data 1...
// promise fulfilled success
// data1
// Fetching data 2...
// promise fulfilled success
// data2

// Another short solution (promise chaining)
//then inside then
console.log("Fetching data 1...");
asyncFunc1().then((res) => {
  console.log("Fetching data 2...");
  asyncFunc2().then((res) => {});
});

//output
// Fetching data 1...
// data1
// Fetching data 2...
// data2
