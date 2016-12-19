
//var searchPrompt = 'Search by ingredient name...';
var searchPrompt = '';


function scrapeFilters() {
	var groups = [];
	var kws;
	for (var x=1;x<$('fieldset').length+1;x++) {
		kws = '';
		$('#filtergroup'+x+' input:checked').each(function() {
			if (kws.length>0) {
				kws = kws + ', .'+($(this).val().replace(' ','_').replace('/','_'));	
			} else {
				kws = '.'+($(this).val().replace(' ','_').replace('/','_'));
			}
		});
		if (kws.length>0) {
			groups.push(kws);
		}
	}
	return groups;
}

function refilterRecipes() {
	var filterGroups = scrapeFilters();
	console.log(filterGroups);

	if (filterGroups.length===0) {
		$('.recipeSummaries tr').show();
		$('#matchesAnnotation').text($('.recipeSummaries tr').length + ' recipes');
	}
	else {
		var matches = $('.recipeSummaries tr');
		matches.hide();
		for (var groupIdx=0; groupIdx < filterGroups.length; groupIdx++) {
			matches = matches.filter($(filterGroups[groupIdx]));
		}
		matches.show();
		if (matches.length>1) {
			$('#matchesAnnotation').text(matches.length + ' matches out of '+$('.recipeSummaries tr').length);	
		} else {
			$('#matchesAnnotation').text(matches.length + ' match out of '+$('.recipeSummaries tr').length);	
		}
		
	}
}


jQuery(document).ready(function() {

	// dynamic search binding (keyup-based)
	$('#searchBox').keyup(function() {
		
		var searchStr = $('#searchBox').val();
		var searchStrLeadTerm = searchStr.toLowerCase().split(' ')[0];
		var searchResults = $('#searchResults');

		searchResults.hide();

		if (searchStr.length > 1) {
			$.getJSON('/search/'+searchStr,function(msg) {

				window.console.log(msg);

				searchResults.empty();

				if (msg.length>0) {

					// list results
					for (var i = 0; i < msg.length; i++) {
						searchResults.append($('<p><a href="'+msg[i].url+'">'+msg[i].name+'</a><br />'+msg[i].summary+'</p>'));
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




	// recipe index filtration

	$('#recipefilters input').change(function() {
		refilterRecipes();
	});

});

