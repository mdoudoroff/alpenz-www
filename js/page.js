


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
		$(".sidebar2").fadeToggle(250);
	});

});
