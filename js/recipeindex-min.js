/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
// @codekit-prepend "photoswipe.js";
// @codekit-prepend "photoswipe-ui-default.js";
function dismissSearchOverlay(){$("#searchOverlay").remove(),$("#shadowbox").remove()}function createSearchOverlay(){var e=$('<div id="shadowbox"></div>'),t=$('<div id="searchOverlay"><div class="searchBar">Search Haus Alpenz: <input id="searchBox" /></div><span id="dismissSearchOverlay"><img src="gfx/dismiss.png" height="18" width="18" /></span><div id="searchResults"></div></div>');$("#regularContent").append(e),$("#regularContent").append(t),e.click(function(){dismissSearchOverlay()}),$("#dismissSearchOverlay").click(function(){dismissSearchOverlay()}),$("#searchBox").focus(),
// dynamic search binding (keyup-based)
$("#searchBox").keyup(function(){var n=$("#searchBox").val(),e=n.toLowerCase().split(" ")[0],i=$("#searchResults");i.hide(),1<n.length&&$.getJSON("/search/"+n,function(e){if(
// window.console.log(msg);
i.empty(),0<e.length){i.append($("<p>"+e.length+" matches</p>"));
// list results
for(var t=0;t<e.length;t++)e[t].icons?i.append($('<a href="'+e[t].url+'"><div class="match clr"><div class="icons">'+e[t].icons+'</div><div class="summary"><p><strong>'+e[t].name+"</strong><br />"+e[t].summary+"</p></div></div></a>")):i.append($('<a href="'+e[t].url+'"><div class="match clr"><div class="summary"><p><strong>'+e[t].name+"</strong><br />"+e[t].summary+"</p></div></div></a>"));i.show()}else 0<n.length&&(i.append($('<p><a href=""><em>No matches. Try searching on the first few letters of a product or category.</em></a></p>')),i.show())})})}// @codekit-prepend "page.js";
function setCookie(e,t,n){var i="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+i+"; path=/"}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function scrapeFilters(){var e=[],t;0<$("#ingredientChooser").val().length&&e.push("."+$("#ingredientChooser").val()),0<$("#licenseChooser").val().length&&e.push("."+$("#licenseChooser").val());for(var n=1;n<$("fieldset").length+1;n++)t="",$("#filtergroup"+n+" input:checked").each(function(){t=0<t.length?t+", ."+$(this).val().replace(" ","_").replace("/","_"):"."+$(this).val().replace(" ","_").replace("/","_")}),0<t.length&&e.push(t);
// cookie!
return setCookie("harecipesform",e.join(),7),e}function restoreFilters(e){$.each(e.split(","),function(e,t){1==t.indexOf("iid")?$("#ingredientChooser").val(t.slice(1)):1==t.indexOf("license_")?$("#licenseChooser").val(t.slice(1)):$("input[name="+t.slice(1)+"]").each(function(){$(this).prop("checked",!0)})})}function resetFilters(){$("input").prop("checked",!1),$("#ingredientChooser").val(""),$("#licenseChooser").val(""),eraseCookie("harecipesform")}function refilterRecipes(){var e=scrapeFilters();if(0===e.length){$(".recipeSummaries tr").show(),$("#matchesAnnotation").text($(".recipeSummaries tr").length+" recipes"),
// impose tabular nav
$("#tabularnav").empty();var n=[];$.each($(".recipeSummaries tr"),function(e,t){-1==n.indexOf($(t).data("tabularletter"))&&(n.push($(t).data("tabularletter")),$(t).attr("id","letter_"+$(t).data("tabularletter")))});for(var t=0;t<n.length;t++)$("#tabularnav").append('<a href="#letter_'+n[t]+'">'+n[t]+"</a> ")}else{var i=$(".recipeSummaries tr");i.hide();for(var o=0;o<e.length;o++)i=i.filter($(e[o]));if(i.show(),1<i.length?($("#matchesAnnotation").text(i.length+" matches out of "+$(".recipeSummaries tr").length),$("#matchesAnnotation").append($('<a class="inlineButton" style="margin-left: 1em; cursor: pointer;">RESET / SHOW ALL</a>'))):$("#matchesAnnotation").text(i.length+" match out of "+$(".recipeSummaries tr").length),
// impose tabular nav (if at least sixteen matches)
$("#tabularnav").empty(),16<i.length){
// build tab links	
var n=[];$.each(i,function(e,t){-1==n.indexOf($(t).data("tabularletter"))&&(n.push($(t).data("tabularletter")),$(t).attr("id","letter_"+$(t).data("tabularletter")))});for(var t=0;t<n.length;t++)$("#tabularnav").append('<a href="#letter_'+n[t]+'">'+n[t]+"</a> ")}}}!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";var e;return function(m,o,e,t){
/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var h={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){h.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){h.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(h.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}
/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/},
/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
detectFeatures:function(){if(h.features)return h.features;var e,t=h.createEl().style,n="",i={};
// IE8 and below
// fix false-positive detection of old Android in new IE
// (IE11 ua string contains "Android 4.0")
if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var o=navigator.userAgent;
// Detect if device is iPhone or iPod and if it's older than iOS 8
// http://stackoverflow.com/a/14223920
// 
// This detection is made because of buggy top/bottom toolbars
// that don't trigger window.resize event.
// For more info refer to _isFixedPosition variable in core.js
if(/iP(hone|od)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);a&&0<a.length&&1<=(a=parseInt(a[1],10))&&a<8&&(i.isOldIOSPhone=!0)}
// Detect old Android (before KitKat)
// due to bugs related to position:fixed
// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
var r=o.match(/Android\s([0-9\.]*)/),l=r?r[1]:0;1<=(l=parseFloat(l))&&(l<4.4&&(i.isOldAndroid=!0),i.androidVersion=l),i.isMobileOpera=/opera mini|opera mobi/i.test(o)}for(var s=["transform","perspective","animationName"],c=["","webkit","Moz","ms","O"],u,d,p=0;p<4;p++){n=c[p];for(var m=0;m<3;m++)u=s[m],
// uppercase first letter of property name, if vendor is present
d=n+(n?u.charAt(0).toUpperCase()+u.slice(1):u),!i[u]&&d in t&&(i[u]=d);n&&!i.raf&&(n=n.toLowerCase(),i.raf=window[n+"RequestAnimationFrame"],i.raf&&(i.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!i.raf){var f=0;i.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-f)),i=window.setTimeout(function(){e(t+n)},n);return f=t+n,i},i.caf=function(e){clearTimeout(e)}}
// Detect SVG support
return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,h.features=i}};h.detectFeatures(),
// Override addEventListener for old versions of IE
h.features.oldIE&&(h.bind=function(e,t,n,i){t=t.split(" ");for(var o=(i?"detach":"attach")+"Event",a,r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(a=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+a])return!1}else n["oldIE"+a]=r;e[o]("on"+a,n["oldIE"+a])}else e[o]("on"+a,n)});
/*>>framework-bridge*/
/*>>core*/
//function(template, UiClass, items, options)
var f=this,n=25,i=3,g={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,
// not fully implemented yet
scaleMode:"fit"};
/**
 * Static vars, don't change unless you know what you're doing.
 */h.extend(g,t);
/**
 * Private helper variables & functions
 */
var a=function(){return{x:0,y:0}},s,r,v,y,l,c,u={x:0,y:0},d={x:0,y:0},x={x:0,y:0},p,// drag move, drag end & drag cancel events array
w,// drag start events array
b,C={},I,T,S,E,k,D,_=0,O={},F={x:0,y:0},// size of slide area, including spacing
$,A,M=0,// difference of indexes since last content update
R,L,P,Z,z,N,U=!0,B,K=[],H,W,Y,G,q,V,X,j={},Q=!1,
// Registers PhotoSWipe module (History, Controller ...)
J=function(e,t){h.extend(f,t.publicMethods),K.push(e)},ee=function(e){var t=on();return t-1<e?e-t:e<0?t+e:e},
// Micro bind/trigger
te={},ne=function(e,t){return te[e]||(te[e]=[]),te[e].push(t)},ie=function(e){var t=te[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(f,n)}},oe=function(){return(new Date).getTime()},ae=function(e){yt=e,f.bg.style.opacity=e*g.bgOpacity},re=function(e,t,n,i,o){(!Q||o&&o!==f.currItem)&&(i/=o?o.fitRatio:f.currItem.fitRatio),e[z]=S+t+"px, "+n+"px"+E+" scale("+i+")"},le=function(e){dt&&(e&&(I>f.currItem.fitRatio?Q||(pn(f.currItem,!1,!0),Q=!0):Q&&(pn(f.currItem),Q=!1)),re(dt,x.x,x.y,I))},se=function(e){e.container&&re(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},ce=function(e,t){t[z]=S+e+"px, 0px"+E},ue=function(e,t){if(!g.loop&&t){var n=y+(F.x*_-e)/F.x,i=Math.round(e-ut.x);(n<0&&0<i||n>=on()-1&&i<0)&&(e=ut.x+i*g.mainScrollEndFriction)}ut.x=e,ce(e,l)},de=function(e,t){var n=mt[e]-O[e];return d[e]+u[e]+n-n*(t/T)},pe=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},me=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},fe=null,he=function(){
// Wait until mouse move event is fired at least twice during 100ms
// We do this, because some mobile browsers trigger it on touchstart
fe&&(h.unbind(document,"mousemove",he),h.addClass(m,"pswp--has_mouse"),g.mouseUsed=!0,ie("mouseUsed")),fe=setTimeout(function(){fe=null},100)},ge=function(){h.bind(document,"keydown",f),X.transform&&
// don't bind click event in browsers that don't support transform (mostly IE8)
h.bind(f.scrollWrap,"click",f),g.mouseUsed||h.bind(document,"mousemove",he),h.bind(window,"resize scroll",f),ie("bindEvents")},ve=function(){h.unbind(window,"resize",f),h.unbind(window,"scroll",b.scroll),h.unbind(document,"keydown",f),h.unbind(document,"mousemove",he),X.transform&&h.unbind(f.scrollWrap,"click",f),Je&&h.unbind(window,p,f),ie("unbindEvents")},ye=function(e,t){var n=sn(f.currItem,C,e);return t&&(ct=n),n},xe=function(e){return e||(e=f.currItem),e.initialZoomLevel},we=function(e){return e||(e=f.currItem),0<e.w?g.maxSpreadZoom:1},
// Return true if offset is out of the bounds
be=function(e,t,n,i){return i===f.currItem.initialZoomLevel?(n[e]=f.currItem.initialPosition[e],!0):(n[e]=de(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))},Ce=function(){if(z){
// setup 3d transforms
var e=X.perspective&&!B;return S="translate"+(e?"3d(":"("),void(E=X.perspective?", 0px)":")")}
// Override zoom/pan/move functions in case old browser is used (most likely IE)
// (so they use left/top/width/height, instead of CSS transform)
z="left",h.addClass(m,"pswp--ie"),ce=function(e,t){t.left=e+"px"},se=function(e){var t=1<e.fitRatio?1:e.fitRatio,n=e.container.style,i=t*e.w,o=t*e.h;n.width=i+"px",n.height=o+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},le=function(){if(dt){var e=dt,t=f.currItem,n=1<t.fitRatio?1:t.fitRatio,i=n*t.w,o=n*t.h;e.width=i+"px",e.height=o+"px",e.left=x.x+"px",e.top=x.y+"px"}}},Ie=function(e){var t="";g.escKey&&27===e.keyCode?t="close":g.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(
// don't do anything if special key pressed to prevent from overriding default browser actions
// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,f[t]()))},Te=function(e){e&&(nt||tt||pt||qe)&&(e.preventDefault(),e.stopPropagation());
// don't allow click event to pass through when triggering after drag or some other gesture
},Se=function(){f.setScrollOffset(0,h.getScrollY())},Ee={},ke=0,De=function(e){Ee[e]&&(Ee[e].raf&&W(Ee[e].raf),ke--,delete Ee[e])},_e=function(e){Ee[e]&&De(e),Ee[e]||(ke++,Ee[e]={})},Oe=function(){for(var e in Ee)Ee.hasOwnProperty(e)&&De(e)},Fe=function(e,t,n,i,o,a,r){var l=oe(),s;_e(e);var c=function(){if(Ee[e]){// time diff
//b - beginning (start prop)
//d - anim duration
if(s=oe()-l,i<=s)return De(e),a(n),void(r&&r());a((n-t)*o(s/i)+t),Ee[e].raf=H(c)}};c()},$e={
// make a few local variables and functions public
shout:ie,listen:ne,viewportSize:C,options:g,isMainScrollAnimating:function(){return pt},getZoomLevel:function(){return I},getCurrentIndex:function(){return y},isDragging:function(){return Je},isZooming:function(){return rt},setScrollOffset:function(e,t){O.x=e,V=O.y=t,ie("updateScrollOffset",O)},applyZoomPan:function(e,t,n,i){x.x=t,x.y=n,I=e,le(i)},init:function(){if(!s&&!r){var e;f.framework=h,// basic functionality
f.template=m,// root DOM element of PhotoSwipe
f.bg=h.getChildByClass(m,"pswp__bg"),Y=m.className,s=!0,X=h.detectFeatures(),H=X.raf,W=X.caf,z=X.transform,q=X.oldIE,f.scrollWrap=h.getChildByClass(m,"pswp__scroll-wrap"),f.container=h.getChildByClass(f.scrollWrap,"pswp__container"),l=f.container.style,// for fast access
// Objects that hold slides (there are only 3 in DOM)
f.itemHolders=$=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],
// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
$[0].el.style.display=$[2].el.style.display="none",Ce(),
// Setup global events
b={resize:f.updateSize,scroll:Se,keydown:Ie,click:Te};
// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
var t=X.isOldIOSPhone||X.isOldAndroid||X.isMobileOpera,n;
// init modules
for(X.animationName&&X.transform&&!t||(g.showAnimationDuration=g.hideAnimationDuration=0),e=0;e<K.length;e++)f["init"+K[e]]();
// init
if(o)(f.ui=new o(f,h)).init();ie("firstUpdate"),y=y||g.index||0,
// validate index
(isNaN(y)||y<0||y>=on())&&(y=0),f.currItem=nn(y),(X.isOldIOSPhone||X.isOldAndroid)&&(U=!1),m.setAttribute("aria-hidden","false"),g.modal&&(U?m.style.position="fixed":(m.style.position="absolute",m.style.top=h.getScrollY()+"px")),void 0===V&&(ie("initialLayout"),V=G=h.getScrollY());
// add classes to root element of PhotoSwipe
var i="pswp--open ";for(g.mainClass&&(i+=g.mainClass+" "),g.showHideOpacity&&(i+="pswp--animate_opacity "),i+=B?"pswp--touch":"pswp--notouch",i+=X.animationName?" pswp--css_animation":"",i+=X.svg?" pswp--svg":"",h.addClass(m,i),f.updateSize(),
// initial update
c=-1,M=null,e=0;e<3;e++)ce((e+c)*F.x,$[e].el.style);q||h.bind(f.scrollWrap,w,f),ne("initialZoomInEnd",function(){f.setContent($[0],y-1),f.setContent($[2],y+1),$[0].el.style.display=$[2].el.style.display="block",g.focus&&
// focus causes layout, 
// which causes lag during the animation, 
// that's why we delay it untill the initial zoom transition ends
m.focus(),ge()}),
// set content for center slide (first time)
f.setContent($[1],y),f.updateCurrItem(),ie("afterInit"),U||(
// On all versions of iOS lower than 8.0, we check size of viewport every second.
// 
// This is done to detect when Safari top & bottom bars appear, 
// as this action doesn't trigger any events (like resize). 
// 
// On iOS8 they fixed this.
// 
// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
k=setInterval(function(){ke||Je||rt||I!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),h.addClass(m,"pswp--visible")}},
// Close the gallery, then destroy it
close:function(){s&&(r=!(s=!1),ie("close"),ve(),Vt(f.currItem,null,!0,f.destroy))},
// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
destroy:function(){ie("destroy"),qt&&clearTimeout(qt),m.setAttribute("aria-hidden","true"),m.className=Y,k&&clearInterval(k),h.unbind(f.scrollWrap,w,f),
// we unbind scroll event at the end, as closing animation may depend on it
h.unbind(window,"scroll",f),It(),Oe(),te=null},
/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
panTo:function(e,t,n){n||(e>ct.min.x?e=ct.min.x:e<ct.max.x&&(e=ct.max.x),t>ct.min.y?t=ct.min.y:t<ct.max.y&&(t=ct.max.y)),x.x=e,x.y=t,le()},handleEvent:function(e){e=e||window.event,b[e.type]&&b[e.type](e)},goTo:function(e){var t=(e=ee(e))-y;M=t,y=e,f.currItem=nn(y),_-=t,ue(F.x*_),Oe(),pt=!1,f.updateCurrItem()},next:function(){f.goTo(y+1)},prev:function(){f.goTo(y-1)},
// update current zoom/pan objects
updateCurrZoomItem:function(e){
// itemHolder[1] is middle (current) item
if(e&&ie("beforeChange",0),$[1].el.children.length){var t=$[1].el.children[0];dt=h.hasClass(t,"pswp__zoom-wrap")?t.style:null}else dt=null;ct=f.currItem.bounds,T=I=f.currItem.initialZoomLevel,x.x=ct.center.x,x.y=ct.center.y,e&&ie("afterChange")},invalidateCurrItems:function(){D=!0;for(var e=0;e<3;e++)$[e].item&&($[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==M){var t=Math.abs(M),n;if(!(e&&t<2)){f.currItem=nn(y),Q=!1,ie("beforeChange",M),3<=t&&(c+=M+(0<M?-3:3),t=3);for(var i=0;i<t;i++)0<M?(n=$.shift(),$[2]=n,ce((// move first to last
++c+2)*F.x,n.el.style),f.setContent(n,y-t+i+1+1)):(n=$.pop(),$.unshift(n),ce(// move last to first
--c*F.x,n.el.style),f.setContent(n,y+t-i-1-1));
// reset zoom/pan on previous item
if(dt&&1===Math.abs(M)){var o=nn(A);o.initialZoomLevel!==I&&(sn(o,C),pn(o),se(o))}
// reset diff after update
M=0,f.updateCurrZoomItem(),A=y,ie("afterChange")}}},updateSize:function(e){if(!U&&g.modal){var t=h.getScrollY();if(V!==t&&(m.style.top=t+"px",V=t),!e&&j.x===window.innerWidth&&j.y===window.innerHeight)return;j.x=window.innerWidth,j.y=window.innerHeight,
//template.style.width = _windowVisibleSize.x + 'px';
m.style.height=j.y+"px"}// even may be used for example to switch image sources
// don't re-calculate size on inital size update
if(C.x=f.scrollWrap.clientWidth,C.y=f.scrollWrap.clientHeight,Se(),F.x=C.x+Math.round(C.x*g.spacing),F.y=C.y,ue(F.x*_),ie("beforeResize"),void 0!==c){for(var n,i,o,a=0;a<3;a++)n=$[a],ce((a+c)*F.x,n.el.style),o=y+a-1,g.loop&&2<on()&&(o=ee(o)),
// re-render gallery item if `needsUpdate`,
// or doesn't have `bounds` (entirely new slide object)
(
// update zoom level on items and refresh source (if needsUpdate)
i=nn(o))&&(D||i.needsUpdate||!i.bounds)?(f.cleanSlide(i),f.setContent(n,o),
// if "center" slide
1===a&&(f.currItem=i,f.updateCurrZoomItem(!0)),i.needsUpdate=!1):-1===n.index&&0<=o&&
// add content first time
f.setContent(n,o),i&&i.container&&(sn(i,C),pn(i),se(i));D=!1}T=I=f.currItem.initialZoomLevel,(ct=f.currItem.bounds)&&(x.x=ct.center.x,x.y=ct.center.y,le(!0)),ie("resize")},
// Zoom current item to
zoomTo:function(t,e,n,i,o){
/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/
e&&(T=I,mt.x=Math.abs(e.x)-x.x,mt.y=Math.abs(e.y)-x.y,pe(d,x));var a=ye(t,!1),r={};be("x",a,r,t),be("y",a,r,t);var l=I,s=x.x,c=x.y;me(r);var u=function(e){x.y=1===e?(I=t,x.x=r.x,r.y):(I=(t-l)*e+l,x.x=(r.x-s)*e+s,(r.y-c)*e+c),o&&o(e),le(1===e)};n?Fe("customZoomTo",0,1,n,i||h.easing.sine.inOut,u):u(1)}},Ae=30,Me=10,Re,Le,
// pool of objects that are used during dragging of zooming
Pe={},// first point
Ze={},// second point (for zoom gesture)
ze={},Ne={},Ue={},Be=[],Ke={},He,We=[],// array of points during dragging, used to determine type of gesture
Ye={},Ge,qe,Ve,Xe=0,je={x:0,y:0},Qe=0,Je,// at least one pointer is down
et,// at least two _pointers are down
tt,// zoom level changed during zoom gesture
nt,it,ot,at,// array of current touch points
rt,lt,st,ct,ut={x:0,y:0},dt,pt,// true, if animation after swipe gesture is running
mt={x:0,y:0},ft={x:0,y:0},ht,gt,vt,yt,xt,wt=function(e,t){return e.x===t.x&&e.y===t.y},bt=function(e,t){return Math.abs(e.x-t.x)<n&&Math.abs(e.y-t.y)<n},Ct=function(e,t){return Ye.x=Math.abs(e.x-t.x),Ye.y=Math.abs(e.y-t.y),Math.sqrt(Ye.x*Ye.x+Ye.y*Ye.y)},It=function(){it&&(W(it),it=null)},Tt=function(){Je&&(it=H(Tt),Ut())},St=function(){return!("fit"===g.scaleMode&&I===f.currItem.initialZoomLevel)},
// find the closest parent DOM element
Et=function(e,t){return!(!e||e===document)&&(
// don't search elements above pswp__scroll-wrap
!(e.getAttribute("class")&&-1<e.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(t(e)?e:Et(e.parentNode,t)))},kt={},Dt=function(e,t){return kt.prevent=!Et(e.target,g.isClickableElement),ie("preventDragEvent",e,t,kt),kt.prevent},_t=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Ot=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Ft=function(e,t,n){if(50<e-Le){var i=2<We.length?We.shift():{};i.x=t,i.y=n,We.push(i),Le=e}},$t=function(){var e=x.y-f.currItem.initialPosition.y;// difference between initial and current position
return 1-Math.abs(e/(C.y/2))},
// points pool, reused during touch events
At={},Mt={},Rt=[],Lt,Pt=function(e){
// clean up previous points, without recreating array
for(;0<Rt.length;)Rt.pop();return N?(Lt=0,
// we can use forEach, as pointer events are supported only in modern browsers
Be.forEach(function(e){0===Lt?Rt[0]=e:1===Lt&&(Rt[1]=e),Lt++})):-1<e.type.indexOf("touch")?e.touches&&0<e.touches.length&&(Rt[0]=_t(e.touches[0],At),1<e.touches.length&&(Rt[1]=_t(e.touches[1],Mt))):(At.x=e.pageX,At.y=e.pageY,At.id="",Rt[0]=At),Rt},Zt=function(e,t){var n,i=0,o=x[e]+t[e],a,r=0<t[e],l=ut.x+t.x,s=ut.x-Ke.x,c,u;
// calculate fdistance over the bounds and friction
// move main scroll or start panning
if(n=o>ct.min[e]||o<ct.max[e]?g.panEndFriction:1,o=x[e]+t[e]*n,(g.allowPanToNext||I===f.currItem.initialZoomLevel)&&(dt?"h"!==ht||"x"!==e||tt||(r?(o>ct.min[e]&&(n=g.panEndFriction,i=ct.min[e]-o,a=ct.min[e]-d[e]),
// drag right
(a<=0||s<0)&&1<on()?(u=l,s<0&&l>Ke.x&&(u=Ke.x)):ct.min.x!==ct.max.x&&(c=o)):(o<ct.max[e]&&(n=g.panEndFriction,i=o-ct.max[e],a=d[e]-ct.max[e]),(a<=0||0<s)&&1<on()?(u=l,0<s&&l<Ke.x&&(u=Ke.x)):ct.min.x!==ct.max.x&&(c=o))):u=l,"x"===e))return void 0!==u&&(ue(u,!0),ot=u!==Ke.x),ct.min.x!==ct.max.x&&(void 0!==c?x.x=c:ot||(x.x+=t.x*n)),void 0!==u;pt||ot||I>f.currItem.fitRatio&&(x[e]+=t[e]*n)},
// Pointerdown/touchstart/mousedown handler
zt=function(e){
// Allow dragging only via left mouse button.
// As this handler is not added in IE8 - we ignore e.which
// 
// http://www.quirksmode.org/js/events_properties.html
// https://developer.mozilla.org/en-US/docs/Web/API/event.button
if(!("mousedown"===e.type&&0<e.button))if(en)e.preventDefault();else if(!Ve||"mousedown"!==e.type){if(Dt(e,!0)&&e.preventDefault(),ie("pointerDown"),N){var t=h.arraySearch(Be,e.pointerId,"id");t<0&&(t=Be.length),Be[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=Pt(e),i=n.length;at=null,Oe(),
// init drag
Je&&1!==i||(Je=gt=!0,h.bind(window,p,f),Ge=xt=vt=qe=ot=nt=et=tt=!1,ht=null,ie("firstTouchStart",n),pe(d,x),u.x=u.y=0,pe(Ne,n[0]),pe(Ue,Ne),
//_equalizePoints(_startMainScrollPos, _mainScrollPos);
Ke.x=F.x*_,We=[{x:Ne.x,y:Ne.y}],Le=Re=oe(),
//_mainScrollAnimationEnd(true);
ye(I,!0),
// Start rendering
It(),Tt()),
// init zoom
!rt&&1<i&&!pt&&!ot&&(T=I,// true if zoom changed at least once
rt=et=!(tt=!1),u.y=u.x=0,pe(d,x),pe(Pe,n[0]),pe(Ze,n[1]),Ot(Pe,Ze,ft),mt.x=Math.abs(ft.x)-x.x,mt.y=Math.abs(ft.y)-x.y,lt=st=Ct(Pe,Ze))}},
// Pointermove/touchmove/mousemove handler
Nt=function(e){if(e.preventDefault(),N){var t=h.arraySearch(Be,e.pointerId,"id");if(-1<t){var n=Be[t];n.x=e.pageX,n.y=e.pageY}}if(Je){var i=Pt(e);if(ht||nt||rt)at=i;else if(ut.x!==F.x*_)
// if main scroll position is shifted – direction is always horizontal
ht="h";else{var o=Math.abs(i[0].x-Ne.x)-Math.abs(i[0].y-Ne.y);
// check the direction of movement
10<=Math.abs(o)&&(ht=0<o?"h":"v",at=i)}}},
// 
Ut=function(){if(at){var e=at.length;if(0!==e)if(pe(Pe,at[0]),ze.x=Pe.x-Ne.x,ze.y=Pe.y-Ne.y,rt&&1<e){
// check if one of two points changed
if(
// Handle behaviour for more than 1 point
Ne.x=Pe.x,Ne.y=Pe.y,!ze.x&&!ze.y&&wt(at[1],Ze))return;pe(Ze,at[1]),tt||(tt=!0,ie("zoomGestureStarted"));
// Distance between two points
var t=Ct(Pe,Ze),n=Yt(t);
// slightly over the of initial zoom level
n>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(xt=!0);
// Apply the friction if zoom level is out of the bounds
var i=1,o=xe(),a=we();if(n<o)if(g.pinchToClose&&!xt&&T<=f.currItem.initialZoomLevel){
// fade out background if zooming out
var r,l=1-(o-n)/(o/1.2);ae(l),ie("onPinchClose",l),vt=!0}else 1<(i=(o-n)/o)&&(i=1),n=o-i*(o/3);else a<n&&(
// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
1<(i=(n-a)/(6*o))&&(i=1),n=a+i*o);i<0&&(i=0),
// distance between touch points after friction is applied
lt=t,
// _centerPoint - The point in the middle of two pointers
Ot(Pe,Ze,je),
// paning with two pointers pressed
u.x+=je.x-ft.x,u.y+=je.y-ft.y,pe(ft,je),x.x=de("x",n),x.y=de("y",n),Ge=I<n,I=n,le()}else{
// handle behaviour for one point (dragging or panning)
if(!ht)return;
// do nothing if pointers position hasn't changed
if(gt&&(gt=!1,
// subtract drag distance that was used during the detection direction  
10<=Math.abs(ze.x)&&(ze.x-=at[0].x-Ue.x),10<=Math.abs(ze.y)&&(ze.y-=at[0].y-Ue.y)),Ne.x=Pe.x,Ne.y=Pe.y,0===ze.x&&0===ze.y)return;if("v"===ht&&g.closeOnVerticalDrag&&!St()){u.y+=ze.y,x.y+=ze.y;var s=$t();return qe=!0,ie("onVerticalDrag",s),ae(s),void le()}var c;Ft(oe(),Pe.x,Pe.y),nt=!0,ct=f.currItem.bounds,Zt("x",ze)||(Zt("y",ze),me(x),le())}}},
// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
Bt=function(e){if(X.isOldAndroid){if(Ve&&"mouseup"===e.type)return;
// on Android (v4.1, 4.2, 4.3 & possibly older) 
// ghost mousedown/up event isn't preventable via e.preventDefault,
// which causes fake mousedown event
// so we block mousedown/up for 600ms
-1<e.type.indexOf("touch")&&(clearTimeout(Ve),Ve=setTimeout(function(){Ve=0},600))}var t;if(ie("pointerUp"),Dt(e,!1)&&e.preventDefault(),N){var n=h.arraySearch(Be,e.pointerId,"id");if(-1<n)if(t=Be.splice(n,1)[0],navigator.pointerEnabled)t.type=e.pointerType||"mouse";else{var i={4:"mouse",// event.MSPOINTER_TYPE_MOUSE
2:"touch",// event.MSPOINTER_TYPE_TOUCH 
3:"pen"};t.type=i[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}}var o=Pt(e),a,r=o.length;
// Do nothing if there were 3 touch points or more
if("mouseup"===e.type&&(r=0),2===r)return!(at=null);
// if second pointer released
1===r&&pe(Ue,o[0]),
// pointer hasn't moved, send "tap release" point
0!==r||ht||pt||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),ie("touchRelease",e,t));
// Difference in time between releasing of two last touch points (zoom gesture)
var l=-1;
// Gesture completed, no pointers left
if(0===r&&(Je=!1,h.unbind(window,p,f),It(),rt?
// Two points released at the same time
l=0:-1!==Qe&&(l=oe()-Qe)),Qe=1===r?oe():-1,a=-1!==l&&l<150?"zoom":"swipe",rt&&r<2&&(rt=!1,
// Only second point released
1===r&&(a="zoomPointerUp"),ie("zoomGestureEnded")),at=null,nt||tt||pt||qe)if(Oe(),He||(He=Kt()),He.calculateSwipeSpeed("x"),qe){var s;if($t()<g.verticalDragRange)f.close();else{var c=x.y,u=yt;Fe("verticalDrag",0,1,300,h.easing.cubic.out,function(e){x.y=(f.currItem.initialPosition.y-c)*e+c,ae((1-u)*e+u),le()}),ie("onVerticalDrag",1)}}
// main scroll 
else{if((ot||pt)&&0===r){var d;if(Wt(a,He))return;a="zoomPointerUp"}
// prevent zoom/pan animation when main scroll animation runs
pt||(
// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
"swipe"===a?
// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
!ot&&I>f.currItem.fitRatio&&Ht(He):Gt())}},
// Returns object with data about gesture
// It's created only once and then reused
Kt=function(){
// temp local vars
var t,n,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){n=1<We.length?(t=oe()-Le+50,We[We.length-2][e]):(t=oe()-Re,Ue[e]),i.lastFlickOffset[e]=Ne[e]-n,i.lastFlickDist[e]=Math.abs(i.lastFlickOffset[e]),20<i.lastFlickDist[e]?i.lastFlickSpeed[e]=i.lastFlickOffset[e]/t:i.lastFlickSpeed[e]=0,Math.abs(i.lastFlickSpeed[e])<.1&&(i.lastFlickSpeed[e]=0),i.slowDownRatio[e]=.95,i.slowDownRatioReverse[e]=1-i.slowDownRatio[e],i.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(x[t]>ct.min[t]?i.backAnimDestination[t]=ct.min[t]:x[t]<ct.max[t]&&(i.backAnimDestination[t]=ct.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,Fe("bounceZoomPan"+t,x[t],i.backAnimDestination[t],e||300,h.easing.sine.out,function(e){x[t]=e,le()}))))},
// Reduces the speed by slowDownRatio (per 10ms)
calculateAnimOffset:function(e){i.backAnimStarted[e]||(i.speedDecelerationRatio[e]=i.speedDecelerationRatio[e]*(i.slowDownRatio[e]+i.slowDownRatioReverse[e]-i.slowDownRatioReverse[e]*i.timeDiff/10),i.speedDecelerationRatioAbs[e]=Math.abs(i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]),i.distanceOffset[e]=i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]*i.timeDiff,x[e]+=i.distanceOffset[e])},panAnimLoop:function(){if(Ee.zoomPan&&(Ee.zoomPan.raf=H(i.panAnimLoop),i.now=oe(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),le(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05))
// round pan position
return x.x=Math.round(x.x),x.y=Math.round(x.y),le(),void De("zoomPan")}};
// s = this
return i},Ht=function(e){
// Avoid acceleration animation if speed is too low
if(
// calculate swipe speed for Y axis (paanning)
e.calculateSwipeSpeed("y"),ct=f.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05)return e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,
// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0;
// Animation loop that controls the acceleration after pan gesture ends
_e("zoomPan"),e.lastNow=oe(),e.panAnimLoop()},Wt=function(e,t){var n,i,o;if(pt||(Xe=y),"swipe"===e){var a=Ne.x-Ue.x,r=t.lastFlickDist.x<10;
// if container is shifted for more than MIN_SWIPE_DISTANCE, 
// and last flick gesture was in right direction
30<a&&(r||20<t.lastFlickOffset.x)?
// go to prev item
i=-1:a<-30&&(r||t.lastFlickOffset.x<-20)&&(
// go to next item
i=1)}i&&((y+=i)<0?(y=g.loop?on()-1:0,o=!0):y>=on()&&(y=g.loop?0:on()-1,o=!0),o&&!g.loop||(M+=i,_-=i,n=!0));var l=F.x*_,s=Math.abs(l-ut.x),c;return c=n||l>ut.x==0<t.lastFlickSpeed.x?(c=0<Math.abs(t.lastFlickSpeed.x)?s/Math.abs(t.lastFlickSpeed.x):333,c=Math.min(c,400),Math.max(c,250)):333,Xe===y&&(n=!1),pt=!0,ie("mainScrollAnimStart"),Fe("mainScroll",ut.x,l,c,h.easing.cubic.out,ue,function(){Oe(),pt=!1,Xe=-1,(n||Xe!==y)&&f.updateCurrItem(),ie("mainScrollAnimComplete")}),n&&f.updateCurrItem(!0),n},Yt=function(e){return 1/st*e*T},
// Resets zoom if it's out of bounds
Gt=function(){var e=I,t=xe(),n=we();I<t?e=t:n<I&&(e=n);var i=1,o,a=yt;return vt&&!Ge&&!xt&&I<t?
//_closedByScroll = true;
f.close():(vt&&(o=function(e){ae((1-a)*e+a)}),f.zoomTo(e,0,200,h.easing.cubic.out,o)),!0};J("Gestures",{publicMethods:{initGestures:function(){
// helper function that builds touch/pointer/mouse events
var e=function(e,t,n,i,o){R=e+t,L=e+n,P=e+i,Z=o?e+o:""};(N=X.pointerEvent)&&X.touch&&(
// we don't need touch events, if browser supports pointer events
X.touch=!1),N?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):
// IE10 pointer events are case-sensitive
e("MSPointer","Down","Move","Up","Cancel"):X.touch?(e("touch","start","move","end","cancel"),B=!0):e("mouse","down","move","up"),p=L+" "+P+" "+Z,w=R,N&&!B&&(B=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),
// make variable public
f.likelyTouchDevice=B,b[R]=zt,b[L]=Nt,b[P]=Bt,// the Kraken
Z&&(b[Z]=b[P]),
// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
X.touch&&(w+=" mousedown",p+=" mousemove mouseup",b.mousedown=b[R],b.mousemove=b[L],b.mouseup=b[P]),B||(
// don't allow pan to next slide from zoomed state on Desktop
g.allowPanToNext=!1)}}});
/*>>gestures*/
/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */
var qt,Vt=function(s,e,c,t){
// dimensions of small thumbnail {x:,y:,w:}.
// Height is optional, as calculated based on large image.
var u;qt&&clearTimeout(qt),Jt=en=!0,s.initialLayout?(u=s.initialLayout,s.initialLayout=null):u=g.getThumbBoundsFn&&g.getThumbBoundsFn(y);var d=c?g.hideAnimationDuration:g.showAnimationDuration,p=function(){De("initialZoom"),c?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(ae(1),e&&(e.style.display="block"),h.addClass(m,"pswp--animated-in"),ie("initialZoom"+(c?"OutEnd":"InEnd"))),t&&t(),en=!1},n;
// if bounds aren't provided, just open gallery without animation
if(!d||!u||void 0===u.x)return ie("initialZoom"+(c?"Out":"In")),I=s.initialZoomLevel,pe(x,s.initialPosition),le(),m.style.opacity=c?0:1,ae(1),void(d?setTimeout(function(){p()},d):p());(function(){var r=v,l=!f.currItem.src||f.currItem.loadError||g.showHideOpacity;
// apply hw-acceleration to image
s.miniImg&&(s.miniImg.style.webkitBackfaceVisibility="hidden"),c||(I=u.w/s.w,x.x=u.x,x.y=u.y-G,f[l?"template":"bg"].style.opacity=.001,le()),_e("initialZoom"),c&&!r&&h.removeClass(m,"pswp--animated-in"),l&&(c?h[(r?"remove":"add")+"Class"](m,"pswp--animate_opacity"):setTimeout(function(){h.addClass(m,"pswp--animate_opacity")},30)),qt=setTimeout(function(){if(ie("initialZoom"+(c?"Out":"In")),c){
// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
var t=u.w/s.w,n=x.x,i=x.y,o=I,a=yt,e=function(e){x.y=1===e?(I=t,x.x=u.x,u.y-V):(I=(t-o)*e+o,x.x=(u.x-n)*e+n,(u.y-V-i)*e+i),le(),l?m.style.opacity=1-e:ae(a-e*a)};r?Fe("initialZoom",0,1,d,h.easing.cubic.out,e,p):(e(1),qt=setTimeout(p,d+20))}else
// "in" animation always uses CSS transitions (instead of rAF).
// CSS transition work faster here, 
// as developer may also want to animate other things, 
// like ui on top of sliding area, which can be animated just via CSS
I=s.initialZoomLevel,pe(x,s.initialPosition),le(),ae(1),l?m.style.opacity=1:ae(1),qt=setTimeout(p,d+20)},c?25:90)})()},Xt,jt={},Qt=[],Jt,en,tn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,// TODO
preload:[1,1],getNumItemsFn:function(){return Xt.length}},nn,on,an,rn=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},ln=function(e,t,n){var i=e.bounds;
// position of element when it's centered
i.center.x=Math.round((jt.x-t)/2),i.center.y=Math.round((jt.y-n)/2)+e.vGap.top,
// maximum pan position
i.max.x=t>jt.x?Math.round(jt.x-t):i.center.x,i.max.y=n>jt.y?Math.round(jt.y-n)+e.vGap.top:i.center.y,
// minimum pan position
i.min.x=t>jt.x?0:i.center.x,i.min.y=n>jt.y?e.vGap.top:i.center.y},sn=function(e,t,n){if(!e.src||e.loadError)
// if it's not image, we return zero bounds (content is not zoomable)
return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},e.initialPosition=e.bounds.center,e.bounds;var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),
// allows overriding vertical margin for individual items
ie("parseVerticalMargin",e)),jt.x=t.x,jt.y=t.y-e.vGap.top-e.vGap.bottom,i){var o=jt.x/e.w,a=jt.y/e.h;e.fitRatio=o<a?o:a;
//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;
var r=g.scaleMode;"orig"===r?n=1:"fit"===r&&(n=e.fitRatio),1<n&&(n=1),e.initialZoomLevel=n,e.bounds||(
// reuse bounds object
e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}return n?(ln(e,e.w*n,e.h*n),i&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds):void 0},cn=function(e,t,n,i,o,a){t.loadError||i&&(t.imageAppended=!0,pn(t,i,t===f.currItem&&Q),n.appendChild(i),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},un=function(e){e.loading=!0,e.loaded=!1;var t=e.img=h.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};// + '?a=' + Math.random();
return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},dn=function(e,t){if(e.src&&e.loadError&&e.container)return t&&(e.container.innerHTML=""),e.container.innerHTML=g.errorMsg.replace("%url%",e.src),!0},pn=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var i=n?e.w:Math.round(e.w*e.fitRatio),o=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=o+"px"),t.style.width=i+"px",t.style.height=o+"px"}},mn=function(){if(Qt.length){for(var e,t=0;t<Qt.length;t++)(e=Qt[t]).holder.index===e.index&&cn(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);Qt=[]}};
/*>>show-hide-transition*/
/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/J("Controller",{publicMethods:{lazyLoadItem:function(e){e=ee(e);var t=nn(e);t&&(!t.loaded&&!t.loading||D)&&(ie("gettingData",e,t),t.src&&un(t))},initController:function(){h.extend(g,tn,!0),f.items=Xt=e,nn=f.getItemAt,on=g.getNumItemsFn,//self.getNumItems;
an=g.loop,on()<3&&(g.loop=!1),ne("beforeChange",function(e){var t=g.preload,n=null===e||0<=e,i=Math.min(t[0],on()),o=Math.min(t[1],on()),a;for(a=1;a<=(n?o:i);a++)f.lazyLoadItem(y+a);for(a=1;a<=(n?i:o);a++)f.lazyLoadItem(y-a)}),ne("initialLayout",function(){f.currItem.initialLayout=g.getThumbBoundsFn&&g.getThumbBoundsFn(y)}),ne("mainScrollAnimComplete",mn),ne("initialZoomInEnd",mn),ne("destroy",function(){for(var e,t=0;t<Xt.length;t++)
// remove reference to DOM elements, for GC
(e=Xt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);Qt=null})},getItemAt:function(e){return 0<=e&&(void 0!==Xt[e]&&Xt[e])},allowProgressiveImg:function(){
// 1. Progressive image loading isn't working on webkit/blink 
//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
//    
// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
//    That's why it's disabled on touch devices (mainly because of swipe transition)
//    
// 3. Progressive image loading sometimes doesn't work in IE (up to 11).
// Don't allow progressive loading on non-large touch devices
return g.forceProgressiveLoading||!B||g.mouseUsed||1200<screen.width;
// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
},setContent:function(t,n){g.loop&&(n=ee(n));var e=f.getItemAt(t.index);e&&(e.container=null);var i=f.getItemAt(n),o;if(i){
// allow to override data
ie("gettingData",n,i),t.index=n;
// base container DIV is created only once for each of 3 holders
var a=(t.item=i).container=h.createEl("pswp__zoom-wrap");if(!i.src&&i.html&&(i.html.tagName?a.appendChild(i.html):a.innerHTML=i.html),dn(i),sn(i,C),!i.src||i.loadError||i.loaded)i.src&&!i.loadError&&(
// image object is created every time, due to bugs of image loading & delay when switching images
(o=h.createEl("pswp__img","img")).style.opacity=1,o.src=i.src,pn(i,o),cn(n,i,a,o,!0));else{if(i.loadComplete=function(e){
// gallery closed before image finished loading
if(s){
// check if holder hasn't changed while image was loading
if(t&&t.index===n){if(dn(e,!0))return e.loadComplete=e.img=null,sn(e,C),se(e),void(t.index===y&&
// recalculate dimensions
f.updateCurrZoomItem());e.imageAppended?
// remove preloader & mini-img
!en&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null):X.transform&&(pt||en)?Qt.push({item:e,baseDiv:a,img:e.img,index:n,holder:t,clearPlaceholder:!0}):cn(n,e,a,e.img,pt||en,!0)}e.loadComplete=null,e.img=null,// no need to store image element after it's added
ie("imageLoadComplete",n,e)}},h.features.transform){var r="pswp__img pswp__img--placeholder";r+=i.msrc?"":" pswp__img--placeholder--blank";var l=h.createEl(r,i.msrc?"img":"");i.msrc&&(l.src=i.msrc),pn(i,l),a.appendChild(l),i.placeholder=l}i.loading||un(i),f.allowProgressiveImg()&&(
// just append image
!Jt&&X.transform?Qt.push({item:i,baseDiv:a,img:i.img,index:n,holder:t}):cn(n,i,a,i.img,!0,!0))}Jt||n!==y?se(i):(dt=a.style,Vt(i,o||i.img)),t.el.innerHTML="",t.el.appendChild(a)}else t.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});
/*>>items-controller*/
/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */
var fn,hn={},gn=function(e,t,n){var i=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,o),e.target.dispatchEvent(i)},vn;J("Tap",{publicMethods:{initTap:function(){ne("firstTouchStart",f.onTapStart),ne("touchRelease",f.onTapRelease),ne("destroy",function(){hn={},fn=null})},onTapStart:function(e){1<e.length&&(clearTimeout(fn),fn=null)},onTapRelease:function(e,t){if(t&&!nt&&!et&&!ke){var n=t,i;if(fn&&(clearTimeout(fn),fn=null,bt(n,hn)))return void ie("doubleTap",n);if("mouse"===t.type)return void gn(e,t,"mouse");
// avoid double tap delay on buttons and elements that have class pswp__single-tap
if("BUTTON"===e.target.tagName.toUpperCase()||h.hasClass(e.target,"pswp__single-tap"))return void gn(e,t);pe(hn,n),fn=setTimeout(function(){gn(e,t),fn=null},300)}}}}),J("DesktopZoom",{publicMethods:{initDesktopZoom:function(){q||(B?
// if detected hardware touch support, we wait until mouse is used,
// and only then apply desktop-zoom features
ne("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(e){vn={};var t="wheel mousewheel DOMMouseScroll";ne("bindEvents",function(){h.bind(m,t,f.handleMouseWheel)}),ne("unbindEvents",function(){vn&&h.unbind(m,t,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var n,i=function(){f.mouseZoomedIn&&(h.removeClass(m,"pswp--zoomed-in"),f.mouseZoomedIn=!1),I<1?h.addClass(m,"pswp--zoom-allowed"):h.removeClass(m,"pswp--zoom-allowed"),o()},o=function(){n&&(h.removeClass(m,"pswp--dragging"),n=!1)};ne("resize",i),ne("afterChange",i),ne("pointerDown",function(){f.mouseZoomedIn&&(n=!0,h.addClass(m,"pswp--dragging"))}),ne("pointerUp",o),e||i()},handleMouseWheel:function(e){if(I<=f.currItem.fitRatio)return g.modal&&(!g.closeOnScroll||ke||Je?e.preventDefault():z&&2<Math.abs(e.deltaY)&&(
// close PhotoSwipe
// if browser supports transforms & scroll changed enough
v=!0,f.close())),!0;
// allow just one event to fire
if(e.stopPropagation(),
// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
vn.x=0,"deltaX"in e)1/* DOM_DELTA_LINE */===e.deltaMode?(
// 18 - average line height
vn.x=18*e.deltaX,vn.y=18*e.deltaY):(vn.x=e.deltaX,vn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(vn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?vn.y=-.16*e.wheelDeltaY:vn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;vn.y=e.detail}ye(I,!0);var t=x.x-vn.x,n=x.y-vn.y;
// only prevent scrolling in nonmodal mode when not at edges
(g.modal||t<=ct.min.x&&t>=ct.max.x&&n<=ct.min.y&&n>=ct.max.y)&&e.preventDefault(),
// TODO: use rAF instead of mousewheel?
f.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:C.x/2+O.x,y:C.y/2+O.y};var t=g.getDoubleTapZoom(!0,f.currItem),n=I===t;f.mouseZoomedIn=!n,f.zoomTo(n?f.currItem.initialZoomLevel:t,e,333),h[(n?"remove":"add")+"Class"](m,"pswp--zoomed-in")}}});
/*>>desktop-zoom*/
/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */
var yn={history:!0,galleryUID:1},xn,wn,bn,Cn,In,Tn,Sn,En,kn,Dn,_n,On,Fn=function(){return _n.hash.substring(1)},$n=function(){xn&&clearTimeout(xn),bn&&clearTimeout(bn)},
// pid - Picture index
// gid - Gallery index
An=function(){var e=Fn(),t={};if(e.length<5)// pid=1
return t;var n,i=e.split("&");for(n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(t[o[0]]=o[1])}if(g.galleryPIDs){
// detect custom pid in hash and search for it among the items collection
var a=t.pid;// if custom pid cannot be found, fallback to the first item
for(n=t.pid=0;n<Xt.length;n++)if(Xt[n].pid===a){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},Mn=function(){if(bn&&clearTimeout(bn),ke||Je)
// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
// that's why we update hash only when no animations running
bn=setTimeout(Mn,500);else{Cn?clearTimeout(wn):Cn=!0;var e=y+1,t=nn(y);t.hasOwnProperty("pid")&&(
// carry forward any custom pid assigned to the item
e=t.pid);var n=Sn+"&gid="+g.galleryUID+"&pid="+e;En||-1===_n.hash.indexOf(n)&&(Dn=!0);var i=_n.href.split("#")[0]+"#"+n;On?"#"+n!==window.location.hash&&history[En?"replaceState":"pushState"]("",document.title,i):En?_n.replace(i):_n.hash=n,En=!0,wn=setTimeout(function(){Cn=!1},60)}};J("History",{publicMethods:{initHistory:function(){if(h.extend(g,yn,!0),g.history){_n=window.location,En=kn=Dn=!1,Sn=Fn(),On="pushState"in history,-1<Sn.indexOf("gid=")&&(Sn=(Sn=Sn.split("&gid=")[0]).split("?gid=")[0]),ne("afterChange",f.updateURL),ne("unbindEvents",function(){h.unbind(window,"hashchange",f.onHashChange)});var e=function(){Tn=!0,kn||(Dn?history.back():Sn?_n.hash=Sn:On?
// remove hash from url without refreshing it or scrolling to top
history.pushState("",document.title,_n.pathname+_n.search):_n.hash=""),$n()};ne("unbindEvents",function(){v&&
// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
// this is done to keep the scroll position
e()}),ne("destroy",function(){Tn||e()}),ne("firstUpdate",function(){y=An().pid});var t=Sn.indexOf("pid=");-1<t&&"&"===(Sn=Sn.substring(0,t)).slice(-1)&&(Sn=Sn.slice(0,-1)),setTimeout(function(){s&&// hasn't destroyed yet
h.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){if(Fn()===Sn)return kn=!0,void f.close();Cn||(In=!0,f.goTo(An().pid),In=!1)},updateURL:function(){
// Delay the update of URL, to avoid lag during transition, 
// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
$n(),In||(En?xn=setTimeout(Mn,800):Mn())}}}),
/*>>history*/
h.extend(f,$e)}}),
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()}(this,function(){"use strict";var e;return function(i,l){var n=this,e=!1,o=!0,t,s,a,r,c,u,d,p=!0,m,f,h,g,v,y,x,w,b={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,// 2s
addCaptionHTMLFn:function(e,t/*, isFake */){return e.title?(t.children[0].innerHTML=e.title,!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return i.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return i.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},C,I,T=function(e){if(C)return!0;e=e||window.event,w.timeToIdle&&w.mouseUsed&&!f&&
// reset idle timer
L();for(var t,n,i=(e.target||e.srcElement).getAttribute("class")||"",o,a=0;a<H.length;a++)(n=H[a]).onTap&&-1<i.indexOf("pswp__"+n.name)&&(n.onTap(),o=!0);if(o){e.stopPropagation&&e.stopPropagation(),C=!0;
// Some versions of Android don't prevent ghost click event 
// when preventDefault() was called on touchstart and/or touchend.
// 
// This happens on v4.3, 4.2, 4.1, 
// older versions strangely work correctly, 
// but just in case we add delay on all of them)	
var r=l.features.isOldAndroid?600:30;I=setTimeout(function(){C=!1},r)}},S=function(){return!i.likelyTouchDevice||w.mouseUsed||screen.width>w.fitControlsWidth},E=function(e,t,n){l[(n?"add":"remove")+"Class"](e,"pswp__"+t)},
// add class when there is just one item in the gallery
// (by default it hides left/right arrows and 1ofX counter)
k=function(){var e=1===w.getNumItemsFn();e!==x&&(E(s,"ui--one-slide",e),x=e)},D=function(){E(d,"share-modal--hidden",p)},_=function(){return(p=!p)?(l.removeClass(d,"pswp__share-modal--fade-in"),setTimeout(function(){p&&D()},300)):(D(),setTimeout(function(){p||l.addClass(d,"pswp__share-modal--fade-in")},30)),p||F(),!1},O=function(e){var t=(e=e||window.event).target||e.srcElement;return i.shout("shareLinkClick",e,t),!!t.href&&(!!t.hasAttribute("download")||(window.open(t.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),p||_(),!1))},F=function(){for(var e="",t,n,i,o,a,r=0;r<w.shareButtons.length;r++)t=w.shareButtons[r],i=w.getImageURLForShare(t),o=w.getPageURLForShare(t),a=w.getTextForShare(t),e+='<a href="'+(n=t.url.replace("{{url}}",encodeURIComponent(o)).replace("{{image_url}}",encodeURIComponent(i)).replace("{{raw_image_url}}",i).replace("{{text}}",encodeURIComponent(a)))+'" target="_blank" class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>",w.parseShareButtonOut&&(e=w.parseShareButtonOut(t,e));d.children[0].innerHTML=e,d.children[0].onclick=O},$=function(e){for(var t=0;t<w.closeElClasses.length;t++)if(l.hasClass(e,"pswp__"+w.closeElClasses[t]))return!0},A,M,R=0,L=function(){clearTimeout(M),R=0,f&&n.setIdle(!1)},P=function(e){var t=(e=e||window.event).relatedTarget||e.toElement;t&&"HTML"!==t.nodeName||(clearTimeout(M),M=setTimeout(function(){n.setIdle(!0)},w.timeToIdleOutside))},Z=function(){w.fullscreenEl&&!l.features.isOldAndroid&&(t||(t=n.getFullscreenAPI()),t?(l.bind(document,t.eventK,n.updateFullscreen),n.updateFullscreen(),l.addClass(i.template,"pswp--supports-fs")):l.removeClass(i.template,"pswp--supports-fs"))},z=function(){
// Setup loading indicator
w.preloaderEl&&(N(!0),h("beforeChange",function(){clearTimeout(y),
// display loading indicator with delay
y=setTimeout(function(){i.currItem&&i.currItem.loading?(!i.allowProgressiveImg()||i.currItem.img&&!i.currItem.img.naturalWidth)&&
// show preloader if progressive loading is not enabled, 
// or image width is not defined yet (because of slow connection)
N(!1):N(!0)},w.loadingIndicatorDelay)}),h("imageLoadComplete",function(e,t){i.currItem===t&&N(!0)}))},N=function(e){v!==e&&(E(g,"preloader--active",!e),v=e)},U=function(e){var t=e.vGap;if(S()){var n=w.barsSize;if(w.captionEl&&"auto"===n.bottom)if(r||((r=l.createEl("pswp__caption pswp__caption--fake")).appendChild(l.createEl("pswp__caption__center")),s.insertBefore(r,a),l.addClass(s,"pswp__ui--fit")),w.addCaptionHTMLFn(e,r,!0)){var i=r.clientHeight;t.bottom=parseInt(i,10)||44}else t.bottom=n.top;// if no caption, set size of bottom gap to size of top
else t.bottom="auto"===n.bottom?0:n.bottom;
// height of top bar is static, no need to calculate it
t.top=n.top}else t.top=t.bottom=0},B=function(){
// Hide controls when mouse is used
w.timeToIdle&&h("mouseUsed",function(){l.bind(document,"mousemove",L),l.bind(document,"mouseout",P),A=setInterval(function(){2===++R&&n.setIdle(!0)},w.timeToIdle/2)})},K=function(){
// Hide controls when pinching to close
var t;
// Hide controls on vertical drag
h("onVerticalDrag",function(e){o&&e<.95?n.hideControls():!o&&.95<=e&&n.showControls()}),h("onPinchClose",function(e){o&&e<.9?(n.hideControls(),t=!0):t&&!o&&.9<e&&n.showControls()}),h("zoomGestureEnded",function(){(t=!1)&&!o&&n.showControls()})},H=[{name:"caption",option:"captionEl",onInit:function(e){a=e}},{name:"share-modal",option:"shareEl",onInit:function(e){d=e},onTap:function(){_()}},{name:"button--share",option:"shareEl",onInit:function(e){u=e},onTap:function(){_()}},{name:"button--zoom",option:"zoomEl",onTap:i.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){c=e}},{name:"button--close",option:"closeEl",onTap:i.close},{name:"button--arrow--left",option:"arrowEl",onTap:i.prev},{name:"button--arrow--right",option:"arrowEl",onTap:i.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){t.isFullscreen()?t.exit():t.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){g=e}}],W=function(){var o,a,r,e=function(e){if(e)for(var t=e.length,n=0;n<t;n++){o=e[n],a=o.className;for(var i=0;i<H.length;i++)r=H[i],-1<a.indexOf("pswp__"+r.name)&&(w[r.option]?(// if element is not disabled from options
l.removeClass(o,"pswp__element--disabled"),r.onInit&&r.onInit(o)):l.addClass(o,"pswp__element--disabled"))}};e(s.children);var t=l.getChildByClass(s,"pswp__top-bar");t&&e(t.children)};n.init=function(){
// extend options
l.extend(i.options,b,!0),
// create local link for fast access
w=i.options,
// find pswp__ui element
s=l.getChildByClass(i.scrollWrap,"pswp__ui"),
// create local link
h=i.listen,K(),
// update controls when slides change
h("beforeChange",n.update),
// toggle zoom on double-tap
h("doubleTap",function(e){var t=i.currItem.initialZoomLevel;i.getZoomLevel()!==t?i.zoomTo(t,e,333):i.zoomTo(w.getDoubleTapZoom(!1,i.currItem),e,333)}),
// Allow text selection in caption
h("preventDragEvent",function(e,t,n){var i=e.target||e.srcElement;i&&i.getAttribute("class")&&-1<e.type.indexOf("mouse")&&(0<i.getAttribute("class").indexOf("__caption")||/(SMALL|STRONG|EM)/i.test(i.tagName))&&(n.prevent=!1)}),
// bind events for UI
h("bindEvents",function(){l.bind(s,"pswpTap click",T),l.bind(i.scrollWrap,"pswpTap",n.onGlobalTap),i.likelyTouchDevice||l.bind(i.scrollWrap,"mouseover",n.onMouseOver)}),
// unbind events for UI
h("unbindEvents",function(){p||_(),A&&clearInterval(A),l.unbind(document,"mouseout",P),l.unbind(document,"mousemove",L),l.unbind(s,"pswpTap click",T),l.unbind(i.scrollWrap,"pswpTap",n.onGlobalTap),l.unbind(i.scrollWrap,"mouseover",n.onMouseOver),t&&(l.unbind(document,t.eventK,n.updateFullscreen),t.isFullscreen()&&(w.hideAnimationDuration=0,t.exit()),t=null)}),
// clean up things when gallery is destroyed
h("destroy",function(){w.captionEl&&(r&&s.removeChild(r),l.removeClass(a,"pswp__caption--empty")),d&&(d.children[0].onclick=null),l.removeClass(s,"pswp__ui--over-close"),l.addClass(s,"pswp__ui--hidden"),n.setIdle(!1)}),w.showAnimationDuration||l.removeClass(s,"pswp__ui--hidden"),h("initialZoomIn",function(){w.showAnimationDuration&&l.removeClass(s,"pswp__ui--hidden")}),h("initialZoomOut",function(){l.addClass(s,"pswp__ui--hidden")}),h("parseVerticalMargin",U),W(),w.shareEl&&u&&d&&(p=!0),k(),B(),Z(),z()},n.setIdle=function(e){E(s,"ui--idle",f=e)},n.update=function(){
// Don't update UI if it's hidden
e=!(!o||!i.currItem)&&(n.updateIndexIndicator(),w.captionEl&&(w.addCaptionHTMLFn(i.currItem,a),E(a,"caption--empty",!i.currItem.title)),!0),p||_(),k()},n.updateFullscreen=function(e){e&&
// some browsers change window scroll position during the fullscreen
// so PhotoSwipe updates it just in case
setTimeout(function(){i.setScrollOffset(0,l.getScrollY())},50),
// toogle pswp--fs class on root element
l[(t.isFullscreen()?"add":"remove")+"Class"](i.template,"pswp--fs")},n.updateIndexIndicator=function(){w.counterEl&&(c.innerHTML=i.getCurrentIndex()+1+w.indexIndicatorSep+w.getNumItemsFn())},n.onGlobalTap=function(e){var t=(e=e||window.event).target||e.srcElement;if(!C)if(e.detail&&"mouse"===e.detail.pointerType){
// close gallery if clicked outside of the image
if($(t))return void i.close();l.hasClass(t,"pswp__img")&&(1===i.getZoomLevel()&&i.getZoomLevel()<=i.currItem.fitRatio?w.clickToCloseNonZoomable&&i.close():i.toggleDesktopZoom(e.detail.releasePoint))}else
// tap to close gallery
if(
// tap anywhere (except buttons) to toggle visibility of controls
w.tapToToggleControls&&(o?n.hideControls():n.showControls()),w.tapToClose&&(l.hasClass(t,"pswp__img")||$(t)))return void i.close()},n.onMouseOver=function(e){var t=(e=e||window.event).target||e.srcElement;
// add class when mouse is over an element that should close the gallery
E(s,"ui--over-close",$(t))},n.hideControls=function(){l.addClass(s,"pswp__ui--hidden"),o=!1},n.showControls=function(){o=!0,e||n.update(),l.removeClass(s,"pswp__ui--hidden")},n.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},n.getFullscreenAPI=function(){var e=document.documentElement,t,n="fullscreenchange";return e.requestFullscreen?t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}:e.mozRequestFullScreen?t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}:e.webkitRequestFullscreen?t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}:e.msRequestFullscreen&&(t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),t&&(t.enter=function(){if(
// disable close-on-scroll in fullscreen
m=w.closeOnScroll,w.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK)return i.template[this.enterK]();i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},t.exit=function(){return w.closeOnScroll=m,document[this.exitK]()},t.isFullscreen=function(){return document[this.elementK]}),t}}}),jQuery(document).ready(function(){$(document).keyup(function(e){27==e.keyCode&&// escape key maps to keycode `27`
dismissSearchOverlay()}),$("#invokeSearchOverlay").click(function(){createSearchOverlay()}),$("#invokeSearchOverlayMobile").click(function(){createSearchOverlay()}),$("#sidebar-menu ul").hide(),$("#sidebar-menu li").prepend("<span class='handle'></span>"),$("#sidebar-menu li:has(ul)").children(":first-child").addClass("collapsed").click(function(){$(this).toggleClass("collapsed expanded").siblings("ul").toggle()}),$(".toggle").click(function(){$("#regularContent").toggle(),$("#modal").toggle(),$(".sidebar2").toggle()}),$("#modal").click(function(){$("#regularContent").toggle(),$("#modal").toggle(),$(".sidebar2").toggle()}),$("#dismissMenu").click(function(){$("#regularContent").toggle(),$("#modal").toggle(),$(".sidebar2").toggle()});var e="groupingFamily",t;$(".madeiraSwitch").click(function(){"groupingFamily"==e?(e="groupingVarietal",$("#groupingFamily").hide(),$("#groupingVarietal").show(),$("#familySwitch").removeClass("selected"),$("#varietalSwitch").addClass("selected")):(e="groupingFamily",$("#groupingFamily").show(),$("#groupingVarietal").hide(),$("#familySwitch").addClass("selected"),$("#varietalSwitch").removeClass("selected"))}),$(".revealfold").click(function(){return $(this).hide(),$(".folded").show(),False}),$(".locSelector").click(function(e){e.preventDefault();
// window.console.log( $(this).data('latitude'), $(this).data('longitude'), $(this).data('zoom') );
var t=window.mainmap,n;t.setCenter({lat:$(this).data("latitude"),lng:$(this).data("longitude")}),t.setZoom($(this).data("zoom")),
// To add the marker to the map, call setMap();
new google.maps.Marker({position:{lat:$(this).data("latitude"),lng:$(this).data("longitude")},title:$(this).data("label")}).setMap(t)}),
// execute above function
function(e){for(
// I’ve significantly adapted this code from the PhotoSwipe site to work with disparate
// <figure> elements scattered throughout a page but sharing the same class
// (The original code was about sniffing a gallery out of a container element)
// parse slide data (url, title, size ...) from DOM elements 
// (children of gallerySelector)
var u=function(e){for(var t=[],n=document.querySelectorAll(e),i=0;i<n.length;i++){var o=n[i],a,r,l;// <a> element
r=(a=o.children[0]).getAttribute("data-size").split("x"),
// create slide object
l={src:a.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},1<o.children.length&&(
// <figcaption> content
l.title=o.children[1].innerHTML),0<a.children.length&&(
// <img> thumbnail element, retrieving thumbnail url
l.msrc=a.children[0].getAttribute("src")),l.el=o,// save link to element for getThumbBoundsFn
t.push(l)}return t},l=function e(t,n){return t&&(n(t)?t:e(t.parentNode,n))},t=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,n=l(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});
// find root element of slide
if(n){for(var i=n.getAttribute("data-selector"),o=document.querySelectorAll(i),a,r=0;r<o.length;r++)o[r]===n&&(a=r);return 0<=a&&
// open PhotoSwipe if valid index found
s(a,n),!1}},n=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),i=0;i<n.length;i++)if(n[i]){var o=n[i].split("=");o.length<2||(t[o[0]]=o[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t},s=function(e,t,n,i){var o=document.querySelectorAll(".pswp")[0],a,r,l,s=t.getAttribute("data-selector");
// PhotoSwipe opened from URL
if(l=u(s),
// define options (if needed)
r={
// define gallery index (for URL)
galleryUID:t.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){
// See Options -> getThumbBoundsFn section of documentation for more info
var t=l[e].el.getElementsByTagName("img")[0],// find thumbnail
n=window.pageYOffset||document.documentElement.scrollTop,i=t.getBoundingClientRect();return{x:i.left,y:i.top+n,w:i.width}}},i)if(r.galleryPIDs){
// parse real index when custom PIDs are used 
// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
for(var c=0;c<l.length;c++)if(l[c].pid==e){r.index=c;break}}else
// in URL indexes start from 1
r.index=parseInt(e,10)-1;else r.index=parseInt(e,10);
// exit if index not found
isNaN(r.index)||(n&&(r.showAnimationDuration=0),(
// Pass data to PhotoSwipe and initialize it
a=new PhotoSwipe(o,PhotoSwipeUI_Default,l,r)).init())},i=document.querySelectorAll(e),o=0,a=i.length
// find nearest parent element
;o<a;o++)i[o].setAttribute("data-pswp-uid",o+1),i[o].setAttribute("data-selector",e),i[o].onclick=t;
// Parse URL and open gallery if it contains #&pid=3&gid=1
var r=n();r.pid&&r.gid&&s(r.pid,i[r.gid-1],!0,!0)}(".my-gallery")}),jQuery(document).ready(function(){
// recipe index filtration
var e=getCookie("harecipesform");e&&restoreFilters(e),refilterRecipes(),$("#recipefilters input").change(function(){refilterRecipes()}),$("#recipefilters select").change(function(){refilterRecipes()}),$("#recipeFiltersMoreButton").click(function(){var e=$(this).prev();"yes"===e.data("expanded")?(
// target.css('max-height','4.25em');
e.hide(),e.data("expanded","no"),$(this).text("Show Recipe Filters")):(
// target.css('max-height','100em');
e.show(),e.data("expanded","yes"),$(this).text("Hide Recipe Filters"))}),$("#matchesAnnotation").click(function(){resetFilters(),refilterRecipes()})});