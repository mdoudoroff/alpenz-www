
// // parse filter keywords and heading from URL (#&kws=1&heading=2)
// var filterParseHash = function() {
//     var hash = window.location.hash.substring(1),
//     params = {};

//     window.console.log('hash',hash);

//     // if(hash.length < 5) {  // 5 not maybe the right number
//     //     return params;
//     // }

//     var vars = hash.split('&');
//     for (var i = 0; i < vars.length; i++) {
//         if(!vars[i]) {
//             continue;
//         }
//         var pair = vars[i].split('=');  
//         if(pair.length < 2) {
//             continue;
//         }           
//         params[pair[0]] = pair[1];
//     }

//     if(params.kws) {
//         params.kws = params.kws.split(',');
//     }
//     if(params.heading) {
//     	params.heading = decodeURI(params.heading);
//     }

//     return params;
// };



// jQuery(document).ready(function() {

// 	$("div.products").hide();

// 	var params = filterParseHash();

// 	window.console.log(window.location);
//     window.console.log(params);

// 	$('#passedheading').text(params.heading);

// 	var passed;
// 	$('div.products').each(function(index){
// 		passed = true;
// 		// window.console.log($(this).data('filterkeywords'));
// 		for (var x=0;x<params.kws.length;x++) {
// 			// window.console.log(params.kws[x]);
// 			if ($(this).data('filterkeywords') && $(this).data('filterkeywords').indexOf(params.kws[x])==-1) {
// 				passed = false;
// 			}
// 		}
// 		if (passed) {
// 			$(this).show();
// 		}
// 	});

// });