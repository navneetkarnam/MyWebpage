//Create secret number
var secretNumber = 4;

//Ask user for a number

var guess = Number(prompt("Guess a number!"));


//guess
if(guess === secretNumber){
	alert("you got it right");
}
//Otherwise check if lower
else if(guess > secretNumber){
	alert("Too high. guess again");
}

else{
	alert("Too low. Guess again");
}