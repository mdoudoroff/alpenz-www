
function dismissSearchOverlay() {
	var shadowBox = document.getElementById('shadowbox');
	var searchOverlay = document.getElementById('searchOverlay');
	shadowBox.style.display = 'none';
	searchOverlay.style.display = 'none';
}


function createSearchOverlay() {

	// (everything else about search is handled by HTMX and the server)

	var shadowBox = document.getElementById('shadowbox');
	var searchOverlay = document.getElementById('searchOverlay');

	shadowBox.style.display = 'block';
	searchOverlay.style.display = 'block';

	shadowbox.addEventListener("click", (event) => { dismissSearchOverlay() });

	dismissSearchOverlayButton = document.getElementById('dismissSearchOverlay');
	dismissSearchOverlayButton.addEventListener("click", (event) => { dismissSearchOverlay() });

	searchBox = document.getElementById('searchBox');
	searchBox.focus();

}

