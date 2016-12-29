// @codekit-prepend "photoswipe.js";
// @codekit-prepend "photoswipe-ui-default.js";


//var searchPrompt = 'Search by ingredient name...';
var searchPrompt = '';

jQuery(document).ready(function() {

	$('#invokeSearchOverlay').click(function() {
		$('#regularContent').hide();
		$('#searchOverlay').show();
		$('#searchBox').focus();
	});

	$('#invokeSearchOverlayMobile').click(function() {
		$('#regularContent').hide();
		$('#searchOverlay').show();
		$('#searchBox').focus();
	});

	$('#dismissSearchOverlay').click(function() {
		$('#regularContent').show();
		$('#searchOverlay').hide();
	});

	// dynamic search binding (keyup-based)
	$('#searchBox').keyup(function() {
		
		var searchStr = $('#searchBox').val();
		var searchStrLeadTerm = searchStr.toLowerCase().split(' ')[0];
		var searchResults = $('#searchResults');

		searchResults.hide();

		if (searchStr.length > 1) {
			$.getJSON('/search/'+searchStr,function(msg) {

				// window.console.log(msg);

				searchResults.empty();

				if (msg.length>0) {

					// list results
					for (var i = 0; i < msg.length; i++) {

						if (msg[i].icons) {
							searchResults.append($('<a href="'+msg[i].url+'"><div class="match"><div class="icons">'+msg[i].icons+'</div><div class="summary"><p><strong>'+msg[i].name+'</strong><br />'+msg[i].summary+'</p></div></div></a>'));
						} else {
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
		else {
		}

	});

	//



	$("#sidebar-menu ul").hide();                                                       

	$("#sidebar-menu li").prepend("<span class='handle'></span>");

	$("#sidebar-menu li:has(ul)")
		.children(":first-child").addClass("collapsed")
		.click(function(){    
		  $(this).toggleClass("collapsed expanded")
		    .siblings("ul").toggle();
	});                                                                                            

	$(".toggle").click(function() {
		$("#modal").toggle();
		$(".sidebar2").toggle();
	});
	$("#modal").click(function() {
		$("#modal").toggle();
		$(".sidebar2").toggle();
	});
	$("#dismissMenu").click(function() {
		$("#modal").toggle();
		$(".sidebar2").toggle();
	});

	$(".morebutton").click(function() {
		var target = $(this).prev();
		if (target.data('expanded') === 'yes') {
			target.css('max-height','7.25em');
			target.data('expanded','no');
			$(this).text('Expand ▾');
		} else {
			target.css('max-height','100em');
			target.data('expanded','yes');
			$(this).text('Collapse ▴');
		}
	});

	var initPhotoSwipeFromDOM = function(gallerySelector) {

		// I’ve significantly adapted this code from the PhotoSwipe site to work with disparate
		// <figure> elements scattered throughout a page but sharing the same class
		// (The original code was about sniffing a gallery out of a container element)

	    // parse slide data (url, title, size ...) from DOM elements 
	    // (children of gallerySelector)
	    var parseThumbnailElements = function(gallerySelector) {

	    	var items = [];
	    	var els = document.querySelectorAll( gallerySelector );

	    	for(var x = 0; x < els.length; x++) {

	    		var figureEl = els[x];

		        var linkEl,
		            size,
		            item;

		            linkEl = figureEl.children[0]; // <a> element

		            size = linkEl.getAttribute('data-size').split('x');

		            // create slide object
		            item = {
		                src: linkEl.getAttribute('href'),
		                w: parseInt(size[0], 10),
		                h: parseInt(size[1], 10)
		            };

		            if(figureEl.children.length > 1) {
		                // <figcaption> content
		                item.title = figureEl.children[1].innerHTML; 
		            }

		            if(linkEl.children.length > 0) {
		                // <img> thumbnail element, retrieving thumbnail url
		                item.msrc = linkEl.children[0].getAttribute('src');
		            } 

		            item.el = figureEl; // save link to element for getThumbBoundsFn
		            items.push(item);
		        }

	        return items;
	    };

	    // find nearest parent element
	    var closest = function closest(el, fn) {
	        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	    };

	    // triggers when user clicks on thumbnail
	    var onThumbnailsClick = function(e) {
	        e = e || window.event;
	        e.preventDefault ? e.preventDefault() : e.returnValue = false;

	        var eTarget = e.target || e.srcElement;

	        // find root element of slide
	        var clickedListItem = closest(eTarget, function(el) {
	            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
	        });

	        if(!clickedListItem) {
	            return;
	        }

	        var gallerySelector = clickedListItem.getAttribute('data-selector');
	        var els = document.querySelectorAll( gallerySelector );
	        var index;
	        for (var i = 0; i < els.length; i++) {
	        	if(els[i]===clickedListItem) {
	        		index = i;
	        	}
	        }

	        if(index >= 0) {
	            // open PhotoSwipe if valid index found
	            openPhotoSwipe( index, clickedListItem );
	        }

	        return false;
	    };

	    // parse picture index and gallery index from URL (#&pid=1&gid=2)
	    var photoswipeParseHash = function() {
	        var hash = window.location.hash.substring(1),
	        params = {};

	        if(hash.length < 5) {
	            return params;
	        }

	        var vars = hash.split('&');
	        for (var i = 0; i < vars.length; i++) {
	            if(!vars[i]) {
	                continue;
	            }
	            var pair = vars[i].split('=');  
	            if(pair.length < 2) {
	                continue;
	            }           
	            params[pair[0]] = pair[1];
	        }

	        if(params.gid) {
	            params.gid = parseInt(params.gid, 10);
	        }

	        return params;
	    };

	    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
	        var pswpElement = document.querySelectorAll('.pswp')[0],
	            gallery,
	            options,
	            items;

	        var gallerySelector = galleryElement.getAttribute('data-selector');
	        items = parseThumbnailElements(gallerySelector);

	        // define options (if needed)
	        options = {

	            // define gallery index (for URL)
	            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

	            getThumbBoundsFn: function(index) {
	                // See Options -> getThumbBoundsFn section of documentation for more info
	                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
	                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
	                    rect = thumbnail.getBoundingClientRect(); 

	                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
	            }

	        };

	        // PhotoSwipe opened from URL
	        if(fromURL) {
	            if(options.galleryPIDs) {
	                // parse real index when custom PIDs are used 
	                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
	                for(var j = 0; j < items.length; j++) {
	                    if(items[j].pid == index) {
	                        options.index = j;
	                        break;
	                    }
	                }
	            } else {
	                // in URL indexes start from 1
	                options.index = parseInt(index, 10) - 1;
	            }
	        } else {
	            options.index = parseInt(index, 10);
	        }

	        // exit if index not found
	        if( isNaN(options.index) ) {
	            return;
	        }

	        if(disableAnimation) {
	            options.showAnimationDuration = 0;
	        }

	        // Pass data to PhotoSwipe and initialize it
	        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	        gallery.init();
	    };

	    // loop through all gallery elements and bind events
	    var galleryElements = document.querySelectorAll( gallerySelector );

	    for(var i = 0, l = galleryElements.length; i < l; i++) {
	        galleryElements[i].setAttribute('data-pswp-uid', i+1);
	        galleryElements[i].setAttribute('data-selector', gallerySelector);
	        galleryElements[i].onclick = onThumbnailsClick;
	    }

	    // Parse URL and open gallery if it contains #&pid=3&gid=1
	    var hashData = photoswipeParseHash();
	    if(hashData.pid && hashData.gid) {
	        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	    }
	};

	// execute above function
	initPhotoSwipeFromDOM('.my-gallery');




});
