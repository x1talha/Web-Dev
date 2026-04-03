let gamenum = 25;
let usernum = prompt("Guess the random game number: ");
while (gamenum != usernum) {
  usernum = prompt("Enter again for random number: ");
}
console.log("Congrats, You have entere the right number!");
