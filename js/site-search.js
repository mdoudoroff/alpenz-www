// @codekit-prepend "debounce.js";

function dismissSearchOverlay() {
	// $('#searchOverlay').remove();
	// $('#shadowbox').remove();

	var shadowBox = document.getElementById('shadowbox');
	var searchOverlay = document.getElementById('searchOverlay');
	shadowBox.remove();
	searchOverlay.remove();
}


function createSearchOverlay() {
	// var shadowbox = $('<div id="shadowbox"></div>');
	// var searchoverlay = $('<div id="searchOverlay"><div class="searchBar">Search Haus Alpenz (just try a few letters): <input id="searchBox" /></div><span id="dismissSearchOverlay"><img src="gfx/dismiss.png" height="18" width="18" /></span><div id="searchResults"></div></div>');
	// $('main').append(shadowbox);
	// $('main').append(searchoverlay);

	const main = document.getElementsByTagName('main')[0];

	var shadowbox = document.createElement('div');
	shadowbox.id = 'shadowbox';
	var searchoverlay = document.createElement('div');
	searchoverlay.id = 'searchOverlay';
	searchoverlay.innerHTML = '<div class="searchBar">Search Haus Alpenz (just try a few letters): <input id="searchBox" /></div><span id="dismissSearchOverlay"><img src="gfx/dismiss.png" height="18" width="18" /></span><div id="searchResults"></div>';
	main.appendChild(shadowbox);
	main.appendChild(searchoverlay);

	shadowbox.addEventListener("click", (event) => { dismissSearchOverlay() });
	// shadowbox.click(function(){
	// 	dismissSearchOverlay();
	// });

	dismissSearchOverlayButton = document.getElementById('dismissSearchOverlay');
	dismissSearchOverlayButton.addEventListener("click", (event) => { dismissSearchOverlay() });
	// $('#dismissSearchOverlay').click(function() {
	// 	dismissSearchOverlay();
	// });

	searchBox = document.getElementById('searchBox');
	searchBox.focus();

	// dynamic search binding (keyup-based)
	searchBox.addEventListener('keyup', (event) => { 

		$.debounce(750, function() {
		
			// var searchStr = $('#searchBox').val();
			var searchStr = document.getElementById('searchBox').value
			// var searchResults = $('#searchResults');
			var searchResults = document.getElementById('searchBox')

			searchResults.style.display = 'none';

			if (searchStr.length > 1) {

				$.getJSON('/search/'+searchStr,function(msg) {

					// console.log(msg);

					searchResults.empty();

					if (msg.length>0) {

						// searchResults.append($('<p>'+msg.length+' matches</p>'));
						var matchesAggregate = document.createElement('p');
						matchesAggregate.innerHTML = '' + msg.length + ' matches';
						searchResults.appendChild(matchesAggregate);

						var tmp = '';

						for (var i = 0; i < msg.length; i++) {

							tmp = document.createElement('a');
							tmp.href = msg[i].url;
							if (msg[i].icons) {
								// searchResults.append($('<a href="'+msg[i].url+'"><div class="match"><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div>'+msg[i].icons+'</div></a>'));	
								tmp.innerHTML = '<div class="match"><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div>'+msg[i].icons+'</div>';
							} else {
								// searchResults.append($('<a href="'+msg[i].url+'"><div class="match"><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div></div></a>'));	
								tmp.innerHTML = '<div class="match"><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div></div>';
							}
							searchResults.appendChild(tmp);

						}
						searchResults.style.display = 'block';
					}
					else if (searchStr.length > 0) {
						var matchesAggregate = document.createElement('p');
						matchesAggregate.innerHTML = '<a href=""><em>No matches. Try searching on the first few letters of a product or category.</em></a>';
						// searchResults.append($('<p><a href=""><em>No matches. Try searching on the first few letters of a product or category.</em></a></p>'));
						// searchResults.show();
						searchResults.appendChild(matchesAggregate);
						searchResults.style.display = 'block';
					}
				});

			}
		});
	});
}

