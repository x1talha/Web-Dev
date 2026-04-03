let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(arr);

let deletefromstart = arr.shift();
console.log(deletefromstart);
console.log("Remove first company from Array:", arr);

arr.splice(1, 1, "Ola");
console.log("Remove Uber & Add Ola in its place:", arr);

arr.push("Amazon");
console.log("Add Amazon at the End:", arr);
