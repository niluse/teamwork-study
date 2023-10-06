const number = Math.round(Math.random() * 100);
console.log(number);
let guess;
let counter = 1
while (counter < 6){
    guess = +prompt('pls enter the number: ')
    if(guess == number){
        console.log("bingo");
        break
    }
    else if (counter == 5){
        console.log("game over");
        break
    }
    else if (counter == 4){
        console.log("last chance");
        if(guess>number){console.log("too high.guess a lower number");
        }else{console.log("too low.guess a higher number");}
        counter++
    }
  
    else{
        console.log("try again");
        if(guess>number){console.log("too high.guess a lower number");
        }else{console.log("too low.guess a higher number");}
        counter++
    }
}