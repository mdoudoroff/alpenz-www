// @codekit-prepend "site-search.js";
// @codekit-prepend "gallery-overlay.js";

let madeiraSwitchState = 'groupingFamily';
let vintagesAgeStatementsSwitchState = 'vintages';
let groupingSwitchState = 'groupingYear';


function toggleMobileNav() {
	const main = document.getElementsByTagName('main')[0];
	const backdrop = document.getElementById('modal__backdrop');
	const menu = document.getElementsByClassName('sidebar2')[0];
	if (main.style.display !== 'none') {
		main.style.display = 'none';
		backdrop.style.display = 'block';
		menu.style.display = 'block';
	} else {
		main.style.display = 'block';
		backdrop.style.display = 'none';
		menu.style.display = 'none';
	}
}




window.onload = (event) => {

	// vintage year jump selector found on various pages
	const vintageSelectElement = document.getElementById("vintageYearSelect");
	if (vintageSelectElement) {
		vintageSelectElement.addEventListener("change", (event) => {
			window.location.href = event.target.value;
		});
	}

	// @@ this code is only relevant on a few pages... consolidate elsewhere?
	const madeiraSwitch = document.querySelector(".madeiraSwitch");
	if (madeiraSwitch) {
		madeiraSwitch.addEventListener("click", (event) => {

			if (madeiraSwitchState === 'groupingFamily') {
				madeiraSwitchState = 'groupingVarietal';
				document.getElementById("groupingFamily").style.display = 'none';
				document.getElementById("groupingVarietal").style.display = 'block';
				document.getElementById("familySwitch").classList.remove("selected");
				document.getElementById("varietalSwitch").classList.add("selected");
			} else {
				madeiraSwitchState = 'groupingFamily';
				document.getElementById("groupingFamily").style.display = 'block';
				document.getElementById("groupingVarietal").style.display = 'none';
				document.getElementById("familySwitch").classList.add("selected");
				document.getElementById("varietalSwitch").classList.remove("selected");
			}

		});
	}

	// @@ TODO these items (and the function below) belong exclusively to a single page and should be consolidated there
	const vintageAgeStatementsSwitch = document.querySelector(".vintagesAgeStatementsSwitch");
	if (vintageAgeStatementsSwitch) {

		updateVintageExploreList(); // initialize state

		vintageAgeStatementsSwitch.addEventListener("click", (event) => {

			if (vintagesAgeStatementsSwitchState == 'nonvintages') {
				vintagesAgeStatementsSwitchState = 'vintages';
			} else {
				vintagesAgeStatementsSwitchState = 'nonvintages';
			}
			updateVintageExploreList();
		});

		const groupingSwitch = document.querySelector('.vintageSwitch');
		if (groupingSwitch) {
			groupingSwitch.addEventListener("click", (event) => {

				if (groupingSwitchState == 'groupingYear') {
					groupingSwitchState = 'groupingCategory';
				} else {
					groupingSwitchState = 'groupingYear';
				}
				updateVintageExploreList();
			});
		}
	}


	// mobile nav
	document.getElementsByClassName("toggle__mobile__nav")[0].onclick = function() {
		toggleMobileNav();
		return false;		
	}
	document.getElementById("modal__backdrop").onclick = function() {
		toggleMobileNav();
		return false;		
	}
	document.getElementById("dismissMenu").onclick = function() {
		toggleMobileNav();
		return false;		
	}


	// search
	searchLinks = document.getElementsByClassName('invoke__search');
	for (let i = 0; i < searchLinks.length; i++ ) {
		searchLinks[i].onclick = function() {
			createSearchOverlay();
			return false;
		};
	}


	// escape key
	document.addEventListener("keydown", (event) => {
		if (event.keyCode==27) {
			dismissSearchOverlay();
		}
	});


	// fire up the gallery-overlay lightbox code, if applicable
	if (document.getElementsByClassName("my-gallery").length > 0) {
		initPhotoSwipeFromDOM('.my-gallery');		
	}



}

function updateVintageExploreList() {

	if (groupingSwitchState == 'groupingYear') {
		document.getElementById('groupingYear').style.display = 'block';
		document.getElementById('groupingCategory').style.display = 'none';

		document.getElementById("yearSwitch").classList.add("selected");
		document.getElementById("categorySwitch").classList.remove("selected");

	} else {
		document.getElementById('groupingYear').style.display = 'none';
		document.getElementById('groupingCategory').style.display = 'block';

		document.getElementById("yearSwitch").classList.remove("selected");
		document.getElementById("categorySwitch").classList.add("selected");

	}

	if (vintagesAgeStatementsSwitchState == 'vintages') {

		tmp = document.getElementsByClassName("vintageitems");
		for (let i = 0; i < tmp.length; i++) {
			tmp[i].style.display = 'block';
		}
		tmp = document.getElementsByClassName("nonvintageitems");
		for (let i = 0; i < tmp.length; i++) {
			tmp[i].style.display = 'none';
		}

		document.getElementById("vintageYearJump").style.display = "block";

		document.getElementById("vintagesSwitch").classList.add("selected");
		document.getElementById("nonvintagesSwitch").classList.remove("selected");

	} else {

		tmp = document.getElementsByClassName("vintageitems");
		for (let i = 0; i < tmp.length; i++) {
			tmp[i].style.display = 'none';
		}
		tmp = document.getElementsByClassName("nonvintageitems");
		for (let i = 0; i < tmp.length; i++) {
			tmp[i].style.display = 'block';
		}

		document.getElementById("vintageYearJump").style.display = "none";

		document.getElementById("vintagesSwitch").classList.remove("selected");
		document.getElementById("nonvintagesSwitch").classList.add("selected");

	}
}

