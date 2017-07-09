
alert("connected");
var button = document.querySelector("button");
var isRed = false;
button.addEventListener("click", changeColor);


//Method 1:

// function changeColor(){
// 	if (isRed){
// 		document.body.style.background = "white";
// 		isRed = false;
// 	}
// 	else{
// 		document.body.style.background = "red";
// 		isRed = true;
// 	}

// }

//Method 2 using classList: 

function changeColor(){
	
		document.body.classList.toggle("red");
		
}