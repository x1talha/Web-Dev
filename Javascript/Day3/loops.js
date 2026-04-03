// Loops
let num = 5;
for (let i = 1; i <= num; i++) {
  console.log(i);
}

//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do While Loop
let l = 1;
do {
  console.log("Talha");
  l++;
} while (l <= 5);

// for of loop ( for arrays )
let str = "Javascript";
let len = 0;
for (let i of str) {
  console.log("i = ", i);
  len++;
}
console.log("Length =", len);

// for in loop ( for objects )
let student = {
  Name: "Talha Zahid",
  Rollno: "0215",
  Cgpa: 3.07,
  Section: "E1",
};

for (let i in student) {
  console.log(i, ":", student[i]);
}
