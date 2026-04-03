let marks = [70, 65, 80, 70, 45, 45];
let sum = 0;
for (let val of marks) {
  sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

let item = [250, 645, 300, 900, 50];
let idx = 0;
for (let i of item) {
  console.log("Price of item at", idx, "is: ", i);
  idx++;
  let discount = i / 10;
  let newprice = i - discount;
  console.log("Price After 10% Discount", newprice);
}



