// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
// 	var answer = prompt("Are we there yet?");	
// }
// alert("Yay! we made it!!")

// if(answer === "yes") {
// 	alert("Yay, We made it!")
// }
// else {
// 	var answer = prompt("Are we there yet?");
// }

//Ver 2.0

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1){
	var answer = prompt("Are we there yet?");	
}
alert("Yay! we made it!!")