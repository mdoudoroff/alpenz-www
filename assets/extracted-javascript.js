
function navHover() {
    $(".main_navigation li").each(function() {
        $(this).children("ul").length && $(this).addClass("children")
    })
}
function homepageSlider() {
    "use strict";
    var t = $(".header").outerHeight(), e = $(window).innerHeight(), n = e - t;
    900 > n && ($(".slides").css("height", n), $(".slide").css("height", n))
}
function navToggle() {
    $(".toggle").click(function() {
        return $("#menu-main-menu").slideToggle("fast"), !1
    })
}
function productView() {
    var t = $.cookie("ha_portfolio_view");
    "undefined" != typeof t && null !== t && ($(".products").hasClass(t) || ($(".products").removeClass("grid list").addClass(t), $(".view").removeClass("grid list").addClass(t)))
}
function viewToggle() {
    $(".view a").click(function() {
        var t = $(this).attr("class");
        return $.cookie("ha_portfolio_view", t, {
            expires: 30,
            path: "/"
        }), $(".products").removeClass("grid list condensed").addClass(t), $(".view").removeClass("grid list condensed").addClass(t), !1
    })
}
function setupToggle() {
    $(".setup_toggle").click(function() {
        var t = $(this).parent().parent().parent().parent().next(".setup");
        return t.slideToggle("fast"), !1
    })
}
function stickySidebar() {
    $("#sidebar").stick_in_parent().on("sticky_kit:stick", function(t) {
        console.log("has stuck!", t.target)
    }).on("sticky_kit:unstick", function(t) {
        console.log("has unstuck!", t.target)
    })
}
function artMasonry() {
    var t = $(".artwork");
    t.imagesLoaded(function() {
        t.masonry({
            columnWidth: ".grid-sizer",
            gutter: 30,
            itemSelector: ".art"
        })
    })
}
function labelMasonry() {
    var t = $(".grid .facetwp-template");
    t.masonry({
        columnWidth: 168,
        gutter: 30,
        itemSelector: ".type-product"
    })
}
function quickview() {
    $(".quickview").fancybox({
        type: "inline",
        padding: 30,
        openEffect: "none",
        closeEffect: "none",
        fitToView: !1,
        autoSize: !1,
        maxWidth: 800,
        maxHeight: 400,
        width: 800,
        height: 400,
        helpers: {
            overlay: {
                locked: !1,
                css: {
                    background: "rgba(0, 0, 0, 0.8)"
                }
            }
        }
    })
}
function imagePopup() {
    $(".fancybox").fancybox({
        padding: 6,
        openEffect: "none",
        closeEffect: "none",
        prevEffect: "fade",
        nextEffect: "fade",
        helpers: {
            overlay: {
                locked: !1,
                css: {
                    background: "rgba(0, 0, 0, 0.8)"
                }
            }
        }
    })
}
function select2() {
    $(".facetwp-dropdown").select2()
}
window.Modernizr = function(t, e, n) {
    function i(t) {
        g.cssText = t
    }
    function o(t, e) {
        return i(w.join(t + ";") + (e || ""))
    }
    function r(t, e) {
        return typeof t === e
    }
    function a(t, e) {
        return !!~("" + t).indexOf(e)
    }
    function s(t, e) {
        for (var i in t) {
            var o = t[i];
            if (!a(o, "-") && g[o] !== n)
                return "pfx" == e ? o : !0
        }
        return !1
    }
    function c(t, e, i) {
        for (var o in t) {
            var a = e[t[o]];
            if (a !== n)
                return i===!1 ? t[o] : r(a, "function") ? a.bind(i || e) : a
        }
        return !1
    }
    function l(t, e, n) {
        var i = t.charAt(0).toUpperCase() + t.slice(1), o = (t + " " + _.join(i + " ") + i).split(" ");
        return r(e, "string") || r(e, "undefined") ? s(o, e) : (o = (t + " " + E.join(i + " ") + i).split(" "), c(o, e, n))
    }
    function u() {
        p.input = function(n) {
            for (var i = 0, o = n.length; o > i; i++)
                I[n[i]]=!!(n[i]in y);
            return I.list && (I.list=!(!e.createElement("datalist") ||!t.HTMLDataListElement)), I
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function(t) {
            for (var i = 0, o, r, a, s = t.length; s > i; i++)
                y.setAttribute("type", r = t[i]), o = "text" !== y.type, o && (y.value = b, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && y.style.WebkitAppearance !== n ? (h.appendChild(y), a = e.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(y, null).WebkitAppearance && 0 !== y.offsetHeight, h.removeChild(y)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? y.checkValidity && y.checkValidity()===!1 : y.value != b)), L[t[i]]=!!o;
            return L
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.6.2", p = {}, f=!0, h = e.documentElement, m = "modernizr", v = e.createElement(m), g = v.style, y = e.createElement("input"), b = ":)", x = {}.toString, w = " -webkit- -moz- -o- -ms- ".split(" "), S = "Webkit Moz O ms", _ = S.split(" "), E = S.toLowerCase().split(" "), C = {
        svg: "http://www.w3.org/2000/svg"
    }, T = {}, L = {}, I = {}, k = [], O = k.slice, z, P = function(t, n, i, o) {
        var r, a, s, c, l = e.createElement("div"), u = e.body, d = u || e.createElement("body");
        if (parseInt(i, 10))
            for (; i--;)
                s = e.createElement("div"), s.id = o ? o[i] : m + (i + 1), l.appendChild(s);
        return r = ["&#173;", '<style id="s', m, '">', t, "</style>"].join(""), l.id = m, (u ? l : d).innerHTML += r, d.appendChild(l), u || (d.style.background = "", d.style.overflow = "hidden", c = h.style.overflow, h.style.overflow = "hidden", h.appendChild(d)), a = n(l, t), u ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), h.style.overflow = c), !!a
    }, W = function() {
        function t(t, o) {
            o = o || e.createElement(i[t] || "div"), t = "on" + t;
            var a = t in o;
            return a || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), a = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, a
        }
        var i = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return t
    }(), M = {}.hasOwnProperty, A;
    A = r(M, "undefined") || r(M.call, "undefined") ? function(t, e) {
        return e in t && r(t.constructor.prototype[e], "undefined")
    } : function(t, e) {
        return M.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function N(t) {
        var e = this;
        if ("function" != typeof e)
            throw new TypeError;
        var n = O.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var o = function() {};
                o.prototype = e.prototype;
                var r = new o, a = e.apply(r, n.concat(O.call(arguments)));
                return Object(a) === a ? a : r
            }
            return e.apply(t, n.concat(O.call(arguments)))
        };
        return i
    }), T.flexbox = function() {
        return l("flexWrap")
    }, T.canvas = function() {
        var t = e.createElement("canvas");
        return !(!t.getContext ||!t.getContext("2d"))
    }, T.canvastext = function() {
        return !(!p.canvas ||!r(e.createElement("canvas").getContext("2d").fillText, "function"))
    }, T.webgl = function() {
        return !!t.WebGLRenderingContext
    }, T.touch = function() {
        var n;
        return "ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch ? n=!0 : P(["@media (", w.join("touch-enabled),("), m, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
            n = 9 === t.offsetTop
        }), n
    }, T.geolocation = function() {
        return "geolocation"in navigator
    }, T.postmessage = function() {
        return !!t.postMessage
    }, T.websqldatabase = function() {
        return !!t.openDatabase
    }, T.indexedDB = function() {
        return !!l("indexedDB", t)
    }, T.hashchange = function() {
        return W("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
    }, T.history = function() {
        return !(!t.history ||!history.pushState)
    }, T.draganddrop = function() {
        var t = e.createElement("div");
        return "draggable"in t || "ondragstart"in t && "ondrop"in t
    }, T.websockets = function() {
        return "WebSocket"in t || "MozWebSocket"in t
    }, T.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"), a(g.backgroundColor, "rgba")
    }, T.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"), a(g.backgroundColor, "rgba") || a(g.backgroundColor, "hsla")
    }, T.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
    }, T.backgroundsize = function() {
        return l("backgroundSize")
    }, T.borderimage = function() {
        return l("borderImage")
    }, T.borderradius = function() {
        return l("borderRadius")
    }, T.boxshadow = function() {
        return l("boxShadow")
    }, T.textshadow = function() {
        return "" === e.createElement("div").style.textShadow
    }, T.opacity = function() {
        return o("opacity:.55"), /^0.55$/.test(g.opacity)
    }, T.cssanimations = function() {
        return l("animationName")
    }, T.csscolumns = function() {
        return l("columnCount")
    }, T.cssgradients = function() {
        var t = "background-image:", e = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return i((t + "-webkit- ".split(" ").join(e + t) + w.join(n + t)).slice(0, - t.length)), a(g.backgroundImage, "gradient")
    }, T.cssreflections = function() {
        return l("boxReflect")
    }, T.csstransforms = function() {
        return !!l("transform")
    }, T.csstransforms3d = function() {
        var t=!!l("perspective");
        return t && "webkitPerspective"in h.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight
        }), t
    }, T.csstransitions = function() {
        return l("transition")
    }, T.fontface = function() {
        var t;
        return P('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
            var o = e.getElementById("smodernizr"), r = o.sheet || o.styleSheet, a = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText: r.cssText || "": "";
            t = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
        }), t
    }, T.generatedcontent = function() {
        var t;
        return P(["#", m, "{font:0/0 a}#", m, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
            t = e.offsetHeight >= 3
        }), t
    }, T.video = function() {
        var t = e.createElement("video"), n=!1;
        try {
            (n=!!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (i) {}
        return n
    }, T.audio = function() {
        var t = e.createElement("audio"), n=!1;
        try {
            (n=!!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (i) {}
        return n
    }, T.localstorage = function() {
        try {
            return localStorage.setItem(m, m), localStorage.removeItem(m), !0
        } catch (t) {
            return !1
        }
    }, T.sessionstorage = function() {
        try {
            return sessionStorage.setItem(m, m), sessionStorage.removeItem(m), !0
        } catch (t) {
            return !1
        }
    }, T.webworkers = function() {
        return !!t.Worker
    }, T.applicationcache = function() {
        return !!t.applicationCache
    }, T.svg = function() {
        return !!e.createElementNS&&!!e.createElementNS(C.svg, "svg").createSVGRect
    }, T.inlinesvg = function() {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == C.svg
    }, T.smil = function() {
        return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(C.svg, "animate")))
    }, T.svgclippaths = function() {
        return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(C.svg, "clipPath")))
    };
    for (var j in T)
        A(T, j) && (z = j.toLowerCase(), p[z] = T[j](), k.push((p[z] ? "" : "no-") + z));
    return p.input || u(), p.addTest = function(t, e) {
        if ("object" == typeof t)
            for (var i in t)
                A(t, i) && p.addTest(i, t[i]);
        else {
            if (t = t.toLowerCase(), p[t] !== n)
                return p;
            e = "function" == typeof e ? e() : e, "undefined" != typeof f && f && (h.className += " " + (e ? "" : "no-") + t), p[t] = e
        }
        return p
    }, i(""), v = y = null, function(t, e) {
        function n(t, e) {
            var n = t.createElement("p"), i = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var t = g.elements;
            return "string" == typeof t ? t.split(" ") : t
        }
        function o(t) {
            var e = m[t[f]];
            return e || (e = {}, h++, t[f] = h, m[h] = e), e
        }
        function r(t, n, i) {
            if (n || (n = e), v)
                return n.createElement(t);
            i || (i = o(n));
            var r;
            return r = i.cache[t] ? i.cache[t].cloneNode() : d.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), r.canHaveChildren&&!u.test(t) ? i.frag.appendChild(r) : r
        }
        function a(t, n) {
            if (t || (t = e), v)
                return t.createDocumentFragment();
            n = n || o(t);
            for (var r = n.frag.cloneNode(), a = 0, s = i(), c = s.length; c > a; a++)
                r.createElement(s[a]);
            return r
        }
        function s(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                return g.shivMethods ? r(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(t) {
                return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
            }) + ");return n}")(g, e.frag)
        }
        function c(t) {
            t || (t = e);
            var i = o(t);
            return !g.shivCSS || p || i.hasCSS || (i.hasCSS=!!n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), v || s(t, i), t
        }
        var l = t.html5 || {}, u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p, f = "_html5shiv", h = 0, m = {}, v;
        !function() {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", p = "hidden"in t, v = 1 == t.childNodes.length || function() {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                }()
            } catch (n) {
                p=!0, v=!0
            }
        }();
        var g = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: l.shivCSS!==!1,
            supportsUnknownElements: v,
            shivMethods: l.shivMethods!==!1,
            type: "default",
            shivDocument: c,
            createElement: r,
            createDocumentFragment: a
        };
        t.html5 = g, c(e)
    }(this, e), p._version = d, p._prefixes = w, p._domPrefixes = E, p._cssomPrefixes = _, p.hasEvent = W, p.testProp = function(t) {
        return s([t])
    }, p.testAllProps = l, p.testStyles = P, p.prefixed = function(t, e, n) {
        return e ? l(t, e, n) : l(t, "pfx")
    }, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + k.join(" ") : ""), p
}(this, this.document), function(t, e, n) {
    function i(t) {
        return "[object Function]" == h.call(t)
    }
    function o(t) {
        return "string" == typeof t
    }
    function r() {}
    function a(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }
    function s() {
        var t = m.shift();
        v = 1, t ? t.t ? p(function() {
            ("c" == t.t ? L.injectCss : L.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        }, 0) : (t(), s()) : v = 0
    }
    function c(t, n, i, o, r, c, l) {
        function u(e) {
            if (!h && a(d.readyState) && (x.r = h = 1, !v && s(), d.onload = d.onreadystatechange = null, e)) {
                "img" != t && p(function() {
                    b.removeChild(d)
                }, 50);
                for (var i in E[n])
                    E[n].hasOwnProperty(i) && E[n][i].onload()
            }
        }
        var l = l || L.errorTimeout, d = e.createElement(t), h = 0, g = 0, x = {
            t: i,
            s: n,
            e: r,
            a: c,
            x: l
        };
        1 === E[n] && (g = 1, E[n] = []), "object" == t ? d.data = n : (d.src = n, d.type = t), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
            u.call(this, g)
        }, m.splice(o, 0, x), "img" != t && (g || 2 === E[n] ? (b.insertBefore(d, y ? null : f), p(u, l)) : E[n].push(d))
    }
    function l(t, e, n, i, r) {
        return v = 0, e = e || "j", o(t) ? c("c" == e ? w : x, t, e, this.i++, n, i, r) : (m.splice(this.i++, 0, t), 1 == m.length && s()), this
    }
    function u() {
        var t = L;
        return t.loader = {
            load: l,
            i: 0
        }, t
    }
    var d = e.documentElement, p = t.setTimeout, f = e.getElementsByTagName("script")[0], h = {}.toString, m = [], v = 0, g = "MozAppearance"in d.style, y = g&&!!e.createRange().compareNode, b = y ? d: f.parentNode, d = t.opera && "[object Opera]" == h.call(t.opera), d=!!e.attachEvent&&!d, x = g ? "object" : d ? "script" : "img", w = d ? "script" : x, S = Array.isArray || function(t) {
        return "[object Array]" == h.call(t)
    }, _ = [], E = {}, C = {
        timeout: function(t, e) {
            return e.length && (t.timeout = e[0]), t
        }
    }, T, L;
    L = function(t) {
        function e(t) {
            var t = t.split("!"), e = _.length, n = t.pop(), i = t.length, n = {
                url: n,
                origUrl: n,
                prefixes: t
            }, o, r, a;
            for (r = 0; i > r; r++)
                a = t[r].split("="), (o = C[a.shift()]) && (n = o(n, a));
            for (r = 0; e > r; r++)
                n = _[r](n);
            return n
        }
        function a(t, o, r, a, s) {
            var c = e(t), l = c.autoCallback;
            c.url.split(".").pop().split("?").shift(), c.bypass || (o && (o = i(o) ? o : o[t] || o[a] || o[t.split("/").pop().split("?")[0]]), c.instead ? c.instead(t, o, r, a, s) : (E[c.url] ? c.noexec=!0 : E[c.url] = 1, r.load(c.url, c.forceCSS ||!c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (i(o) || i(l)) && r.load(function() {
                u(), o && o(c.origUrl, s, a), l && l(c.origUrl, s, a), E[c.url] = 2
            })))
        }
        function s(t, e) {
            function n(t, n) {
                if (t) {
                    if (o(t))
                        n || (l = function() {
                            var t = [].slice.call(arguments);
                            u.apply(this, t), d()
                        }), a(t, l, e, 0, s);
                    else if (Object(t) === t)
                        for (f in p = function() {
                            var e = 0, n;
                            for (n in t)
                                t.hasOwnProperty(n) && e++;
                                return e
                            }(), t)
                                t.hasOwnProperty(f) && (!n&&!--p && (i(l) ? l = function() {
                                    var t = [].slice.call(arguments);
                                    u.apply(this, t), d()
                                } : l[f] = function(t) {
                                    return function() {
                                        var e = [].slice.call(arguments);
                                        t && t.apply(this, e), d()
                                    }
                                }(u[f])), a(t[f], l, e, f, s))
                } else 
                    !n && d()
            }
            var s=!!t.test, c = t.load || t.both, l = t.callback || r, u = l, d = t.complete || r, p, f;
            n(s ? t.yep : t.nope, !!c), c && n(c)
        }
        var c, l, d = this.yepnope.loader;
        if (o(t))
            a(t, 0, d, 0);
        else if (S(t))
            for (c = 0; c < t.length; c++)
                l = t[c], o(l) ? a(l, 0, d, 0) : S(l) ? L(l) : Object(l) === l && s(l, d);
        else 
            Object(t) === t && s(t, d)
    }, L.addPrefix = function(t, e) {
        C[t] = e
    }, L.addFilter = function(t) {
        _.push(t)
    }, L.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", T = function() {
        e.removeEventListener("DOMContentLoaded", T, 0), e.readyState = "complete"
    }, 0)), t.yepnope = u(), t.yepnope.executeStack = s, t.yepnope.injectJs = function(t, n, i, o, c, l) {
        var u = e.createElement("script"), d, h, o = o || L.errorTimeout;
        u.src = t;
        for (h in i)
            u.setAttribute(h, i[h]);
        n = l ? s : n || r, u.onreadystatechange = u.onload = function() {
            !d && a(u.readyState) && (d = 1, n(), u.onload = u.onreadystatechange = null)
        }, p(function() {
            d || (d = 1, n(1))
        }, o), c ? u.onload() : f.parentNode.insertBefore(u, f)
    }, t.yepnope.injectCss = function(t, n, i, o, a, c) {
        var o = e.createElement("link"), l, n = c ? s: n || r;
        o.href = t, o.rel = "stylesheet", o.type = "text/css";
        for (l in i)
            o.setAttribute(l, i[l]);
        a || (f.parentNode.insertBefore(o, f), p(n, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, /*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
function() {
    function t() {}
    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n].listener === e)
                return n;
        return - 1
    }
    function n(t) {
        return function e() {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype, o = this, r = o.EventEmitter;
    i.getListeners = function a(t) {
        var e = this._getEvents(), n, i;
        if ("object" == typeof t) {
            n = {};
            for (i in e)
                e.hasOwnProperty(i) && t.test(i) && (n[i] = e[i])
        } else 
            n = e[t] || (e[t] = []);
        return n
    }, i.flattenListeners = function s(t) {
        var e = [], n;
        for (n = 0; n < t.length; n += 1)
            e.push(t[n].listener);
        return e
    }, i.getListenersAsObject = function c(t) {
        var e = this.getListeners(t), n;
        return e instanceof Array && (n = {}, n[t] = e), n || e
    }, i.addListener = function l(t, n) {
        var i = this.getListenersAsObject(t), o = "object" == typeof n, r;
        for (r in i)
            i.hasOwnProperty(r)&&-1 === e(i[r], n) && i[r].push(o ? n : {
                listener: n,
                once: !1
            });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function u(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function d(t) {
        return this.getListeners(t), this
    }, i.defineEvents = function p(t) {
        for (var e = 0; e < t.length; e += 1)
            this.defineEvent(t[e]);
        return this
    }, i.removeListener = function f(t, n) {
        var i = this.getListenersAsObject(t), o, r;
        for (r in i)
            i.hasOwnProperty(r) && (o = e(i[r], n), - 1 !== o && i[r].splice(o, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function h(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function m(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function v(t, e, n) {
        var i, o, r = t ? this.removeListener: this.addListener, a = t ? this.removeListeners: this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = n.length; i--;)
                r.call(this, e, n[i]);
        else 
            for (i in e)
                e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
        return this
    }, i.removeEvent = function g(t) {
        var e = typeof t, n = this._getEvents(), i;
        if ("string" === e)
            delete n[t];
        else if ("object" === e)
            for (i in n)
                n.hasOwnProperty(i) && t.test(i) && delete n[i];
        else 
            delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function y(t, e) {
        var n = this.getListenersAsObject(t), i, o, r, a;
        for (r in n)
            if (n.hasOwnProperty(r))
                for (o = n[r].length; o--;)
                    i = n[r][o], i.once===!0 && this.removeListener(t, i.listener), a = i.listener.apply(this, e || []), a === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function b(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function x(t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function w() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function S() {
        return this._events || (this._events = {})
    }, t.noConflict = function _() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function(t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }
    var n = document.documentElement, i = function() {};
    n.addEventListener ? i = function(t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function(t, n, i) {
        t[n + i] = i.handleEvent ? function() {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function() {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function() {};
    n.removeEventListener ? o = function(t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function(t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {
        bind: i,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
}(this), function(t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
        return e(t, n, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventEmitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(this, function t(e, n, i) {
    function o(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function r(t) {
        return "[object Array]" === p.call(t)
    }
    function a(t) {
        var e = [];
        if (r(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var n = 0, i = t.length; i > n; n++)
                e.push(t[n]);
        else 
            e.push(t);
        return e
    }
    function s(t, e, n) {
        if (!(this instanceof s))
            return new s(t, e);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = a(t), this.options = o({}, this.options), "function" == typeof e ? n = e : o(this.options, e), n && this.on("always", n), this.getImages(), $ && (this.jqDeferred = new $.Deferred);
        var i = this;
        setTimeout(function() {
            i.check()
        })
    }
    function c(t) {
        this.img = t
    }
    function l(t) {
        this.src = t, f[t] = this
    }
    var $ = e.jQuery, u = e.console, d = "undefined" != typeof u, p = Object.prototype.toString;
    s.prototype = new n, s.prototype.options = {}, s.prototype.getImages = function() {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
            var n = this.elements[t];
            "IMG" === n.nodeName && this.addImage(n);
            for (var i = n.querySelectorAll("img"), o = 0, r = i.length; r > o; o++) {
                var a = i[o];
                this.addImage(a)
            }
        }
    }, s.prototype.addImage = function(t) {
        var e = new c(t);
        this.images.push(e)
    }, s.prototype.check = function() {
        function t(t, o) {
            return e.options.debug && d && u.log("confirm", t, o), e.progress(t), n++, n === i && e.complete(), !0
        }
        var e = this, n = 0, i = this.images.length;
        if (this.hasAnyBroken=!1, !i)
            return void this.complete();
        for (var o = 0; i > o; o++) {
            var r = this.images[o];
            r.on("confirm", t), r.check()
        }
    }, s.prototype.progress = function(t) {
        this.hasAnyBroken = this.hasAnyBroken ||!t.isLoaded;
        var e = this;
        setTimeout(function() {
            e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }, s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail": "done";
        this.isComplete=!0;
        var e = this;
        setTimeout(function() {
            if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                var n = e.hasAnyBroken ? "reject": "resolve";
                e.jqDeferred[n](e)
            }
        })
    }, $ && ($.fn.imagesLoaded = function(t, e) {
        var n = new s(this, t, e);
        return n.jqDeferred.promise($(this))
    }), c.prototype = new n, c.prototype.check = function() {
        var t = f[this.img.src] || new l(this.img.src);
        if (t.isConfirmed)
            return void this.confirm(t.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var e = this;
        t.on("confirm", function(t, n) {
            return e.confirm(t.isLoaded, n), !0
        }), t.check()
    }, c.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emit("confirm", this, e)
    };
    var f = {};
    return l.prototype = new n, l.prototype.check = function() {
        if (!this.isChecked) {
            var t = new Image;
            i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked=!0
        }
    }, l.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, l.prototype.onload = function(t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, l.prototype.onerror = function(t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, l.prototype.confirm = function(t, e) {
        this.isConfirmed=!0, this.isLoaded = t, this.emit("confirm", this, e)
    }, l.prototype.unbindProxyEvents = function(t) {
        i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
    }, s
}), function(t) {
    function e() {}
    function n($) {
        function t(t) {
            t.prototype.option || (t.prototype.option = function(t) {
                $.isPlainObject(t) && (this.options = $.extend(!0, this.options, t))
            })
        }
        function n(t, e) {
            $.fn[t] = function(n) {
                if ("string" == typeof n) {
                    for (var r = i.call(arguments, 1), a = 0, s = this.length; s > a; a++) {
                        var c = this[a], l = $.data(c, t);
                        if (l)
                            if ($.isFunction(l[n]) && "_" !== n.charAt(0)) {
                                var u = l[n].apply(l, r);
                                if (void 0 !== u)
                                    return u
                            } else 
                                o("no such method '" + n + "' for " + t + " instance");
                            else 
                                o("cannot call methods on " + t + " prior to initialization; attempted to call '" + n + "'")
                            }
                    return this
                }
                return this.each(function() {
                    var i = $.data(this, t);
                    i ? (i.option(n), i._init()) : (i = new e(this, n), $.data(this, t, i))
                })
            }
        }
        if ($) {
            var o = "undefined" == typeof console ? e: function(t) {
                console.error(t)
            };
            return $.bridget = function(e, i) {
                t(i), n(e, i)
            }, $.bridget
        }
    }
    var i = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n(t.jQuery)
}(window), function(t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }
    var n = document.documentElement, i = function() {};
    n.addEventListener ? i = function(t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function(t, n, i) {
        t[n + i] = i.handleEvent ? function() {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function() {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function() {};
    n.removeEventListener ? o = function(t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function(t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {
        bind: i,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function n(t) {
        var n = "readystatechange" === t.type && "complete" !== o.readyState;
        if (!e.isReady&&!n) {
            e.isReady=!0;
            for (var i = 0, a = r.length; a > i; i++) {
                var s = r[i];
                s()
            }
        }
    }
    function i(i) {
        return i.bind(o, "DOMContentLoaded", n), i.bind(o, "readystatechange", n), i.bind(t, "load", n), e
    }
    var o = t.document, r = [];
    e.isReady=!1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], i)) : t.docReady = i(t.eventie)
}(this), /*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
function() {
    function t() {}
    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n].listener === e)
                return n;
        return - 1
    }
    function n(t) {
        return function e() {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype, o = this, r = o.EventEmitter;
    i.getListeners = function a(t) {
        var e = this._getEvents(), n, i;
        if (t instanceof RegExp) {
            n = {};
            for (i in e)
                e.hasOwnProperty(i) && t.test(i) && (n[i] = e[i])
        } else 
            n = e[t] || (e[t] = []);
        return n
    }, i.flattenListeners = function s(t) {
        var e = [], n;
        for (n = 0; n < t.length; n += 1)
            e.push(t[n].listener);
        return e
    }, i.getListenersAsObject = function c(t) {
        var e = this.getListeners(t), n;
        return e instanceof Array && (n = {}, n[t] = e), n || e
    }, i.addListener = function l(t, n) {
        var i = this.getListenersAsObject(t), o = "object" == typeof n, r;
        for (r in i)
            i.hasOwnProperty(r)&&-1 === e(i[r], n) && i[r].push(o ? n : {
                listener: n,
                once: !1
            });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function u(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function d(t) {
        return this.getListeners(t), this
    }, i.defineEvents = function p(t) {
        for (var e = 0; e < t.length; e += 1)
            this.defineEvent(t[e]);
        return this
    }, i.removeListener = function f(t, n) {
        var i = this.getListenersAsObject(t), o, r;
        for (r in i)
            i.hasOwnProperty(r) && (o = e(i[r], n), - 1 !== o && i[r].splice(o, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function h(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function m(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function v(t, e, n) {
        var i, o, r = t ? this.removeListener: this.addListener, a = t ? this.removeListeners: this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = n.length; i--;)
                r.call(this, e, n[i]);
        else 
            for (i in e)
                e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
        return this
    }, i.removeEvent = function g(t) {
        var e = typeof t, n = this._getEvents(), i;
        if ("string" === e)
            delete n[t];
        else if (t instanceof RegExp)
            for (i in n)
                n.hasOwnProperty(i) && t.test(i) && delete n[i];
        else 
            delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function y(t, e) {
        var n = this.getListenersAsObject(t), i, o, r, a;
        for (r in n)
            if (n.hasOwnProperty(r))
                for (o = n[r].length; o--;)
                    i = n[r][o], i.once===!0 && this.removeListener(t, i.listener), a = i.listener.apply(this, e || []), a === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function b(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function x(t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function w() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function S() {
        return this._events || (this._events = {})
    }, t.noConflict = function _() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof i[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = n.length; r > o; o++)
                if (e = n[o] + t, "string" == typeof i[e])
                    return e
        }
    }
    var n = "Webkit Moz ms Ms O".split(" "), i = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t, e) {
    function n(t) {
        var e = parseFloat(t), n =- 1 === t.indexOf("%")&&!isNaN(e);
        return n && e
    }
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, n = s.length; n > e; e++) {
            var i = s[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        function e(t) {
            if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = a(t);
                if ("none" === e.display)
                    return i();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var u = r.isBorderBox=!(!c ||!e[c] || "border-box" !== e[c]), d = 0, p = s.length; p > d; d++) {
                    var f = s[d], h = e[f];
                    h = o(t, h);
                    var m = parseFloat(h);
                    r[f] = isNaN(m) ? 0 : m
                }
                var v = r.paddingLeft + r.paddingRight, g = r.paddingTop + r.paddingBottom, y = r.marginLeft + r.marginRight, b = r.marginTop + r.marginBottom, x = r.borderLeftWidth + r.borderRightWidth, w = r.borderTopWidth + r.borderBottomWidth, S = u && l, _ = n(e.width);
                _!==!1 && (r.width = _ + (S ? 0 : v + x));
                var E = n(e.height);
                return E!==!1 && (r.height = E + (S ? 0 : g + w)), r.innerWidth = r.width - (v + x), r.innerHeight = r.height - (g + w), r.outerWidth = r.width + y, r.outerHeight = r.height + b, r
            }
        }
        function o(t, e) {
            if (r||-1 === e.indexOf("%"))
                return e;
            var n = t.style, i = n.left, o = t.runtimeStyle, a = o && o.left;
            return a && (o.left = t.currentStyle.left), n.left = e, e = n.pixelLeft, n.left = i, a && (o.left = a), e
        }
        var c = t("boxSizing"), l;
        return function() {
            if (c) {
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[c] = "border-box";
                var e = document.body || document.documentElement;
                e.appendChild(t);
                var i = a(t);
                l = 200 === n(i.width), e.removeChild(t)
            }
        }(), e
    }
    var r = t.getComputedStyle, a = r ? function(t) {
        return r(t, null)
    }
    : function(t) {
        return t.currentStyle
    }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function(t, e) {
    function n(t, e) {
        return t[a](e)
    }
    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function o(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
            if (n[o] === t)
                return !0;
        return !1
    }
    function r(t, e) {
        return i(t), n(t, e)
    }
    var a = function() {
        if (e.matchesSelector)
            return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0, i = t.length; i > n; n++) {
            var o = t[n], r = o + "MatchesSelector";
            if (e[r])
                return r
        }
    }(), s;
    if (a) {
        var c = document.createElement("div"), l = n(c, "div");
        s = l ? n : r
    } else 
        s = o;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return s
    }) : window.matchesSelector = s
}(this, Element.prototype), function(t) {
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t) {
        for (var e in t)
            return !1;
        return e = null, !0
    }
    function i(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    function o(t, o, r) {
        function s(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var c = r("transition"), l = r("transform"), u = c && l, d=!!r("perspective"), p = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }
        [c], f = ["transform", "transition", "transitionDuration", "transitionProperty"], h = function() {
            for (var t = {}, e = 0, n = f.length; n > e; e++) {
                var i = f[e], o = r(i);
                o && o !== i && (t[i] = o)
            }
            return t
        }();
        e(s.prototype, t.prototype), s.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.getSize = function() {
            this.size = o(this.element)
        }, s.prototype.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                var i = h[n] || n;
                e[i] = t[n]
            }
        }, s.prototype.getPosition = function() {
            var t = a(this.element), e = this.layout.options, n = e.isOriginLeft, i = e.isOriginTop, o = parseInt(t[n ? "left": "right"], 10), r = parseInt(t[i ? "top": "bottom"], 10);
            o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
            var s = this.layout.size;
            o -= n ? s.paddingLeft : s.paddingRight, r -= i ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = r
        }, s.prototype.layoutPosition = function() {
            var t = this.layout.size, e = this.layout.options, n = {};
            e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
        };
        var m = d ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        }
        : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        s.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x, i = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), a = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), a&&!this.isTransitioning)
                return void this.layoutPosition();
            var s = t - n, c = e - i, l = {}, u = this.layout.options;
            s = u.isOriginLeft ? s : - s, c = u.isOriginTop ? c : - c, l.transform = m(s, c), this.transition({
                to: l,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, s.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, s.prototype.moveTo = u ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, s.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        }, s.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd)
                e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to)
                e.ingProperties[n]=!0, t.isCleaning && (e.clean[n]=!0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning=!0
        };
        var v = l && i(l) + ",opacity";
        s.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(p, this, !1))
        }, s.prototype.transition = s.prototype[c ? "_transition": "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, s.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        s.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn, i = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var o = e.onEnd[i];
                    o.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, s.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning=!1
        }, s.prototype._removeStyles = function(t) {
            var e = {};
            for (var n in t)
                e[n] = "";
            this.css(e)
        };
        var y = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return s.prototype.removeTransitionStyles = function() {
            this.css(y)
        }, s.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, s.prototype.remove = function() {
            if (!c ||!parseFloat(this.layout.options.transitionDuration))
                return void this.removeElem();
            var t = this;
            this.on("transitionEnd", function() {
                return t.removeElem(), !0
            }), this.hide()
        }, s.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0
            })
        }, s.prototype.hide = function() {
            this.isHidden=!0, this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        }, s.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, s
    }
    var r = t.getComputedStyle, a = r ? function(t) {
        return r(t, null)
    }
    : function(t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function(t) {
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t) {
        return "[object Array]" === d.call(t)
    }
    function i(t) {
        var e = [];
        if (n(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, o = t.length; o > i; i++)
                e.push(t[i]);
        else 
            e.push(t);
        return e
    }
    function o(t, e) {
        var n = f(e, t);
        - 1 !== n && e.splice(n, 1)
    }
    function r(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, n) {
            return e + "-" + n
        }).toLowerCase()
    }
    function a(n, a, d, f, h, m) {
        function v(t, n) {
            if ("string" == typeof t && (t = s.querySelector(t)), !t ||!p(t))
                return void(c && c.error("Bad " + this.constructor.namespace + " element: " + t));
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(n);
            var i=++g;
            this.element.outlayerGUID = i, y[i] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var g = 0, y = {};
        return v.namespace = "outlayer", v.Item = m, v.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e(v.prototype, d.prototype), v.prototype.option = function(t) {
            e(this.options, t)
        }, v.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, v.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, v.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
                var a = e[o], s = new n(a, this);
                i.push(s)
            }
            return i
        }, v.prototype._filterFindItemElements = function(t) {
            t = i(t);
            for (var e = this.options.itemSelector, n = [], o = 0, r = t.length; r > o; o++) {
                var a = t[o];
                if (p(a))
                    if (e) {
                        h(a, e) && n.push(a);
                        for (var s = a.querySelectorAll(e), c = 0, l = s.length; l > c; c++)
                            n.push(s[c])
                    } else 
                        n.push(a)
            }
            return n
        }, v.prototype.getItemElements = function() {
            for (var t = [], e = 0, n = this.items.length; n > e; e++)
                t.push(this.items[e].element);
            return t
        }, v.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited=!0
        }, v.prototype._init = v.prototype.layout, v.prototype._resetLayout = function() {
            this.getSize()
        }, v.prototype.getSize = function() {
            this.size = f(this.element)
        }, v.prototype._getMeasurement = function(t, e) {
            var n = this.options[t], i;
            n ? ("string" == typeof n ? i = this.element.querySelector(n) : p(n) && (i = n), this[t] = i ? f(i)[e] : n) : this[t] = 0
        }, v.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, v.prototype._getItemsForLayout = function(t) {
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var o = t[n];
                o.isIgnored || e.push(o)
            }
            return e
        }, v.prototype._layoutItems = function(t, e) {
            function n() {
                i.emitEvent("layoutComplete", [i, t])
            }
            var i = this;
            if (!t ||!t.length)
                return void n();
            this._itemsOn(t, "layout", n);
            for (var o = [], r = 0, a = t.length; a > r; r++) {
                var s = t[r], c = this._getItemLayoutPosition(s);
                c.item = s, c.isInstant = e || s.isLayoutInstant, o.push(c)
            }
            this._processLayoutQueue(o)
        }, v.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, v.prototype._processLayoutQueue = function(t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, v.prototype._positionItem = function(t, e, n, i) {
            i ? t.goTo(e, n) : t.moveTo(e, n)
        }, v.prototype._postLayout = function() {
            this.resizeContainer()
        }, v.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, v.prototype._getContainerSize = u, v.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width": "height"] = t + "px"
            }
        }, v.prototype._itemsOn = function(t, e, n) {
            function i() {
                return o++, o === r && n.call(a), !0
            }
            for (var o = 0, r = t.length, a = this, s = 0, c = t.length; c > s; s++) {
                var l = t[s];
                l.on(e, i)
            }
        }, v.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored=!0)
        }, v.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, v.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this.ignore(i)
                }
            }
        }, v.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    o(i, this.stamps), this.unignore(i)
                }
        }, v.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
        }, v.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var n = this.stamps[t];
                    this._manageStamp(n)
                }
            }
        }, v.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, v.prototype._manageStamp = u, v.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(), n = this._boundingRect, i = f(t), o = {
                left: e.left - n.left - i.marginLeft,
                top: e.top - n.top - i.marginTop,
                right: n.right - e.right - i.marginRight,
                bottom: n.bottom - e.bottom - i.marginBottom
            };
            return o
        }, v.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, v.prototype.bindResize = function() {
            this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound=!0)
        }, v.prototype.unbindResize = function() {
            this.isResizeBound && n.unbind(t, "resize", this), this.isResizeBound=!1
        }, v.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, v.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, v.prototype.needsResizeLayout = function() {
            var t = f(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, v.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, v.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, v.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, v.prototype.reveal = function(t) {
            var e = t && t.length;
            if (e)
                for (var n = 0; e > n; n++) {
                    var i = t[n];
                    i.reveal()
                }
        }, v.prototype.hide = function(t) {
            var e = t && t.length;
            if (e)
                for (var n = 0; e > n; n++) {
                    var i = t[n];
                    i.hide()
                }
        }, v.prototype.getItem = function(t) {
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                if (i.element === t)
                    return i
            }
        }, v.prototype.getItems = function(t) {
            if (t && t.length) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var o = t[n], r = this.getItem(o);
                    r && e.push(r)
                }
                return e
            }
        }, v.prototype.remove = function(t) {
            t = i(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function() {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var n = 0, r = e.length; r > n; n++) {
                    var a = e[n];
                    a.remove(), o(a, this.items)
                }
            }
        }, v.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                i.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, v.data = function(t) {
            var e = t && t.outlayerGUID;
            return e && y[e]
        }, v.create = function(t, n) {
            function i() {
                v.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(v.prototype) : e(i.prototype, v.prototype), i.prototype.constructor = i, i.defaults = e({}, v.defaults), e(i.defaults, n), i.prototype.settings = {}, i.namespace = t, i.data = v.data, i.Item = function o() {
                m.apply(this, arguments)
            }, i.Item.prototype = new m, a(function() {
                for (var e = r(t), n = s.querySelectorAll(".js-" + e), o = "data-" + e + "-options", a = 0, u = n.length; u > a; a++) {
                    var d = n[a], p = d.getAttribute(o), f;
                    try {
                        f = p && JSON.parse(p)
                    } catch (h) {
                        c && c.error("Error parsing " + o + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + h);
                        continue
                    }
                    var m = new i(d, f);
                    l && l.data(d, t, m)
                }
            }), l && l.bridget && l.bridget(t, i), i
        }, v.Item = m, v
    }
    var s = t.document, c = t.console, l = t.jQuery, u = function() {}, d = Object.prototype.toString, p = "object" == typeof HTMLElement ? function h(t) {
        return t instanceof HTMLElement
    }
    : function m(t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, f = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e)
                return n;
        return - 1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], a) : t.Outlayer = a(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function(t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData, e = this.layout._sorters;
                for (var n in t) {
                    var i = e[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        };
        var n = e.prototype.destroy;
        return e.prototype.destroy = function() {
            n.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function(t) {
    function e(t, e) {
        function n(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var i = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = i.length; r > o; o++) {
                var a = i[o];
                n.prototype[a] = t(a)
            }
        }(), n.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element), n = this.isotope.size && e;
            return n && e.innerHeight !== this.isotope.size.innerHeight
        }, n.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.prototype.getSegmentSize = function(t, e) {
            var n = t + e, i = "outer" + e;
            if (this._getMeasurement(n, i), !this[n]) {
                var o = this.getFirstItemSize();
                this[n] = o && o[i] || this.isotope.size["inner" + e]
            }
        }, n.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, n.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function(t, e) {
            function i() {
                n.apply(this, arguments)
            }
            return i.prototype = new n, e && (i.options = e), i.prototype.namespace = t, n.modes[t] = i, i
        }, n
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function(t) {
    function e(t, e) {
        var i = t.create("masonry");
        return i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;)
                this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, i.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode: this.element, n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth%this.columnWidth, i = e && 1 > e ? "round": "ceil", o = Math[i](t.size.outerWidth / this.columnWidth);
            o = Math.min(o, this.cols);
            for (var r = this._getColGroup(o), a = Math.min.apply(Math, r), s = n(r, a), c = {
                x: this.columnWidth * s,
                y: a
            }, l = a + t.size.outerHeight, u = this.cols + 1 - r.length, d = 0; u > d; d++)
                this.colYs[s + d] = l;
            return c
        }, i.prototype._getColGroup = function(t) {
            if (2 > t)
                return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                var o = this.colYs.slice(i, i + t);
                e[i] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function(t) {
            var n = e(t), i = this._getElementOffset(t), o = this.options.isOriginLeft ? i.left: i.right, r = o + n.outerWidth, a = Math.floor(o / this.columnWidth);
            a = Math.max(0, a);
            var s = Math.floor(r / this.columnWidth);
            s -= r%this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
            for (var c = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, l = a; s >= l; l++)
                this.colYs[l] = Math.max(c, this.colYs[l])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, i
    }
    var n = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var n = 0, i = t.length; i > n; n++) {
            var o = t[n];
            if (o === e)
                return n
        }
        return - 1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function(t) {
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t, n) {
        var i = t.create("masonry"), o = i.prototype._getElementOffset, r = i.prototype.layout, a = i.prototype._getMeasurement;
        e(i.prototype, n.prototype), i.prototype._getElementOffset = o, i.prototype.layout = r, i.prototype._getMeasurement = a;
        var s = i.prototype.measureColumns;
        i.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var c = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, c.apply(this, arguments)
        }, i
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], n) : n(t.Isotope.LayoutMode, t.Masonry)
}(window), function(t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var e = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function(t) {
    function e(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, n = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: n
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function(t) {
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t) {
        return "[object Array]" === u.call(t)
    }
    function i(t) {
        var e = [];
        if (n(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, o = t.length; o > i; i++)
                e.push(t[i]);
        else 
            e.push(t);
        return e
    }
    function o(t, e) {
        var n = d(e, t);
        - 1 !== n && e.splice(n, 1)
    }
    function r(t, n, r, c, u) {
        function d(t, e) {
            return function n(i, o) {
                for (var r = 0, a = t.length; a > r; r++) {
                    var s = t[r], c = i.sortData[s], l = o.sortData[s];
                    if (c > l || l > c) {
                        var u = void 0 !== e[s] ? e[s] : e, d = u ? 1 : - 1;
                        return (c > l ? 1 : - 1) * d
                    }
                }
                return 0
            }
        }
        var p = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
        p.Item = c, p.LayoutMode = u, p.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in u.modes)
                this._initLayoutMode(e)
        }, p.prototype.reloadItems = function() {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, p.prototype._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), n = 0, i = e.length; i > n; n++) {
                var o = e[n];
                o.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, p.prototype._initLayoutMode = function(t) {
            var n = u.modes[t], i = this.options[t] || {};
            this.options[t] = n.options ? e(n.options, i) : i, this.modes[t] = new n(this)
        }, p.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, p.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited=!0
        }, p.prototype.arrange = function(t) {
            this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, p.prototype._filter = function(t) {
            function e() {
                d.reveal(o), d.hide(r)
            }
            var n = this.options.filter;
            n = n || "*";
            for (var i = [], o = [], r = [], a = this._getFilterTest(n), s = 0, c = t.length; c > s; s++) {
                var l = t[s];
                if (!l.isIgnored) {
                    var u = a(l);
                    u && i.push(l), u && l.isHidden ? o.push(l) : u || l.isHidden || r.push(l)
                }
            }
            var d = this;
            return this._isInstant ? this._noTransition(e) : e(), i
        }, p.prototype._getFilterTest = function(t) {
            return a && this.options.isJQueryFiltering ? function(e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return r(e.element, t)
            }
        }, p.prototype.updateSortData = function(t) {
            this._getSorters(), t = i(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items, this._updateItemsSortData(e)
        }, p.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var n = t[e];
                this._sorters[e] = f(n)
            }
        }, p.prototype._updateItemsSortData = function(t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                i.updateSortData()
            }
        };
        var f = function() {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var n = s(t).split(" "), i = n[0], o = i.match(/^\[(.+)\]$/), r = o && o[1], a = e(r, i), c = p.sortDataParsers[n[1]];
                return t = c ? function(t) {
                    return t && c(a(t))
                } : function(t) {
                    return t && a(t)
                }
            }
            function e(t, e) {
                var n;
                return n = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var n = t.querySelector(e);
                    return n && l(n)
                }
            }
            return t
        }();
        p.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, p.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory), n = d(e, this.options.sortAscending);
                this.filteredItems.sort(n), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, p.prototype._mode = function() {
            var t = this.options.layoutMode, e = this.modes[t];
            if (!e)
                throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, p.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, p.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, p.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, p.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, p.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, p.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, p.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(n), this.filteredItems = i.concat(this.filteredItems)
            }
        }, p.prototype._filterRevealAdded = function(t) {
            var e = this._noTransition(function() {
                return this._filter(t)
            });
            return this.layoutItems(e, !0),
            this.reveal(e), t
        }, p.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n, i, o = e.length;
                for (n = 0; o > n; n++)
                    i = e[n], this.element.appendChild(i.element);
                var r = this._filter(e);
                for (this._noTransition(function() {
                    this.hide(r)
                }), n = 0; o > n; n++)
                    e[n].isLayoutInstant=!0;
                for (this.arrange(), n = 0; o > n; n++)
                    delete e[n].isLayoutInstant;
                this.reveal(r)
            }
        };
        var h = p.prototype.remove;
        return p.prototype.remove = function(t) {
            t = i(t);
            var e = this.getItems(t);
            if (h.call(this, t), e && e.length)
                for (var n = 0, r = e.length; r > n; n++) {
                    var a = e[n];
                    o(a, this.filteredItems)
                }
        }, p.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var n = this.items[t];
                n.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, p.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.call(this);
            return this.options.transitionDuration = e, n
        }, p.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, n = this.filteredItems.length; n > e; e++)
                t.push(this.filteredItems[e].element);
            return t
        }, p
    }
    var a = t.jQuery, s = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, c = document.documentElement, l = c.textContent ? function(t) {
        return t.textContent
    }
    : function(t) {
        return t.innerText
    }, u = Object.prototype.toString, d = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e)
                return n;
        return - 1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window), function(t, e, $, n) {
    "use strict";
    var i = $("html"), o = $(t), r = $(e), a = $.fancybox = function() {
        a.open.apply(this, arguments)
    }, s = navigator.userAgent.match(/msie/i), c = null, l = e.createTouch !== n, u = function(t) {
        return t && t.hasOwnProperty && t instanceof $
    }, d = function(t) {
        return t && "string" === $.type(t)
    }, p = function(t) {
        return d(t) && t.indexOf("%") > 0
    }, f = function(t) {
        return t&&!(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
    }, h = function(t, e) {
        var n = parseInt(t, 10) || 0;
        return e && p(t) && (n = a.getViewport()[e] / 100 * n), Math.ceil(n)
    }, m = function(t, e) {
        return h(t, e) + "px"
    };
    $.extend(a, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !l,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (s ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(t, e) {
            return t && ($.isPlainObject(e) || (e = {}), !1 !== a.close(!0)) ? ($.isArray(t) || (t = u(t) ? $(t).get() : [t]), $.each(t, function(i, o) {
                var r = {}, s, c, l, p, f, h, m;
                "object" === $.type(o) && (o.nodeType && (o = $(o)), u(o) ? (r = {
                    href: o.data("fancybox-href") || o.attr("href"),
                    title: o.data("fancybox-title") || o.attr("title"),
                    isDom: !0,
                    element: o
                }, $.metadata && $.extend(!0, r, o.metadata())) : r = o), s = e.href || r.href || (d(o) ? o : null), c = e.title !== n ? e.title : r.title || "", l = e.content || r.content, p = l ? "html" : e.type || r.type, !p && r.isDom && (p = o.data("fancybox-type"), p || (f = o.prop("class").match(/fancybox\.(\w+)/), p = f ? f[1] : null)), d(s) && (p || (a.isImage(s) ? p = "image" : a.isSWF(s) ? p = "swf" : "#" === s.charAt(0) ? p = "inline" : d(o) && (p = "html", l = o)), "ajax" === p && (h = s.split(/\s+/, 2), s = h.shift(), m = h.shift())), l || ("inline" === p ? s ? l = $(d(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : r.isDom && (l = o) : "html" === p ? l = s : p || s ||!r.isDom || (p = "inline", l = o)), $.extend(r, {
                    href: s,
                    type: p,
                    content: l,
                    title: c,
                    selector: m
                }), t[i] = r
            }), a.opts = $.extend(!0, {}, a.defaults, e), e.keys !== n && (a.opts.keys = e.keys ? $.extend({}, a.defaults.keys, e.keys) : !1), a.group = t, a._start(a.opts.index)) : void 0
        },
        cancel: function() {
            var t = a.coming;
            t&&!1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(t))
        },
        close: function(t) {
            a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && t!==!0 ? (a.isOpen = a.isOpened=!1, a.isClosing=!0, $(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : ($(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
        },
        play: function(t) {
            var e = function() {
                clearTimeout(a.player.timer)
            }, n = function() {
                e(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
            }, i = function() {
                e(), r.unbind(".player"), a.player.isActive=!1, a.trigger("onPlayEnd")
            }, o = function() {
                a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive=!0, r.bind({
                    "onCancel.player beforeClose.player": i,
                    "onUpdate.player": n,
                    "beforeLoad.player": e
                }), n(), a.trigger("onPlayStart"))
            };
            t===!0 ||!a.player.isActive && t!==!1 ? o() : i()
        },
        next: function(t) {
            var e = a.current;
            e && (d(t) || (t = e.direction.next), a.jumpto(e.index + 1, t, "next"))
        },
        prev: function(t) {
            var e = a.current;
            e && (d(t) || (t = e.direction.prev), a.jumpto(e.index - 1, t, "prev"))
        },
        jumpto: function(t, e, i) {
            var o = a.current;
            o && (t = h(t), a.direction = e || o.direction[t >= o.index ? "next": "prev"], a.router = i || "jumpto", o.loop && (0 > t && (t = o.group.length + t%o.group.length), t%=o.group.length), o.group[t] !== n && (a.cancel(), a._start(t)))
        },
        reposition: function(t, e) {
            var n = a.current, i = n ? n.wrap: null, o;
            i && (o = a._getPosition(e), t && "scroll" === t.type ? (delete o.position, i.stop(!0, !0).animate(o, 200)) : (i.css(o), n.pos = $.extend({}, n.dim, o)))
        },
        update: function(t) {
            var e = t && t.type, n=!e || "orientationchange" === e;
            n && (clearTimeout(c), c = null), a.isOpen&&!c && (c = setTimeout(function() {
                var i = a.current;
                i&&!a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === e || "resize" === e && i.autoResize) && a._setDimension(), "scroll" === e && i.canShrink || a.reposition(t), a.trigger("onUpdate"), c = null)
            }, n&&!l ? 0 : 300))
        },
        toggle: function(t) {
            a.isOpen && (a.current.fitToView = "boolean" === $.type(t) ? t : !a.current.fitToView, l && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
        },
        hideLoading: function() {
            r.unbind(".loading"), $("#fancybox-loading").remove()
        },
        showLoading: function() {
            var t, e;
            a.hideLoading(), t = $('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), r.bind("keydown.loading", function(t) {
                27 === (t.which || t.keyCode) && (t.preventDefault(), a.cancel())
            }), a.defaults.fixed || (e = a.getViewport(), t.css({
                position: "absolute",
                top: .5 * e.h + e.y,
                left: .5 * e.w + e.x
            }))
        },
        getViewport: function() {
            var e = a.current && a.current.locked ||!1, n = {
                x: o.scrollLeft(),
                y: o.scrollTop()
            };
            return e ? (n.w = e[0].clientWidth, n.h = e[0].clientHeight) : (n.w = l && t.innerWidth ? t.innerWidth : o.width(), n.h = l && t.innerHeight ? t.innerHeight : o.height()), n
        },
        unbindEvents: function() {
            a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), o.unbind(".fb")
        },
        bindEvents: function() {
            var t = a.current, e;
            t && (o.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (t.autoCenter&&!t.locked ? " scroll.fb" : ""), a.update), e = t.keys, e && r.bind("keydown.fb", function(i) {
                var o = i.which || i.keyCode, r = i.target || i.srcElement;
                return 27 === o && a.coming?!1 : void(i.ctrlKey || i.altKey || i.shiftKey || i.metaKey || r && (r.type || $(r).is("[contenteditable]")) || $.each(e, function(e, r) {
                    return t.group.length > 1 && r[o] !== n ? (a[e](r[o]), i.preventDefault(), !1) : $.inArray(o, r)>-1 ? (a[e](), i.preventDefault(), !1) : void 0
                }))
            }), $.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function(e, n, i, o) {
                for (var r = e.target || null, s = $(r), c=!1; s.length&&!(c || s.is(".fancybox-skin") || s.is(".fancybox-wrap"));)
                    c = f(s[0]), s = $(s).parent();
                0 === n || c || a.group.length > 1&&!t.canShrink && (o > 0 || i > 0 ? a.prev(o > 0 ? "down" : "left") : (0 > o || 0 > i) && a.next(0 > o ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function(t, e) {
            var n, i = e || a.coming || a.current;
            if (i) {
                if ($.isFunction(i[t]) && (n = i[t].apply(i, Array.prototype.slice.call(arguments, 1))), n===!1)
                    return !1;
                i.helpers && $.each(i.helpers, function(e, n) {
                    n && a.helpers[e] && $.isFunction(a.helpers[e][t]) && a.helpers[e][t]($.extend(!0, {}, a.helpers[e].defaults, n), i)
                }), r.trigger(t)
            }
        },
        isImage: function(t) {
            return d(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(t) {
            return d(t) && t.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(t) {
            var e = {}, n, i, o, r, s;
            if (t = h(t), n = a.group[t] || null, !n)
                return !1;
            if (e = $.extend(!0, {}, a.opts, n), r = e.margin, s = e.padding, "number" === $.type(r) && (e.margin = [r, r, r, r]), "number" === $.type(s) && (e.padding = [s, s, s, s]), e.modal && $.extend(!0, e, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), e.autoSize && (e.autoWidth = e.autoHeight=!0), "auto" === e.width && (e.autoWidth=!0), "auto" === e.height && (e.autoHeight=!0), e.group = a.group, e.index = t, a.coming = e, !1 === a.trigger("beforeLoad"))
                return void(a.coming = null);
            if (o = e.type, i = e.href, !o)
                return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = t, a[a.router](a.direction)) : !1;
            if (a.isActive=!0, ("image" === o || "swf" === o) && (e.autoHeight = e.autoWidth=!1, e.scrolling = "visible"), "image" === o && (e.aspectRatio=!0), "iframe" === o && l && (e.scrolling = "scroll"), e.wrap = $(e.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + e.wrapCSS).appendTo(e.parent || "body"), $.extend(e, {
                skin: $(".fancybox-skin", e.wrap),
                outer: $(".fancybox-outer", e.wrap),
                inner: $(".fancybox-inner", e.wrap)
            }), $.each(["Top", "Right", "Bottom", "Left"], function(t, n) {
                e.skin.css("padding" + n, m(e.padding[t]))
            }), a.trigger("onReady"), "inline" === o || "html" === o) {
                if (!e.content ||!e.content.length)
                    return a._error("content")
            } else if (!i)
                return a._error("href");
            "image" === o ? a._loadImage() : "ajax" === o ? a._loadAjax() : "iframe" === o ? a._loadIframe() : a._afterLoad()
        },
        _error: function(t) {
            $.extend(a.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: t,
                content: a.coming.tpl.error
            }), a._afterLoad()
        },
        _loadImage: function() {
            var t = a.imgPreload = new Image;
            t.onload = function() {
                this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
            }, t.onerror = function() {
                this.onload = this.onerror = null, a._error("image")
            }, t.src = a.coming.href, t.complete!==!0 && a.showLoading()
        },
        _loadAjax: function() {
            var t = a.coming;
            a.showLoading(), a.ajaxLoad = $.ajax($.extend({}, t.ajax, {
                url: t.href,
                error: function(t, e) {
                    a.coming && "abort" !== e ? a._error("ajax", t) : a.hideLoading()
                },
                success: function(e, n) {
                    "success" === n && (t.content = e, a._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var t = a.coming, e = $(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : t.iframe.scrolling).attr("src", t.href);
            $(t.wrap).bind("onReset", function() {
                try {
                    $(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (t) {}
            }), t.iframe.preload && (a.showLoading(), e.one("load", function() {
                $(this).data("ready", 1), l || $(this).bind("load.fb", a.update), $(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
            })), t.content = e.appendTo(t.inner), t.iframe.preload || a._afterLoad()
        },
        _preloadImages: function() {
            var t = a.group, e = a.current, n = t.length, i = e.preload ? Math.min(e.preload, n - 1): 0, o, r;
            for (r = 1; i >= r; r += 1)
                o = t[(e.index + r)%n], "image" === o.type && o.href && ((new Image).src = o.href)
        },
        _afterLoad: function() {
            var t = a.coming, e = a.current, n = "fancybox-placeholder", i, o, r, s, c, l;
            if (a.hideLoading(), t && a.isActive!==!1) {
                if (!1 === a.trigger("afterLoad", t, e))
                    return t.wrap.stop(!0).trigger("onReset").remove(), void(a.coming = null);
                switch (e && (a.trigger("beforeChange", e), e.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), i = t, o = t.content, r = t.type, s = t.scrolling, $.extend(a, {
                    wrap: i.wrap,
                    skin: i.skin,
                    outer: i.outer,
                    inner: i.inner,
                    current: i,
                    previous: e
                }), c = i.href, r) {
                case"inline":
                case"ajax":
                case"html":
                    i.selector ? o = $("<div>").html(o).find(i.selector) : u(o) && (o.data(n) || o.data(n, $('<div class="' + n + '"></div>').insertAfter(o).hide()), o = o.show().detach(), i.wrap.bind("onReset", function() {
                        $(this).find(o).length && o.hide().replaceAll(o.data(n)).data(n, !1)
                    }));
                    break;
                case"image":
                    o = i.tpl.image.replace("{href}", c);
                    break;
                case"swf":
                    o = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + c + '"></param>', l = "", $.each(i.swf, function(t, e) {
                        o += '<param name="' + t + '" value="' + e + '"></param>', l += " " + t + '="' + e + '"'
                    }), o += '<embed src="' + c + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                }
                u(o) && o.parent().is(i.inner) || i.inner.append(o), a.trigger("beforeShow"), i.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), a._setDimension(), a.reposition(), a.isOpen=!1, a.coming = null, a.bindEvents(), a.isOpened ? e.prevMethod && a.transitions[e.prevMethod]() : $(".fancybox-wrap").not(i.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? i.nextMethod: i.openMethod](), a._preloadImages()
            }
        },
        _setDimension: function() {
            var t = a.getViewport(), e = 0, n=!1, i=!1, o = a.wrap, r = a.skin, s = a.inner, c = a.current, l = c.width, u = c.height, d = c.minWidth, f = c.minHeight, v = c.maxWidth, g = c.maxHeight, y = c.scrolling, b = c.scrollOutside ? c.scrollbarWidth : 0, x = c.margin, w = h(x[1] + x[3]), S = h(x[0] + x[2]), _, E, C, T, L, I, k, O, z, P, W, M, A, j, N;
            if (o.add(r).add(s).width("auto").height("auto").removeClass("fancybox-tmp"), _ = h(r.outerWidth(!0) - r.width()), E = h(r.outerHeight(!0) - r.height()), C = w + _, T = S + E, L = p(l) ? (t.w - C) * h(l) / 100 : l, I = p(u) ? (t.h - T) * h(u) / 100 : u, "iframe" === c.type) {
                if (j = c.content, c.autoHeight && 1 === j.data("ready"))
                    try {
                        j[0].contentWindow.document.location && (s.width(L).height(9999), N = j.contents().find("body"), b && N.css("overflow-x", "hidden"), I = N.outerHeight(!0))
                    } catch (D) {}
            } else (c.autoWidth || c.autoHeight) 
                && (s.addClass("fancybox-tmp"), c.autoWidth || s.width(L), c.autoHeight || s.height(I), c.autoWidth && (L = s.width()), c.autoHeight && (I = s.height()), s.removeClass("fancybox-tmp"));
            if (l = h(L), u = h(I), z = L / I, d = h(p(d) ? h(d, "w") - C : d), v = h(p(v) ? h(v, "w") - C : v), f = h(p(f) ? h(f, "h") - T : f), g = h(p(g) ? h(g, "h") - T : g), k = v, O = g, c.fitToView && (v = Math.min(t.w - C, v), g = Math.min(t.h - T, g)), M = t.w - w, A = t.h - S, c.aspectRatio ? (l > v && (l = v, u = h(l / z)), u > g && (u = g, l = h(u * z)), d > l && (l = d, u = h(l / z)), f > u && (u = f, l = h(u * z))) : (l = Math.max(d, Math.min(l, v)), c.autoHeight && "iframe" !== c.type && (s.width(l), u = s.height()), u = Math.max(f, Math.min(u, g))), c.fitToView)
                if (s.width(l).height(u), o.width(l + _), P = o.width(), W = o.height(), c.aspectRatio)
                    for (; (P > M || W > A) && l > d && u > f&&!(e++>19);)
                        u = Math.max(f, Math.min(g, u - 10)), l = h(u * z), d > l && (l = d, u = h(l / z)), l > v && (l = v, u = h(l / z)), s.width(l).height(u), o.width(l + _), P = o.width(), W = o.height();
                else 
                    l = Math.max(d, Math.min(l, l - (P - M))), u = Math.max(f, Math.min(u, u - (W - A)));
            b && "auto" === y && I > u && M > l + _ + b && (l += b), s.width(l).height(u), o.width(l + _), P = o.width(), W = o.height(), n = (P > M || W > A) && l > d && u > f, i = c.aspectRatio ? k > l && O > u && L > l && I > u : (k > l || O > u) && (L > l || I > u), $.extend(c, {
                dim: {
                    width: m(P),
                    height: m(W)
                },
                origWidth: L,
                origHeight: I,
                canShrink: n,
                canExpand: i,
                wPadding: _,
                hPadding: E,
                wrapSpace: W - r.outerHeight(!0),
                skinSpace: r.height() - u
            }), !j && c.autoHeight && u > f && g > u&&!i && s.height("auto")
        },
        _getPosition: function(t) {
            var e = a.current, n = a.getViewport(), i = e.margin, o = a.wrap.width() + i[1] + i[3], r = a.wrap.height() + i[0] + i[2], s = {
                position: "absolute",
                top: i[0],
                left: i[3]
            };
            return e.autoCenter && e.fixed&&!t && r <= n.h && o <= n.w ? s.position = "fixed" : e.locked || (s.top += n.y, s.left += n.x), s.top = m(Math.max(s.top, s.top + (n.h - r) * e.topRatio)), s.left = m(Math.max(s.left, s.left + (n.w - o) * e.leftRatio)), s
        },
        _afterZoomIn: function() {
            var t = a.current;
            t && (a.isOpen = a.isOpened=!0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (t.closeClick || t.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function(e) {
                $(e.target).is("a") || $(e.target).parent().is("a") || (e.preventDefault(), a[t.closeClick ? "close": "next"]())
            }), t.closeBtn && $(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(t) {
                t.preventDefault(), a.close()
            }), t.arrows && a.group.length > 1 && ((t.loop || t.index > 0) && $(t.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (t.loop || t.index < a.group.length - 1) && $(t.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? a.opts.autoPlay&&!a.player.isActive && (a.opts.autoPlay=!1, a.play()) : a.play(!1))
        },
        _afterZoomOut: function(t) {
            t = t || a.current, $(".fancybox-wrap").trigger("onReset").remove(), $.extend(a, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), a.trigger("afterClose", t)
        }
    }), a.transitions = {
        getOrigPosition: function() {
            var t = a.current, e = t.element, n = t.orig, i = {}, o = 50, r = 50, s = t.hPadding, c = t.wPadding, l = a.getViewport();
            return !n && t.isDom && e.is(":visible") && (n = e.find("img:first"), n.length || (n = e)), u(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), r = n.outerHeight())) : (i.top = l.y + (l.h - r) * t.topRatio, i.left = l.x + (l.w - o) * t.leftRatio), ("fixed" === a.wrap.css("position") || t.locked) && (i.top -= l.y, i.left -= l.x), i = {
                top: m(i.top - s * t.topRatio),
                left: m(i.left - c * t.leftRatio),
                width: m(o + c),
                height: m(r + s)
            }
        },
        step: function(t, e) {
            var n, i, o, r = e.prop, s = a.current, c = s.wrapSpace, l = s.skinSpace;
            ("width" === r || "height" === r) && (n = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), a.isClosing && (n = 1 - n), i = "width" === r ? s.wPadding : s.hPadding, o = t - i, a.skin[r](h("width" === r ? o : o - c * n)), a.inner[r](h("width" === r ? o : o - c * n - l * n)))
        },
        zoomIn: function() {
            var t = a.current, e = t.pos, n = t.openEffect, i = "elastic" === n, o = $.extend({
                opacity: 1
            }, e);
            delete o.position, i ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), a.wrap.css(e).animate(o, {
                duration: "none" === n ? 0: t.openSpeed,
                easing: t.openEasing,
                step: i ? this.step: null,
                complete: a._afterZoomIn
            })
        },
        zoomOut: function() {
            var t = a.current, e = t.closeEffect, n = "elastic" === e, i = {
                opacity: .1
            };
            n && (i = this.getOrigPosition(), t.closeOpacity && (i.opacity = .1)), a.wrap.animate(i, {
                duration: "none" === e ? 0: t.closeSpeed,
                easing: t.closeEasing,
                step: n ? this.step: null,
                complete: a._afterZoomOut
            })
        },
        changeIn: function() {
            var t = a.current, e = t.nextEffect, n = t.pos, i = {
                opacity: 1
            }, o = a.direction, r = 200, s;
            n.opacity = .1, "elastic" === e && (s = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (n[s] = m(h(n[s]) - r), i[s] = "+=" + r + "px") : (n[s] = m(h(n[s]) + r), i[s] = "-=" + r + "px")), "none" === e ? a._afterZoomIn() : a.wrap.css(n).animate(i, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: a._afterZoomIn
            })
        },
        changeOut: function() {
            var t = a.previous, e = t.prevEffect, n = {
                opacity: .1
            }, i = a.direction, o = 200;
            "elastic" === e && (n["down" === i || "up" === i ? "top": "left"] = ("up" === i || "left" === i ? "-" : "+") + "=" + o + "px"), t.wrap.animate(n, {
                duration: "none" === e ? 0: t.prevSpeed,
                easing: t.prevEasing,
                complete: function() {
                    $(this).trigger("onReset").remove()
                }
            })
        }
    }, a.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !l,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: $("html"),
        create: function(t) {
            t = $.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : t.parent), this.fixed=!1, t.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed=!0)
        },
        open: function(t) {
            var e = this;
            t = $.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (o.bind("resize.overlay", $.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) {
                return $(t.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : e.close(), !1) : void 0
            }), this.overlay.css(t.css).show()
        },
        close: function() {
            var t, e;
            o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && ($(".fancybox-margin").removeClass("fancybox-margin"), t = o.scrollTop(), e = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(t).scrollLeft(e)), $(".fancybox-overlay").remove().hide(), $.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var t = "100%", n;
            this.overlay.width(t).height("100%"), s ? (n = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), r.width() > n && (t = r.width())) : r.width() > o.width() && (t = r.width()), this.overlay.width(t).height(r.height())
        },
        onReady: function(t, e) {
            var n = this.overlay;
            $(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (n || (this.margin = r.height() > o.height() ? $("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed=!1), t.showEarly===!0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(t, e) {
            var n, i;
            e.locked && (this.margin!==!1 && ($("*").filter(function() {
                return "fixed" === $(this).css("position")&&!$(this).hasClass("fancybox-overlay")&&!$(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = o.scrollTop(), i = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(n).scrollLeft(i)), this.open(t)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(t) {
            this.overlay&&!a.coming && this.overlay.fadeOut(t.speedOut, $.proxy(this.close, this))
        }
    }, a.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(t) {
            var e = a.current, n = e.title, i = t.type, o, r;
            if ($.isFunction(n) && (n = n.call(e.element, e)), d(n) && "" !== $.trim(n)) {
                switch (o = $('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + n + "</div>"), i) {
                case"inside":
                    r = a.skin;
                    break;
                case"outside":
                    r = a.wrap;
                    break;
                case"over":
                    r = a.inner;
                    break;
                default:
                    r = a.skin, o.appendTo("body"), s && o.width(o.width()), o.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(h(o.css("margin-bottom")))
                }
                o["top" === t.position ? "prependTo": "appendTo"](r)
            }
        }
    }, $.fn.fancybox = function(t) {
        var e, n = $(this), i = this.selector || "", o = function(o) {
            var r = $(this).blur(), s = e, c, l;
            o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r.is(".fancybox-wrap") || (c = t.groupAttr || "data-fancybox-group", l = r.attr(c), l || (c = "rel", l = r.get(0)[c]), l && "" !== l && "nofollow" !== l && (r = i.length ? $(i) : n, r = r.filter("[" + c + '="' + l + '"]'), s = r.index(this)), t.index = s, a.open(r, t)!==!1 && o.preventDefault())
        };
        return t = t || {}, e = t.index || 0, i && t.live!==!1 ? r.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : n.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function() {
        var e, o;
        $.scrollbarWidth === n && ($.scrollbarWidth = function() {
            var t = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), e = t.children(), n = e.innerWidth() - e.height(99).innerWidth();
            return t.remove(), n
        }), $.support.fixedPosition === n && ($.support.fixedPosition = function() {
            var t = $('<div style="position:fixed;top:20px;"></div>').appendTo("body"), e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
            return t.remove(), e
        }()), $.extend(a.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $("body")
        }), e = $(t).width(), i.addClass("fancybox-lock-test"), o = $(t).width(), i.removeClass("fancybox-lock-test"), $("<style type='text/css'>.fancybox-margin{margin-right:" + (o - e) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery), function($) {
    $.flexslider = function(t, e) {
        var n = $(t);
        n.vars = $.extend({}, $.flexslider.defaults, e);
        var i = n.vars.namespace, o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, r = ("ontouchstart"in window || o || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch, a = "click touchend MSPointerUp", s = "", c, l = "vertical" === n.vars.direction, u = n.vars.reverse, d = n.vars.itemWidth > 0, p = "fade" === n.vars.animation, f = "" !== n.vars.asNavFor, h = {}, m=!0;
        $.data(t, "flexslider", n), h = {
            init: function() {
                n.animating=!1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = l ? "top" : "marginLeft", n.args = {}, n.manualPause=!1, n.stopped=!1, n.started=!1, n.startTimeout = null, n.transitions=!n.vars.video&&!p && n.vars.useCSS && function() {
                    var t = document.createElement("div"), e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]])
                            return n.pfx = e[i].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && h.controlNav.setup(), n.vars.directionNav && h.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function(t) {
                    var e = t.keyCode;
                    if (!n.animating && (39 === e || 37 === e)) {
                        var i = 39 === e ? n.getTarget("next"): 37 === e ? n.getTarget("prev"): !1;
                        n.flexAnimate(i, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function(t, e, i, o) {
                    t.preventDefault();
                    var r = 0 > e ? n.getTarget("next"): n.getTarget("prev");
                    n.flexAnimate(r, n.vars.pauseOnAction)
                }), n.vars.pausePlay && h.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && h.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                    n.manualPlay || n.manualPause || n.pause()
                }, function() {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && h.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), f && h.asNav.setup(), r && n.vars.touch && h.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", h.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                    n.vars.start(n)
                }, 200)
            },
            asNav: {
                setup: function() {
                    n.asNav=!0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), o ? (t._slider = n, n.slides.each(function() {
                        var t = this;
                        t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(t) {
                            t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                        }, !1), t.addEventListener("MSGestureTap", function(t) {
                            t.preventDefault();
                            var e = $(this), i = e.index();
                            $(n.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(a, function(t) {
                        t.preventDefault();
                        var e = $(this), o = e.index(), r = e.offset().left - $(n).scrollLeft();
                        0 >= r && e.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || e.hasClass(i + "active-slide") || (n.direction = n.currentItem < o ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    n.manualControls ? h.controlNav.setupManual() : h.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t = "thumbnails" === n.vars.controlNav ? "control-thumbs": "control-paging", e = 1, o, r;
                    if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + t + '"></ol>'), n.pagingCount > 1)
                        for (var c = 0; c < n.pagingCount; c++) {
                            if (r = n.slides.eq(c), o = "thumbnails" === n.vars.controlNav ? '<img src="' + r.attr("data-thumb") + '"/>' : "<a>" + e + "</a>", "thumbnails" === n.vars.controlNav&&!0 === n.vars.thumbCaptions) {
                                var l = r.attr("data-thumbcaption");
                                "" != l && void 0 != l && (o += '<span class="' + i + 'caption">' + l + "</span>")
                            }
                            n.controlNavScaffold.append("<li>" + o + "</li>"), e++
                        }
                    n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), h.controlNav.set(), h.controlNav.active(), n.controlNavScaffold.delegate("a, img", a, function(t) {
                        if (t.preventDefault(), "" === s || s === t.type) {
                            var e = $(this), o = n.controlNav.index(e);
                            e.hasClass(i + "active") || (n.direction = o > n.currentSlide ? "next" : "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                        }
                        "" === s && (s = t.type), h.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    n.controlNav = n.manualControls, h.controlNav.active(), n.controlNav.bind(a, function(t) {
                        if (t.preventDefault(), "" === s || s === t.type) {
                            var e = $(this), o = n.controlNav.index(e);
                            e.hasClass(i + "active") || (o > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(o, n.vars.pauseOnAction))
                        }
                        "" === s && (s = t.type), h.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = "thumbnails" === n.vars.controlNav ? "img": "a";
                    n.controlNav = $("." + i + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
                },
                active: function() {
                    n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
                },
                update: function(t, e) {
                    n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append($("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(e).closest("li").remove(), h.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(e, t) : h.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = $('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.controlsContainer ? ($(n.controlsContainer).append(t), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = $("." + i + "direction-nav li a", n)), h.directionNav.update(), n.directionNav.bind(a, function(t) {
                        t.preventDefault();
                        var e;
                        ("" === s || s === t.type) && (e = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(e, n.vars.pauseOnAction)), "" === s && (s = t.type), h.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var t = i + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(t).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(t).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(t).filter("." + i + "prev").addClass(t).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(t).filter("." + i + "next").addClass(t).attr("tabindex", "-1") : n.directionNav.removeClass(t).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = $('<div class="' + i + 'pauseplay"><a></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(t),
                    n.pausePlay = $("." + i + "pauseplay a", n)), h.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(a, function(t) {
                        t.preventDefault(), ("" === s || s === t.type) && ($(this).hasClass(i + "pause") ? (n.manualPause=!0, n.manualPlay=!1, n.pause()) : (n.manualPause=!1, n.manualPlay=!0, n.play())), "" === s && (s = t.type), h.setToClearWatchedEvent()
                    })
                },
                update: function(t) {
                    "play" === t ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
                }
            },
            touch: function() {
                function e(e) {
                    n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), v = l ? n.h : n.w, y = Number(new Date), x = e.touches[0].pageX, w = e.touches[0].pageY, m = d && u && n.animatingTo === n.last ? 0 : d && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : d && n.currentSlide === n.last ? n.limit : d ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * v : (n.currentSlide + n.cloneOffset) * v, f = l ? w : x, h = l ? x : w, t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", r, !1))
                }
                function i(t) {
                    x = t.touches[0].pageX, w = t.touches[0].pageY, g = l ? f - w : f - x, b = l ? Math.abs(g) < Math.abs(x - h) : Math.abs(g) < Math.abs(w - h);
                    var e = 500;
                    (!b || Number(new Date) - y > e) && (t.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (g/=0 === n.currentSlide && 0 > g || n.currentSlide === n.last && g > 0 ? Math.abs(g) / v + 2 : 1), n.setProps(m + g, "setTouch")))
                }
                function r(e) {
                    if (t.removeEventListener("touchmove", i, !1), n.animatingTo === n.currentSlide&&!b && null !== g) {
                        var o = u?-g : g, a = o > 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.canAdvance(a) && (Number(new Date) - y < 550 && Math.abs(o) > 50 || Math.abs(o) > v / 2) ? n.flexAnimate(a, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", r, !1), f = null, h = null, g = null, m = null
                }
                function a(e) {
                    e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), S = 0, v = l ? n.h : n.w, y = Number(new Date), m = d && u && n.animatingTo === n.last ? 0 : d && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : d && n.currentSlide === n.last ? n.limit : d ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * v : (n.currentSlide + n.cloneOffset) * v)
                }
                function s(e) {
                    e.stopPropagation();
                    var n = e.target._slider;
                    if (n) {
                        var i =- e.translationX, o =- e.translationY;
                        return S += l ? o : i, g = S, b = l ? Math.abs(S) < Math.abs( - i) : Math.abs(S) < Math.abs( - o), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            t._gesture.stop()
                        }) : void((!b || Number(new Date) - y > 500) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (g = S / (0 === n.currentSlide && 0 > S || n.currentSlide === n.last && S > 0 ? Math.abs(S) / v + 2 : 1)), n.setProps(m + g, "setTouch"))))
                    }
                }
                function c(t) {
                    t.stopPropagation();
                    var e = t.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide&&!b && null !== g) {
                            var n = u?-g : g, i = n > 0 ? e.getTarget("next") : e.getTarget("prev");
                            e.canAdvance(i) && (Number(new Date) - y < 550 && Math.abs(n) > 50 || Math.abs(n) > v / 2) ? e.flexAnimate(i, e.vars.pauseOnAction) : p || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        f = null, h = null, g = null, m = null, S = 0
                    }
                }
                var f, h, m, v, g, y, b=!1, x = 0, w = 0, S = 0;
                o ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", a, !1), t._slider = n, t.addEventListener("MSGestureChange", s, !1), t.addEventListener("MSGestureEnd", c, !1)) : t.addEventListener("touchstart", e, !1)
            },
            resize: function() {
                !n.animating && n.is(":visible") && (d || n.doMath(), p ? h.smoothHeight() : d ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : l ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && h.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            },
            smoothHeight: function(t) {
                if (!l || p) {
                    var e = p ? n: n.viewport;
                    t ? e.animate({
                        height: n.slides.eq(n.animatingTo).height()
                    }, t) : e.height(n.slides.eq(n.animatingTo).height())
                }
            },
            sync: function(t) {
                var e = $(n.vars.sync).data("flexslider"), i = n.animatingTo;
                switch (t) {
                case"animate":
                    e.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
                    break;
                case"play":
                    e.playing || e.asNav || e.play();
                    break;
                case"pause":
                    e.pause()
                }
            },
            uniqueID: function(t) {
                return t.find("[id]").each(function() {
                    var t = $(this);
                    t.attr("id", t.attr("id") + "_clone")
                }), t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var t = ["webkit", "moz", "ms", "o"];
                    if ("hidden"in document)
                        return "hidden";
                    for (var e = 0; e < t.length; e++)
                        t[e] + "Hidden"in document && (h.pauseInvisible.visProp = t[e] + "Hidden");
                    if (h.pauseInvisible.visProp) {
                        var i = h.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(i, function() {
                            h.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                },
                isHidden: function() {
                    return document[h.pauseInvisible.visProp] ||!1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(c), c = setTimeout(function() {
                    s = ""
                }, 3e3)
            }
        }, n.flexAnimate = function(t, e, o, a, s) {
            if (n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), f && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, s) || o) && n.is(":visible")) {
                if (f && a) {
                    var c = $(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === t || t === n.count - 1, c.flexAnimate(t, !0, !1, !0, s), n.direction = n.currentItem < t ? "next" : "prev", c.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t)
                        return n.currentItem = t, n.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"), !1;
                    n.currentItem = t, n.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"), t = Math.floor(t / n.visible)
                }
                if (n.animating=!0, n.animatingTo = t, e && n.pause(), n.vars.before(n), n.syncExists&&!s && h.sync("animate"), n.vars.controlNav && h.controlNav.active(), d || n.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && h.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p)
                    r ? (n.slides.eq(n.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), n.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), n.wrapup(m)) : (n.slides.eq(n.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                else {
                    var m = l ? n.slides.filter(":first").height(): n.computedW, v, g, y;
                    d ? (v = n.vars.itemMargin, y = (n.itemW + v) * n.move * n.animatingTo, g = y > n.limit && 1 !== n.visible ? n.limit : y) : g = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * m : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * m : u ? (n.count - 1 - t + n.cloneOffset) * m : (t + n.cloneOffset) * m, n.setProps(g, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating=!1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                        n.wrapup(m)
                    })) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                        n.wrapup(m)
                    })
                }
                n.vars.smoothHeight && h.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function(t) {
            p || d || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(t, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(t, "jumpStart")), n.animating=!1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function() {
            !n.animating && m && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function() {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing=!1, n.vars.pausePlay && h.pausePlay.update("play"), n.syncExists && h.sync("pause")
        }, n.play = function() {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing=!0, n.vars.pausePlay && h.pausePlay.update("pause"), n.syncExists && h.sync("play")
        }, n.stop = function() {
            n.pause(), n.stopped=!0
        }, n.canAdvance = function(t, e) {
            var i = f ? n.pagingCount - 1: n.last;
            return e?!0 : f && n.currentItem === n.count - 1 && 0 === t && "prev" === n.direction?!0 : f && 0 === n.currentItem && t === n.pagingCount - 1 && "next" !== n.direction?!1 : t !== n.currentSlide || f ? n.vars.animationLoop?!0 : n.atEnd && 0 === n.currentSlide && t === i && "next" !== n.direction?!1 : n.atEnd && n.currentSlide === i && 0 === t && "next" === n.direction?!1 : !0 : !1
        }, n.getTarget = function(t) {
            return n.direction = t, "next" === t ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function(t, e, i) {
            var o = function() {
                var i = t ? t: (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo, o = function() {
                    if (d)
                        return "setTouch" === e ? t : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : i;
                    switch (e) {
                    case"setTotal":
                        return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * t : (n.currentSlide + n.cloneOffset) * t;
                    case"setTouch":
                        return u ? t : t;
                    case"jumpEnd":
                        return u ? t : n.count * t;
                    case"jumpStart":
                        return u ? n.count * t : t;
                    default:
                        return t
                    }
                }();
                return - 1 * o + "px"
            }();
            n.transitions && (o = l ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", i), n.container.css("transition-duration", i)), n.args[n.prop] = o, (n.transitions || void 0 === i) && n.container.css(n.args), n.container.css("transform", o)
        }, n.setup = function(t) {
            if (p)
                n.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (r ? n.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : n.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(n.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && h.smoothHeight();
            else {
                var e, o;
                "init" === t && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (o = $.makeArray(n.slides).reverse(), n.slides = $(o), n.container.empty().append(n.slides))), n.vars.animationLoop&&!d && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), h.uniqueID(n.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(n.container), h.uniqueID(n.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(n.container)), n.newSlides = $(n.vars.selector, n), e = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, l&&!d ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    n.newSlides.css({
                        display: "block"
                    }), n.doMath(), n.viewport.height(n.h), n.setProps(e * n.h, "init")
                }, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(e * n.computedW, "init"), setTimeout(function() {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && h.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            d || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
        }, n.doMath = function() {
            var t = n.slides.first(), e = n.vars.itemMargin, i = n.vars.minItems, o = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = t.height(), n.boxPadding = t.outerWidth() - t.width(), d ? (n.itemT = n.vars.itemWidth + e, n.minW = i ? i * n.itemT : n.w, n.maxW = o ? o * n.itemT - e : n.w, n.itemW = n.minW > n.w ? (n.w - e * (i - 1)) / i : n.maxW < n.w ? (n.w - e * (o - 1)) / o : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + e * (n.count - 1) : (n.itemW + e) * n.count - n.w - e) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
        }, n.update = function(t, e) {
            n.doMath(), d || (t < n.currentSlide ? n.currentSlide += 1 : t <= n.currentSlide && 0 !== t && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav&&!n.manualControls && ("add" === e&&!d || n.pagingCount > n.controlNav.length ? h.controlNav.update("add") : ("remove" === e&&!d || n.pagingCount < n.controlNav.length) && (d && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), h.controlNav.update("remove", n.last))), n.vars.directionNav && h.directionNav.update()
        }, n.addSlide = function(t, e) {
            var i = $(t);
            n.count += 1, n.last = n.count - 1, l && u ? void 0 !== e ? n.slides.eq(n.count - e).after(i) : n.container.prepend(i) : void 0 !== e ? n.slides.eq(e).before(i) : n.container.append(i), n.update(e, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function(t) {
            var e = isNaN(t) ? n.slides.index($(t)): t;
            n.count -= 1, n.last = n.count - 1, isNaN(t) ? $(t, n.slides).remove() : l && u ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(e, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, h.init()
    }, $(window).blur(function(t) {
        focused=!1
    }).focus(function(t) {
        focused=!0
    }), $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, $.fn.flexslider = function(t) {
        if (void 0 === t && (t = {}), "object" == typeof t)return this.each(function() {
            var e = $(this), n = t.selector ? t.selector: ".slides > li", i = e.find(n);
            1 === i.length && t.allowOneSlide===!0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(e)) : void 0 === e.data("flexslider") && new $.flexslider(this, t)
        });
        var e = $(this).data("flexslider");
        switch (t) {
        case"play":
            e.play();
            break;
        case"pause":
            e.pause();
            break;
        case"stop":
            e.stop();
            break;
        case"next":
            e.flexAnimate(e.getTarget("next"), !0);
            break;
        case"prev":
        case"previous":
            e.flexAnimate(e.getTarget("prev"), !0);
            break;
        default:
            "number" == typeof t && e.flexAnimate(t, !0)
        }
    }
}(jQuery);
var stylez = [{
    stylers: [{
        visibility: "off"
    }
    ]
}, {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{
        visibility: "on"
    }, {
        color: "#ffffff"
    }
    ]
}, {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [{
        visibility: "on"
    }
    ]
}, {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{
        visibility: "on"
    }, {
        color: "#cccccc"
    }, {
        weight: 2
    }
    ]
}, {
    featureType: "administrative.locality",
    elementType: "labels.text.stroke",
    stylers: [{
        visibility: "on"
    }, {
        weight: 8
    }
    ]
}, {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{
        visibility: "on"
    }, {
        color: "#a3a3a3"
    }
    ]
}, {}
];
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function($) {
    function t(t) {
        return a.raw ? t : encodeURIComponent(t)
    }
    function e(t) {
        return a.raw ? t : decodeURIComponent(t)
    }
    function n(e) {
        return t(a.json ? JSON.stringify(e) : String(e))
    }
    function i(t) {
        0 === t.indexOf('"') && (t = t.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t = decodeURIComponent(t.replace(r, " ")), a.json ? JSON.parse(t) : t
        } catch (e) {}
    }
    function o(t, e) {
        var n = a.raw ? t: i(t);
        return $.isFunction(e) ? e(n) : n
    }
    var r = /\+/g, a = $.cookie = function(i, r, s) {
        if (arguments.length > 1&&!$.isFunction(r)) {
            if (s = $.extend({}, a.defaults, s), "number" == typeof s.expires) {
                var c = s.expires, l = s.expires = new Date;
                l.setTime( + l + 864e5 * c)
            }
            return document.cookie = [t(i), "=", n(r), s.expires ? "; expires=" + s.expires.toUTCString(): "", s.path ? "; path=" + s.path: "", s.domain ? "; domain=" + s.domain: "", s.secure ? "; secure": ""].join("")
        }
        for (var u = i ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], p = 0, f = d.length; f > p; p++) {
            var h = d[p].split("="), m = e(h.shift()), v = h.join("=");
            if (i && i === m) {
                u = o(v, r);
                break
            }
            i || void 0 === (v = o(v)) || (u[m] = v)
        }
        return u
    };
    a.defaults = {}, $.removeCookie = function(t, e) {
        return void 0 === $.cookie(t)?!1 : ($.cookie(t, "", $.extend({}, e, {
            expires: - 1
        })), !$.cookie(t))
    }
}), /**
@license Sticky-kit v1.1.0 | WTFPL | Leaf Corcoran 2014 | http://leafo.net
 */
function() {
    var $, t;
    $ = this.jQuery || window.jQuery, t = $(window), $.fn.stick_in_parent = function(e) {
        var n, i, o, r, a, s, c, l, u, d, p;
        for (null == e && (e = {}), l = e.sticky_class, o = e.inner_scrolling, c = e.recalc_every, s = e.parent, a = e.offset_top, r = e.spacer, i = e.bottoming, null == a && (a = 0), null == s && (s = void 0), null == o && (o=!0), null == l && (l = "is_stuck"), null == i && (i=!0), u = function(e, n, u, d, p, f, h) {
            var m, v, g, y, b, x, w, S, _, E, C;
            if (!e.data("sticky_kit")) {
                if (e.data("sticky_kit", !0), x = e.parent(), null != s && (x = x.closest(s)), !x.length)
                    throw "failed to find stick parent";
                if (g=!1, m=!1, E = null != r ? r && e.closest(r) : $("<div />"), E && E.css("position", e.css("position")), w = function() {
                    var t, i, o;
                    return t = parseInt(x.css("border-top-width"), 10), i = parseInt(x.css("padding-top"), 10), n = parseInt(x.css("padding-bottom"), 10), u = x.offset().top + t + i, d = x.height(), g && (g=!1, m=!1, null == r && (e.insertAfter(E), E.detach()), e.css({
                        position: "",
                        top: "",
                        width: "",
                        bottom: ""
                    }).removeClass(l), o=!0), p = e.offset().top - parseInt(e.css("margin-top"), 10) - a, f = e.outerHeight(!0), h = e.css("float"), E && E.css({
                        width: e.outerWidth(!0),
                        height: f,
                        display: e.css("display"),
                        "vertical-align": e.css("vertical-align"),
                        "float": h
                    }), o ? C() : void 0
                }, w(), f !== d)
                    return y = void 0, b = a, _ = c, C = function() {
                    var s, v, S, C, T;
                    return null != _ && (_ -= 1, 0 >= _ && (_ = c, w())), S = t.scrollTop(), null != y && (v = S - y), y = S, g ? (i && (C = S + f + b > d + u, m&&!C && (m=!1, e.css({
                        position: "fixed",
                        bottom: "",
                        top: b
                    }).trigger("sticky_kit:unbottom"))), p > S && (g=!1, b = a, null == r && (("left" === h || "right" === h) && e.insertAfter(E), E.detach()), s = {
                        position: "",
                        width: "",
                        top: ""
                    }, e.css(s).removeClass(l).trigger("sticky_kit:unstick")), o && (T = t.height(), f > T && (m || (b -= v, b = Math.max(T - f, b), b = Math.min(a, b), g && e.css({
                        top: b + "px"
                    }))))) : S > p && (g=!0, s = {
                        position: "fixed",
                        top: b
                    }, s.width = "border-box" === e.css("box-sizing") ? e.outerWidth() + "px" : e.width() + "px", e.css(s).addClass(l), null == r && (e.after(E), ("left" === h || "right" === h) && E.append(e)), e.trigger("sticky_kit:stick")), g && i && (null == C && (C = S + f + b > d + u), !m && C) ? (m=!0, "static" === x.css("position") && x.css({
                        position: "relative"
                    }), e.css({
                        position: "absolute",
                        bottom: n,
                        top: "auto"
                    }).trigger("sticky_kit:bottom")) : void 0
                }, S = function() {
                    return w(), C()
                }, v = function() {
                    return t.off("touchmove", C), t.off("scroll", C), t.off("resize", S), $(document.body).off("sticky_kit:recalc", S), e.off("sticky_kit:detach", v), e.removeData("sticky_kit"), e.css({
                        position: "",
                        bottom: "",
                        top: ""
                    }), x.position("position", ""), g ? (null == r && (("left" === h || "right" === h) && e.insertAfter(E), E.remove()), e.removeClass(l)) : void 0
                }, t.on("touchmove", C), t.on("scroll", C), t.on("resize", S), $(document.body).on("sticky_kit:recalc", S), e.on("sticky_kit:detach", v), setTimeout(C, 0)
            }
        }, d = 0, p = this.length; p > d; d++)
            n = this[d], u($(n));
        return this
    }
}.call(this), $(document).ready(function() {
    navHover(), navToggle(), imagePopup(), setupToggle();
    var t = $(window).width();
    homepageSlider(), $("body").hasClass("post-type-archive-product") && stickySidebar()
}), $(window).load(function() {
    artMasonry()
}), $(window).on("resize", function() {
    var t = $(window).width();
    homepageSlider()
}), $(document).on("facetwp-loaded", function() {
    stickySidebar(), setupToggle()
});

