const emoji = document.querySelector("h1");

document.getElementById("buttons").addEventListener("click", function(e) {
	store.dispatch({ type: e.target.id.toUpperCase() });
	emoji.innerText = store.getState().mood;
});
