let str = "Talha Mughal";
console.log(str);

// Convert to UpperCase
let uprstr = str.toUpperCase();
console.log("UpperCase String:", uprstr);

// Convert to LowerCase
let lowerstr = str.toLowerCase();
console.log("LowerCase String: ", lowerstr);

// String Trim ( To Remove Spaces )
let remspace = "    Talha Mughal    ";
console.log(remspace.trim());

// String Slice
let string_slice = ["Apple", "Mango", "Orange", "Banana"];
console.log(string_slice.slice(0, 3));

//String Concat ( To Join 2 Strings )
let str1 = "Talha";
let str2 = " Mughal";
let res = str1.concat(str2);
let res1 = str1 + str2;
console.log(res);
console.log(res1);

// Replace String
// Syntax: str.replace(SearchVal, NewValue);

let string_replace = "Talha Mughal";
console.log(string_replace.replace("Mughal", "Zahid"));

let string_idx = "Talha";
console.log(string_idx.charAt(0));
