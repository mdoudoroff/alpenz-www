// @codekit-prepend "page.js";

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

	let currentURL = new URL(document.location);
	let qparams = currentURL.searchParams;
	qparams.delete('iid');
	qparams.delete('license');
	qparams.delete('tag');

	var groups = [];
	var groupsForCookie = [];
	var kws;
	if ($('#ingredientChooser').val().length>0) {
		groups.push('.'+$('#ingredientChooser').val());
		groupsForCookie.push($('#ingredientChooser').val());
		qparams.append('iid',$('#ingredientChooser').val());
	}
	if ($('#licenseChooser').val().length>0) {
		groups.push('.'+$('#licenseChooser').val());
		groupsForCookie.push($('#licenseChooser').val());
		qparams.append('license',$('#licenseChooser').val())
	}
	for (var x=1;x<$('fieldset').length+1;x++) {
		kws = '';
		$('#filtergroup'+x+' input:checked').each(function() {
			if (kws.length>0) {
				kws = kws + ', .'+($(this).val().replace(' ','_').replace('/','_'));	
			} else {
				kws = '.'+($(this).val().replace(' ','_').replace('/','_'));
			}
			groupsForCookie.push($(this).val().replace(' ','_').replace('/','_'))
			qparams.append('tag',$(this).val().replace(' ','_').replace('/','_'))
		});
		if (kws.length>0) {
			groups.push(kws);
		}
	}

	// cookie!
	setCookie('harecipesform',groupsForCookie.join(),7);

	// update the querystring in the browser
	window.history.pushState({}, '', currentURL);

	return groups;
}

function restoreFilters(vals) {

	// fetch the URL and querystring; sanitize
	let currentURL = new URL(document.location);
	let qparams = currentURL.searchParams;
	qparams.delete('iid');
	qparams.delete('license');
	qparams.delete('tag');

	$.each(vals,function(idx,val){
		if (val.indexOf('iid')==0) {
			$("#ingredientChooser").val(val);
			qparams.append('iid',val);
	
		} else if (val.indexOf('license_')==0) {
			$("#licenseChooser").val(val);
			qparams.append('license',val);
	
		} else {
			$("input[name="+val+"]").each(function() {$(this).prop("checked", true);});
			qparams.append('tag',val)
		}
	});

	// update the querystring in the browser
	window.history.pushState({}, '', currentURL);

}

function resetFilters() {
	$("input").prop("checked",false);
	$("#ingredientChooser").val("");
	$("#licenseChooser").val("");
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
			$('#matchesAnnotation').append($('<a class="inlineButton" style="margin-left: 1em; cursor: pointer;">RESET / SHOW ALL</a>'));
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

	// fetch the querystring
	let currentURL = new URL(document.location);
	let qparams = currentURL.searchParams;

	// if we have incoming querystring parameters for filtration, use them
	if (qparams.has('iid') || qparams.has('license') || qparams.has('tag')) {
		    restoreFilters(Array.from(qparams.values()));
    // look for a cookie to restore filtration state with
	} else {
		var x = getCookie('harecipesform');
		if (x) {
		    restoreFilters(x.split(','));
		}
	}
	refilterRecipes();  // doing this regardless, to force rebuilding of the tabular nav

	$('#recipefilters input').change(function() {
		refilterRecipes();
	});
	$('#recipefilters select').change(function() {
		refilterRecipes();
	});

	$("#recipeFiltersMoreButton").click(function() {
		var target = $(this).prev();
		if (target.data('expanded') === 'yes') {
			// target.css('max-height','4.25em');
			target.hide();
			target.data('expanded','no');
			$(this).text('Show Recipe Filters');
		} else {
			// target.css('max-height','100em');
			target.show();
			target.data('expanded','yes');
			$(this).text('Hide Recipe Filters');
		}
	});

	$("#matchesAnnotation").click(function() {
		resetFilters();
		refilterRecipes();
	});

});

