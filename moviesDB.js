var movies = [
	{
		title:"Fast and furious 7",
		rating:"8",
		hasWatched:"true"

	},
	{
		title:"Game of Thrones",
		rating:"2",
		hasWatched:"false"

	},
	{
		title:"Harry Potter and the sorcerers stone",
		rating:"9",
		hasWatched:"true"

	},
	{
		title:"The mummy",
		rating:"5",
		hasWatched:"false"
	}
];

movies.forEach(function(movie){
	if(movie.hasWatched === "true"){
		console.log("You have watched " + "\""+movie.title+"\"" + " - " + movie.rating+" stars");
	}
	else{
		console.log("You have not watched " + "\""+movie.title+"\"" + " - " + movie.rating+" stars");
	}
});