// let div = document.querySelector("div");
// console.log(div);

// Get Attribute
// let val = div.getAttribute("id");
// console.log(val);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// Set Attribute

// let para2 = document.querySelector("p");
// console.log(para2.getAttribute("class", "newClass"));

// Accesss Styling in Javascript

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "white";
// div.style.fontSize = "50px";
// div.style.textAlign = "center";
// div.style.borderRadius = "15px";

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";
console.log(newbtn);

//End mein add krega button ko Box k
let div1 = document.querySelector("div");
div1.append(newbtn);

//Start mein add krega button ko Box k
let div2 = document.querySelector("div");
div1.prepend(newbtn);

// Add any element before the div ( Box )
let div3 = document.querySelector("div");
div3.before(newbtn);

// Add any element After the div ( Box )
let div4 = document.querySelector("div");
div4.after(newbtn);

// Remove any Element
let div5 = document.querySelector("p");
div5.remove();
