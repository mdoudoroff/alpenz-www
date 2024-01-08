// @codekit-prepend "site-search.js";
// @codekit-prepend "gallery-overlay.js";

jQuery(document).ready(function() {


	$("#sidebar-menu ul").hide();                                                       

	$("#sidebar-menu li").prepend("<span class='handle'></span>");

	$("#sidebar-menu li:has(ul)")
		.children(":first-child").addClass("collapsed")
		.click(function(){    
		  $(this).toggleClass("collapsed expanded")
		    .siblings("ul").toggle();
	});                                                                                            

	$(".toggle").click(function() {
		$("#regularContent").toggle();
		$("#modal").toggle();
		$(".sidebar2").toggle();
	});
	$("#modal").click(function() {
		$("#regularContent").toggle();
		$("#modal").toggle();
		$(".sidebar2").toggle();
	});
	$("#dismissMenu").click(function() {
		$("#regularContent").toggle();
		$("#modal").toggle();
		$(".sidebar2").toggle();
	});

	var madeiraSwitchState = 'groupingFamily';
	$('.madeiraSwitch').click(function() {
		if (madeiraSwitchState === 'groupingFamily') {
			madeiraSwitchState = 'groupingVarietal';
			$('#groupingFamily').hide();
			$('#groupingVarietal').show();
			$('#familySwitch').removeClass('selected');
			$('#varietalSwitch').addClass('selected');
		} else {
			madeiraSwitchState = 'groupingFamily';
			$('#groupingFamily').show();
			$('#groupingVarietal').hide();
			$('#familySwitch').addClass('selected');
			$('#varietalSwitch').removeClass('selected');
		}
	});

	var vintageSwitchState = 'groupingYear';
	$('.vintageSwitch').click(function() {
		if (vintageSwitchState === 'groupingYear') {
			vintageSwitchState = 'groupingCategory';
			$('#groupingYear').hide();
			$('#groupingCategory').show();
			$('#yearSwitch').removeClass('selected');
			$('#categorySwitch').addClass('selected');
		} else {
			vintageSwitchState = 'groupingYear';
			$('#groupingYear').show();
			$('#groupingCategory').hide();
			$('#yearSwitch').addClass('selected');
			$('#categorySwitch').removeClass('selected');
		}
	});

	// $(".locSelector").click(function(event) {
	// 	event.preventDefault();
	// 	// window.console.log( $(this).data('latitude'), $(this).data('longitude'), $(this).data('zoom') );
	// 	var m = window.mainmap;
	// 	m.setCenter({lat: $(this).data('latitude'), lng: $(this).data('longitude')}); 
	// 	m.setZoom($(this).data('zoom'));

	// 	var marker = new google.maps.Marker({
	// 	    position: {lat: $(this).data('latitude'), lng: $(this).data('longitude')},
	// 	    title:$(this).data("label")
	// 	});

	// 	// To add the marker to the map, call setMap();
	// 	marker.setMap(m);
	// });


});

const vintageSelectElement = document.querySelector("#vintageYearSelect");
if (vintageSelectElement) {
	vintageSelectElement.addEventListener("change", (event) => {
		window.location.href = event.target.value;
	});
}


