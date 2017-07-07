var num1= Number(prompt("enter a number:"));
factorial(num1);

function factorial(number){
	var fact = 1;
	if(number === 0){
		alert("the factorial is 1");
	}
	else{
		for(var i = 2; i <=number; i++){
			fact*=i;
		}
		alert("the factorial is "+ fact);
	}
}

