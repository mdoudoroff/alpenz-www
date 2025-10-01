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
	qparams.delete('substring');
	qparams.delete('tag');

	const groups = [];
	const groupsForCookie = [];


	// It is okay to scrape the license selector in this context as long as we are confident in it
	const licenseChooser = document.getElementById("licenseChooser");
	if ( licenseChooser.value.length>0) {
		groups.push( [licenseChooser.value] );
		groupsForCookie.push( licenseChooser.value );
		qparams.append('license', licenseChooser.value );
	}

	const substring = document.getElementById("substring");
	if ( substring.value.length>0) {
		groups.push( [ 'substring:'+substring.value ] );
		groupsForCookie.push( 'substring:'+substring.value );
		qparams.append('substring', substring.value );
	}

	// update the ingredient chooser
	const ingredientoptions = document.querySelectorAll('#ingredientChooser option');
	// console.log(ingredientoptions);
	ingredientoptions.forEach( function (o) {
		o.removeAttribute('disabled');
		if (licenseChooser.value != '' && typeof o.dataset.licenses != 'undefined') {
			// console.log(o.dataset.licenses, '|', licenseChooser.value, '(', o.dataset.licenses.includes(licenseChooser.value), ')');
			if (!o.dataset.licenses.includes(licenseChooser.value) ) {
				o.setAttribute('disabled',true);			
			}
		}
	});

	const ingredientChooser = document.getElementById("ingredientChooser");
	if ( ingredientChooser.value.length>0 ) {
		groups.push( [ingredientChooser.value] );
		groupsForCookie.push( ingredientChooser.value );
		qparams.append('iid', ingredientChooser.value );
	}

	const fieldsets = Array.from(document.getElementsByTagName('details'));
	fieldsets.forEach( fieldset => {
		const kws = [];
		const activeSwitches = fieldset.querySelectorAll('input:checked');
		activeSwitches.forEach(thingy => {
			kws.push( thingy.value.replace(' ','_').replace('/','_') );
			groupsForCookie.push(thingy.value.replace(' ','_').replace('/','_'))
			qparams.append('tag',thingy.value.replace(' ','_').replace('/','_'))
		});

		if (kws.length>0) {
			fieldset.setAttribute('open','true'); // while we are here, pop open the details block
			groups.push(kws);
		}
	});

	// cookie!
	setCookie('harecipesform',groupsForCookie.join(),1);

	// update the querystring in the browser
	window.history.pushState({}, '', currentURL);

	return groups;
}

function restoreFilters(vals) {

	// console.log('restoreFilters vals going in:', vals)

	// TODO: *probably* want to remove the license chooser from this and handle it discretely so it’s less “entangled”

	// fetch the URL and querystring; sanitize
	const currentURL = new URL(document.location);
	const qparams = currentURL.searchParams;
	qparams.delete('iid');
	qparams.delete('license');
	qparams.delete('substring');
	qparams.delete('tag');

	// console.log('restoreFilters: vals=',vals);

	vals.forEach( (val) => {
		if (val.indexOf('iid')==0) {
			document.getElementById('ingredientChooser').value = val;
			qparams.append('iid',val);
		} else if (val.indexOf('substring:')==0) {
			document.getElementById('substring').value = val.substring(10,val.length);
			qparams.append('substring',val.substring(10,val.length));
		// } else if (val.indexOf('substring')==0) {
		// 	document.getElementById('substring').value = val;
			qparams.append('substring',val);
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
	document.getElementById('substring').value = '';
	// document.getElementById('licenseChooser').value = '';
	eraseCookie('harecipesform');
}

function refilterRecipes() {

	// FIRST, we want to filter the recipes by the current license type
	// From this we have the pool from which everything else follows
	// and we have a master total.
	// NEXT, we want to filter by kw groups, skipping the name filter
	// NEXT, we want to collect the keyword stats from the remaining recipes and update the filter UI
	// NEXT, we want to hide any that don’t match the name filter [debatable whether this comes before or after previous activity]


	const filterGroups = scrapeFilters();

	// console.log('refilterRecipes(): filterGroups = ',filterGroups);

	let substring = '';

	// substring filter (pulling this straight from the input element)
	const substringElement = document.getElementById("substring");
	if (substringElement.value.length > 0) {
		substring = substringElement.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	}
	// if (substring.length) {
	// 	console.log('refilterRecipes(): filtering by substring: ', substring);
	// } else {
	// 	console.log('refilterRecipes(): no substring filter');
	// }
	


	// == Filter by license to establish our master recipe pool

	const licenseChooser = document.getElementById("licenseChooser");
	let activeLicense = licenseChooser.value;
	let candidates = [];
	// if (activeLicense) {
	// 	console.log('refilterRecipes(): principle filtering by license', activeLicense);
	// } else {
	// 	console.log('refilterRecipes(): no license filtering');
	// }
	document.querySelectorAll('.recipeSummaries tr').forEach( row => {

		row.style.display = 'none'; // hide the row by default

		let rowClasses = Array.from(row.classList);
		if ( !activeLicense | rowClasses.includes(activeLicense) ) {
			candidates.push(row);
		}
	});
	// console.log('refilterRecipes(): principal recipe pool count:', candidates.length);


	// == Filter by keywords

	const matches = [];
	candidates.forEach( row => {

		let rowPass = true;

		let rowClasses = Array.from(row.classList);

		for (let groupIdx=0; groupIdx < filterGroups.length; groupIdx++) {

			// if substring in group, then we skip this group
			if (filterGroups[groupIdx][0].includes('substring:')) {
				continue
			}

			// if the classList contains at least one of the kw for this group, it meets the requirement for the group
			let groupPass = false;
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
		}

	});
	// console.log('refilterRecipes(): post-keyword filtration match count:', matches.length);

	// == harvest keyword stats

	let keywordAggregates = new Map();
	matches.forEach( row => {
		let rowClasses = Array.from(row.classList);
		rowClasses.forEach( klass_token => {
			if ( keywordAggregates.has(klass_token) ) {
				keywordAggregates.set( klass_token, keywordAggregates.get(klass_token) + 1);
			} else {
				keywordAggregates.set( klass_token, 1 );
			}
		});	
	});
	// console.log('refilterRecipes(): post-keyword filtration keyword aggregates:', keywordAggregates);


	// == final substring matching

	let finalCount = 0;
	if (substring.length > 0) {
		matches.forEach( row => {
			let tmp = row.getElementsByClassName('recipeTitle')[0].innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			if (tmp.includes(substring)) {
				finalCount = finalCount + 1;
				row.style.display = 'table-row';
			}
		});
	} else {
		matches.forEach(el => el.style.display = 'table-row');
		finalCount = matches.length;
	}
	// console.log('refilterRecipes(): final count:', finalCount);

	if (matches.length>1) {
		document.getElementById('matchesAnnotation').innerHTML = finalCount + ' matches out of ' + candidates.length;
	} else {
		document.getElementById('matchesAnnotation').innerHTML = finalCount + ' match out of ' + candidates.length;
	}


	// == update related UI

	// update the counts
	let keywordOptions = document.getElementsByClassName('keywordoption');
	Array.from(keywordOptions).forEach( e => {
		if (keywordAggregates.has(e.getAttribute('id'))) {
			e.style.display = 'block';
			document.getElementById(e.getAttribute('id')+'_count').innerText = keywordAggregates.get(e.getAttribute('id'));
		} else {
			e.style.display = 'none';
			document.getElementById(e.getAttribute('id')+'_count').innerText = '0';
		}
	});

	// add reset button, if applicable
	if (candidates.length > finalCount) {
		let e = document.createElement('button');
		e.classList.add('inlineButton');
		e.innerHTML = 'RESET / SHOW ALL';
		e.style.margin = '0 0 0 1em';
		// e.style.cursor = 'pointer';
		e.setAttribute('aria-label', 'clear all filters and show all recipes');
		document.getElementById('matchesAnnotation').appendChild(e)
	}

	// impose tabular nav
	document.getElementById('tabularnav').innerHTML = '';
	if ( finalCount > 16 ) {
		const tabularnav = []
		matches.forEach( match => {
			if ( match.style.display != 'none' & tabularnav.indexOf( match.dataset.tabularletter ) == -1 ) {
				tabularnav.push( match.dataset.tabularletter );
				match.id = 'letter_'+ match.dataset.tabularletter;
			}
		});
		for (let x=0; x < tabularnav.length; x++) {
			let c = document.createElement('a');
			c.innerHTML = tabularnav[x];
			c.href = '#letter_'+tabularnav[x];
			c.setAttribute('aria-label', 'jump to '+ tabularnav[x])
			document.getElementById('tabularnav').appendChild(c);
		}
	}	

	if ( substring.length > 0 & finalCount == 0 )  {
		document.getElementById('substring').style.color = 'red';
	} else {
		document.getElementById('substring').style.color = 'inherit';
	}

}

// fetch the querystring

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);


// if we have incoming querystring parameters for filtration, use them
filterParams = [];
if (searchParams.has('iid')) {
	filterParams.push.apply(filterParams, searchParams.getAll('iid'));
}
if (searchParams.has('license')) {
	filterParams.push.apply(filterParams, searchParams.getAll('license'));
}
// this is broken and maybe not necessary
// if (searchParams.has('substring')) {
	// let substringhack = 'substring:'+searchParams.getAll('substring');
	// console.log('substringhack:',substringhack);
	// filterParams.push.apply(filterParams, substringhack);
// }
if (searchParams.has('tag')) {
	filterParams.push.apply(filterParams, searchParams.getAll('tag'));
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
document.querySelector('#licenseChooser').addEventListener('change', function() {
    refilterRecipes();
});
document.querySelector('#substring').addEventListener('keyup', function() {
    refilterRecipes();
});

document.getElementById('recipeFiltersMoreButton').addEventListener('click', function() {
	const target = document.getElementById('recipefilters');
	if (target.dataset.expanded === 'yes') {
		target.style.display = 'none';
		target.dataset.expanded = 'no';
		document.getElementById('recipeFiltersMoreButton').innerHTML = 'Filter Recipes';
	} else {
		target.style.display = 'block';
		target.dataset.expanded = 'yes';
		document.getElementById('recipeFiltersMoreButton').style.display = 'none';
	}
});

document.getElementById('dismissRecipeFilter').addEventListener('click', function() {
	const target = document.getElementById('recipefilters');
	target.style.display = 'none';
	target.dataset.expanded = 'no';	
	document.getElementById('recipeFiltersMoreButton').style.display = 'inline';
});



document.getElementById("matchesAnnotation").addEventListener('click', function() {
	resetFilters();
	refilterRecipes();
});


