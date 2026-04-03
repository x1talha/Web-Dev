let a = 5;
let b = 5;

//Arithmetic Operators

console.log(" a + b :", a + b);

console.log(" a - b :", a - b);

console.log(" a * b :", a * b);

console.log(" a / b :", a / b);

console.log(" a % b :", a % b);

console.log(" a * b :", a ** b);

//Unary operator

a++;
b--;

console.log("Updated 'a' is: ", a);

console.log("Updated 'b' is: ", b);

console.log("a++: ", a++); // yeh 7 bn jayega

console.log("++a: ", ++a); // yeh 8

// Assignment Operators:

a += 2;
console.log(a);

a -= 5;
console.log(a);

a **= 5;
console.log(a);

// Comparison Operator

let x = 10,
  y = 10,
  z = 10.5;

console.log("x==y", x == y);

console.log("x!=y", x != y);

// Compare & Match data Type

console.log("x===y", x === y); // int ==== int data type

console.log("x===z", x === z);

console.log("x>=y", x >= y);

console.log("x<=z", x <= z);

// Logical Operator

let c = 5,
  d = 5;
let cond1 = c > d;

let cond2 = c === 5;

console.log("Condition 1 && Condition 2 = ", cond1 && cond2);

console.log("Condition 1 || Condition 2 = ", cond1 || cond2);

console.log("Condition 1 != Condition 2 = ", cond1 != cond2);
