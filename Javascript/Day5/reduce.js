let redarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Syntax: arr.reduce(result, current){}
const output = redarr.reduce((res, cur) => {
  return res + cur;
});

console.log("Sum is:", output);

const output2 = redarr.reduce((prev, cur) => {
  return prev > cur ? prev : cur;
});

console.log("Largest ELement is: ", output2);
