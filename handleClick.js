// select h1 to display emoji
const emoji = document.querySelector("h1");

document.getElementById("buttons").addEventListener("click", function(e) {
	// set mood in store to match clicked button
	store.dispatch({ type: e.target.id.toUpperCase() });
	// display emoji in HTML
	emoji.innerText = store.getState().mood;
});
