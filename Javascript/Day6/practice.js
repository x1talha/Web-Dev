// Question 1

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Students.";

console.dir(h2.innerText);

// Question 2
let div = document.querySelectorAll("div");
// console.dir(div);

// div[0].innerText = "New text for Box1";

// div[1].innerText = "New text for Box2";

// div[2].innerText = "New text for Box3";
let idx = 1;
for (val of div) {
  val.innerText = `New Text Box ${idx}`;
  idx++;
}
