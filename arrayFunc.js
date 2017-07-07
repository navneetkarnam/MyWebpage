
var choice = Number(prompt("Enter the number you want to choose:"));
while(choice!==5){

	if(choice == 1){
		//printReverse();
		console.log("printReverse() called");
		printReverse();
	}
	else if(choice == 2){
		//isUniform();
		console.log("isUniform() called");
		isUniform();
	}
	else if(choice == 3){
		//sumArray();
		console.log("sumArray() called");
		sumArray();
	}
	else{
		// max();
		console.log("max() called");
		max();
	}



	choice = Number(prompt("Enter the number you want to choose:"));
}

console.log("Ok you quit the app");

//Reverse function
function printReverse(){
	var array1=[];
	var reverseArray=[];
	var input = prompt("enter the elements of the array:");
	while (input!=="done"){
		array1.push(input);
		input = prompt("enter next element or enter done is finished:");
	}
	while(array1.length > 0){
		var array2 = array1.pop();
		reverseArray.push(array2);
		
	}
	alert(reverseArray);
}


//isUniform function
function isUniform(){
	var array1=[];
	var input = prompt("enter the elements of the array:");
	var first = input;
	var check = true;
	while (input!=="done"){
		if(input !== first){
			check = false;
		}
		array1.push(input);
		input = prompt("enter next element or enter done is finished:");
	}
	if(check === true){
		alert("Array is uniform");
	}
	else{
		alert("Array is not uniform");
	}

}


//sumArray function
function sumArray(){
	var array1 = [];
	var sum = 0;
	var input = prompt("enter the elements of the array:");
	while (input!=="done"){
		sum+=Number(input);
		array1.push(input);
		input = prompt("enter next element or enter done is finished:");
	}
	alert("The sum total is: "+sum);
}

//Max Function
function max(){
	var array1 = [];
	var input = prompt("enter the elements of the array:");
	var maximum = input;
	while (input!=="done"){
		if(maximum < Number(input)){
			maximum = Number(input);
		}
		array1.push(input);
		input = prompt("enter next element or enter done is finished:");
	}
	alert("The Max number is: "+ maximum);
}