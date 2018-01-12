
//var searchPrompt = 'Search by ingredient name...';
var searchPrompt = '';

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function scrapeFilters() {
	var groups = [];
	var kws;
	if ($('#ingredientChooser').val().length>0) {
		groups.push('.'+$('#ingredientChooser').val());
	}
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

	// cookie!
	setCookie('harecipesform',groups.join(),7);

	return groups;
}

function restoreFilters(vals) {
	$.each(vals.split(','),function(idx,val){
		if (val.indexOf('iid')==1) {
			$("#ingredientChooser").val(val.slice(1));
		} else {
			$("input[name="+val.slice(1)+"]").each(function() {$(this).prop("checked", true);});
		}
	});
}

function resetFilters() {
	$("input").prop("checked",false);
	$("#ingredientChooser").val("");
	eraseCookie('harecipesform');
}

function refilterRecipes() {
	var filterGroups = scrapeFilters();

	if (filterGroups.length===0) {
		$('.recipeSummaries tr').show();
		$('#matchesAnnotation').text($('.recipeSummaries tr').length + ' recipes');

		// impose tabular nav
		$('#tabularnav').empty();
		var tabularnav = []
		$.each($('.recipeSummaries tr'),function(idx,match) {
			if (tabularnav.indexOf($(match).data('tabularletter'))==-1) {
				tabularnav.push($(match).data('tabularletter'));
				$(match).attr('id','letter_'+$(match).data('tabularletter'));
			}
		});
		for (var x=0; x<tabularnav.length; x++) {
			$('#tabularnav').append('<a href="#letter_'+tabularnav[x]+'">'+tabularnav[x]+'</a> ');
		}

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
			$('#matchesAnnotation').append($('<a class="inlineButton" style="margin-left: 1em; cursor: pointer;">RESET / SHOW ALL</a>'));
		} else {
			$('#matchesAnnotation').text(matches.length + ' match out of '+$('.recipeSummaries tr').length);	
		}

		// impose tabular nav (if at least sixteen matches)
		$('#tabularnav').empty();
		if (matches.length>16) {
			// build tab links	
			var tabularnav = []
			$.each(matches,function(idx,match) {
				if (tabularnav.indexOf($(match).data('tabularletter'))==-1) {
					tabularnav.push($(match).data('tabularletter'));
					$(match).attr('id','letter_'+$(match).data('tabularletter'));
				}
			});
			for (var x=0; x<tabularnav.length; x++) {
				$('#tabularnav').append('<a href="#letter_'+tabularnav[x]+'">'+tabularnav[x]+'</a> ');
			}
		}
	}

	

}


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





	// recipe index filtration
	var x = getCookie('harecipesform');
	if (x) {
	    restoreFilters(x);
	    refilterRecipes();
	} else {
		refilterRecipes();  // doing this here to force rebuilding of the tabular nav
	}

	$('#recipefilters input').change(function() {
		refilterRecipes();
	});
	$('#recipefilters select').change(function() {
		refilterRecipes();
	});

	$("#recipeFiltersMoreButton").click(function() {
		var target = $(this).prev();
		if (target.data('expanded') === 'yes') {
			target.css('max-height','4.25em');
			target.data('expanded','no');
			$(this).text('Expand ▾');
		} else {
			target.css('max-height','100em');
			target.data('expanded','yes');
			$(this).text('Collapse ▴');
		}
	});

	$("#matchesAnnotation").click(function() {
		resetFilters();
		refilterRecipes();
	});

});

