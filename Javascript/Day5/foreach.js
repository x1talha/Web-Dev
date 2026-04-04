let arr = ["Talha", "Zahid", "Mughal"];

arr.forEach((val) => {
  console.log("Printing using ForEach(Call Back Function in JS): ");
  console.log(val);
});

let arr2 = ["Abdullah", "Maryam", "Zainab", "AbdulRehman"];
arr2.forEach((val2) => {
  // console.log("Names:", val2);
});

let arr3 = [10, 20, 30, 40, 50];
let index = 0;
arr3.forEach(function print(val) {
  console.log("Index:", index, "is", val);
  index++;
});

let arr4 = [10, 20, 30, 40, 50];
arr4.forEach(function print(val, idx) {
  console.log(`${val} is at Index.${idx}`);
});

let num = [5];
num.forEach((val, idx) => {
  console.log(`Square of ${num} is: ${val * val}`);
});

//Another method to solve the same question
let num1 = [10];
let calculatesquare = (val, idx) => {
  console.log(`Square of ${num1} is: ${val * val}`);
};
num1.forEach(calculatesquare);
