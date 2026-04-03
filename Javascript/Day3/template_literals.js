let specialstring = `This is a template literal`;
console.log(specialstring);

const item = {
  iname: "Lays",
  price: "30",
};

console.log("The Price of", item.iname, "is:", item.price);

// Template Literal Advantage
let output = `The Price of ${item.iname} is ${item.price}`;
console.log(output);
