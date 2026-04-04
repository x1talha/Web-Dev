let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = numArr.filter((val, idx) => {
  return val % 2 === 0;
});

console.log("Even:", even);

let numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = numArr1.filter((val, idx) => {
  return val % 2 !== 0;
});

console.log("Odd:", odd);
