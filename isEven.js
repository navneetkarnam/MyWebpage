var num1 = prompt("Enter the number to check if even:");
isEven(num1);
function isEven(number){
	if(number % 2 === 0){
		alert("True");
	}
	else
		alert("False");

}