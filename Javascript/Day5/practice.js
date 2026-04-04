// Question 1
let marks = [91, 92, 93, 94, 79, 46, 86];

let toppers = marks.filter((val) => {
  return val > 90;
});

console.log(toppers);

//Question 2
let n = prompt("enter a number : ");

let arrn = [];

for (let i = 1; i <= n; i++) {
  arrn[i - 1] = i;
}

console.log(arrn);

let sum = arrn.reduce((res, curr) => {
  return res + curr;
});

console.log("sum = ", sum);

let factorial = arrn.reduce((res, curr) => {
  return res * curr;
});

console.log("factorial = ", factorial);
