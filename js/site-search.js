
function dismissSearchOverlay() {
	$('#searchOverlay').remove();
	$('#shadowbox').remove();
}

function createSearchOverlay() {
	var shadowbox = $('<div id="shadowbox"></div>');
	var searchoverlay = $('<div id="searchOverlay"><div class="searchBar">Search Haus Alpenz: <input id="searchBox" /></div><span id="dismissSearchOverlay"><img src="gfx/dismiss.png" height="18" width="18" /></span><div id="searchResults"></div></div>');
	$('#regularContent').append(shadowbox);
	$('#regularContent').append(searchoverlay);
	shadowbox.click(function(){
		dismissSearchOverlay();
	});
	$('#dismissSearchOverlay').click(function() {
		dismissSearchOverlay();
	});
	$('#searchBox').focus();

	// dynamic search binding (keyup-based)
	$('#searchBox').keyup(function() {
		
		var searchStr = $('#searchBox').val();
		//var searchStrLeadTerm = searchStr.toLowerCase().split(' ')[0];
		var searchResults = $('#searchResults');

		searchResults.hide();

		if (searchStr.length > 1) {
			$.getJSON('/search/'+searchStr,function(msg) {

				// window.console.log(msg);

				searchResults.empty();

				if (msg.length>0) {

					searchResults.append($('<p>'+msg.length+' matches</p>'));

					// list results
					for (var i = 0; i < msg.length; i++) {

						if (msg[i].icons) {
							//searchResults.append($('<a href="'+msg[i].url+'"><div class="match clr"><div class="icons">'+msg[i].icons+'</div><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div></div></a>'));
							searchResults.append($('<a href="'+msg[i].url+'"><div class="match"><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div>'+msg[i].icons+'</div></a>'));
						} else {
							//searchResults.append($('<a href="'+msg[i].url+'"><div class="match clr"><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div></div></a>'));	
							searchResults.append($('<a href="'+msg[i].url+'"><div class="match"><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div></div></a>'));	
						}
						
					}
					searchResults.show();
				}
				else if (searchStr.length > 0) {
					searchResults.append($('<p><a href=""><em>No matches. Try searching on the first few letters of a product or category.</em></a></p>'));
					searchResults.show();
				} else {
				}
			});
		}
		else {}
	});
}

jQuery(document).ready(function() {


	$(document).keyup(function(e) {
		if (e.keyCode === 27) { // escape key maps to keycode `27`
			dismissSearchOverlay();
    	}	
	});

	$('#invokeSearchOverlay').click(function() {
		createSearchOverlay();
	});

	$('#invokeSearchOverlayMobile').click(function() {
		createSearchOverlay();
	});

});
