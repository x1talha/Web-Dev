// Question 3
let btn = document.createElement("button");
btn.innerText = "Subscribe";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.borderRadius = "10px";

let insert = document.querySelector("body");
insert.prepend(btn);

let para = document.querySelector("p");
console.log(para);

// para.setAttribute("class", "content");
// humne Classlist se ise solve krna hai. qn k setAttribute se jo Styling ki hogi wo remove ho jaye gi
// jab class ka name change ho ga

// is se hum agr class = "para" hai to wo class = "para newPara" bn jayegi
para.classList.add("newPara");

// is se remove ho jayegi
para.classList.remove("newPara");
