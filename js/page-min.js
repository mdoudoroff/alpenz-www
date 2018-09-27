/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
// @codekit-prepend "photoswipe.js";
// @codekit-prepend "photoswipe-ui-default.js";
function dismissSearchOverlay(){$("#searchOverlay").remove(),$("#shadowbox").remove()}function createSearchOverlay(){var e=$('<div id="shadowbox"></div>'),t=$('<div id="searchOverlay"><div class="searchBar">Search Haus Alpenz: <input id="searchBox" /></div><span id="dismissSearchOverlay"><img src="gfx/dismiss.png" height="18" width="18" /></span><div id="searchResults"></div></div>');$("#regularContent").append(e),$("#regularContent").append(t),e.click(function(){dismissSearchOverlay()}),$("#dismissSearchOverlay").click(function(){dismissSearchOverlay()}),$("#searchBox").focus(),
// dynamic search binding (keyup-based)
$("#searchBox").keyup(function(){var n=$("#searchBox").val(),e=n.toLowerCase().split(" ")[0],o=$("#searchResults");o.hide(),1<n.length&&$.getJSON("/search/"+n,function(e){if(
// window.console.log(msg);
o.empty(),0<e.length){o.append($("<p>"+e.length+" matches</p>"));
// list results
for(var t=0;t<e.length;t++)e[t].icons?o.append($('<a href="'+e[t].url+'"><div class="match clr"><div class="icons">'+e[t].icons+'</div><div class="summary"><p><strong>'+e[t].name+"</strong><br />"+e[t].summary+"</p></div></div></a>")):o.append($('<a href="'+e[t].url+'"><div class="match clr"><div class="summary"><p><strong>'+e[t].name+"</strong><br />"+e[t].summary+"</p></div></div></a>"));o.show()}else 0<n.length&&(o.append($('<p><a href=""><em>No matches. Try searching on the first few letters of a product or category.</em></a></p>')),o.show())})})}!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";var e;return function(m,i,e,t){
/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var h={features:null,bind:function(e,t,n,o){var i=(o?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[i](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){h.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){h.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(h.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var o=e.length;o--;)if(e[o][n]===t)return o;return-1},extend:function(e,t,n){for(var o in t)if(t.hasOwnProperty(o)){if(n&&e.hasOwnProperty(o))continue;e[o]=t[o]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}
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
detectFeatures:function(){if(h.features)return h.features;var e,t=h.createEl().style,n="",o={};
// IE8 and below
// fix false-positive detection of old Android in new IE
// (IE11 ua string contains "Android 4.0")
if(o.oldIE=document.all&&!document.addEventListener,o.touch="ontouchstart"in window,window.requestAnimationFrame&&(o.raf=window.requestAnimationFrame,o.caf=window.cancelAnimationFrame),o.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!o.pointerEvent){var i=navigator.userAgent;
// Detect if device is iPhone or iPod and if it's older than iOS 8
// http://stackoverflow.com/a/14223920
// 
// This detection is made because of buggy top/bottom toolbars
// that don't trigger window.resize event.
// For more info refer to _isFixedPosition variable in core.js
if(/iP(hone|od)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);a&&0<a.length&&1<=(a=parseInt(a[1],10))&&a<8&&(o.isOldIOSPhone=!0)}
// Detect old Android (before KitKat)
// due to bugs related to position:fixed
// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
var r=i.match(/Android\s([0-9\.]*)/),l=r?r[1]:0;1<=(l=parseFloat(l))&&(l<4.4&&(o.isOldAndroid=!0),o.androidVersion=l),o.isMobileOpera=/opera mini|opera mobi/i.test(i)}for(var s=["transform","perspective","animationName"],u=["","webkit","Moz","ms","O"],c,d,p=0;p<4;p++){n=u[p];for(var m=0;m<3;m++)c=s[m],
// uppercase first letter of property name, if vendor is present
d=n+(n?c.charAt(0).toUpperCase()+c.slice(1):c),!o[c]&&d in t&&(o[c]=d);n&&!o.raf&&(n=n.toLowerCase(),o.raf=window[n+"RequestAnimationFrame"],o.raf&&(o.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!o.raf){var f=0;o.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-f)),o=window.setTimeout(function(){e(t+n)},n);return f=t+n,o},o.caf=function(e){clearTimeout(e)}}
// Detect SVG support
return o.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,h.features=o}};h.detectFeatures(),
// Override addEventListener for old versions of IE
h.features.oldIE&&(h.bind=function(e,t,n,o){t=t.split(" ");for(var i=(o?"detach":"attach")+"Event",a,r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(a=t[l])if("object"==typeof n&&n.handleEvent){if(o){if(!n["oldIE"+a])return!1}else n["oldIE"+a]=r;e[i]("on"+a,n["oldIE"+a])}else e[i]("on"+a,n)});
/*>>framework-bridge*/
/*>>core*/
//function(template, UiClass, items, options)
var f=this,n=25,o=3,g={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,
// not fully implemented yet
scaleMode:"fit"};
/**
 * Static vars, don't change unless you know what you're doing.
 */h.extend(g,t);
/**
 * Private helper variables & functions
 */
var a=function(){return{x:0,y:0}},s,r,v,y,l,u,c={x:0,y:0},d={x:0,y:0},x={x:0,y:0},p,// drag move, drag end & drag cancel events array
w,// drag start events array
b,C={},I,T,S,E,D,k,O=0,_={},M={x:0,y:0},// size of slide area, including spacing
A,F,R=0,// difference of indexes since last content update
L,P,Z,$,z,N,U=!0,B,K=[],H,W,Y,G,q,V,X,j={},J=!1,
// Registers PhotoSWipe module (History, Controller ...)
Q=function(e,t){h.extend(f,t.publicMethods),K.push(e)},ee=function(e){var t=on();return t-1<e?e-t:e<0?t+e:e},
// Micro bind/trigger
te={},ne=function(e,t){return te[e]||(te[e]=[]),te[e].push(t)},oe=function(e){var t=te[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var o=0;o<t.length;o++)t[o].apply(f,n)}},ie=function(){return(new Date).getTime()},ae=function(e){yt=e,f.bg.style.opacity=e*g.bgOpacity},re=function(e,t,n,o,i){(!J||i&&i!==f.currItem)&&(o/=i?i.fitRatio:f.currItem.fitRatio),e[z]=S+t+"px, "+n+"px"+E+" scale("+o+")"},le=function(e){dt&&(e&&(I>f.currItem.fitRatio?J||(pn(f.currItem,!1,!0),J=!0):J&&(pn(f.currItem),J=!1)),re(dt,x.x,x.y,I))},se=function(e){e.container&&re(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},ue=function(e,t){t[z]=S+e+"px, 0px"+E},ce=function(e,t){if(!g.loop&&t){var n=y+(M.x*O-e)/M.x,o=Math.round(e-ct.x);(n<0&&0<o||n>=on()-1&&o<0)&&(e=ct.x+o*g.mainScrollEndFriction)}ct.x=e,ue(e,l)},de=function(e,t){var n=mt[e]-_[e];return d[e]+c[e]+n-n*(t/T)},pe=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},me=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},fe=null,he=function(){
// Wait until mouse move event is fired at least twice during 100ms
// We do this, because some mobile browsers trigger it on touchstart
fe&&(h.unbind(document,"mousemove",he),h.addClass(m,"pswp--has_mouse"),g.mouseUsed=!0,oe("mouseUsed")),fe=setTimeout(function(){fe=null},100)},ge=function(){h.bind(document,"keydown",f),X.transform&&
// don't bind click event in browsers that don't support transform (mostly IE8)
h.bind(f.scrollWrap,"click",f),g.mouseUsed||h.bind(document,"mousemove",he),h.bind(window,"resize scroll",f),oe("bindEvents")},ve=function(){h.unbind(window,"resize",f),h.unbind(window,"scroll",b.scroll),h.unbind(document,"keydown",f),h.unbind(document,"mousemove",he),X.transform&&h.unbind(f.scrollWrap,"click",f),Qe&&h.unbind(window,p,f),oe("unbindEvents")},ye=function(e,t){var n=sn(f.currItem,C,e);return t&&(ut=n),n},xe=function(e){return e||(e=f.currItem),e.initialZoomLevel},we=function(e){return e||(e=f.currItem),0<e.w?g.maxSpreadZoom:1},
// Return true if offset is out of the bounds
be=function(e,t,n,o){return o===f.currItem.initialZoomLevel?(n[e]=f.currItem.initialPosition[e],!0):(n[e]=de(e,o),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))},Ce=function(){if(z){
// setup 3d transforms
var e=X.perspective&&!B;return S="translate"+(e?"3d(":"("),void(E=X.perspective?", 0px)":")")}
// Override zoom/pan/move functions in case old browser is used (most likely IE)
// (so they use left/top/width/height, instead of CSS transform)
z="left",h.addClass(m,"pswp--ie"),ue=function(e,t){t.left=e+"px"},se=function(e){var t=1<e.fitRatio?1:e.fitRatio,n=e.container.style,o=t*e.w,i=t*e.h;n.width=o+"px",n.height=i+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},le=function(){if(dt){var e=dt,t=f.currItem,n=1<t.fitRatio?1:t.fitRatio,o=n*t.w,i=n*t.h;e.width=o+"px",e.height=i+"px",e.left=x.x+"px",e.top=x.y+"px"}}},Ie=function(e){var t="";g.escKey&&27===e.keyCode?t="close":g.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(
// don't do anything if special key pressed to prevent from overriding default browser actions
// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,f[t]()))},Te=function(e){e&&(nt||tt||pt||qe)&&(e.preventDefault(),e.stopPropagation());
// don't allow click event to pass through when triggering after drag or some other gesture
},Se=function(){f.setScrollOffset(0,h.getScrollY())},Ee={},De=0,ke=function(e){Ee[e]&&(Ee[e].raf&&W(Ee[e].raf),De--,delete Ee[e])},Oe=function(e){Ee[e]&&ke(e),Ee[e]||(De++,Ee[e]={})},_e=function(){for(var e in Ee)Ee.hasOwnProperty(e)&&ke(e)},Me=function(e,t,n,o,i,a,r){var l=ie(),s;Oe(e);var u=function(){if(Ee[e]){// time diff
//b - beginning (start prop)
//d - anim duration
if(s=ie()-l,o<=s)return ke(e),a(n),void(r&&r());a((n-t)*i(s/o)+t),Ee[e].raf=H(u)}};u()},Ae={
// make a few local variables and functions public
shout:oe,listen:ne,viewportSize:C,options:g,isMainScrollAnimating:function(){return pt},getZoomLevel:function(){return I},getCurrentIndex:function(){return y},isDragging:function(){return Qe},isZooming:function(){return rt},setScrollOffset:function(e,t){_.x=e,V=_.y=t,oe("updateScrollOffset",_)},applyZoomPan:function(e,t,n,o){x.x=t,x.y=n,I=e,le(o)},init:function(){if(!s&&!r){var e;f.framework=h,// basic functionality
f.template=m,// root DOM element of PhotoSwipe
f.bg=h.getChildByClass(m,"pswp__bg"),Y=m.className,s=!0,X=h.detectFeatures(),H=X.raf,W=X.caf,z=X.transform,q=X.oldIE,f.scrollWrap=h.getChildByClass(m,"pswp__scroll-wrap"),f.container=h.getChildByClass(f.scrollWrap,"pswp__container"),l=f.container.style,// for fast access
// Objects that hold slides (there are only 3 in DOM)
f.itemHolders=A=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],
// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
A[0].el.style.display=A[2].el.style.display="none",Ce(),
// Setup global events
b={resize:f.updateSize,scroll:Se,keydown:Ie,click:Te};
// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
var t=X.isOldIOSPhone||X.isOldAndroid||X.isMobileOpera,n;
// init modules
for(X.animationName&&X.transform&&!t||(g.showAnimationDuration=g.hideAnimationDuration=0),e=0;e<K.length;e++)f["init"+K[e]]();
// init
if(i)(f.ui=new i(f,h)).init();oe("firstUpdate"),y=y||g.index||0,
// validate index
(isNaN(y)||y<0||y>=on())&&(y=0),f.currItem=nn(y),(X.isOldIOSPhone||X.isOldAndroid)&&(U=!1),m.setAttribute("aria-hidden","false"),g.modal&&(U?m.style.position="fixed":(m.style.position="absolute",m.style.top=h.getScrollY()+"px")),void 0===V&&(oe("initialLayout"),V=G=h.getScrollY());
// add classes to root element of PhotoSwipe
var o="pswp--open ";for(g.mainClass&&(o+=g.mainClass+" "),g.showHideOpacity&&(o+="pswp--animate_opacity "),o+=B?"pswp--touch":"pswp--notouch",o+=X.animationName?" pswp--css_animation":"",o+=X.svg?" pswp--svg":"",h.addClass(m,o),f.updateSize(),
// initial update
u=-1,R=null,e=0;e<3;e++)ue((e+u)*M.x,A[e].el.style);q||h.bind(f.scrollWrap,w,f),ne("initialZoomInEnd",function(){f.setContent(A[0],y-1),f.setContent(A[2],y+1),A[0].el.style.display=A[2].el.style.display="block",g.focus&&
// focus causes layout, 
// which causes lag during the animation, 
// that's why we delay it untill the initial zoom transition ends
m.focus(),ge()}),
// set content for center slide (first time)
f.setContent(A[1],y),f.updateCurrItem(),oe("afterInit"),U||(
// On all versions of iOS lower than 8.0, we check size of viewport every second.
// 
// This is done to detect when Safari top & bottom bars appear, 
// as this action doesn't trigger any events (like resize). 
// 
// On iOS8 they fixed this.
// 
// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
D=setInterval(function(){De||Qe||rt||I!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),h.addClass(m,"pswp--visible")}},
// Close the gallery, then destroy it
close:function(){s&&(r=!(s=!1),oe("close"),ve(),Vt(f.currItem,null,!0,f.destroy))},
// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
destroy:function(){oe("destroy"),qt&&clearTimeout(qt),m.setAttribute("aria-hidden","true"),m.className=Y,D&&clearInterval(D),h.unbind(f.scrollWrap,w,f),
// we unbind scroll event at the end, as closing animation may depend on it
h.unbind(window,"scroll",f),It(),_e(),te=null},
/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
panTo:function(e,t,n){n||(e>ut.min.x?e=ut.min.x:e<ut.max.x&&(e=ut.max.x),t>ut.min.y?t=ut.min.y:t<ut.max.y&&(t=ut.max.y)),x.x=e,x.y=t,le()},handleEvent:function(e){e=e||window.event,b[e.type]&&b[e.type](e)},goTo:function(e){var t=(e=ee(e))-y;R=t,y=e,f.currItem=nn(y),O-=t,ce(M.x*O),_e(),pt=!1,f.updateCurrItem()},next:function(){f.goTo(y+1)},prev:function(){f.goTo(y-1)},
// update current zoom/pan objects
updateCurrZoomItem:function(e){
// itemHolder[1] is middle (current) item
if(e&&oe("beforeChange",0),A[1].el.children.length){var t=A[1].el.children[0];dt=h.hasClass(t,"pswp__zoom-wrap")?t.style:null}else dt=null;ut=f.currItem.bounds,T=I=f.currItem.initialZoomLevel,x.x=ut.center.x,x.y=ut.center.y,e&&oe("afterChange")},invalidateCurrItems:function(){k=!0;for(var e=0;e<3;e++)A[e].item&&(A[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==R){var t=Math.abs(R),n;if(!(e&&t<2)){f.currItem=nn(y),J=!1,oe("beforeChange",R),3<=t&&(u+=R+(0<R?-3:3),t=3);for(var o=0;o<t;o++)0<R?(n=A.shift(),A[2]=n,ue((// move first to last
++u+2)*M.x,n.el.style),f.setContent(n,y-t+o+1+1)):(n=A.pop(),A.unshift(n),ue(// move last to first
--u*M.x,n.el.style),f.setContent(n,y+t-o-1-1));
// reset zoom/pan on previous item
if(dt&&1===Math.abs(R)){var i=nn(F);i.initialZoomLevel!==I&&(sn(i,C),pn(i),se(i))}
// reset diff after update
R=0,f.updateCurrZoomItem(),F=y,oe("afterChange")}}},updateSize:function(e){if(!U&&g.modal){var t=h.getScrollY();if(V!==t&&(m.style.top=t+"px",V=t),!e&&j.x===window.innerWidth&&j.y===window.innerHeight)return;j.x=window.innerWidth,j.y=window.innerHeight,
//template.style.width = _windowVisibleSize.x + 'px';
m.style.height=j.y+"px"}// even may be used for example to switch image sources
// don't re-calculate size on inital size update
if(C.x=f.scrollWrap.clientWidth,C.y=f.scrollWrap.clientHeight,Se(),M.x=C.x+Math.round(C.x*g.spacing),M.y=C.y,ce(M.x*O),oe("beforeResize"),void 0!==u){for(var n,o,i,a=0;a<3;a++)n=A[a],ue((a+u)*M.x,n.el.style),i=y+a-1,g.loop&&2<on()&&(i=ee(i)),
// re-render gallery item if `needsUpdate`,
// or doesn't have `bounds` (entirely new slide object)
(
// update zoom level on items and refresh source (if needsUpdate)
o=nn(i))&&(k||o.needsUpdate||!o.bounds)?(f.cleanSlide(o),f.setContent(n,i),
// if "center" slide
1===a&&(f.currItem=o,f.updateCurrZoomItem(!0)),o.needsUpdate=!1):-1===n.index&&0<=i&&
// add content first time
f.setContent(n,i),o&&o.container&&(sn(o,C),pn(o),se(o));k=!1}T=I=f.currItem.initialZoomLevel,(ut=f.currItem.bounds)&&(x.x=ut.center.x,x.y=ut.center.y,le(!0)),oe("resize")},
// Zoom current item to
zoomTo:function(t,e,n,o,i){
/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/
e&&(T=I,mt.x=Math.abs(e.x)-x.x,mt.y=Math.abs(e.y)-x.y,pe(d,x));var a=ye(t,!1),r={};be("x",a,r,t),be("y",a,r,t);var l=I,s=x.x,u=x.y;me(r);var c=function(e){x.y=1===e?(I=t,x.x=r.x,r.y):(I=(t-l)*e+l,x.x=(r.x-s)*e+s,(r.y-u)*e+u),i&&i(e),le(1===e)};n?Me("customZoomTo",0,1,n,o||h.easing.sine.inOut,c):c(1)}},Fe=30,Re=10,Le,Pe,
// pool of objects that are used during dragging of zooming
Ze={},// first point
$e={},// second point (for zoom gesture)
ze={},Ne={},Ue={},Be=[],Ke={},He,We=[],// array of points during dragging, used to determine type of gesture
Ye={},Ge,qe,Ve,Xe=0,je={x:0,y:0},Je=0,Qe,// at least one pointer is down
et,// at least two _pointers are down
tt,// zoom level changed during zoom gesture
nt,ot,it,at,// array of current touch points
rt,lt,st,ut,ct={x:0,y:0},dt,pt,// true, if animation after swipe gesture is running
mt={x:0,y:0},ft={x:0,y:0},ht,gt,vt,yt,xt,wt=function(e,t){return e.x===t.x&&e.y===t.y},bt=function(e,t){return Math.abs(e.x-t.x)<n&&Math.abs(e.y-t.y)<n},Ct=function(e,t){return Ye.x=Math.abs(e.x-t.x),Ye.y=Math.abs(e.y-t.y),Math.sqrt(Ye.x*Ye.x+Ye.y*Ye.y)},It=function(){ot&&(W(ot),ot=null)},Tt=function(){Qe&&(ot=H(Tt),Ut())},St=function(){return!("fit"===g.scaleMode&&I===f.currItem.initialZoomLevel)},
// find the closest parent DOM element
Et=function(e,t){return!(!e||e===document)&&(
// don't search elements above pswp__scroll-wrap
!(e.getAttribute("class")&&-1<e.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(t(e)?e:Et(e.parentNode,t)))},Dt={},kt=function(e,t){return Dt.prevent=!Et(e.target,g.isClickableElement),oe("preventDragEvent",e,t,Dt),Dt.prevent},Ot=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},_t=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Mt=function(e,t,n){if(50<e-Pe){var o=2<We.length?We.shift():{};o.x=t,o.y=n,We.push(o),Pe=e}},At=function(){var e=x.y-f.currItem.initialPosition.y;// difference between initial and current position
return 1-Math.abs(e/(C.y/2))},
// points pool, reused during touch events
Ft={},Rt={},Lt=[],Pt,Zt=function(e){
// clean up previous points, without recreating array
for(;0<Lt.length;)Lt.pop();return N?(Pt=0,
// we can use forEach, as pointer events are supported only in modern browsers
Be.forEach(function(e){0===Pt?Lt[0]=e:1===Pt&&(Lt[1]=e),Pt++})):-1<e.type.indexOf("touch")?e.touches&&0<e.touches.length&&(Lt[0]=Ot(e.touches[0],Ft),1<e.touches.length&&(Lt[1]=Ot(e.touches[1],Rt))):(Ft.x=e.pageX,Ft.y=e.pageY,Ft.id="",Lt[0]=Ft),Lt},$t=function(e,t){var n,o=0,i=x[e]+t[e],a,r=0<t[e],l=ct.x+t.x,s=ct.x-Ke.x,u,c;
// calculate fdistance over the bounds and friction
// move main scroll or start panning
if(n=i>ut.min[e]||i<ut.max[e]?g.panEndFriction:1,i=x[e]+t[e]*n,(g.allowPanToNext||I===f.currItem.initialZoomLevel)&&(dt?"h"!==ht||"x"!==e||tt||(r?(i>ut.min[e]&&(n=g.panEndFriction,o=ut.min[e]-i,a=ut.min[e]-d[e]),
// drag right
(a<=0||s<0)&&1<on()?(c=l,s<0&&l>Ke.x&&(c=Ke.x)):ut.min.x!==ut.max.x&&(u=i)):(i<ut.max[e]&&(n=g.panEndFriction,o=i-ut.max[e],a=d[e]-ut.max[e]),(a<=0||0<s)&&1<on()?(c=l,0<s&&l<Ke.x&&(c=Ke.x)):ut.min.x!==ut.max.x&&(u=i))):c=l,"x"===e))return void 0!==c&&(ce(c,!0),it=c!==Ke.x),ut.min.x!==ut.max.x&&(void 0!==u?x.x=u:it||(x.x+=t.x*n)),void 0!==c;pt||it||I>f.currItem.fitRatio&&(x[e]+=t[e]*n)},
// Pointerdown/touchstart/mousedown handler
zt=function(e){
// Allow dragging only via left mouse button.
// As this handler is not added in IE8 - we ignore e.which
// 
// http://www.quirksmode.org/js/events_properties.html
// https://developer.mozilla.org/en-US/docs/Web/API/event.button
if(!("mousedown"===e.type&&0<e.button))if(en)e.preventDefault();else if(!Ve||"mousedown"!==e.type){if(kt(e,!0)&&e.preventDefault(),oe("pointerDown"),N){var t=h.arraySearch(Be,e.pointerId,"id");t<0&&(t=Be.length),Be[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=Zt(e),o=n.length;at=null,_e(),
// init drag
Qe&&1!==o||(Qe=gt=!0,h.bind(window,p,f),Ge=xt=vt=qe=it=nt=et=tt=!1,ht=null,oe("firstTouchStart",n),pe(d,x),c.x=c.y=0,pe(Ne,n[0]),pe(Ue,Ne),
//_equalizePoints(_startMainScrollPos, _mainScrollPos);
Ke.x=M.x*O,We=[{x:Ne.x,y:Ne.y}],Pe=Le=ie(),
//_mainScrollAnimationEnd(true);
ye(I,!0),
// Start rendering
It(),Tt()),
// init zoom
!rt&&1<o&&!pt&&!it&&(T=I,// true if zoom changed at least once
rt=et=!(tt=!1),c.y=c.x=0,pe(d,x),pe(Ze,n[0]),pe($e,n[1]),_t(Ze,$e,ft),mt.x=Math.abs(ft.x)-x.x,mt.y=Math.abs(ft.y)-x.y,lt=st=Ct(Ze,$e))}},
// Pointermove/touchmove/mousemove handler
Nt=function(e){if(e.preventDefault(),N){var t=h.arraySearch(Be,e.pointerId,"id");if(-1<t){var n=Be[t];n.x=e.pageX,n.y=e.pageY}}if(Qe){var o=Zt(e);if(ht||nt||rt)at=o;else if(ct.x!==M.x*O)
// if main scroll position is shifted – direction is always horizontal
ht="h";else{var i=Math.abs(o[0].x-Ne.x)-Math.abs(o[0].y-Ne.y);
// check the direction of movement
10<=Math.abs(i)&&(ht=0<i?"h":"v",at=o)}}},
// 
Ut=function(){if(at){var e=at.length;if(0!==e)if(pe(Ze,at[0]),ze.x=Ze.x-Ne.x,ze.y=Ze.y-Ne.y,rt&&1<e){
// check if one of two points changed
if(
// Handle behaviour for more than 1 point
Ne.x=Ze.x,Ne.y=Ze.y,!ze.x&&!ze.y&&wt(at[1],$e))return;pe($e,at[1]),tt||(tt=!0,oe("zoomGestureStarted"));
// Distance between two points
var t=Ct(Ze,$e),n=Yt(t);
// slightly over the of initial zoom level
n>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(xt=!0);
// Apply the friction if zoom level is out of the bounds
var o=1,i=xe(),a=we();if(n<i)if(g.pinchToClose&&!xt&&T<=f.currItem.initialZoomLevel){
// fade out background if zooming out
var r,l=1-(i-n)/(i/1.2);ae(l),oe("onPinchClose",l),vt=!0}else 1<(o=(i-n)/i)&&(o=1),n=i-o*(i/3);else a<n&&(
// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
1<(o=(n-a)/(6*i))&&(o=1),n=a+o*i);o<0&&(o=0),
// distance between touch points after friction is applied
lt=t,
// _centerPoint - The point in the middle of two pointers
_t(Ze,$e,je),
// paning with two pointers pressed
c.x+=je.x-ft.x,c.y+=je.y-ft.y,pe(ft,je),x.x=de("x",n),x.y=de("y",n),Ge=I<n,I=n,le()}else{
// handle behaviour for one point (dragging or panning)
if(!ht)return;
// do nothing if pointers position hasn't changed
if(gt&&(gt=!1,
// subtract drag distance that was used during the detection direction  
10<=Math.abs(ze.x)&&(ze.x-=at[0].x-Ue.x),10<=Math.abs(ze.y)&&(ze.y-=at[0].y-Ue.y)),Ne.x=Ze.x,Ne.y=Ze.y,0===ze.x&&0===ze.y)return;if("v"===ht&&g.closeOnVerticalDrag&&!St()){c.y+=ze.y,x.y+=ze.y;var s=At();return qe=!0,oe("onVerticalDrag",s),ae(s),void le()}var u;Mt(ie(),Ze.x,Ze.y),nt=!0,ut=f.currItem.bounds,$t("x",ze)||($t("y",ze),me(x),le())}}},
// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
Bt=function(e){if(X.isOldAndroid){if(Ve&&"mouseup"===e.type)return;
// on Android (v4.1, 4.2, 4.3 & possibly older) 
// ghost mousedown/up event isn't preventable via e.preventDefault,
// which causes fake mousedown event
// so we block mousedown/up for 600ms
-1<e.type.indexOf("touch")&&(clearTimeout(Ve),Ve=setTimeout(function(){Ve=0},600))}var t;if(oe("pointerUp"),kt(e,!1)&&e.preventDefault(),N){var n=h.arraySearch(Be,e.pointerId,"id");if(-1<n)if(t=Be.splice(n,1)[0],navigator.pointerEnabled)t.type=e.pointerType||"mouse";else{var o={4:"mouse",// event.MSPOINTER_TYPE_MOUSE
2:"touch",// event.MSPOINTER_TYPE_TOUCH 
3:"pen"};t.type=o[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}}var i=Zt(e),a,r=i.length;
// Do nothing if there were 3 touch points or more
if("mouseup"===e.type&&(r=0),2===r)return!(at=null);
// if second pointer released
1===r&&pe(Ue,i[0]),
// pointer hasn't moved, send "tap release" point
0!==r||ht||pt||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),oe("touchRelease",e,t));
// Difference in time between releasing of two last touch points (zoom gesture)
var l=-1;
// Gesture completed, no pointers left
if(0===r&&(Qe=!1,h.unbind(window,p,f),It(),rt?
// Two points released at the same time
l=0:-1!==Je&&(l=ie()-Je)),Je=1===r?ie():-1,a=-1!==l&&l<150?"zoom":"swipe",rt&&r<2&&(rt=!1,
// Only second point released
1===r&&(a="zoomPointerUp"),oe("zoomGestureEnded")),at=null,nt||tt||pt||qe)if(_e(),He||(He=Kt()),He.calculateSwipeSpeed("x"),qe){var s;if(At()<g.verticalDragRange)f.close();else{var u=x.y,c=yt;Me("verticalDrag",0,1,300,h.easing.cubic.out,function(e){x.y=(f.currItem.initialPosition.y-u)*e+u,ae((1-c)*e+c),le()}),oe("onVerticalDrag",1)}}
// main scroll 
else{if((it||pt)&&0===r){var d;if(Wt(a,He))return;a="zoomPointerUp"}
// prevent zoom/pan animation when main scroll animation runs
pt||(
// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
"swipe"===a?
// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
!it&&I>f.currItem.fitRatio&&Ht(He):Gt())}},
// Returns object with data about gesture
// It's created only once and then reused
Kt=function(){
// temp local vars
var t,n,o={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){n=1<We.length?(t=ie()-Pe+50,We[We.length-2][e]):(t=ie()-Le,Ue[e]),o.lastFlickOffset[e]=Ne[e]-n,o.lastFlickDist[e]=Math.abs(o.lastFlickOffset[e]),20<o.lastFlickDist[e]?o.lastFlickSpeed[e]=o.lastFlickOffset[e]/t:o.lastFlickSpeed[e]=0,Math.abs(o.lastFlickSpeed[e])<.1&&(o.lastFlickSpeed[e]=0),o.slowDownRatio[e]=.95,o.slowDownRatioReverse[e]=1-o.slowDownRatio[e],o.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(t,e){o.backAnimStarted[t]||(x[t]>ut.min[t]?o.backAnimDestination[t]=ut.min[t]:x[t]<ut.max[t]&&(o.backAnimDestination[t]=ut.max[t]),void 0!==o.backAnimDestination[t]&&(o.slowDownRatio[t]=.7,o.slowDownRatioReverse[t]=1-o.slowDownRatio[t],o.speedDecelerationRatioAbs[t]<.05&&(o.lastFlickSpeed[t]=0,o.backAnimStarted[t]=!0,Me("bounceZoomPan"+t,x[t],o.backAnimDestination[t],e||300,h.easing.sine.out,function(e){x[t]=e,le()}))))},
// Reduces the speed by slowDownRatio (per 10ms)
calculateAnimOffset:function(e){o.backAnimStarted[e]||(o.speedDecelerationRatio[e]=o.speedDecelerationRatio[e]*(o.slowDownRatio[e]+o.slowDownRatioReverse[e]-o.slowDownRatioReverse[e]*o.timeDiff/10),o.speedDecelerationRatioAbs[e]=Math.abs(o.lastFlickSpeed[e]*o.speedDecelerationRatio[e]),o.distanceOffset[e]=o.lastFlickSpeed[e]*o.speedDecelerationRatio[e]*o.timeDiff,x[e]+=o.distanceOffset[e])},panAnimLoop:function(){if(Ee.zoomPan&&(Ee.zoomPan.raf=H(o.panAnimLoop),o.now=ie(),o.timeDiff=o.now-o.lastNow,o.lastNow=o.now,o.calculateAnimOffset("x"),o.calculateAnimOffset("y"),le(),o.calculateOverBoundsAnimOffset("x"),o.calculateOverBoundsAnimOffset("y"),o.speedDecelerationRatioAbs.x<.05&&o.speedDecelerationRatioAbs.y<.05))
// round pan position
return x.x=Math.round(x.x),x.y=Math.round(x.y),le(),void ke("zoomPan")}};
// s = this
return o},Ht=function(e){
// Avoid acceleration animation if speed is too low
if(
// calculate swipe speed for Y axis (paanning)
e.calculateSwipeSpeed("y"),ut=f.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05)return e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,
// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0;
// Animation loop that controls the acceleration after pan gesture ends
Oe("zoomPan"),e.lastNow=ie(),e.panAnimLoop()},Wt=function(e,t){var n,o,i;if(pt||(Xe=y),"swipe"===e){var a=Ne.x-Ue.x,r=t.lastFlickDist.x<10;
// if container is shifted for more than MIN_SWIPE_DISTANCE, 
// and last flick gesture was in right direction
30<a&&(r||20<t.lastFlickOffset.x)?
// go to prev item
o=-1:a<-30&&(r||t.lastFlickOffset.x<-20)&&(
// go to next item
o=1)}o&&((y+=o)<0?(y=g.loop?on()-1:0,i=!0):y>=on()&&(y=g.loop?0:on()-1,i=!0),i&&!g.loop||(R+=o,O-=o,n=!0));var l=M.x*O,s=Math.abs(l-ct.x),u;return u=n||l>ct.x==0<t.lastFlickSpeed.x?(u=0<Math.abs(t.lastFlickSpeed.x)?s/Math.abs(t.lastFlickSpeed.x):333,u=Math.min(u,400),Math.max(u,250)):333,Xe===y&&(n=!1),pt=!0,oe("mainScrollAnimStart"),Me("mainScroll",ct.x,l,u,h.easing.cubic.out,ce,function(){_e(),pt=!1,Xe=-1,(n||Xe!==y)&&f.updateCurrItem(),oe("mainScrollAnimComplete")}),n&&f.updateCurrItem(!0),n},Yt=function(e){return 1/st*e*T},
// Resets zoom if it's out of bounds
Gt=function(){var e=I,t=xe(),n=we();I<t?e=t:n<I&&(e=n);var o=1,i,a=yt;return vt&&!Ge&&!xt&&I<t?
//_closedByScroll = true;
f.close():(vt&&(i=function(e){ae((1-a)*e+a)}),f.zoomTo(e,0,200,h.easing.cubic.out,i)),!0};Q("Gestures",{publicMethods:{initGestures:function(){
// helper function that builds touch/pointer/mouse events
var e=function(e,t,n,o,i){L=e+t,P=e+n,Z=e+o,$=i?e+i:""};(N=X.pointerEvent)&&X.touch&&(
// we don't need touch events, if browser supports pointer events
X.touch=!1),N?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):
// IE10 pointer events are case-sensitive
e("MSPointer","Down","Move","Up","Cancel"):X.touch?(e("touch","start","move","end","cancel"),B=!0):e("mouse","down","move","up"),p=P+" "+Z+" "+$,w=L,N&&!B&&(B=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),
// make variable public
f.likelyTouchDevice=B,b[L]=zt,b[P]=Nt,b[Z]=Bt,// the Kraken
$&&(b[$]=b[Z]),
// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
X.touch&&(w+=" mousedown",p+=" mousemove mouseup",b.mousedown=b[L],b.mousemove=b[P],b.mouseup=b[Z]),B||(
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
var qt,Vt=function(s,e,u,t){
// dimensions of small thumbnail {x:,y:,w:}.
// Height is optional, as calculated based on large image.
var c;qt&&clearTimeout(qt),Qt=en=!0,s.initialLayout?(c=s.initialLayout,s.initialLayout=null):c=g.getThumbBoundsFn&&g.getThumbBoundsFn(y);var d=u?g.hideAnimationDuration:g.showAnimationDuration,p=function(){ke("initialZoom"),u?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(ae(1),e&&(e.style.display="block"),h.addClass(m,"pswp--animated-in"),oe("initialZoom"+(u?"OutEnd":"InEnd"))),t&&t(),en=!1},n;
// if bounds aren't provided, just open gallery without animation
if(!d||!c||void 0===c.x)return oe("initialZoom"+(u?"Out":"In")),I=s.initialZoomLevel,pe(x,s.initialPosition),le(),m.style.opacity=u?0:1,ae(1),void(d?setTimeout(function(){p()},d):p());(function(){var r=v,l=!f.currItem.src||f.currItem.loadError||g.showHideOpacity;
// apply hw-acceleration to image
s.miniImg&&(s.miniImg.style.webkitBackfaceVisibility="hidden"),u||(I=c.w/s.w,x.x=c.x,x.y=c.y-G,f[l?"template":"bg"].style.opacity=.001,le()),Oe("initialZoom"),u&&!r&&h.removeClass(m,"pswp--animated-in"),l&&(u?h[(r?"remove":"add")+"Class"](m,"pswp--animate_opacity"):setTimeout(function(){h.addClass(m,"pswp--animate_opacity")},30)),qt=setTimeout(function(){if(oe("initialZoom"+(u?"Out":"In")),u){
// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
var t=c.w/s.w,n=x.x,o=x.y,i=I,a=yt,e=function(e){x.y=1===e?(I=t,x.x=c.x,c.y-V):(I=(t-i)*e+i,x.x=(c.x-n)*e+n,(c.y-V-o)*e+o),le(),l?m.style.opacity=1-e:ae(a-e*a)};r?Me("initialZoom",0,1,d,h.easing.cubic.out,e,p):(e(1),qt=setTimeout(p,d+20))}else
// "in" animation always uses CSS transitions (instead of rAF).
// CSS transition work faster here, 
// as developer may also want to animate other things, 
// like ui on top of sliding area, which can be animated just via CSS
I=s.initialZoomLevel,pe(x,s.initialPosition),le(),ae(1),l?m.style.opacity=1:ae(1),qt=setTimeout(p,d+20)},u?25:90)})()},Xt,jt={},Jt=[],Qt,en,tn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,// TODO
preload:[1,1],getNumItemsFn:function(){return Xt.length}},nn,on,an,rn=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},ln=function(e,t,n){var o=e.bounds;
// position of element when it's centered
o.center.x=Math.round((jt.x-t)/2),o.center.y=Math.round((jt.y-n)/2)+e.vGap.top,
// maximum pan position
o.max.x=t>jt.x?Math.round(jt.x-t):o.center.x,o.max.y=n>jt.y?Math.round(jt.y-n)+e.vGap.top:o.center.y,
// minimum pan position
o.min.x=t>jt.x?0:o.center.x,o.min.y=n>jt.y?e.vGap.top:o.center.y},sn=function(e,t,n){if(!e.src||e.loadError)
// if it's not image, we return zero bounds (content is not zoomable)
return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},e.initialPosition=e.bounds.center,e.bounds;var o=!n;if(o&&(e.vGap||(e.vGap={top:0,bottom:0}),
// allows overriding vertical margin for individual items
oe("parseVerticalMargin",e)),jt.x=t.x,jt.y=t.y-e.vGap.top-e.vGap.bottom,o){var i=jt.x/e.w,a=jt.y/e.h;e.fitRatio=i<a?i:a;
//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;
var r=g.scaleMode;"orig"===r?n=1:"fit"===r&&(n=e.fitRatio),1<n&&(n=1),e.initialZoomLevel=n,e.bounds||(
// reuse bounds object
e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}return n?(ln(e,e.w*n,e.h*n),o&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds):void 0},un=function(e,t,n,o,i,a){t.loadError||o&&(t.imageAppended=!0,pn(t,o,t===f.currItem&&J),n.appendChild(o),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},cn=function(e){e.loading=!0,e.loaded=!1;var t=e.img=h.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};// + '?a=' + Math.random();
return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},dn=function(e,t){if(e.src&&e.loadError&&e.container)return t&&(e.container.innerHTML=""),e.container.innerHTML=g.errorMsg.replace("%url%",e.src),!0},pn=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var o=n?e.w:Math.round(e.w*e.fitRatio),i=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=o+"px",e.placeholder.style.height=i+"px"),t.style.width=o+"px",t.style.height=i+"px"}},mn=function(){if(Jt.length){for(var e,t=0;t<Jt.length;t++)(e=Jt[t]).holder.index===e.index&&un(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);Jt=[]}};
/*>>show-hide-transition*/
/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/Q("Controller",{publicMethods:{lazyLoadItem:function(e){e=ee(e);var t=nn(e);t&&(!t.loaded&&!t.loading||k)&&(oe("gettingData",e,t),t.src&&cn(t))},initController:function(){h.extend(g,tn,!0),f.items=Xt=e,nn=f.getItemAt,on=g.getNumItemsFn,//self.getNumItems;
an=g.loop,on()<3&&(g.loop=!1),ne("beforeChange",function(e){var t=g.preload,n=null===e||0<=e,o=Math.min(t[0],on()),i=Math.min(t[1],on()),a;for(a=1;a<=(n?i:o);a++)f.lazyLoadItem(y+a);for(a=1;a<=(n?o:i);a++)f.lazyLoadItem(y-a)}),ne("initialLayout",function(){f.currItem.initialLayout=g.getThumbBoundsFn&&g.getThumbBoundsFn(y)}),ne("mainScrollAnimComplete",mn),ne("initialZoomInEnd",mn),ne("destroy",function(){for(var e,t=0;t<Xt.length;t++)
// remove reference to DOM elements, for GC
(e=Xt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);Jt=null})},getItemAt:function(e){return 0<=e&&(void 0!==Xt[e]&&Xt[e])},allowProgressiveImg:function(){
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
},setContent:function(t,n){g.loop&&(n=ee(n));var e=f.getItemAt(t.index);e&&(e.container=null);var o=f.getItemAt(n),i;if(o){
// allow to override data
oe("gettingData",n,o),t.index=n;
// base container DIV is created only once for each of 3 holders
var a=(t.item=o).container=h.createEl("pswp__zoom-wrap");if(!o.src&&o.html&&(o.html.tagName?a.appendChild(o.html):a.innerHTML=o.html),dn(o),sn(o,C),!o.src||o.loadError||o.loaded)o.src&&!o.loadError&&(
// image object is created every time, due to bugs of image loading & delay when switching images
(i=h.createEl("pswp__img","img")).style.opacity=1,i.src=o.src,pn(o,i),un(n,o,a,i,!0));else{if(o.loadComplete=function(e){
// gallery closed before image finished loading
if(s){
// check if holder hasn't changed while image was loading
if(t&&t.index===n){if(dn(e,!0))return e.loadComplete=e.img=null,sn(e,C),se(e),void(t.index===y&&
// recalculate dimensions
f.updateCurrZoomItem());e.imageAppended?
// remove preloader & mini-img
!en&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null):X.transform&&(pt||en)?Jt.push({item:e,baseDiv:a,img:e.img,index:n,holder:t,clearPlaceholder:!0}):un(n,e,a,e.img,pt||en,!0)}e.loadComplete=null,e.img=null,// no need to store image element after it's added
oe("imageLoadComplete",n,e)}},h.features.transform){var r="pswp__img pswp__img--placeholder";r+=o.msrc?"":" pswp__img--placeholder--blank";var l=h.createEl(r,o.msrc?"img":"");o.msrc&&(l.src=o.msrc),pn(o,l),a.appendChild(l),o.placeholder=l}o.loading||cn(o),f.allowProgressiveImg()&&(
// just append image
!Qt&&X.transform?Jt.push({item:o,baseDiv:a,img:o.img,index:n,holder:t}):un(n,o,a,o.img,!0,!0))}Qt||n!==y?se(o):(dt=a.style,Vt(o,i||o.img)),t.el.innerHTML="",t.el.appendChild(a)}else t.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});
/*>>items-controller*/
/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */
var fn,hn={},gn=function(e,t,n){var o=document.createEvent("CustomEvent"),i={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};o.initCustomEvent("pswpTap",!0,!0,i),e.target.dispatchEvent(o)},vn;Q("Tap",{publicMethods:{initTap:function(){ne("firstTouchStart",f.onTapStart),ne("touchRelease",f.onTapRelease),ne("destroy",function(){hn={},fn=null})},onTapStart:function(e){1<e.length&&(clearTimeout(fn),fn=null)},onTapRelease:function(e,t){if(t&&!nt&&!et&&!De){var n=t,o;if(fn&&(clearTimeout(fn),fn=null,bt(n,hn)))return void oe("doubleTap",n);if("mouse"===t.type)return void gn(e,t,"mouse");
// avoid double tap delay on buttons and elements that have class pswp__single-tap
if("BUTTON"===e.target.tagName.toUpperCase()||h.hasClass(e.target,"pswp__single-tap"))return void gn(e,t);pe(hn,n),fn=setTimeout(function(){gn(e,t),fn=null},300)}}}}),Q("DesktopZoom",{publicMethods:{initDesktopZoom:function(){q||(B?
// if detected hardware touch support, we wait until mouse is used,
// and only then apply desktop-zoom features
ne("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(e){vn={};var t="wheel mousewheel DOMMouseScroll";ne("bindEvents",function(){h.bind(m,t,f.handleMouseWheel)}),ne("unbindEvents",function(){vn&&h.unbind(m,t,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var n,o=function(){f.mouseZoomedIn&&(h.removeClass(m,"pswp--zoomed-in"),f.mouseZoomedIn=!1),I<1?h.addClass(m,"pswp--zoom-allowed"):h.removeClass(m,"pswp--zoom-allowed"),i()},i=function(){n&&(h.removeClass(m,"pswp--dragging"),n=!1)};ne("resize",o),ne("afterChange",o),ne("pointerDown",function(){f.mouseZoomedIn&&(n=!0,h.addClass(m,"pswp--dragging"))}),ne("pointerUp",i),e||o()},handleMouseWheel:function(e){if(I<=f.currItem.fitRatio)return g.modal&&(!g.closeOnScroll||De||Qe?e.preventDefault():z&&2<Math.abs(e.deltaY)&&(
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
(g.modal||t<=ut.min.x&&t>=ut.max.x&&n<=ut.min.y&&n>=ut.max.y)&&e.preventDefault(),
// TODO: use rAF instead of mousewheel?
f.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:C.x/2+_.x,y:C.y/2+_.y};var t=g.getDoubleTapZoom(!0,f.currItem),n=I===t;f.mouseZoomedIn=!n,f.zoomTo(n?f.currItem.initialZoomLevel:t,e,333),h[(n?"remove":"add")+"Class"](m,"pswp--zoomed-in")}}});
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
var yn={history:!0,galleryUID:1},xn,wn,bn,Cn,In,Tn,Sn,En,Dn,kn,On,_n,Mn=function(){return On.hash.substring(1)},An=function(){xn&&clearTimeout(xn),bn&&clearTimeout(bn)},
// pid - Picture index
// gid - Gallery index
Fn=function(){var e=Mn(),t={};if(e.length<5)// pid=1
return t;var n,o=e.split("&");for(n=0;n<o.length;n++)if(o[n]){var i=o[n].split("=");i.length<2||(t[i[0]]=i[1])}if(g.galleryPIDs){
// detect custom pid in hash and search for it among the items collection
var a=t.pid;// if custom pid cannot be found, fallback to the first item
for(n=t.pid=0;n<Xt.length;n++)if(Xt[n].pid===a){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},Rn=function(){if(bn&&clearTimeout(bn),De||Qe)
// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
// that's why we update hash only when no animations running
bn=setTimeout(Rn,500);else{Cn?clearTimeout(wn):Cn=!0;var e=y+1,t=nn(y);t.hasOwnProperty("pid")&&(
// carry forward any custom pid assigned to the item
e=t.pid);var n=Sn+"&gid="+g.galleryUID+"&pid="+e;En||-1===On.hash.indexOf(n)&&(kn=!0);var o=On.href.split("#")[0]+"#"+n;_n?"#"+n!==window.location.hash&&history[En?"replaceState":"pushState"]("",document.title,o):En?On.replace(o):On.hash=n,En=!0,wn=setTimeout(function(){Cn=!1},60)}};Q("History",{publicMethods:{initHistory:function(){if(h.extend(g,yn,!0),g.history){On=window.location,En=Dn=kn=!1,Sn=Mn(),_n="pushState"in history,-1<Sn.indexOf("gid=")&&(Sn=(Sn=Sn.split("&gid=")[0]).split("?gid=")[0]),ne("afterChange",f.updateURL),ne("unbindEvents",function(){h.unbind(window,"hashchange",f.onHashChange)});var e=function(){Tn=!0,Dn||(kn?history.back():Sn?On.hash=Sn:_n?
// remove hash from url without refreshing it or scrolling to top
history.pushState("",document.title,On.pathname+On.search):On.hash=""),An()};ne("unbindEvents",function(){v&&
// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
// this is done to keep the scroll position
e()}),ne("destroy",function(){Tn||e()}),ne("firstUpdate",function(){y=Fn().pid});var t=Sn.indexOf("pid=");-1<t&&"&"===(Sn=Sn.substring(0,t)).slice(-1)&&(Sn=Sn.slice(0,-1)),setTimeout(function(){s&&// hasn't destroyed yet
h.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){if(Mn()===Sn)return Dn=!0,void f.close();Cn||(In=!0,f.goTo(Fn().pid),In=!1)},updateURL:function(){
// Delay the update of URL, to avoid lag during transition, 
// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
An(),In||(En?xn=setTimeout(Rn,800):Rn())}}}),
/*>>history*/
h.extend(f,Ae)}}),
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()}(this,function(){"use strict";var e;return function(o,l){var n=this,e=!1,i=!0,t,s,a,r,u,c,d,p=!0,m,f,h,g,v,y,x,w,b={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,// 2s
addCaptionHTMLFn:function(e,t/*, isFake */){return e.title?(t.children[0].innerHTML=e.title,!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return o.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return o.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},C,I,T=function(e){if(C)return!0;e=e||window.event,w.timeToIdle&&w.mouseUsed&&!f&&
// reset idle timer
P();for(var t,n,o=(e.target||e.srcElement).getAttribute("class")||"",i,a=0;a<H.length;a++)(n=H[a]).onTap&&-1<o.indexOf("pswp__"+n.name)&&(n.onTap(),i=!0);if(i){e.stopPropagation&&e.stopPropagation(),C=!0;
// Some versions of Android don't prevent ghost click event 
// when preventDefault() was called on touchstart and/or touchend.
// 
// This happens on v4.3, 4.2, 4.1, 
// older versions strangely work correctly, 
// but just in case we add delay on all of them)	
var r=l.features.isOldAndroid?600:30;I=setTimeout(function(){C=!1},r)}},S=function(){return!o.likelyTouchDevice||w.mouseUsed||screen.width>w.fitControlsWidth},E=function(e,t,n){l[(n?"add":"remove")+"Class"](e,"pswp__"+t)},
// add class when there is just one item in the gallery
// (by default it hides left/right arrows and 1ofX counter)
D=function(){var e=1===w.getNumItemsFn();e!==x&&(E(s,"ui--one-slide",e),x=e)},k=function(){E(d,"share-modal--hidden",p)},O=function(){return(p=!p)?(l.removeClass(d,"pswp__share-modal--fade-in"),setTimeout(function(){p&&k()},300)):(k(),setTimeout(function(){p||l.addClass(d,"pswp__share-modal--fade-in")},30)),p||M(),!1},_=function(e){var t=(e=e||window.event).target||e.srcElement;return o.shout("shareLinkClick",e,t),!!t.href&&(!!t.hasAttribute("download")||(window.open(t.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),p||O(),!1))},M=function(){for(var e="",t,n,o,i,a,r=0;r<w.shareButtons.length;r++)t=w.shareButtons[r],o=w.getImageURLForShare(t),i=w.getPageURLForShare(t),a=w.getTextForShare(t),e+='<a href="'+(n=t.url.replace("{{url}}",encodeURIComponent(i)).replace("{{image_url}}",encodeURIComponent(o)).replace("{{raw_image_url}}",o).replace("{{text}}",encodeURIComponent(a)))+'" target="_blank" class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>",w.parseShareButtonOut&&(e=w.parseShareButtonOut(t,e));d.children[0].innerHTML=e,d.children[0].onclick=_},A=function(e){for(var t=0;t<w.closeElClasses.length;t++)if(l.hasClass(e,"pswp__"+w.closeElClasses[t]))return!0},F,R,L=0,P=function(){clearTimeout(R),L=0,f&&n.setIdle(!1)},Z=function(e){var t=(e=e||window.event).relatedTarget||e.toElement;t&&"HTML"!==t.nodeName||(clearTimeout(R),R=setTimeout(function(){n.setIdle(!0)},w.timeToIdleOutside))},$=function(){w.fullscreenEl&&!l.features.isOldAndroid&&(t||(t=n.getFullscreenAPI()),t?(l.bind(document,t.eventK,n.updateFullscreen),n.updateFullscreen(),l.addClass(o.template,"pswp--supports-fs")):l.removeClass(o.template,"pswp--supports-fs"))},z=function(){
// Setup loading indicator
w.preloaderEl&&(N(!0),h("beforeChange",function(){clearTimeout(y),
// display loading indicator with delay
y=setTimeout(function(){o.currItem&&o.currItem.loading?(!o.allowProgressiveImg()||o.currItem.img&&!o.currItem.img.naturalWidth)&&
// show preloader if progressive loading is not enabled, 
// or image width is not defined yet (because of slow connection)
N(!1):N(!0)},w.loadingIndicatorDelay)}),h("imageLoadComplete",function(e,t){o.currItem===t&&N(!0)}))},N=function(e){v!==e&&(E(g,"preloader--active",!e),v=e)},U=function(e){var t=e.vGap;if(S()){var n=w.barsSize;if(w.captionEl&&"auto"===n.bottom)if(r||((r=l.createEl("pswp__caption pswp__caption--fake")).appendChild(l.createEl("pswp__caption__center")),s.insertBefore(r,a),l.addClass(s,"pswp__ui--fit")),w.addCaptionHTMLFn(e,r,!0)){var o=r.clientHeight;t.bottom=parseInt(o,10)||44}else t.bottom=n.top;// if no caption, set size of bottom gap to size of top
else t.bottom="auto"===n.bottom?0:n.bottom;
// height of top bar is static, no need to calculate it
t.top=n.top}else t.top=t.bottom=0},B=function(){
// Hide controls when mouse is used
w.timeToIdle&&h("mouseUsed",function(){l.bind(document,"mousemove",P),l.bind(document,"mouseout",Z),F=setInterval(function(){2===++L&&n.setIdle(!0)},w.timeToIdle/2)})},K=function(){
// Hide controls when pinching to close
var t;
// Hide controls on vertical drag
h("onVerticalDrag",function(e){i&&e<.95?n.hideControls():!i&&.95<=e&&n.showControls()}),h("onPinchClose",function(e){i&&e<.9?(n.hideControls(),t=!0):t&&!i&&.9<e&&n.showControls()}),h("zoomGestureEnded",function(){(t=!1)&&!i&&n.showControls()})},H=[{name:"caption",option:"captionEl",onInit:function(e){a=e}},{name:"share-modal",option:"shareEl",onInit:function(e){d=e},onTap:function(){O()}},{name:"button--share",option:"shareEl",onInit:function(e){c=e},onTap:function(){O()}},{name:"button--zoom",option:"zoomEl",onTap:o.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){u=e}},{name:"button--close",option:"closeEl",onTap:o.close},{name:"button--arrow--left",option:"arrowEl",onTap:o.prev},{name:"button--arrow--right",option:"arrowEl",onTap:o.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){t.isFullscreen()?t.exit():t.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){g=e}}],W=function(){var i,a,r,e=function(e){if(e)for(var t=e.length,n=0;n<t;n++){i=e[n],a=i.className;for(var o=0;o<H.length;o++)r=H[o],-1<a.indexOf("pswp__"+r.name)&&(w[r.option]?(// if element is not disabled from options
l.removeClass(i,"pswp__element--disabled"),r.onInit&&r.onInit(i)):l.addClass(i,"pswp__element--disabled"))}};e(s.children);var t=l.getChildByClass(s,"pswp__top-bar");t&&e(t.children)};n.init=function(){
// extend options
l.extend(o.options,b,!0),
// create local link for fast access
w=o.options,
// find pswp__ui element
s=l.getChildByClass(o.scrollWrap,"pswp__ui"),
// create local link
h=o.listen,K(),
// update controls when slides change
h("beforeChange",n.update),
// toggle zoom on double-tap
h("doubleTap",function(e){var t=o.currItem.initialZoomLevel;o.getZoomLevel()!==t?o.zoomTo(t,e,333):o.zoomTo(w.getDoubleTapZoom(!1,o.currItem),e,333)}),
// Allow text selection in caption
h("preventDragEvent",function(e,t,n){var o=e.target||e.srcElement;o&&o.getAttribute("class")&&-1<e.type.indexOf("mouse")&&(0<o.getAttribute("class").indexOf("__caption")||/(SMALL|STRONG|EM)/i.test(o.tagName))&&(n.prevent=!1)}),
// bind events for UI
h("bindEvents",function(){l.bind(s,"pswpTap click",T),l.bind(o.scrollWrap,"pswpTap",n.onGlobalTap),o.likelyTouchDevice||l.bind(o.scrollWrap,"mouseover",n.onMouseOver)}),
// unbind events for UI
h("unbindEvents",function(){p||O(),F&&clearInterval(F),l.unbind(document,"mouseout",Z),l.unbind(document,"mousemove",P),l.unbind(s,"pswpTap click",T),l.unbind(o.scrollWrap,"pswpTap",n.onGlobalTap),l.unbind(o.scrollWrap,"mouseover",n.onMouseOver),t&&(l.unbind(document,t.eventK,n.updateFullscreen),t.isFullscreen()&&(w.hideAnimationDuration=0,t.exit()),t=null)}),
// clean up things when gallery is destroyed
h("destroy",function(){w.captionEl&&(r&&s.removeChild(r),l.removeClass(a,"pswp__caption--empty")),d&&(d.children[0].onclick=null),l.removeClass(s,"pswp__ui--over-close"),l.addClass(s,"pswp__ui--hidden"),n.setIdle(!1)}),w.showAnimationDuration||l.removeClass(s,"pswp__ui--hidden"),h("initialZoomIn",function(){w.showAnimationDuration&&l.removeClass(s,"pswp__ui--hidden")}),h("initialZoomOut",function(){l.addClass(s,"pswp__ui--hidden")}),h("parseVerticalMargin",U),W(),w.shareEl&&c&&d&&(p=!0),D(),B(),$(),z()},n.setIdle=function(e){E(s,"ui--idle",f=e)},n.update=function(){
// Don't update UI if it's hidden
e=!(!i||!o.currItem)&&(n.updateIndexIndicator(),w.captionEl&&(w.addCaptionHTMLFn(o.currItem,a),E(a,"caption--empty",!o.currItem.title)),!0),p||O(),D()},n.updateFullscreen=function(e){e&&
// some browsers change window scroll position during the fullscreen
// so PhotoSwipe updates it just in case
setTimeout(function(){o.setScrollOffset(0,l.getScrollY())},50),
// toogle pswp--fs class on root element
l[(t.isFullscreen()?"add":"remove")+"Class"](o.template,"pswp--fs")},n.updateIndexIndicator=function(){w.counterEl&&(u.innerHTML=o.getCurrentIndex()+1+w.indexIndicatorSep+w.getNumItemsFn())},n.onGlobalTap=function(e){var t=(e=e||window.event).target||e.srcElement;if(!C)if(e.detail&&"mouse"===e.detail.pointerType){
// close gallery if clicked outside of the image
if(A(t))return void o.close();l.hasClass(t,"pswp__img")&&(1===o.getZoomLevel()&&o.getZoomLevel()<=o.currItem.fitRatio?w.clickToCloseNonZoomable&&o.close():o.toggleDesktopZoom(e.detail.releasePoint))}else
// tap to close gallery
if(
// tap anywhere (except buttons) to toggle visibility of controls
w.tapToToggleControls&&(i?n.hideControls():n.showControls()),w.tapToClose&&(l.hasClass(t,"pswp__img")||A(t)))return void o.close()},n.onMouseOver=function(e){var t=(e=e||window.event).target||e.srcElement;
// add class when mouse is over an element that should close the gallery
E(s,"ui--over-close",A(t))},n.hideControls=function(){l.addClass(s,"pswp__ui--hidden"),i=!1},n.showControls=function(){i=!0,e||n.update(),l.removeClass(s,"pswp__ui--hidden")},n.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},n.getFullscreenAPI=function(){var e=document.documentElement,t,n="fullscreenchange";return e.requestFullscreen?t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}:e.mozRequestFullScreen?t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}:e.webkitRequestFullscreen?t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}:e.msRequestFullscreen&&(t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),t&&(t.enter=function(){if(
// disable close-on-scroll in fullscreen
m=w.closeOnScroll,w.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK)return o.template[this.enterK]();o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},t.exit=function(){return w.closeOnScroll=m,document[this.exitK]()},t.isFullscreen=function(){return document[this.elementK]}),t}}}),jQuery(document).ready(function(){$(document).keyup(function(e){27==e.keyCode&&// escape key maps to keycode `27`
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
var c=function(e){for(var t=[],n=document.querySelectorAll(e),o=0;o<n.length;o++){var i=n[o],a,r,l;// <a> element
r=(a=i.children[0]).getAttribute("data-size").split("x"),
// create slide object
l={src:a.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},1<i.children.length&&(
// <figcaption> content
l.title=i.children[1].innerHTML),0<a.children.length&&(
// <img> thumbnail element, retrieving thumbnail url
l.msrc=a.children[0].getAttribute("src")),l.el=i,// save link to element for getThumbBoundsFn
t.push(l)}return t},l=function e(t,n){return t&&(n(t)?t:e(t.parentNode,n))},t=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,n=l(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});
// find root element of slide
if(n){for(var o=n.getAttribute("data-selector"),i=document.querySelectorAll(o),a,r=0;r<i.length;r++)i[r]===n&&(a=r);return 0<=a&&
// open PhotoSwipe if valid index found
s(a,n),!1}},n=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),o=0;o<n.length;o++)if(n[o]){var i=n[o].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t},s=function(e,t,n,o){var i=document.querySelectorAll(".pswp")[0],a,r,l,s=t.getAttribute("data-selector");
// PhotoSwipe opened from URL
if(l=c(s),
// define options (if needed)
r={
// define gallery index (for URL)
galleryUID:t.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){
// See Options -> getThumbBoundsFn section of documentation for more info
var t=l[e].el.getElementsByTagName("img")[0],// find thumbnail
n=window.pageYOffset||document.documentElement.scrollTop,o=t.getBoundingClientRect();return{x:o.left,y:o.top+n,w:o.width}}},o)if(r.galleryPIDs){
// parse real index when custom PIDs are used 
// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
for(var u=0;u<l.length;u++)if(l[u].pid==e){r.index=u;break}}else
// in URL indexes start from 1
r.index=parseInt(e,10)-1;else r.index=parseInt(e,10);
// exit if index not found
isNaN(r.index)||(n&&(r.showAnimationDuration=0),(
// Pass data to PhotoSwipe and initialize it
a=new PhotoSwipe(i,PhotoSwipeUI_Default,l,r)).init())},o=document.querySelectorAll(e),i=0,a=o.length
// find nearest parent element
;i<a;i++)o[i].setAttribute("data-pswp-uid",i+1),o[i].setAttribute("data-selector",e),o[i].onclick=t;
// Parse URL and open gallery if it contains #&pid=3&gid=1
var r=n();r.pid&&r.gid&&s(r.pid,o[r.gid-1],!0,!0)}(".my-gallery")});