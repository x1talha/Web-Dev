let arr = ["A", "B", "C", "D", "E", "F"];
console.log("Array: ", arr);
console.log("Array length: ", arr.length);

let arr1 = [
  "Ali", "Ahmed", "Usman", "Hassan", "Hussain",
  "Talha", "Zain", "Hamza", "Bilal", "Saad",
  "Areeba", "Fatima", "Zara", "Hira", "Iqra",
  "Ayesha", "Noor", "Sana", "Mehwish", "Adeel",
  "Amina"
];



// for ( let i = 1; i<arr1.length; i++){
//     console.log(arr1);
// }

for ( let i of arr1){
console.log("Name:",i.toUpperCase());
}
