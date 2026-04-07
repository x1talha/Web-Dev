let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  console.log("Button 1 clicked by Event Listener ( Handler 1 )");
});

btn1.addEventListener("click", () => {
  console.log("Button 1 clicked by Event Listener ( Handler 2 )");

});

const handler3 = () => {
  console.log("Button 1 clicked by Event Listener ( Handler 3 )");
};

btn1.addEventListener("click", () => {
  console.log("Button 1 clicked by Event Listener ( Handler 4 )");

});


btn1.removeEventListener("click"), (handler3);