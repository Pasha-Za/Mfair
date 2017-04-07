"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
	"object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	} : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
	var c = [],
	    d = c.slice,
	    e = c.concat,
	    f = c.push,
	    g = c.indexOf,
	    h = {},
	    i = h.toString,
	    j = h.hasOwnProperty,
	    k = {},
	    l = a.document,
	    m = "2.1.4",
	    n = function n(a, b) {
		return new n.fn.init(a, b);
	},
	    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    p = /^-ms-/,
	    q = /-([\da-z])/gi,
	    r = function r(a, b) {
		return b.toUpperCase();
	};n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
			return d.call(this);
		}, get: function get(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
		}, pushStack: function pushStack(a) {
			var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
		}, each: function each(a, b) {
			return n.each(this, a, b);
		}, map: function map(a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b);
			}));
		}, slice: function slice() {
			return this.pushStack(d.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(a) {
			var b = this.length,
			    c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
		}, end: function end() {
			return this.prevObject || this.constructor(null);
		}, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f,
		    g = arguments[0] || {},
		    h = 1,
		    i = arguments.length,
		    j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
			if (null != (a = arguments[h])) for (b in a) {
				c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
			}
		}return g;
	}, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
			throw new Error(a);
		}, noop: function noop() {}, isFunction: function isFunction(a) {
			return "function" === n.type(a);
		}, isArray: Array.isArray, isWindow: function isWindow(a) {
			return null != a && a === a.window;
		}, isNumeric: function isNumeric(a) {
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
		}, isPlainObject: function isPlainObject(a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
		}, isEmptyObject: function isEmptyObject(a) {
			var b;for (b in a) {
				return !1;
			}return !0;
		}, type: function type(a) {
			return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
		}, globalEval: function globalEval(a) {
			var b,
			    c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
		}, camelCase: function camelCase(a) {
			return a.replace(p, "ms-").replace(q, r);
		}, nodeName: function nodeName(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
		}, each: function each(a, b, c) {
			var d,
			    e = 0,
			    f = a.length,
			    g = s(a);if (c) {
				if (g) {
					for (; f > e; e++) {
						if (d = b.apply(a[e], c), d === !1) break;
					}
				} else for (e in a) {
					if (d = b.apply(a[e], c), d === !1) break;
				}
			} else if (g) {
				for (; f > e; e++) {
					if (d = b.call(a[e], e, a[e]), d === !1) break;
				}
			} else for (e in a) {
				if (d = b.call(a[e], e, a[e]), d === !1) break;
			}return a;
		}, trim: function trim(a) {
			return null == a ? "" : (a + "").replace(o, "");
		}, makeArray: function makeArray(a, b) {
			var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
		}, inArray: function inArray(a, b, c) {
			return null == b ? -1 : g.call(b, a, c);
		}, merge: function merge(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
				a[e++] = b[d];
			}return a.length = e, a;
		}, grep: function grep(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
				d = !b(a[f], f), d !== h && e.push(a[f]);
			}return e;
		}, map: function map(a, b, c) {
			var d,
			    f = 0,
			    g = a.length,
			    h = s(a),
			    i = [];if (h) for (; g > f; f++) {
				d = b(a[f], f, c), null != d && i.push(d);
			} else for (f in a) {
				d = b(a[f], f, c), null != d && i.push(d);
			}return e.apply([], i);
		}, guid: 1, proxy: function proxy(a, b) {
			var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
				return a.apply(b || this, e.concat(d.call(arguments)));
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
		}, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase();
	});function s(a) {
		var b = "length" in a && a.length,
		    c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	}var t = function (a) {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l,
		    m,
		    n,
		    o,
		    p,
		    q,
		    r,
		    s,
		    t,
		    u = "sizzle" + 1 * new Date(),
		    v = a.document,
		    w = 0,
		    x = 0,
		    y = ha(),
		    z = ha(),
		    A = ha(),
		    B = function B(a, b) {
			return a === b && (l = !0), 0;
		},
		    C = 1 << 31,
		    D = {}.hasOwnProperty,
		    E = [],
		    F = E.pop,
		    G = E.push,
		    H = E.push,
		    I = E.slice,
		    J = function J(a, b) {
			for (var c = 0, d = a.length; d > c; c++) {
				if (a[c] === b) return c;
			}return -1;
		},
		    K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    L = "[\\x20\\t\\r\\n\\f]",
		    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		    N = M.replace("w", "w#"),
		    O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
		    P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
		    Q = new RegExp(L + "+", "g"),
		    R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
		    S = new RegExp("^" + L + "*," + L + "*"),
		    T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
		    U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
		    V = new RegExp(P),
		    W = new RegExp("^" + N + "$"),
		    X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
		    Y = /^(?:input|select|textarea|button)$/i,
		    Z = /^h\d$/i,
		    $ = /^[^{]+\{\s*\[native \w/,
		    _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    aa = /[+~]/,
		    ba = /'|\\/g,
		    ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
		    da = function da(a, b, c) {
			var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
		},
		    ea = function ea() {
			m();
		};try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
		} catch (fa) {
			H = { apply: E.length ? function (a, b) {
					G.apply(a, I.call(b));
				} : function (a, b) {
					var c = a.length,
					    d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
				} };
		}function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
				if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
					if (9 === k) {
						if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
					} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
				} else {
					if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
				}if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
							o[l] = s + ra(o[l]);
						}w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
					}if (x) try {
						return H.apply(d, w.querySelectorAll(x)), d;
					} catch (y) {} finally {
						r || b.removeAttribute("id");
					}
				}
			}return i(a.replace(R, "$1"), b, d, e);
		}function ha() {
			var a = [];function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
			}return b;
		}function ia(a) {
			return a[u] = !0, a;
		}function ja(a) {
			var b = n.createElement("div");try {
				return !!a(b);
			} catch (c) {
				return !1;
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null;
			}
		}function ka(a, b) {
			var c = a.split("|"),
			    e = a.length;while (e--) {
				d.attrHandle[c[e]] = b;
			}
		}function la(a, b) {
			var c = b && a,
			    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
				if (c === b) return -1;
			}return a ? 1 : -1;
		}function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
			};
		}function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
			};
		}function oa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e,
					    f = a([], c.length, b),
					    g = f.length;while (g--) {
						c[e = f[g]] && (c[e] = !(d[e] = c[e]));
					}
				});
			});
		}function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a;
		}c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
		}, m = ga.setDocument = function (a) {
			var b,
			    e,
			    g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className");
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					return a.getAttribute("id") === b;
				};
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
				};
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
			} : function (a, b) {
				var c,
				    d = [],
				    e = 0,
				    f = b.getElementsByTagName(a);if ("*" === a) {
					while (c = f[e++]) {
						1 === c.nodeType && d.push(c);
					}return d;
				}return f;
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return p ? b.getElementsByClassName(a) : void 0;
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
			}), ja(function (a) {
				var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
			} : function (a, b) {
				if (b) while (b = b.parentNode) {
					if (b === a) return !0;
				}return !1;
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
			} : function (a, b) {
				if (a === b) return l = !0, 0;var c,
				    d = 0,
				    e = a.parentNode,
				    f = b.parentNode,
				    h = [a],
				    i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
					h.unshift(c);
				}c = b;while (c = c.parentNode) {
					i.unshift(c);
				}while (h[d] === i[d]) {
					d++;
				}return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
			}, g) : n;
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b);
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
			} catch (e) {}return ga(b, n, null, [a]).length > 0;
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b);
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
			    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a);
		}, ga.uniqueSort = function (a) {
			var b,
			    d = [],
			    e = 0,
			    f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) {
					b === a[f] && (e = d.push(f));
				}while (e--) {
					a.splice(d[e], 1);
				}
			}return k = null, a;
		}, e = ga.getText = function (a) {
			var b,
			    c = "",
			    d = 0,
			    f = a.nodeType;if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
						c += e(a);
					}
				} else if (3 === f || 4 === f) return a.nodeValue;
			} else while (b = a[d++]) {
				c += e(b);
			}return c;
		}, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
				}, CHILD: function CHILD(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
				}, PSEUDO: function PSEUDO(a) {
					var b,
					    c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
				} }, filter: { TAG: function TAG(a) {
					var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
						return !0;
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b;
					};
				}, CLASS: function CLASS(a) {
					var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
					};
				}, CHILD: function CHILD(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					    g = "last" !== a.slice(-4),
					    h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode;
					} : function (b, c, i) {
						var j,
						    k,
						    l,
						    m,
						    n,
						    o,
						    p = f !== g ? "nextSibling" : "previousSibling",
						    q = b.parentNode,
						    r = h && b.nodeName.toLowerCase(),
						    s = !i && !h;if (q) {
							if (f) {
								while (p) {
									l = b;while (l = l[p]) {
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									}o = p = "only" === a && !o && "nextSibling";
								}return !0;
							}if (o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];break;
									}
								}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
								if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
							}return m -= e, m === d || m % d === 0 && m / d >= 0;
						}
					};
				}, PSEUDO: function PSEUDO(a, b) {
					var c,
					    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d,
						    f = e(a, b),
						    g = f.length;while (g--) {
							d = J(a, f[g]), a[d] = !(c[d] = f[g]);
						}
					}) : function (a) {
						return e(a, 0, c);
					}) : e;
				} }, pseudos: { not: ia(function (a) {
					var b = [],
					    c = [],
					    d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
						var f,
						    g = d(a, null, e, []),
						    h = a.length;while (h--) {
							(f = g[h]) && (a[h] = !(b[h] = f));
						}
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
					};
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0;
					};
				}), contains: ia(function (a) {
					return a = a.replace(ca, da), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
					};
				}), lang: ia(function (a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
						var c;do {
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
						} while ((b = b.parentNode) && 1 === b.nodeType);return !1;
					};
				}), target: function target(b) {
					var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
				}, root: function root(a) {
					return a === o;
				}, focus: function focus(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
				}, enabled: function enabled(a) {
					return a.disabled === !1;
				}, disabled: function disabled(a) {
					return a.disabled === !0;
				}, checked: function checked(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
				}, selected: function selected(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
				}, empty: function empty(a) {
					for (a = a.firstChild; a; a = a.nextSibling) {
						if (a.nodeType < 6) return !1;
					}return !0;
				}, parent: function parent(a) {
					return !d.pseudos.empty(a);
				}, header: function header(a) {
					return Z.test(a.nodeName);
				}, input: function input(a) {
					return Y.test(a.nodeName);
				}, button: function button(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
				}, text: function text(a) {
					var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
				}, first: oa(function () {
					return [0];
				}), last: oa(function (a, b) {
					return [b - 1];
				}), eq: oa(function (a, b, c) {
					return [0 > c ? c + b : c];
				}), even: oa(function (a, b) {
					for (var c = 0; b > c; c += 2) {
						a.push(c);
					}return a;
				}), odd: oa(function (a, b) {
					for (var c = 1; b > c; c += 2) {
						a.push(c);
					}return a;
				}), lt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) {
						a.push(d);
					}return a;
				}), gt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) {
						a.push(d);
					}return a;
				}) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
			d.pseudos[b] = ma(b);
		}for (b in { submit: !0, reset: !0 }) {
			d.pseudos[b] = na(b);
		}function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
			var c,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
					!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
				}if (!c) break;
			}return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
		};function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) {
				d += a[b].value;
			}return d;
		}function sa(a, b, c) {
			var d = b.dir,
			    e = c && "parentNode" === d,
			    f = x++;return b.first ? function (b, c, f) {
				while (b = b[d]) {
					if (1 === b.nodeType || e) return a(b, c, f);
				}
			} : function (b, c, g) {
				var h,
				    i,
				    j = [w, f];if (g) {
					while (b = b[d]) {
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
					}
				} else while (b = b[d]) {
					if (1 === b.nodeType || e) {
						if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
					}
				}
			};
		}function ta(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;while (e--) {
					if (!a[e](b, c, d)) return !1;
				}return !0;
			} : a[0];
		}function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) {
				ga(a, b[d], c);
			}return c;
		}function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
				(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			}return g;
		}function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
				var j,
				    k,
				    l,
				    m = [],
				    n = [],
				    o = g.length,
				    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
				    q = !a || !f && b ? p : va(p, m, a, h, i),
				    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
					j = va(r, n), d(j, [], h, i), k = j.length;while (k--) {
						(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
					}
				}if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;while (k--) {
								(l = r[k]) && j.push(q[k] = l);
							}e(null, r = [], j, i);
						}k = r.length;while (k--) {
							(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
						}
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
			});
		}function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
				return a === b;
			}, h, !0), l = sa(function (a) {
				return J(b, a) > -1;
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
			}]; f > i; i++) {
				if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) {
							if (d.relative[a[e].type]) break;
						}return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
					}m.push(c);
				}
			}return ta(m);
		}function ya(a, b) {
			var c = b.length > 0,
			    e = a.length > 0,
			    f = function f(_f, g, h, i, k) {
				var l,
				    m,
				    o,
				    p = 0,
				    q = "0",
				    r = _f && [],
				    s = [],
				    t = j,
				    u = _f || e && d.find.TAG("*", k),
				    v = w += null == t ? 1 : Math.random() || .1,
				    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
					if (e && l) {
						m = 0;while (o = a[m++]) {
							if (o(l, g, h)) {
								i.push(l);break;
							}
						}k && (w = v);
					}c && ((l = !o && l) && p--, _f && r.push(l));
				}if (p += q, c && q !== p) {
					m = 0;while (o = b[m++]) {
						o(r, s, g, h);
					}if (_f) {
						if (p > 0) while (q--) {
							r[q] || s[q] || (s[q] = F.call(i));
						}s = va(s);
					}H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
				}return k && (w = v, j = t), r;
			};return c ? ia(f) : f;
		}return h = ga.compile = function (a, b) {
			var c,
			    d = [],
			    e = [],
			    f = A[a + " "];if (!f) {
				b || (b = g(a)), c = b.length;while (c--) {
					f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
				}f = A(a, ya(e, d)), f.selector = a;
			}return f;
		}, i = ga.select = function (a, b, e, f) {
			var i,
			    j,
			    k,
			    l,
			    m,
			    n = "function" == typeof a && a,
			    o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
				}i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
					}
				}
			}return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"));
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
		}), ja(function (a) {
			return null == a.getAttribute("disabled");
		}) || ka(K, function (a, b, c) {
			var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
		}), ga;
	}(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
	    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c;
		});if (b.nodeType) return n.grep(a, function (a) {
			return a === b !== c;
		});if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
		}return n.grep(a, function (a) {
			return g.call(b, a) >= 0 !== c;
		});
	}n.filter = function (a, b, c) {
		var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType;
		}));
	}, n.fn.extend({ find: function find(a) {
			var b,
			    c = this.length,
			    d = [],
			    e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
				for (b = 0; c > b; b++) {
					if (n.contains(e[b], this)) return !0;
				}
			}));for (b = 0; c > b; b++) {
				n.find(a, e[b], d);
			}return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
		}, filter: function filter(a) {
			return this.pushStack(x(this, a || [], !1));
		}, not: function not(a) {
			return this.pushStack(x(this, a || [], !0));
		}, is: function is(a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
		} });var y,
	    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    A = n.fn.init = function (a, b) {
		var c, d;if (!a) return this;if ("string" == typeof a) {
			if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
				if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
					n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				}return this;
			}return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
		}return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	};A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
	    C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
			var d = [],
			    e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) break;d.push(a);
				}
			}return d;
		}, sibling: function sibling(a, b) {
			for (var c = []; a; a = a.nextSibling) {
				1 === a.nodeType && a !== b && c.push(a);
			}return c;
		} }), n.fn.extend({ has: function has(a) {
			var b = n(a, this),
			    c = b.length;return this.filter(function () {
				for (var a = 0; c > a; a++) {
					if (n.contains(this, b[a])) return !0;
				}
			});
		}, closest: function closest(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
				for (c = this[d]; c && c !== b; c = c.parentNode) {
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);break;
					}
				}
			}return this.pushStack(f.length > 1 ? n.unique(f) : f);
		}, index: function index(a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
		}, addBack: function addBack(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
		} });function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	}n.each({ parent: function parent(a) {
			var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
		}, parents: function parents(a) {
			return n.dir(a, "parentNode");
		}, parentsUntil: function parentsUntil(a, b, c) {
			return n.dir(a, "parentNode", c);
		}, next: function next(a) {
			return D(a, "nextSibling");
		}, prev: function prev(a) {
			return D(a, "previousSibling");
		}, nextAll: function nextAll(a) {
			return n.dir(a, "nextSibling");
		}, prevAll: function prevAll(a) {
			return n.dir(a, "previousSibling");
		}, nextUntil: function nextUntil(a, b, c) {
			return n.dir(a, "nextSibling", c);
		}, prevUntil: function prevUntil(a, b, c) {
			return n.dir(a, "previousSibling", c);
		}, siblings: function siblings(a) {
			return n.sibling((a.parentNode || {}).firstChild, a);
		}, children: function children(a) {
			return n.sibling(a.firstChild);
		}, contents: function contents(a) {
			return a.contentDocument || n.merge([], a.childNodes);
		} }, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
		};
	});var E = /\S+/g,
	    F = {};function G(a) {
		var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
			b[c] = !0;
		}), b;
	}n.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h = [],
		    i = !a.once && [],
		    j = function j(l) {
			for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
				if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
					b = !1;break;
				}
			}d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
		},
		    k = { add: function add() {
				if (h) {
					var c = h.length;!function g(b) {
						n.each(b, function (b, c) {
							var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
						});
					}(arguments), d ? f = h.length : b && (e = c, j(b));
				}return this;
			}, remove: function remove() {
				return h && n.each(arguments, function (a, b) {
					var c;while ((c = n.inArray(b, h, c)) > -1) {
						h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
					}
				}), this;
			}, has: function has(a) {
				return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
			}, empty: function empty() {
				return h = [], f = 0, this;
			}, disable: function disable() {
				return h = i = b = void 0, this;
			}, disabled: function disabled() {
				return !h;
			}, lock: function lock() {
				return i = void 0, b || k.disable(), this;
			}, locked: function locked() {
				return !i;
			}, fireWith: function fireWith(a, b) {
				return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
			}, fire: function fire() {
				return k.fireWith(this, arguments), this;
			}, fired: function fired() {
				return !!c;
			} };return k;
	}, n.extend({ Deferred: function Deferred(a) {
			var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
			    c = "pending",
			    d = { state: function state() {
					return c;
				}, always: function always() {
					return e.done(arguments).fail(arguments), this;
				}, then: function then() {
					var a = arguments;return n.Deferred(function (c) {
						n.each(b, function (b, f) {
							var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
								var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
							});
						}), a = null;
					}).promise();
				}, promise: function promise(a) {
					return null != a ? n.extend(a, d) : d;
				} },
			    e = {};return d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
				    h = f[3];d[f[1]] = g.add, h && g.add(function () {
					c = h;
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this;
				}, e[f[0] + "With"] = g.fireWith;
			}), d.promise(e), a && a.call(e, e), e;
		}, when: function when(a) {
			var b = 0,
			    c = d.call(arguments),
			    e = c.length,
			    f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
			    g = 1 === f ? a : n.Deferred(),
			    h = function h(a, b, c) {
				return function (e) {
					b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
				};
			},
			    i,
			    j,
			    k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
				c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			}return f || g.resolveWith(k, c), g.promise();
		} });var H;n.fn.ready = function (a) {
		return n.ready.promise().done(a), this;
	}, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
			a ? n.readyWait++ : n.ready(!0);
		}, ready: function ready(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
		} });function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
	}n.ready.promise = function (b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
	}, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
		var h = 0,
		    i = a.length,
		    j = null == c;if ("object" === n.type(c)) {
			e = !0;for (h in c) {
				n.access(a, b, h, c[h], !0, f, g);
			}
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
			return j.call(n(a), c);
		})), b)) for (; i > h; h++) {
			b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		}return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	};n.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	};function K() {
		Object.defineProperty(this.cache = {}, 0, { get: function get() {
				return {};
			} }), this.expando = n.expando + K.uid++;
	}K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
			if (!K.accepts(a)) return 0;var b = {},
			    c = a[this.expando];if (!c) {
				c = K.uid++;try {
					b[this.expando] = { value: c }, Object.defineProperties(a, b);
				} catch (d) {
					b[this.expando] = c, n.extend(a, b);
				}
			}return this.cache[c] || (this.cache[c] = {}), c;
		}, set: function set(a, b, c) {
			var d,
			    e = this.key(a),
			    f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
				f[d] = b[d];
			}return f;
		}, get: function get(a, b) {
			var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
		}, access: function access(a, b, c) {
			var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
		}, remove: function remove(a, b) {
			var c,
			    d,
			    e,
			    f = this.key(a),
			    g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) {
					delete g[d[c]];
				}
			}
		}, hasData: function hasData(a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {});
		}, discard: function discard(a) {
			a[this.expando] && delete this.cache[a[this.expando]];
		} };var L = new K(),
	    M = new K(),
	    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    O = /([A-Z])/g;function P(a, b, c) {
		var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
			try {
				c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
			} catch (e) {}M.set(a, b, c);
		} else c = void 0;return c;
	}n.extend({ hasData: function hasData(a) {
			return M.hasData(a) || L.hasData(a);
		}, data: function data(a, b, c) {
			return M.access(a, b, c);
		}, removeData: function removeData(a, b) {
			M.remove(a, b);
		}, _data: function _data(a, b, c) {
			return L.access(a, b, c);
		}, _removeData: function _removeData(a, b) {
			L.remove(a, b);
		} }), n.fn.extend({ data: function data(a, b) {
			var c,
			    d,
			    e,
			    f = this[0],
			    g = f && f.attributes;if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;while (c--) {
						g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					}L.set(f, "hasDataAttrs", !0);
				}return e;
			}return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
				M.set(this, a);
			}) : J(this, function (b) {
				var c,
				    d = n.camelCase(a);if (f && void 0 === b) {
					if (c = M.get(f, a), void 0 !== c) return c;if (c = M.get(f, d), void 0 !== c) return c;if (c = P(f, d, void 0), void 0 !== c) return c;
				} else this.each(function () {
					var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
				});
			}, null, b, arguments.length > 1, null, !0);
		}, removeData: function removeData(a) {
			return this.each(function () {
				M.remove(this, a);
			});
		} }), n.extend({ queue: function queue(a, b, c) {
			var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
		}, dequeue: function dequeue(a, b) {
			b = b || "fx";var c = n.queue(a, b),
			    d = c.length,
			    e = c.shift(),
			    f = n._queueHooks(a, b),
			    g = function g() {
				n.dequeue(a, b);
			};"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
		}, _queueHooks: function _queueHooks(a, b) {
			var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
					L.remove(a, [b + "queue", c]);
				}) });
		} }), n.fn.extend({ queue: function queue(a, b) {
			var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
			});
		}, dequeue: function dequeue(a) {
			return this.each(function () {
				n.dequeue(this, a);
			});
		}, clearQueue: function clearQueue(a) {
			return this.queue(a || "fx", []);
		}, promise: function promise(a, b) {
			var c,
			    d = 1,
			    e = n.Deferred(),
			    f = this,
			    g = this.length,
			    h = function h() {
				--d || e.resolveWith(f, [f]);
			};"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
				c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			}return h(), e.promise(b);
		} });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    R = ["Top", "Right", "Bottom", "Left"],
	    S = function S(a, b) {
		return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
	},
	    T = /^(?:checkbox|radio)$/i;!function () {
		var a = l.createDocumentFragment(),
		    b = a.appendChild(l.createElement("div")),
		    c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	}();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
	    W = /^(?:mouse|pointer|contextmenu)|click/,
	    X = /^(?:focusinfocus|focusoutblur)$/,
	    Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
		return !0;
	}function $() {
		return !1;
	}function _() {
		try {
			return l.activeElement;
		} catch (a) {}
	}n.event = { global: {}, add: function add(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.get(a);if (r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
					return (typeof n === "undefined" ? "undefined" : _typeof(n)) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
				}), b = (b || "").match(E) || [""], j = b.length;while (j--) {
					h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
				}
			}
		}, remove: function remove(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;while (j--) {
					if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
							k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						}g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
					} else for (o in i) {
						n.event.remove(a, o + b[j], c, d, !0);
					}
				}n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
			}
		}, trigger: function trigger(b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    k,
			    m,
			    o,
			    p = [d || l],
			    q = j.call(b, "type") ? b.type : b,
			    r = j.call(b, "namespace") ? b.namespace.split(".") : [];if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
						p.push(g), h = g;
					}h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
				}f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) {
					b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
				}return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
			}
		}, dispatch: function dispatch(a) {
			a = n.event.fix(a);var b,
			    c,
			    e,
			    f,
			    g,
			    h = [],
			    i = d.call(arguments),
			    j = (L.get(this, "events") || {})[a.type] || [],
			    k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
						(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
					}
				}return k.postDispatch && k.postDispatch.call(this, a), a.result;
			}
		}, handlers: function handlers(a, b) {
			var c,
			    d,
			    e,
			    f,
			    g = [],
			    h = b.delegateCount,
			    i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
				if (i.disabled !== !0 || "click" !== a.type) {
					for (d = [], c = 0; h > c; c++) {
						f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
					}d.length && g.push({ elem: i, handlers: d });
				}
			}return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
		}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
			} }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
				var c,
				    d,
				    e,
				    f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
			} }, fix: function fix(a) {
			if (a[n.expando]) return a;var b,
			    c,
			    d,
			    e = a.type,
			    f = a,
			    g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) {
				c = d[b], a[c] = f[c];
			}return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
		}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0;
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					return this === _() && this.blur ? (this.blur(), !1) : void 0;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
				}, _default: function _default(a) {
					return n.nodeName(a.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
				} } }, simulate: function simulate(a, b, c, d) {
			var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
		} }, n.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1);
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	}, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
			var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
		}, stopPropagation: function stopPropagation() {
			var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
		} }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
		n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
				var c,
				    d = this,
				    e = a.relatedTarget,
				    f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
			} };
	}), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function c(a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0);
		};n.event.special[b] = { setup: function setup() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
			}, teardown: function teardown() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
			} };
	}), n.fn.extend({ on: function on(a, b, c, d, e) {
			var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
				"string" != typeof b && (c = c || b, b = void 0);for (g in a) {
					this.on(g, b, c, a[g], e);
				}return this;
			}if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;return 1 === e && (f = d, d = function d(a) {
				return n().off(a), f.apply(this, arguments);
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
				n.event.add(this, a, d, c, b);
			});
		}, one: function one(a, b, c, d) {
			return this.on(a, b, c, d, 1);
		}, off: function off(a, b, c) {
			var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
				for (e in a) {
					this.off(e, b, a[e]);
				}return this;
			}return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
				n.event.remove(this, a, c, b);
			});
		}, trigger: function trigger(a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this);
			});
		}, triggerHandler: function triggerHandler(a, b) {
			var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
		} });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    ba = /<([\w:]+)/,
	    ca = /<|&#?\w+;/,
	    da = /<(?:script|style|link)/i,
	    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    fa = /^$|\/(?:java|ecma)script/i,
	    ga = /^true\/(.*)/,
	    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	    ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	}function ka(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	}function la(a) {
		var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	}function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) {
			L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
		}
	}function na(a, b) {
		var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};for (e in j) {
					for (c = 0, d = j[e].length; d > c; c++) {
						n.event.add(b, e, j[e][c]);
					}
				}
			}M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
		}
	}function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	}function pa(a, b) {
		var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
	}n.extend({ clone: function clone(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.cloneNode(!0),
			    i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
				pa(f[d], g[d]);
			}if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
				na(f[d], g[d]);
			} else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
		}, buildFragment: function buildFragment(a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
				if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
					f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) {
						f = f.lastChild;
					}n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
				} else l.push(b.createTextNode(e));
			}k.textContent = "", m = 0;while (e = l[m++]) {
				if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
					j = 0;while (e = f[j++]) {
						fa.test(e.type || "") && c.push(e);
					}
				}
			}return k;
		}, cleanData: function cleanData(a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if (b.events) for (d in b.events) {
						f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
					}L.cache[e] && delete L.cache[e];
				}delete M.cache[c[M.expando]];
			}
		} }), n.fn.extend({ text: function text(a) {
			return J(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
				});
			}, null, a, arguments.length);
		}, append: function append() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.appendChild(a);
				}
			});
		}, prepend: function prepend() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.insertBefore(a, b.firstChild);
				}
			});
		}, before: function before() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this);
			});
		}, after: function after() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
			});
		}, remove: function remove(a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
				b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
			}return this;
		}, empty: function empty() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
			}return this;
		}, clone: function clone(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b);
			});
		}, html: function html(a) {
			return J(this, function (a) {
				var b = this[0] || {},
				    c = 0,
				    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");try {
						for (; d > c; c++) {
							b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
						}b = 0;
					} catch (e) {}
				}b && this.empty().append(a);
			}, null, a, arguments.length);
		}, replaceWith: function replaceWith() {
			var a = arguments[0];return this.domManip(arguments, function (b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
			}), a && (a.length || a.nodeType) ? this : this.remove();
		}, detach: function detach(a) {
			return this.remove(a, !0);
		}, domManip: function domManip(a, b) {
			a = e.apply([], a);var c,
			    d,
			    f,
			    g,
			    h,
			    i,
			    j = 0,
			    l = this.length,
			    m = this,
			    o = l - 1,
			    p = a[0],
			    q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
				var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
			});if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
					h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
				}if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
					h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
				}
			}return this;
		} }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
				c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			}return this.pushStack(d);
		};
	});var qa,
	    ra = {};function sa(b, c) {
		var d,
		    e = n(c.createElement(b)).appendTo(c.body),
		    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
	}function ta(a) {
		var b = l,
		    c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
	}var ua = /^margin/,
	    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
	    wa = function wa(b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
	};function xa(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	}function ya(a, b) {
		return { get: function get() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments);
			} };
	}!function () {
		var b,
		    c,
		    d = l.documentElement,
		    e = l.createElement("div"),
		    f = l.createElement("div");if (f.style) {
			(function () {
				var g = function g() {
					f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
				};

				f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
						return g(), b;
					}, boxSizingReliable: function boxSizingReliable() {
						return null == c && g(), c;
					}, reliableMarginRight: function reliableMarginRight() {
						var b,
						    c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
					} });
			})();
		}
	}(), n.swap = function (a, b, c, d) {
		var e,
		    f,
		    g = {};for (f in b) {
			g[f] = a.style[f], a.style[f] = b[f];
		}e = c.apply(a, d || []);for (f in b) {
			a.style[f] = g[f];
		}return e;
	};var za = /^(none|table(?!-c[ea]).+)/,
	    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
	    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
	    Ca = { position: "absolute", visibility: "hidden", display: "block" },
	    Da = { letterSpacing: "0", fontWeight: "400" },
	    Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
		if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
		    d = b,
		    e = Ea.length;while (e--) {
			if (b = Ea[e] + c, b in a) return b;
		}return d;
	}function Ga(a, b, c) {
		var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	}function Ha(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
			"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		}return g;
	}function Ia(a, b, c) {
		var d = !0,
		    e = "width" === b ? a.offsetWidth : a.offsetHeight,
		    f = wa(a),
		    g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
			if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
		}return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
	}function Ja(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
			d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		}for (g = 0; h > g; g++) {
			d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		}return a;
	}n.extend({ cssHooks: { opacity: { get: function get(a, b) {
					if (b) {
						var c = xa(a, "opacity");return "" === c ? "1" : c;
					}
				} } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				    f,
				    g,
				    h = n.camelCase(b),
				    i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
			}
		}, css: function css(a, b, c, d) {
			var e,
			    f,
			    g,
			    h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
		} }), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = { get: function get(a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
					return Ia(a, b, d);
				}) : Ia(a, b, d) : void 0;
			}, set: function set(a, c, d) {
				var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
			} };
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
		return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
	}), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
		n.cssHooks[a + b] = { expand: function expand(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
					e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
				}return e;
			} }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
	}), n.fn.extend({ css: function css(a, b) {
			return J(this, function (a, b, c) {
				var d,
				    e,
				    f = {},
				    g = 0;if (n.isArray(b)) {
					for (d = wa(a), e = b.length; e > g; g++) {
						f[b[g]] = n.css(a, b[g], !1, d);
					}return f;
				}return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
			}, a, b, arguments.length > 1);
		}, show: function show() {
			return Ja(this, !0);
		}, hide: function hide() {
			return Ja(this);
		}, toggle: function toggle(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				S(this) ? n(this).show() : n(this).hide();
			});
		} });function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e);
	}n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
		}, cur: function cur() {
			var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
		}, run: function run(a) {
			var b,
			    c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
		} }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
				var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
			}, set: function set(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
			} } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
		} }, n.easing = { linear: function linear(a) {
			return a;
		}, swing: function swing(a) {
			return .5 - Math.cos(a * Math.PI) / 2;
		} }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
	    Ma,
	    Na = /^(?:toggle|show|hide)$/,
	    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
	    Pa = /queueHooks$/,
	    Qa = [Va],
	    Ra = { "*": [function (a, b) {
			var c = this.createTween(a, b),
			    d = c.cur(),
			    e = Oa.exec(b),
			    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
			    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
			    h = 1,
			    i = 20;if (g && g[3] !== f) {
				f = f || g[3], e = e || [], g = +d || 1;do {
					h = h || ".5", g /= h, n.style(c.elem, a, g + f);
				} while (h !== (h = c.cur() / d) && 1 !== h && --i);
			}return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
		}] };function Sa() {
		return setTimeout(function () {
			La = void 0;
		}), La = n.now();
	}function Ta(a, b) {
		var c,
		    d = 0,
		    e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
			c = R[d], e["margin" + c] = e["padding" + c] = a;
		}return b && (e.opacity = e.width = a), e;
	}function Ua(a, b, c) {
		for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
			if (d = e[f].call(c, b, a)) return d;
		}
	}function Va(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l = this,
		    m = {},
		    o = a.style,
		    p = a.nodeType && S(a),
		    q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i();
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
			});
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
		}));for (d in b) {
			if (e = b[d], Na.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
				}m[d] = q && q[d] || n.style(a, d);
			} else j = void 0;
		}if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
				n(a).hide();
			}), l.done(function () {
				var b;L.remove(a, "fxshow");for (b in m) {
					n.style(a, b, m[b]);
				}
			});for (d in m) {
				g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
			}
		}
	}function Wa(a, b) {
		var c, d, e, f, g;for (c in a) {
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];for (c in f) {
					c in a || (a[c] = f[c], b[c] = e);
				}
			} else b[d] = e;
		}
	}function Xa(a, b, c) {
		var d,
		    e,
		    f = 0,
		    g = Qa.length,
		    h = n.Deferred().always(function () {
			delete i.elem;
		}),
		    i = function i() {
			if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
				j.tweens[g].run(f);
			}return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
		},
		    j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
				var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
			}, stop: function stop(b) {
				var c = 0,
				    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
					j.tweens[c].run(1);
				}return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
			} }),
		    k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) {
			if (d = Qa[f].call(j, a, k, j.opts)) return d;
		}return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	}n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
				c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
			}
		}, prefilter: function prefilter(a, b) {
			b ? Qa.unshift(a) : Qa.push(a);
		} }), n.speed = function (a, b, c) {
		var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
		}, d;
	}, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
			return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
		}, animate: function animate(a, b, c, d) {
			var e = n.isEmptyObject(a),
			    f = n.speed(b, c, d),
			    g = function g() {
				var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
			};return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
		}, stop: function stop(a, b, c) {
			var d = function d(a) {
				var b = a.stop;delete a.stop, b(c);
			};return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
				    e = null != a && a + "queueHooks",
				    f = n.timers,
				    g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
					g[e] && g[e].stop && Pa.test(e) && d(g[e]);
				}for (e = f.length; e--;) {
					f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				}(b || !c) && n.dequeue(this, a);
			});
		}, finish: function finish(a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b,
				    c = L.get(this),
				    d = c[a + "queue"],
				    e = c[a + "queueHooks"],
				    f = n.timers,
				    g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
					f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				}for (b = 0; g > b; b++) {
					d[b] && d[b].finish && d[b].finish.call(this);
				}delete c.finish;
			});
		} }), n.each(["toggle", "show", "hide"], function (a, b) {
		var c = n.fn[b];n.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
		};
	}), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
		n.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d);
		};
	}), n.timers = [], n.fx.tick = function () {
		var a,
		    b = 0,
		    c = n.timers;for (La = n.now(); b < c.length; b++) {
			a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		}c.length || n.fx.stop(), La = void 0;
	}, n.fx.timer = function (a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	}, n.fx.interval = 13, n.fx.start = function () {
		Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
	}, n.fx.stop = function () {
		clearInterval(Ma), Ma = null;
	}, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
		return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);c.stop = function () {
				clearTimeout(d);
			};
		});
	}, function () {
		var a = l.createElement("input"),
		    b = l.createElement("select"),
		    c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
	}();var Ya,
	    Za,
	    $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
			return J(this, n.attr, a, b, arguments.length > 1);
		}, removeAttr: function removeAttr(a) {
			return this.each(function () {
				n.removeAttr(this, a);
			});
		} }), n.extend({ attr: function attr(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
		}, removeAttr: function removeAttr(a, b) {
			var c,
			    d,
			    e = 0,
			    f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
				d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
			}
		}, attrHooks: { type: { set: function set(a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
					}
				} } } }), Za = { set: function set(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
		} }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
			var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
		};
	});var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
			return J(this, n.prop, a, b, arguments.length > 1);
		}, removeProp: function removeProp(a) {
			return this.each(function () {
				delete this[n.propFix[a] || a];
			});
		} }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
			var d,
			    e,
			    f,
			    g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
		}, propHooks: { tabIndex: { get: function get(a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
				} } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
			var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
		} }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this;
	});var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).addClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) {
				if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
					f = 0;while (e = b[f++]) {
						d.indexOf(" " + e + " ") < 0 && (d += e + " ");
					}g = n.trim(d), c.className !== g && (c.className = g);
				}
			}return this;
		}, removeClass: function removeClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = 0 === arguments.length || "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).removeClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) {
				if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
					f = 0;while (e = b[f++]) {
						while (d.indexOf(" " + e + " ") >= 0) {
							d = d.replace(" " + e + " ", " ");
						}
					}g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
				}
			}return this;
		}, toggleClass: function toggleClass(a, b) {
			var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b);
			} : function () {
				if ("string" === c) {
					var b,
					    d = 0,
					    e = n(this),
					    f = a.match(E) || [];while (b = f[d++]) {
						e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
					}
				} else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
			});
		}, hasClass: function hasClass(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
			}return !1;
		} });var bb = /\r/g;n.fn.extend({ val: function val(a) {
			var b,
			    c,
			    d,
			    e = this[0];{
				if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
					var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
						return null == a ? "" : a + "";
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
				});if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
			}
		} }), n.extend({ valHooks: { option: { get: function get(a) {
					var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
				} }, select: { get: function get(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
						if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) return b;g.push(b);
						}
					}return g;
				}, set: function set(a, b) {
					var c,
					    d,
					    e = a.options,
					    f = n.makeArray(b),
					    g = e.length;while (g--) {
						d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
					}return c || (a.selectedIndex = -1), f;
				} } } }), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = { set: function set(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
			} }, k.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value;
		});
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
		};
	}), n.fn.extend({ hover: function hover(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		}, bind: function bind(a, b, c) {
			return this.on(a, null, b, c);
		}, unbind: function unbind(a, b) {
			return this.off(a, null, b);
		}, delegate: function delegate(a, b, c, d) {
			return this.on(b, a, c, d);
		}, undelegate: function undelegate(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
		} });var cb = n.now(),
	    db = /\?/;n.parseJSON = function (a) {
		return JSON.parse(a + "");
	}, n.parseXML = function (a) {
		var b, c;if (!a || "string" != typeof a) return null;try {
			c = new DOMParser(), b = c.parseFromString(a, "text/xml");
		} catch (d) {
			b = void 0;
		}return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
	};var eb = /#.*$/,
	    fb = /([?&])_=[^&]*/,
	    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    ib = /^(?:GET|HEAD)$/,
	    jb = /^\/\//,
	    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	    lb = {},
	    mb = {},
	    nb = "*/".concat("*"),
	    ob = a.location.href,
	    pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");var d,
			    e = 0,
			    f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) {
				"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
			}
		};
	}function rb(a, b, c, d) {
		var e = {},
		    f = a === mb;function g(h) {
			var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
			}), i;
		}return g(b.dataTypes[0]) || !e["*"] && g("*");
	}function sb(a, b) {
		var c,
		    d,
		    e = n.ajaxSettings.flatOptions || {};for (c in b) {
			void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		}return d && n.extend(!0, a, d), a;
	}function tb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.contents,
		    i = a.dataTypes;while ("*" === i[0]) {
			i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		}if (d) for (e in h) {
			if (h[e] && h[e].test(d)) {
				i.unshift(e);break;
			}
		}if (i[0] in c) f = i[0];else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;break;
				}g || (g = e);
			}f = f || g;
		}return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	}function ub(a, b, c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
			j[g.toLowerCase()] = a.converters[g];
		}f = k.shift();while (f) {
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
				if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
					}
				}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
					b = g(b);
				} catch (l) {
					return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
				}
			}
		}return { state: "success", data: b };
	}n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
		}, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
			"object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.ajaxSetup({}, b),
			    l = k.context || k,
			    m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
			    o = n.Deferred(),
			    p = n.Callbacks("once memory"),
			    q = k.statusCode || {},
			    r = {},
			    s = {},
			    t = 0,
			    u = "canceled",
			    v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
					var b;if (2 === t) {
						if (!f) {
							f = {};while (b = gb.exec(e)) {
								f[b[1].toLowerCase()] = b[2];
							}
						}b = f[a.toLowerCase()];
					}return null == b ? null : b;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return 2 === t ? e : null;
				}, setRequestHeader: function setRequestHeader(a, b) {
					var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
				}, overrideMimeType: function overrideMimeType(a) {
					return t || (k.mimeType = a), this;
				}, statusCode: function statusCode(a) {
					var b;if (a) if (2 > t) for (b in a) {
						q[b] = [q[b], a[b]];
					} else v.always(a[v.status]);return this;
				}, abort: function abort(a) {
					var b = a || u;return c && c.abort(b), x(0, b), this;
				} };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) {
				v.setRequestHeader(j, k.headers[j]);
			}if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) {
				v[j](k[j]);
			}if (c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout");
				}, k.timeout));try {
					t = 1, c.send(r, x);
				} catch (w) {
					if (!(2 > t)) throw w;x(-1, w);
				}
			} else x(-1, "No Transport");function x(a, b, f, h) {
				var j,
				    r,
				    s,
				    u,
				    w,
				    x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
			}return v;
		}, getJSON: function getJSON(a, b, c) {
			return n.get(a, b, c, "json");
		}, getScript: function getScript(a, b) {
			return n.get(a, void 0, b, "script");
		} }), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
		};
	}), n._evalUrl = function (a) {
		return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	}, n.fn.extend({ wrapAll: function wrapAll(a) {
			var b;return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapAll(a.call(this, b));
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;while (a.firstElementChild) {
					a = a.firstElementChild;
				}return a;
			}).append(this)), this);
		}, wrapInner: function wrapInner(a) {
			return this.each(n.isFunction(a) ? function (b) {
				n(this).wrapInner(a.call(this, b));
			} : function () {
				var b = n(this),
				    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
			});
		}, wrap: function wrap(a) {
			var b = n.isFunction(a);return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a);
			});
		}, unwrap: function unwrap() {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
			}).end();
		} }), n.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0;
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a);
	};var vb = /%20/g,
	    wb = /\[\]$/,
	    xb = /\r?\n/g,
	    yb = /^(?:submit|button|image|reset|file)$/i,
	    zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
		var e;if (n.isArray(b)) n.each(b, function (b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
		});else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
			Ab(a + "[" + e + "]", b[e], c, d);
		}
	}n.param = function (a, b) {
		var c,
		    d = [],
		    e = function e(a, b) {
			b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
		};if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
			e(this.name, this.value);
		});else for (c in a) {
			Ab(c, a[c], b, e);
		}return d.join("&").replace(vb, "+");
	}, n.fn.extend({ serialize: function serialize() {
			return n.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
			}).filter(function () {
				var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
			}).map(function (a, b) {
				var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return { name: b.name, value: a.replace(xb, "\r\n") };
				}) : { name: b.name, value: c.replace(xb, "\r\n") };
			}).get();
		} }), n.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest();
		} catch (a) {}
	};var Bb = 0,
	    Cb = {},
	    Db = { 0: 200, 1223: 204 },
	    Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Cb) {
			Cb[a]();
		}
	}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
		var _b2;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
				var e,
				    f = a.xhr(),
				    g = ++Bb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
					f[e] = a.xhrFields[e];
				}a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
					f.setRequestHeader(e, c[e]);
				}_b2 = function b(a) {
					return function () {
						_b2 && (delete Cb[g], _b2 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
					};
				}, f.onload = _b2(), f.onerror = _b2("error"), _b2 = Cb[g] = _b2("abort");try {
					f.send(a.hasContent && a.data || null);
				} catch (h) {
					if (_b2) throw h;
				}
			}, abort: function abort() {
				_b2 && _b2();
			} } : void 0;
	}), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
				return n.globalEval(a), a;
			} } }), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, _c;return { send: function send(d, e) {
					b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", _c = function c(a) {
						b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
					}), l.head.appendChild(b[0]);
				}, abort: function abort() {
					_c && _c();
				} };
		}
	});var Fb = [],
	    Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
		} }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		    f,
		    g,
		    h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0];
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments;
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
		}), "script") : void 0;
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
		    e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
	};var Hb = n.fn.load;n.fn.load = function (a, b, c) {
		if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
		    e,
		    f,
		    g = this,
		    h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a]);
		}), this;
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a);
		};
	}), n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem;
		}).length;
	};var Ib = a.document.documentElement;function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	}n.offset = { setOffset: function setOffset(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.css(a, "position"),
			    l = n(a),
			    m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
		} }, n.fn.extend({ offset: function offset(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				n.offset.setOffset(this, a, b);
			});var b,
			    c,
			    d = this[0],
			    e = { top: 0, left: 0 },
			    f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
		}, position: function position() {
			if (this[0]) {
				var a,
				    b,
				    c = this[0],
				    d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
					a = a.offsetParent;
				}return a || Ib;
			});
		} }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
		var d = "pageYOffset" === c;n.fn[b] = function (e) {
			return J(this, function (b, e, f) {
				var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
			}, b, e, arguments.length, null);
		};
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
		});
	}), n.each({ Height: "height", Width: "width" }, function (a, b) {
		n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
				    g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
					var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
				}, b, f ? d : void 0, f, null);
			};
		});
	}), n.fn.size = function () {
		return this.length;
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n;
	});var Kb = a.jQuery,
	    Lb = a.$;return n.noConflict = function (b) {
		return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
	}, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = n), n;
});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery), +function (a) {
	"use strict";
	function b() {
		var a = document.createElement("bootstrap"),
		    b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
			if (void 0 !== a.style[c]) return { end: b[c] };
		}return !1;
	}a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
		    d = this;a(this).one("bsTransitionEnd", function () {
			c = !0;
		});var e = function e() {
			c || a(d).trigger(a.support.transition.end);
		};return setTimeout(e, b), this;
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
			} });
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
		});
	}var c = '[data-dismiss="alert"]',
	    d = function d(b) {
		a(b).on("click", c, this.close);
	};d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove();
		}var e = a(this),
		    f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
	};var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this;
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.button"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
		});
	}var c = function c(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
	};c.VERSION = "3.3.6", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
		var c = "disabled",
		    d = this.$element,
		    e = d.is("input") ? "val" : "html",
		    f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
		}, this), 0);
	}, c.prototype.toggle = function () {
		var a = !0,
		    b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
			var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
	};var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this;
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.carousel"),
			    f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
			    g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
		});
	}var c = function c(b, _c2) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c2, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {case 37:
					this.prev();break;case 39:
					this.next();break;default:
					return;}a.preventDefault();
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
		    d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
		    f = (c + e) % this.$items.length;return this.$items.eq(f);
	}, c.prototype.to = function (a) {
		var b = this,
		    c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a);
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
	}, c.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next");
	}, c.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev");
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
		    f = d || this.getItemForDirection(b, e),
		    g = this.interval,
		    h = "next" == b ? "left" : "right",
		    i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
		    k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
			}var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m);
				}, 0);
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
		}
	};var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this;
	};var e = function e(c) {
		var d,
		    e = a(this),
		    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
			    h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
		}
	};a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);b.call(c, c.data());
		});
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		var c,
		    d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
	}function c(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.collapse"),
			    f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
		});
	}var d = function d(b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
	};d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");return a ? "width" : "height";
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b,
			    e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
					};if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
				};return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]();
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
		}, this)).end();
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
	};var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this;
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
		    g = f.data("bs.collapse"),
		    h = g ? "toggle" : e.data();c.call(f, h);
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
	}function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
			    e = b(d),
			    f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
		}));
	}function d(b) {
		return this.each(function () {
			var c = a(this),
			    d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
		});
	}var e = ".dropdown-backdrop",
	    f = '[data-toggle="dropdown"]',
	    g = function g(b) {
		a(b).on("click.bs.dropdown", this.toggle);
	};g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
		var e = a(this);if (!e.is(".disabled, :disabled")) {
			var f = b(e),
			    g = f.hasClass("open");if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
			}return !1;
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
				    g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
				    i = e.find(".dropdown-menu" + h);if (i.length) {
					var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
				}
			}
		}
	};var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this;
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation();
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
	"use strict";
	function b(b, d) {
		return this.each(function () {
			var e = a(this),
			    f = e.data("bs.modal"),
			    g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
		});
	}var c = function c(b, _c3) {
		this.options = _c3, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal");
		}, this));
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a);
	}, c.prototype.show = function (b) {
		var d = this,
		    e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
			});
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f);
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
		}));
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
		}, this));
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide();
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
	}, c.prototype.hideModal = function () {
		var a = this;this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
		});
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	}, c.prototype.backdrop = function (b) {
		var d = this,
		    e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
				return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
			}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");var g = function g() {
				d.removeBackdrop(), b && b();
			};a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
		} else b && b();
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog();
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({ paddingLeft: "", paddingRight: "" });
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;if (!a) {
			var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
		}this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad);
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
	};var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this;
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
		    e = d.attr("href"),
		    f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
		    g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus");
			});
		}), b.call(f, g, this);
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tooltip"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
				    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
			}
		}this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
		    c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d);
		}), b;
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show();
		}, c.options.delay.show)) : c.show());
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState) {
			if (this.inState[a]) return !0;
		}return !1;
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide();
		}, c.options.delay.hide)) : c.hide());
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
			    f = this.tip(),
			    g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
			    i = /\s?auto?\s?/i,
			    j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
			    l = f[0].offsetWidth,
			    m = f[0].offsetHeight;if (j) {
				var n = h,
				    o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
			}var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
				var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
			};a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
		    e = d[0].offsetWidth,
		    f = d[0].offsetHeight,
		    g = parseInt(d.css("margin-top"), 10),
		    h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
				d.css({ top: Math.round(a.top), left: Math.round(a.left) });
			} }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
		    j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
		    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
		    n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
		}var e = this,
		    f = a(this.$tip),
		    g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
	}, c.prototype.fixTitle = function () {
		var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
	}, c.prototype.hasContent = function () {
		return this.getTitle();
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;var c = b[0],
		    d = "BODY" == c.tagName,
		    e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
		    g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
		    h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
		    g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
			    i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
		} else {
			var j = b.left - f,
			    k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
		}return e;
	}, c.prototype.getTitle = function () {
		var a,
		    b = this.$element,
		    c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
	}, c.prototype.getUID = function (a) {
		do {
			a += ~~(1e6 * Math.random());
		} while (document.getElementById(a));return a;
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	}, c.prototype.enable = function () {
		this.enabled = !0;
	}, c.prototype.disable = function () {
		this.enabled = !1;
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	}, c.prototype.toggle = function (b) {
		var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
	}, c.prototype.destroy = function () {
		var a = this;clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
		});
	};var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this;
	};
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.popover"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.init("popover", a, b);
	};if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle(),
		    c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent();
	}, c.prototype.getContent = function () {
		var a = this.$element,
		    b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow");
	};var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this;
	};
}(jQuery), +function (a) {
	"use strict";
	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
	}function c(c) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.scrollspy"),
			    f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
		});
	}b.VERSION = "3.3.6", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	}, b.prototype.refresh = function () {
		var b = this,
		    c = "offset",
		    d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
			    e = b.data("target") || b.attr("href"),
			    f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
		}).sort(function (a, b) {
			return a[0] - b[0];
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1]);
		});
	}, b.prototype.process = function () {
		var a,
		    b = this.$scrollElement.scrollTop() + this.options.offset,
		    c = this.getScrollHeight(),
		    d = this.options.offset + c - this.$scrollElement.height(),
		    e = this.offsets,
		    f = this.targets,
		    g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
			g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
		}
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
		    d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	};var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this;
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);c.call(b, b.data());
		});
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
		});
	}var c = function c(b) {
		this.element = a(b);
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
		    c = b.closest("ul:not(.dropdown-menu)"),
		    d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
			    f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
			    g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
				});
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
		}var g = d.find("> .active"),
		    h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
	};var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this;
	};var e = function e(c) {
		c.preventDefault(), b.call(a(this), "show");
	};a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.affix"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
		});
	}var c = function c(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
	};c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
		    f = this.$element.offset(),
		    g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
		    i = h ? e : f.top,
		    j = h ? g : b;return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
		    b = this.$element.offset();return this.pinnedOffset = b.top - a;
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1);
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
			    d = this.options.offset,
			    e = d.top,
			    f = d.bottom,
			    g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
				    j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
			}"bottom" == h && this.$element.offset({ top: g - b - f });
		}
	};var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this;
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
			    d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
		});
	});
}(jQuery);
/*! Select2 4.0.2 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (a) {
	var b = function () {
		if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;var b;return function () {
			if (!b || !b.requirejs) {
				b ? c = b : b = {};var a, c, d;!function (b) {
					function e(a, b) {
						return u.call(a, b);
					}function f(a, b) {
						var c,
						    d,
						    e,
						    f,
						    g,
						    h,
						    i,
						    j,
						    k,
						    l,
						    m,
						    n = b && b.split("/"),
						    o = s.map,
						    p = o && o["*"] || {};if (a && "." === a.charAt(0)) if (b) {
							for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) {
								if (m = a[k], "." === m) a.splice(k, 1), k -= 1;else if (".." === m) {
									if (1 === k && (".." === a[2] || ".." === a[0])) break;k > 0 && (a.splice(k - 1, 2), k -= 2);
								}
							}a = a.join("/");
						} else 0 === a.indexOf("./") && (a = a.substring(2));if ((n || p) && o) {
							for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
								if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) {
									if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
										f = e, h = k;break;
									}
								}if (f) break;!i && p && p[d] && (i = p[d], j = k);
							}!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
						}return a;
					}function g(a, c) {
						return function () {
							var d = v.call(arguments, 0);return "string" != typeof d[0] && 1 === d.length && d.push(null), _n.apply(b, d.concat([a, c]));
						};
					}function h(a) {
						return function (b) {
							return f(b, a);
						};
					}function i(a) {
						return function (b) {
							q[a] = b;
						};
					}function j(a) {
						if (e(r, a)) {
							var c = r[a];delete r[a], t[a] = !0, m.apply(b, c);
						}if (!e(q, a) && !e(t, a)) throw new Error("No " + a);return q[a];
					}function k(a) {
						var b,
						    c = a ? a.indexOf("!") : -1;return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
					}function l(a) {
						return function () {
							return s && s.config && s.config[a] || {};
						};
					}var m,
					    _n,
					    o,
					    p,
					    q = {},
					    r = {},
					    s = {},
					    t = {},
					    u = Object.prototype.hasOwnProperty,
					    v = [].slice,
					    w = /\.js$/;o = function o(a, b) {
						var c,
						    d = k(a),
						    e = d[0];return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c };
					}, p = { require: function require(a) {
							return g(a);
						}, exports: function exports(a) {
							var b = q[a];return "undefined" != typeof b ? b : q[a] = {};
						}, module: function module(a) {
							return { id: a, uri: "", exports: q[a], config: l(a) };
						} }, m = function m(a, c, d, f) {
						var h,
						    k,
						    l,
						    m,
						    n,
						    s,
						    u = [],
						    v = typeof d === "undefined" ? "undefined" : _typeof(d);if (f = f || a, "undefined" === v || "function" === v) {
							for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) {
								if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);else if ("exports" === k) u[n] = p.exports(a), s = !0;else if ("module" === k) h = u[n] = p.module(a);else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);else {
									if (!m.p) throw new Error(a + " missing " + k);m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
								}
							}l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
						} else a && (q[a] = d);
					}, a = c = _n = function n(a, c, d, e, f) {
						if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);if (!a.splice) {
							if (s = a, s.deps && _n(s.deps, s.callback), !c) return;c.splice ? (a = c, c = d, d = null) : a = b;
						}return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
							m(b, a, c, d);
						}, 4), _n;
					}, _n.config = function (a) {
						return _n(a);
					}, a._defined = q, d = function d(a, b, c) {
						if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]);
					}, d.amd = { jQuery: !0 };
				}(), b.requirejs = a, b.require = c, b.define = d;
			}
		}(), b.define("almond", function () {}), b.define("jquery", [], function () {
			var b = a || $;return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
		}), b.define("select2/utils", ["jquery"], function (a) {
			function b(a) {
				var b = a.prototype,
				    c = [];for (var d in b) {
					var e = b[d];"function" == typeof e && "constructor" !== d && c.push(d);
				}return c;
			}var c = {};c.Extend = function (a, b) {
				function c() {
					this.constructor = a;
				}var d = {}.hasOwnProperty;for (var e in b) {
					d.call(b, e) && (a[e] = b[e]);
				}return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
			}, c.Decorate = function (a, c) {
				function d() {
					var b = Array.prototype.unshift,
					    d = c.prototype.constructor.length,
					    e = a.prototype.constructor;d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
				}function e() {
					this.constructor = d;
				}var f = b(c),
				    g = b(a);c.displayName = a.displayName, d.prototype = new e();for (var h = 0; h < g.length; h++) {
					var i = g[h];d.prototype[i] = a.prototype[i];
				}for (var j = function j(a) {
					var b = function b() {};(a in d.prototype) && (b = d.prototype[a]);var e = c.prototype[a];return function () {
						var a = Array.prototype.unshift;return a.call(arguments, b), e.apply(this, arguments);
					};
				}, k = 0; k < f.length; k++) {
					var l = f[k];d.prototype[l] = j(l);
				}return d;
			};var d = function d() {
				this.listeners = {};
			};return d.prototype.on = function (a, b) {
				this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
			}, d.prototype.trigger = function (a) {
				var b = Array.prototype.slice;this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
			}, d.prototype.invoke = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++) {
					a[c].apply(this, b);
				}
			}, c.Observable = d, c.generateChars = function (a) {
				for (var b = "", c = 0; a > c; c++) {
					var d = Math.floor(36 * Math.random());b += d.toString(36);
				}return b;
			}, c.bind = function (a, b) {
				return function () {
					a.apply(b, arguments);
				};
			}, c._convertData = function (a) {
				for (var b in a) {
					var c = b.split("-"),
					    d = a;if (1 !== c.length) {
						for (var e = 0; e < c.length; e++) {
							var f = c[e];f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
						}delete a[b];
					}
				}return a;
			}, c.hasScroll = function (b, c) {
				var d = a(c),
				    e = c.style.overflowX,
				    f = c.style.overflowY;return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
			}, c.escapeMarkup = function (a) {
				var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
					return b[a];
				});
			}, c.appendMany = function (b, c) {
				if ("1.7" === a.fn.jquery.substr(0, 3)) {
					var d = a();a.map(c, function (a) {
						d = d.add(a);
					}), c = d;
				}b.append(c);
			}, c;
		}), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
			function c(a, b, d) {
				this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
			}return b.Extend(c, b.Observable), c.prototype.render = function () {
				var b = a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
			}, c.prototype.clear = function () {
				this.$results.empty();
			}, c.prototype.displayMessage = function (b) {
				var c = this.options.get("escapeMarkup");this.clear(), this.hideLoading();var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
				    e = this.options.get("translations").get(b.message);d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
			}, c.prototype.hideMessages = function () {
				this.$results.find(".select2-results__message").remove();
			}, c.prototype.append = function (a) {
				this.hideLoading();var b = [];if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));a.results = this.sort(a.results);for (var c = 0; c < a.results.length; c++) {
					var d = a.results[c],
					    e = this.option(d);b.push(e);
				}this.$results.append(b);
			}, c.prototype.position = function (a, b) {
				var c = b.find(".select2-results");c.append(a);
			}, c.prototype.sort = function (a) {
				var b = this.options.get("sorter");return b(a);
			}, c.prototype.setClasses = function () {
				var b = this;this.data.current(function (c) {
					var d = a.map(c, function (a) {
						return a.id.toString();
					}),
					    e = b.$results.find(".select2-results__option[aria-selected]");e.each(function () {
						var b = a(this),
						    c = a.data(this, "data"),
						    e = "" + c.id;null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
					});var f = e.filter("[aria-selected=true]");f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter");
				});
			}, c.prototype.showLoading = function (a) {
				this.hideLoading();var b = this.options.get("translations").get("searching"),
				    c = { disabled: !0, loading: !0, text: b(a) },
				    d = this.option(c);d.className += " loading-results", this.$results.prepend(d);
			}, c.prototype.hideLoading = function () {
				this.$results.find(".loading-results").remove();
			}, c.prototype.option = function (b) {
				var c = document.createElement("li");c.className = "select2-results__option";var d = { role: "treeitem", "aria-selected": "false" };b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);for (var e in d) {
					var f = d[e];c.setAttribute(e, f);
				}if (b.children) {
					var g = a(c),
					    h = document.createElement("strong");h.className = "select2-results__group";a(h);this.template(b, h);for (var i = [], j = 0; j < b.children.length; j++) {
						var k = b.children[j],
						    l = this.option(k);i.push(l);
					}var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });m.append(i), g.append(h), g.append(m);
				} else this.template(b, c);return a.data(c, "data", b), c;
			}, c.prototype.bind = function (b, c) {
				var d = this,
				    e = b.id + "-results";this.$results.attr("id", e), b.on("results:all", function (a) {
					d.clear(), d.append(a.data), b.isOpen() && d.setClasses();
				}), b.on("results:append", function (a) {
					d.append(a.data), b.isOpen() && d.setClasses();
				}), b.on("query", function (a) {
					d.hideMessages(), d.showLoading(a);
				}), b.on("select", function () {
					b.isOpen() && d.setClasses();
				}), b.on("unselect", function () {
					b.isOpen() && d.setClasses();
				}), b.on("open", function () {
					d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
				}), b.on("close", function () {
					d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
				}), b.on("results:toggle", function () {
					var a = d.getHighlightedResults();0 !== a.length && a.trigger("mouseup");
				}), b.on("results:select", function () {
					var a = d.getHighlightedResults();if (0 !== a.length) {
						var b = a.data("data");"true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b });
					}
				}), b.on("results:previous", function () {
					var a = d.getHighlightedResults(),
					    b = d.$results.find("[aria-selected]"),
					    c = b.index(a);if (0 !== c) {
						var e = c - 1;0 === a.length && (e = 0);var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top,
						    h = f.offset().top,
						    i = d.$results.scrollTop() + (h - g);0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i);
					}
				}), b.on("results:next", function () {
					var a = d.getHighlightedResults(),
					    b = d.$results.find("[aria-selected]"),
					    c = b.index(a),
					    e = c + 1;if (!(e >= b.length)) {
						var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top + d.$results.outerHeight(!1),
						    h = f.offset().top + f.outerHeight(!1),
						    i = d.$results.scrollTop() + h - g;0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
					}
				}), b.on("results:focus", function (a) {
					a.element.addClass("select2-results__option--highlighted");
				}), b.on("results:message", function (a) {
					d.displayMessage(a);
				}), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
					var b = d.$results.scrollTop(),
					    c = d.$results.get(0).scrollHeight - b + a.deltaY,
					    e = a.deltaY > 0 && b - a.deltaY <= 0,
					    f = a.deltaY < 0 && c <= d.$results.height();e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
				}), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
					var c = a(this),
					    e = c.data("data");return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e });
				}), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
					var c = a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) });
				});
			}, c.prototype.getHighlightedResults = function () {
				var a = this.$results.find(".select2-results__option--highlighted");return a;
			}, c.prototype.destroy = function () {
				this.$results.remove();
			}, c.prototype.ensureHighlightVisible = function () {
				var a = this.getHighlightedResults();if (0 !== a.length) {
					var b = this.$results.find("[aria-selected]"),
					    c = b.index(a),
					    d = this.$results.offset().top,
					    e = a.offset().top,
					    f = this.$results.scrollTop() + (e - d),
					    g = e - d;f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
				}
			}, c.prototype.template = function (b, c) {
				var d = this.options.get("templateResult"),
				    e = this.options.get("escapeMarkup"),
				    f = d(b, c);null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
			}, c;
		}), b.define("select2/keys", [], function () {
			var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };return a;
		}), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
			function d(a, b) {
				this.$element = a, this.options = b, d.__super__.constructor.call(this);
			}return b.Extend(d, b.Observable), d.prototype.render = function () {
				var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
			}, d.prototype.bind = function (a, b) {
				var d = this,
				    e = (a.id + "-container", a.id + "-results");this.container = a, this.$selection.on("focus", function (a) {
					d.trigger("focus", a);
				}), this.$selection.on("blur", function (a) {
					d._handleBlur(a);
				}), this.$selection.on("keydown", function (a) {
					d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
				}), a.on("results:focus", function (a) {
					d.$selection.attr("aria-activedescendant", a.data._resultId);
				}), a.on("selection:update", function (a) {
					d.update(a.data);
				}), a.on("open", function () {
					d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
				}), a.on("close", function () {
					d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
				}), a.on("enable", function () {
					d.$selection.attr("tabindex", d._tabindex);
				}), a.on("disable", function () {
					d.$selection.attr("tabindex", "-1");
				});
			}, d.prototype._handleBlur = function (b) {
				var c = this;window.setTimeout(function () {
					document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
				}, 1);
			}, d.prototype._attachCloseHandler = function (b) {
				a(document.body).on("mousedown.select2." + b.id, function (b) {
					var c = a(b.target),
					    d = c.closest(".select2"),
					    e = a(".select2.select2-container--open");e.each(function () {
						var b = a(this);if (this != d[0]) {
							var c = b.data("element");c.select2("close");
						}
					});
				});
			}, d.prototype._detachCloseHandler = function (b) {
				a(document.body).off("mousedown.select2." + b.id);
			}, d.prototype.position = function (a, b) {
				var c = b.find(".selection");c.append(a);
			}, d.prototype.destroy = function () {
				this._detachCloseHandler(this.container);
			}, d.prototype.update = function (a) {
				throw new Error("The `update` method must be defined in child classes.");
			}, d;
		}), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
			function e() {
				e.__super__.constructor.apply(this, arguments);
			}return c.Extend(e, b), e.prototype.render = function () {
				var a = e.__super__.render.call(this);return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
			}, e.prototype.bind = function (a, b) {
				var c = this;e.__super__.bind.apply(this, arguments);var d = a.id + "-container";this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
					1 === a.which && c.trigger("toggle", { originalEvent: a });
				}), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("selection:update", function (a) {
					c.update(a.data);
				});
			}, e.prototype.clear = function () {
				this.$selection.find(".select2-selection__rendered").empty();
			}, e.prototype.display = function (a, b) {
				var c = this.options.get("templateSelection"),
				    d = this.options.get("escapeMarkup");return d(c(a, b));
			}, e.prototype.selectionContainer = function () {
				return a("<span></span>");
			}, e.prototype.update = function (a) {
				if (0 === a.length) return void this.clear();var b = a[0],
				    c = this.$selection.find(".select2-selection__rendered"),
				    d = this.display(b, c);c.empty().append(d), c.prop("title", b.title || b.text);
			}, e;
		}), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
			function d(a, b) {
				d.__super__.constructor.apply(this, arguments);
			}return c.Extend(d, b), d.prototype.render = function () {
				var a = d.__super__.render.call(this);return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
			}, d.prototype.bind = function (b, c) {
				var e = this;d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
					e.trigger("toggle", { originalEvent: a });
				}), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
					if (!e.options.get("disabled")) {
						var c = a(this),
						    d = c.parent(),
						    f = d.data("data");e.trigger("unselect", { originalEvent: b, data: f });
					}
				});
			}, d.prototype.clear = function () {
				this.$selection.find(".select2-selection__rendered").empty();
			}, d.prototype.display = function (a, b) {
				var c = this.options.get("templateSelection"),
				    d = this.options.get("escapeMarkup");return d(c(a, b));
			}, d.prototype.selectionContainer = function () {
				var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b;
			}, d.prototype.update = function (a) {
				if (this.clear(), 0 !== a.length) {
					for (var b = [], d = 0; d < a.length; d++) {
						var e = a[d],
						    f = this.selectionContainer(),
						    g = this.display(e, f);f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
					}var h = this.$selection.find(".select2-selection__rendered");c.appendMany(h, b);
				}
			}, d;
		}), b.define("select2/selection/placeholder", ["../utils"], function (a) {
			function b(a, b, c) {
				this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
			}return b.prototype.normalizePlaceholder = function (a, b) {
				return "string" == typeof b && (b = { id: "", text: b }), b;
			}, b.prototype.createPlaceholder = function (a, b) {
				var c = this.selectionContainer();return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
			}, b.prototype.update = function (a, b) {
				var c = 1 == b.length && b[0].id != this.placeholder.id,
				    d = b.length > 1;if (d || c) return a.call(this, b);this.clear();var e = this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e);
			}, b;
		}), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
			function c() {}return c.prototype.bind = function (a, b, c) {
				var d = this;a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
					d._handleClear(a);
				}), b.on("keypress", function (a) {
					d._handleKeyboardClear(a, b);
				});
			}, c.prototype._handleClear = function (a, b) {
				if (!this.options.get("disabled")) {
					var c = this.$selection.find(".select2-selection__clear");if (0 !== c.length) {
						b.stopPropagation();for (var d = c.data("data"), e = 0; e < d.length; e++) {
							var f = { data: d[e] };if (this.trigger("unselect", f), f.prevented) return;
						}this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
					}
				}
			}, c.prototype._handleKeyboardClear = function (a, c, d) {
				d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
			}, c.prototype.update = function (b, c) {
				if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
					var d = a('<span class="select2-selection__clear">&times;</span>');d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
				}
			}, c;
		}), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
			function d(a, b, c) {
				a.call(this, b, c);
			}return d.prototype.render = function (b) {
				var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer = c, this.$search = c.find("input");var d = b.call(this);return this._transferTabIndex(), d;
			}, d.prototype.bind = function (a, b, d) {
				var e = this;a.call(this, b, d), b.on("open", function () {
					e.$search.trigger("focus");
				}), b.on("close", function () {
					e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
				}), b.on("enable", function () {
					e.$search.prop("disabled", !1), e._transferTabIndex();
				}), b.on("disable", function () {
					e.$search.prop("disabled", !0);
				}), b.on("focus", function (a) {
					e.$search.trigger("focus");
				}), b.on("results:focus", function (a) {
					e.$search.attr("aria-activedescendant", a.id);
				}), this.$selection.on("focusin", ".select2-search--inline", function (a) {
					e.trigger("focus", a);
				}), this.$selection.on("focusout", ".select2-search--inline", function (a) {
					e._handleBlur(a);
				}), this.$selection.on("keydown", ".select2-search--inline", function (a) {
					a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();var b = a.which;if (b === c.BACKSPACE && "" === e.$search.val()) {
						var d = e.$searchContainer.prev(".select2-selection__choice");if (d.length > 0) {
							var f = d.data("data");e.searchRemoveChoice(f), a.preventDefault();
						}
					}
				});var f = document.documentMode,
				    g = f && 11 >= f;this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
					return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search");
				}), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
					if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");var b = a.which;b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
				});
			}, d.prototype._transferTabIndex = function (a) {
				this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
			}, d.prototype.createPlaceholder = function (a, b) {
				this.$search.attr("placeholder", b.text);
			}, d.prototype.update = function (a, b) {
				var c = this.$search[0] == document.activeElement;this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
			}, d.prototype.handleSearch = function () {
				if (this.resizeSearch(), !this._keyUpPrevented) {
					var a = this.$search.val();this.trigger("query", { term: a });
				}this._keyUpPrevented = !1;
			}, d.prototype.searchRemoveChoice = function (a, b) {
				this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch();
			}, d.prototype.resizeSearch = function () {
				this.$search.css("width", "25px");var a = "";if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
					var b = this.$search.val().length + 1;a = .75 * b + "em";
				}this.$search.css("width", a);
			}, d;
		}), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
			function b() {}return b.prototype.bind = function (b, c, d) {
				var e = this,
				    f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
				    g = ["opening", "closing", "selecting", "unselecting"];b.call(this, c, d), c.on("*", function (b, c) {
					if (-1 !== a.inArray(b, f)) {
						c = c || {};var d = a.Event("select2:" + b, { params: c });e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
					}
				});
			}, b;
		}), b.define("select2/translation", ["jquery", "require"], function (a, b) {
			function c(a) {
				this.dict = a || {};
			}return c.prototype.all = function () {
				return this.dict;
			}, c.prototype.get = function (a) {
				return this.dict[a];
			}, c.prototype.extend = function (b) {
				this.dict = a.extend({}, b.all(), this.dict);
			}, c._cache = {}, c.loadPath = function (a) {
				if (!(a in c._cache)) {
					var d = b(a);c._cache[a] = d;
				}return new c(c._cache[a]);
			}, c;
		}), b.define("select2/diacritics", [], function () {
			var a = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };return a;
		}), b.define("select2/data/base", ["../utils"], function (a) {
			function b(a, c) {
				b.__super__.constructor.call(this);
			}return a.Extend(b, a.Observable), b.prototype.current = function (a) {
				throw new Error("The `current` method must be defined in child classes.");
			}, b.prototype.query = function (a, b) {
				throw new Error("The `query` method must be defined in child classes.");
			}, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
				var d = b.id + "-result-";return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
			}, b;
		}), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
			function d(a, b) {
				this.$element = a, this.options = b, d.__super__.constructor.call(this);
			}return b.Extend(d, a), d.prototype.current = function (a) {
				var b = [],
				    d = this;this.$element.find(":selected").each(function () {
					var a = c(this),
					    e = d.item(a);b.push(e);
				}), a(b);
			}, d.prototype.select = function (a) {
				var b = this;if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");if (this.$element.prop("multiple")) this.current(function (d) {
					var e = [];a = [a], a.push.apply(a, d);for (var f = 0; f < a.length; f++) {
						var g = a[f].id;-1 === c.inArray(g, e) && e.push(g);
					}b.$element.val(e), b.$element.trigger("change");
				});else {
					var d = a.id;this.$element.val(d), this.$element.trigger("change");
				}
			}, d.prototype.unselect = function (a) {
				var b = this;if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
					for (var e = [], f = 0; f < d.length; f++) {
						var g = d[f].id;g !== a.id && -1 === c.inArray(g, e) && e.push(g);
					}b.$element.val(e), b.$element.trigger("change");
				});
			}, d.prototype.bind = function (a, b) {
				var c = this;this.container = a, a.on("select", function (a) {
					c.select(a.data);
				}), a.on("unselect", function (a) {
					c.unselect(a.data);
				});
			}, d.prototype.destroy = function () {
				this.$element.find("*").each(function () {
					c.removeData(this, "data");
				});
			}, d.prototype.query = function (a, b) {
				var d = [],
				    e = this,
				    f = this.$element.children();f.each(function () {
					var b = c(this);if (b.is("option") || b.is("optgroup")) {
						var f = e.item(b),
						    g = e.matches(a, f);null !== g && d.push(g);
					}
				}), b({ results: d });
			}, d.prototype.addOptions = function (a) {
				b.appendMany(this.$element, a);
			}, d.prototype.option = function (a) {
				var b;a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);var d = c(b),
				    e = this._normalizeItem(a);return e.element = b, c.data(b, "data", e), d;
			}, d.prototype.item = function (a) {
				var b = {};if (b = c.data(a[0], "data"), null != b) return b;if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };else if (a.is("optgroup")) {
					b = { text: a.prop("label"), children: [], title: a.prop("title") };for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
						var g = c(d[f]),
						    h = this.item(g);e.push(h);
					}b.children = e;
				}return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
			}, d.prototype._normalizeItem = function (a) {
				c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a);var b = { selected: !1, disabled: !1 };return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
			}, d.prototype.matches = function (a, b) {
				var c = this.options.get("matcher");return c(a, b);
			}, d;
		}), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
			function d(a, b) {
				var c = b.get("data") || [];d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
			}return b.Extend(d, a), d.prototype.select = function (a) {
				var b = this.$element.find("option").filter(function (b, c) {
					return c.value == a.id.toString();
				});0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
			}, d.prototype.convertToOptions = function (a) {
				function d(a) {
					return function () {
						return c(this).val() == a.id;
					};
				}for (var e = this, f = this.$element.find("option"), g = f.map(function () {
					return e.item(c(this)).id;
				}).get(), h = [], i = 0; i < a.length; i++) {
					var j = this._normalizeItem(a[i]);if (c.inArray(j.id, g) >= 0) {
						var k = f.filter(d(j)),
						    l = this.item(k),
						    m = c.extend(!0, {}, j, l),
						    n = this.option(m);k.replaceWith(n);
					} else {
						var o = this.option(j);if (j.children) {
							var p = this.convertToOptions(j.children);b.appendMany(o, p);
						}h.push(o);
					}
				}return h;
			}, d;
		}), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
			function d(a, b) {
				this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
			}return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
				var b = { data: function data(a) {
						return c.extend({}, a, { q: a.term });
					}, transport: function transport(a, b, d) {
						var e = c.ajax(a);return e.then(b), e.fail(d), e;
					} };return c.extend({}, b, a, !0);
			}, d.prototype.processResults = function (a) {
				return a;
			}, d.prototype.query = function (a, b) {
				function d() {
					var d = f.transport(f, function (d) {
						var f = e.processResults(d, a);e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
					}, function () {
						e.trigger("results:message", { message: "errorLoading" });
					});e._request = d;
				}var e = this;null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);var f = c.extend({ type: "GET" }, this.ajaxOptions);"function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
			}, d;
		}), b.define("select2/data/tags", ["jquery"], function (a) {
			function b(b, c, d) {
				var e = d.get("tags"),
				    f = d.get("createTag");void 0 !== f && (this.createTag = f);var g = d.get("insertTag");if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
					var i = e[h],
					    j = this._normalizeItem(i),
					    k = this.option(j);this.$element.append(k);
				}
			}return b.prototype.query = function (a, b, c) {
				function d(a, f) {
					for (var g = a.results, h = 0; h < g.length; h++) {
						var i = g[h],
						    j = null != i.children && !d({ results: i.children }, !0),
						    k = i.text === b.term;if (k || j) return f ? !1 : (a.data = g, void c(a));
					}if (f) return !0;var l = e.createTag(b);if (null != l) {
						var m = e.option(l);m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l);
					}a.results = g, c(a);
				}var e = this;return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
			}, b.prototype.createTag = function (b, c) {
				var d = a.trim(c.term);return "" === d ? null : { id: d, text: d };
			}, b.prototype.insertTag = function (a, b, c) {
				b.unshift(c);
			}, b.prototype._removeOldTags = function (b) {
				var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));c.each(function () {
					this.selected || a(this).remove();
				});
			}, b;
		}), b.define("select2/data/tokenizer", ["jquery"], function (a) {
			function b(a, b, c) {
				var d = c.get("tokenizer");void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
			}return b.prototype.bind = function (a, b, c) {
				a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
			}, b.prototype.query = function (a, b, c) {
				function d(a) {
					e.trigger("select", { data: a });
				}var e = this;b.term = b.term || "";var f = this.tokenizer(b, this.options, d);f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c);
			}, b.prototype.tokenizer = function (b, c, d, e) {
				for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
					return { id: a.term, text: a.term };
				}; h < g.length;) {
					var j = g[h];if (-1 !== a.inArray(j, f)) {
						var k = g.substr(0, h),
						    l = a.extend({}, c, { term: k }),
						    m = i(l);null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
					} else h++;
				}return { term: g };
			}, b;
		}), b.define("select2/data/minimumInputLength", [], function () {
			function a(a, b, c) {
				this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
			}return a.prototype.query = function (a, b, c) {
				return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
			}, a;
		}), b.define("select2/data/maximumInputLength", [], function () {
			function a(a, b, c) {
				this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
			}return a.prototype.query = function (a, b, c) {
				return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
			}, a;
		}), b.define("select2/data/maximumSelectionLength", [], function () {
			function a(a, b, c) {
				this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
			}return a.prototype.query = function (a, b, c) {
				var d = this;this.current(function (e) {
					var f = null != e ? e.length : 0;return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c);
				});
			}, a;
		}), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
			function c(a, b) {
				this.$element = a, this.options = b, c.__super__.constructor.call(this);
			}return b.Extend(c, b.Observable), c.prototype.render = function () {
				var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
			}, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
				this.$dropdown.remove();
			}, c;
		}), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
			function c() {}return c.prototype.render = function (b) {
				var c = b.call(this),
				    d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
			}, c.prototype.bind = function (b, c, d) {
				var e = this;b.call(this, c, d), this.$search.on("keydown", function (a) {
					e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
				}), this.$search.on("input", function (b) {
					a(this).off("keyup");
				}), this.$search.on("keyup input", function (a) {
					e.handleSearch(a);
				}), c.on("open", function () {
					e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
						e.$search.focus();
					}, 0);
				}), c.on("close", function () {
					e.$search.attr("tabindex", -1), e.$search.val("");
				}), c.on("results:all", function (a) {
					if (null == a.query.term || "" === a.query.term) {
						var b = e.showSearch(a);b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
					}
				});
			}, c.prototype.handleSearch = function (a) {
				if (!this._keyUpPrevented) {
					var b = this.$search.val();this.trigger("query", { term: b });
				}this._keyUpPrevented = !1;
			}, c.prototype.showSearch = function (a, b) {
				return !0;
			}, c;
		}), b.define("select2/dropdown/hidePlaceholder", [], function () {
			function a(a, b, c, d) {
				this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
			}return a.prototype.append = function (a, b) {
				b.results = this.removePlaceholder(b.results), a.call(this, b);
			}, a.prototype.normalizePlaceholder = function (a, b) {
				return "string" == typeof b && (b = { id: "", text: b }), b;
			}, a.prototype.removePlaceholder = function (a, b) {
				for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
					var e = b[d];this.placeholder.id === e.id && c.splice(d, 1);
				}return c;
			}, a;
		}), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
			function b(a, b, c, d) {
				this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
			}return b.prototype.append = function (a, b) {
				this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
			}, b.prototype.bind = function (b, c, d) {
				var e = this;b.call(this, c, d), c.on("query", function (a) {
					e.lastParams = a, e.loading = !0;
				}), c.on("query:append", function (a) {
					e.lastParams = a, e.loading = !0;
				}), this.$results.on("scroll", function () {
					var b = a.contains(document.documentElement, e.$loadingMore[0]);if (!e.loading && b) {
						var c = e.$results.offset().top + e.$results.outerHeight(!1),
						    d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);c + 50 >= d && e.loadMore();
					}
				});
			}, b.prototype.loadMore = function () {
				this.loading = !0;var b = a.extend({}, { page: 1 }, this.lastParams);b.page++, this.trigger("query:append", b);
			}, b.prototype.showLoadingMore = function (a, b) {
				return b.pagination && b.pagination.more;
			}, b.prototype.createLoadingMore = function () {
				var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
				    c = this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)), b;
			}, b;
		}), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
			function c(b, c, d) {
				this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
			}return c.prototype.bind = function (a, b, c) {
				var d = this,
				    e = !1;a.call(this, b, c), b.on("open", function () {
					d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
						d._positionDropdown(), d._resizeDropdown();
					}), b.on("results:append", function () {
						d._positionDropdown(), d._resizeDropdown();
					}));
				}), b.on("close", function () {
					d._hideDropdown(), d._detachPositioningHandler(b);
				}), this.$dropdownContainer.on("mousedown", function (a) {
					a.stopPropagation();
				});
			}, c.prototype.destroy = function (a) {
				a.call(this), this.$dropdownContainer.remove();
			}, c.prototype.position = function (a, b, c) {
				b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c;
			}, c.prototype.render = function (b) {
				var c = a("<span></span>"),
				    d = b.call(this);return c.append(d), this.$dropdownContainer = c, c;
			}, c.prototype._hideDropdown = function (a) {
				this.$dropdownContainer.detach();
			}, c.prototype._attachPositioningHandler = function (c, d) {
				var e = this,
				    f = "scroll.select2." + d.id,
				    g = "resize.select2." + d.id,
				    h = "orientationchange.select2." + d.id,
				    i = this.$container.parents().filter(b.hasScroll);i.each(function () {
					a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() });
				}), i.on(f, function (b) {
					var c = a(this).data("select2-scroll-position");a(this).scrollTop(c.y);
				}), a(window).on(f + " " + g + " " + h, function (a) {
					e._positionDropdown(), e._resizeDropdown();
				});
			}, c.prototype._detachPositioningHandler = function (c, d) {
				var e = "scroll.select2." + d.id,
				    f = "resize.select2." + d.id,
				    g = "orientationchange.select2." + d.id,
				    h = this.$container.parents().filter(b.hasScroll);h.off(e), a(window).off(e + " " + f + " " + g);
			}, c.prototype._positionDropdown = function () {
				var b = a(window),
				    c = this.$dropdown.hasClass("select2-dropdown--above"),
				    d = this.$dropdown.hasClass("select2-dropdown--below"),
				    e = null,
				    f = this.$container.offset();f.bottom = f.top + this.$container.outerHeight(!1);var g = { height: this.$container.outerHeight(!1) };g.top = f.top, g.bottom = f.top + g.height;var h = { height: this.$dropdown.outerHeight(!1) },
				    i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
				    j = i.top < f.top - h.height,
				    k = i.bottom > f.bottom + h.height,
				    l = { left: f.left, top: g.bottom },
				    m = this.$dropdownParent;"static" === m.css("position") && (m = m.offsetParent());var n = m.offset();l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
			}, c.prototype._resizeDropdown = function () {
				var a = { width: this.$container.outerWidth(!1) + "px" };this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a);
			}, c.prototype._showDropdown = function (a) {
				this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
			}, c;
		}), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
			function a(b) {
				for (var c = 0, d = 0; d < b.length; d++) {
					var e = b[d];e.children ? c += a(e.children) : c++;
				}return c;
			}function b(a, b, c, d) {
				this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
			}return b.prototype.showSearch = function (b, c) {
				return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
			}, b;
		}), b.define("select2/dropdown/selectOnClose", [], function () {
			function a() {}return a.prototype.bind = function (a, b, c) {
				var d = this;a.call(this, b, c), b.on("close", function () {
					d._handleSelectOnClose();
				});
			}, a.prototype._handleSelectOnClose = function () {
				var a = this.getHighlightedResults();if (!(a.length < 1)) {
					var b = a.data("data");null != b.element && b.element.selected || null == b.element && b.selected || this.trigger("select", { data: b });
				}
			}, a;
		}), b.define("select2/dropdown/closeOnSelect", [], function () {
			function a() {}return a.prototype.bind = function (a, b, c) {
				var d = this;a.call(this, b, c), b.on("select", function (a) {
					d._selectTriggered(a);
				}), b.on("unselect", function (a) {
					d._selectTriggered(a);
				});
			}, a.prototype._selectTriggered = function (a, b) {
				var c = b.originalEvent;c && c.ctrlKey || this.trigger("close", {});
			}, a;
		}), b.define("select2/i18n/en", [], function () {
			return { errorLoading: function errorLoading() {
					return "The results could not be loaded.";
				}, inputTooLong: function inputTooLong(a) {
					var b = a.input.length - a.maximum,
					    c = "Please delete " + b + " character";return 1 != b && (c += "s"), c;
				}, inputTooShort: function inputTooShort(a) {
					var b = a.minimum - a.input.length,
					    c = "Please enter " + b + " or more characters";return c;
				}, loadingMore: function loadingMore() {
					return "Loading more results…";
				}, maximumSelected: function maximumSelected(a) {
					var b = "You can only select " + a.maximum + " item";return 1 != a.maximum && (b += "s"), b;
				}, noResults: function noResults() {
					return "No results found";
				}, searching: function searching() {
					return "Searching…";
				} };
		}), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
			function D() {
				this.reset();
			}D.prototype.apply = function (l) {
				if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
					if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
						var C = b(l.amdBase + "compat/query");l.dataAdapter = j.Decorate(l.dataAdapter, C);
					}if (null != l.initSelection) {
						var D = b(l.amdBase + "compat/initSelection");l.dataAdapter = j.Decorate(l.dataAdapter, D);
					}
				}if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
					if (l.multiple) l.dropdownAdapter = u;else {
						var E = j.Decorate(u, v);l.dropdownAdapter = E;
					}if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
						var F = b(l.amdBase + "compat/dropdownCss");l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
					}l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
				}if (null == l.selectionAdapter) {
					if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
						var G = b(l.amdBase + "compat/containerCss");l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
					}l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
				}if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
					var H = l.language.split("-"),
					    I = H[0];l.language = [l.language, I];
				} else l.language = [l.language];if (a.isArray(l.language)) {
					var J = new k();l.language.push("en");for (var K = l.language, L = 0; L < K.length; L++) {
						var M = K[L],
						    N = {};try {
							N = k.loadPath(M);
						} catch (O) {
							try {
								M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
							} catch (P) {
								l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');continue;
							}
						}J.extend(N);
					}l.translations = J;
				} else {
					var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
					    R = new k(l.language);R.extend(Q), l.translations = R;
				}return l;
			}, D.prototype.reset = function () {
				function b(a) {
					function b(a) {
						return l[a] || a;
					}return a.replace(/[^\u0000-\u007E]/g, b);
				}function c(d, e) {
					if ("" === a.trim(d.term)) return e;if (e.children && e.children.length > 0) {
						for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
							var h = e.children[g],
							    i = c(d, h);null == i && f.children.splice(g, 1);
						}return f.children.length > 0 ? f : c(d, f);
					}var j = b(e.text).toUpperCase(),
					    k = b(d.term).toUpperCase();return j.indexOf(k) > -1 ? e : null;
				}this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function sorter(a) {
						return a;
					}, templateResult: function templateResult(a) {
						return a.text;
					}, templateSelection: function templateSelection(a) {
						return a.text;
					}, theme: "default", width: "resolve" };
			}, D.prototype.set = function (b, c) {
				var d = a.camelCase(b),
				    e = {};e[d] = c;var f = j._convertData(e);a.extend(this.defaults, f);
			};var E = new D();return E;
		}), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
			function e(b, e) {
				if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
					var f = a(this.get("amdBase") + "compat/inputData");this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
				}
			}return e.prototype.fromElement = function (a) {
				var c = ["select2"];null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));var e = {};e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();var f = b.extend(!0, {}, e);f = d._convertData(f);for (var g in f) {
					b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
				}return this;
			}, e.prototype.get = function (a) {
				return this.options[a];
			}, e.prototype.set = function (a, b) {
				this.options[a] = b;
			}, e;
		}), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
			var e = function e(a, c) {
				null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);var d = a.attr("tabindex") || 0;a.data("old-tabindex", d), a.attr("tabindex", "-1");var f = this.options.get("dataAdapter");this.dataAdapter = new f(a, this.options);var g = this.render();this._placeContainer(g);var h = this.options.get("selectionAdapter");this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);var i = this.options.get("dropdownAdapter");this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);var j = this.options.get("resultsAdapter");this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);var k = this;this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
					k.trigger("selection:update", { data: a });
				}), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
			};return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
				var b = "";return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
			}, e.prototype._placeContainer = function (a) {
				a.insertAfter(this.$element);var b = this._resolveWidth(this.$element, this.options.get("width"));null != b && a.css("width", b);
			}, e.prototype._resolveWidth = function (a, b) {
				var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if ("resolve" == b) {
					var d = this._resolveWidth(a, "style");return null != d ? d : this._resolveWidth(a, "element");
				}if ("element" == b) {
					var e = a.outerWidth(!1);return 0 >= e ? "auto" : e + "px";
				}if ("style" == b) {
					var f = a.attr("style");if ("string" != typeof f) return null;for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
						var j = g[h].replace(/\s/g, ""),
						    k = j.match(c);if (null !== k && k.length >= 1) return k[1];
					}return null;
				}return b;
			}, e.prototype._bindAdapters = function () {
				this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
			}, e.prototype._registerDomEvents = function () {
				var b = this;this.$element.on("change.select2", function () {
					b.dataAdapter.current(function (a) {
						b.trigger("selection:update", { data: a });
					});
				}), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;null != d ? (this._observer = new d(function (c) {
					a.each(c, b._sync);
				}), this._observer.observe(this.$element[0], { attributes: !0, subtree: !1 })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1);
			}, e.prototype._registerDataEvents = function () {
				var a = this;this.dataAdapter.on("*", function (b, c) {
					a.trigger(b, c);
				});
			}, e.prototype._registerSelectionEvents = function () {
				var b = this,
				    c = ["toggle", "focus"];this.selection.on("toggle", function () {
					b.toggleDropdown();
				}), this.selection.on("focus", function (a) {
					b.focus(a);
				}), this.selection.on("*", function (d, e) {
					-1 === a.inArray(d, c) && b.trigger(d, e);
				});
			}, e.prototype._registerDropdownEvents = function () {
				var a = this;this.dropdown.on("*", function (b, c) {
					a.trigger(b, c);
				});
			}, e.prototype._registerResultsEvents = function () {
				var a = this;this.results.on("*", function (b, c) {
					a.trigger(b, c);
				});
			}, e.prototype._registerEvents = function () {
				var a = this;this.on("open", function () {
					a.$container.addClass("select2-container--open");
				}), this.on("close", function () {
					a.$container.removeClass("select2-container--open");
				}), this.on("enable", function () {
					a.$container.removeClass("select2-container--disabled");
				}), this.on("disable", function () {
					a.$container.addClass("select2-container--disabled");
				}), this.on("blur", function () {
					a.$container.removeClass("select2-container--focus");
				}), this.on("query", function (b) {
					a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
						a.trigger("results:all", { data: c, query: b });
					});
				}), this.on("query:append", function (b) {
					this.dataAdapter.query(b, function (c) {
						a.trigger("results:append", { data: c, query: b });
					});
				}), this.on("keypress", function (b) {
					var c = b.which;a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
				});
			}, e.prototype._syncAttributes = function () {
				this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
			}, e.prototype.trigger = function (a, b) {
				var c = e.__super__.trigger,
				    d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };if (void 0 === b && (b = {}), a in d) {
					var f = d[a],
					    g = { prevented: !1, name: a, args: b };if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
				}c.call(this, a, b);
			}, e.prototype.toggleDropdown = function () {
				this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
			}, e.prototype.open = function () {
				this.isOpen() || this.trigger("query", {});
			}, e.prototype.close = function () {
				this.isOpen() && this.trigger("close", {});
			}, e.prototype.isOpen = function () {
				return this.$container.hasClass("select2-container--open");
			}, e.prototype.hasFocus = function () {
				return this.$container.hasClass("select2-container--focus");
			}, e.prototype.focus = function (a) {
				this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
			}, e.prototype.enable = function (a) {
				this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);var b = !a[0];this.$element.prop("disabled", b);
			}, e.prototype.data = function () {
				this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a = [];return this.dataAdapter.current(function (b) {
					a = b;
				}), a;
			}, e.prototype.val = function (b) {
				if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();var c = b[0];a.isArray(c) && (c = a.map(c, function (a) {
					return a.toString();
				})), this.$element.val(c).trigger("change");
			}, e.prototype.destroy = function () {
				this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
			}, e.prototype.render = function () {
				var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
			}, e;
		}), b.define("jquery-mousewheel", ["jquery"], function (a) {
			return a;
		}), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
			if (null == a.fn.select2) {
				var e = ["open", "close", "destroy"];a.fn.select2 = function (b) {
					if (b = b || {}, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) return this.each(function () {
						var d = a.extend(!0, {}, b);new c(a(this), d);
					}), this;if ("string" == typeof b) {
						var d;return this.each(function () {
							var c = a(this).data("select2");null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");var e = Array.prototype.slice.call(arguments, 1);d = c[b].apply(c, e);
						}), a.inArray(b, e) > -1 ? this : d;
					}throw new Error("Invalid arguments for Select2: " + b);
				};
			}return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
		}), { define: b.define, require: b.require };
	}(),
	    c = b.require("jquery.select2");return a.fn.select2.amd = b, c;
});
/*! mobile-detect - v1.3.2 - 2016-03-31
https://github.com/hgoebl/mobile-detect.js */!function (a, b) {
	a(function () {
		"use strict";
		function a(a, b) {
			return null != a && null != b && a.toLowerCase() === b.toLowerCase();
		}function c(a, b) {
			var c,
			    d,
			    e = a.length;if (!e || !b) return !1;for (c = b.toLowerCase(), d = 0; e > d; ++d) {
				if (c === a[d].toLowerCase()) return !0;
			}return !1;
		}function d(a) {
			for (var b in a) {
				h.call(a, b) && (a[b] = new RegExp(a[b], "i"));
			}
		}function e(a, b) {
			this.ua = a || "", this._cache = {}, this.maxPhoneWidth = b || 600;
		}var f = {};f.mobileDetectRules = { phones: { iPhone: "\\biPhone\\b|\\biPod\\b", BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+", HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m", Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6", Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b", Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b", Samsung: "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350", LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)", Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533", Asus: "Asus.*Galaxy|PadFone.*Mobile", Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b", Palm: "PalmSource|Palm", Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature", Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790", Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250", Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM", iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)", SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b", Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q", Alcatel: "Alcatel", Nintendo: "Nintendo 3DS", Amoi: "Amoi", INQ: "INQ", GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser" }, tablets: { iPad: "iPad|iPad.*Mobile", NexusTablet: "Android.*Nexus[\\s]+(7|9|10)", SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561", Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b", SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)", HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10", AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C", BlackBerryTablet: "PlayBook|RIM Tablet", HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410", MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617", NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2", AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b", ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO", LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b", FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b", PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002", LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)", DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7", YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b", MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB", ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2", IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004", IRUTablet: "M702pro", MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b", EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)", AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)", ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b", AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark", SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31", PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b", CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT", CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010", MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10", MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b", SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)", RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A", FlyTablet: "IQ310|Fly Vision", bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus", HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim", NecTablet: "\\bN-06D|\\bN-08D", PantechTablet: "Pantech.*P4100", BronchoTablet: "Broncho.*(N701|N708|N802|a710)", VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b", ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900", PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA", NabiTablet: "Android.*\\bNabi", KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build", DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b", TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE", PlaystationTablet: "Playstation.*(Portable|Vita)", TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab", PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b", AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ", DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1", GalapadTablet: "Android.*\\bG1\\b", MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b", KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b", AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide", PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b", YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026", ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503", GUTablet: "TX-A1301|TX-M9002|Q702|kf026", PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10", OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)", HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync", DPSTablet: "DPS Dream 9|DPS Dual 7", VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10", CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989", MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b", ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan", GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042", ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003", VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b", ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1", StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab", VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7", EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2", RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711", iMobileTablet: "i-mobile i-note", TolinoTablet: "tolino tab [0-9.]+|tolino shine", AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b", AMPETablet: "Android.* A78 ", SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)", TecnoTablet: "TECNO P9", JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b", iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)", FX2Tablet: "FX2 PAD7|FX2 PAD10", XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151", ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a", OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10", CaptivaTablet: "CAPTIVA PAD", IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S", TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi", OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+", JaytechTablet: "TPC-PA762", BlaupunktTablet: "Endeavour 800NG|Endeavour 1010", DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b", EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b", LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b", AocTablet: "MW0811|MW0812|MW0922|MTK8382", MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010", CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b", WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b", MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b", NibiruTablet: "Nibiru M1|Nibiru Jupiter One", NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI", LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100", UbislateTablet: "UbiSlate[\\s]?7C", PocketBookTablet: "Pocketbook", Hudl: "Hudl HT7S3|Hudl 2", TelstraTablet: "T-Hub2", GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b" }, oss: { AndroidOS: "Android", BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os", PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino", SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b", WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;", WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;", iOS: "\\biPhone.*Mobile|\\biPod|\\biPad", MeeGoOS: "MeeGo", MaemoOS: "Maemo", JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b", webOS: "webOS|hpwOS", badaOS: "\\bBada\\b", BREWOS: "BREW" }, uas: { Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?", Dolfin: "\\bDolfin\\b", Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+", Skyfire: "Skyfire", IE: "IEMobile|MSIEMobile", Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile", Bolt: "bolt", TeaShark: "teashark", Blazer: "Blazer", Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari", Tizen: "Tizen", UCBrowser: "UC.*Browser|UCWEB", baiduboxapp: "baiduboxapp", baidubrowser: "baidubrowser", DiigoBrowser: "DiigoBrowser", Puffin: "Puffin", Mercury: "\\bMercury\\b", ObigoBrowser: "Obigo", NetFront: "NF-Browser", GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger" }, props: { Mobile: "Mobile/[VER]", Build: "Build/[VER]", Version: "Version/[VER]", VendorID: "VendorID/[VER]", iPad: "iPad.*CPU[a-z ]+[VER]", iPhone: "iPhone.*CPU[a-z ]+[VER]", iPod: "iPod.*CPU[a-z ]+[VER]", Kindle: "Kindle/[VER]", Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"], Coast: ["Coast/[VER]"], Dolfin: "Dolfin/[VER]", Firefox: "Firefox/[VER]", Fennec: "Fennec/[VER]", IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"], NetFront: "NetFront/[VER]", NokiaBrowser: "NokiaBrowser/[VER]", Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"], "Opera Mini": "Opera Mini/[VER]", "Opera Mobi": "Version/[VER]", "UC Browser": "UC Browser[VER]", MQQBrowser: "MQQBrowser/[VER]", MicroMessenger: "MicroMessenger/[VER]", baiduboxapp: "baiduboxapp/[VER]", baidubrowser: "baidubrowser/[VER]", Iron: "Iron/[VER]", Safari: ["Version/[VER]", "Safari/[VER]"], Skyfire: "Skyfire/[VER]", Tizen: "Tizen/[VER]", Webkit: "webkit[ /][VER]", Gecko: "Gecko/[VER]", Trident: "Trident/[VER]", Presto: "Presto/[VER]", iOS: " \\bi?OS\\b [VER][ ;]{1}", Android: "Android [VER]", BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"], BREW: "BREW [VER]", Java: "Java/[VER]", "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"], "Windows Phone": "Windows Phone [VER]", "Windows CE": "Windows CE/[VER]", "Windows NT": "Windows NT [VER]", Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"], webOS: ["webOS/[VER]", "hpwOS/[VER];"] }, utils: { Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom", MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2", DesktopMode: "WPDesktop", TV: "SonyDTV|HbbTV", WebKit: "(webkit)[ /]([\\w.]+)", Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b", Watch: "SM-V700" } }, f.detectMobileBrowsers = { fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, tabletPattern: /android|ipad|playbook|silk/i };var g,
		    h = Object.prototype.hasOwnProperty;return f.FALLBACK_PHONE = "UnknownPhone", f.FALLBACK_TABLET = "UnknownTablet", f.FALLBACK_MOBILE = "UnknownMobile", g = "isArray" in Array ? Array.isArray : function (a) {
			return "[object Array]" === Object.prototype.toString.call(a);
		}, function () {
			var a,
			    b,
			    c,
			    e,
			    i,
			    j,
			    k = f.mobileDetectRules;for (a in k.props) {
				if (h.call(k.props, a)) {
					for (b = k.props[a], g(b) || (b = [b]), i = b.length, e = 0; i > e; ++e) {
						c = b[e], j = c.indexOf("[VER]"), j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)), b[e] = new RegExp(c, "i");
					}k.props[a] = b;
				}
			}d(k.oss), d(k.phones), d(k.tablets), d(k.uas), d(k.utils), k.oss0 = { WindowsPhoneOS: k.oss.WindowsPhoneOS, WindowsMobileOS: k.oss.WindowsMobileOS };
		}(), f.findMatch = function (a, b) {
			for (var c in a) {
				if (h.call(a, c) && a[c].test(b)) return c;
			}return null;
		}, f.findMatches = function (a, b) {
			var c = [];for (var d in a) {
				h.call(a, d) && a[d].test(b) && c.push(d);
			}return c;
		}, f.getVersionStr = function (a, b) {
			var c,
			    d,
			    e,
			    g,
			    i = f.mobileDetectRules.props;if (h.call(i, a)) for (c = i[a], e = c.length, d = 0; e > d; ++d) {
				if (g = c[d].exec(b), null !== g) return g[1];
			}return null;
		}, f.getVersion = function (a, b) {
			var c = f.getVersionStr(a, b);return c ? f.prepareVersionNo(c) : NaN;
		}, f.prepareVersionNo = function (a) {
			var b;return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a);
		}, f.isMobileFallback = function (a) {
			return f.detectMobileBrowsers.fullPattern.test(a) || f.detectMobileBrowsers.shortPattern.test(a.substr(0, 4));
		}, f.isTabletFallback = function (a) {
			return f.detectMobileBrowsers.tabletPattern.test(a);
		}, f.prepareDetectionCache = function (a, c, d) {
			if (a.mobile === b) {
				var g, h, i;return (h = f.findMatch(f.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void (a.phone = null)) : (g = f.findMatch(f.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = g, void (a.tablet = null)) : void (f.isMobileFallback(c) ? (i = e.isPhoneSized(d), i === b ? (a.mobile = f.FALLBACK_MOBILE, a.tablet = a.phone = null) : i ? (a.mobile = a.phone = f.FALLBACK_PHONE, a.tablet = null) : (a.mobile = a.tablet = f.FALLBACK_TABLET, a.phone = null)) : f.isTabletFallback(c) ? (a.mobile = a.tablet = f.FALLBACK_TABLET, a.phone = null) : a.mobile = a.tablet = a.phone = null);
			}
		}, f.mobileGrade = function (a) {
			var b = null !== a.mobile();return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C");
		}, f.detectOS = function (a) {
			return f.findMatch(f.mobileDetectRules.oss0, a) || f.findMatch(f.mobileDetectRules.oss, a);
		}, f.getDeviceSmallerSide = function () {
			return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
		}, e.prototype = { constructor: e, mobile: function mobile() {
				return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
			}, phone: function phone() {
				return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
			}, tablet: function tablet() {
				return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
			}, userAgent: function userAgent() {
				return this._cache.userAgent === b && (this._cache.userAgent = f.findMatch(f.mobileDetectRules.uas, this.ua)), this._cache.userAgent;
			}, userAgents: function userAgents() {
				return this._cache.userAgents === b && (this._cache.userAgents = f.findMatches(f.mobileDetectRules.uas, this.ua)), this._cache.userAgents;
			}, os: function os() {
				return this._cache.os === b && (this._cache.os = f.detectOS(this.ua)), this._cache.os;
			}, version: function version(a) {
				return f.getVersion(a, this.ua);
			}, versionStr: function versionStr(a) {
				return f.getVersionStr(a, this.ua);
			}, is: function is(b) {
				return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(f.findMatches(f.mobileDetectRules.utils, this.ua), b);
			}, match: function match(a) {
				return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua);
			}, isPhoneSized: function isPhoneSized(a) {
				return e.isPhoneSized(a || this.maxPhoneWidth);
			}, mobileGrade: function mobileGrade() {
				return this._cache.grade === b && (this._cache.grade = f.mobileGrade(this)), this._cache.grade;
			} }, "undefined" != typeof window && window.screen ? e.isPhoneSized = function (a) {
			return 0 > a ? b : f.getDeviceSmallerSide() <= a;
		} : e.isPhoneSized = function () {}, e._impl = f, e;
	});
}(function (a) {
	if ("undefined" != typeof module && module.exports) return function (a) {
		module.exports = a();
	};if ("function" == typeof define && define.amd) return define;if ("undefined" != typeof window) return function (a) {
		window.MobileDetect = a();
	};throw new Error("unknown environment");
}());
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
	var J = f("html"),
	    n = f(r),
	    p = f(G),
	    b = f.fancybox = function () {
		b.open.apply(this, arguments);
	},
	    I = navigator.userAgent.match(/msie/i),
	    B = null,
	    s = G.createTouch !== v,
	    t = function t(a) {
		return a && a.hasOwnProperty && a instanceof f;
	},
	    q = function q(a) {
		return a && "string" === f.type(a);
	},
	    E = function E(a) {
		return q(a) && 0 < a.indexOf("%");
	},
	    l = function l(a, d) {
		var e = parseInt(a, 10) || 0;d && E(a) && (e *= b.getViewport()[d] / 100);return Math.ceil(e);
	},
	    w = function w(a, b) {
		return l(a, b) + "px";
	};f.extend(b, { version: "2.1.5", defaults: { padding: 15, margin: 20,
			width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !s, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
			keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
			openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
		isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function open(a, d) {
			if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
				var k = {},
				    g,
				    h,
				    j,
				    m,
				    l;"object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = { href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);g = d.href || k.href || (q(c) ? c : null);h = d.title !== v ? d.title : k.title || "";m = (j = d.content || k.content) ? "html" : d.type || k.type;!m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && !g && k.isDom && (m = "inline", j = c));f.extend(k, { href: g, type: m, content: j, title: h, selector: l });a[e] = k;
			}), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index);
		}, cancel: function cancel() {
			var a = b.coming;a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a));
		}, close: function close(a) {
			b.cancel();!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())));
		}, play: function play(a) {
			var d = function d() {
				clearTimeout(b.player.timer);
			},
			    e = function e() {
				d();b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
			},
			    c = function c() {
				d();p.unbind(".player");b.player.isActive = !1;b.trigger("onPlayEnd");
			};if (!0 === a || !b.player.isActive && !1 !== a) {
				if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart");
			} else c();
		}, next: function next(a) {
			var d = b.current;d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
		}, prev: function prev(a) {
			var d = b.current;
			d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
		}, jumpto: function jumpto(a, d, e) {
			var c = b.current;c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)));
		}, reposition: function reposition(a, d) {
			var e = b.current,
			    c = e ? e.wrap : null,
			    k;c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)));
		}, update: function update(a) {
			var d = a && a.type,
			    e = !d || "orientationchange" === d;e && (clearTimeout(B), B = null);b.isOpen && !B && (B = setTimeout(function () {
				var c = b.current;c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null);
			}, e && !s ? 0 : 300));
		}, toggle: function toggle(a) {
			b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
		}, hideLoading: function hideLoading() {
			p.unbind(".loading");f("#fancybox-loading").remove();
		}, showLoading: function showLoading() {
			var a, d;b.hideLoading();a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading", function (a) {
				if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel();
			});b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x }));
		}, getViewport: function getViewport() {
			var a = b.current && b.current.locked || !1,
			    d = { x: n.scrollLeft(),
				y: n.scrollTop() };a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());return d;
		}, unbindEvents: function unbindEvents() {
			b.wrap && t(b.wrap) && b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb");
		}, bindEvents: function bindEvents() {
			var a = b.current,
			    d;a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
				var c = e.which || e.keyCode,
				    k = e.target || e.srcElement;
				if (27 === c && b.coming) return !1;!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]")) && f.each(d, function (d, k) {
					if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1;
				});
			}), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
				for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) {
					j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
				}if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
					if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");d.preventDefault();
				}
			}));
		}, trigger: function trigger(a, d) {
			var e,
			    c = d || b.coming || b.current;if (c) {
				f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));if (!1 === e) return !1;c.helpers && f.each(c.helpers, function (d, e) {
					if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
				});p.trigger(a);
			}
		}, isImage: function isImage(a) {
			return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		}, isSWF: function isSWF(a) {
			return q(a) && a.match(/\.(swf)((\?|#).*)?$/i);
		}, _start: function _start(a) {
			var d = {},
			    e,
			    c;a = l(a);e = b.group[a] || null;if (!e) return !1;d = f.extend(!0, {}, b.opts, e);e = d.margin;c = d.padding;"number" === f.type(e) && (d.margin = [e, e, e, e]);"number" === f.type(c) && (d.padding = [c, c, c, c]);d.modal && f.extend(!0, d, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1,
				mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } });d.autoSize && (d.autoWidth = d.autoHeight = !0);"auto" === d.width && (d.autoWidth = !0);"auto" === d.height && (d.autoHeight = !0);d.group = b.group;d.index = a;b.coming = d;if (!1 === b.trigger("beforeLoad")) b.coming = null;else {
				c = d.type;e = d.href;if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;b.isActive = !0;if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";"image" === c && (d.aspectRatio = !0);"iframe" === c && s && (d.scrolling = "scroll");d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) });f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
					d.skin.css("padding" + b, w(d.padding[a]));
				});b.trigger("onReady");if ("inline" === c || "html" === c) {
					if (!d.content || !d.content.length) return b._error("content");
				} else if (!e) return b._error("href");
				"image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad();
			}
		}, _error: function _error(a) {
			f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });b._afterLoad();
		}, _loadImage: function _loadImage() {
			var a = b.imgPreload = new Image();a.onload = function () {
				this.onload = this.onerror = null;b.coming.width = this.width / b.opts.pixelRatio;b.coming.height = this.height / b.opts.pixelRatio;b._afterLoad();
			};a.onerror = function () {
				this.onload = this.onerror = null;b._error("image");
			};a.src = b.coming.href;!0 !== a.complete && b.showLoading();
		}, _loadAjax: function _loadAjax() {
			var a = b.coming;b.showLoading();b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function error(a, e) {
					b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
				}, success: function success(d, e) {
					"success" === e && (a.content = d, b._afterLoad());
				} }));
		}, _loadIframe: function _loadIframe() {
			var a = b.coming,
			    d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
			f(a.wrap).bind("onReset", function () {
				try {
					f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
				} catch (a) {}
			});a.iframe.preload && (b.showLoading(), d.one("load", function () {
				f(this).data("ready", 1);s || f(this).bind("load.fb", b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad();
			}));a.content = d.appendTo(a.inner);a.iframe.preload || b._afterLoad();
		}, _preloadImages: function _preloadImages() {
			var a = b.group,
			    d = b.current,
			    e = a.length,
			    c = d.preload ? Math.min(d.preload, e - 1) : 0,
			    f,
			    g;for (g = 1; g <= c; g += 1) {
				f = a[(d.index + g) % e], "image" === f.type && f.href && (new Image().src = f.href);
			}
		}, _afterLoad: function _afterLoad() {
			var a = b.coming,
			    d = b.current,
			    e,
			    c,
			    k,
			    g,
			    h;b.hideLoading();if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;else {
				d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e = a.content;c = a.type;k = a.scrolling;f.extend(b, { wrap: a.wrap, skin: a.skin,
					outer: a.outer, inner: a.inner, current: a, previous: d });g = a.href;switch (c) {case "inline":case "ajax":case "html":
						a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
							f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
						}));break;case "image":
						e = a.tpl.image.replace("{href}", g);break;case "swf":
						e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
							e += '<param name="' + a + '" value="' + b + '"></param>';h += " " + a + '="' + b + '"';
						}), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>";}(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);b._setDimension();b.reposition();b.isOpen = !1;b.coming = null;b.bindEvents();if (b.isOpened) {
					if (d.prevMethod) b.transitions[d.prevMethod]();
				} else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();b._preloadImages();
			}
		}, _setDimension: function _setDimension() {
			var a = b.getViewport(),
			    d = 0,
			    e = !1,
			    c = !1,
			    e = b.wrap,
			    k = b.skin,
			    g = b.inner,
			    h = b.current,
			    c = h.width,
			    j = h.height,
			    m = h.minWidth,
			    u = h.minHeight,
			    n = h.maxWidth,
			    p = h.maxHeight,
			    s = h.scrolling,
			    q = h.scrollOutside ? h.scrollbarWidth : 0,
			    x = h.margin,
			    y = l(x[1] + x[3]),
			    r = l(x[0] + x[2]),
			    v,
			    z,
			    t,
			    C,
			    A,
			    F,
			    B,
			    D,
			    H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x = l(k.outerWidth(!0) - k.width());v = l(k.outerHeight(!0) - k.height());z = y + x;t = r + v;C = E(c) ? (a.w - z) * l(c) / 100 : c;A = E(j) ? (a.h - t) * l(j) / 100 : j;if ("iframe" === h.type) {
				if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
					H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0));
				} catch (G) {}
			} else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");c = l(C);j = l(A);D = C / A;m = l(E(m) ? l(m, "w") - z : m);n = l(E(n) ? l(n, "w") - z : n);u = l(E(u) ? l(u, "h") - t : u);p = l(E(p) ? l(p, "h") - t : p);F = n;B = p;h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));z = a.w - y;r = a.h - r;h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));if (h.fitToView) if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio) for (; (a > z || y > r) && c > m && j > u && !(19 < d++);) {
				j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
			} else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));q && "auto" === s && j < A && c + x + q < z && (c += q);g.width(c).height(j);e.width(c + x);a = e.width();
			y = e.height();e = (a > z || y > r) && c > m && j > u;c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);f.extend(h, { dim: { width: w(a), height: w(y) }, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j });!H && h.autoHeight && j > u && j < p && !c && g.height("auto");
		}, _getPosition: function _getPosition(a) {
			var d = b.current,
			    e = b.getViewport(),
			    c = d.margin,
			    f = b.wrap.width() + c[1] + c[3],
			    g = b.wrap.height() + c[0] + c[2],
			    c = { position: "absolute", top: c[0], left: c[3] };d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));return c;
		}, _afterZoomIn: function _afterZoomIn() {
			var a = b.current;a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
				!f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
			}), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
				a.preventDefault();b.close();
			}), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()));
		}, _afterZoomOut: function _afterZoomOut(a) {
			a = a || b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });b.trigger("afterClose", a);
		} });b.transitions = { getOrigPosition: function getOrigPosition() {
			var a = b.current,
			    d = a.element,
			    e = a.orig,
			    c = {},
			    f = 50,
			    g = 50,
			    h = a.hPadding,
			    j = a.wPadding,
			    m = b.getViewport();!e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;return c = { top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h) };
		}, step: function step(a, d) {
			var e,
			    c,
			    f = d.prop;c = b.current;var g = c.wrapSpace,
			    h = c.skinSpace;if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e));
		}, zoomIn: function zoomIn() {
			var a = b.current,
			    d = a.pos,
			    e = a.openEffect,
			    c = "elastic" === e,
			    k = f.extend({ opacity: 1 }, d);delete k.position;c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);b.wrap.css(d).animate(k, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn });
		}, zoomOut: function zoomOut() {
			var a = b.current,
			    d = a.closeEffect,
			    e = "elastic" === d,
			    c = { opacity: 0.1 };e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut });
		}, changeIn: function changeIn() {
			var a = b.current,
			    d = a.nextEffect,
			    e = a.pos,
			    c = { opacity: 1 },
			    f = b.direction,
			    g;e.opacity = 0.1;"elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));"none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn });
		}, changeOut: function changeOut() {
			var a = b.previous,
			    d = a.prevEffect,
			    e = { opacity: 0.1 },
			    c = b.direction;"elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function complete() {
					f(this).trigger("onReset").remove();
				} });
		} };b.helpers.overlay = { defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function create(a) {
			a = f.extend({}, this.defaults, a);this.overlay && this.close();this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);this.fixed = !1;a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0);
		}, open: function open(a) {
			var d = this;a = f.extend({}, this.defaults, a);this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());a.closeClick && this.overlay.bind("click.overlay", function (a) {
				if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1;
			});this.overlay.css(a.css).show();
		}, close: function close() {
			var a, b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this, { overlay: null, fixed: !1 });
		}, update: function update() {
			var a = "100%",
			    b;this.overlay.width(a).height("100%");I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());this.overlay.width(a).height(p.height());
		}, onReady: function onReady(a, b) {
			var e = this.overlay;f(".fancybox-overlay").stop(!0, !0);e || this.create(a);a.locked && this.fixed && b.fixed && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);!0 === a.showEarly && this.beforeShow.apply(this, arguments);
		}, beforeShow: function beforeShow(a, b) {
			var e, c;b.locked && (!1 !== this.margin && (f("*").filter(function () {
				return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));this.open(a);
		}, onUpdate: function onUpdate() {
			this.fixed || this.update();
		}, afterClose: function afterClose(a) {
			this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
		} };b.helpers.title = { defaults: { type: "float", position: "bottom" }, beforeShow: function beforeShow(a) {
			var d = b.current,
			    e = d.title,
			    c = a.type;f.isFunction(e) && (e = e.call(d.element, d));if (q(e) && "" !== f.trim(e)) {
				d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");switch (c) {case "inside":
						c = b.skin;break;case "outside":
						c = b.wrap;break;case "over":
						c = b.inner;break;default:
						c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")));}d["top" === a.position ? "prependTo" : "appendTo"](c);
			}
		} };f.fn.fancybox = function (a) {
		var d,
		    e = f(this),
		    c = this.selector || "",
		    k = function k(g) {
			var h = f(this).blur(),
			    j = d,
			    k,
			    l;!g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && "" !== l && "nofollow" !== l && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault());
		};a = a || {};d = a.index || 0;!c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);this.filter("[data-fancybox-start=1]").trigger("click");return this;
	};p.ready(function () {
		var a, d;f.scrollbarWidth === v && (f.scrollbarWidth = function () {
			var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
			    b = a.children(),
			    b = b.innerWidth() - b.height(99).innerWidth();a.remove();return b;
		});if (f.support.fixedPosition === v) {
			a = f.support;d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;d.remove();a.fixedPosition = e;
		}f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });a = f(r).width();J.addClass("fancybox-lock-test");d = f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head");
	});
})(window, document, jQuery);
/*!
* Thumbnail helper for fancyBox
* version: 1.0.7 (Mon, 01 Oct 2012)
* @requires fancyBox v2.0 or later
*
* Usage:
*     $(".fancybox").fancybox({
*         helpers : {
*             thumbs: {
*                 width  : 50,
*                 height : 50
*             }
*         }
*     });
*
*/
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.thumbs = {
		defaults: {
			width: 50, // thumbnail width
			height: 50, // thumbnail height
			position: 'bottom', // 'top' or 'bottom'
			source: function source(item) {
				// function to obtain the URL of the thumbnail image
				var href;

				if (item.element) {
					href = $(item.element).find('img').attr('src');
				}

				if (!href && item.type === 'image' && item.href) {
					href = item.href;
				}

				return href;
			}
		},

		wrap: null,
		list: null,
		width: 0,

		init: function init(opts, obj) {
			var that = this,
			    list,
			    thumbWidth = opts.width,
			    thumbHeight = opts.height,
			    thumbSource = opts.source;

			//Build list structure
			list = '';

			for (var n = 0; n < obj.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
			this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

			//Load each thumbnail
			$.each(obj.group, function (i) {
				var href = thumbSource(obj.group[i]);

				if (!href) {
					return;
				}

				$("<img />").load(function () {
					var width = this.width,
					    height = this.height,
					    widthRatio,
					    heightRatio,
					    parent;

					if (!that.list || !width || !height) {
						return;
					}

					//Calculate thumbnail width/height and center it
					widthRatio = width / thumbWidth;
					heightRatio = height / thumbHeight;

					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width = Math.floor(width / heightRatio);
							height = thumbHeight;
						} else {
							width = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					$(this).css({
						width: width,
						height: height,
						top: Math.floor(thumbHeight / 2 - height / 2),
						left: Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					$(this).hide().appendTo(parent).fadeIn(300);
				}).attr('src', href);
			});

			//Set initial width
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
		},

		beforeLoad: function beforeLoad(opts, obj) {
			//Remove self if gallery do not have at least two items
			if (obj.group.length < 2) {
				obj.helpers.thumbs = false;

				return;
			}

			//Increase bottom margin to give space for thumbs
			obj.margin[opts.position === 'top' ? 0 : 2] += opts.height + 15;
		},

		afterShow: function afterShow(opts, obj) {
			//Check if exists and create or update list
			if (this.list) {
				this.onUpdate(opts, obj);
			} else {
				this.init(opts, obj);
			}

			//Set active element
			this.list.children().removeClass('active').eq(obj.index).addClass('active');
		},

		//Center list
		onUpdate: function onUpdate(opts, obj) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeClose: function beforeClose() {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap = null;
			this.list = null;
			this.width = 0;
		}
	};
})(jQuery);
/*! jQuery UI - v1.12.0 - 2016-09-06
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
	t.ui = t.ui || {}, t.ui.version = "1.12.0";var e = 0,
	    i = Array.prototype.slice;t.cleanData = function (e) {
		return function (i) {
			var s, n, o;for (o = 0; null != (n = i[o]); o++) {
				try {
					s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
				} catch (a) {}
			}e(i);
		};
	}(t.cleanData), t.widget = function (e, i, s) {
		var n,
		    o,
		    a,
		    r = {},
		    l = e.split(".")[0];e = e.split(".")[1];var h = l + "-" + e;return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
			return !!t.data(e, h);
		}, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
			return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
		}, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
			return t.isFunction(s) ? (r[e] = function () {
				function t() {
					return i.prototype[e].apply(this, arguments);
				}function n(t) {
					return i.prototype[e].apply(this, t);
				}return function () {
					var e,
					    i = this._super,
					    o = this._superApply;return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
				};
			}(), void 0) : (r[e] = s, void 0);
		}), o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: l, widgetName: e, widgetFullName: h }), n ? (t.each(n._childConstructors, function (e, i) {
			var s = i.prototype;t.widget(s.namespace + "." + s.widgetName, o, i._proto);
		}), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
	}, t.widget.extend = function (e) {
		for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++) {
			for (s in o[a]) {
				n = o[a][s], o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
			}
		}return e;
	}, t.widget.bridge = function (e, s) {
		var n = s.prototype.widgetFullName || e;t.fn[e] = function (o) {
			var a = "string" == typeof o,
			    r = i.call(arguments, 1),
			    l = this;return a ? this.each(function () {
				var i,
				    s = t.data(this, n);return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'");
			}) : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function () {
				var e = t.data(this, n);e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new s(o, this));
			})), l;
		};
	}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function _createWidget(i, s) {
			s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(t) {
					t.target === s && this.destroy();
				} }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
		}, _getCreateOptions: function _getCreateOptions() {
			return {};
		}, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function destroy() {
			var e = this;this._destroy(), t.each(this.classesElementLookup, function (t, i) {
				e._removeClass(i, t);
			}), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
		}, _destroy: t.noop, widget: function widget() {
			return this.element;
		}, option: function option(e, i) {
			var s,
			    n,
			    o,
			    a = e;if (0 === arguments.length) return t.widget.extend({}, this.options);if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
				for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
					n[s[o]] = n[s[o]] || {}, n = n[s[o]];
				}if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];n[e] = i;
			} else {
				if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];a[e] = i;
			}return this._setOptions(a), this;
		}, _setOptions: function _setOptions(t) {
			var e;for (e in t) {
				this._setOption(e, t[e]);
			}return this;
		}, _setOption: function _setOption(t, e) {
			return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
		}, _setOptionClasses: function _setOptionClasses(e) {
			var i, s, n;for (i in e) {
				n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 })));
			}
		}, _setOptionDisabled: function _setOptionDisabled(t) {
			this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
		}, enable: function enable() {
			return this._setOptions({ disabled: !1 });
		}, disable: function disable() {
			return this._setOptions({ disabled: !0 });
		}, _classes: function _classes(e) {
			function i(i, o) {
				var a, r;for (r = 0; i.length > r; r++) {
					a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
				}
			}var s = [],
			    n = this;return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
		}, _removeClass: function _removeClass(t, e, i) {
			return this._toggleClass(t, e, i, !1);
		}, _addClass: function _addClass(t, e, i) {
			return this._toggleClass(t, e, i, !0);
		}, _toggleClass: function _toggleClass(t, e, i, s) {
			s = "boolean" == typeof s ? s : i;var n = "string" == typeof t || null === t,
			    o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };return o.element.toggleClass(this._classes(o), s), this;
		}, _on: function _on(e, i, s) {
			var n,
			    o = this;"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
				function r() {
					return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
				}"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);var l = s.match(/^([\w:-]*)\s*(.*)$/),
				    h = l[1] + o.eventNamespace,
				    c = l[2];c ? n.on(h, c, r) : i.on(h, r);
			});
		}, _off: function _off(e, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
		}, _delay: function _delay(t, e) {
			function i() {
				return ("string" == typeof t ? s[t] : t).apply(s, arguments);
			}var s = this;return setTimeout(i, e || 0);
		}, _hoverable: function _hoverable(e) {
			this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function mouseenter(e) {
					this._addClass(t(e.currentTarget), null, "ui-state-hover");
				}, mouseleave: function mouseleave(e) {
					this._removeClass(t(e.currentTarget), null, "ui-state-hover");
				} });
		}, _focusable: function _focusable(e) {
			this.focusable = this.focusable.add(e), this._on(e, { focusin: function focusin(e) {
					this._addClass(t(e.currentTarget), null, "ui-state-focus");
				}, focusout: function focusout(e) {
					this._removeClass(t(e.currentTarget), null, "ui-state-focus");
				} });
		}, _trigger: function _trigger(e, i, s) {
			var n,
			    o,
			    a = this.options[e];if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
				n in i || (i[n] = o[n]);
			}return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
		} }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, o) {
			"string" == typeof n && (n = { effect: n });var a,
			    r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
				t(this)[e](), o && o.call(s[0]), i();
			});
		};
	}), t.widget, function () {
		function e(t, e, i) {
			return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)];
		}function i(e, i) {
			return parseInt(t.css(e, i), 10) || 0;
		}function s(e) {
			var i = e[0];return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
		}var n,
		    _o,
		    a = Math.max,
		    r = Math.abs,
		    l = Math.round,
		    h = /left|center|right/,
		    c = /top|center|bottom/,
		    u = /[\+\-]\d+(\.[\d]+)?%?/,
		    d = /^\w+/,
		    p = /%$/,
		    f = t.fn.position;_o = function o() {
			var e = t("<div>").css("position", "absolute").appendTo("body").offset({ top: 1.5, left: 1.5 }),
			    i = 1.5 === e.offset().top;return e.remove(), _o = function o() {
				return i;
			}, i;
		}, t.position = { scrollbarWidth: function scrollbarWidth() {
				if (void 0 !== n) return n;var e,
				    i,
				    s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				    o = s.children()[0];return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
			}, getScrollInfo: function getScrollInfo(e) {
				var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
				    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
				    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
				    o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;return { width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 };
			}, getWithinInfo: function getWithinInfo(e) {
				var i = t(e || window),
				    s = t.isWindow(i[0]),
				    n = !!i[0] && 9 === i[0].nodeType,
				    o = !s && !n;return { element: i, isWindow: s, isDocument: n, offset: o ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() };
			} }, t.fn.position = function (n) {
			if (!n || !n.of) return f.apply(this, arguments);n = t.extend({}, n);var p,
			    g,
			    m,
			    _,
			    v,
			    b,
			    y = t(n.of),
			    w = t.position.getWithinInfo(n.within),
			    k = t.position.getScrollInfo(w),
			    x = (n.collision || "flip").split(" "),
			    C = {};return b = s(y), y[0].preventDefault && (n.at = "left top"), g = b.width, m = b.height, _ = b.offset, v = t.extend({}, _), t.each(["my", "at"], function () {
				var t,
				    e,
				    i = (n[this] || "").split(" ");1 === i.length && (i = h.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = h.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [d.exec(i[0])[0], d.exec(i[1])[0]];
			}), 1 === x.length && (x[1] = x[0]), "right" === n.at[0] ? v.left += g : "center" === n.at[0] && (v.left += g / 2), "bottom" === n.at[1] ? v.top += m : "center" === n.at[1] && (v.top += m / 2), p = e(C.at, g, m), v.left += p[0], v.top += p[1], this.each(function () {
				var s,
				    h,
				    c = t(this),
				    u = c.outerWidth(),
				    d = c.outerHeight(),
				    f = i(this, "marginLeft"),
				    b = i(this, "marginTop"),
				    D = u + f + i(this, "marginRight") + k.width,
				    T = d + b + i(this, "marginBottom") + k.height,
				    I = t.extend({}, v),
				    M = e(C.my, c.outerWidth(), c.outerHeight());"right" === n.my[0] ? I.left -= u : "center" === n.my[0] && (I.left -= u / 2), "bottom" === n.my[1] ? I.top -= d : "center" === n.my[1] && (I.top -= d / 2), I.left += M[0], I.top += M[1], _o() || (I.left = l(I.left), I.top = l(I.top)), s = { marginLeft: f, marginTop: b }, t.each(["left", "top"], function (e, i) {
					t.ui.position[x[e]] && t.ui.position[x[e]][i](I, { targetWidth: g, targetHeight: m, elemWidth: u, elemHeight: d, collisionPosition: s, collisionWidth: D, collisionHeight: T, offset: [p[0] + M[0], p[1] + M[1]], my: n.my, at: n.at, within: w, elem: c });
				}), n.using && (h = function h(t) {
					var e = _.left - I.left,
					    i = e + g - u,
					    s = _.top - I.top,
					    o = s + m - d,
					    l = { target: { element: y, left: _.left, top: _.top, width: g, height: m }, element: { element: c, left: I.left, top: I.top, width: u, height: d }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle" };u > g && g > r(e + i) && (l.horizontal = "center"), d > m && m > r(s + o) && (l.vertical = "middle"), l.important = a(r(e), r(i)) > a(r(s), r(o)) ? "horizontal" : "vertical", n.using.call(this, t, l);
				}), c.offset(t.extend(I, { using: h }));
			});
		}, t.ui.position = { fit: { left: function left(t, e) {
					var i,
					    s = e.within,
					    n = s.isWindow ? s.scrollLeft : s.offset.left,
					    o = s.width,
					    r = t.left - e.collisionPosition.marginLeft,
					    l = n - r,
					    h = r + e.collisionWidth - o - n;e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + o - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = a(t.left - r, t.left);
				}, top: function top(t, e) {
					var i,
					    s = e.within,
					    n = s.isWindow ? s.scrollTop : s.offset.top,
					    o = e.within.height,
					    r = t.top - e.collisionPosition.marginTop,
					    l = n - r,
					    h = r + e.collisionHeight - o - n;e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + o - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = a(t.top - r, t.top);
				} }, flip: { left: function left(t, e) {
					var i,
					    s,
					    n = e.within,
					    o = n.offset.left + n.scrollLeft,
					    a = n.width,
					    l = n.isWindow ? n.scrollLeft : n.offset.left,
					    h = t.left - e.collisionPosition.marginLeft,
					    c = h - l,
					    u = h + e.collisionWidth - a - l,
					    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
					    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
					    f = -2 * e.offset[0];0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f));
				}, top: function top(t, e) {
					var i,
					    s,
					    n = e.within,
					    o = n.offset.top + n.scrollTop,
					    a = n.height,
					    l = n.isWindow ? n.scrollTop : n.offset.top,
					    h = t.top - e.collisionPosition.marginTop,
					    c = h - l,
					    u = h + e.collisionHeight - a - l,
					    d = "top" === e.my[1],
					    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
					    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
					    g = -2 * e.offset[1];0 > c ? (s = t.top + p + f + g + e.collisionHeight - a - o, (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, (i > 0 || u > r(i)) && (t.top += p + f + g));
				} }, flipfit: { left: function left() {
					t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
				}, top: function top() {
					t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
				} } };
	}(), t.ui.position, t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.fn.extend({ uniqueId: function () {
			var t = 0;return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++t);
				});
			};
		}(), removeUniqueId: function removeUniqueId() {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
			});
		} }), t.ui.safeActiveElement = function (t) {
		var e;try {
			e = t.activeElement;
		} catch (i) {
			e = t.body;
		}return e || (e = t.body), e.nodeName || (e = t.body), e;
	}, t.widget("ui.menu", { version: "1.12.0", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function _create() {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({ "mousedown .ui-menu-item": function mousedownUiMenuItem(t) {
					t.preventDefault();
				}, "click .ui-menu-item": function clickUiMenuItem(e) {
					var i = t(e.target),
					    s = t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
				}, "mouseenter .ui-menu-item": function mouseenterUiMenuItem(e) {
					if (!this.previousFilter) {
						var i = t(e.target).closest(".ui-menu-item"),
						    s = t(e.currentTarget);i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s));
					}
				}, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function focus(t, e) {
					var i = this.active || this.element.find(this.options.items).eq(0);e || this.focus(t, i);
				}, blur: function blur(e) {
					this._delay(function () {
						var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));i && this.collapseAll(e);
					});
				}, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function click(t) {
					this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
				} });
		}, _destroy: function _destroy() {
			var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
			    i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
				var e = t(this);e.data("ui-menu-submenu-caret") && e.remove();
			});
		}, _keydown: function _keydown(e) {
			var i,
			    s,
			    n,
			    o,
			    a = !0;switch (e.keyCode) {case t.ui.keyCode.PAGE_UP:
					this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:
					this.nextPage(e);break;case t.ui.keyCode.HOME:
					this._move("first", "first", e);break;case t.ui.keyCode.END:
					this._move("last", "last", e);break;case t.ui.keyCode.UP:
					this.previous(e);break;case t.ui.keyCode.DOWN:
					this.next(e);break;case t.ui.keyCode.LEFT:
					this.collapse(e);break;case t.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:
					this._activate(e);break;case t.ui.keyCode.ESCAPE:
					this.collapse(e);break;default:
					a = !1, s = this.previousFilter || "", n = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
						delete this.previousFilter;
					}, 1e3)) : delete this.previousFilter;}a && e.preventDefault();
		}, _activate: function _activate(t) {
			this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
		}, refresh: function refresh() {
			var e,
			    i,
			    s,
			    n,
			    o,
			    a = this,
			    r = this.options.icons.submenu,
			    l = this.element.find(this.options.menus);this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = l.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () {
				var e = t(this),
				    i = e.prev(),
				    s = t("<span>").data("ui-menu-submenu-caret", !0);a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"));
			}), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
				var e = t(this);a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
			}), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
		}, _itemRole: function _itemRole() {
			return { menu: "menuitem", listbox: "option" }[this.options.role];
		}, _setOption: function _setOption(t, e) {
			if ("icons" === t) {
				var i = this.element.find(".ui-menu-icon");this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
			}this._super(t, e);
		}, _setOptionDisabled: function _setOptionDisabled(t) {
			this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
		}, focus: function focus(t, e) {
			var i, s, n;this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
				this._close();
			}, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e });
		}, _scrollIntoView: function _scrollIntoView(e) {
			var i, s, n, o, a, r;this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
		}, blur: function blur(t, e) {
			e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null);
		}, _startOpening: function _startOpening(t) {
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
				this._close(), this._open(t);
			}, this.delay));
		}, _open: function _open(e) {
			var i = t.extend({ of: this.active }, this.options.position);clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
		}, collapseAll: function collapseAll(e, i) {
			clearTimeout(this.timer), this.timer = this._delay(function () {
				var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s;
			}, this.delay);
		}, _close: function _close(t) {
			t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
		}, _closeOnDocumentClick: function _closeOnDocumentClick(e) {
			return !t(e.target).closest(".ui-menu").length;
		}, _isDivider: function _isDivider(t) {
			return !/[^\-\u2014\u2013\s]/.test(t.text());
		}, collapse: function collapse(t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);e && e.length && (this._close(), this.focus(t, e));
		}, expand: function expand(t) {
			var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();e && e.length && (this._open(e.parent()), this._delay(function () {
				this.focus(t, e);
			}));
		}, next: function next(t) {
			this._move("next", "first", t);
		}, previous: function previous(t) {
			this._move("prev", "last", t);
		}, isFirstItem: function isFirstItem() {
			return this.active && !this.active.prevAll(".ui-menu-item").length;
		}, isLastItem: function isLastItem() {
			return this.active && !this.active.nextAll(".ui-menu-item").length;
		}, _move: function _move(t, e, i) {
			var s;this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
		}, nextPage: function nextPage(e) {
			var i, s, n;return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
				return i = t(this), 0 > i.offset().top - s - n;
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0);
		}, previousPage: function previousPage(e) {
			var i, s, n;return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
				return i = t(this), i.offset().top - s + n > 0;
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0);
		}, _hasScroll: function _hasScroll() {
			return this.element.outerHeight() < this.element.prop("scrollHeight");
		}, select: function select(e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");var i = { item: this.active };this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
		}, _filterMenuItems: function _filterMenuItems(e) {
			var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
			    s = RegExp("^" + i, "i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
				return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
			});
		} }), t.widget("ui.autocomplete", { version: "1.12.0", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function _create() {
			var e,
			    i,
			    s,
			    n = this.element[0].nodeName.toLowerCase(),
			    o = "textarea" === n,
			    a = "input" === n;this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, { keydown: function keydown(n) {
					if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;e = !1, s = !1, i = !1;var o = t.ui.keyCode;switch (n.keyCode) {case o.PAGE_UP:
							e = !0, this._move("previousPage", n);break;case o.PAGE_DOWN:
							e = !0, this._move("nextPage", n);break;case o.UP:
							e = !0, this._keyEvent("previous", n);break;case o.DOWN:
							e = !0, this._keyEvent("next", n);break;case o.ENTER:
							this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));break;case o.TAB:
							this.menu.active && this.menu.select(n);break;case o.ESCAPE:
							this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());break;default:
							i = !0, this._searchTimeout(n);}
				}, keypress: function keypress(s) {
					if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;if (!i) {
						var n = t.ui.keyCode;switch (s.keyCode) {case n.PAGE_UP:
								this._move("previousPage", s);break;case n.PAGE_DOWN:
								this._move("nextPage", s);break;case n.UP:
								this._keyEvent("previous", s);break;case n.DOWN:
								this._keyEvent("next", s);}
					}
				}, input: function input(t) {
					return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
				}, focus: function focus() {
					this.selectedItem = null, this.previous = this._value();
				}, blur: function blur(t) {
					return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
				} }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, { mousedown: function mousedown(e) {
					e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
						delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
					});
				}, menufocus: function menufocus(e, i) {
					var s, n;return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
						t(e.target).trigger(e.originalEvent);
					}), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: n }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0);
				}, menuselect: function menuselect(e, i) {
					var s = i.item.data("ui-autocomplete-item"),
					    n = this.previous;this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
						this.previous = n, this.selectedItem = s;
					})), !1 !== this._trigger("select", e, { item: s }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
				} }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function beforeunload() {
					this.element.removeAttr("autocomplete");
				} });
		}, _destroy: function _destroy() {
			clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
		}, _setOption: function _setOption(t, e) {
			this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
		}, _isEventTargetInWidget: function _isEventTargetInWidget(e) {
			var i = this.menu.element[0];return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
		}, _closeOnClickOutside: function _closeOnClickOutside(t) {
			this._isEventTargetInWidget(t) || this.close();
		}, _appendTo: function _appendTo() {
			var e = this.options.appendTo;return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
		}, _initSource: function _initSource() {
			var e,
			    i,
			    s = this;t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
				s(t.ui.autocomplete.filter(e, i.term));
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
				s.xhr && s.xhr.abort(), s.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function success(t) {
						n(t);
					}, error: function error() {
						n([]);
					} });
			}) : this.source = this.options.source;
		}, _searchTimeout: function _searchTimeout(t) {
			clearTimeout(this.searching), this.searching = this._delay(function () {
				var e = this.term === this._value(),
				    i = this.menu.element.is(":visible"),
				    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;(!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
			}, this.options.delay);
		}, search: function search(t, e) {
			return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
		}, _search: function _search(t) {
			this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response());
		}, _response: function _response() {
			var e = ++this.requestIndex;return t.proxy(function (t) {
				e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
			}, this);
		}, __response: function __response(t) {
			t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
		}, close: function close(t) {
			this.cancelSearch = !0, this._close(t);
		}, _close: function _close(t) {
			this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
		}, _change: function _change(t) {
			this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem });
		}, _normalize: function _normalize(e) {
			return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
				return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label });
			});
		}, _suggest: function _suggest(e) {
			var i = this.menu.element.empty();this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" });
		}, _resizeMenu: function _resizeMenu() {
			var t = this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
		}, _renderMenu: function _renderMenu(e, i) {
			var s = this;t.each(i, function (t, i) {
				s._renderItemData(e, i);
			});
		}, _renderItemData: function _renderItemData(t, e) {
			return this._renderItem(t, e).data("ui-autocomplete-item", e);
		}, _renderItem: function _renderItem(e, i) {
			return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
		}, _move: function _move(t, e) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
		}, widget: function widget() {
			return this.menu.element;
		}, _value: function _value() {
			return this.valueMethod.apply(this.element, arguments);
		}, _keyEvent: function _keyEvent(t, e) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
		}, _isContentEditable: function _isContentEditable(t) {
			if (!t.length) return !1;var e = t.prop("contentEditable");return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
		} }), t.extend(t.ui.autocomplete, { escapeRegex: function escapeRegex(t) {
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
		}, filter: function filter(e, i) {
			var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");return t.grep(e, function (t) {
				return s.test(t.label || t.value || t);
			});
		} }), t.widget("ui.autocomplete", t.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function results(t) {
					return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
				} } }, __response: function __response(e) {
			var i;this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
		} }), t.ui.autocomplete;
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
	"use strict";
	var b = window.Slick || {};b = function () {
		function c(c, d) {
			var f,
			    e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
					return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
				}, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
		}var b = 0;return c;
	}(), b.prototype.activateADA = function () {
		var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
	}, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b);
		}), e.$slidesCache = e.$slides, e.reinit();
	}, b.prototype.animateHeight = function () {
		var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {},
		    e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
			}, complete: function complete() {
				c && c.call();
			} })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call();
		}, e.options.speed));
	}, b.prototype.getNavTarget = function () {
		var b = this,
		    c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
	}, b.prototype.asNavFor = function (b) {
		var c = this,
		    d = c.getNavTarget();null !== d && "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d.each(function () {
			var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
		});
	}, b.prototype.applyTransition = function (a) {
		var b = this,
		    c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
	}, b.prototype.autoPlay = function () {
		var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
	}, b.prototype.autoPlayClear = function () {
		var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
	}, b.prototype.autoPlayIterator = function () {
		var a = this,
		    b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
	}, b.prototype.buildArrows = function () {
		var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
	}, b.prototype.buildDots = function () {
		var c,
		    d,
		    b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
				d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
			}b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
		}
	}, b.prototype.buildOut = function () {
		var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
		}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
	}, b.prototype.buildRows = function () {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
				var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
					}i.appendChild(j);
				}e.appendChild(i);
			}a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var e,
		    f,
		    g,
		    d = this,
		    h = !1,
		    i = d.$slider.width(),
		    j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;for (e in d.breakpoints) {
				d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			}null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
		}
	}, b.prototype.changeSlide = function (b, c) {
		var f,
		    g,
		    h,
		    d = this,
		    e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
				return;}
	}, b.prototype.checkNavigable = function (a) {
		var c,
		    d,
		    b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
			if (a < c[e]) {
				a = d;break;
			}d = c[e];
		}return a;
	}, b.prototype.cleanUpEvents = function () {
		var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
	}, b.prototype.cleanUpSlideEvents = function () {
		var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
	}, b.prototype.cleanUpRows = function () {
		var b,
		    a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
	}, b.prototype.clickHandler = function (a) {
		var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
	}, b.prototype.destroy = function (b) {
		var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"));
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
	}, b.prototype.disableTransition = function (a) {
		var b = this,
		    c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
			c.disableTransition(a), b.call();
		}, c.options.speed));
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
	}, b.prototype.focusHandler = function () {
		var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
			c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
				b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
			}, 0);
		});
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;return a.currentSlide;
	}, b.prototype.getDotCount = function () {
		var a = this,
		    b = 0,
		    c = 0,
		    d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
			++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		} else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
			++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		} else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
	}, b.prototype.getLeft = function (a) {
		var c,
		    d,
		    f,
		    b = this,
		    e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;return b.options[a];
	}, b.prototype.getNavigableIndexes = function () {
		var e,
		    a = this,
		    b = 0,
		    c = 0,
		    d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
			d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		}return d;
	}, b.prototype.getSlick = function () {
		return this;
	}, b.prototype.getSlideCount = function () {
		var c,
		    d,
		    e,
		    b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
	}, b.prototype.init = function (b) {
		var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
	}, b.prototype.initADA = function () {
		var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
	}, b.prototype.initArrowEvents = function () {
		var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
	}, b.prototype.initDotEvents = function () {
		var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
	}, b.prototype.initSlideEvents = function () {
		var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
	}, b.prototype.initializeEvents = function () {
		var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
	}, b.prototype.initUI = function () {
		var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
	}, b.prototype.keyHandler = function (a) {
		var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
	}, b.prototype.lazyLoad = function () {
		function g(c) {
			a("img[data-lazy]", c).each(function () {
				var c = a(this),
				    d = a(this).attr("data-lazy"),
				    e = document.createElement("img");e.onload = function () {
					c.animate({ opacity: 0 }, 100, function () {
						c.attr("src", d).animate({ opacity: 1 }, 200, function () {
							c.removeAttr("data-lazy").removeClass("slick-loading");
						}), b.$slider.trigger("lazyLoaded", [b, c, d]);
					});
				}, e.onerror = function () {
					c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
				}, e.src = d;
			});
		}var c,
		    d,
		    e,
		    f,
		    b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
	}, b.prototype.loadSlider = function () {
		var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;a.changeSlide({ data: { message: "next" } });
	}, b.prototype.orientationChange = function () {
		var a = this;a.checkResponsive(), a.setPosition();
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;a.autoPlayClear(), a.paused = !0;
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
	}, b.prototype.postSlide = function (a) {
		var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;a.changeSlide({ data: { message: "previous" } });
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault();
	}, b.prototype.progressiveLazyLoad = function (b) {
		b = b || 1;var e,
		    f,
		    g,
		    c = this,
		    d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
			e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
		}, g.onerror = function () {
			3 > b ? setTimeout(function () {
				c.progressiveLazyLoad(b + 1);
			}, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
		}, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
	}, b.prototype.refresh = function (b) {
		var d,
		    e,
		    c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
	}, b.prototype.registerBreakpoints = function () {
		var c,
		    d,
		    e,
		    b = this,
		    f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";for (c in f) {
				if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
					for (; e >= 0;) {
						b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
					}b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
				}
			}b.breakpoints.sort(function (a, c) {
				return b.options.mobileFirst ? a - c : c - a;
			});
		}
	}, b.prototype.reinit = function () {
		var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
	}, b.prototype.resize = function () {
		var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
		}, 50));
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
	}, b.prototype.setCSS = function (a) {
		var d,
		    e,
		    b = this,
		    c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
	}, b.prototype.setDimensions = function () {
		var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
	}, b.prototype.setFade = function () {
		var c,
		    b = this;b.$slides.each(function (d, e) {
			c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
		}), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
	}, b.prototype.setHeight = function () {
		var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function () {
		var c,
		    d,
		    e,
		    f,
		    h,
		    b = this,
		    g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
			b.options[a] = c;
		});else if ("responsive" === h) for (d in f) {
			if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
				for (c = b.options.responsive.length - 1; c >= 0;) {
					b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
				}b.options.responsive.push(f[d]);
			}
		}g && (b.unload(), b.reinit());
	}, b.prototype.setPosition = function () {
		var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
	}, b.prototype.setProps = function () {
		var a = this,
		    b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
	}, b.prototype.setSlideClasses = function (a) {
		var c,
		    d,
		    e,
		    f,
		    b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
	}, b.prototype.setupInfinite = function () {
		var c,
		    d,
		    e,
		    b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
				d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			}for (c = 0; e > c; c += 1) {
				d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			}b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "");
			});
		}
	}, b.prototype.interrupt = function (a) {
		var b = this;a || b.autoPlay(), b.interrupted = a;
	}, b.prototype.selectHandler = function (b) {
		var c = this,
		    d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
		    e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
	}, b.prototype.slideHandler = function (a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    j,
		    h = null,
		    i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d);
		}) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d);
		}) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
			i.postSlide(e);
		})) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
			i.postSlide(e);
		}) : i.postSlide(e))));
	}, b.prototype.startLoad = function () {
		var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
	}, b.prototype.swipeDirection = function () {
		var a,
		    b,
		    c,
		    d,
		    e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
	}, b.prototype.swipeEnd = function (a) {
		var c,
		    d,
		    b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
			switch (d = b.swipeDirection()) {case "left":case "down":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
	}, b.prototype.swipeHandler = function (a) {
		var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
				b.swipeStart(a);break;case "move":
				b.swipeMove(a);break;case "end":
				b.swipeEnd(a);}
	}, b.prototype.swipeMove = function (a) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
	}, b.prototype.swipeStart = function (a) {
		var c,
		    b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
	}, b.prototype.unload = function () {
		var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
	}, b.prototype.unslick = function (a) {
		var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
	}, b.prototype.updateArrows = function () {
		var b,
		    a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
	}, b.prototype.updateDots = function () {
		var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
	}, b.prototype.visibility = function () {
		var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
	}, a.fn.slick = function () {
		var f,
		    g,
		    a = this,
		    c = arguments[0],
		    d = Array.prototype.slice.call(arguments, 1),
		    e = a.length;for (f = 0; e > f; f++) {
			if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		}return a;
	};
});