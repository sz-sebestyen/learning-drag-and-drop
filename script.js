function _load() {
	function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
		ev.dataTransfer.setData("text/plain", ev.target.id);
		// Add different types of drag data
		//ev.dataTransfer.setData("text/plain", ev.target.innerText);
		//ev.dataTransfer.setData("text/html", ev.target.outerHTML);
		//ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);

		// Create an image and then use it for the drag image.
		/*
		let img = new Image(); 
		img.src = './dragon-solid.svg';
		ev.dataTransfer.setDragImage(img, 10, 10); // img and x, y offset
		*/
  }

	// Get dragable element
	let item = document.querySelector(".item");
	// Add the ondragstart event listener
	item.addEventListener("dragstart", dragstart_handler);

	// drag end stuff
	function dragend_handler(ev) {
		console.log(ev.dataTransfer.dropEffect);
	}
	
	item.addEventListener("dragend", dragend_handler);

}

// target
function dragover_handler(ev) {
	ev.preventDefault();
	ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
	ev.preventDefault();
	// Get the id of the target and add the moved element to the target's DOM
	const data = ev.dataTransfer.getData("text/plain");
	ev.target.appendChild(document.getElementById(data));
}

window.addEventListener("load", _load);
