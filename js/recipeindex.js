// @codekit-prepend "page.js";

function setCookie(name,value,days) {
    let expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function scrapeFilters() {

	const currentURL = new URL(document.location);
	const qparams = currentURL.searchParams;
	qparams.delete('iid');
	qparams.delete('license');
	qparams.delete('tag');

	const groups = [];
	const groupsForCookie = [];
	const ingredientChooser = document.getElementById("ingredientChooser");
	if ( ingredientChooser.value.length>0 ) {
		groups.push( [ingredientChooser.value] );
		groupsForCookie.push( ingredientChooser.value );
		qparams.append('iid', ingredientChooser.value );
	}
	const licenseChooser = document.getElementById("licenseChooser");
	if ( licenseChooser.value.length>0) {
		groups.push( [licenseChooser.value] );
		groupsForCookie.push( licenseChooser.value );
		qparams.append('license', licenseChooser.value );
	}

	const fieldsets = document.getElementsByTagName('fieldset');
	for (let x=1;x<fieldsets.length+1;x++) {
		const kws = [];
		const activeSwitches = document.querySelectorAll('#filtergroup'+x+' input:checked');
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
	const currentURL = new URL(document.location);
	const qparams = currentURL.searchParams;
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

			const activeSwitches = document.querySelectorAll('input[name='+val+']');
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
	const filterGroups = scrapeFilters();
	let matches = [];

	if (filterGroups.length===0) {
		matches = document.querySelectorAll('.recipeSummaries tr');
		matches.forEach(el => el.style.display = 'table-row');
		document.getElementById('matchesAnnotation').innerHTML = matches.length + ' recipes';
	} else {
		const allrows = document.querySelectorAll('.recipeSummaries tr');
		matches = [];
		allrows.forEach( row => {

			row.style.display = 'none'; // hide the row by default

			let rowPass = true;

			let rowClasses = Array.from(row.classList);

			for (let groupIdx=0; groupIdx < filterGroups.length; groupIdx++) {

				let groupPass = false;

				// if the classList contains at least one of the kw for this group, it meets the requirement for the group
				filterGroups[groupIdx].forEach( kw => {
					if (rowClasses.includes(kw)) {
						groupPass = true;
					}
				});

				// if any group fails, we filter out the row
				if (!groupPass) {
					rowPass = false;
				}

			}
			if (rowPass) {
				matches.push(row);
			} else {
				// row.style.display = false; // @@ why are we doing this here?
			}
		});

		matches.forEach(el => el.style.display = 'table-row');
		if (matches.length>1) {
			document.getElementById('matchesAnnotation').innerHTML = matches.length + ' matches out of ' + allrows.length;
		} else {
			document.getElementById('matchesAnnotation').innerHTML = matches.length + ' match out of ' + allrows.length;
		}
		let e = document.createElement('a');
		e.classList.add('inlineButton');
		e.innerHTML = 'RESET / SHOW ALL';
		e.style.margin = '0 0 0 1em';
		e.style.cursor = 'pointer';
		document.getElementById('matchesAnnotation').appendChild(e)
	}

	// impose tabular nav
	document.getElementById('tabularnav').innerHTML = '';
	if (matches.length>16) {
		const tabularnav = []
		matches.forEach( match => {
			if ( tabularnav.indexOf( match.dataset.tabularletter ) == -1 ) {
				tabularnav.push( match.dataset.tabularletter );
				match.id = 'letter_'+ match.dataset.tabularletter;
			}
		});
		for (let x=0; x < tabularnav.length; x++) {
			let c = document.createElement('a');
			c.innerHTML = tabularnav[x];
			c.href = '#letter_'+tabularnav[x];
			document.getElementById('tabularnav').appendChild(c);
		}
	}	

}


jQuery(document).ready(function() {

	// fetch the querystring
	const currentURL = new URL(document.location);
	const qparams = currentURL.searchParams;

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
		const x = getCookie('harecipesform');
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
		const target = document.getElementById('recipefilters');
		// console.log('target',target);
		// console.log('dataset', target.dataset);
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

