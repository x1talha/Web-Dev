let marks = [70, 65, 80, 70, 55, 45];

console.log("Original Array:", marks);

marks.push(30);
console.log("After Push:", marks);

marks.pop();   // ❗ no argument
console.log("After Pop:", marks);

console.log(marks.toString());  // ❗ correct use