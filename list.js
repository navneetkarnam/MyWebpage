var todos = ["Buy a new turtle"];
var input = prompt("What would you like to do?");

while(input !=="quit"){

if(input === "list") {
	listTodos();
	}
else if(input ==="new"){
	addTodo();
}
else if(input ==="delete"){
	deleteTodo();
}

input = prompt("What would you like to do?");
}
console.log("Ok you quit the app!");

function listTodos(){

	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
		
		});
	console.log("**********");
}

function addTodo(){
	var newTodo = prompt("Enter a new To do?");
	todos.push(newTodo);
	console.log("added to do");

}

function deleteTodo(){
	var index = prompt("Enter the index of todo to be removed");
	todos.splice(index,1);
	console.log("deleted todo");

}