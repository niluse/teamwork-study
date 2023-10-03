const number = Math.round(Math.random() * 100);
console.log(number);
let guess = +prompt("please enter your guess: ");
if (guess == number) {
  console.log("bingo!!");
} else {
  console.log("fail!");
}
