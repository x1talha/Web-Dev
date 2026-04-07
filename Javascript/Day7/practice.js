// let btn = document.querySelector(".mode");
// let mode = "light";
// btn.addEventListener("click", () => {
//   if (mode === "light") {
//     mode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   } else {
//     mode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   console.log(mode);
// });

//Another method ( using ClassList)

let btn = document.querySelector(".mode");

let body = document.querySelector("body");

let mode = "light";

btn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    mode = "light";

    body.classList.remove("dark");
    body.classList.add("light");
  }

  console.log(mode);
});
