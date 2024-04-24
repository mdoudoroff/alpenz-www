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
	var e = document.getElementById("ingredientChooser");
	if ( e.value.length>0 ) {
		groups.push( [e.value] );
		groupsForCookie.push( e.value );
		qparams.append('iid', e.value );
	}
	e = document.getElementById("licenseChooser");
	if ( e.value.length>0) {
		groups.push( [e.value] );
		groupsForCookie.push( e.value );
		qparams.append('license', e.value );
	}

	const fieldsets = document.getElementsByTagName('fieldset');
	for (var x=1;x<fieldsets.length+1;x++) {
		kws = [];
		activeSwitches = document.querySelectorAll('#filtergroup'+x+' input:checked');
		activeSwitches.forEach(thingy => {
			kws.push( thingy.value.replace(' ','_').replace('/','_') );
			groupsForCookie.push(thingy.value.replace(' ','_').replace('/','_'))
			qparams.append('tag',thingy.value.replace(' ','_').replace('/','_'))
		});

		if (kws.length>0) {
			groups.push(kws);
		}
	}

	// cookie!
	setCookie('harecipesform',groupsForCookie.join(),1);

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

	// console.log('restoreFilters: vals=',vals);

	vals.forEach( (val) => {
		if (val.indexOf('iid')==0) {
			document.getElementById('ingredientChooser').value = val;
			qparams.append('iid',val);
		} else if (val.indexOf('license_')==0) {
			document.getElementById('licenseChooser').value = val;
			qparams.append('license',val);
		} else {

			activeSwitches = document.querySelectorAll('input[name='+val+']');
			activeSwitches.forEach(thingy => {
				thingy.checked = true;
			});
			qparams.append('tag',val);	
		}
	});

	// update the querystring in the browser
	window.history.pushState({}, '', currentURL);

}

function resetFilters() {
	document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
	document.getElementById('ingredientChooser').value = '';
	document.getElementById('licenseChooser').value = '';
	eraseCookie('harecipesform');
}

function refilterRecipes() {
	var filterGroups = scrapeFilters();

	if (filterGroups.length===0) {
		matches = document.querySelectorAll('.recipeSummaries tr');
		matches.forEach(el => el.style.display = 'table-row');
		document.getElementById('matchesAnnotation').innerHTML = matches.length + ' recipes';
	} else {
		allrows = document.querySelectorAll('.recipeSummaries tr');
		matches = [];
		allrows.forEach( e => {
			pass = true;
			for (var groupIdx=0; groupIdx < filterGroups.length; groupIdx++) {
				groupPass = false;
				filterGroups[groupIdx].forEach( kw => {
					if (Array.from(e.classList).includes(kw)) {
						groupPass = true;
					}
				});
				if (!groupPass) {
					pass = false;
				}
			}
			if (pass) {
				matches.push(e);
			} else {
				e.style.display = false;
			}
		});

		allrows.forEach(el => el.style.display = 'none');
		matches.forEach(el => el.style.display = 'table-row');
		if (matches.length>1) {
			document.getElementById('matchesAnnotation').innerHTML = matches.length + ' matches out of ' + allrows.length;
		} else {
			document.getElementById('matchesAnnotation').innerHTML = matches.length + ' match out of ' + allrows.length;
		}
		e = document.createElement('a');
		e.classList.add('inlineButton');
		e.innerHTML = 'RESET / SHOW ALL';
		e.style.margin = '0 0 0 1em';
		e.style.cursor = 'pointer';
		document.getElementById('matchesAnnotation').appendChild(e)

	}

	// impose tabular nav
	document.getElementById('tabularnav').innerHTML = '';
	if (matches.length>16) {
		var tabularnav = []
		matches.forEach( match => {
			if ( tabularnav.indexOf( match.dataset.tabularletter ) == -1 ) {
				tabularnav.push( match.dataset.tabularletter );
				match.id = 'letter_'+ match.dataset.tabularletter;
			}
		});
		for (var x=0; x<tabularnav.length; x++) {
			c = document.createElement('a');
			c.innerHTML = tabularnav[x];
			c.href = '#letter_'+tabularnav[x];
			document.getElementById('tabularnav').appendChild(c);
		}
	}	

}


jQuery(document).ready(function() {

	// fetch the querystring
	let currentURL = new URL(document.location);
	let qparams = currentURL.searchParams;

	// if we have incoming querystring parameters for filtration, use them
	filterParams = [];
	if (qparams.has('iid')) {
		filterParams.push.apply(filterParams, qparams['iid']);
	}
	if (qparams.has('license')) {
		filterParams.push.apply(filterParams, qparams['license']);
	}
	if (qparams.has('tag')) {
		filterParams.push.apply(filterParams, qparams['tag']);
	}
	if (filterParams.length > 0) {
		restoreFilters(filterParams);

    // look for a cookie to restore filtration state with
	} else {
		var x = getCookie('harecipesform');
		// console.log('cookie',x);
		if (x) {
		    restoreFilters(x.split(','));
		}
	}
	refilterRecipes();  // doing this regardless, to force rebuilding of the tabular nav

	document.querySelector('#recipefilters').addEventListener('change', function() {
	    refilterRecipes();
	});

	document.getElementById('recipeFiltersMoreButton').addEventListener('click', function() {
		target = document.getElementById('recipefilters');
		console.log('target',target);
		console.log('dataset', target.dataset);
		if (target.dataset.expanded === 'yes') {
			target.style.display = 'none';
			target.dataset.expanded = 'no';
			document.getElementById('recipeFiltersMoreButton').innerHTML = 'Show Recipe Filters';
		} else {
			target.style.display = 'block';
			target.dataset.expanded = 'yes';
			document.getElementById('recipeFiltersMoreButton').innerHTML = 'Hide Recipe Filters';
		}
	});

	document.getElementById("matchesAnnotation").addEventListener('click', function() {
		resetFilters();
		refilterRecipes();
	});

});

