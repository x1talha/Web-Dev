// if Statement

let age = 25;

if (age > 18) {
  console.log("You are Eligible");
}

age = 15;

if (age < 18) {
  console.log("You are not Eligible");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "Black";
}

if (mode === "light") {
  color = "White";
}

console.log(color);

// if else statement

mode = "light";

if (mode === "dark") {
  color = "Black";
} else {
  color = "White";
}

console.log(color);

// if else if statement

mode = "";
if (mode === "dark") {
  color = "Black";
} else if (mode === "light") {
  color = "White";
} else if (mode === "green") {
  color = "Green";
} else {
  color = "Pink";
}

console.log(color);

// Turnary Operator

let agee = 18;

let gender = "Male";

let result = agee >= 18 ? "True" : "False";

let results = (gender = "Male") ? "Male" : "Female";

console.log(result);

console.log(results);

// Switch Statement

let marks = 70;
let grade;

switch (true) {
  case marks >= 90 && marks <= 100:
    grade = "A";
    break;

  case marks >= 70 && marks < 90:
    grade = "B";
    break;

  case marks >= 60 && marks < 70:
    grade = "C";
    break;

  case marks >= 50 && marks < 60:
    grade = "D";
    break;

  case marks < 50:
    grade = "F";
    break;

  default:
    console.log("You Entered Wrong Marks");
}

console.log(grade);
