!function(e1) {
    function t1(t) {
        for(var a, r, o = t[0], s = t[1], l = t[2], u = 0, f = []; u < o.length; u++)r = o[u], Object.prototype.hasOwnProperty.call(i1, r) && i1[r] && f.push(i1[r][0]), i1[r] = 0;
        for(a in s)Object.prototype.hasOwnProperty.call(s, a) && (e1[a] = s[a]);
        for(d1 && d1(t); f.length;)f.shift()();
        return c1.push.apply(c1, l || []), n1();
    }
    function n1() {
        for(var e, t = 0; t < c1.length; t++){
            for(var n = c1[t], a = !0, r = 1; r < n.length; r++){
                var s = n[r];
                0 !== i1[s] && (a = !1);
            }
            a && (c1.splice(t--, 1), e = o1(o1.s = n[0]));
        }
        return e;
    }
    var a1 = {
    }, r1 = {
        192: 0
    }, i1 = {
        192: 0
    }, c1 = [];
    function o1(t) {
        if (a1[t]) return a1[t].exports;
        var n = a1[t] = {
            i: t,
            l: !1,
            exports: {
            }
        };
        return e1[t].call(n.exports, n, n.exports, o1), n.l = !0, n.exports;
    }
    o1.e = function(e2) {
        var t2 = [];
        r1[e2] ? t2.push(r1[e2]) : 0 !== r1[e2] && ({
            63: 1,
            197: 1,
            198: 1,
            200: 1,
            201: 1,
            202: 1
        })[e2] && t2.push(r1[e2] = new Promise(function(t3, n) {
            for(var a3 = e2 + "." + {
                1: "31d6cfe0d16ae931b73c",
                2: "31d6cfe0d16ae931b73c",
                3: "31d6cfe0d16ae931b73c",
                63: "85fed62f69feec56e675",
                64: "31d6cfe0d16ae931b73c",
                65: "31d6cfe0d16ae931b73c",
                66: "31d6cfe0d16ae931b73c",
                67: "31d6cfe0d16ae931b73c",
                68: "31d6cfe0d16ae931b73c",
                69: "31d6cfe0d16ae931b73c",
                70: "31d6cfe0d16ae931b73c",
                71: "31d6cfe0d16ae931b73c",
                72: "31d6cfe0d16ae931b73c",
                73: "31d6cfe0d16ae931b73c",
                74: "31d6cfe0d16ae931b73c",
                75: "31d6cfe0d16ae931b73c",
                197: "a1dbe4b1b20a99f958fb",
                198: "aff0a362a37e7efe0329",
                200: "29a80ff761bc1b9947b8",
                201: "4ce472ae437bf4c5152b",
                202: "6b8250d8c2e9a5fbb4ce",
                203: "31d6cfe0d16ae931b73c",
                204: "31d6cfe0d16ae931b73c",
                205: "31d6cfe0d16ae931b73c",
                206: "31d6cfe0d16ae931b73c",
                207: "31d6cfe0d16ae931b73c"
            }[e2] + ".css", i = o1.p + a3, c3 = document.getElementsByTagName("link"), s = 0; s < c3.length; s++){
                var l = (d = c3[s]).getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (l === a3 || l === i)) return t3();
            }
            var u = document.getElementsByTagName("style");
            for(s = 0; s < u.length; s++){
                var d;
                if ((l = (d = u[s]).getAttribute("data-href")) === a3 || l === i) return t3();
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t3, f.onerror = function(t) {
                var a = t && t.target && t.target.src || i, c = new Error("Loading CSS chunk " + e2 + " failed.\n(" + a + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED", c.request = a, delete r1[e2], f.parentNode.removeChild(f), n(c);
            }, f.href = i, document.getElementsByTagName("head")[0].appendChild(f);
        }).then(function() {
            r1[e2] = 0;
        }));
        var n2 = i1[e2];
        if (0 !== n2) {
            if (n2) t2.push(n2[2]);
            else {
                var a2 = new Promise(function(t, a) {
                    n2 = i1[e2] = [
                        t,
                        a
                    ];
                });
                t2.push(n2[2] = a2);
                var c2, s2 = document.createElement("script");
                s2.charset = "utf-8", s2.timeout = 120, o1.nc && s2.setAttribute("nonce", o1.nc), s2.src = (function(e) {
                    return o1.p + "" + (({
                        1: "node_modules_for_quiz"
                    })[e] || e) + "." + ({
                        1: "617544ad8bf8c690d638",
                        2: "2d000d6a77e96bf7fa28",
                        3: "25c2dd5c92fb0fd3608a",
                        63: "83d07dbb6d9d0e3e9e18",
                        64: "02904adb5a6040c38e3b",
                        65: "7989c0d46ed4781ac15a",
                        66: "6fd3e4dd75127b97b583",
                        67: "ef34e5b300699a30cf5d",
                        68: "f4da68b37b8bb472d7ca",
                        69: "63c4b1f2013b05644bf3",
                        70: "1902b2ecfd4fb93eda45",
                        71: "5595eb2e3be6c594a3cf",
                        72: "77a4549326d9a3415e9c",
                        73: "227f537c6b7286181100",
                        74: "5744dbbcfe40a43d3b3f",
                        75: "523f8ab59d91de1191af",
                        197: "4bc9a434a8d5dad07352",
                        198: "0c500abeb4f471b980bc",
                        200: "be4bc1d90f392128f513",
                        201: "f3b93ce2f2d9d6647358",
                        202: "e84166eac03b752a02aa",
                        203: "e644bf31b5fd4cdbf2b8",
                        204: "6e0fe2fa764364a40dfd",
                        205: "25424ae374a6c64419bc",
                        206: "7f826838195e044302bf",
                        207: "a14f4e4354066f18c0d7"
                    })[e] + ".js";
                })(e2);
                var l2 = new Error();
                c2 = function(t) {
                    s2.onerror = s2.onload = null, clearTimeout(u2);
                    var n = i1[e2];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type), r = t && t.target && t.target.src;
                            l2.message = "Loading chunk " + e2 + " failed.\n(" + a + ": " + r + ")", l2.name = "ChunkLoadError", l2.type = a, l2.request = r, n[1](l2);
                        }
                        i1[e2] = void 0;
                    }
                };
                var u2 = setTimeout(function() {
                    c2({
                        type: "timeout",
                        target: s2
                    });
                }, 120000);
                s2.onerror = s2.onload = c2, document.head.appendChild(s2);
            }
        }
        return Promise.all(t2);
    }, o1.m = e1, o1.c = a1, o1.d = function(e, t, n) {
        o1.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, o1.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, o1.t = function(e, t) {
        if (1 & t && (e = o1(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o1.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for(var a in e)o1.d(n, a, (function(t) {
            return e[t];
        }).bind(null, a));
        return n;
    }, o1.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return o1.d(t, "a", t), t;
    }, o1.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, o1.p = "https://frontier-assets.toptal.com/", o1.oe = function(e) {
        throw console.error(e), e;
    };
    var s1 = window.webpackJsonp = window.webpackJsonp || [], l1 = s1.push.bind(s1);
    s1.push = t1, s1 = s1.slice();
    for(var u1 = 0; u1 < s1.length; u1++)t1(s1[u1]);
    var d1 = l1;
    c1.push([
        1665,
        0,
        59
    ]), n1();
}({
    10: function(e3, t4, n3) {
        "use strict";
        n3.d(t4, "a", function() {
            return a4.a;
        }), n3.d(t4, "d", function() {
            return a4.b;
        }), n3.d(t4, "e", function() {
            return s3;
        }), n3.d(t4, "f", function() {
            return l3;
        }), n3.d(t4, "g", function() {
            return u3.a;
        }), n3.d(t4, "i", function() {
            return b1;
        }), n3.d(t4, "h", function() {
            return x;
        }), n3.d(t4, "j", function() {
            return T;
        }), n3.d(t4, "k", function() {
            return R;
        }), n3.d(t4, "l", function() {
            return A;
        }), n3.d(t4, "m", function() {
            return U.b;
        }), n3.d(t4, "n", function() {
            return B;
        }), n3.d(t4, "o", function() {
            return G.a;
        }), n3.d(t4, "p", function() {
            return F.a;
        }), n3.d(t4, "q", function() {
            return K;
        }), n3.d(t4, "r", function() {
            return Y;
        }), n3.d(t4, "s", function() {
            return Q.b;
        }), n3.d(t4, "t", function() {
            return J;
        }), n3.d(t4, "u", function() {
            return X;
        }), n3.d(t4, "v", function() {
            return te;
        }), n3.d(t4, "w", function() {
            return ie;
        }), n3.d(t4, "x", function() {
            return ce;
        }), n3.d(t4, "y", function() {
            return ue;
        }), n3.d(t4, "z", function() {
            return de;
        }), n3.d(t4, "B", function() {
            return me;
        }), n3.d(t4, "c", function() {
            return W.a;
        }), n3.d(t4, "C", function() {
            return W.b;
        }), n3.d(t4, "D", function() {
            return pe;
        }), n3.d(t4, "E", function() {
            return be;
        }), n3.d(t4, "F", function() {
            return ge;
        }), n3.d(t4, "b", function() {
            return ye;
        }), n3.d(t4, "A", function() {
            return Ee;
        });
        var a4 = n3(122), r2 = n3(1), i2 = n3.n(r2), c4 = n3(0), o2 = n3.n(c4);
        function s3(e, t) {
            var n4 = Object(c4.useState)(e), a = i2()(n4, 2), r = a[0], o = a[1];
            return Object(c4.useEffect)(function() {
                var n = setTimeout(function() {
                    o(e);
                }, t);
                return function() {
                    clearTimeout(n);
                };
            }, [
                e,
                t
            ]), r;
        }
        function l3() {
            var e = Object(c4.useState)(!1), t = i2()(e, 2), n = t[0], a = t[1];
            return Object(c4.useEffect)(function() {
                a(window.location.href.includes("debug=true"));
            }, []), [
                n,
                a
            ];
        }
        n3(44), n3(73);
        var u3 = n3(126), d2 = (n3(23), n3(17), n3(51), n3(30)), f1 = n3.n(d2), m1 = n3(197), p1 = n3.n(m1);
        function b1(e4, t, n) {
            return Object(c4.useMemo)(function() {
                var a5 = e4.filter(function(e) {
                    var a = e.href;
                    return t.href !== a && a !== p1()(n, "href");
                });
                return [
                    n || t
                ].concat(f1()(a5)).slice(0, 13);
            }, [
                t,
                n,
                e4
            ]);
        }
        n3(19), n3(14), n3(56), n3(62), n3(25), n3(26), n3(20), n3(27), n3(33), n3(106), n3(64), n3(15), n3(68), n3(75);
        var g1 = n3(18), v1 = n3.n(g1), h = (n3(67), n3(35)), y = n3.n(h), E = n3(4), _ = n3.n(E), O = n3(192), j = n3.n(O), w = n3(38), S = n3.n(w), k = n3(13);
        function N(e, t5) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t5 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function C(e) {
            var t6, n;
            for(t6 = 1; t6 < arguments.length; t6++)n = null != arguments[t6] ? arguments[t6] : {
            }, t6 % 2 ? N(Object(n), !0).forEach(function(t) {
                _()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var P, x = function() {
            var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t7 = Object(c4.useState)(C({
                status: k.a.INITIAL,
                error: !1,
                data: {
                }
            }, e5)), n5 = i2()(t7, 2), a6 = n5[0], r3 = n5[1], o = Object(c4.useCallback)(function(e) {
                r3(function(t) {
                    return C(C({
                    }, t), e);
                });
            }, []), s4 = Object(c4.useCallback)(function() {
                var e6 = y()(v1.a.mark(function e7(t) {
                    var n, a, r, i, c, s, l, u, d, f, m, p = arguments;
                    return v1.a.wrap(function(e8) {
                        for(;;)switch(e8.prev = e8.next){
                            case 0:
                                if (n = p.length > 1 && void 0 !== p[1] ? p[1] : {
                                }, a = p.length > 2 && void 0 !== p[2] ? p[2] : {
                                }, r = p.length > 3 && void 0 !== p[3] ? p[3] : {
                                }, i = r.onBeforeSend, c = void 0 === i ? S.a : i, s = r.transformData, l = void 0 === s ? j.a : s, u = r.onSuccess, d = void 0 === u ? S.a : u, !1 !== c()) {
                                    e8.next = 6;
                                    break;
                                }
                                return e8.abrupt("return");
                            case 6:
                                return e8.prev = 6, (f = new URLSearchParams(n).toString()) && (t += "?".concat(f)), e8.next = 11, fetch(t, C(C({
                                }, a), {
                                }, {
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })).then(function(e) {
                                    return e.json();
                                });
                            case 11:
                                m = e8.sent, o({
                                    status: k.a.SUCCESS,
                                    data: l(m)
                                }), d(m), e8.next = 19;
                                break;
                            case 16:
                                e8.prev = 16, e8.t0 = e8.catch(6), "AbortError" !== (null === e8.t0 || void 0 === e8.t0 ? void 0 : e8.t0.name) && o({
                                    error: e8.t0,
                                    status: k.a.ERROR
                                });
                            case 19:
                            case "end":
                                return e8.stop();
                        }
                    }, e7, null, [
                        [
                            6,
                            16
                        ]
                    ]);
                }));
                return function() {
                    return e6.apply(this, arguments);
                };
            }(), [
                o
            ]);
            return {
                state: a6,
                fetchJSON: s4,
                updateState: o
            };
        }, L = n3(59);
        function T(e9) {
            var t8 = Object(c4.useState)(null), n = i2()(t8, 2), a = n[0], r = n[1], o = Object(c4.useState)(k.a.INITIAL), s = i2()(o, 2), l = s[0], u = s[1];
            return Object(c4.useEffect)(function() {
                P || (P = new L.a()).fetch(e9), P.subscribe(function(e, t) {
                    t === k.a.SUCCESS && r(e), u(t);
                });
            }, [
                e9
            ]), [
                a,
                l
            ];
        }
        n3(189);
        var I = [
            {
                region: "africa",
                countries: [
                    "Angola",
                    "Benin",
                    "Botswana",
                    "Burkina Faso",
                    "Burundi",
                    "Cameroon",
                    "Cape Verde",
                    "Central African Republic",
                    "Chad",
                    "Congo",
                    "Congo, The Democratic Republic of the",
                    "CГґte D'Ivoire",
                    "Equatorial Guinea",
                    "Eritrea",
                    "Ethiopia",
                    "Gabon",
                    "Gambia",
                    "Ghana",
                    "Guinea",
                    "Guinea-Bissau",
                    "Kenya",
                    "Lesotho",
                    "Liberia",
                    "Madagascar",
                    "Malawi",
                    "Mali",
                    "Mauritius",
                    "Mayotte",
                    "Mozambique",
                    "Namibia",
                    "Niger",
                    "Nigeria",
                    "Rwanda",
                    "Saint Helena",
                    "Sao Tome and Principe",
                    "Senegal",
                    "Seychelles",
                    "Sierra Leone",
                    "South Africa",
                    "South Sudan",
                    "Swaziland",
                    "Tanzania, United Republic of",
                    "Togo",
                    "Uganda",
                    "Western Sahara",
                    "Zambia",
                    "Zimbabwe",
                    "RГ©union",
                    "Democratic Republic of the Congo",
                    "Republic of the Congo",
                    "Libyan Arab Jamahiriya",
                    "Tanzania", 
                ]
            },
            {
                region: "asia_and_pacific",
                countries: [
                    "Afghanistan",
                    "American Samoa",
                    "Antarctica",
                    "Asia/Pacific Region",
                    "Azerbaijan",
                    "Bangladesh",
                    "Bhutan",
                    "British Indian Ocean Territory",
                    "Brunei Darussalam",
                    "Cambodia",
                    "China",
                    "Christmas Island",
                    "Cocos (Keeling) Islands",
                    "Cook Islands",
                    "Fiji",
                    "French Polynesia",
                    "French Southern Territories",
                    "Guam",
                    "Heard Island and McDonald Islands",
                    "Hong Kong",
                    "India",
                    "Indonesia",
                    "Japan",
                    "Kazakhstan",
                    "Kiribati",
                    "Kyrgyzstan",
                    "Lao People's Democratic Republic",
                    "Macau",
                    "Malaysia",
                    "Maldives",
                    "Marshall Islands",
                    "Micronesia, Federated States of",
                    "Mongolia",
                    "Myanmar",
                    "Nauru",
                    "Nepal",
                    "New Caledonia",
                    "Niue",
                    "Norfolk Island",
                    "North Korea",
                    "Northern Mariana Islands",
                    "Pakistan",
                    "Palau",
                    "Papua New Guinea",
                    "Philippines",
                    "Pitcairn Islands",
                    "Reunion",
                    "Samoa",
                    "Singapore",
                    "Solomon Islands",
                    "South Korea",
                    "Sri Lanka",
                    "Syrian Arab Republic",
                    "Taiwan",
                    "Tajikistan",
                    "Thailand",
                    "Timor-Leste",
                    "Tokelau",
                    "Tonga",
                    "Turkmenistan",
                    "Tuvalu",
                    "United States Minor Outlying Islands",
                    "Uzbekistan",
                    "Vanuatu",
                    "Vietnam",
                    "Wallis and Futuna",
                    "Macao",
                    "Brunei",
                    "Laos",
                    "Pitcairn", 
                ]
            },
            {
                region: "australia_and_new_zealand",
                countries: [
                    "Australia",
                    "New Zealand"
                ]
            },
            {
                region: "british_isles",
                countries: [
                    "Ireland",
                    "Isle of Man",
                    "United Kingdom"
                ]
            },
            {
                region: "eastern_europe",
                countries: [
                    "Albania",
                    "Belarus",
                    "Bosnia and Herzegovina",
                    "Bulgaria",
                    "Croatia",
                    "Czech Republic",
                    "Estonia",
                    "Georgia",
                    "Hungary",
                    "Latvia",
                    "Lithuania",
                    "Macedonia",
                    "Moldova, Republic of",
                    "Montenegro",
                    "Poland",
                    "Romania",
                    "Serbia",
                    "Slovakia",
                    "Slovenia",
                    "Ukraine",
                    "Moldova",
                    "Kosovo",
                    "Russian Federation",
                    "Russia", 
                ]
            },
            {
                region: "latin_america",
                countries: [
                    "Anguilla",
                    "Antigua and Barbuda",
                    "Argentina",
                    "Aruba",
                    "Bahamas",
                    "Barbados",
                    "Belize",
                    "Bolivia",
                    "Bouvet Island",
                    "Brazil",
                    "Cayman Islands",
                    "Chile",
                    "Colombia",
                    "Costa Rica",
                    "Cuba",
                    "Dominica",
                    "Dominican Republic",
                    "Ecuador",
                    "El Salvador",
                    "Falkland Islands (Malvinas)",
                    "French Guiana",
                    "Grenada",
                    "Guadeloupe",
                    "Guatemala",
                    "Guyana",
                    "Haiti",
                    "Honduras",
                    "Jamaica",
                    "Martinique",
                    "Mexico",
                    "Montserrat",
                    "Netherlands Antilles",
                    "Nicaragua",
                    "Panama",
                    "Paraguay",
                    "Peru",
                    "Puerto Rico",
                    "Saint Barthelemy",
                    "Saint Kitts and Nevis",
                    "Saint Lucia",
                    "Saint Martin",
                    "Saint Vincent and the Grenadines",
                    "South Georgia and the South Sandwich Islands",
                    "Suriname",
                    "Trinidad and Tobago",
                    "Turks and Caicos Islands",
                    "Uruguay",
                    "Venezuela",
                    "Virgin Islands, British",
                    "Virgin Islands, U.S.",
                    "Saint Martin (French Part)",
                    "Saint BarthГ©lemy",
                    "Bonaire, Sint Eustatius and Saba",
                    "CuraГ§ao",
                    "Sint Maarten (Dutch Part)", 
                ]
            },
            {
                region: "middle_east",
                countries: [
                    "Algeria",
                    "Bahrain",
                    "Comoros",
                    "Djibouti",
                    "Mauritania",
                    "Morocco",
                    "Palestinian Territory",
                    "Somalia",
                    "Sudan",
                    "Tunisia",
                    "Palestine",
                    "Israel",
                    "Egypt",
                    "Iran, Islamic Republic of",
                    "Iraq",
                    "Jordan",
                    "Kuwait",
                    "Lebanon",
                    "Libya",
                    "Oman",
                    "Qatar",
                    "Saudi Arabia",
                    "United Arab Emirates",
                    "Yemen",
                    "Iran",
                    "Syria", 
                ]
            },
            {
                region: "north_america",
                countries: [
                    "Bermuda",
                    "Canada",
                    "Saint Pierre and Miquelon",
                    "United States", 
                ]
            },
            {
                region: "northern_europe",
                countries: [
                    "Aland Islands",
                    "Denmark",
                    "Faroe Islands",
                    "Finland",
                    "Greenland",
                    "Iceland",
                    "Norway",
                    "Svalbard and Jan Mayen",
                    "Sweden",
                    "Г…land Islands", 
                ]
            },
            {
                region: "southern_europe",
                countries: [
                    "Armenia",
                    "Cyprus",
                    "Gibraltar",
                    "Greece",
                    "Holy See (Vatican City State)",
                    "Italy",
                    "Malta",
                    "Monaco",
                    "Portugal",
                    "San Marino",
                    "Spain",
                    "Turkey", 
                ]
            },
            {
                region: "western_europe",
                countries: [
                    "Andorra",
                    "Austria",
                    "Belgium",
                    "France",
                    "France, Metropolitan",
                    "Germany",
                    "Guernsey",
                    "Jersey",
                    "Liechtenstein",
                    "Luxembourg",
                    "Netherlands",
                    "Switzerland", 
                ]
            }, 
        ];
        function R(e10) {
            var t9 = Object(c4.useState)(null), n = i2()(t9, 2), a = n[0], r = n[1], o = T(e10), s = i2()(o, 2), l = s[0], u = s[1];
            return Object(c4.useEffect)(function() {
                if (Object(k.c)(u)) {
                    var e = "global";
                    (null == l ? void 0 : l.country) && I.some(function(t) {
                        if (t.countries.includes(l.country)) return e = t.region, !0;
                    }), r(e);
                }
            }, [
                r,
                l,
                u
            ]), [
                a,
                u
            ];
        }
        var M = n3(39), D = n3(55), A = function(e, t) {
            return Object(c4.useCallback)(y()(v1.a.mark(function a7() {
                var r;
                return v1.a.wrap(function(a8) {
                    for(;;)switch(a8.prev = a8.next){
                        case 0:
                            return r = {
                            }, a8.next = 3, Promise.all([
                                n3.e(1),
                                n3.e(203)
                            ]).then(n3.bind(null, 1745)).then(function() {
                                var a9 = y()(v1.a.mark(function a10(i) {
                                    var c, s, l, u, d, f, m;
                                    return v1.a.wrap(function(a) {
                                        for(;;)switch(a.prev = a.next){
                                            case 0:
                                                c = null, a.t0 = e, a.next = a.t0 === D.a.MaturityAssessmentReport ? 4 : a.t0 === D.a.RemoteReadinessResult ? 10 : a.t0 === D.a.EngineeringManagerReport ? 16 : 22;
                                                break;
                                            case 4:
                                                return a.next = 6, Promise.all([
                                                    n3.e(0),
                                                    n3.e(1),
                                                    n3.e(2),
                                                    n3.e(63),
                                                    n3.e(205), 
                                                ]).then(n3.bind(null, 2283));
                                            case 6:
                                                return s = a.sent, l = s.default, c = l, a.abrupt("break", 22);
                                            case 10:
                                                return a.next = 12, Promise.all([
                                                    n3.e(0),
                                                    n3.e(1),
                                                    n3.e(2),
                                                    n3.e(206), 
                                                ]).then(n3.bind(null, 2280));
                                            case 12:
                                                return u = a.sent, d = u.default, c = d, a.abrupt("break", 22);
                                            case 16:
                                                return a.next = 18, Promise.all([
                                                    n3.e(0),
                                                    n3.e(1),
                                                    n3.e(2),
                                                    n3.e(63),
                                                    n3.e(204), 
                                                ]).then(n3.bind(null, 2279));
                                            case 18:
                                                return f = a.sent, m = f.default, c = m, a.abrupt("break", 22);
                                            case 22:
                                                return a.prev = 22, a.next = 25, i.pdf({
                                                    initialValue: o2.a.createElement(c, t)
                                                }).toBlob();
                                            case 25:
                                                r = a.sent, a.next = 32;
                                                break;
                                            case 28:
                                                throw a.prev = 28, a.t1 = a.catch(22), M.a.error("Error creating a PDF", {
                                                    error: a.t1
                                                }), a.t1;
                                            case 32:
                                                return a.abrupt("return", r);
                                            case 33:
                                            case "end":
                                                return a.stop();
                                        }
                                    }, a10, null, [
                                        [
                                            22,
                                            28
                                        ]
                                    ]);
                                }));
                                return function() {
                                    return a9.apply(this, arguments);
                                };
                            }());
                        case 3:
                            return a8.abrupt("return", r);
                        case 4:
                        case "end":
                            return a8.stop();
                    }
                }, a7);
            })), [
                e,
                t
            ]);
        }, U = n3(115), z = n3(40), q = n3.n(z), V = [
            "click",
            "keypress",
            "keydown",
            "load",
            "mousemove",
            "scroll",
            "touchmove",
            "touchstart", 
        ];
        function B(e11) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V, n = Object(c4.useState)(!1), a = i2()(n, 2), r = a[0], o = a[1], s = Object(c4.useRef)(null);
            Object(c4.useEffect)(function() {
                return s.current = setTimeout(function() {
                    return o(!0);
                }, e11), function() {
                    return clearTimeout(s.current);
                };
            }, [
                e11,
                s
            ]);
            var l = Object(c4.useCallback)(q()(function() {
                o(!1), clearTimeout(s.current), s.current = setTimeout(function() {
                    return o(!0);
                }, e11);
            }, 300), [
                o,
                s
            ]);
            return Object(c4.useEffect)(function() {
                return t.forEach(function(e) {
                    document.addEventListener(e, l);
                }), function() {
                    return t.forEach(function(e) {
                        document.removeEventListener(e, l);
                    });
                };
            }, [
                t,
                l
            ]), [
                r
            ];
        }
        var G = n3(124), F = n3(88), H = (n3(24), n3(12)), W = n3(79);
        function K(e12, t) {
            var n6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            }, a11 = n6.preventSurpass, r = void 0 !== a11 && a11, o3 = n6.defaultDisplay, s = void 0 === o3 ? "block" : o3, l = Object(c4.useRef)(f1()(Array(e12.length)).map(function() {
                return Object(c4.createRef)();
            })), u = Object(W.b)(_()({
            }, "(min-width: ".concat(H.b.DESKTOP, ")"), !0), !1), d3 = Object(c4.useState)(0), m = i2()(d3, 2), p = m[0], b = m[1];
            return Object(c4.useEffect)(function() {
                var n, a, c, o = function(e) {
                    return l.current[e];
                }, d = function(e) {
                    return e.current ? e.current.getBoundingClientRect().height : 0;
                };
                if (l.current.map(function(e) {
                    return e.current.style.display = s;
                }), b(0), u) {
                    a = (n = i2()(t, 2))[0], c = n[1];
                    for(var f = e12.length - 1; f >= 0 && d(c) - d(a) > (r ? d(o(f)) : 0);)o(f).current.style.display = "none", b(function(e) {
                        return e + 1;
                    }), f--;
                }
            }, [
                s,
                u,
                e12.length,
                r,
                t
            ]), [
                l,
                p
            ];
        }
        function Y(e13, t10) {
            var n = Object(c4.useRef)(null), a12 = Object(c4.useCallback)(function(t) {
                var a;
                null !== (a = n.current) && void 0 !== a && a.contains(t.target) || e13 && e13();
            }, [
                e13,
                n
            ]);
            return Object(c4.useEffect)(function() {
                var e = (null == t10 ? void 0 : t10.current) || document.body;
                return e.addEventListener("mousedown", a12), function() {
                    return e.removeEventListener("mousedown", a12);
                };
            }, [
                a12,
                t10
            ]), n;
        }
        var Q = n3(108);
        function J(e, t11) {
            var n = Object(c4.useState)(t11), a = i2()(n, 2), r = a[0], o = a[1];
            return Object(c4.useEffect)(function() {
                var t = new URLSearchParams(location.search).get(e);
                t && o(t);
            }, [
                e
            ]), r;
        }
        function X(e14, t12) {
            var n7 = Object(c4.useState)(""), a = i2()(n7, 2), r = a[0], o = a[1], s = Object(c4.useState)(!1), l = i2()(s, 2), u = l[0], d = l[1], f = Object(c4.useState)(k.a.INITIAL), m = i2()(f, 2), p = m[0], b = m[1];
            return Object(c4.useEffect)(function() {
                if (t12) {
                    var n = new URLSearchParams(window.location.search).get("qid");
                    o("https://".concat(e14, "/export/quiz-report-json?answers_list_key=").concat(n));
                }
            }, [
                e14,
                t12
            ]), Object(c4.useEffect)(function() {
                if (r) {
                    var e15 = Object(L.b)(r);
                    b(k.a.LOADING), e15.subscribe(function(e, t) {
                        b(t), t === k.a.SUCCESS && d(e);
                    });
                }
            }, [
                r
            ]), [
                u,
                p
            ];
        }
        n3(121), n3(36), n3(92);
        var Z = n3(200), $ = n3.n(Z), ee = function() {
            var e = function() {
            }, t13 = 0, n8 = function() {
                var n, a, r, i, c, o, s, l, u = (o = (null === (n = document.documentElement) || void 0 === n ? void 0 : n.scrollTop) || (null === (a = document.body) || void 0 === a ? void 0 : a.scrollTop), (s = (null === (r = document.documentElement) || void 0 === r ? void 0 : r.scrollHeight) || (null === (i = document.body) || void 0 === i ? void 0 : i.scrollHeight)) <= (l = null === (c = document.documentElement) || void 0 === c ? void 0 : c.clientHeight) ? 100 : Math.round(o / (s - l) * 100));
                e(u, t13), t13 = u;
            };
            return document.addEventListener("scroll", n8), {
                onChange: function(t) {
                    e = t;
                },
                clean: function() {
                    document.removeEventListener("scroll", n8);
                }
            };
        }, te = function(e16, t14) {
            var n9 = o2.a.useRef({
                onFinalLevelReached: e16,
                levels: t14,
                currentLevel: 0
            }), a13 = function() {
                n9.current.currentLevel > 0 && n9.current.onFinalLevelReached(n9.current.currentLevel);
            };
            o2.a.useEffect(function() {
                var e17 = function() {
                    var e18 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
                        10,
                        25,
                        50,
                        75,
                        90,
                        100
                    ], t15 = ee(), n = e18, a14 = function(e19) {
                        return function(t16) {
                            var a = n.filter(function(e) {
                                return t16 >= e - 1;
                            });
                            a.length && (a.forEach(function(t) {
                                return e19(t);
                            }), n = $.a.apply(void 0, [
                                n
                            ].concat(f1()(a))));
                        };
                    };
                    return {
                        onLevelReached: function(e) {
                            t15.onChange(a14(e));
                        },
                        clean: function() {
                            t15.clean();
                        }
                    };
                }(n9.current.levels);
                return window.addEventListener("beforeunload", a13, !1), e17.onLevelReached(function(e) {
                    n9.current.currentLevel = e;
                }), function() {
                    e17.clean(), window.removeEventListener("beforeunload", a13);
                };
            }, []);
        };
        function ne(e, t17) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t17 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function ae(e) {
            var t18, n;
            for(t18 = 1; t18 < arguments.length; t18++)n = null != arguments[t18] ? arguments[t18] : {
            }, t18 % 2 ? ne(Object(n), !0).forEach(function(t) {
                _()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var re = function(e, t) {
            return ae(ae({
            }, e), t);
        };
        function ie() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            };
            return Object(c4.useReducer)(re, e);
        }
        function ce(e20) {
            var t = Object(c4.useRef)(null), n10 = Object(c4.useState)(0), a15 = i2()(n10, 2), r4 = a15[0], o4 = a15[1], s5 = Object(c4.useState)(!0), l = i2()(s5, 2), u = l[0], d = l[1], f = Object(c4.useCallback)(function() {
                var n = t.current, a = n.firstChild, r = n.scrollHeight, i = getComputedStyle(a), c = i.marginTop, o = i.marginBottom, s = a.offsetHeight + parseInt(c) + parseInt(o);
                return Math.ceil(r / s) >= e20 + 1;
            }, [
                e20
            ]);
            return Object(c4.useEffect)(function() {
                var e, n = t.current.lastChild;
                if (n) {
                    if (n.style.display = "", !f()) return n.style.display = "none", void d(!1);
                    for(var a = 0; f() && a < 50;){
                        if ((e = t.current.childNodes).length > 2) {
                            var r = e[e.length - 2];
                            t.current.removeChild(r);
                        }
                        a++, o4(a);
                    }
                    d(!1);
                }
            }, [
                f,
                e20
            ]), {
                containerRef: t,
                loading: u,
                removedCount: r4
            };
        }
        var oe = n3(187), se = n3.n(oe);
        function le(e, t, n) {
            var a;
            return window.pageYOffset > (null === (a = e || t) || void 0 === a ? void 0 : a.offsetTop) - n;
        }
        function ue(e21, t19) {
            var n = t19 || {
            }, a = n.activationOffset, r = void 0 === a ? 0 : a, o = n.throttleInterval, s = void 0 === o ? 300 : o, l = n.controlRef, u = void 0 === l ? null : l, d = n.probeFn, f = void 0 === d ? le : d, m = Object(c4.useState)(!1), p = i2()(m, 2), b = p[0], g = p[1], v = Object(c4.useCallback)(se()(function() {
                var t = f(null == u ? void 0 : u.current, null == e21 ? void 0 : e21.current, r);
                g(t);
            }, s), [
                e21,
                u,
                r,
                f
            ]);
            return Object(c4.useEffect)(function() {
                var e;
                v();
                var t = null !== (e = null == u ? void 0 : u.current) && void 0 !== e ? e : window;
                return t.addEventListener("scroll", v), function() {
                    return t.removeEventListener("scroll", v);
                };
            }, [
                v,
                u
            ]), b;
        }
        function de(e22) {
            var t = Object(c4.useState)(e22), n = i2()(t, 2), a = n[0], r = n[1], o = Object(c4.useCallback)(function(e) {
                r("boolean" == typeof e ? e : !a);
            }, [
                a
            ]);
            return [
                a,
                o
            ];
        }
        var fe = n3(28);
        function me() {
            var e23 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll_depth", t20 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "scroll_distance_percentage", n = Object(c4.useRef)(0);
            Object(c4.useEffect)(function() {
                var e24 = function() {
                    var e = document.documentElement, t = document.body, a = e.scrollTop || t.scrollTop, r = e.scrollHeight || t.scrollHeight, i = e.clientHeight, c = Math.floor(a / (r - i) * 100);
                    c > n.current && (n.current = c);
                };
                return window.addEventListener("scroll", e24, !1), function() {
                    return window.removeEventListener("scroll", e24);
                };
            }, [
                n,
                e23
            ]), Object(c4.useEffect)(function() {
                var a = function() {
                    Object(fe.d)(e23, t20, void 0, {
                        value: n.current,
                        transport: "beacon"
                    });
                };
                return window.addEventListener("beforeunload", a, !1), function() {
                    return window.removeEventListener("beforeunload", a);
                };
            }, [
                e23,
                t20,
                n
            ]);
        }
        function pe() {
            var e25 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0, n = e25.filter(function(e) {
                return e.name === t;
            }), a = i2()(n, 1), r = a[0];
            return r ? r.variant : null;
        }
        function be() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100, t = "object" == typeof window, n = Object(c4.useCallback)(function() {
                return {
                    width: t ? window.innerWidth : void 0,
                    height: t ? window.innerHeight : void 0
                };
            }, [
                t
            ]), a16 = Object(c4.useState)(n), r = i2()(a16, 2), o = r[0], s = r[1];
            return Object(c4.useEffect)(function() {
                if (!t) return !1;
                var a = q()(function() {
                    return s(n());
                }, e);
                return window.addEventListener("resize", a), function() {
                    window.removeEventListener("resize", a);
                };
            }, [
                e,
                t,
                n
            ]), o;
        }
        function ge() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100, t = "object" == typeof window, n = Object(c4.useCallback)(function() {
                return t ? window.innerWidth : void 0;
            }, [
                t
            ]), a17 = Object(c4.useState)(n), r = i2()(a17, 2), o = r[0], s = r[1];
            return Object(c4.useEffect)(function() {
                if (!t) return !1;
                var a = q()(function() {
                    return s(n());
                }, e);
                return window.addEventListener("resize", a), function() {
                    window.removeEventListener("resize", a);
                };
            }, [
                e,
                t,
                n
            ]), o;
        }
        var ve = n3(95), he = n3.n(ve), ye = function(e, t) {
            return function(n) {
                var a = "toggle";
                he()(n) || (a = n ? "add" : "remove"), e.classList[a](t);
            };
        };
        function Ee(e, t) {
            return Object(c4.useEffect)(function() {
                ye(document.body, t)(e);
            }, [
                e,
                t
            ]), function() {
                return document.body.classList.remove(t);
            };
        }
    },
    100: function(e26, t21, n) {
        "use strict";
        n(27), n(33);
        var a = n(0), r = n.n(a), i = n(11), c = n(61);
        t21.a = function() {
            if (!Object(i.a)()) return r.a.createElement(c.a, null);
            var e = r.a.lazy(function() {
                return n.e(202).then(n.bind(null, 246));
            }), t = r.a.lazy(function() {
                return n.e(201).then(n.bind(null, 247));
            });
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(r.a.Suspense, {
                fallback: r.a.createElement(c.a, null)
            }, r.a.createElement(e, null)), r.a.createElement(r.a.Suspense, {
                fallback: r.a.createElement(c.a, null)
            }, r.a.createElement(t, null)));
        };
    },
    101: function(e27, t22, n11) {
        "use strict";
        n11(44), n11(73);
        var a18 = n11(2), r5 = n11.n(a18), i3 = n11(1), c5 = n11.n(i3), o5 = n11(0), s6 = n11.n(o5), l4 = n11(12), u4 = n11(21), d4 = n11(53), f2 = n11(113), m2 = n11(127), p2 = n11(10), b2 = n11(86), g2 = (n11(19), n11(17), n11(14), n11(25), n11(26), n11(20), n11(15), n11(4)), v2 = n11.n(g2), h1 = (n11(9), n11(7)), y1 = n11.n(h1), E1 = function(e28) {
            var t = e28.body, n = e28.delay, a = void 0 === n ? 0 : n, r = y1()(e28, [
                "body",
                "delay"
            ]), i = function() {
                var e = document.createElement("script");
                for(var n in e.text = t, r)e[n] = r[n];
                document.body.appendChild(e);
            };
            return Object(o5.useEffect)(function() {
                return a ? setTimeout(i, a) : i();
            }, []), null;
        }, _1 = (n11(23), function(e29) {
            var t = e29.baseUrl, n = e29.withCredentials, a = e29.jsClientUrl, r = e29.data, i = void 0 !== r && r;
            return "\n  window.onAppinfoLoad = function () {\n    window.appinfo.grab('".concat(t, "', {\n      data: ").concat(JSON.stringify(i ? function(e) {
                return {
                    lp_skill: e.lpSkill,
                    lp_skill_title: e.lpSkillTitle,
                    lp_skill_role: e.lpSkillRole
                };
            }(i) : {
            }), ",\n      withCredentials: ").concat(n, "\n    });\n  };\n  (function() {\n    var d = document, s = d.createElement('script');\n    s.src = '").concat(a, "';\n    s.setAttribute('data-timestamp', +new Date());\n    (d.head || d.body).appendChild(s);\n  })();\n");
        }), O1 = n11(37), j1 = n11.n(O1), w1 = '\nSentry.onLoad(function() {\n  Sentry.init({\n    release: "'.concat(m2.codeVersion, '",\n    environment: "').concat(u4.appEnv, '",\n    attachStacktrace: true\n  });\n});\n'), S1 = function() {
            return s6.a.createElement(j1.a, null, s6.a.createElement("script", {
                src: "https://js.sentry-cdn.com/".concat(u4.sentryPublicKey, ".min.js"),
                crossOrigin: "anonymous",
                "data-lazy": "no",
                onLoad: w1
            }));
        }, k1 = function(e) {
            var t = e.portalId, n = e.delay;
            return s6.a.createElement(s6.a.Fragment, null, s6.a.createElement(E1, {
                src: "//js.hs-scripts.com/".concat(t, ".js"),
                delay: n
            }), s6.a.createElement(E1, {
                body: "var _hsq = window._hsq = window._hsq || [];"
            }));
        }, N1 = function(e) {
            var t, n, a = e.delay, r = y1()(e, [
                "delay"
            ]);
            return s6.a.createElement(E1, {
                body: (t = r, n = t.pixelId, "\n  !function(f,b,e,v,n,t,s)\n  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n  n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t,s)}(window,document,'script',\n  'https://connect.facebook.net/en_US/fbevents.js');\n\n  fbq('init', '".concat(n, "');\n  fbq('track', 'ViewContent');\n")),
                delay: a
            });
        }, C1 = function(e) {
            var t, n, a, r = e.delay, i = y1()(e, [
                "delay"
            ]);
            return s6.a.createElement(E1, {
                body: (t = i, n = t.id, a = t.envGetParams, "\n  (function(w,d,s,l,i,k){\n    w[l]=w[l]||[];\n    w[l].push({\n      'gtm.start': new Date().getTime(),\n      event:'gtm.js'\n    });\n    var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),\n        dl=l!='dataLayer'?'&l='+l:'';\n    j.async=true;\n    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+k;\n    f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer','".concat(n, "','").concat(a, "');\n")),
                delay: r
            });
        }, P1 = (n11(62), n11(27), n11(36), n11(106), n11(70), n11(65)), x1 = n11(85);
        function L1(e, t23) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t23 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        n11(94), n11(51);
        var T1 = function(e30) {
            var t24, n12, a19, r, i4, c6, o, s, l = e30.orgKey, u = e30.platformSessionUrl, d = e30.chameleonExperiments;
            t24 = l, window._fs_debug = !1, window._fs_host = "www.fullstory.com", window._fs_org = t24, n12 = window, a19 = document, r = "script", i4 = "user", (o = n12.FS = function(e, t) {
                o.q ? o.q.push([
                    e,
                    t
                ]) : o._api(e, t);
            }).q = [], (c6 = a19.createElement(r)).async = 1, c6.src = "https://" + _fs_host + "/s/fs.js", (s = a19.getElementsByTagName(r)[0]).parentNode.insertBefore(c6, s), o.identify = function(e, t) {
                o(i4, {
                    uid: e
                }), t && o(i4, t);
            }, o.setUserVars = function(e) {
                FS(i4, e);
            }, o.identifyAccount = function(e, t) {
                c6 = "account", (t = t || {
                }).acctId = e, FS(c6, t);
            }, o.clearUserCookie = function(e, t) {
                for(e = a19.domain; a19.cookie = "fs_uid=;domain=" + e + ";path=/;expires=" + new Date(0), !((t = e.indexOf(".")) < 0);)e = e.slice(t + 1);
            }, Object(x1.a)(u, function(e31) {
                var t25 = function(e) {
                    for(var t, n, a, r, i = {
                        chameleonUuid_str: Object(P1.a)("chameleon_identity")
                    }, c = 0; c < e.length; c++)n = (t = e[c]).name, a = t.variant, i[r = n, r.replace(/(_[a-z])/gi, function(e) {
                        return e.replace("_", "").toUpperCase();
                    }) + "_str"] = a;
                    return i;
                }(d);
                e31 ? window.FS.identify(e31.role_id, function(e) {
                    var t26, n;
                    for(t26 = 1; t26 < arguments.length; t26++)n = null != arguments[t26] ? arguments[t26] : {
                    }, t26 % 2 ? L1(Object(n), !0).forEach(function(t) {
                        v2()(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L1(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                    return e;
                }({
                    displayName: e31.full_name,
                    email: e31.email,
                    role: e31.role_type
                }, t25)) : window.FS.setUserVars(t25);
            });
        }, I1 = function() {
            return JSON.parse(localStorage.getItem("toptal_fullstory_enabled"));
        }, R = n11(28), M1 = [
            "Home",
            "SEO Skill Pages",
            "Vertical Landing Page",
            "Enterprise"
        ], D1 = function(e) {
            var t = e.delay, n = e.group;
            return M1.includes(n) ? s6.a.createElement(E1, {
                body: "\n(function (c, p, d, u, id, i) {\n  id = ''; // Optional Custom ID for user in your system\n  u = 'https://tracking.g2crowd.com/attribution_tracking/conversions/' + c + '.js?p=' + encodeURI(p) + '&e=' + id;\n  i = document.createElement('script');\n  i.type = 'application/javascript';\n  i.async = true;\n  i.src = u;\n  d.getElementsByTagName('head')[0].appendChild(i);\n  }(\"4822\", document.location.href, document));\n",
                delay: t
            }) : null;
        }, A = n11(82), U = [
            "Skill pages",
            "SEO Skill Pages",
            "City skill"
        ], z = [
            "/django",
            "/designers/sketch"
        ];
        function q(e, t27) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t27 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        var V = function(e32) {
            var t28 = e32.appinfoSettings, n13 = e32.hubspotSettings, a20 = e32.facebookSettings, i5 = e32.fullstorySettings, l = e32.googleAnalyticsSettings, u = e32.googleTagManagerSettings, d = e32.trackingAllowed, f = e32.renderProductionOnlyScripts, m = e32.chameleonExperiments, p = e32.platformSessionUrl, b = e32.platformReferrersUrl, g = e32.publicUrl, h = e32.codeVersions, y = e32.track15SecondsRead, O = void 0 === y || y, j = l.group, w = function(e) {
                if (!e || "object" != typeof e) return 0;
                var t = e.publicUrl, n = e.group;
                if (!t || !n) return 0;
                if (!U.includes(n)) return 0;
                var a = Object(A.a)(t);
                return z.includes(a) ? 0 : 15000;
            }({
                publicUrl: g,
                group: j
            });
            return Object(o5.useEffect)(function() {
                var e = l.applicationId, t = l.group;
                Object(R.a)({
                    applicationId: e,
                    group: t,
                    chameleonExperiments: m,
                    platformSessionUrl: p,
                    platformReferrersUrl: b,
                    codeVersions: h,
                    track15SecondsRead: O
                });
            }, [
                m,
                l,
                b,
                p,
                h,
                O
            ]), Object(o5.useEffect)(function() {
                d && i5 && f && (function(e33) {
                    var t = e33.orgKey, n = e33.rate, a = e33.platformSessionUrl, r = e33.chameleonExperiments, i = r.filter(function(e) {
                        return "phoenix_fullstory_override" === e.name;
                    }), o = c5()(i, 1)[0];
                    if (o && "enabled" === o.variant && T1({
                        orgKey: t,
                        platformSessionUrl: a,
                        chameleonExperiments: r
                    }), null == I1()) {
                        var s = Math.random() <= n;
                        localStorage.setItem("toptal_fullstory_enabled", s.toString());
                    }
                    I1() && T1({
                        orgKey: t,
                        platformSessionUrl: a,
                        chameleonExperiments: r
                    });
                })(function(e) {
                    var t29, n;
                    for(t29 = 1; t29 < arguments.length; t29++)n = null != arguments[t29] ? arguments[t29] : {
                    }, t29 % 2 ? q(Object(n), !0).forEach(function(t) {
                        v2()(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                    return e;
                }({
                    platformSessionUrl: p,
                    chameleonExperiments: m
                }, i5));
            }, [
                p,
                m,
                i5,
                d,
                f
            ]), s6.a.createElement(s6.a.Fragment, null, s6.a.createElement(E1, {
                body: _1(t28)
            }), d && s6.a.createElement(s6.a.Fragment, null, s6.a.createElement(S1, null), s6.a.createElement(k1, r5()({
                delay: w
            }, n13)), s6.a.createElement(N1, r5()({
                delay: w
            }, a20)), s6.a.createElement(C1, r5()({
                delay: w
            }, u)), s6.a.createElement(D1, {
                group: j
            })));
        }, B = (n11(74), n11(33), n11(13)), G = n11(69), F = n11(11);
        var H = function(e34) {
            var t30 = e34.fullscreen, a21 = e34.join, i6 = e34.isWhiteListed, l5 = e34.companyEmailValidationsUrl, u5 = e34.chameleonExperiments, d5 = e34.slug, f3 = t30 ? "fullscreen" : "join", m3 = function(e35) {
                var t = Object(o5.useState)(!0), n = c5()(t, 2), a = n[0], r = n[1], i = Object(p2.n)(60000), s = c5()(i, 1)[0], l = Object(p2.f)(), u = c5()(l, 2), d = u[0], f = u[1], m = Object(o5.useState)(!1), b = c5()(m, 2), g = b[0], v = b[1];
                Object(o5.useEffect)(function() {
                    setTimeout(function() {
                        return r(!!Object(P1.a)("viewedBounceModal"));
                    }, 3000);
                }, []);
                var h, y, E = Object(o5.useCallback)(function() {
                    return function() {
                        a || (r(!0), v(!0), Object(P1.c)("viewedBounceModal", !0, {
                            maxAge: 7776000
                        }), Object(R.b)() && Object(R.b)().trackBounceModalView(e35));
                    };
                }, [
                    a,
                    e35
                ]), _ = Object(o5.useCallback)(function() {
                    v(!1), f(!1);
                }, [
                    f
                ]);
                return h = E("time_on_site"), y = Object(o5.useCallback)(function(e) {
                    e.clientY <= 20 && null === e.relatedTarget && h();
                }, [
                    h
                ]), Object(o5.useEffect)(function() {
                    if (Object(F.a)()) return document.addEventListener("mouseout", y), function() {
                        return document.removeEventListener("mouseout", y);
                    };
                }, [
                    y
                ]), Object(o5.useEffect)(function() {
                    s && E("inactivity")();
                }, [
                    a,
                    s,
                    E
                ]), {
                    visible: g,
                    handleClose: _,
                    isDebug: d
                };
            }(f3), b3 = m3.visible, g3 = m3.handleClose, v3 = m3.isDebug, h2 = Object(o5.useMemo)(function() {
                return s6.a.lazy(function() {
                    return "fullscreen" === f3 ? Promise.all([
                        n11.e(0),
                        n11.e(198)
                    ]).then(n11.bind(null, 2281)) : n11.e(200).then(n11.bind(null, 2277));
                });
            }, [
                f3
            ]);
            if (!(i6 && b3 || v3)) return null;
            var y2 = "fullscreen" === f3 ? t30 : a21;
            return s6.a.createElement(o5.Suspense, {
                fallback: null
            }, s6.a.createElement(h2, r5()({
                open: b3 || v3,
                onClose: g3,
                companyEmailValidationsUrl: l5,
                chameleonExperiments: u5,
                slug: d5
            }, y2)));
        }, W = function(e) {
            var t = e.geoTargetUrl, n = e.platformSessionUrl, a = y1()(e, [
                "geoTargetUrl",
                "platformSessionUrl"
            ]), i = Object(p2.j)(t), o = c5()(i, 2), u = o[0], d = o[1], f = Object(p2.d)(n), m = c5()(f, 1)[0];
            return m !== p2.a.LoggedIn && m !== p2.a.Loading && Object(B.c)(d) ? s6.a.createElement(G.a, {
                query: "(min-width: ".concat(l4.b.DESKTOP, ")")
            }, s6.a.createElement(H, r5()({
            }, a, {
                isWhiteListed: !!u && u.white_listed
            }))) : null;
        };
        t22.a = function(e36) {
            var t31 = e36.requestMetadata, n14 = t31.vendorScriptsSettings, a22 = t31.chameleonExperiments, i7 = t31.platformSessionUrl, g = t31.platformReferrersUrl, v = t31.geoTargetUrl, h = t31.companyEmailValidationsUrl, y = t31.codeVersions.blackfishCodeVersion, E = e36.bounceModals, _ = e36.vertical, O = e36.slug, j = e36.publicUrl, w = e36.trackScrollDepth, S = e36.showCookieBanner, k = e36.track15SecondsRead, N = Object(p2.s)(), C = Object(o5.useState)(null), P = c5()(C, 2), x = P[0], L = P[1], T = Object(o5.useState)(!1), I = c5()(T, 2), M = I[0], D = I[1];
            return Object(p2.B)(), Object(o5.useEffect)(function() {
                N && (L(N.fullstorySettings), D(Object(d4.a)(N.cookiePolicyType)));
            }, [
                N
            ]), Object(p2.g)("click", function(e37) {
                if (!e37.stopGAPropagation) {
                    var t32, n15 = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                        if (e.closest) return e.closest(t);
                        if (e.msMatchesSelector) for(var a = 0, r = e; a < n && r; a++){
                            if (r.msMatchesSelector(t)) return r;
                            r = r.parentElement;
                        }
                        return null;
                    }(e37.target, "[data-ga-category]");
                    if (n15) {
                        var a23 = n15.dataset, r6 = a23.gaCategory, i = a23.gaEvent, c = a23.gaLabel;
                        if (r6 && Object(R.b)()) {
                            var o = !!(t32 = n15.href) && ![
                                "_blank",
                                "_parent"
                            ].includes(n15.getAttribute("target"));
                            Object(R.d)(r6, i, c, {
                                transport: "beacon",
                                event_callback: o && Object(f2.a)(function() {
                                    return window.location = t32;
                                })
                            }), o && e37.preventDefault(), e37.shouldStopGAPropagation && (e37.stopGAPropagation = !0);
                        }
                    }
                }
            }), Object(p2.v)(function(e) {
                (null == w ? void 0 : w.gaCategory) && Object(R.d)(w.gaCategory, w.gaEvent || "scroll_depth", e, {
                    non_interaction: !0,
                    transport: "beacon"
                });
            }), s6.a.createElement(s6.a.Fragment, null, N && S && s6.a.createElement(b2.a.Container, r5()({
                pageInfo: N
            }, {
                onAccept: function() {
                    return D(!0);
                }
            })), s6.a.createElement(V, r5()({
                renderProductionOnlyScripts: [
                    l4.a.Production,
                    l4.a.Staging, 
                ].includes(u4.appEnv)
            }, n14, {
                fullstorySettings: x,
                trackingAllowed: M,
                publicUrl: j,
                chameleonExperiments: a22,
                platformSessionUrl: i7,
                platformReferrersUrl: g
            }, {
                codeVersions: {
                    blackfish: y,
                    frontier: m2.commit
                },
                track15SecondsRead: k
            })), E && s6.a.createElement(W, r5()({
            }, E, {
                geoTargetUrl: v,
                companyEmailValidationsUrl: h,
                chameleonExperiments: a22,
                platformSessionUrl: i7,
                vertical: _,
                slug: O
            })));
        };
    },
    102: function(e38, t33, n16) {
        "use strict";
        n16.d(t33, "a", function() {
            return o;
        });
        var a = n16(0), r = n16.n(a), i8 = n16(9), c7 = n16(42), o = (Object(i8.j)(c7.b), Object(a.createContext)({
        }));
        t33.b = function(e) {
            var t = e.children, n = e.sidebarSkillsUrl, i = e.kind, c = e.topSearch, s = Object(a.useMemo)(function() {
                return {
                    kind: i,
                    sidebarSkillsUrl: n,
                    topSearch: c
                };
            }, [
                i,
                n,
                c
            ]);
            return r.a.createElement(o.Provider, {
                children: t,
                value: s
            });
        };
    },
    104: function(e39, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s;
        });
        var a = n(2), r = n.n(a), i = n(0), c = n.n(i), o = n(80), s = function(e) {
            return c.a.createElement("div", r()({
            }, e, {
                id: o.a
            }));
        };
    },
    105: function(e40, t34, n17) {
        "use strict";
        var a24 = n17(2), r = n17.n(a24), i9 = n17(7), c = n17.n(i9), o6 = n17(0), s = n17.n(o6), l6 = n17(3), u6 = n17.n(l6), d = (n17(209), Object(o6.forwardRef)(function(e, t) {
            var n = e.children, a = e.className, i = e.onClick, o = e.as, l = void 0 === o ? "div" : o, u = c()(e, [
                "children",
                "className",
                "onClick",
                "as"
            ]);
            return s.a.createElement(l, r()({
                className: (a ? a + " " : "") + "_1QwxFsxm " + (u && u.className || ""),
                onClick: i,
                ref: t
            }, u), n);
        }));
        d.displayName = "Card", d.propTypes = {
            className: u6.a.string,
            onClick: u6.a.func,
            as: u6.a.string,
            children: u6.a.oneOfType([
                u6.a.arrayOf(u6.a.node),
                u6.a.node
            ]).isRequired
        }, t34.a = d;
    },
    107: function(e41, t35, n18) {
        "use strict";
        var a25 = n18(6), r = n18.n(a25), i = n18(0), c = n18.n(i), o7 = n18(5), s = n18.n(o7), l = (n18(161), {
            "./burger-menu-button.scss": {
                toggle: "GSsufXWr",
                open: "_2K4zc3od"
            }
        });
        t35.a = function(e) {
            var t = e.onToggle, n = e.open, a = e.className, o = Object(i.useCallback)(function() {
                return t(!n);
            }, [
                t,
                n
            ]);
            return c.a.createElement("button", {
                type: "button",
                onClick: o,
                "aria-label": "menu",
                className: (a ? a + " " : "") + r()(s()("toggle", {
                    open: n
                }), l, {
                    handleMissingStyleName: "warn"
                })
            }, c.a.createElement("span", null), c.a.createElement("span", null), c.a.createElement("span", null));
        };
    },
    108: function(e42, t36, n19) {
        "use strict";
        n19.d(t36, "b", function() {
            return o8;
        });
        var a26 = n19(1), r = n19.n(a26), i = n19(0), c = n19(84);
        function o8() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = e.shareUrl, n = Object(i.useState)(), a = r()(n, 2), o = a[0], s = a[1];
            return Object(i.useEffect)(function() {
                Object(c.a)({
                    shareUrl: t
                }).then(s).catch(function() {
                });
            }, [
                t
            ]), o;
        }
        t36.a = o8;
    },
    11: function(e, t, n) {
        "use strict";
        t.a = function() {
            return !0;
        };
    },
    111: function(e43, t37, n20) {
        "use strict";
        n20(24);
        var a27 = n20(2), r = n20.n(a27), i10 = n20(6), c = n20.n(i10), o9 = n20(0), s = n20.n(o9), l = n20(5), u = n20.n(l), d = (n20(9), n20(8)), f = n20(148), m = n20(157), p = (n20(210), {
            "./social-link-list.scss": {
                list: "_2KkykVzB",
                item: "_1ffC2emj",
                link: "yzdVnirF",
                "is-theme-grey": "_1UQKDH6z",
                "is-theme-blue": "_3NypLa63",
                "is-theme-light": "_26W7MbnX"
            }
        }), b = {
            Theme: {
                Light: "light",
                Grey: "grey",
                Blue: "blue"
            }
        }, g = function(e44) {
            var t38 = e44.links, n21 = e44.theme, a = void 0 === n21 ? b.Theme.Light : n21, i = e44.gaCategory, o = e44.gaAction;
            return s.a.createElement("ul", {
                className: c()(u()("list", Object(d.a)({
                    theme: a
                })), p, {
                    handleMissingStyleName: "warn"
                })
            }, t38.map(function(e) {
                var t = e.href, n = e.label;
                return s.a.createElement("li", {
                    key: t + n,
                    className: "_1ffC2emj"
                }, s.a.createElement(f.a, r()({
                    className: "yzdVnirF " + ({
                        href: t,
                        gaCategory: i
                    }.className || ""),
                    "aria-label": n,
                    title: n,
                    target: "_blank",
                    rel: "noreferrer noopener"
                }, {
                    href: t,
                    gaCategory: i
                }, {
                    gaEvent: o,
                    gaLabel: "social_".concat(n, "_button_click")
                }), s.a.createElement(m.a, {
                    type: n,
                    size: "18"
                })));
            }));
        };
        g.Variant = b, t37.a = g;
    },
    1119: function(e, t, n) {
        e.exports = {
            container: "_1WahsURY",
            description: "_1_M0NXug",
            "skill-cards": "_3JEfiilm",
            "skill-list": "_3rvCNUFV"
        };
    },
    112: function(e45, t39, n22) {
        "use strict";
        n22(23), n22(17), n22(269), n22(24), n22(150);
        var a28, r7 = n22(7), i11 = n22.n(r7), c8 = n22(30), o10 = n22.n(c8), s7 = n22(1), l7 = n22.n(s7), u7 = n22(2), d = n22.n(u7), f4 = n22(4), m4 = n22.n(f4), p3 = n22(6), b = n22.n(p3), g = n22(0), v = n22.n(g), h3 = n22(5), y = n22.n(h3), E = (n22(158), n22(9), n22(22)), _ = n22(8), O = n22(12), j = n22(10), w = n22(173), S2 = n22(32), k = n22(11), N = n22(87), C2 = n22(69), P = n22(125), x = n22(162), L = n22(107), T = n22(49), I = n22(178), R1 = n22(29), M2 = (n22(205), n22(120)), D2 = n22.n(M2), A = Object.freeze({
            DESKTOP_XLARGE: D2.a.desktopXLarge || 0
        }), U = (n22(180), {
            "./navbar.scss": {
                navbar: "CwHwCIsY",
                "has-persistent-cta": "_1eu1-118",
                "is-spacious": "_2AUNzqse",
                "logo-container": "_2WQ1bk3l",
                navigation: "_2hn_0aiE",
                "is-persistent": "_2j8Bi4Lq",
                item: "_3Tzn-Ksn",
                "actions-container": "_3JWeZNpb",
                "links-container": "_2V8cVnTd",
                "is-open": "_3xz6sTpw",
                "nav-link": "_3WOR0P94",
                selected: "_3MIBGvCT",
                "action-link": "_2716rq5F",
                "is-text": "OPGINcUC",
                toggle: "_2zORpOH1",
                "sidebar-toggle": "_1g37weM4",
                "navbar-content-open": "irsyFUit",
                container: "pVDj25o4",
                "is-dark": "_3rx4E4Wz",
                "is-sticky": "_2CLR06xf",
                logo: "_3l7e8OkS",
                "logo-title": "_3wva0pDs",
                bar: "_1TkDKt3Q"
            }
        }), z1 = {
            White: "white",
            Highlight: "highlight",
            Blue: "blue"
        }, q1 = (a28 = {
        }, m4()(a28, z1.White, R1.b.Variant.Theme.SecondaryFlat), m4()(a28, z1.Highlight, R1.b.Variant.Theme.PrimaryGreen), m4()(a28, z1.Blue, R1.b.Variant.Theme.PrimaryBlue), a28), V = {
            Dark: "dark",
            Logo: {
                Layout: T.a.Variant.Layout,
                Type: T.a.Variant.Type
            }
        }, B = function(e) {
            var t = e.open, n = e.onToggle;
            return Object(j.p)() ? null : v.a.createElement(L.a, d()({
                open: t,
                onToggle: n
            }, {
                className: "_1g37weM4 " + ({
                    open: t,
                    onToggle: n
                }.className || "")
            }));
        }, G1 = function(e) {
            var t = e.href, n = e.label, a = e.style, r = e.gaCategory, i = e.gaEvent, c = e.gaLabel, o = e.inlineStyles, s = e.open, l = !a || a === z1.White, u = l && s ? R1.b.Variant.Theme.SecondaryGrey : q1[a] || R1.b.Variant.Theme.SecondaryFlat;
            return v.a.createElement(R1.b, d()({
                size: R1.b.Variant.Size.Medium,
                style: o
            }, {
                href: t,
                label: n,
                theme: u,
                gaCategory: r,
                gaEvent: i,
                gaLabel: c
            }, "Log In" === n && {
                rel: "nofollow"
            }, {
                className: b()(y()("action-link", {
                    "is-text": l && !s
                }), U, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    href: t,
                    label: n,
                    theme: u,
                    gaCategory: r,
                    gaEvent: i,
                    gaLabel: c
                }.className || "") + ("Log In" === n ? " " + (("Log In" === n && {
                    rel: "nofollow"
                }).className || "") : "")
            }));
        }, F1 = function(e46) {
            var t40 = e46.links, n23 = e46.className, a = e46.type, r = void 0 === a ? "" : a, i = e46.isLoggedIn, c = e46.isLoggedOut, o = e46.open, s = "login-cta" === r ? t40.filter(function(e) {
                var t = e.isAuthAgnostic, n = e.forLoggedIn;
                return t || i && n || c && !n;
            }) : t40;
            return s.length ? v.a.createElement("ul", {
                className: (n23 ? n23 + " " : "") + "_2hn_0aiE"
            }, s.map(function(e) {
                return v.a.createElement("li", {
                    key: e.href,
                    className: "_3Tzn-Ksn"
                }, v.a.createElement(G1, d()({
                }, e, {
                    open: o
                })));
            })) : null;
        }, H1 = function(e47) {
            var t41 = e47.links, n24 = e47.selected, a = void 0 === n24 ? "" : n24, r = e47.onClick;
            return v.a.createElement("div", {
                className: "_2V8cVnTd"
            }, t41.map(function(e48) {
                var t = e48.label, n = e48.href, i = e48.gaCategory, c = e48.gaEvent, o = e48.gaLabel;
                return v.a.createElement("a", d()({
                    key: n,
                    onClick: function(e) {
                        n.startsWith("#") && r && r(e);
                    }
                }, Object(S2.b)(i, c, o), {
                    href: n
                }, {
                    className: b()(y()("nav-link", {
                        selected: n.substring(n.lastIndexOf("/") + 1) === a
                    }), U, {
                        handleMissingStyleName: "warn"
                    }) + " " + (Object(S2.b)(i, c, o) && Object(S2.b)(i, c, o).className || "") + " " + ({
                        href: n
                    }.className || "")
                }), t);
            }));
        }, W = function(e49) {
            var t = e49.navigationLinks, n = e49.ctaPersistentLinks, a = e49.ctaLinks, r = e49.selected, i = e49.open, c = e49.isLoggedIn, o = e49.isLoggedOut, s = e49.onItemClick, l = e49.upperBreakpoint, u = Object(g.useMemo)(function() {
                return function(e) {
                    return v.a.createElement(F1, d()({
                        isLoggedIn: c,
                        isLoggedOut: o
                    }, {
                        links: e || a,
                        type: "login-cta",
                        className: "_3JWeZNpb " + ({
                            isLoggedIn: c,
                            isLoggedOut: o
                        }.className || "") + " " + ({
                            open: i
                        }.className || "")
                    }, {
                        open: i
                    }));
                };
            }, [
                a,
                c,
                o,
                i
            ]), f = Object(g.useMemo)(function() {
                return u();
            }, [
                u
            ]), m = Object(g.useMemo)(function() {
                return u(a.filter(function(e) {
                    return !e.preserveWhenCollapsed;
                }));
            }, [
                u,
                a
            ]), p = i || !n.length;
            return v.a.createElement(v.a.Fragment, null, v.a.createElement(H1, {
                links: t,
                selected: r,
                onClick: s
            }), p ? f : v.a.createElement(v.a.Fragment, null, v.a.createElement(C2.a, {
                defaultMatch: !0,
                query: Object(j.c)(O.b.TABLET, l)
            }, v.a.createElement(F1, {
                links: n,
                className: "_2j8Bi4Lq"
            }), m), v.a.createElement(C2.a, {
                query: Object(j.c)(l)
            }, f)));
        }, K1 = function(e50) {
            var t42 = e50.logo, n25 = e50.onItemClick, a = e50.navbarData, r = e50.className, c = e50.sticky, s = e50.variant, u = e50.selected, f = void 0 === u ? "" : u, m = e50.platformSessionUrl, p = e50.sidebar, h = e50.forcedOpen, S = e50.height, C = void 0 === S ? 64 : S, R = e50.children, M = e50.upperBreakpoint, D = void 0 === M ? O.b.DESKTOP_LARGE : M, z = Object(g.useState)(!1), q = l7()(z, 2), G = q[0], F = q[1], H = a.navigationLinks, K = a.ctaLinks, Y = a.logoLink, Q = a.title, J = K.filter(function(e) {
                return e.preserveWhenCollapsed;
            }), X = Object(j.d)(m), Z = l7()(X, 1)[0], $ = Object(j.z)(!1), ee = l7()($, 2), te = ee[0], ne = ee[1], ae = Object(w.a)(-C), re = l7()(ae, 1)[0], ie = Object(g.useCallback)(function(e) {
                re(e), F(!1), n25 && n25(e);
            }, [
                n25,
                re,
                F
            ]), ce = Object(g.useCallback)(function() {
                Object(k.a)() && !Object(N.a)() && ne();
            }, [
                ne
            ]), oe = Boolean(G || h), se = Object(g.useMemo)(function() {
                return function(e) {
                    return v.a.createElement(W, d()({
                        upperBreakpoint: D,
                        navigationLinks: H,
                        ctaPersistentLinks: J,
                        ctaLinks: K,
                        selected: e
                    }, {
                        open: oe,
                        isLoggedIn: Z === j.a.LoggedIn,
                        isLoggedOut: Z === j.a.LoggedOut,
                        onItemClick: ie
                    }));
                };
            }, [
                D,
                Z,
                oe,
                H,
                J,
                K,
                ie
            ]), le = Object(g.useMemo)(function() {
                return function(e, t) {
                    return v.a.createElement(v.a.Fragment, null, se(t), R && R({
                        isOnTop: e,
                        isOpen: G
                    }));
                };
            }, [
                G,
                R,
                se
            ]), ue = !![].concat(o10()(K), o10()(H)).length || !!R, de = p || {
            }, fe = de.enabled, me = i11()(de, [
                "enabled"
            ]);
            return v.a.createElement(x.a, {
                isSticky: !E.a && c,
                className: (r ? r + " " : "") + b()(y()("container", Object(_.a)(s)), U, {
                    handleMissingStyleName: "warn"
                })
            }, function(e) {
                var n = e.isOnTop;
                return v.a.createElement("div", {
                    className: b()(y()("navbar", {
                        "has-persistent-cta": !!J.length,
                        "is-open": oe,
                        "is-sticky": n && c,
                        "is-spacious": D === A.DESKTOP_XLARGE
                    }), U, {
                        handleMissingStyleName: "warn"
                    })
                }, !!fe && v.a.createElement(v.a.Fragment, null, v.a.createElement(B, {
                    open: te,
                    onToggle: ce
                }), v.a.createElement(I.a, d()({
                    isOpen: te,
                    onDismiss: ce
                }, me))), v.a.createElement("div", {
                    className: "_2WQ1bk3l"
                }, v.a.createElement(T.a, d()({
                    href: Y.href,
                    title: Y.label,
                    isMonotone: s === V.Dark && !n && !G
                }, {
                    headline: Q
                }, t42))), ue && v.a.createElement(L.a, {
                    open: oe,
                    onToggle: F,
                    className: "_2zORpOH1"
                }), G ? v.a.createElement(P.a, {
                    opacity: 0,
                    className: "irsyFUit"
                }, le(n)) : le(n, f));
            });
        };
        K1.hydrationOptions = {
            defer: !1
        }, K1.LinkVariant = z1, K1.Variant = V, K1.Breakpoints = A, t39.a = K1;
    },
    113: function(e51, t43, n26) {
        "use strict";
        t43.a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000, n = !1, a = function() {
                n || (n = !0, e());
            };
            return setTimeout(a, t), a;
        };
    },
    115: function(e52, t44, n27) {
        "use strict";
        n27.d(t44, "a", function() {
            return d;
        }), n27.d(t44, "b", function() {
            return f5;
        }), n27(24);
        var a29 = n27(30), r8 = n27.n(a29), i12 = n27(1), c = n27.n(i12), o11 = n27(40), s = n27.n(o11), l = n27(0), u = n27(77), d = {
            Start: 0,
            Full: 1,
            NoScroll: null
        }, f5 = function(e53) {
            var t45 = Object(l.useState)(d.NoScroll), n28 = c()(t45, 2), a30 = n28[0], i = n28[1], o = Object(l.useState)(0), f = c()(o, 2), m = f[0], p = f[1], b = Object(l.useRef)(null), g = Object(l.useRef)(r8()(new Array(e53)).map(function() {
                return Object(l.createRef)();
            })), v = Object(l.useCallback)(function(e) {
                if (0 !== m) {
                    var t = e / m;
                    t <= 0 ? t = d.Start : t >= 1 && (t = d.Full), i(t);
                }
            }, [
                m,
                i
            ]);
            Object(l.useEffect)(function() {
                var e = b.current, t = e.scrollWidth, n = e.clientWidth;
                p(t - n), v(0);
                var a = s()(function() {
                    v(e.scrollLeft);
                }, 50);
                return e.addEventListener("scroll", a), function() {
                    return e.removeEventListener("scroll", a);
                };
            }, [
                p,
                v
            ]);
            var h = Object(l.useCallback)(function(e54) {
                !function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    Object(u.a)(e, {
                        top: n,
                        left: t
                    });
                }(b.current, e54);
            }, []), y = Object(l.useCallback)(function(e) {
                var t = b.current.scrollLeft;
                return h(t + e);
            }, [
                h
            ]), E = Object(l.useCallback)(function(e) {
                y(-e);
            }, [
                y
            ]), _ = Object(l.useCallback)(function(e) {
                y(e);
            }, [
                y
            ]), O = Object(l.useCallback)(function(e) {
                var t = e.current, n = t.clientWidth, a = t.offsetLeft, r = b.current.offsetWidth - n;
                h(a - r / 2);
            }, [
                h
            ]);
            return {
                scrollPosition: a30,
                containerRef: b,
                itemsRefs: g,
                scrollToXCenter: O,
                scrollToLeft: E,
                scrollToRight: _
            };
        };
    },
    116: function(e55, t46, n29) {
        "use strict";
        var a31 = n29(2), r = n29.n(a31), i13 = n29(7), c = n29.n(i13), o12 = n29(6), s = n29.n(o12), l8 = n29(0), u = n29.n(l8), d6 = n29(3), f6 = n29.n(d6), m5 = n29(5), p = n29.n(m5), b4 = n29(9), g = n29(8), v = (n29(114), {
            "./page-section.scss": {
                "is-space-large": "_3LOPUP7d",
                "is-space-medium": "_3DOEOvRI",
                "is-space-none": "_11ZqUWmz",
                section: "_1YibmBYc",
                "force-space": "_1_bvS4sL",
                "is-width-fixed": "_2_32njdU"
            }
        }), h4 = {
            Space: {
                Large: "large",
                Medium: "medium",
                None: "none"
            },
            Width: {
                Fixed: "fixed"
            }
        }, y = u.a.forwardRef(function(e, t) {
            var n = e.children, a = e.className, i = e.id, o = e.width, l = e.space, d = void 0 === l ? y.Variant.Space.Large : l, f = e.forceSpace, m = e.semantic, b = e.as, h = void 0 === b ? m ? "section" : "div" : b, E = e.style, _ = (e.role, c()(e, [
                "children",
                "className",
                "id",
                "width",
                "space",
                "forceSpace",
                "semantic",
                "as",
                "style",
                "role", 
            ]));
            return u.a.createElement(h, r()({
                id: i,
                style: E,
                ref: t
            }, _, {
                className: (a ? a + " " : "") + s()(p()("section", {
                    "force-space": f
                }, Object(g.a)({
                    space: d,
                    width: o
                })), v, {
                    handleMissingStyleName: "warn"
                }) + " " + (_ && _.className || "")
            }), n);
        });
        y.displayName = "PageSection", y.Variant = h4, y.propTypes = {
            children: f6.a.node.isRequired,
            className: f6.a.string,
            id: f6.a.string,
            space: Object(b4.j)(h4.Space),
            width: Object(b4.j)(h4.Width),
            forceSpace: f6.a.bool,
            semantic: f6.a.bool,
            as: f6.a.oneOf([
                "div",
                "section",
                "footer"
            ]),
            style: f6.a.object,
            role: f6.a.string
        }, t46.a = y;
    },
    117: function(e56, t47, n30) {
        "use strict";
        n30.d(t47, "a", function() {
            return s;
        }), n30.d(t47, "c", function() {
            return l;
        }), n30.d(t47, "f", function() {
            return u;
        }), n30.d(t47, "d", function() {
            return d;
        }), n30.d(t47, "h", function() {
            return f;
        }), n30.d(t47, "e", function() {
            return m;
        }), n30.d(t47, "j", function() {
            return p;
        }), n30.d(t47, "g", function() {
            return b;
        }), n30.d(t47, "i", function() {
            return g;
        }), n30.d(t47, "b", function() {
            return v;
        }), n30(23);
        var a32 = n30(54), r = n30.n(a32), i = n30(32), c = n30(28), o = function(e, t) {
            Object(c.d)(s, l(t), e);
        }, s = "nav", l = function(e) {
            return "hamburger_menu_".concat(e);
        }, u = function(e57, t) {
            o(function(e) {
                return "clicks_".concat(e);
            }(e57), t);
        }, d = function(e58, t) {
            o(function(e) {
                return "clicks_case_study_".concat(e + 1);
            }(e58), t);
        }, f = function(e59, t48, n) {
            o(function(e, t) {
                return "trending_".concat(e + 1, "_skill_").concat(r()(t));
            }(e59, t48), n);
        }, m = function(e60, t49, n31, a) {
            o(function(e, t, n) {
                return "in_demand_".concat(e + 1, "_").concat(t, "_").concat(r()(n));
            }(e60, t49, n31), a);
        }, p = function(e) {
            o("clicks_talent_video", e);
        }, b = function(e61, t) {
            o(function(e) {
                return "skill_search_".concat(e);
            }(e61), t);
        }, g = function(e, t) {
            o("skill_picker_".concat(e, "_click"), t);
        }, v = function(e62, t50, n) {
            return Object(i.b)(s, l(n), function(e, t) {
                return "skill_picker_".concat(e, "_").concat(r()(t), "_click");
            }(e62, t50));
        };
    },
    118: function(e, t, n) {
        e.exports = {
            container: "_3O25N8Wt",
            "is-visual-regression-test": "_2oqWtl8O",
            "sidebar-is-open": "_3qlrr8Ue",
            collapsed: "_2uOUGZ8s",
            collapsing: "_1fjhlsRh",
            expanded: "_3HVRGLKB",
            expanding: "rAcwt06K",
            "fade-in": "_1aay_bin"
        };
    },
    119: function(e63, t51, n32) {
        "use strict";
        var a33 = n32(2), r = n32.n(a33), i14 = n32(7), c = n32.n(i14), o13 = n32(0), s = n32.n(o13), l = n32(32), u = (n32(9), n32(43)), d7 = u.a.Variant, f = u.a.HtmlElement, m6 = function(e) {
            var t = e.href, n = e.label, a = e.gaCategory, i = e.gaEvent, o = e.gaLabel, d = e.children, m = c()(e, [
                "href",
                "label",
                "gaCategory",
                "gaEvent",
                "gaLabel",
                "children", 
            ]);
            return s.a.createElement(u.a, r()({
                as: f.Link
            }, {
                href: t
            }, Object(l.b)(a, i, o), m), d || n);
        };
        m6.Variant = d7, t51.a = m6;
    },
    12: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "g", function() {
            return d;
        }), n.d(t, "f", function() {
            return f;
        }), n.d(t, "e", function() {
            return m;
        }), n.d(t, "c", function() {
            return p;
        }), n(205), n(72);
        var a = n(4), r = n.n(a), i = n(50), c = n.n(i), o = n(41);
        n.d(t, "a", function() {
            return o.a;
        });
        var s, l = n(55);
        n.d(t, "d", function() {
            return l.a;
        });
        var u = Object.freeze({
            DESKTOP_LARGE: c.a.desktopLarge || 0,
            DESKTOP: c.a.desktop || 0,
            TABLET: c.a.tablet || 0,
            MOBILE_LARGE: c.a.mobileLarge || 0,
            MOBILE_XLARGE: c.a.mobileXLarge || 0,
            MOBILE: c.a.mobile || 0
        }), d = {
            Designers: "designers",
            Developers: "developers",
            FinanceExperts: "finance_experts",
            ProjectManagers: "project_managers",
            ProductManagers: "product_managers",
            Projects: "projects"
        }, f = (s = {
        }, r()(s, d.Designers, "Designer"), r()(s, d.Developers, "Developer"), r()(s, d.FinanceExperts, "Finance Expert"), r()(s, d.ProductManagers, "Product Manager"), r()(s, d.ProjectManagers, "Project Manager"), s), m = Object.values(d), p = "hiring-guide";
    },
    121: function(e64, t52, n33) {
        "use strict";
        n33.d(t52, "a", function() {
            return u8;
        }), n33(51);
        var a34 = n33(1), r = n33.n(a34), i15 = n33(196), c = n33.n(i15), o = n33(0), s = n33(22), l = n33(41), u8 = function(e, t) {
            var n = Object(o.useState)([]), a = r()(n, 2), i = a[0], u = a[1];
            return Object(o.useEffect)(function() {
                u(c()(e, t));
            }, [
                e,
                t
            ]), l.d || s.a ? e.slice(0, t) : i;
        };
    },
    122: function(e65, t53, n34) {
        "use strict";
        n34.d(t53, "a", function() {
            return s;
        }), n34.d(t53, "b", function() {
            return l9;
        });
        var a35 = n34(1), r = n34.n(a35), i = n34(0), c = n34(83), o = n34(13), s = {
            Loading: "loading",
            LoggedIn: "loggedin",
            LoggedOut: "loggedout"
        };
        function l9(e66) {
            var t54 = Object(i.useState)(s.Loading), n35 = r()(t54, 2), a = n35[0], l = n35[1];
            return Object(i.useEffect)(function() {
                var t = !0;
                return Object(c.a)(e66).subscribe(function(e, n) {
                    t && (Object(o.f)(n) && (null == e ? void 0 : e.success) ? l(s.LoggedIn) : Object(o.c)(n) && l(s.LoggedOut));
                }), function() {
                    return t = !1;
                };
            }, [
                e66
            ]), [
                a
            ];
        }
    },
    123: function(e67, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "m.707.707 13.678 13.678-13.678 13.677",
                fill: "none",
                stroke: "#204ecf"
            }));
        }
        r.defaultProps = {
            viewBox: "0 0 15 29"
        }, e67.exports = r, r.default = r;
    },
    124: function(e68, t55, n36) {
        "use strict";
        n36.d(t55, "a", function() {
            return c;
        });
        var a36 = n36(1), r = n36.n(a36), i = n36(0);
        function c() {
            var e = Object(i.useState)(!1), t = r()(e, 2), n = t[0], a = t[1];
            return Object(i.useEffect)(function() {
                return a(!0);
            }, []), [
                n
            ];
        }
    },
    125: function(e69, t56, n37) {
        "use strict";
        n37(23), n37(27), n37(33);
        var a37 = n37(1), r = n37.n(a37), i = n37(0), c = n37.n(i), o = n37(22);
        t56.a = function(e70) {
            var t57 = e70.shiftX, n38 = void 0 === t57 ? "0" : t57, a38 = e70.shiftY, s = void 0 === a38 ? "0" : a38, l = e70.shiftDuration, u = void 0 === l ? 0.4 : l, d = e70.scale, f = void 0 === d ? 1 : d, m = e70.scaleDuration, p = void 0 === m ? 1 : m, b = e70.opacity, g = void 0 === b ? 1 : b, v = e70.opacityDuration, h = void 0 === v ? 0.4 : v, y = e70.postponeTransition, E = void 0 === y ? Promise.resolve() : y, _ = e70.className, O = void 0 === _ ? "" : _, j = e70.as, w = void 0 === j ? "div" : j, S = e70.animated, k = void 0 === S || S, N = e70.children, C = Object(i.useState)(g), P = r()(C, 2), x = P[0], L = P[1], T = Object(i.useState)(n38), I = r()(T, 2), R = I[0], M = I[1], D = Object(i.useState)(s), A = r()(D, 2), U = A[0], z = A[1], q = Object(i.useState)(f), V = r()(q, 2), B = V[0], G = V[1], F = k && !o.a;
            return Object(i.useEffect)(function() {
                var e71 = function(e72) {
                    var t = !1, n39 = new Promise(function(n, a) {
                        return e72.then(function(e) {
                            t ? a("Cancelled") : n(e);
                        });
                    });
                    return n39.cancel = function() {
                        return t = !0;
                    }, n39;
                }(F ? E : Promise.resolve());
                return e71.then(function() {
                    L(1), M(0), z(0), G(1);
                }).catch(function() {
                }), function() {
                    return e71.cancel();
                };
            }, [
                E,
                F
            ]), c.a.createElement(w, {
                style: {
                    opacity: x,
                    transform: "translate(".concat(R, ", ").concat(U, ") scale(").concat(B, ")"),
                    transition: F ? "opacity ".concat(h, "s, transform ").concat(u, "s, scale ").concat(p, "s") : "none"
                },
                className: O
            }, N);
        };
    },
    126: function(e73, t58, n40) {
        "use strict";
        (function(e74) {
            n40.d(t58, "a", function() {
                return r9;
            });
            var a = n40(0);
            function r9(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e74, i = Object(a.useRef)();
                Object(a.useEffect)(function() {
                    i.current = n;
                }, [
                    n
                ]), Object(a.useEffect)(function() {
                    if (r && r.addEventListener) {
                        var e75 = function(e) {
                            return i.current(e);
                        };
                        return r.addEventListener(t, e75), function() {
                            r.removeEventListener(t, e75);
                        };
                    }
                }, [
                    t,
                    r
                ]);
            }
        }).call(this, n40(236));
    },
    127: function(e) {
        e.exports = JSON.parse('{"author":"Gabriel Nechita <gabriel.nechita@toptal.com>","commit":"edbd72cbcdf29e0a6bd51853856e5ef77da3d563","tag":"","date":"Fri May 14 11:20:53 2021 +0300","codeVersion":"edbd72cbcdf29e0a6bd51853856e5ef77da3d563"}');
    },
    129: function(e76, t59, n41) {
        "use strict";
        (function(e77) {
            var a39 = n41(0), r = n41.n(a39), i = n41(37), c9 = n41(89), o = n41(100), s = n41(11), l = n41(130), u = (n41(9), n41(131)), d = n41(145), f = n41(138), m = n41(104), p = n41(139), b = n41(86), g = n41(141), v = n41(101), h5 = (n41(128), Object(c9.a)("template")), y = h5(v.a, {
                defer: !1,
                atIdle: !0
            }), E = h5(o.a, {
                atIdle: !0
            });
            t59.a = function(t) {
                var n = t.children, a = t.requestMetadata, c = t.page, h = c.publicUrl, _ = c.bounceModals, O = c.vertical, j = c.seo, w = c.slug, S = t.isPartiallyHydrated, k = t.isSidebarEnabled, N = t.showCookieBanner, C = void 0 === N || N, P = t.toptalizeTitles, x = t.trackScrollDepth, L = t.className, T = t.track15SecondsRead, I = S ? y : v.a, R = S ? E : o.a, M = function(e) {
                    return P ? Object(l.a)(e) : e;
                };
                return r.a.createElement(r.a.Fragment, null, !Object(s.a)() && r.a.createElement(g.a, null), !Object(s.a)() && r.a.createElement(i.Helmet, null, r.a.createElement("title", null, M(j.htmlTitle)), r.a.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), r.a.createElement("meta", {
                    name: "theme-color",
                    content: "#204ECF"
                }), j.noIndex && r.a.createElement("meta", {
                    name: "robots",
                    content: "noindex"
                }), r.a.createElement("meta", {
                    name: "description",
                    content: j.htmlDescription
                }), r.a.createElement("meta", {
                    property: "og:title",
                    content: M(j.ogTitle)
                }), r.a.createElement("meta", {
                    property: "og:description",
                    content: j.ogDescription
                }), j.ogType && r.a.createElement("meta", {
                    property: "og:type",
                    content: j.ogType
                }), j.ogImageUrl && r.a.createElement("meta", {
                    property: "og:image",
                    content: j.ogImageUrl
                }), h && r.a.createElement("meta", {
                    property: "og:url",
                    content: h
                }), r.a.createElement("meta", {
                    name: "twitter:site",
                    content: "@toptal"
                }), r.a.createElement("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), h && r.a.createElement("link", {
                    rel: "canonical",
                    href: h
                }), L && r.a.createElement("body", {
                    className: L
                })), r.a.createElement(f.a, a.vendorScriptsSettings.optimizelySettings), r.a.createElement(u.a, null), r.a.createElement(d.a, a.vendorScriptsSettings), e77.env.hasOwnProperty("frontier_dev-utils") && r.a.createElement(R, {
                    key: "devutils"
                }), r.a.createElement(b.a.Host, null), n, r.a.createElement(m.a, null), !!k && r.a.createElement(p.a, null), r.a.createElement(I, {
                    requestMetadata: a,
                    bounceModals: _,
                    vertical: O,
                    slug: w,
                    publicUrl: h,
                    trackScrollDepth: x,
                    showCookieBanner: C,
                    track15SecondsRead: T
                }));
            };
        }).call(this, n41(241));
    },
    13: function(e78, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "d", function() {
            return i;
        }), n.d(t, "e", function() {
            return c;
        }), n.d(t, "f", function() {
            return o;
        }), n.d(t, "b", function() {
            return s;
        }), n(44), n(73);
        var a = {
            INITIAL: "initial",
            LOADING: "loading",
            SUCCESS: "success",
            ERROR: "error"
        };
        function r(e) {
            return [
                a.SUCCESS,
                a.ERROR
            ].includes(e);
        }
        function i(e) {
            return e === a.INITIAL;
        }
        function c(e) {
            return e === a.LOADING;
        }
        function o(e) {
            return e === a.SUCCESS;
        }
        function s(e) {
            return e === a.ERROR;
        }
    },
    130: function(e79, t, n) {
        "use strict";
        n(23), n(44), n(73), t.a = function(e) {
            return e.includes("| ToptalВ®") ? e : "".concat(e, " ").concat("| ToptalВ®");
        };
    },
    131: function(e80, t, n) {
        "use strict";
        var a = n(0), r = n.n(a), i = n(37), c = n(11), o = n(12), s = n(21), l = n(132), u = n.n(l), d = n(133), f = n.n(d), m = n(134), p = n.n(m), b = n(135), g = n.n(b), v = n(136), h = n.n(v), y = n(137), E = n.n(y);
        t.a = function() {
            var e = h.a;
            switch(s.appEnv){
                case o.a.Staging:
                    e = E.a;
                    break;
                case o.a.Production:
                    e = u.a;
            }
            return !Object(c.a)() && r.a.createElement(i.Helmet, null, r.a.createElement("link", {
                rel: "icon",
                href: e
            }), r.a.createElement("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "57x57",
                href: f.a
            }), r.a.createElement("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "72x72",
                href: p.a
            }), r.a.createElement("link", {
                rel: "apple-touch-icon-precomposed",
                sizes: "114x114",
                href: g.a
            }));
        };
    },
    132: function(e, t, n) {
        e.exports = n.p + "83b2f6e0d02cdb3d951a75bd07ee4058.png";
    },
    133: function(e, t, n) {
        e.exports = n.p + "66953fea6d309fccce15bde2a03358ea.png";
    },
    134: function(e, t, n) {
        e.exports = n.p + "686b47667da72620ad6f4ad7ff314764.png";
    },
    135: function(e, t, n) {
        e.exports = n.p + "d840cec40f6fb7d087fe162a45edbaba.png";
    },
    136: function(e, t, n) {
        e.exports = n.p + "40f4a4cb86951e30427e30a50c4cc3cf.png";
    },
    137: function(e, t, n) {
        e.exports = n.p + "e1b13fd4e3b0c41494cd3821a6a36696.png";
    },
    138: function(e81, t60, n42) {
        "use strict";
        n42(23);
        var a40 = n42(0), r = n42.n(a40), i16 = n42(37), c = n42.n(i16), o = n42(11);
        t60.a = function(e) {
            var t = e.projectId, n = e.enabled, a = e.pageGroups, i = e.pushkaApiUrl, s = e.pushkaScriptUrl;
            if (!n || !t) return null;
            var l = "/optimizely-edge/".concat(t, ".js"), u = "\n(function () {\n  window.optimizelyGroups = ".concat(JSON.stringify(a), ';\n  window._pushkaConfig = {apiUrl: "').concat(i, '"};\n})();\n  ');
            return !Object(o.a)() && r.a.createElement(c.a, null, r.a.createElement("link", {
                rel: "preload",
                href: l,
                as: "script"
            }), r.a.createElement("link", {
                rel: "preconnect",
                href: "//logx.optimizely.com"
            }), r.a.createElement("script", {
                type: "text/javascript"
            }, u), r.a.createElement("script", {
                src: l
            }), r.a.createElement("script", {
                src: s
            }));
        };
    },
    139: function(e82, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(0), c = n.n(i), o = n(42);
        t.a = function(e) {
            return c.a.createElement("div", r()({
            }, e, {
                id: o.a
            }));
        };
    },
    140: function(e, t, n) {
        e.exports = {
            transitionDuration: "500"
        };
    },
    141: function(e, t, n) {
        "use strict";
        var a = n(0), r = n.n(a), i = n(37), c = n(142), o = n.n(c), s = n(143), l = n.n(s), u = n(144), d = n.n(u);
        t.a = function() {
            return r.a.createElement(i.Helmet, null, r.a.createElement("link", {
                rel: "preload",
                href: o.a,
                as: "font",
                type: "font/woff2",
                crossOrigin: !0
            }), r.a.createElement("link", {
                rel: "preload",
                href: l.a,
                as: "font",
                type: "font/woff2",
                crossOrigin: !0
            }), r.a.createElement("link", {
                rel: "preload",
                href: d.a,
                as: "font",
                type: "font/woff2",
                crossOrigin: !0
            }));
        };
    },
    142: function(e, t, n) {
        e.exports = n.p + "427e348e30259e82835b923a946530a1.woff2";
    },
    143: function(e, t, n) {
        e.exports = n.p + "40a6e2b8c2bc99f6d71b9f93dbf695fe.woff2";
    },
    144: function(e, t, n) {
        e.exports = n.p + "cf9a74845c1e3f6d0b7f8b4e351b3971.woff2";
    },
    145: function(e83, t61, n) {
        "use strict";
        n(194), n(14), n(24), n(195), n(20), n(15);
        var a = n(0), r = n.n(a), i = n(37), c = n(11), o = n(21), s = {
            appinfoSettings: "https://appinfo.toptal.com",
            facebookSettings: [
                "https://connect.facebook.net",
                "https://www.facebook.com", 
            ],
            googleAnalyticsSettings: [
                "https://www.google-analytics.com",
                "https://stats.g.doubleclick.net", 
            ],
            googleTagManagerSettings: [
                "https://www.googletagmanager.com",
                "https://www.googleadservices.com",
                "https://bat.bing.com",
                "https://www.redditstatic.com", 
            ],
            hubspotSettings: [
                "https://track.hubspot.com",
                "https://js.hs-analytics.net", 
            ],
            linkedinInsightsSettings: [
                "https://www.linkedin.com",
                "https://px.ads.linkedin.com",
                "https://sjs.bizographics.com", 
            ],
            trustpilotSettings: "https://widget.trustpilot.com",
            sentrySettings: "https://js.sentry-cdn.com"
        };
        t61.a = function(e84) {
            var t = [];
            return Object.keys(s).forEach(function(n) {
                e84[n] && t.push(s[n]);
            }), !Object(c.a)() && r.a.createElement(i.Helmet, null, r.a.createElement("link", {
                rel: "dns-prefetch",
                href: o.publicPath
            }), r.a.createElement("link", {
                rel: "preconnect",
                href: o.publicPath
            }), r.a.createElement("link", {
                rel: "preconnect",
                href: o.publicPath,
                crossOrigin: ""
            }), r.a.createElement("link", {
                rel: "dns-prefetch",
                href: o.uploadsUri
            }), r.a.createElement("link", {
                rel: "preconnect",
                href: o.uploadsUri
            }), r.a.createElement("link", {
                rel: "dns-prefetch",
                href: s.sentrySettings
            }), t.flat().map(function(e) {
                return r.a.createElement("link", {
                    key: e,
                    rel: "dns-prefetch",
                    href: e
                });
            }));
        };
    },
    148: function(e85, t62, n43) {
        "use strict";
        n43(19), n43(17), n43(14), n43(25), n43(26), n43(20), n43(15);
        var a41 = n43(4), r10 = n43.n(a41), i17 = n43(2), c = n43.n(i17), o14 = n43(7), s = n43.n(o14), l10 = n43(0), u = n43.n(l10), d8 = n43(3), f7 = n43.n(d8), m = n43(9), p = n43(32);
        function b(e, t63) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t63 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function g(e) {
            var t64, n;
            for(t64 = 1; t64 < arguments.length; t64++)n = null != arguments[t64] ? arguments[t64] : {
            }, t64 % 2 ? b(Object(n), !0).forEach(function(t) {
                r10()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var v = Object(l10.forwardRef)(function(e, t) {
            var n = e.label, a = e.gaCategory, r = e.gaEvent, i = e.gaLabel, o = e.children, l = e.a11yHidden, d = void 0 !== l && l, f = s()(e, [
                "label",
                "gaCategory",
                "gaEvent",
                "gaLabel",
                "children",
                "a11yHidden", 
            ]);
            return u.a.createElement("a", c()({
            }, Object(p.b)(a, r, i), f, d && {
                "aria-hidden": !0,
                tabIndex: "-1"
            }, {
                ref: t
            }), o || n);
        });
        v.propTypes = g(g({
        }, m.h), {
        }, {
            label: f7.a.string,
            children: f7.a.node,
            a11yHidden: f7.a.bool
        }), t62.a = v;
    },
    149: function(e86, t65, n44) {
        "use strict";
        var a42 = n44(0), r = n44.n(a42), i18 = n44(3), c10 = n44.n(i18), o15 = (n44(202), Object(a42.forwardRef)(function(e, t) {
            var n = e.children, a = e.className, i = e.innerClass, c = e.id, o = e.tag, s = void 0 === o ? "section" : o;
            return r.a.createElement(s, {
                ref: t,
                className: (a ? a + " " : "") + "_13AzE63U",
                id: c
            }, r.a.createElement("div", {
                className: (i ? i + " " : "") + "_2E9Ot9TG"
            }, n));
        }));
        o15.propTypes = {
            tag: c10.a.string,
            className: c10.a.string,
            id: c10.a.string,
            children: c10.a.oneOfType([
                c10.a.arrayOf(c10.a.node),
                c10.a.node
            ]).isRequired
        }, o15.displayName = "SectionContainer", t65.a = o15;
    },
    152: function(e87, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "m1323.82532 2153 7.29254 7.29278c.05306.04705.10612.09998.16507.15879l6.36107 6.36354-10.34632 10.29222 4.73985 4.74031-3.17169 3.15236-7.24537-7.24573c-.08254-.07645-.17097-.16467-.2594-.25289l-6.36107-6.35766 10.31095-10.25105-4.69859-4.69914zm4.61606 11.42731c-.09433-.02941-.18865-.02941-.28298 0-.09433.02353-.17686.07058-.34193.23525l-5.88945 5.86363c-.17096.17056-.21223.24701-.2417.34111-.02948.0941-.02948.1882 0 .2823.02947.09411.07664.17644.2417.34112l1.86883 1.87024c.17096.17056.2476.21173.34193.24114.09432.0294.18865.0294.28297 0 .09433-.02941.17686-.07058.33604-.23526l5.88944-5.86362c.17097-.17056.21224-.24702.24171-.34112.02948-.0941.02948-.1882 0-.2823-.02358-.0941-.07074-.17644-.23581-.34111l-1.86882-1.87025c-.17097-.17055-.24761-.21172-.34193-.24113z",
                fill: "#204ecf",
                fillRule: "evenodd",
                transform: "translate(-1315 -2153)"
            }));
        }
        r.defaultProps = {
            height: "32",
            viewBox: "0 0 23 32",
            width: "23"
        }, e87.exports = r, r.default = r;
    },
    153: function(e88, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "m940.151241 2159.9452c2.29703 0 4.252834.88546 5.817478 2.60625 1.581288 1.67068 2.380255 3.9595 2.371997 6.808-.008387 2.79003-.823999 5.22086-2.438578 6.94166-1.597934 1.71244-3.636964 2.58119-6.067155 2.58119-2.105232-.00797-4.005718-.76184-5.267151-2.05819l-.17581-.18886-.016645 7.35097-4.152963-.00836v-.30907l.049935-23.51476 4.127995.00836-.008322 2.8652c1.356579-1.52866 3.545415-3.08239 5.759219-3.08239zm26.598938.05847c2.371933 0 4.01148.53462 5.268188 1.57044 1.204791 1.0024 1.85097 2.78521 1.902658 4.66292l.00329.28228-.025047 12.1291h-4.202898l-.00013-.50982c-.000391-.51765-.001951-1.05644-.008193-1.59523-1.215095 1.68738-2.9129 2.50601-5.176639 2.50601-1.797676 0-3.312384-.54297-4.427608-1.55373-1.123547-1.02746-1.722773-2.43083-1.714536-4.06809.016313-3.07864 2.192423-5.20436 6.003868-5.87392l.296405-.04863 5.043478-.79357v-.40096c0-.85204-.249677-1.87951-.749032-2.29718-.515999-.43437-1.131869-.80192-2.213804-.80192-2.969539 0-3.571224 2.19502-3.60236 3.29187l-.001313.09125-3.728512.05012c0-1.62056.749031-3.71726 2.272062-5.03709 1.214116-1.05351 2.988523-1.54465 4.705687-1.59879l.321146-.00506zm-16.287272-4.74472 4.136318.00836-.008322 4.95355 3.845028.00835-.008323 3.44995-3.845028-.00836-.016645 9.29731c0 1.01912.216387 1.68739.657483 2.00481.466064.33414 1.414837.02506 1.414837.02506l.374516 3.61702s-1.306644.33413-2.138901.33413c-1.081934 0-1.997417-.27566-2.713158-.81863-1.148515-.86875-1.739418-2.39742-1.731095-4.53588l.016645-9.92382-3.470512-3.46665 3.478835.00836zm-24.435069 7.4011c1.190127 1.2363 2.613287 3.41653 2.605001 6.808-.008359 3.39147-1.431519 5.56335-2.621647 6.79129-1.631224 1.67068-3.845028 2.63132-6.075477 2.63132-.091548 0-.183096 0-.274645-.00836-2.388578-.00835-4.494188-.86039-6.258573-2.53107-1.772708-1.68738-2.671546-4.00962-2.671546-6.92495s.907161-5.23757 2.688191-6.91659c1.756062-1.66233 3.861673-2.50602 6.250251-2.50602 2.36361-.06682 4.668963.90217 6.358445 2.65638zm-9.587603-7.66005v4.10151l-8.006313.00835.016645 19.55526-4.319415-.00836v-.3759l.033291-19.17935h-8.164443l.008323-4.10151zm59.481418.27566 3.728512.00835v.10025l-.041613 23.2558-3.720189-.00836v-.10859zm-6.208638 14.76877-4.144641.70168c-2.022385.34249-2.962835 1.13606-2.971211 2.49766-.007925 1.25684.886031 2.09173 2.271715 2.16647l.183497.00541h.016645c2.649863 0 4.534366-2.07491 4.639398-5.08349l.004597-.24596zm-50.06859-6.34856c-1.389869 0-2.596642.53461-3.570383 1.59549-.957096 1.04417-1.448127 2.43919-1.448127 4.15163s.491031 3.10745 1.439805 4.15163c.97374 1.06923 2.180513 1.60384 3.570383 1.6122 1.414837 0 2.629932-.53462 3.603673-1.5955.982064-1.06923 1.473095-2.46424 1.481418-4.15163.008322-1.69573-.491032-3.09074-1.473095-4.15162-.973741-1.06924-2.188837-1.6122-3.603674-1.6122zm19.51643.1253h-.016645c-1.389869 0-2.546707.50955-3.52877 1.56208-.973741 1.01911-1.464773 2.3473-1.473095 3.95114 0 1.62056.482709 3.07405 1.464772 4.13493.998709 1.02746 2.155546 1.53702 3.537093 1.53702 1.406515 0 2.58832-.51791 3.537093-1.52867.990386-1.05253 1.464772-2.50601 1.473095-4.12657.008323-1.6122-.491032-2.94039-1.45645-3.95115-.940451-1.04417-2.130578-1.57878-3.537093-1.57878z",
                fill: "#262d3d",
                fillRule: "evenodd",
                transform: "translate(-896 -2155)"
            }));
        }
        r.defaultProps = {
            height: "29",
            viewBox: "0 0 84 29",
            width: "84"
        }, e88.exports = r, r.default = r;
    },
    154: function(e89, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, [
                a.createElement("defs", {
                    key: 0
                }, [
                    a.createElement("filter", {
                        id: "a",
                        height: "114.8%",
                        width: "120.1%",
                        x: "-10.1%",
                        y: "-3.7%",
                        key: 0
                    }, [
                        a.createElement("feOffset", {
                            dy: "1",
                            in: "SourceAlpha",
                            result: "shadowOffsetOuter1",
                            key: 0
                        }),
                        a.createElement("feGaussianBlur", {
                            in: "shadowOffsetOuter1",
                            result: "shadowBlurOuter1",
                            stdDeviation: ".5",
                            key: 1
                        }),
                        a.createElement("feColorMatrix", {
                            in: "shadowBlurOuter1",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0",
                            key: 2
                        }), 
                    ]),
                    a.createElement("path", {
                        id: "b",
                        d: "m19.94 11.657-5.59-5.355a3.564 3.564 0 0 0 -.144-.134l-6.409-6.143-2.823 2.685 4.129 3.953-9.062 8.64 5.59 5.356c.078.074.156.148.228.213l6.368 6.103 2.787-2.655-4.165-3.993 9.092-8.67zm-11.613 5.717a.425.425 0 0 1 -.25 0c-.082-.025-.15-.06-.294-.203l-1.643-1.575c-.145-.14-.186-.208-.207-.288a.374.374 0 0 1 0-.238c.026-.079.062-.143.212-.282l5.176-4.94c.145-.138.218-.178.3-.197a.425.425 0 0 1 .25 0c.082.024.15.06.294.203l1.643 1.575c.145.139.186.208.207.288a.374.374 0 0 1 0 .237c-.026.08-.062.144-.212.283l-5.176 4.939c-.15.139-.223.178-.3.198z",
                        key: 1
                    }), 
                ]),
                a.createElement("g", {
                    fill: "none",
                    key: 1
                }, [
                    a.createElement("g", {
                        transform: "translate(1)",
                        key: 0
                    }, [
                        a.createElement("use", {
                            fill: "#000",
                            filter: "url(#a)",
                            xlinkHref: "#b",
                            key: 0
                        }),
                        a.createElement("use", {
                            fill: "#fff",
                            xlinkHref: "#b",
                            key: 1
                        }), 
                    ]),
                    a.createElement("path", {
                        d: "m18.128 1.303c0-.347.124-.644.383-.892.26-.248.57-.371.927-.371.363 0 .674.123.933.371s.389.545.389.892c0 .352-.13.644-.389.887-.26.247-.57.366-.933.366a1.28 1.28 0 0 1 -.927-.366 1.16 1.16 0 0 1 -.383-.887zm.217 0c0 .292.104.545.316.748.213.203.472.307.783.307.305 0 .564-.104.777-.307a1.01 1.01 0 0 0 .32-.748c0-.292-.108-.545-.32-.748a1.069 1.069 0 0 0 -.777-.312c-.306 0-.565.104-.778.312a.995.995 0 0 0 -.32.748zm1.41.689-.353-.6h-.238v.6h-.218v-1.378h.586c.29 0 .46.164.46.392 0 .193-.15.337-.352.376l.358.61h-.244zm-.592-1.194v.416h.337c.186 0 .28-.07.28-.208 0-.144-.094-.213-.28-.213z",
                        fill: "#fff",
                        key: 1
                    }), 
                ]), 
            ]);
        }
        r.defaultProps = {
            viewBox: "0 0 22 29"
        }, e89.exports = r, r.default = r;
    },
    155: function(e90, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, [
                a.createElement("defs", {
                    key: 0
                }, a.createElement("path", {
                    d: "M13.631 13.635h-2.369V9.922c0-.885-.018-2.025-1.235-2.025-1.235 0-1.424.964-1.424 1.96v3.778H6.234V6H8.51v1.04h.03c.319-.6 1.092-1.233 2.247-1.233 2.401 0 2.845 1.58 2.845 3.637v4.19zM3.558 4.955A1.375 1.375 0 012.183 3.58a1.376 1.376 0 111.375 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.182C.528 0 0 .516 0 1.153v13.694C0 15.485.528 16 1.18 16h13.635c.652 0 1.185-.515 1.185-1.153V1.153C16 .516 15.467 0 14.815 0h.002z",
                    id: "path-1"
                })),
                a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    key: 1
                }, [
                    a.createElement("mask", {
                        id: "mask-2",
                        fill: "#fff",
                        key: 0
                    }, a.createElement("use", {
                        xlinkHref: "#path-1"
                    })),
                    a.createElement("use", {
                        fill: "#000",
                        fillRule: "nonzero",
                        xlinkHref: "#path-1",
                        key: 1
                    }),
                    a.createElement("g", {
                        mask: "url(#mask-2)",
                        fill: "#858a92",
                        key: 2
                    }, a.createElement("path", {
                        d: "M0 0h16v16H0z"
                    })), 
                ]), 
            ]);
        }
        r.defaultProps = {
            viewBox: "0 0 16 16"
        }, e90.exports = r, r.default = r;
    },
    156: function(e, t, n) {
        e.exports = {
            container: "_1mAa9DKX",
            headline: "_3bBZjbAE",
            "headline-container": "_2RVERByf"
        };
    },
    157: function(e91, t66, n45) {
        "use strict";
        var a43 = n45(0), r = n45.n(a43), i = {
            linkedin: function(e) {
                var t = e.size, n = void 0 === t ? "100%" : t;
                return r.a.createElement("svg", {
                    width: n,
                    height: n,
                    viewBox: "0 0 17 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M.215 16h3.643V5.204H.215V16zM2.06 0C.814 0 0 .806 0 1.865 0 2.903.792 3.73 2.013 3.73h.025c1.27 0 2.06-.827 2.06-1.865C4.075.805 3.308 0 2.06 0zM17 9.808V16h-3.645v-5.777c0-1.45-.526-2.44-1.847-2.44-1.007 0-1.603.667-1.87 1.313-.095.23-.12.553-.12.874V16H5.875s.05-9.782 0-10.796h3.645v1.53c-.007.012-.018.023-.025.036h.025v-.037c.485-.734 1.348-1.782 3.284-1.782C15.2 4.951 17 6.493 17 9.808z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }));
            },
            twitter: function(e) {
                var t = e.size, n = void 0 === t ? "100%" : t;
                return r.a.createElement("svg", {
                    width: n,
                    height: n,
                    viewBox: "0 0 21 17",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M18.862 4.84c0-.19-.01-.369-.018-.557A8.445 8.445 0 0 0 21 2.1a8.609 8.609 0 0 1-2.475.638A4.188 4.188 0 0 0 20.419.41a8.522 8.522 0 0 1-2.734.988A4.39 4.39 0 0 0 14.543 0a4.236 4.236 0 0 0-4.312 4.243c0 .335.035.661.113.979C6.76 5.002 3.584 3.245 1.462.59a4.295 4.295 0 0 0-.587 2.174c0 1.51.763 2.851 1.921 3.636A4.313 4.313 0 0 1 .84 5.835v.059a4.379 4.379 0 0 0 3.463 4.282 4.34 4.34 0 0 1-1.134.146 4.405 4.405 0 0 1-.814-.09 4.324 4.324 0 0 0 4.025 3.032A8.619 8.619 0 0 1 0 15.038 12.048 12.048 0 0 0 6.606 17c7.92 0 12.256-6.514 12.256-12.16",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }));
            },
            facebook: function(e) {
                var t = e.size, n = void 0 === t ? "100%" : t;
                return r.a.createElement("svg", {
                    width: n,
                    height: n,
                    viewBox: "0 0 11 23",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M6.271 23V11.488h3.892l.619-3.818h-4.51V5.756c0-1 .334-1.947 1.796-1.947H11V0H6.843C3.348 0 2.396 2.251 2.396 5.36v2.31H0v3.818h2.396V23H6.27z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }));
            },
            instagram: function(e) {
                var t = e.size, n = void 0 === t ? "100%" : t;
                return r.a.createElement("svg", {
                    width: n,
                    height: n,
                    viewBox: "0 0 20 21",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("g", {
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, r.a.createElement("path", {
                    d: "M18.225 15.204c0 2.17-1.68 3.932-3.744 3.932H5.519c-2.064 0-3.744-1.762-3.744-3.932v-9.41c0-2.168 1.68-3.93 3.744-3.93h8.962c2.064 0 3.744 1.762 3.744 3.93v9.41zM14.481 0H5.519C2.475 0 0 2.599 0 5.794v9.41C0 18.401 2.475 21 5.52 21h8.96c3.045 0 5.52-2.599 5.52-5.796v-9.41C20 2.599 17.525 0 14.48 0z"
                }), r.a.createElement("path", {
                    d: "M10 14.931a3.936 3.936 0 0 1-3.933-3.932A3.938 3.938 0 0 1 10 7.064a3.937 3.937 0 0 1 3.933 3.935A3.936 3.936 0 0 1 10 14.93M10 5c-3.308 0-6 2.69-6 5.999A6.008 6.008 0 0 0 10 17c3.308 0 6-2.694 6-6.001A6.006 6.006 0 0 0 10 5M14.501 3c-.394 0-.783.158-1.06.438-.278.28-.441.666-.441 1.06 0 .395.163.782.44 1.062.278.277.667.44 1.061.44.395 0 .781-.163 1.059-.44.28-.28.44-.667.44-1.061A1.498 1.498 0 0 0 14.501 3"
                })));
            }
        };
        t66.a = function(e) {
            var t = e.type, n = e.size, a = void 0 === n ? "100%" : n, c = i[t.toLowerCase()];
            return c ? r.a.createElement(c, {
                size: a
            }) : null;
        };
    },
    16: function(e, t, n) {
        "use strict";
        var a = n(116);
        n.d(t, "a", function() {
            return a.a;
        });
    },
    160: function(e92, t67, n46) {
        "use strict";
        var a44 = n46(2), r = n46.n(a44), i19 = n46(7), c = n46.n(i19), o16 = n46(182), s = n46.n(o16), l = n46(0), u = n46.n(l), d = n46(49), f = n46(156), m = n46.n(f), p = s()(m.a, [
            "container",
            "headline",
            "headline-container"
        ]);
        t67.a = function(e) {
            var t = e.href, n = e.suffix, a = e.headline, i = e.title, o = c()(e, [
                "href",
                "suffix",
                "headline",
                "title"
            ]);
            return u.a.createElement(d.a, r()({
                isMonotone: !0,
                layout: {
                }
            }, {
                href: t,
                suffix: n,
                headline: a,
                title: i,
                styles: p
            }, o));
        };
    },
    162: function(e93, t68, n47) {
        "use strict";
        var a45 = n47(6), r = n47.n(a45), i = n47(0), c = n47.n(i), o17 = n47(5), s = n47.n(o17), l = (n47(158), n47(10)), u = (n47(163), {
            "./sticky-container.scss": {
                "sticky-container": "ap5SohHH",
                "is-sticky": "_2ExEwWJ-"
            }
        });
        t68.a = function(e) {
            var t = e.children, n = e.className, a = e.styleName, o = e.isSticky, d = Object(i.useRef)(null), f = Object(l.y)(d);
            return c.a.createElement("nav", {
                id: "nav",
                ref: d,
                className: (n ? n + " " : "") + r()(s()("sticky-container", {
                    "is-sticky": f && o
                }, a), u, {
                    handleMissingStyleName: "warn"
                })
            }, "function" == typeof t ? t({
                isOnTop: f
            }) : t);
        };
    },
    164: function(e94, t69, n48) {
        "use strict";
        n48.d(t69, "b", function() {
            return r11;
        });
        var a = n48(77), r11 = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "smooth", r = document.getElementById(e);
            if (r) {
                var i = window.scrollY + r.getBoundingClientRect().top + t;
                Object(a.a)(window, {
                    top: i,
                    behaviour: n
                });
            }
        };
        t69.a = r11;
    },
    165: function(e95, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z",
                fill: "currentColor"
            }));
        }
        r.defaultProps = {
            viewBox: "0 0 24 24"
        }, e95.exports = r, r.default = r;
    },
    166: function(e96, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("g", {
                fill: "#FFF",
                fillRule: "evenodd"
            }, [
                a.createElement("path", {
                    d: "M0 1l11 11 1-1L1 0z",
                    key: 0
                }),
                a.createElement("path", {
                    d: "M12 1L1 12l-1-1L11 0z",
                    key: 1
                }), 
            ]));
        }
        r.defaultProps = {
            viewBox: "0 0 12 12"
        }, e96.exports = r, r.default = r;
    },
    1665: function(e, t, n) {
        n(239), e.exports = n(1710);
    },
    1666: function(e, t, n) {
        e.exports = {
            "skill-card": "_1CcIs6rb",
            label: "_1B5hZCzU",
            description: "_2dnbOkNI",
            "arrow-icon": "_1yXEpCGe",
            title: "_1krgXfdD"
        };
    },
    1667: function(e, t, n) {
        e.exports = {
            container: "_2peSdwbc",
            "card-item": "_1aqspQax"
        };
    },
    1668: function(e, t, n) {
        e.exports = {
            "outer-container": "_3_EO8Mkn",
            wrapper: "_39Lzds-I",
            "description-container": "_1WZ5Xwjp",
            title: "_311yePWs",
            description: "u1iedYYg",
            "cta-container": "GIOjmfqs"
        };
    },
    167: function(e97, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("g", {
                transform: "translate(0 .5)",
                fill: "none",
                fillRule: "evenodd"
            }, [
                a.createElement("rect", {
                    fill: "#00CC83",
                    width: "20",
                    height: "20",
                    rx: "10",
                    key: 0
                }),
                a.createElement("path", {
                    fill: "#FFF",
                    d: "M13.034 6.667l-3.895 3.91-1.933-1.942-1.373 1.379 1.934 1.942 1.372 1.377 5.267-5.289z",
                    key: 1
                }), 
            ]));
        }
        r.defaultProps = {
            width: "20",
            height: "21",
            viewBox: "0 0 20 21"
        }, e97.exports = r, r.default = r;
    },
    168: function(e98, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, [
                a.createElement("rect", {
                    fill: "#D42551",
                    width: "20",
                    height: "20",
                    rx: "10",
                    key: 0
                }),
                a.createElement("path", {
                    stroke: "#FFF",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M10 11.671V5.838M9.992 14.17a.204.204 0 00-.2.213.212.212 0 00.21.205h0a.205.205 0 00.201-.213.21.21 0 00-.203-.204h-.004",
                    key: 1
                }), 
            ]));
        }
        r.defaultProps = {
            viewBox: "0 0 20 20"
        }, e98.exports = r, r.default = r;
    },
    169: function(e99, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M1 8l4.5 4.5L15 0",
                stroke: "currentColor",
                fill: "none"
            }));
        }
        r.defaultProps = {
            viewBox: "0 0 16 13"
        }, e99.exports = r, r.default = r;
    },
    170: function(e100, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M7.944 1l3.27 3.27-3.27 3.272M0 4.353h10.552",
                stroke: "#fff",
                fill: "none"
            }));
        }
        r.defaultProps = {
            width: "12",
            height: "8"
        }, e100.exports = r, r.default = r;
    },
    171: function(e101, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "M0 4h11.253M8 .5L11.5 4 8 7.5",
                fill: "transparent",
                stroke: "#204ecf"
            }));
        }
        r.defaultProps = {
            height: "8",
            width: "12"
        }, e101.exports = r, r.default = r;
    },
    1710: function(e102, t70, n49) {
        "use strict";
        n49.r(t70), n49(19), n49(17), n49(14), n49(62), n49(25), n49(26), n49(20), n49(15);
        var a46 = n49(2), r12 = n49.n(a46), i20 = n49(4), c11 = n49.n(i20), o18 = n49(6), s8 = n49.n(o18), l11 = n49(0), u = n49.n(l11), d9 = n49(5), f = n49.n(d9), m7 = n49(89), p = n49(277), b5 = n49(12), g = n49(129), v = n49(372), h = n49(231), y3 = n49(425), E = n49(174), _2 = n49(348), O2 = n49(279), j2 = n49(238), w = n49(16), S = n49(76), k2 = n49(702), N2 = (n49(176), n49(9), n49(71)), C3 = n49(262), P2 = n49(263), x2 = (n49(24), n49(346)), L2 = (n49(1666), function(e) {
            var t = e.title, n = e.description, a = e.href, r = e.linkLabel, i = e.className;
            return u.a.createElement("a", {
                className: (i ? i + " " : "") + "_1CcIs6rb",
                href: a
            }, u.a.createElement("p", {
                className: "_1krgXfdD"
            }, t), u.a.createElement("p", {
                className: "_2dnbOkNI"
            }, n), u.a.createElement("p", {
                className: "_1B5hZCzU"
            }, r, "В ", u.a.createElement(x2.a, {
                className: "_1yXEpCGe"
            })));
        }), T2 = (n49(1667), function(e103) {
            var t = e103.cards, n = e103.className;
            return u.a.createElement("div", {
                className: (n ? n + " " : "") + "_2peSdwbc"
            }, t.map(function(e) {
                return u.a.createElement(L2, r12()({
                    key: e.title,
                    className: "_1aqspQax " + (e && e.className || "")
                }, e));
            }));
        }), I2 = n49(1119), R2 = n49.n(I2), M = function(e) {
            var t = e.navigation, n = e.skills, a = e.vertical, r = t.title, i = t.description, c = t.items;
            return u.a.createElement(u.a.Fragment, null, a !== b5.g.Developers && !!c.length && u.a.createElement(w.a, {
                semantic: !0,
                width: w.a.Variant.Width.Fixed
            }, u.a.createElement(N2.a, {
                dataId: "skills-title"
            }, r), u.a.createElement(C3.a, {
                className: "_1_M0NXug",
                copy: i
            }), u.a.createElement(T2, {
                className: "_3JEfiilm",
                cards: c
            })), u.a.createElement(w.a, {
                semantic: !0,
                width: w.a.Variant.Width.Fixed
            }, u.a.createElement(N2.a, {
                dataId: "skills-title"
            }, n.title), u.a.createElement(C3.a, {
                className: "_1_M0NXug",
                copy: n.description
            }), u.a.createElement(P2.a, {
                skillPages: n.skillPages,
                cta: n.cta,
                className: R2.a["skill-list"]
            })));
        }, D = n49(703), A1 = n49(7), U1 = n49.n(A1), z2 = n49(149), q2 = n49(31), V = (n49(1668), function(e) {
            var t = e.title, n = e.description, a = e.cta, i = a.href, c = a.label, o = a.inlineStyles, s = U1()(a, [
                "href",
                "label",
                "inlineStyles"
            ]);
            return u.a.createElement(w.a, null, u.a.createElement(z2.a, {
                className: "_3_EO8Mkn",
                tag: "div"
            }, u.a.createElement("div", {
                className: "_39Lzds-I"
            }, u.a.createElement("div", {
                className: "_1WZ5Xwjp"
            }, u.a.createElement("p", {
                className: "_311yePWs"
            }, t), u.a.createElement("p", {
                className: "u1iedYYg"
            }, n)), u.a.createElement("div", {
                className: "GIOjmfqs"
            }, u.a.createElement(q2.a, r12()({
                type: q2.a.Variant.Theme.CTA,
                url: i,
                style: o,
                dataId: "schedule-call-cta"
            }, s), c)))));
        }), B = n49(704), G2 = n49(659), F2 = n49(229), H2 = n49(396), W1 = (n49(529), n49(1083), function(e) {
            var t = e.imageUrl, n = e.fullName, a = e.jobTitle, r = e.previousCompanyName, i = e.className;
            return u.a.createElement("div", {
                className: (i ? i + " " : "") + "_3q-q3fMO"
            }, u.a.createElement("img", {
                src: t,
                alt: n,
                role: "presentation"
            }), u.a.createElement("div", {
                className: "_2J7BEx94"
            }, u.a.createElement("p", {
                className: "uHKVNGgM"
            }, n), u.a.createElement("p", {
                className: "_1jFs5KiU"
            }, u.a.createElement("span", {
                className: "_2uTCLxwa"
            }, a), "Previously at", " ", r)));
        }), K2 = n49(878), Y = (n49(1084), function(e) {
            var t = e.title, n = e.showcaseTalent, a = e.backgroundImageUrl, r = e.topSearch, i = r.autocompleteUrl, c = r.resultsPageUrl, o = e.searchWidgetSection;
            return u.a.createElement(F2.a, {
                className: "_1YL-b3De",
                url: a,
                as: "section"
            }, u.a.createElement(w.a, {
                width: w.a.Variant.Width.Fixed,
                className: "T44QPik2"
            }, u.a.createElement(W1, n)), u.a.createElement(H2.b.ContextProvider, {
                autocompleteUrl: i
            }, u.a.createElement(K2.a, {
                title: t,
                searchWidgetSection: o,
                resultsPageUrl: c
            })));
        }), Q = n49(705), J = n49(706), X = n49(547), Z = n49(861), $ = n49.n(Z), ee = {
            styles: {
                "hire-cta-container": "WuilS12d",
                "hire-cta": "_2YX6JCrU",
                "grid-title": "_16uPIJtp",
                "cross-links-section": "_3-fdWyAD",
                "top-three-percent": "_2lTrYQlj",
                "navbar-with-search": "_3CDv-3am"
            }
        };
        function te(e, t71) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t71 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function ne(e) {
            var t72, n;
            for(t72 = 1; t72 < arguments.length; t72++)n = null != arguments[t72] ? arguments[t72] : {
            }, t72 % 2 ? te(Object(n), !0).forEach(function(t) {
                c11()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var ae = Object(m7.b)(b5.d.VerticalLanding, {
            NavbarVertical: v.a,
            Hero: G2.a,
            HeroWithSearch: Y,
            FeatureStepper: O2.a,
            ClientsGrid: _2.a,
            Trustbar: j2.a,
            TrustPilotWidget: k2.a,
            MeetTalent: J.a,
            FAQ: y3.a
        }, {
            Hero: {
                defer: !1
            },
            NavbarVertical: {
                defer: !1
            },
            HeroWithSearch: {
                defer: !1
            }
        });
        t70.default = function(e) {
            var t = e.data, n = t.page, a = t.requestMetadata, i = n.crossVerticalSection, c = n.ctaSection, o = n.dynamicBlogPostsSection, l = n.dynamicSkillJobsPagesSection, d = n.featuredBlogPostsSection, m = n.dynamicSkillPagesSection, b = n.footerSection, y = n.heroSection, _ = n.searchableHeroSection, O = n.navbarSection, j = n.sidebar, k = n.navigationSection, N = n.scheduleACallSection, C = n.talentListSection, P = n.trustpilotSection, x = n.testimonialsGridSection, L = n.timelineSection, T = n.trustbar, I = n.faqSection, R = n.vertical, A = n.publicUrl, U = n.bounceModals, z = n.seo, q = n.slug, G = ne(ne({
            }, Object(p.c)(a, {
                templateId: p.a.VERTICAL_LANDING_PAGE
            })), P), F = a.platformSessionUrl, H = a.sidebarSkillsUrl, W = a.topSearch, K = null == _ ? void 0 : _.enabled;
            return u.a.createElement(g.a, r12()({
                isPartiallyHydrated: !0,
                isSidebarEnabled: !!(null == j ? void 0 : j.enabled),
                page: {
                    publicUrl: A,
                    bounceModals: U,
                    vertical: R,
                    seo: z,
                    slug: q
                }
            }, {
                requestMetadata: a
            }), u.a.createElement(ae.NavbarVertical, r12()({
                vertical: R,
                platformSessionUrl: F,
                sidebarSkillsUrl: H
            }, {
                navbarData: O,
                variant: K && v.a.Variant.Dark,
                sidebar: Object(S.b)({
                    sidebar: j,
                    topSearch: W,
                    sidebarSkillsUrl: H
                }, b),
                className: s8()(f()({
                    "navbar-with-search": K
                }), ee, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    vertical: R,
                    platformSessionUrl: F,
                    sidebarSkillsUrl: H
                }.className || "")
            })), K ? u.a.createElement(u.a.Fragment, null, u.a.createElement(ae.HeroWithSearch, r12()({
            }, _, {
                topSearch: W
            })), u.a.createElement(w.a, {
                forceSpace: !0,
                space: w.a.Variant.Space.Medium
            }, T && u.a.createElement(ae.Trustbar, T))) : u.a.createElement(ae.Hero, r12()({
            }, y, {
                trustbar: T
            })), u.a.createElement(w.a, {
                space: K ? w.a.Variant.Space.None : w.a.Variant.Space.Large
            }, u.a.createElement(ae.TrustPilotWidget, G)), K && u.a.createElement(w.a, {
                space: w.a.Variant.Space.None
            }, u.a.createElement(ae.Hero, r12()({
                animated: !1,
                className: "_2lTrYQlj " + (y && y.className || "")
            }, y))), u.a.createElement(w.a, null, u.a.createElement(ae.FeatureStepper, L)), u.a.createElement(M, {
                navigation: k,
                skills: m,
                vertical: R.name
            }), u.a.createElement(V, N), u.a.createElement(ae.MeetTalent, C), u.a.createElement(w.a, null, u.a.createElement(ae.ClientsGrid, r12()({
            }, x, {
                styles: {
                    title: $.a["grid-title"]
                }
            }))), I && u.a.createElement(w.a, null, u.a.createElement(ae.FAQ, I)), i && u.a.createElement(X.a, i), u.a.createElement(Q.a, d), u.a.createElement(D.a, o), l && u.a.createElement(B.a, l), u.a.createElement("div", {
                className: "WuilS12d"
            }, u.a.createElement(h.a, r12()({
            }, c, {
                cta: c.ctas[0],
                className: "_2YX6JCrU " + (c && c.className || "")
            }))), u.a.createElement(E.a, b));
        };
    },
    172: function(e104, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, a.createElement("path", {
                d: "m.707.707 13.678 13.678-13.678 13.677",
                fill: "none",
                stroke: "currentColor"
            }));
        }
        r.defaultProps = {
            viewBox: "0 0 15 29"
        }, e104.exports = r, r.default = r;
    },
    173: function(e105, t73, n50) {
        "use strict";
        n50.d(t73, "a", function() {
            return c;
        }), n50(36), n50(70);
        var a = n50(0), r = n50(164), i = n50(88), c = function(e106) {
            var t = Object(i.a)(), n = Object(a.useCallback)(function() {
                t || Object(r.a)(location.hash.replace("#", ""), e106, "auto");
            }, [
                e106,
                t
            ]);
            return Object(a.useEffect)(function() {
                return window.addEventListener("hashchange", n), document.addEventListener("DOMContentLoaded", n), function() {
                    window.removeEventListener("hashchange", n);
                };
            }, [
                n
            ]), [
                function(e) {
                    e.target.getAttribute("href") === window.location.hash && e.preventDefault();
                },
                Object(a.useCallback)(function(e) {
                    window.location.hash && e && e.id && window.history.replaceState(null, null, document.location.pathname + "#" + e.id);
                }, []), 
            ];
        };
    },
    174: function(e107, t74, n51) {
        "use strict";
        n51(24);
        var a47 = n51(2), r13 = n51.n(a47), i21 = n51(6), c = n51.n(i21), o19 = n51(0), s = n51.n(o19), l12 = n51(5), u = n51.n(l12), d = (n51(9), n51(8)), f = n51(160), m = n51(149), p = n51(111), b = (n51(208), {
            "./footer.scss": {
                container: "_1cXxqsT8",
                "is-padding-top": "_1XY5XaF6",
                "links-container": "_2M_Xuie5",
                "legal-container": "_1Y3-upIm",
                column: "_1IGYFQew",
                "column-title": "uBxyYiCQ",
                "column-list": "GA1bS17F",
                "legal-list-item": "VsStGjXj",
                "is-title": "_2lf3U9la",
                "list-item": "_3ATfuKuZ",
                "is-text": "gtF3g8Jg",
                "legal-divider": "_39YHlWta",
                "legal-logo": "-mMkSI_A",
                "legal-links": "_9fVOHv9t",
                "is-theme-light": "_3xicDpfG",
                "sr-only": "eFMCsx1V"
            }
        }), g = {
            Theme: {
                Light: "light"
            },
            Padding: {
                Top: "top"
            }
        }, v = function(e) {
            var t = e.title, n = e.links, a = e.theme, i = p.a.Variant.Theme;
            return s.a.createElement("div", {
                className: "_1IGYFQew"
            }, s.a.createElement("h3", {
                className: "uBxyYiCQ"
            }, t), s.a.createElement(p.a, r13()({
                links: n
            }, {
                theme: a === g.Theme.Light ? i.Grey : i.Light
            })));
        }, h = function(e108) {
            var t75 = e108.columns, n52 = e108.socialMedia, a = e108.theme;
            return s.a.createElement("div", {
                className: "_2M_Xuie5"
            }, null == t75 ? void 0 : t75.map(function(e109) {
                var t76 = e109.links, n53 = e109.title;
                return s.a.createElement("div", {
                    key: n53,
                    className: "_1IGYFQew"
                }, s.a.createElement("h3", {
                    className: "uBxyYiCQ",
                    "data-id": "footer-column-title"
                }, n53), s.a.createElement("ul", null, t76.map(function(e) {
                    var t = e.href, n = e.label;
                    return s.a.createElement("li", {
                        key: t + n,
                        className: "_3ATfuKuZ gtF3g8Jg"
                    }, s.a.createElement("a", {
                        href: t
                    }, n));
                })));
            }), n52 && s.a.createElement(v, r13()({
            }, n52, {
                theme: a
            })));
        }, y = function(e110) {
            var t77 = e110.legal, n54 = e110.logoLink, a = n54.href, i = n54.label;
            return s.a.createElement("div", {
                className: "_1Y3-upIm"
            }, s.a.createElement("div", {
                className: "_39YHlWta"
            }), s.a.createElement("div", {
                className: "-mMkSI_A"
            }, s.a.createElement(f.a, r13()({
                headline: i,
                title: "Toptal Home Page"
            }, {
                href: a
            }))), s.a.createElement("ul", {
                className: "_9fVOHv9t"
            }, s.a.createElement("li", {
                className: "VsStGjXj _2lf3U9la"
            }, t77.title), t77.links.map(function(e) {
                var t = e.href, n = e.label;
                return s.a.createElement("li", {
                    key: n + t,
                    className: "VsStGjXj"
                }, s.a.createElement("a", r13()({
                    rel: "nofollow"
                }, {
                    href: t
                }), n));
            })));
        }, E = function(e) {
            var t = e.id, n = e.columns, a = e.socialMedia, r = e.legal, i = e.logoLink, o = e.theme, l = e.padding;
            return s.a.createElement(m.a, {
                id: t,
                tag: "footer",
                className: c()(u()("container", Object(d.a)({
                    theme: o,
                    padding: l
                })), b, {
                    handleMissingStyleName: "warn"
                })
            }, s.a.createElement("h2", {
                className: "eFMCsx1V"
            }, "Footer"), (a || !!(null == n ? void 0 : n.length)) && s.a.createElement(h, {
                socialMedia: a,
                columns: n,
                theme: o
            }), s.a.createElement(y, {
                legal: r,
                logoLink: i
            }));
        };
        E.Variant = g, t74.a = E;
    },
    175: function(e111, t78, n55) {
        "use strict";
        n55.d(t78, "b", function() {
            return l;
        }), n55(23);
        var a48 = n55(2), r = n55.n(a48), i22 = n55(7), c = n55.n(i22), o20 = n55(0), s = n55.n(o20), l = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return "https://player.vimeo.com/video/".concat(e, "?autoplay=").concat(t, "&playsinline=").concat(n);
        };
        t78.a = function(e) {
            var t = e.videoId, n = e.width, a = void 0 === n ? "100%" : n, i = e.height, o = void 0 === i ? "100%" : i, u = e.autoplay, d = void 0 !== u && u, f = e.playsinline, m = void 0 !== f && f, p = c()(e, [
                "videoId",
                "width",
                "height",
                "autoplay",
                "playsinline"
            ]);
            return s.a.createElement("iframe", r()({
                allowFullScreen: !0,
                webkitallowfullscreen: "true",
                mozallowfullscreen: "true",
                width: a,
                height: o,
                frameBorder: "0",
                autoPlay: d,
                allow: "autoplay",
                src: l(t, d, m)
            }, p));
        };
    },
    178: function(e112, t79, n56) {
        "use strict";
        n56(27), n56(33);
        var a49 = n56(2), r = n56.n(a49), i23 = n56(18), c12 = n56.n(i23), o21 = (n56(67), n56(35)), s9 = n56.n(o21), l13 = n56(1), u = n56.n(l13), d10 = n56(7), f8 = n56.n(d10), m8 = n56(38), p = n56.n(m8), b = n56(0), g = n56.n(b), v4 = n56(60), h = n56(61), y = n56(117), E2 = n56(6), _3 = n56.n(E2), O3 = n56(867), j3 = n56(57), w2 = n56.n(j3), S3 = n56(5), k3 = n56.n(S3), N = n56(11), C = n56(22), P = n56(8), x = n56(10), L = n56(42), T = n56(76), I = n56(181), R = n56.n(I), M = {
            styles: {
                container: "_1wvUW4LL",
                "is-visual-regression-test": "_3TXj8xmH",
                content: "W-nBtyo7",
                collapsed: "_1vlGCd1r",
                collapsing: "_3EuRC3QB",
                expanded: "_1x_tGecH",
                expanding: "_2GpEtntl"
            }
        }, D = Object(T.a)(R.a), A = function(e) {
            var t = e.children, n = e.parentRef, a = e.isOpen, i = e.onDismiss, c = Object(x.r)(i, n);
            return g.a.createElement(O3.a, r()({
                in: a,
                appear: !0,
                timeout: L.d
            }, !C.a && {
                classNames: D
            }), g.a.createElement("div", r()({
                ref: c
            }, {
                className: _3()(k3()("container", Object(P.b)({
                    isVisualRegressionTest: C.a
                })), M, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    ref: c
                }.className || "")
            }), g.a.createElement("div", {
                className: "W-nBtyo7"
            }, t)));
        }, U = (n56(215), function(e) {
            return !!(null == e ? void 0 : e.scrollTop);
        }), z = function(e) {
            var t = e.children, n = e.className, a = e.onScrollToggle, i = void 0 === a ? p.a : a, c = Object(b.useRef)(null), o = Object(x.y)(null, {
                controlRef: c,
                probeFn: U
            });
            return Object(b.useEffect)(function() {
                i(o);
            }, [
                i,
                o
            ]), g.a.createElement("div", r()({
                className: (n ? n + " " : "") + "_3ey0le1s " + ({
                    ref: c
                }.className || "")
            }, {
                ref: c
            }), t);
        }, q = n56(49), V = n56(93), B = (n56(216), {
            "./header.scss": {
                container: "_3n2OQqU6",
                "is-sticky": "_3L4Q6K18",
                header: "_3OCaO4Sm",
                "button-close": "_2dbM_zjP"
            }
        }), G = function(e) {
            var t = e.isSticky, n = e.onDismiss;
            return g.a.createElement("div", {
                className: _3()(k3()("container", Object(P.b)({
                    isSticky: t
                })), B, {
                    handleMissingStyleName: "warn"
                })
            }, g.a.createElement("div", {
                className: "_3OCaO4Sm"
            }, g.a.createElement(q.a, null), g.a.createElement("div", {
                className: "_2dbM_zjP",
                onClick: n
            }, g.a.createElement(V.d, null))));
        }, F = n56(118), H = n56.n(F), W = {
            styles: {
                container: "_3O25N8Wt",
                "is-visual-regression-test": "_2oqWtl8O",
                "sidebar-is-open": "_3qlrr8Ue",
                collapsed: "_2uOUGZ8s",
                collapsing: "_1fjhlsRh",
                expanded: "_3HVRGLKB",
                expanding: "rAcwt06K"
            }
        }, K = Object(T.a)(H.a), Y = function(e113) {
            var t = e113.isOpen, n = e113.onDismiss, a = e113.children, i = Object(b.useRef)(null);
            Object(x.A)(t, !C.a && H.a["sidebar-is-open"]);
            var c = Object(b.useCallback)(function(e) {
                "Escape" === e.key && n();
            }, [
                n
            ]);
            Object(b.useEffect)(function() {
                t && i.current.focus();
            }, [
                t
            ]);
            var o = Object(x.z)(!1), s = u()(o, 2), l = s[0], d = s[1];
            if (!Object(N.a)()) return null;
            var f = document.getElementById(L.a), m = g.a.createElement(O3.a, r()({
                in: t,
                timeout: L.d,
                mountOnEnter: !0,
                unmountOnExit: !0
            }, !C.a && {
                classNames: K
            }), g.a.createElement("div", r()({
                tabIndex: "-1",
                onKeyDown: c
            }, {
                ref: i
            }, {
                className: _3()(k3()("container", Object(P.b)({
                    isVisualRegressionTest: C.a
                })), W, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    ref: i
                }.className || "")
            }), g.a.createElement(A, r()({
                onDismiss: n,
                isOpen: t
            }, {
                parentRef: i
            }), g.a.createElement(G, {
                onDismiss: n,
                isSticky: l
            }), g.a.createElement(z, {
                onScrollToggle: d
            }, a))));
            return f && Object(N.a)() ? w2.a.createPortal(m, f) : (console.warn("Could not find #".concat(L.a, " node.\n Switched to inline rendering mode.")), m);
        }, Q = n56(102), J = (n56(217), function() {
            return g.a.createElement("div", {
                className: "_2DsED4qK"
            }, g.a.createElement(v4.a, null));
        }), X = function(e114) {
            var t80 = e114.isOpen, a = e114.onDismiss, i = void 0 === a ? p.a : a, o = e114.onLoad, l = void 0 === o ? p.a : o, d = e114.kind, m = e114.sidebarSkillsUrl, v = e114.topSearch, E = f8()(e114, [
                "isOpen",
                "onDismiss",
                "onLoad",
                "kind",
                "sidebarSkillsUrl",
                "topSearch", 
            ]), _ = Object(b.useState)(!1), O = u()(_, 2), j = O[0], w = O[1];
            Object(b.useEffect)(function() {
                t80 && (w(!0), Object(y.f)("open", d));
            }, [
                t80,
                d
            ]);
            var S = Object(b.useMemo)(function() {
                return j ? g.a.lazy(s9()(c12.a.mark(function e115() {
                    var t;
                    return c12.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return t = Promise.all([
                                    n56.e(0),
                                    n56.e(197)
                                ]).then(n56.bind(null, 2278)), l(), e.abrupt("return", t);
                            case 3:
                            case "end":
                                return e.stop();
                        }
                    }, e115);
                }))) : h.a;
            }, [
                l,
                j
            ]), k = Object(b.useCallback)(function() {
                i(), Object(y.f)("close", d);
            }, [
                i,
                d
            ]);
            return g.a.createElement(Y, r()({
                isOpen: t80
            }, {
                onDismiss: k
            }), g.a.createElement(b.Suspense, {
                fallback: g.a.createElement(J, null)
            }, g.a.createElement(Q.b, {
                sidebarSkillsUrl: m,
                kind: d,
                topSearch: v
            }, g.a.createElement(S, {
                sections: E
            }))));
        };
        X.dataPropTypes = Q.b.propTypes, X.ContextProvider = Q.b, X.Kind = {
            Client: "client",
            Talent: "talent"
        }, t79.a = X;
    },
    179: function(e, t, n) {
        "use strict";
        n.d(t, "i", function() {
            return a;
        }), n.d(t, "h", function() {
            return r;
        }), n.d(t, "e", function() {
            return i;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "j", function() {
            return o;
        }), n.d(t, "b", function() {
            return s;
        }), n.d(t, "l", function() {
            return l;
        }), n.d(t, "k", function() {
            return u;
        }), n.d(t, "f", function() {
            return d;
        }), n.d(t, "d", function() {
            return f;
        }), n.d(t, "a", function() {
            return m;
        }), n.d(t, "g", function() {
            return p;
        });
        var a = "View Full Profile", r = "Show More", i = "See Post", c = "Read More", o = "View More", s = "Learn More", l = "View Project", u = "View on LinkedIn", d = "See Their Profiles", f = "Register to view profile", m = "No-Risk Trial, Pay Only If Satisfied.", p = "Send Message";
    },
    181: function(e, t, n) {
        e.exports = {
            container: "_1wvUW4LL",
            "is-visual-regression-test": "_3TXj8xmH",
            content: "W-nBtyo7",
            collapsed: "_1vlGCd1r",
            collapsing: "_3EuRC3QB",
            expanded: "_1x_tGecH",
            expanding: "_2GpEtntl"
        };
    },
    186: function(e, t, n) {
        e.exports = {
            content: "_2iMRJu_T"
        };
    },
    191: function(e, t, n) {
        e.exports = {
            "is-loading": "_1rwcd8Qg",
            text: "_2NmneBKH",
            spinner: "vus_t9VU"
        };
    },
    193: function(e, t, n) {
        e.exports = {
            container: "_2fCaLc8V",
            scale: "_2MVUZXqY",
            "is-size-tiny": "S9kGp0pM",
            "is-size-small": "_2IO7YLhY",
            "is-size-medium": "_1aXoWsYQ",
            "is-size-large": "_1foXSAlV",
            circular: "_2OnLG4G0",
            rotate: "_2YfUS-rq",
            "is-static": "_3bQ8Np11",
            path: "_1f5mXS6c",
            dash: "ySzGGupe"
        };
    },
    201: function(e116, t81, n57) {
        "use strict";
        n57.d(t81, "a", function() {
            return k4;
        }), n57(19), n57(23), n57(17), n57(14), n57(62), n57(25), n57(26), n57(20), n57(15);
        var a50 = n57(4), r14 = n57.n(a50), i24 = n57(2), c = n57.n(i24), o22 = n57(7), s = n57.n(o22), l14 = n57(6), u = n57.n(l14), d11 = n57(0), f = n57.n(d11), m9 = n57(3), p4 = n57.n(m9), b6 = n57(5), g = n57.n(b6), v = n57(8), h6 = n57(9), y = n57(32), E = n57(31), _ = n57(45);
        function O4(e, t82) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t82 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        n57(326);
        var j = {
            "./blog-card.scss": {
                "blog-card": "_2AOdQKTV",
                content: "KxHj95DN",
                "is-size-large": "_3avJuwHw",
                cover: "_3l9VlKPe",
                "avatar-container": "_3xeRr4HI",
                avatar: "_1kyxjycq",
                breadcrumbs: "_27W_cjOv",
                "breadcrumb-item": "_31aQZWyI",
                title: "PnmEEQ_-",
                link: "_35iK7zmm",
                author: "_1mjIKiS3",
                excerpt: "IpHlFM7w",
                "reading-time": "_3XfNRYjc",
                "reading-continue": "IYgLf9Fx"
            }
        }, w = {
            Size: {
                Large: "large"
            }
        }, S4 = function(e) {
            var t = e.title, n = e.excerpt, a = e.readingTime, r = e.publicUrl, i = e.domain, o = e.topic, l = e.postAuthor, d = e.size, m = e.biggerRegularCoverImageUrl, p = e.biggerRetinaCoverImageUrl, b = e.bigRegularCoverImageUrl, h = e.bigRetinaCoverImageUrl, O = e.gaCategory, S = e.gaEvent, k = e.gaLabel, N = s()(e, [
                "title",
                "excerpt",
                "readingTime",
                "publicUrl",
                "domain",
                "topic",
                "postAuthor",
                "size",
                "biggerRegularCoverImageUrl",
                "biggerRetinaCoverImageUrl",
                "bigRegularCoverImageUrl",
                "bigRetinaCoverImageUrl",
                "gaCategory",
                "gaEvent",
                "gaLabel", 
            ]), C = d === w.Size.Large, P = O ? Object(y.b)(O, S, k) : {
            };
            return f.a.createElement("div", c()({
                "data-id": "blog-card"
            }, N, {
                className: u()(g()("blog-card", Object(v.a)({
                    size: d
                })), j, {
                    handleMissingStyleName: "warn"
                }) + " " + (N && N.className || "")
            }), f.a.createElement("a", c()({
                className: "_3l9VlKPe " + (P && P.className || ""),
                href: r,
                "data-happo-hide": !0
            }, P, {
                "aria-hidden": "true",
                tabIndex: "-1"
            }), f.a.createElement(_.a, {
                src: h,
                alt: "",
                height: "100"
            }, f.a.createElement(_.a.Source, {
                srcSet: "".concat(b, " 1x, ").concat(h, " 2x"),
                media: "(max-width: 600px)"
            }), f.a.createElement(_.a.Source, {
                srcSet: "".concat(m, " 1x, ").concat(p, " 2x"),
                media: "(min-width: 601px) and (max-width: 767px)"
            }), C && f.a.createElement(_.a.Source, {
                srcSet: "".concat(m, " 1x, ").concat(p, " 2x"),
                media: "(min-width: 768px) and (max-width: 1023px)"
            }), C && f.a.createElement(_.a.Source, {
                srcSet: "".concat(b, " 1x, ").concat(h, " 2x"),
                media: "(min-width: 1024px)"
            }), !C && f.a.createElement(_.a.Source, {
                srcSet: "".concat(b, " 1x, ").concat(h, " 2x")
            }))), f.a.createElement("div", {
                className: "KxHj95DN"
            }, f.a.createElement("div", {
                className: "_3xeRr4HI"
            }, f.a.createElement(_.a, {
                src: l.imageUrl,
                className: "_1kyxjycq",
                alt: "",
                width: "48",
                height: "48",
                effect: "opacity"
            })), f.a.createElement("div", {
                className: "_27W_cjOv"
            }, f.a.createElement(E.b, c()({
                className: "_31aQZWyI " + (P && P.className || ""),
                url: i.publicUrl
            }, P), i.title), f.a.createElement(E.b, c()({
                className: "_31aQZWyI " + (P && P.className || ""),
                url: o.publicUrl
            }, P), o.name)), f.a.createElement("h3", {
                className: "PnmEEQ_-"
            }, f.a.createElement("a", c()({
                className: "_35iK7zmm " + (P && P.className || ""),
                href: r
            }, P), t)), f.a.createElement("div", {
                className: "_1mjIKiS3"
            }, "by ", f.a.createElement("strong", null, l.fullName)), C && f.a.createElement(f.a.Fragment, null, f.a.createElement("p", {
                className: "IpHlFM7w"
            }, n), f.a.createElement("div", {
                className: "_3XfNRYjc"
            }, a > 0 && f.a.createElement("span", null, a, " minute read"), f.a.createElement("a", c()({
                className: "IYgLf9Fx " + (P && P.className || ""),
                href: r
            }, P), "Continue Reading")))));
        }, k4 = function(e) {
            var t83, n;
            for(t83 = 1; t83 < arguments.length; t83++)n = null != arguments[t83] ? arguments[t83] : {
            }, t83 % 2 ? O4(Object(n), !0).forEach(function(t) {
                r14()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O4(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }({
            title: p4.a.string.isRequired,
            excerpt: p4.a.string.isRequired,
            readingTime: p4.a.number.isRequired,
            publicUrl: p4.a.string.isRequired,
            biggerRegularCoverImageUrl: p4.a.string.isRequired,
            biggerRetinaCoverImageUrl: p4.a.string.isRequired,
            bigRegularCoverImageUrl: p4.a.string.isRequired,
            bigRetinaCoverImageUrl: p4.a.string.isRequired,
            domain: p4.a.shape({
                title: p4.a.string.isRequired,
                publicUrl: p4.a.string.isRequired
            }),
            topic: p4.a.shape({
                name: p4.a.string.isRequired,
                publicUrl: p4.a.string.isRequired
            }),
            postAuthor: p4.a.shape({
                fullName: p4.a.string.isRequired,
                imageUrl: p4.a.string.isRequired
            }),
            size: Object(h6.j)(w.Size)
        }, h6.c);
        S4.Variant = w, t81.b = S4;
    },
    202: function(e, t, n) {
        e.exports = {
            outer: "_13AzE63U",
            inner: "_2E9Ot9TG"
        };
    },
    204: function(e117, t84, n58) {
        "use strict";
        var a51 = n58(2), r15 = n58.n(a51), i = n58(7), c = n58.n(i), o = n58(6), s = n58.n(o), l = n58(0), u = n58.n(l), d = n58(5), f = n58.n(d), m = n58(8), p = (n58(9), n58(31)), b = (n58(252), {
            "./skill-tag.scss": {
                tag: "_3a3YH6eA",
                "is-theme-caption-bold": "_1-_pAGYo"
            }
        }), g = function(e) {
            var t = e.url, n = c()(e, [
                "url"
            ]);
            return t ? u.a.createElement(p.b, r15()({
                url: t
            }, n, {
                "data-id": "skill-tag"
            })) : u.a.createElement("span", n);
        }, v = function(e) {
            var t = e.tag, n = e.style, a = e.theme, r = e.className;
            return u.a.createElement(g, {
                url: t.href,
                style: n,
                className: (r ? r + " " : "") + s()(f()("tag", Object(m.a)({
                    theme: a
                })), b, {
                    handleMissingStyleName: "warn"
                })
            }, t.label);
        };
        v.Variant = {
            Theme: {
                CaptionBold: "caption-bold"
            }
        }, t84.a = v;
    },
    206: function(e, t, n) {
    },
    208: function(e, t, n) {
        e.exports = {
            "sr-only": "eFMCsx1V",
            "legal-list-item": "VsStGjXj",
            "list-item": "_3ATfuKuZ",
            "is-text": "gtF3g8Jg",
            container: "_1cXxqsT8",
            "is-padding-top": "_1XY5XaF6",
            "links-container": "_2M_Xuie5",
            "legal-container": "_1Y3-upIm",
            column: "_1IGYFQew",
            "column-title": "uBxyYiCQ",
            "column-list": "GA1bS17F",
            "is-title": "_2lf3U9la",
            "legal-divider": "_39YHlWta",
            "legal-logo": "-mMkSI_A",
            "legal-links": "_9fVOHv9t",
            "is-theme-light": "_3xicDpfG"
        };
    },
    21: function(e, t) {
        e.exports = {
            publicPath: "https://frontier-assets.toptal.com/",
            uploadsUri: "https://bs-uploads.toptal.io",
            shortenerUri: "https://www.toptal.com/shorten_url",
            giorgioUri: "https://www.toptal.com/hire",
            pageInfoUri: "https://www.toptal.com/_info.json",
            appEnv: "production",
            sentryDsn: "https://j9beeXQfyC8vKs8Gs5luIDDr5SP72a2J@o66666.ingest.sentry.io/6660666",
            sentryPublicKey: "19ed9832c74f4e6a98c87dd03ed06662"
        };
    },
    210: function(e, t, n) {
        e.exports = {
            link: "yzdVnirF",
            list: "_2KkykVzB",
            item: "_1ffC2emj",
            "is-theme-grey": "_1UQKDH6z",
            "is-theme-blue": "_3NypLa63",
            "is-theme-light": "_26W7MbnX"
        };
    },
    212: function(e, t, n) {
        e.exports = {
            container: "_1bOB9L8B",
            "fade-in": "-NIeWj2_",
            modal: "_1jVWti9i",
            "modal-is-opened": "_13Ds6A9F"
        };
    },
    213: function(e118, t85, n59) {
        "use strict";
        var a52 = n59(2), r = n59.n(a52), i25 = n59(7), c = n59.n(i25), o23 = n59(0), s = n59.n(o23), l15 = n59(57), u9 = n59.n(l15), d = n59(11), f = n59(10), m = n59(80), p5 = n59(104), b7 = n59(212), g = n59.n(b7), v5 = function(e119) {
            var t = e119.open, n = e119.focus, a = e119.onDismiss, i = e119.children, l = e119.className, p = c()(e119, [
                "open",
                "focus",
                "onDismiss",
                "children",
                "className"
            ]), b = Object(o23.useRef)(null);
            if (Object(f.A)(t, g.a["modal-is-opened"]), Object(o23.useEffect)(function() {
                t && n && b.current.focus();
            }, [
                t,
                n
            ]), !t) return null;
            var v = document.getElementById(m.a), h = s.a.createElement(m.b.Provider, {
                value: {
                    onDismiss: a,
                    parentRef: b
                }
            }, s.a.createElement("div", r()({
                className: (l ? l + " " : "") + "_1bOB9L8B " + (p && p.className || ""),
                onKeyDown: function(e) {
                    "Escape" === e.key && a();
                },
                ref: b,
                tabIndex: n && -1
            }, p), i));
            return v && Object(d.a)() ? u9.a.createPortal(h, v) : (console.warn('Could not find "<Modal.Host />" node.\n Switched to inline rendering mode.'), h);
        };
        v5.Host = p5.a, v5.Content = function(e) {
            var t = e.className, n = e.children, a = c()(e, [
                "className",
                "children"
            ]), i = Object(m.c)(), o = i.onDismiss, l = i.parentRef, u = Object(f.r)(o, l);
            return s.a.createElement("div", r()({
                className: (t ? t + " " : "") + "_1jVWti9i " + (a && a.className || ""),
                ref: u
            }, a), n);
        }, t85.a = v5;
    },
    214: function(e120, t86, n60) {
        "use strict";
        var a53 = n60(0), r = n60.n(a53), i = n60(179);
        n60(273), t86.a = function(e) {
            var t = e.text, n = void 0 === t ? i.i : t, a = e.className;
            return r.a.createElement("div", {
                className: (a ? a + " " : "") + "_2Nig7dk2"
            }, r.a.createElement("span", null, n));
        };
    },
    215: function(e, t, n) {
        e.exports = {
            content: "_3ey0le1s"
        };
    },
    216: function(e, t, n) {
        e.exports = {
            container: "_3n2OQqU6",
            "is-sticky": "_3L4Q6K18",
            header: "_3OCaO4Sm",
            "button-close": "_2dbM_zjP"
        };
    },
    217: function(e, t, n) {
        e.exports = {
            loader: "_2DsED4qK"
        };
    },
    218: function(e, t, n) {
        e.exports = {
            root: "GL1BsDfm",
            "is-margin-standard": "Her0Bht-",
            "is-margin-bottom": "K0oC-ssM"
        };
    },
    219: function(e121, t87, n61) {
        "use strict";
        var a54 = n61(1), r = n61.n(a54), i26 = n61(2), c13 = n61.n(i26), o24 = n61(7), s10 = n61.n(o24), l = n61(0), u10 = n61.n(l), d12 = n61(5), f9 = n61.n(d12), m10 = n61(22), p6 = (n61(9), n61(28)), b8 = n61(213), g4 = n61(175), v6 = n61(222), h7 = n61.n(v6), y4 = Object(l.forwardRef)(function(e, t) {
            var n = e.type, a = s10()(e, [
                "type"
            ]);
            return u10.a.createElement("button", c13()({
                type: "button",
                className: (f9()(h7.a["is-".concat(n)]) ? f9()(h7.a["is-".concat(n)]) + " " : "") + "FQmfHJcO " + (a && a.className || ""),
                ref: t,
                "aria-label": "Close popup"
            }, a), "close" === n ? u10.a.createElement("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 18 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, u10.a.createElement("path", {
                d: "M1.210526.210526l15.578948 15.578948M16.789474.210526L1.210526 15.789474"
            })) : u10.a.createElement("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 8 17",
                xmlns: "http://www.w3.org/2000/svg"
            }, u10.a.createElement("path", {
                d: "M.707.707l7.79 7.79m0 0l-7.79 7.79",
                fill: "currentColor",
                fillRule: "evenodd"
            })));
        }), E3 = function(e122) {
            var t88 = e122.open, n62 = e122.videos, a55 = e122.onClose, i27 = e122.onChange, c14 = e122.titleComponent, o25 = function(e123) {
                var t89 = e123.open, n63 = e123.videos, a56 = e123.selected, i = e123.onChange, c = e123.onClose, o = e123.gaCategory, s = Object(l.useState)(0), u = r()(s, 2), d = u[0], f = u[1], m = Object(l.useRef)(Date.now()), b = a56 ? a56.index : d, g = n63[b];
                Object(l.useEffect)(function() {
                    v();
                }, [
                    t89
                ]);
                var v = function() {
                    var e = Date.now(), t = e - m.current;
                    return m.current = e, Math.round(t / 1000);
                }, h = function(e) {
                    var t = e.trackingLabel, n = e.id;
                    return t || n;
                }, y = Object(l.useCallback)(function() {
                    o && Object(p6.d)(o, "modal_watch", h(g), {
                        value: v()
                    });
                }, [
                    o,
                    g
                ]), E = Object(l.useCallback)(function() {
                    y(), i && i(null), c();
                }, [
                    i,
                    c,
                    y
                ]), _ = Object(l.useCallback)(function(e) {
                    return function() {
                        for(var t = b + e; (t = t >= n63.length ? 0 : t < 0 ? n63.length - 1 : t) !== b && !n63[t].id;)t += e;
                        f(t);
                        var a = e > 0 ? "modal_prev" : "modal_next";
                        y(), o && Object(p6.d)(o, a, h(n63[t])), i && i({
                            index: t,
                            action: a
                        });
                    };
                }, [
                    n63,
                    b,
                    i,
                    o,
                    y
                ]);
                return {
                    video: g,
                    handleClose: E,
                    handlePrev: _(1),
                    handleNext: _(-1)
                };
            }({
                open: t88,
                videos: n62,
                selected: e122.selected,
                onChange: i27,
                onClose: a55,
                gaCategory: e122.gaCategory
            }), s11 = o25.handlePrev, d13 = o25.handleNext, f10 = o25.video, v7 = o25.handleClose, h8 = Object(l.useRef)(), E4 = Object(l.useRef)();
            return u10.a.createElement(b8.a, {
                open: t88,
                focus: !0,
                onDismiss: v7,
                className: "_3XAqPobq"
            }, u10.a.createElement(b8.a.Content, {
                className: "_32589ZBq"
            }, u10.a.createElement("div", {
                className: "_12PhPQ9y"
            }, u10.a.createElement(y4, {
                type: "close",
                "data-id": "video-popup-close",
                onClick: v7,
                "aria-label": "close popup",
                ref: h8,
                onKeyDown: function(e) {
                    e.shiftKey && "Tab" === e.key && (E4.current.dataset.focusPrevious = "true", E4.current.focus());
                }
            }), u10.a.createElement("p", {
                className: "_5m6ZtOza",
                "data-id": "video-popup-title"
            }, c14 ? u10.a.createElement(c14, f10) : f10.title), n62.length > 1 && u10.a.createElement("div", {
                className: "_3w7vfekF"
            }, u10.a.createElement(y4, {
                type: "prev",
                "data-id": "video-popup-prev",
                onClick: s11
            }), u10.a.createElement(y4, {
                type: "next",
                "data-id": "video-popup-next",
                onClick: d13
            }))), u10.a.createElement("div", {
                className: "_1azDnTt_"
            }, !m10.a && u10.a.createElement(g4.a, {
                videoId: f10.id,
                autoplay: !0,
                playsinline: !0
            })), u10.a.createElement("div", {
                tabIndex: "0",
                ref: E4,
                onFocus: function() {
                    "true" === E4.current.dataset.focusPrevious ? E4.current.dataset.focusPrevious = "false" : h8.current.focus();
                }
            })));
        }, _4 = (n61(23), n61(38)), O = n61.n(_4), j = (n61(267), function(e124) {
            var t = e124.children, n = e124.videos, a = e124.className, i = e124.style, o = e124.onOpen, s = void 0 === o ? O.a : o, d = e124.handleVideoChange, f = e124.gaCategory, m = e124.title, p = Object(l.useState)(!1), b = r()(p, 2), g = b[0], v = b[1], h = Object(l.useRef)();
            return u10.a.createElement(u10.a.Fragment, null, u10.a.createElement("button", c13()({
                type: "button",
                onClick: function(e) {
                    v(!0), s(e);
                },
                className: (a ? a + " " : "") + "GD313NS8 " + ({
                    style: i
                }.className || ""),
                "aria-label": m && "".concat(t, " - ").concat(m),
                "aria-haspopup": "dialog",
                "aria-controls": "modal-host",
                ref: h
            }, {
                style: i
            }), t), u10.a.createElement(E3, c13()({
                open: g
            }, {
                videos: n,
                gaCategory: f
            }, {
                onClose: function() {
                    v(!1), h.current.focus();
                },
                onChange: d
            })));
        }), w = {
            Player: g4.a,
            Popup: E3,
            Button: j
        };
        t87.a = w;
    },
    22: function(e, t, n) {
        "use strict";
        n(189), n(36), n(92), n(150);
        var a = "undefined" != typeof window && [
            window.__IS_HAPPO_RUN,
            "loki" === window.navigator.userAgent,
            window.location.search.startsWith("?id=loki-"), 
        ].some(Boolean);
        t.a = a;
    },
    222: function(e, t, n) {
        e.exports = {
            "toolbar-button": "FQmfHJcO",
            modal: "_3XAqPobq",
            "modal-content": "_32589ZBq",
            title: "_5m6ZtOza",
            player: "_1azDnTt_",
            toolbar: "_12PhPQ9y",
            "toolbar-nav": "_3w7vfekF",
            "is-prev": "_3ziMYWU6"
        };
    },
    224: function(e125, t90, n64) {
        "use strict";
        n64.d(t90, "a", function() {
            return u11;
        });
        var a57 = n64(1), r16 = n64.n(a57), i28 = n64(6), c15 = n64.n(i28), o = n64(0), s = n64.n(o), l16 = (n64(285), {
            "./carousel.scss": {
                root: "_1YVFS3k_",
                slide: "RnscLuxI",
                active: "_1zefWubJ"
            }
        }), u11 = function(e) {
            var t = e.active, n = void 0 !== t && t, a = e.style, r = e.className, i = e.children;
            return s.a.createElement("div", {
                style: a,
                className: (r ? r + " " : "") + c15()("slide ".concat(n ? "active" : ""), l16, {
                    handleMissingStyleName: "warn"
                })
            }, i);
        };
        t90.b = function(e126) {
            var t = e126.numberOfSlides, n = e126.defaultActiveItemIndex, a = void 0 === n ? 0 : n, i = e126.changeInterval, c = void 0 === i ? 5000 : i, l = e126.children, u = e126.style, d = e126.className, f = Object(o.useState)(a), m = r16()(f, 2), p = m[0], b = m[1];
            return Object(o.useEffect)(function() {
                var e = setTimeout(function() {
                    return b((p + 1) % t);
                }, c);
                return function() {
                    return clearTimeout(e);
                };
            }, [
                p,
                c,
                t
            ]), s.a.createElement("div", {
                className: (d ? d + " " : "") + "_1YVFS3k_",
                style: u
            }, l(p));
        };
    },
    229: function(e127, t91, n65) {
        "use strict";
        var a58 = n65(2), r = n65.n(a58), i29 = n65(7), c = n65.n(i29), o26 = n65(0), s = n65.n(o26);
        t91.a = function(e) {
            var t = e.url, n = e.className, a = e.as, i = void 0 === a ? "div" : a, o = e.children, l = c()(e, [
                "url",
                "className",
                "as",
                "children"
            ]);
            return s.a.createElement(i, r()({
                style: {
                    backgroundImage: t ? "url(".concat(t, ")") : null
                },
                className: n
            }, l), o);
        };
    },
    231: function(e128, t92, n66) {
        "use strict";
        var a59 = n66(2), r = n66.n(a59), i30 = n66(7), c = n66.n(i30), o27 = n66(6), s = n66.n(o27), l17 = n66(0), u = n66.n(l17), d14 = n66(5), f = n66.n(d14), m = (n66(9), n66(47)), p = n66(8), b = n66(31), g = (n66(313), {
            "./hire-cta.scss": {
                container: "_2-8QnyrN",
                title: "_1wB6xpRs",
                btn: "_2-tX5EK8",
                "is-theme-blue": "b8TCI_zN",
                "is-orientation-vertical": "_67_yUPlK",
                "is-padding-none": "_1Soxeblk"
            }
        }), v8 = function(e) {
            var t = e.title, n = e.cta, a = n.href, i = n.label, o = c()(n, [
                "href",
                "label"
            ]), l = e.className, d = e.orientation, v = e.theme, h = e.buttonVariant, y = void 0 === h ? b.b.Variant.Theme.CTA : h, E = e.padding, _ = e.onClick, O = e.inlineStyles, j = e.dataId;
            return u.a.createElement("div", {
                className: (l ? l + " " : "") + s()(f()("container", Object(p.a)({
                    orientation: d,
                    theme: v,
                    padding: E
                })), g, {
                    handleMissingStyleName: "warn"
                })
            }, u.a.createElement("p", {
                className: "_1wB6xpRs",
                "data-id": "hire-cta-title"
            }, Object(m.a)(t)), u.a.createElement(b.a, r()({
                className: "_2-tX5EK8 " + ({
                    onClick: _,
                    dataId: j
                }.className || "") + (o ? " " + (o.className || "") : ""),
                url: a,
                type: y,
                style: O
            }, {
                onClick: _,
                dataId: j
            }, o), i));
        };
        v8.Variant = {
            Theme: {
                Blue: "blue"
            },
            Orientation: {
                Vertical: "vertical"
            },
            Padding: {
                None: "none"
            }
        }, t92.a = v8;
    },
    234: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), n(223);
        var a = n(327);
        n.d(t, "b", function() {
            return a.a;
        });
        var r = {
            delay: 500,
            triggerOnce: !0
        };
    },
    238: function(e129, t93, n67) {
        "use strict";
        n67(24);
        var a60 = n67(2), r17 = n67.n(a60), i31 = n67(1), c16 = n67.n(i31), o28 = n67(0), s = n67.n(o28), l18 = n67(3), u12 = n67.n(l18), d15 = n67(47), f11 = n67(10), m11 = n67(9), p7 = n67(28), b9 = n67(16), g = n67(219), v9 = (n67(19), n67(17), n67(14), n67(338), n67(51), n67(25), n67(26), n67(20), n67(64), n67(15), n67(4)), h9 = n67.n(v9), y5 = n67(7), E = n67.n(y5), _ = n67(6), O = n67.n(_), j = n67(5), w = n67.n(j), S = n67(22), k = n67(224), N = (n67(27), n67(33), n67(11)), C = function(e) {
            var t = e.identifier, a = E()(e, [
                "identifier"
            ]);
            if (!Object(N.a)()) return null;
            var r = s.a.lazy(function() {
                return n67(301)("./".concat(t));
            });
            return s.a.createElement(o28.Suspense, {
                fallback: null
            }, r ? s.a.createElement(r, a) : null);
        }, P = n67(175);
        function x(e, t94) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t94 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function L(e) {
            var t95, n;
            for(t95 = 1; t95 < arguments.length; t95++)n = null != arguments[t95] ? arguments[t95] : {
            }, t95 % 2 ? x(Object(n), !0).forEach(function(t) {
                h9()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        n67(250);
        var T = {
            "./clients-carousel.scss": {
                "clients-carousel": "_1CPABHY2",
                "is-invisible": "_3GX3Lxnr",
                clients: "_1VyYPMhf",
                "logo-container": "_2amITTdw",
                logo: "wOPq9JTO",
                "is-light": "_3OqXGefV",
                label: "_3VvCA52f",
                "is-static": "_29fwj9AM",
                "is-loaded": "_3LF-kzsO",
                "fade-in": "_2JYQswAH",
                "is-clickable": "_38ijoCqA"
            }
        }, I = function(e) {
            var t = e.children, n = e.url, a = e.onClick, i = E()(e, [
                "children",
                "url",
                "onClick"
            ]);
            return n ? s.a.createElement("a", r17()({
            }, i, {
                rel: "nofollow",
                href: n,
                onClick: a,
                className: "_38ijoCqA " + (i && i.className || ""),
                "aria-label": i.title
            }), t) : s.a.createElement("span", i, t);
        }, R = function(e130) {
            var t = e130.title, n = e130.identifier, a = e130.videoIdentifier, r = e130.originalIndex, i = e130.onClick, c = e130.light;
            return s.a.createElement(I, {
                key: t,
                title: t,
                "aria-label": "Watch the ".concat(t, " case study"),
                url: a && Object(P.b)(a, !0),
                onClick: function(e) {
                    e.preventDefault(), a && i && i({
                        index: r
                    });
                },
                className: O()(w()("logo-container", {
                    "is-light": c
                }), T, {
                    handleMissingStyleName: "warn"
                })
            }, s.a.createElement(C, {
                className: "wOPq9JTO",
                identifier: n
            }), a && s.a.createElement("p", {
                className: "_3VvCA52f"
            }, "Watch the case study"));
        }, M = Object(o28.memo)(function(e131) {
            var t = e131.clients, n = e131.activeItemIndex, a61 = e131.numberOfSlides, i = e131.chunkSize, c = e131.light, o = e131.onClick;
            return Array.from({
                length: a61
            }, function(e132, a) {
                var l = i * a, u = i * (a + 1);
                u > t.length && (l -= u - t.length, u = t.length);
                var d = t.slice(l, u);
                return s.a.createElement(k.a, {
                    className: "_1VyYPMhf",
                    active: n === a,
                    key: a
                }, d.map(function(e) {
                    return s.a.createElement(R, r17()({
                        key: e.title
                    }, e, {
                        light: c,
                        onClick: o
                    }));
                }));
            });
        }), D = function(e133) {
            var t96 = e133.chunkSize, n = e133.onClick, a = e133.className, r = e133.light, i = E()(e133, [
                "chunkSize",
                "onClick",
                "className",
                "light"
            ]), l = Object(o28.useState)(!1), u = c16()(l, 2), d = u[0], f = u[1], m = !t96;
            m && (t96 = i.clients.length);
            var p = Math.ceil(i.clients.length / t96), b = Object(o28.useMemo)(function() {
                return i.clients.map(function(e, t) {
                    return L(L({
                    }, e), {
                    }, {
                        originalIndex: t
                    });
                });
            }, [
                i.clients
            ]);
            return Object(o28.useEffect)(function() {
                var e = setTimeout(function() {
                    f(!0);
                }, 1000);
                return function() {
                    clearTimeout(e);
                };
            }, []), s.a.createElement(k.b, {
                numberOfSlides: p,
                changeInterval: S.a ? 1440000 : 5000,
                className: (a ? a + " " : "") + O()(w()("clients-carousel", {
                    "is-loaded": d && !S.a,
                    "is-invisible": m,
                    "is-static": S.a
                }), T, {
                    handleMissingStyleName: "warn"
                })
            }, function(e) {
                return s.a.createElement(M, {
                    clients: b,
                    activeItemIndex: e,
                    numberOfSlides: p,
                    chunkSize: t96,
                    light: r,
                    onClick: n
                });
            });
        }, A = (n67(251), 6), U = function(e134) {
            var t97 = e134.title, n68 = e134.clients, a62 = e134.className, i = e134.light, l = function(e135) {
                var t = Object(o28.useState)(null), n = c16()(t, 2), a = n[0], r = n[1];
                return {
                    chunkSize: Object(f11.C)({
                        forMobileOnly: 2,
                        forTabletOnly: 3,
                        forDesktopOnly: 4,
                        forDesktopLarge: A
                    }, null),
                    videos: Object(o28.useMemo)(function() {
                        return e135.map(function(e) {
                            return {
                                id: e.videoIdentifier,
                                title: e.title,
                                trackingLabel: e.identifier
                            };
                        });
                    }, [
                        e135
                    ]),
                    selected: a,
                    setSelected: r
                };
            }(n68), u = l.chunkSize, m = l.setSelected, v = l.videos, h = l.selected, y = Object(o28.useCallback)(function(e) {
                var t = e.index;
                Object(p7.d)("trustbar_video", "video_open", v[t].trackingLabel), m({
                    index: t
                });
            }, [
                v,
                m
            ]);
            return s.a.createElement("div", {
                className: (a62 ? a62 + " " : "") + "U5_JdGVY"
            }, s.a.createElement(b9.a, {
                className: "KN3Bqp5f",
                width: b9.a.Variant.Width.Fixed
            }, s.a.createElement("p", {
                className: "_1eAmcXxe"
            }, Object(d15.a)(t97)), s.a.createElement(D, r17()({
                className: "_2zZGXHsn " + ({
                    clients: n68,
                    chunkSize: u,
                    light: i
                }.className || "")
            }, {
                clients: n68,
                chunkSize: u,
                light: i
            }, {
                onClick: y
            })), s.a.createElement(g.a.Popup, r17()({
                videos: v,
                selected: h
            }, {
                open: !!h,
                onChange: m,
                onClose: m,
                titleComponent: function(e) {
                    var t = e.title;
                    return s.a.createElement(s.a.Fragment, null, s.a.createElement("span", null, t), s.a.createElement("span", {
                        className: "_10JizEvG"
                    }, " Case Study"));
                },
                gaCategory: "trustbar_video"
            }))));
        };
        U.dataPropTypes = {
            title: u12.a.string,
            clients: Object(m11.a)({
                title: u12.a.string.isRequired,
                identifier: u12.a.string.isRequired,
                videoIdentifier: u12.a.oneOfType([
                    u12.a.string,
                    u12.a.number
                ])
            })
        }, t93.a = U;
    },
    245: function(e, t, n) {
        e.exports = {
            card: "_2aYXDjr3",
            "is-press-coverage": "_1LwwOY5T",
            "is-article": "k4Kjb1Dh",
            cta: "ZxJ1uE03",
            "card-title": "Qq-iPMxM",
            logo: "_1uIAd9Ad",
            "logo-image": "jeqnJEqF",
            "collaboration-logo": "_1NqI8JmY",
            "icon-quote": "_16aTA28q",
            "quote-text": "_1UhmiUga",
            "card-author-container": "_1liAAfjS",
            "card-author": "_2O26Zuqj",
            "card-author-title": "ivvUQSqp",
            "press-coverage-read-article": "_3p_xLXZw",
            "is-video": "_1doXJJpm",
            "video-cover": "_3-8TMpeS",
            "article-cover": "_2ud0q49P",
            "no-video-preview": "_1fycIOYl"
        };
    },
    248: function(e136, t98, n) {
        "use strict";
        var a = n(11), r = (n(24), n(62), n(0)), i = n.n(r), c = n(37), o = n.n(c), s = function(e) {
            var t = e.children;
            return Object(a.a)() ? null : t;
        };
        s.BreadcrumbList = function(e137) {
            var t99 = e137.items;
            return i.a.createElement(o.a, null, i.a.createElement("script", {
                type: "application/ld+json"
            }, JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: t99.map(function(e, t) {
                    return {
                        "@type": "ListItem",
                        position: t + 1,
                        name: e.name,
                        item: e.url
                    };
                })
            })));
        }, t98.a = s;
    },
    252: function(e, t, n) {
        e.exports = {
            tag: "_3a3YH6eA",
            "is-theme-caption-bold": "_1-_pAGYo"
        };
    },
    257: function(e138, t100, n69) {
        "use strict";
        var a63 = n69(1), r18 = n69.n(a63), i32 = n69(2), c = n69.n(i32), o29 = n69(7), s = n69.n(o29), l19 = n69(6), u13 = n69.n(l19), d16 = n69(0), f = n69.n(d16), m12 = n69(5), p8 = n69.n(m12), b = n69(10), g5 = n69(105), v10 = (n69(349), {
            "./accordion.scss": {
                container: "_29UvQdrG",
                group: "_1BHWVawP",
                main: "_3crLzOOj",
                "is-expanded": "_30rdsl3I"
            }
        }), h = f.a.createContext({
        }), y6 = function(e) {
            var t = e.expanded, n = void 0 !== t && t, a = e.as, i = void 0 === a ? "div" : a, o = e.className, l = e.children, d = s()(e, [
                "expanded",
                "as",
                "className",
                "children"
            ]), m = Object(b.z)(n), g = r18()(m, 2), y = g[0], E = g[1];
            return f.a.createElement(h.Provider, {
                value: {
                    expanded: y,
                    toggleExpanded: E
                }
            }, f.a.createElement(i, c()({
            }, d, {
                className: (o ? o + " " : "") + u13()(p8()("container", {
                    "is-expanded": y
                }), v10, {
                    handleMissingStyleName: "warn"
                }) + " " + (d && d.className || "")
            }), "function" == typeof l ? l({
                expanded: y
            }) : l));
        };
        y6.Main = function(e) {
            var t = e.as, n = void 0 === t ? "div" : t, a = e.className, r = e.children, i = s()(e, [
                "as",
                "className",
                "children"
            ]), o = Object(d16.useContext)(h).toggleExpanded;
            return f.a.createElement(g5.a, c()({
                onClick: o,
                className: (a ? a + " " : "") + "_3crLzOOj " + (i && i.className || ""),
                as: n
            }, i), r);
        }, y6.Group = function(e) {
            var t = e.as, n = void 0 === t ? "div" : t, a = e.className, i = e.children, o = s()(e, [
                "as",
                "className",
                "children"
            ]), l = Object(d16.useContext)(h).expanded, u = Object(d16.useRef)(null), m = Object(d16.useState)(0), p = r18()(m, 2), g = p[0], v = p[1], y = Object(b.F)();
            return Object(d16.useEffect)(function() {
                v(l && u.current ? u.current.scrollHeight : 0);
            }, [
                l,
                y
            ]), f.a.createElement(n, c()({
                ref: u,
                style: {
                    maxHeight: g
                },
                className: (a ? a + " " : "") + "_1BHWVawP " + (o && o.className || "")
            }, o), i);
        }, t100.a = y6;
    },
    261: function(e139, t101, n) {
        "use strict";
        n.d(t101, "b", function() {
            return r;
        }), n(36), n(70);
        var a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            return e.replace(/(?:\r\n|\r|\n)/g, t);
        };
        t101.a = a;
        var r = function(e) {
            return a(e, "<br />");
        };
    },
    262: function(e140, t102, n70) {
        "use strict";
        var a64 = n70(2), r = n70.n(a64), i33 = n70(7), c = n70.n(i33), o30 = n70(0), s = n70.n(o30);
        n70(315), t102.a = function(e) {
            var t = e.as, n = void 0 === t ? "div" : t, a = e.copy, i = e.className, o = c()(e, [
                "as",
                "copy",
                "className"
            ]);
            return s.a.createElement(n, r()({
                className: (i ? i + " " : "") + "_1MmTcDEI " + (o && o.className || "")
            }, o, {
                dangerouslySetInnerHTML: {
                    __html: a
                }
            }));
        };
    },
    263: function(e141, t103, n71) {
        "use strict";
        n71(24);
        var a65 = n71(6), r = n71.n(a65), i34 = n71(0), c = n71.n(i34), o31 = n71(5), s = n71.n(o31), l = n71(47), u = n71(8), d = (n71(9), n71(31)), f = (n71(306), {
            "./skills-list.scss": {
                container: "_1cwKlNuP",
                title: "_8hq62nwZ",
                "skills-list": "zjL-4_Jq",
                "list-item": "rY5wqR2J",
                "arrow-link": "_2ESoqxj-",
                "is-theme-dark": "lLehEWy0",
                link: "_2cc321tl"
            }
        }), m = function(e142) {
            var t104 = e142.title, n72 = e142.skillPages, a = e142.cta, i = e142.theme, o = e142.className;
            return c.a.createElement("div", {
                className: (o ? o + " " : "") + r()(s()("container", Object(u.a)({
                    theme: i
                })), f, {
                    handleMissingStyleName: "warn"
                })
            }, t104 && c.a.createElement("h2", {
                className: "_8hq62nwZ",
                "data-id": "skills-list-title"
            }, t104), c.a.createElement("ul", {
                className: "zjL-4_Jq"
            }, n72.map(function(e) {
                var t = e.label, n = e.href;
                return c.a.createElement("li", {
                    key: t + n,
                    className: "rY5wqR2J"
                }, c.a.createElement(d.b, {
                    url: n,
                    className: "_2cc321tl",
                    "data-id": "skill-link"
                }, t));
            }), a && c.a.createElement("li", {
                className: "rY5wqR2J"
            }, c.a.createElement(d.b, {
                type: d.b.Variant.Theme.Highlighted,
                className: "_2ESoqxj-",
                url: a.href
            }, Object(l.a)(a.label)))));
        };
        m.Variant = {
            Theme: {
                Dark: "dark"
            }
        }, t103.a = m;
    },
    267: function(e, t, n) {
        e.exports = {
            "play-btn": "GD313NS8"
        };
    },
    277: function(e143, t105, n73) {
        "use strict";
        n73.d(t105, "c", function() {
            return c;
        }), n73.d(t105, "a", function() {
            return s;
        }), n73(19), n73(17), n73(14), n73(25), n73(26), n73(20), n73(15);
        var a66 = n73(4), r = n73.n(a66);
        function i(e, t106) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t106 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        var c = function(e144, t107) {
            var n74 = e144.vendorScriptsSettings.trustpilotSettings.businessUnitId;
            return o(function(e) {
                var t108, n;
                for(t108 = 1; t108 < arguments.length; t108++)n = null != arguments[t108] ? arguments[t108] : {
                }, t108 % 2 ? i(Object(n), !0).forEach(function(t) {
                    r()(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
                return e;
            }({
                businessUnitId: n74
            }, t107));
        }, o = function(e) {
            return {
                businessUnitId: e.businessUnitId,
                templateId: e.templateId,
                locale: "en-US",
                href: "https://www.trustpilot.com/review/toptal.com",
                disableSEOSnippet: e.disableSEOSnippet
            };
        }, s = {
            SKILL_PAGE_SIDEBAR: "53aa8807dec7e10d38f59f32",
            SKILL_PAGE: "53aa8912dec7e10d38f59f36",
            HIRING_GUIDE_PAGE: "5406e65db0d04a09e042d5fc",
            HOME_PAGE: "5406e65db0d04a09e042d5fc",
            VERTICAL_LANDING_PAGE: "5406e65db0d04a09e042d5fc"
        };
        t105.b = o;
    },
    279: function(e145, t109, n75) {
        "use strict";
        n75(19), n75(176), n75(24);
        var a67 = n75(1), r19 = n75.n(a67), i35 = n75(6), c = n75.n(i35), o32 = n75(0), s = n75.n(o32), l20 = (n75(223), n75(5)), u = n75.n(l20), d = n75(234), f = n75(22), m = n75(47), p9 = (n75(9), n75(8)), b10 = n75(123), g = n75.n(b10), v = n75(16), h = n75(52), y = n75(58), E = n75(48), _ = (n75(340), {
            "./feature-stepper.scss": {
                container: "_3fZLMPLS",
                "is-theme-dark-blue": "_2dbxKckM",
                title: "_35agMcd-",
                "steps-container": "_1epx56Ug",
                steps: "TTvbhb5G",
                "step-arrow": "p0URF4Wy",
                "is-align-left": "_1BxnkSO_",
                "is-align-center": "_2Rtbw_d5",
                "is-static": "lnGffDGZ",
                "chevron-icon": "_3c1caa7v",
                step: "_2pfxVgGF",
                "step-container": "_1P9Tvb24",
                "steps-animated": "_2qGKqRqZ",
                "steps-counter-enter": "_3OLpik2C",
                "steps-content-enter": "qDI0Ujkt",
                "steps-arrow-enter": "tnt6E2os",
                "step-number": "_2ecxW5_b",
                "step-content": "_1TA7PM5e",
                "is-theme-light-blue": "_2FXfVeAR",
                "step-title": "_2yVHU0Wx",
                "step-description": "_12ydEHM0"
            }
        }), O = function(e146) {
            var t110 = e146.items, n = s.a.createElement("div", {
                className: "p0URF4Wy"
            }, s.a.createElement(g.a, {
                className: "_3c1caa7v"
            })), a = y.d / t110.length, i36 = Object(d.b)(d.a), o = r19()(i36, 2), l = o[0], p = o[1], b = s.a.createElement("div", {
                className: "_1epx56Ug"
            }, s.a.createElement(h.b, {
                role: "list",
                className: c()(u()("steps", {
                    "is-static": f.a
                }), _, {
                    handleMissingStyleName: "warn"
                })
            }, t110.map(function(e, t) {
                var r = e.title, i = e.description;
                return s.a.createElement(h.a, {
                    key: t,
                    tablet: a,
                    className: "_1P9Tvb24",
                    role: "listitem"
                }, s.a.createElement("div", {
                    className: "_2pfxVgGF"
                }, 0 === t && n, s.a.createElement("div", {
                    className: "_2ecxW5_b"
                }, t + 1), n, s.a.createElement("div", {
                    className: "_1TA7PM5e"
                }, s.a.createElement("h3", {
                    className: "_2yVHU0Wx",
                    "data-id": "step-title"
                }, r), s.a.createElement("div", {
                    className: "_12ydEHM0"
                }, Object(m.a)(i)))));
            })));
            return f.a ? b : s.a.createElement("div", {
                ref: l,
                className: c()(u()({
                    "steps-animated": p
                }), _, {
                    handleMissingStyleName: "warn"
                })
            }, b);
        }, j = {
            Theme: {
                DarkBlue: "dark-blue",
                LightBlue: "light-blue"
            },
            Align: {
                Center: "center",
                Left: "left"
            }
        }, w = function(e) {
            var t = e.title, n = e.items, a = e.className, r = e.theme, i = e.align, o = void 0 === i ? j.Align.Center : i;
            return s.a.createElement("div", {
                className: (a ? a + " " : "") + c()(u()("container", Object(p9.a)({
                    theme: r,
                    align: o
                })), _, {
                    handleMissingStyleName: "warn"
                })
            }, s.a.createElement(v.a, {
                semantic: !0,
                width: v.a.Variant.Width.Fixed,
                space: v.a.Variant.Space.None
            }, s.a.createElement(E.a, {
                content: Object(m.a)(t),
                as: "h2",
                isUnstyled: !0,
                className: "_35agMcd-",
                dataId: "feature-stepper-title"
            }), s.a.createElement(O, {
                items: n
            })));
        };
        w.Variant = j, t109.a = w;
    },
    28: function(e147, t111, n76) {
        "use strict";
        n76.d(t111, "a", function() {
            return R;
        }), n76.d(t111, "b", function() {
            return M;
        }), n76.d(t111, "d", function() {
            return D;
        }), n76.d(t111, "c", function() {
            return A;
        }), n76(19), n76(23), n76(17), n76(14), n76(56), n76(110), n76(62), n76(185), n76(25), n76(26), n76(20), n76(27), n76(33), n76(36), n76(64), n76(92), n76(233), n76(15), n76(68), n76(75);
        var a68 = n76(7), r20 = n76.n(a68), i37 = n76(18), c17 = n76.n(i37), o33 = (n76(67), n76(35)), s12 = n76.n(o33), l21 = n76(1), u = n76.n(l21), d17 = n76(66), f = n76.n(d17), m13 = n76(63), p10 = n76.n(m13), b = n76(4), g = n76.n(b), v = n76(99), h = n76(97), y = n76(39), E = n76(84), _ = n76(30), O = n76.n(_), j = function() {
            function e148() {
                f()(this, e148), g()(this, "_triggered", !1), g()(this, "_triggerArgs", []), g()(this, "_callbacks", []);
            }
            return p10()(e148, [
                {
                    key: "push",
                    value: function(e) {
                        this._triggered ? e.apply(void 0, O()(this._triggerArgs)) : this._callbacks = [].concat(O()(this._callbacks), [
                            e
                        ]);
                    }
                },
                {
                    key: "trigger",
                    value: function() {
                        var e149, t, n, a = this;
                        if (this._triggered) throw new Error("Callbacks already triggered");
                        for(this._triggered = !0, e149 = arguments.length, t = new Array(e149), n = 0; n < e149; n++)t[n] = arguments[n];
                        this._triggerArgs = [].concat(t), this._callbacks.forEach(function(e) {
                            return e.apply(void 0, O()(a._triggerArgs));
                        });
                    }
                }, 
            ]), e148;
        }(), w = n76(53), S = n76(46), k = (n76(94), n76(51), n76(232), n76(70), n76(103), n76(11)), N = {
            location: Object(k.a)() ? window.location : "",
            href: function() {
                return this.location.href;
            },
            hash: function() {
                return this.location.hash;
            },
            setHref: function(e) {
                return this.location.href = e, this.location.href;
            },
            setHash: function(e) {
                return this.location.hash = e, this.location.hash;
            },
            reload: function() {
                return this.location.reload();
            }
        };
        var C = n76(85);
        function P(e, t112) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t112 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function x(e) {
            var t113, n;
            for(t113 = 1; t113 < arguments.length; t113++)n = null != arguments[t113] ? arguments[t113] : {
            }, t113 % 2 ? P(Object(n), !0).forEach(function(t) {
                g()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var L, T = function(e150) {
            return e150.filter(function(e) {
                return e.googleAnalyticsDimension;
            }).reduce(function(e, t) {
                var n = t.googleAnalyticsDimension, a = t.variant;
                return Object.assign(e, g()({
                }, n, a));
            }, {
            });
        }, I = function() {
            function e151(t115) {
                var n = this, a = t115.applicationId, r = t115.group, i = t115.chameleonExperiments, c = void 0 === i ? [] : i, o = t115.platformSessionUrl, s = void 0 === o ? "" : o, l = t115.platformReferrersUrl, d = void 0 === l ? "" : l, m = t115.codeVersions, p = void 0 === m ? {
                } : m;
                f()(this, e151), this.trackingId = a, this.platformSessionUrl = s, this.platformReferrersUrl = d, this.trackingAllowed = !1, this.group = r, this.chameleonExperiments = c, this.codeVersions = p, this.sendToGoogleAnalytics = this.sendToGoogleAnalytics.bind(this), this.enabled && (this.bootstrapGtag(), this.scriptPromise = Object(h.a)("https://www.googletagmanager.com/gtag/js?id=".concat(this.trackingId)), this.pageInfoPromise = Object(E.a)().catch(function() {
                }), this.currentRolePromise = new Promise(function(e) {
                    return Object(C.a)(n.platformSessionUrl, function(t) {
                        return e(t);
                    });
                }), this.waitForReadyState().then(function(e) {
                    var t116 = u()(e, 2)[1];
                    n.trackingAllowed = !!Object(S.a)() || Object(w.a)(t116.cookiePolicyType), n.configureGtag(), (function(e) {
                        if (window[e]) {
                            if (Array.isArray(window[e])) {
                                var t117 = window[e];
                                window[e] = new j(), t117.forEach(function(t) {
                                    return window[e].push(t);
                                });
                            } else window[e] instanceof j || y.a.warning('Failed to expose callbacks, "'.concat(window[e], '" has unexpected type.'));
                        } else window[e] = new j();
                        return window[e];
                    })("_runWhenGoogleAnalyticsReady").trigger();
                }).catch(function(e) {
                    y.a.error("Google Analytics failed to load", {
                        error: e
                    });
                }));
            }
            var t114;
            return p10()(e151, [
                {
                    key: "bootstrapGtag",
                    value: function() {
                        window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function() {
                            dataLayer.push(arguments);
                        };
                    }
                },
                {
                    key: "configureGtag",
                    value: function() {
                        var e152, t118, n, a, r, i, c = (e152 = !this.trackingAllowed, t118 = this.group, n = this.chameleonExperiments, a = this.codeVersions, Object.assign(function(e, t) {
                            return {
                                anonymize_ip: e,
                                content_group1: t,
                                site_speed_sample_rate: 25,
                                linker: [
                                    "www.toptal.com",
                                    "staging.toptal.net"
                                ],
                                custom_map: {
                                    dimension10: "client_id"
                                }
                            };
                        }(e152, t118), T(n), x({
                        }, (i = new URLSearchParams(window.location.search).get("utm_audience")) && {
                            dimension9: i
                        }), {
                            dimension22: (r = a).blackfish,
                            dimension23: r.frontier
                        }));
                        window.gtag("js", new Date()), window.gtag("config", this.trackingId, c);
                    }
                },
                {
                    key: "waitForReadyState",
                    value: function() {
                        var e = [
                            this.scriptPromise
                        ];
                        return Object(S.a)() || e.push(this.pageInfoPromise, this.currentRolePromise), Promise.all(e);
                    }
                },
                {
                    key: "_sendEvent",
                    value: (t114 = s12()(c17.a.mark(function e153() {
                        var t, n, a, r, i = arguments;
                        return c17.a.wrap(function(e) {
                            for(;;)switch(e.prev = e.next){
                                case 0:
                                    if (this.enabled) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, this.waitForReadyState();
                                case 4:
                                    for(n = i.length, a = new Array(n), r = 0; r < n; r++)a[r] = i[r];
                                    (t = window).gtag.apply(t, [
                                        "event"
                                    ].concat(a));
                                case 6:
                                case "end":
                                    return e.stop();
                            }
                        }, e153, this);
                    })), function() {
                        return t114.apply(this, arguments);
                    })
                },
                {
                    key: "bucketRole",
                    value: function() {
                        var e = this;
                        return this.waitForReadyState().then(function(t) {
                            var n = u()(t, 3)[2];
                            n && n.role_type && n.role_id && gtag("config", e.trackingId, {
                                send_page_view: !1,
                                dimension11: "".concat(n.role_type, "-").concat(n.role_id)
                            });
                        });
                    }
                },
                {
                    key: "track15secondsRead",
                    value: function() {
                        var t = this;
                        return this.track15secondsReadPromise || (this.track15secondsReadPromise = new Promise(function(n) {
                            setTimeout(function() {
                                t._sendEvent("read", {
                                    event_category: "15_seconds"
                                }).then(n);
                            }, e151.readTimeout);
                        })), this.track15secondsReadPromise;
                    }
                },
                {
                    key: "sendToGoogleAnalytics",
                    value: function(e) {
                        var t = e.name, n = e.delta, a = e.id;
                        return this._sendEvent(t, {
                            event_category: "web_vitals",
                            event_label: a,
                            value: Math.round("CLS" === t ? 1000 * n : n),
                            non_interaction: !0
                        });
                    }
                },
                {
                    key: "trackCoreWebVitals",
                    value: function() {
                        Object(v.a)(this.sendToGoogleAnalytics), Object(v.b)(this.sendToGoogleAnalytics), Object(v.c)(this.sendToGoogleAnalytics);
                    }
                },
                {
                    key: "trackReferrerSlug",
                    value: function() {
                        var e154 = this;
                        return (function(e155) {
                            var t119 = function() {
                                if ("string" == typeof N.hash()) return decodeURIComponent(N.hash().substring(1));
                            }();
                            if (!t119) return Promise.resolve();
                            !function(e) {
                                var t = e.indexOf("#");
                                t > -1 && N.setHash(e.slice(0, t));
                            }(t119 = t119.replace(/\./g, "#"));
                            var n77 = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: "referral_slug=".concat(t119)
                            };
                            return window.fetch(e155, n77).then(function(e) {
                                return e.json();
                            }).then(function(e) {
                                var n;
                                return e.slug ? (n = e.slug, N.setHash(N.hash().replace(n, "")), N.href().match(/#$/) && window.history && window.history.replaceState(null, window.document.title, N.href().split("#")[0]), t119) : null;
                            }).catch(function(e) {
                                y.a.error("setReferrerCookie Error", {
                                    error: e
                                });
                            });
                        })(this.platformReferrersUrl).then(function(t) {
                            if (t) return e154._sendEvent("landed", {
                                event_category: "referral_slug",
                                event_label: t
                            });
                        });
                    }
                },
                {
                    key: "trackBounceModalView",
                    value: function(e) {
                        return this._sendEvent("".concat(e, "_bounce_modal_view"), {
                            event_category: "bounce_modal",
                            non_interaction: !0
                        });
                    }
                },
                {
                    key: "trackBlogSubscription",
                    value: function(e) {
                        return this._sendEvent("subscribe", {
                            event_category: "blog",
                            event_label: e
                        });
                    }
                },
                {
                    key: "trackCoreTeamJobApplicationFormApplied",
                    value: function(e) {
                        return this._sendEvent("submitted_application", {
                            event_category: "core_team_applications",
                            event_label: e
                        });
                    }
                },
                {
                    key: "trackDynamicQuiz",
                    value: function(e, t, n, a) {
                        return this._sendEvent(t, x(x({
                            event_category: e
                        }, n && {
                            event_label: n
                        }), "number" == typeof a && {
                            value: a
                        }));
                    }
                },
                {
                    key: "trackHashHiringGuide",
                    value: function(e, t) {
                        return this._sendEvent(e, {
                            event_category: "hash_hiring_guide",
                            event_label: t
                        });
                    }
                },
                {
                    key: "trackEvent",
                    value: function(e) {
                        var t = e.eventCategory, n = e.eventAction, a = e.eventLabel, i = r20()(e, [
                            "eventCategory",
                            "eventAction",
                            "eventLabel"
                        ]);
                        return this._sendEvent(n, x({
                            event_category: t,
                            event_label: a
                        }, i));
                    }
                },
                {
                    key: "trackRemoteReadinessResultDownloaded",
                    value: function(e) {
                        return this._sendEvent("enterprise_remote_readiness_result_pdf_downloaded", {
                            event_category: "enterprise_remote_readiness_quiz",
                            event_label: e
                        });
                    }
                },
                {
                    key: "trackRemoteMaturityAssessment",
                    value: function(e, t) {
                        return this._sendEvent(e, {
                            event_category: "remote_maturity_assessment",
                            event_label: t
                        });
                    }
                },
                {
                    key: "trackRemoteReadinessQuizStarted",
                    value: function(e) {
                        return this.trackRemoteMaturityAssessment("redirected_to_quiz", e);
                    }
                },
                {
                    key: "trackSocialButtonClicked",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "social_networks";
                        return this._sendEvent("share", {
                            event_category: t,
                            event_label: e
                        });
                    }
                },
                {
                    key: "enabled",
                    get: function() {
                        return null != this.trackingId && this.trackingId.trim();
                    }
                }, 
            ]), e151;
        }();
        function R(e) {
            var t = e.applicationId, n = e.group, a = e.chameleonExperiments, r = e.platformSessionUrl, i = e.platformReferrersUrl, c = e.codeVersions, o = e.track15SecondsRead, s = void 0 === o || o;
            return L || ((L = new I({
                applicationId: t,
                group: n,
                chameleonExperiments: a,
                platformSessionUrl: r,
                platformReferrersUrl: i,
                codeVersions: c
            })).bucketRole(), L.trackReferrerSlug(), s && L.track15secondsRead(), L.trackCoreWebVitals()), L;
        }
        function M() {
            return L;
        }
        function D(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            };
            M() && M().trackEvent(x({
                eventCategory: e,
                eventAction: t,
                eventLabel: n
            }, a));
        }
        I.readTimeout = 15000;
        var A = function(e) {
            e.nativeEvent.shouldStopGAPropagation = !0;
        };
    },
    280: function(e156, t120, n78) {
        "use strict";
        n78.d(t120, "a", function() {
            return m14;
        });
        var a69 = n78(2), r = n78.n(a69), i38 = n78(18), c = n78.n(i38), o34 = (n78(67), n78(35)), s = n78.n(o34), l22 = n78(0), u = n78.n(l22), d = n78(97), f = n78(287), m14 = {
            Light: "light"
        }, p11 = {
            Small: 28,
            Large: 140
        }, b11 = function(e157) {
            var t = e157.templateId, n = e157.businessUnitId, a = e157.locale, i = e157.height, o = e157.width, l = e157.theme, m = e157.href, p = e157.loadOnFirstScroll, b = void 0 !== p && p, g = e157.disableSEOSnippet, v = void 0 !== g && g, h = u.a.useRef(null), y = function() {
                var e158 = s()(c.a.mark(function e159() {
                    return c.a.wrap(function(e) {
                        for(;;)switch(e.prev = e.next){
                            case 0:
                                return e.next = 2, Object(d.a)("//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js");
                            case 2:
                                h.current && window.Trustpilot.loadFromElement(h.current, !0);
                            case 3:
                            case "end":
                                return e.stop();
                        }
                    }, e159);
                }));
                return function() {
                    return e158.apply(this, arguments);
                };
            }();
            u.a.useEffect(function() {
                b ? Object(f.a)(y) : y();
            }, [
                t,
                b
            ]);
            var E = {
            };
            return v || (E["data-schema-type"] = "Organization"), u.a.createElement("div", r()({
                className: "trustpilot-widget",
                "data-businessunit-id": n,
                "data-locale": a,
                "data-style-width": o,
                "data-style-height": i,
                "data-template-id": t,
                "data-theme": l,
                "data-stars": "5"
            }, E, {
                ref: h
            }, {
                "data-happo-hide": !0
            }), u.a.createElement("a", r()({
                href: m
            }, {
                target: "_blank",
                rel: "noreferrer noopener"
            })));
        };
        b11.Height = p11, b11.FullWidth = function(e) {
            return u.a.createElement(b11, r()({
                width: "100%",
                height: p11.Large,
                theme: m14.Light
            }, e));
        }, t120.b = b11;
    },
    285: function(e, t, n) {
        e.exports = {
            root: "_1YVFS3k_",
            slide: "RnscLuxI",
            active: "_1zefWubJ"
        };
    },
    287: function(e160, t121, n) {
        "use strict";
        t121.a = function(e) {
            window.addEventListener("scroll", function t() {
                window.removeEventListener("scroll", t, !1), e();
            }, !1);
        };
    },
    29: function(e161, t122, n79) {
        "use strict";
        n79.d(t122, "a", function() {
            return w;
        }), n79.d(t122, "b", function() {
            return S.a;
        });
        var a70 = n79(2), r = n79.n(a70), i39 = n79(7), c = n79.n(i39), o35 = n79(4), s13 = n79.n(o35), l23 = n79(6), u = n79.n(l23), d = n79(0), f = n79.n(d), m = n79(5), p = n79.n(m), b = (n79(9), n79(8)), g = n79(60), v = n79(43), h = (n79(191), {
            "./button.scss": {
                "is-loading": "_1rwcd8Qg",
                text: "_2NmneBKH",
                spinner: "vus_t9VU"
            }
        }), y = v.a.Variant, E = v.a.HtmlElement, _ = {
            Button: "button",
            Submit: "submit"
        }, O = s13()({
        }, y.Size.Small, g.a.Variant.Size.Tiny), j = function(e) {
            var t = e.as, n = void 0 === t ? E.Button : t, a = e.type, i = void 0 === a ? _.Submit : a, o = e.loading, s = e.children, l = c()(e, [
                "as",
                "type",
                "loading",
                "children"
            ]);
            return f.a.createElement(v.a, r()({
                as: n,
                type: i
            }, l, {
                className: u()(p()(Object(b.b)({
                    loading: o
                })), h, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    as: n,
                    type: i
                }.className || "") + (l ? " " + (l.className || "") : "")
            }), o && f.a.createElement(g.a, {
                className: "vus_t9VU",
                size: O[l.size] || g.a.Variant.Size.Small
            }), f.a.createElement("span", {
                className: "_2NmneBKH"
            }, s));
        };
        j.Variant = y, j.Type = _, j.HtmlElement = E;
        var w = j, S = n79(119);
    },
    301: function(e162, t123, n) {
        var a = {
            "./": [
                249,
                3
            ],
            "./airbnb": [
                289,
                64
            ],
            "./airbnb.js": [
                289,
                64
            ],
            "./bridgestone": [
                290,
                65
            ],
            "./bridgestone.js": [
                290,
                65
            ],
            "./cleveland_cavaliers": [
                291,
                66
            ],
            "./cleveland_cavaliers.js": [
                291,
                66
            ],
            "./csr": [
                292,
                67
            ],
            "./csr.js": [
                292,
                67
            ],
            "./duolingo": [
                293,
                68
            ],
            "./duolingo.js": [
                293,
                68
            ],
            "./hewlett_packard": [
                294,
                69
            ],
            "./hewlett_packard.js": [
                294,
                69
            ],
            "./index": [
                249,
                3
            ],
            "./index.js": [
                249,
                3
            ],
            "./kddi": [
                295,
                70
            ],
            "./kddi.js": [
                295,
                70
            ],
            "./motorola": [
                296,
                71
            ],
            "./motorola.js": [
                296,
                71
            ],
            "./priceline": [
                297,
                72
            ],
            "./priceline.js": [
                297,
                72
            ],
            "./shopify": [
                299,
                73
            ],
            "./shopify.js": [
                299,
                73
            ],
            "./thumbtack": [
                298,
                74
            ],
            "./thumbtack.js": [
                298,
                74
            ],
            "./usc": [
                300,
                75
            ],
            "./usc.js": [
                300,
                75
            ]
        };
        function r21(e) {
            if (!n.o(a, e)) return Promise.resolve().then(function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t;
            });
            var t124 = a[e], r = t124[0];
            return n.e(t124[1]).then(function() {
                return n(r);
            });
        }
        r21.keys = function() {
            return Object.keys(a);
        }, r21.id = 301, e162.exports = r21;
    },
    302: function(e163, t125, n80) {
        "use strict";
        n80(24), n80(51);
        var a71 = n80(2), r = n80.n(a71), i40 = n80(0), c = n80.n(i40), o36 = n80(3), s14 = n80.n(o36), l24 = n80(9), u = n80(201), d = n80(31), f = n80(71), m = n80(16), p = n80(52);
        n80(329), s14.a.string.isRequired, Object(l24.a)(u.a), l24.e, t125.a = function(e164) {
            var t126 = e164.title, n81 = e164.blogPosts, a = e164.ctas, i = e164.className, o = e164.gaCategory, s = e164.gaEvent, l = e164.gaLabel;
            return n81 = n81.slice(0, 5), c.a.createElement(m.a, {
                semantic: !0,
                className: i,
                width: m.a.Variant.Width.Fixed
            }, c.a.createElement(f.a, {
                className: "_3t7loGZ8",
                dataId: "blog-section-title"
            }, t126), 5 === n81.length && c.a.createElement("div", {
                className: "rArfi2Y4",
                role: "list"
            }, n81.map(function(e, t) {
                return c.a.createElement(u.b, r()({
                }, e, {
                    size: 0 === t ? u.b.Variant.Size.Large : null,
                    key: e.publicUrl,
                    className: "_2JS0AOBT " + (e && e.className || "") + " " + ({
                        gaCategory: o,
                        gaEvent: s,
                        gaLabel: l
                    }.className || "")
                }, {
                    gaCategory: o,
                    gaEvent: s,
                    gaLabel: l
                }, {
                    role: "listitem"
                }));
            })), n81.length < 5 && c.a.createElement(p.b, {
                className: "_2wGkI_Z1",
                role: "list"
            }, n81.map(function(e, t) {
                return c.a.createElement(p.a, {
                    key: t,
                    tablet: 3 === n81.length ? 4 : 1 === n81.length ? 12 : 6
                }, c.a.createElement(u.b, r()({
                }, e, {
                    size: 1 === n81.length ? u.b.Variant.Size.Large : null,
                    className: "_2JS0AOBT " + (e && e.className || "") + " " + ({
                        gaCategory: o,
                        gaEvent: s,
                        gaLabel: l
                    }.className || "")
                }, {
                    gaCategory: o,
                    gaEvent: s,
                    gaLabel: l
                }, {
                    role: "listitem"
                })));
            })), a && c.a.createElement("div", {
                className: "_21PbwWbz"
            }, a.map(function(e) {
                var t = e.label, n = e.href;
                return c.a.createElement(d.b, {
                    type: d.b.Variant.Theme.Secondary,
                    url: n,
                    key: n
                }, t);
            })));
        };
    },
    306: function(e, t, n) {
        e.exports = {
            container: "_1cwKlNuP",
            title: "_8hq62nwZ",
            "skills-list": "zjL-4_Jq",
            "list-item": "rY5wqR2J",
            "arrow-link": "_2ESoqxj-",
            "is-theme-dark": "lLehEWy0",
            link: "_2cc321tl"
        };
    },
    31: function(e165, t127, n82) {
        "use strict";
        n82.d(t127, "a", function() {
            return k;
        }), n82(19), n82(17), n82(14), n82(25), n82(26), n82(20), n82(15);
        var a72 = n82(4), r22 = n82.n(a72), i41 = n82(2), c = n82.n(i41), o37 = n82(7), s = n82.n(o37), l25 = n82(6), u = n82.n(l25), d18 = n82(0), f = n82.n(d18), m15 = n82(3), p12 = n82.n(m15), b12 = n82(5), g = n82.n(b12), v11 = n82(9), h = n82(8), y7 = n82(32);
        function E(e, t128) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t128 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function _(e) {
            var t129, n;
            for(t129 = 1; t129 < arguments.length; t129++)n = null != arguments[t129] ? arguments[t129] : {
            }, t129 % 2 ? E(Object(n), !0).forEach(function(t) {
                r22()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        n82(183);
        var O = {
            "./link.scss": {
                "is-default": "_2c9SYlj-",
                "is-highlighted": "_1j539ymL",
                "is-link": "PthuWf2h",
                "is-one-of-many": "_1cbuwrb6",
                "is-full-width": "_8uVE4y50",
                "is-cta": "_2Gqpr7uD",
                "is-secondary": "aqyl0q_p",
                "is-light-bg": "_1qE3XAR2",
                "is-dark-bg": "_2KUnCSOe",
                "is-secondary-white": "_7bt0mHWW",
                "is-secondary-green": "_1Ua9YXW7",
                "is-blue": "_3lwaZMA7",
                "is-size-medium": "_3jIdWyZN",
                "is-white": "KU5YZA1d"
            }
        }, j = {
            Size: {
                Medium: "medium"
            },
            Theme: {
                CTA: "cta",
                Secondary: "secondary",
                SecondaryWhite: "secondary-white",
                SecondaryGreen: "secondary-green",
                Highlighted: "highlighted",
                Link: "link",
                FullWidth: "full-width",
                Blue: "blue",
                White: "white"
            }
        }, w = Object(d18.forwardRef)(function(e, t) {
            var n = e.type, a = void 0 === n ? "default" : n, r = e.url, i = e.variant, o = void 0 === i ? "" : i, l = e.size, d = void 0 === l ? "" : l, m = e.dataId, p = e.a11yHidden, b = void 0 !== p && p, v = e.children, y = s()(e, [
                "type",
                "url",
                "variant",
                "size",
                "dataId",
                "a11yHidden",
                "children", 
            ]);
            return f.a.createElement("a", c()({
                href: r,
                "data-id": m
            }, b && {
                "aria-hidden": !0,
                tabIndex: "-1"
            }, {
                ref: t
            }, y, {
                className: u()(g()(Object(h.a)(a), Object(h.a)(o), Object(h.a)({
                    size: d
                })), O, {
                    handleMissingStyleName: "warn"
                }) + " " + (b && (b && {
                    "aria-hidden": !0,
                    tabIndex: "-1"
                }).className || "") + " " + ({
                    ref: t
                }.className || "") + (y ? " " + (y.className || "") : "")
            }), v);
        }), S = Object(v11.j)(j.Theme);
        w.propTypes = {
            type: S,
            url: p12.a.string.isRequired,
            variant: p12.a.oneOfType([
                p12.a.arrayOf(p12.a.string),
                S
            ]),
            size: Object(v11.j)(j.Size),
            children: p12.a.any,
            itemProp: p12.a.string,
            dataId: p12.a.string,
            a11yHidden: p12.a.bool
        }, w.Variant = j, t127.b = w;
        var k = Object(d18.forwardRef)(function(e, t) {
            var n = e.gaCategory, a = e.gaEvent, r = e.gaLabel, i = s()(e, [
                "gaCategory",
                "gaEvent",
                "gaLabel"
            ]);
            return f.a.createElement(w, c()({
            }, i, Object(y7.b)(n, a, r), {
                ref: t
            }));
        });
        k.Variant = j, k.propTypes = _(_({
        }, w.PropTypes), v11.c);
    },
    313: function(e, t, n) {
        e.exports = {
            container: "_2-8QnyrN",
            title: "_1wB6xpRs",
            btn: "_2-tX5EK8",
            "is-theme-blue": "b8TCI_zN",
            "is-orientation-vertical": "_67_yUPlK",
            "is-padding-none": "_1Soxeblk"
        };
    },
    315: function(e, t, n) {
        e.exports = {
            root: "_1MmTcDEI"
        };
    },
    316: function(e166, t130, n83) {
        "use strict";
        n83.d(t130, "b", function() {
            return S;
        }), n83.d(t130, "a", function() {
            return C;
        }), n83(23), n83(17);
        var a73 = n83(2), r23 = n83.n(a73), i42 = n83(30), c18 = n83.n(i42), o38 = n83(7), s15 = n83.n(o38), l26 = n83(0), u = n83.n(l26), d19 = (n83(9), n83(219)), f12 = n83(28), m16 = n83(6), p13 = n83.n(m16), b13 = n83(5), g6 = n83.n(b13), v12 = n83(47), h10 = n83(45), y8 = n83(91), E5 = n83(93), _5 = n83(245), O5 = n83.n(_5), j4 = {
            "../testimonial-visual-card.scss": {
                "card-title": "Qq-iPMxM",
                logo: "_1uIAd9Ad",
                "logo-image": "jeqnJEqF",
                cta: "ZxJ1uE03",
                "collaboration-logo": "_1NqI8JmY",
                "icon-quote": "_16aTA28q",
                "quote-text": "_1UhmiUga",
                "card-author-container": "_1liAAfjS",
                "card-author": "_2O26Zuqj",
                "card-author-title": "ivvUQSqp",
                "is-press-coverage": "_1LwwOY5T",
                "press-coverage-read-article": "_3p_xLXZw",
                card: "_2aYXDjr3",
                "is-video": "_1doXJJpm",
                "video-cover": "_3-8TMpeS",
                "article-cover": "_2ud0q49P",
                "is-article": "k4Kjb1Dh",
                "no-video-preview": "_1fycIOYl"
            }
        }, w = function(e) {
            var t = e.previewVideoUrl, n = e.previewSquareImageUrl, a = e.previewWideImageUrl, r = e.authorLogoImageUrl, i = e.authorCompany, c = e.title, o = e.quote, s = e.author, l = e.authorTitle, d = e.className, f = e.coverClassName, m = e.type, b = e.children;
            return u.a.createElement("div", {
                className: (d ? d + " " : "") + p13()(g6()("card", {
                    "no-video-preview": !t
                }), j4, {
                    handleMissingStyleName: "warn"
                })
            }, u.a.createElement("div", {
                className: p13()(f, j4, {
                    handleMissingStyleName: "warn"
                })
            }, u.a.createElement(h10.a, {
                src: n || a,
                alt: "",
                effect: "opacity"
            })), r && u.a.createElement("div", {
                className: "_1uIAd9Ad"
            }, "collaboration_article" === m && u.a.createElement("span", {
                className: "_1NqI8JmY"
            }, u.a.createElement(y8.b, null)), u.a.createElement(h10.a, {
                className: "jeqnJEqF",
                src: r,
                alt: i
            })), o && u.a.createElement(u.a.Fragment, null, u.a.createElement(E5.f, {
                className: "_16aTA28q"
            }), u.a.createElement("p", {
                className: "_1UhmiUga"
            }, o)), c && u.a.createElement("p", {
                className: "Qq-iPMxM"
            }, Object(v12.a)(c)), s && u.a.createElement("div", {
                className: "_1liAAfjS"
            }, u.a.createElement("p", {
                className: "_2O26Zuqj"
            }, s), u.a.createElement("p", {
                className: "ivvUQSqp"
            }, l)), b);
        }, S = function(e167) {
            var t = e167.gaCategory, n = e167.gaEvent, a = e167.gaLabel, i = e167.videoIdentifier, o = e167.videos, m = void 0 === o ? [] : o, p = e167.authorCompany, b = e167.authorWhiteLogoImageUrl, g = e167.className, v = e167.previewVideoUrl, h = e167.title, y = e167.videoCtaText, E = void 0 === y ? "Watch the video" : y, _ = s15()(e167, [
                "gaCategory",
                "gaEvent",
                "gaLabel",
                "videoIdentifier",
                "videos",
                "authorCompany",
                "authorWhiteLogoImageUrl",
                "className",
                "previewVideoUrl",
                "title",
                "videoCtaText", 
            ]);
            t = t || "video_card";
            var O = Object(l26.useMemo)(function() {
                return [
                    {
                        id: i,
                        title: p
                    }
                ].concat(c18()(m.filter(function(e) {
                    return e.id !== i;
                })));
            }, [
                m,
                p,
                i
            ]), j = Object(l26.useCallback)(function() {
                Object(f12.d)(t, n || "video_open", a || i);
            }, [
                t,
                n,
                a,
                i
            ]);
            return u.a.createElement(w, r23()({
                previewVideoUrl: v,
                authorCompany: p,
                authorLogoImageUrl: b,
                title: h
            }, _, {
                coverClassName: "video-cover",
                className: (g ? g + " " : "") + "_1doXJJpm " + ({
                    previewVideoUrl: v,
                    authorCompany: p,
                    authorLogoImageUrl: b,
                    title: h
                }.className || "") + (_ ? " " + (_.className || "") : "")
            }), u.a.createElement(d19.a.Button, r23()({
                className: "video-cta",
                videos: O,
                onOpen: j,
                title: h
            }, {
                gaCategory: t
            }), E), v && u.a.createElement("figure", null, u.a.createElement("video", {
                src: v,
                autoPlay: !0,
                loop: !0,
                muted: !0
            })));
        }, k = (n83(278), n83(8)), N = function(e) {
            var t = e.url, n = e.title, a = e.label, r = e.newWindow;
            return u.a.createElement("a", {
                className: "ZxJ1uE03",
                href: t,
                "aria-label": n,
                target: Object(k.c)({
                    _blank: r
                })
            }, a || "Read more");
        }, C = function(e) {
            var t = e.authorWhiteLogoImageUrl, n = e.className, a = e.url, i = e.title, c = e.link;
            return u.a.createElement(w, r23()({
            }, e, {
                authorLogoImageUrl: t,
                className: g6()(n, O5.a["is-article"]),
                coverClassName: "article-cover"
            }), u.a.createElement(N, r23()({
                url: a,
                title: i
            }, c)));
        };
        n83(31);
    },
    32: function(e168, t131, n84) {
        "use strict";
        n84.d(t131, "c", function() {
            return a74;
        }), n84.d(t131, "b", function() {
            return r24;
        }), n84.d(t131, "a", function() {
            return i;
        });
        var a74 = function(e, t, n) {
            return {
                "data-ga-category": e,
                "data-ga-event": t,
                "data-ga-label": n
            };
        }, r24 = function(e, t, n) {
            var r;
            return e ? (e.gaCategory && (e = (r = e).gaCategory, t = r.gaEvent, n = r.gaLabel), a74(e, t, n)) : {
            };
        }, i = function(e, t) {
            return function(n) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                return r24(e, a, n);
            };
        };
    },
    322: function(e169, t132, n) {
        "use strict";
        var a = n(0), r = n.n(a), i = n(37), c = n.n(i), o = n(248);
        t132.a = function(e) {
            var t = e.schema;
            return r.a.createElement(o.a, null, r.a.createElement(c.a, null, r.a.createElement("script", {
                type: "application/ld+json"
            }, JSON.stringify(t))));
        };
    },
    326: function(e, t, n) {
        e.exports = {
            "breadcrumb-item": "_31aQZWyI",
            link: "_35iK7zmm",
            excerpt: "IpHlFM7w",
            breadcrumbs: "_27W_cjOv",
            "blog-card": "_2AOdQKTV",
            content: "KxHj95DN",
            "is-size-large": "_3avJuwHw",
            cover: "_3l9VlKPe",
            "avatar-container": "_3xeRr4HI",
            avatar: "_1kyxjycq",
            title: "PnmEEQ_-",
            author: "_1mjIKiS3",
            "reading-time": "_3XfNRYjc",
            "reading-continue": "IYgLf9Fx"
        };
    },
    329: function(e, t, n) {
        e.exports = {
            title: "_3t7loGZ8",
            items: "rArfi2Y4",
            "grid-items": "_2wGkI_Z1",
            "blog-card": "_2JS0AOBT",
            "cta-holder": "_21PbwWbz"
        };
    },
    331: function(e170, t133, n) {
        "use strict";
        n(27), n(33), t133.a = function(e) {
            return new Promise(function(t) {
                return setTimeout(t, e);
            });
        };
    },
    336: function(e171, t134, n85) {
        "use strict";
        n85(235), n85(14), n85(24), n85(15);
        var a75 = n85(1), r = n85.n(a75), i = n85(0);
        t134.a = function(e172) {
            var t135 = Object(i.useState)(!1), n = r()(t135, 2), a = n[0], c = n[1], o = Object(i.useRef)({
            }), s = Object(i.useCallback)(function(t) {
                o.current[t.target.dataset.originalUrl] = !0, c(e172.every(function(e) {
                    return o.current[e];
                }));
            }, [
                e172
            ]);
            return Object(i.useEffect)(function() {
                var t136 = e172.map(function(e) {
                    var t = document.createElement("img");
                    return t.addEventListener("load", s), t.addEventListener("error", s), t.dataset.originalUrl = e, t.src = e, t;
                });
                return function() {
                    t136.forEach(function(e) {
                        e.removeEventListener("load", s), e.addEventListener("error", s);
                    });
                };
            }, [
                e172,
                s
            ]), a;
        };
    },
    34: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a;
        }), n.d(t, "b", function() {
            return r;
        });
        var a = "cookie-banner-host", r = {
            GDPR: "gdpr",
            PrivacyShield: "privacy_shield"
        };
    },
    346: function(e173, t, n) {
        "use strict";
        var a = n(0), r = n.n(a);
        t.a = function(e) {
            return r.a.createElement("svg", {
                width: "12",
                height: "8",
                xmlns: "http://www.w3.org/2000/svg"
            }, r.a.createElement("g", {
                className: e.className,
                stroke: "#FFF",
                fill: "none",
                fillRule: "evenodd"
            }, r.a.createElement("path", {
                d: "M0 3.607h11.253M8 .107l3.5 3.5-3.5 3.5"
            })));
        };
    },
    348: function(e174, t137, n86) {
        "use strict";
        n86(19), n86(176), n86(17), n86(24), n86(227);
        var a76 = n86(4), r25 = n86.n(a76), i43 = n86(2), c = n86.n(i43), o39 = n86(7), s16 = n86.n(o39), l27 = n86(408), u = n86.n(l27), d = n86(0), f = n86.n(d), m = n86(5), p = n86.n(m), b = (n86(9), n86(52)), g = n86(58), v = n86(16), h = n86(31), y = n86(316), E = n86(71), _ = (n86(405), function(e, t, n) {
            switch(n){
                case g.a.Desktop:
                    if (2 === e) return t > 0 ? 8 : 4;
                    break;
                case g.a.Tablet:
                    switch(e){
                        case 3:
                            return t > 0 ? 6 : 12;
                        case 2:
                            return 6;
                    }
            }
            return 4;
        }), O = function(e175) {
            var t138 = e175.testimonials, n87 = e175.isTitleCell, a77 = e175.gutter, r = e175.videos, i = Number(n87), o = t138.length + i, l28 = t138.map(function(e, t) {
                var n = e.type, a = s16()(e, [
                    "type"
                ]), l = t + i;
                return f.a.createElement(b.a, {
                    key: t,
                    desktop: _(o, l, g.a.Desktop),
                    tablet: _(o, l, g.a.Tablet),
                    role: "listitem"
                }, "video" === n ? f.a.createElement(y.b, c()({
                }, a, {
                    videos: r
                }, {
                    className: "_2vQjp_O2 " + (a && a.className || "") + " " + ({
                        videos: r
                    }.className || "")
                })) : f.a.createElement(y.a, c()({
                }, a, {
                    className: "_2vQjp_O2 " + (a && a.className || "")
                })));
            });
            return o > 3 ? f.a.createElement(b.a, {
                className: "_2vQjp_O2",
                desktop: 8,
                tablet: 12,
                role: "listitem"
            }, f.a.createElement(b.b, c()({
                role: "list"
            }, {
                gutter: a77
            }), l28)) : l28;
        }, j = function(e176) {
            var t139 = e176.title, n88 = e176.ctas;
            return f.a.createElement("div", {
                className: "_7qDyl__j"
            }, f.a.createElement("p", {
                "data-id": "footer-cta-title"
            }, t139), f.a.createElement("div", {
                className: "_2pGhqCYE"
            }, n88.map(function(e) {
                var t = e.label, n = e.href, a = e.inlineStyles, r = e.dataId, i = s16()(e, [
                    "label",
                    "href",
                    "inlineStyles",
                    "dataId"
                ]);
                return f.a.createElement(h.a, c()({
                    type: h.a.Variant.Theme.CTA,
                    url: n,
                    key: n,
                    style: a
                }, {
                    dataId: r
                }, i), t);
            })));
        };
        t137.a = function(e177) {
            var t140, n89 = e177.rows, a78 = e177.footer, i = e177.className, o = e177.gutter, s = Object(d.useMemo)(function() {
                return u()(n89.map(function(e) {
                    return e.testimonials;
                })).filter(function(e) {
                    return "video" === e.type;
                }).map(function(e) {
                    return {
                        id: e.videoIdentifier,
                        title: e.authorCompany
                    };
                });
            }, [
                n89
            ]);
            return f.a.createElement(v.a, {
                className: i,
                width: v.a.Variant.Width.Fixed,
                space: v.a.Variant.Space.None
            }, f.a.createElement(v.a, {
                space: p()((t140 = {
                }, r25()(t140, v.a.Variant.Space.Medium, a78), r25()(t140, v.a.Variant.Space.None, !a78), t140))
            }, f.a.createElement(b.b, c()({
                role: "list"
            }, {
                gutter: o
            }), n89.map(function(e, t) {
                var n = e.title, a = e.description, r = e.testimonials;
                return f.a.createElement(d.Fragment, {
                    key: t
                }, n && f.a.createElement(b.a, {
                    desktop: 4,
                    className: "_vWh44cV",
                    role: "listitem"
                }, f.a.createElement("div", {
                    className: "_64wRZ6xh"
                }, f.a.createElement(E.a, {
                    className: "_1r8wFQ13",
                    dataId: "clients-grid-title"
                }, n), a && f.a.createElement("p", {
                    className: "_2Fa2w4cD"
                }, a))), f.a.createElement(O, c()({
                    testimonials: r,
                    gutter: o,
                    videos: s
                }, {
                    isTitleCell: !!n
                })));
            }))), a78 && f.a.createElement(j, a78));
        };
    },
    349: function(e, t, n) {
        e.exports = {
            container: "_29UvQdrG",
            group: "_1BHWVawP",
            main: "_3crLzOOj",
            "is-expanded": "_30rdsl3I"
        };
    },
    356: function(e178, t141, n90) {
        "use strict";
        n90(23), n90(24);
        var a79 = n90(2), r = n90.n(a79), i44 = n90(30), c = n90.n(i44), o40 = n90(7), s = n90.n(o40), l29 = n90(6), u14 = n90.n(l29), d = n90(0), f = n90.n(d), m = n90(5), p = n90.n(m), b = (n90(9), n90(31)), g = (n90(354), {
            "./cta-group.scss": {
                "cta-group": "_3RO_VtGq",
                "has-many": "_11w9_Ic7"
            }
        });
        t141.a = function(e179) {
            var t = e179.ctas, n91 = e179.theme, a = void 0 === n91 ? "light-bg" : n91, i45 = e179.className;
            return f.a.createElement("div", {
                className: (i45 ? i45 + " " : "") + u14()(p()("cta-group", {
                    "has-many": t.length > 1
                }), g, {
                    handleMissingStyleName: "warn"
                })
            }, t.map(function(e) {
                var n = e.href, i = e.label, o = e.variant, l = void 0 === o ? "" : o, u = s()(e, [
                    "href",
                    "label",
                    "variant"
                ]);
                return f.a.createElement(b.a, r()({
                    key: n,
                    type: b.a.Variant.Theme.CTA,
                    variant: [].concat(c()(t.length > 1 ? [
                        "one-of-many"
                    ] : []), [
                        a,
                        l, 
                    ]),
                    url: n,
                    dataId: "cta-group"
                }, u), i);
            }));
        };
    },
    372: function(e180, t142, n92) {
        "use strict";
        n92(62);
        var a80, r26 = n92(2), i = n92.n(r26), c19 = n92(4), o41 = n92.n(c19), s = n92(0), l = n92.n(s), u = (n92(9), n92(12)), d = n92(112), f = (a80 = {
        }, o41()(a80, u.g.Developers, u.b.DESKTOP_LARGE), o41()(a80, u.g.Designers, u.b.DESKTOP_LARGE), o41()(a80, u.g.FinanceExperts, u.b.DESKTOP_LARGE), o41()(a80, u.g.ProductManagers, d.a.Breakpoints.DESKTOP_XLARGE), o41()(a80, u.g.ProjectManagers, d.a.Breakpoints.DESKTOP_XLARGE), a80), m = function(e) {
            var t = e.vertical, n = e.variant, a = e.navbarData, r = e.sidebar, c = e.platformSessionUrl, o = e.className;
            return l.a.createElement(d.a, i()({
                navbarData: a,
                platformSessionUrl: c,
                variant: n,
                sidebar: r,
                className: o
            }, {
                sticky: !0,
                upperBreakpoint: f[t.name],
                logo: {
                    suffix: t.title,
                    layout: {
                        default: {
                            wordmark: !1
                        }
                    }
                }
            }));
        };
        m.Variant = d.a.Variant, t142.a = m;
    },
    39: function(e181, t143, n93) {
        "use strict";
        var a = n93(41), r = function(e) {
            return function(t, n) {
                if (!i()) return !1;
                window.Sentry.captureEvent({
                    message: t,
                    level: e,
                    extra: n
                });
            };
        }, i = function() {
            return !!window.Sentry || (a.d || console.warn("Sentry is not initialized"), !1);
        };
        t143.a = {
            info: r("info"),
            debug: r("debug"),
            warning: r("warning"),
            critical: r("critical"),
            error: r("error")
        };
    },
    396: function(e182, t144, n94) {
        "use strict";
        n94.d(t144, "a", function() {
            return ee;
        }), n94(72);
        var a81 = n94(2), r27 = n94.n(a81), i46 = n94(1), c20 = n94.n(i46), o42 = n94(38), s17 = n94.n(o42), l = n94(0), u15 = n94.n(l), d20 = n94(10), f13 = n94(79), m17 = n94(13), p14 = n94(571), b14 = (n94(529), n94(6)), g7 = n94.n(b14), v13 = n94(764), h11 = n94(5), y9 = n94.n(h11), E6 = n94(8), _6 = (n94(44), n94(573)), O6 = n94.n(_6), j5 = (n94(9), n94(60)), w3 = (n94(602), {
            "./search-input.scss": {
                container: "_37X7UFmN",
                "input-wrapper": "xTCDIYN8",
                input: "_3K8PNYA9",
                aux: "_3rftV7Nd",
                spinner: "_22-LNnes",
                "is-clear": "I8N09ekG",
                button: "FOdDmYhD",
                "is-search": "-wTcXLPq",
                "is-size-compact": "_3WUPrY6m",
                "search-icon": "_3t_rUPY_",
                "is-size-small": "NbTJOC--"
            }
        }), S5 = {
            Size: {
                Small: "small",
                Compact: "compact"
            }
        }, k5 = function(e183) {
            var t = e183.placeholder, n = e183.value, a = e183.size, i = e183.isLoading, c = e183.onChange, o = e183.onSearch, d = e183.onClear, f = void 0 === d ? s17.a : d, m = e183.onBlur, p = void 0 === m ? s17.a : m, b = e183.onFocus, v = void 0 === b ? s17.a : b, h = e183.className, _ = Object(l.useRef)(), k = Object(l.useCallback)(function(e) {
                e && e.preventDefault(), o(!1);
            }, [
                o
            ]), N = Object(l.useCallback)(function(e) {
                e.preventDefault(), o(!0);
            }, [
                o
            ]), C = Object(l.useCallback)(function() {
                _.current.focus(), f();
            }, [
                f
            ]), P = Object(l.useCallback)(function(e) {
                [
                    13,
                    27
                ].includes(e.keyCode) && (_.current.blur(), p()), 13 === e.keyCode && k();
            }, [
                k,
                p
            ]), x = a === S5.Size.Compact;
            return u15.a.createElement("form", {
                onSubmit: k,
                className: (h ? h + " " : "") + g7()(y9()("container", Object(E6.a)({
                    size: a
                })), w3, {
                    handleMissingStyleName: "warn"
                })
            }, u15.a.createElement("div", r27()({
                className: "xTCDIYN8 " + ({
                    onFocus: v
                }.className || "")
            }, {
                onFocus: v
            }), x && u15.a.createElement(O6.a, {
                className: "_3t_rUPY_"
            }), u15.a.createElement("input", r27()({
                value: n,
                placeholder: t,
                ref: _,
                onChange: c
            }, {
                onKeyDown: P,
                className: "_3K8PNYA9 " + ({
                    value: n,
                    placeholder: t,
                    ref: _,
                    onChange: c
                }.className || "")
            })), u15.a.createElement("div", {
                className: "_3rftV7Nd"
            }, !!n && u15.a.createElement("button", {
                className: "FOdDmYhD I8N09ekG",
                type: "button",
                onClick: C
            }), i && u15.a.createElement(j5.a, {
                size: j5.a.Variant.Size.Small,
                className: "_22-LNnes"
            }))), !x && u15.a.createElement("button", {
                className: "FOdDmYhD -wTcXLPq",
                onClick: N
            }, u15.a.createElement(O6.a, null)));
        };
        k5.Variant = S5;
        var N3 = k5, C4 = (n94(603), {
            "./search-bar.scss": {
                container: "J4tFGnz9",
                "search-input": "_1cVV_096",
                "is-expanded": "sbmkSeYH",
                dropdown: "_17SNG318"
            }
        }), P3 = Object(l.forwardRef)(function(e184, t145) {
            var n95 = e184.placeholder, a82 = void 0 === n95 ? "Type to start searching..." : n95, i47 = e184.className, o43 = e184.onSearch, s18 = e184.onChange, f14 = e184.value, m18 = e184.size, p15 = e184.isLoading, b15 = e184.onExpand, h = e184.onCollapse, _ = e184.onClear, O = e184.children, j = function(e185, t146, n, a, r) {
                var i = Object(l.useState)(!1), o = c20()(i, 2), s = o[0], u = o[1], f = Object(l.useCallback)(function() {
                    s && (u(!1), r && r());
                }, [
                    r,
                    s
                ]), m = Object(l.useCallback)(function() {
                    s || (u(!0), a && a());
                }, [
                    a,
                    s
                ]), p = Object(l.useCallback)(function(t) {
                    f(), e185 && e185(t);
                }, [
                    f,
                    e185
                ]), b = Object(d20.r)(f), g = Object(l.useCallback)(function(e) {
                    m(), t146(e.target.value);
                }, [
                    m,
                    t146
                ]), v = Object(l.useCallback)(function() {
                    t146(""), n && n();
                }, [
                    t146,
                    n
                ]);
                return {
                    containerRef: b,
                    isExpanded: s,
                    handleChange: g,
                    handleClear: v,
                    handleSearch: p,
                    handleExpand: m,
                    handleCollapse: f
                };
            }(o43, s18, _, b15, h), w = j.containerRef, S = j.isExpanded, k = j.handleChange, P = j.handleClear, x = j.handleSearch, L = j.handleCollapse, T = j.handleExpand, I = S && O, R = Object(l.useCallback)(function() {
                setTimeout(L, 200);
            }, [
                L
            ]);
            return u15.a.createElement("div", {
                ref: Object(v13.a)([
                    w,
                    t145
                ]),
                className: (i47 ? i47 + " " : "") + "J4tFGnz9"
            }, u15.a.createElement(N3, r27()({
                value: f14,
                placeholder: a82,
                size: m18,
                isLoading: p15
            }, {
                onChange: k,
                onClear: P,
                onSearch: x,
                onFocus: T,
                onBlur: R,
                className: g7()(y9()("search-input", Object(E6.b)({
                    isExpanded: I
                })), C4, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    value: f14,
                    placeholder: a82,
                    size: m18,
                    isLoading: p15
                }.className || "")
            })), I && u15.a.createElement("div", {
                className: "_17SNG318"
            }, O));
        });
        P3.Variant = N3.Variant, P3.displayName = "SearchBar";
        var x3 = P3, L3 = Object(l.createContext)({
        }), T3 = (n94(19), n94(17), n94(14), n94(24), n94(110), n94(25), n94(26), n94(20), n94(15), n94(4)), I3 = n94.n(T3), R3 = n94(7), M3 = n94.n(R3), D3 = n94(47), A2 = n94(148), U2 = n94(464), z3 = (n94(779), {
            "./dropdown-section.scss": {
                container: "_1-a_9qL8",
                "info-message": "_1Zmsin8p",
                "is-info": "zOls6cTR",
                "is-compact": "_3BTDlKNI",
                "link-list-section": "_6CRLOWhf",
                "link-list-section-title": "_1dhg0W9C",
                "link-list-item": "I0iL1nfG",
                "link-list-group-list": "MgEtwLcx",
                "is-horizontal": "_14GfLqH1"
            }
        });
        function q3(e, t147) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t147 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function V1(e) {
            var t148, n;
            for(t148 = 1; t148 < arguments.length; t148++)n = null != arguments[t148] ? arguments[t148] : {
            }, t148 % 2 ? q3(Object(n), !0).forEach(function(t) {
                I3()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q3(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var B1 = function(e) {
            var t = e.sectionTitle, n = e.label, a = e.href, i = e.position, c = e.onClick, o = Object(l.useCallback)(function() {
                c && c(t, {
                    label: n,
                    position: i
                });
            }, [
                t,
                n,
                i,
                c
            ]);
            return u15.a.createElement(A2.a, r27()({
                className: "I0iL1nfG " + ({
                    href: a
                }.className || ""),
                title: n,
                onClick: o
            }, {
                href: a
            }), Object(D3.a)(n));
        }, G = function(e186) {
            var t149 = e186.sections, n96 = e186.isHorizontal, a83 = e186.isCompact, i = e186.onSelect, c = Object(l.useMemo)(function() {
                var e187 = 0;
                return t149.filter(function(e) {
                    return e.items.length;
                }).map(function(t150) {
                    var n = t150.items;
                    return V1(V1({
                    }, M3()(t150, [
                        "items"
                    ])), {
                    }, {
                        items: n.map(function(t) {
                            return V1(V1({
                            }, t), {
                            }, {
                                position: e187++
                            });
                        })
                    });
                });
            }, [
                t149
            ]);
            return c.length ? u15.a.createElement("div", {
                className: g7()(y9()("link-list-group-list", Object(E6.b)({
                    isHorizontal: n96,
                    isCompact: a83
                })), z3, {
                    handleMissingStyleName: "warn"
                })
            }, c.map(function(e188, t) {
                var n = e188.title, a = e188.items;
                return u15.a.createElement("div", {
                    key: t,
                    className: "_6CRLOWhf"
                }, u15.a.createElement("p", {
                    className: "_1dhg0W9C"
                }, n), a.map(function(e) {
                    return u15.a.createElement(B1, r27()({
                    }, e, {
                        sectionTitle: n
                    }, {
                        key: e.href + e.label,
                        onClick: i
                    }));
                }));
            })) : null;
        }, F = function(e) {
            var t = e.total, n = e.status, a = e.children, r = e.isCompact;
            return Object(m17.b)(n) ? u15.a.createElement(U2.a, {
                className: "_1Zmsin8p"
            }, "Search error. Please try again later.") : t ? a : Object(m17.c)(n) ? u15.a.createElement(U2.b, {
                className: g7()(y9()("info-message is-info", Object(E6.b)({
                    isCompact: r
                })), z3, {
                    handleMissingStyleName: "warn"
                })
            }, "No results were found") : null;
        }, H = "compact", W = function(e189) {
            var t151 = e189.data, n = e189.status, a = e189.size, i = e189.defaultData, c = e189.onResultSelect, o = e189.onDefaultSelect, s = t151.results, d = Object(l.useMemo)(function() {
                return s ? s.reduce(function(e, t) {
                    return e + t.items.length;
                }, 0) : 0;
            }, [
                s
            ]), f = a === H;
            return u15.a.createElement("div", {
                className: "_1-a_9qL8"
            }, u15.a.createElement(F, {
                total: d,
                status: n,
                isCompact: f
            }, u15.a.createElement(G, r27()({
                sections: s
            }, {
                isCompact: f
            }, {
                onSelect: c
            }))), !d && u15.a.createElement(G, r27()({
                isCompact: f
            }, {
                isHorizontal: Object(m17.d)(n),
                sections: i,
                onSelect: o
            })));
        }, K = Object(l.memo)(W);
        K.displayName = "DropdownSection";
        var Y = K, Q = (n94(23), n94(227), n94(54)), J = n94.n(Q), X = n94(765), Z = n94.n(X), $ = n94(28), ee = {
            TopSearchSticky: "search_test_sticky",
            TopSearchHero: "search_test_hero",
            TopSearchResultsPage: "search_test_results_page",
            TopSearchSidebar: "search_test_sidebar"
        }, te = function(e190) {
            return Number(Z()(e190.results, function(e) {
                return e.items.length;
            }));
        }, ne = function(e, t) {
            return J()("".concat(e, "_").concat(t));
        }, ae = Object(l.forwardRef)(function(e191, t152) {
            var n97 = e191.onSearch, a84 = void 0 === n97 ? s17.a : n97, i = e191.searchWidget.placeholder, o = e191.popularResourcesSection, b = e191.className, g = e191.size, v = e191.initialValue, h = void 0 === v ? "" : v, y = e191.gaCategory, E = Object(l.useContext)(L3).autocompleteUrl, _ = Object(l.useState)(h), O = c20()(_, 2), j = O[0], w = O[1], S = function(e192, t153) {
                var n98 = Object(l.useCallback)(function() {
                    var t, n, a;
                    if (e192) {
                        for(t = arguments.length, n = new Array(t), a = 0; a < t; a++)n[a] = arguments[a];
                        $.d.apply(void 0, [
                            e192
                        ].concat(n));
                    }
                }, [
                    e192
                ]), a85 = Object(l.useCallback)(function() {
                    n98("focus_into_search_bar");
                }, [
                    n98
                ]), r28 = Object(l.useCallback)(function(e, t) {
                    n98("autocomplete_response", e, {
                        value: te(t)
                    });
                }, [
                    n98
                ]);
                return {
                    trackExpand: a85,
                    trackResultSelect: Object(l.useCallback)(function(e, t) {
                        var a = t.label, r = t.position;
                        n98("selects_search_result", ne(e, a), {
                            value: r
                        });
                    }, [
                        n98
                    ]),
                    trackDefaultSelect: Object(l.useCallback)(function(e, t) {
                        var a = t.label, r = t.position;
                        n98("selects_popular_skill_service", ne(e, a), {
                            value: r
                        });
                    }, [
                        n98
                    ]),
                    trackSearch: Object(l.useCallback)(function(e) {
                        n98(e ? "clicks_search_button" : "user_hits_enter", t153);
                    }, [
                        n98,
                        t153
                    ]),
                    trackCollapse: Object(l.useCallback)(function() {
                        n98("abandon_search", t153);
                    }, [
                        n98,
                        t153
                    ]),
                    trackClear: Object(l.useCallback)(function(e) {
                        n98("clears_search_string", t153, {
                            value: te(e)
                        });
                    }, [
                        n98,
                        t153
                    ]),
                    trackResponse: r28
                };
            }(y, j), k = S.trackExpand, N = S.trackResultSelect, C = S.trackDefaultSelect, P = S.trackSearch, T = S.trackResponse, I = S.trackCollapse, R = S.trackClear, M = Object(f13.b)({
                default: !1,
                forDesktop: !0
            }), D = Object(d20.e)(M && j, 500), A = Object(p14.a)(E, D, T), U = A.data, z = A.status, q = Object(l.useCallback)(function(e) {
                a84(j), P(e);
            }, [
                a84,
                j,
                P
            ]), V = Object(l.useMemo)(function() {
                return Object.values(o);
            }, [
                o
            ]), B = Object(l.useCallback)(function() {
                R(U);
            }, [
                U,
                R
            ]);
            return u15.a.createElement(x3, r27()({
                value: j,
                placeholder: i,
                className: b,
                size: g,
                ref: t152
            }, {
                isLoading: Object(m17.e)(z),
                onChange: w,
                onClear: B,
                onExpand: k,
                onCollapse: I,
                onSearch: q
            }), M && u15.a.createElement(Y, r27()({
                data: U,
                status: z,
                defaultData: V,
                size: g
            }, {
                onDefaultSelect: C,
                onResultSelect: N
            })));
        });
        ae.ContextProvider = function(e) {
            var t = e.autocompleteUrl, n = e.children;
            return u15.a.createElement(L3.Provider, {
                value: {
                    autocompleteUrl: t
                }
            }, n);
        }, ae.Variant = x3.Variant, ae.displayName = "SearchWidget", t144.b = ae;
    },
    405: function(e, t, n) {
        e.exports = {
            "title-item": "_64wRZ6xh",
            item: "_2vQjp_O2",
            cell: "_vWh44cV",
            title: "_1r8wFQ13",
            description: "_2Fa2w4cD",
            footer: "_7qDyl__j",
            "cta-holder": "_2pGhqCYE"
        };
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "d", function() {
            return o;
        }), n.d(t, "b", function() {
            return l;
        });
        var a = n(21), r = {
            Development: "development",
            SemiProduction: "semi-production",
            Staging: "staging",
            Production: "production"
        }, i = a.appEnv === r.Production, c = a.appEnv === r.Staging, o = !1, s = a.appEnv === r.SemiProduction, l = !(i || c || o || s);
    },
    42: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i;
        }), n.d(t, "a", function() {
            return c;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "b", function() {
            return s;
        }), n(227), n(243);
        var a = n(140), r = n.n(a).a.transitionDuration, i = Number.parseInt(r, 10) || 500, c = "sidebar-host", o = {
            CaseStudies: "caseStudiesSection",
            Video: "videoSection",
            TrendingSkills: "trendingSkillsSection",
            InDemandTalentAndServices: "inDemandResourcesSection",
            Social: "socialShareSection",
            SkillSelector: "skillSelector",
            Search: "searchSection"
        }, s = {
            Client: "client",
            Talent: "talent"
        };
    },
    425: function(e193, t154, n99) {
        "use strict";
        n99(24);
        var a86 = n99(7), r = n99.n(a86), i48 = n99(0), c = n99.n(i48), o = n99(257), s = n99(16), l = n99(3), u = n99.n(l), d = (u.a.string.isRequired, u.a.arrayOf(u.a.shape({
            title: u.a.string.isRequired,
            body: u.a.string.isRequired
        })).isRequired, n99(322)), f = function(e194) {
            var t = {
                "@context": "http://schema.org",
                "@type": "FAQPage",
                name: e194.title,
                mainEntity: e194.questions.map(function(e) {
                    return {
                        "@type": "Question",
                        name: e.title,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: e.body
                        }
                    };
                })
            };
            return c.a.createElement(d.a, {
                schema: t
            });
        };
        n99(477), t154.a = function(e195) {
            var t155 = e195.className, n100 = r()(e195, [
                "className"
            ]), a87 = n100.title, i = n100.questions;
            return c.a.createElement(s.a, {
                semantic: !0,
                className: (t155 ? t155 + " " : "") + "_1-dB7gGN",
                width: s.a.Variant.Width.Fixed
            }, c.a.createElement("h2", {
                className: "_3-FrMagb",
                "data-id": "faq-title"
            }, a87), c.a.createElement("ul", null, i.map(function(e, t) {
                var n = e.title, a = e.body;
                return c.a.createElement(o.a, {
                    as: "li",
                    className: "_2-hdF-ol",
                    expanded: 0 === t,
                    key: t
                }, c.a.createElement(o.a.Main, {
                    as: "h3",
                    className: "_3iWk1qS2"
                }, n), c.a.createElement(o.a.Group, null, c.a.createElement("p", {
                    className: "_1lyKD1TJ",
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })));
            })), c.a.createElement(f, n100));
        };
    },
    43: function(e196, t156, n101) {
        "use strict";
        var a88 = n101(2), r = n101.n(a88), i49 = n101(7), c = n101.n(i49), o44 = n101(6), s = n101.n(o44), l30 = n101(0), u = n101.n(l30), d21 = n101(5), f = n101.n(d21), m = (n101(9), n101(8)), p = (n101(146), {
            "./button.scss": {
                "is-hover": "mt5Y6x-K",
                "is-disabled": "_3OgVEeN8",
                button: "_1bcYCljm",
                "is-size-large": "_3n8NuEgU",
                "is-size-medium": "_3McSaz1R",
                "is-size-small": "_3qSF9CYT",
                "is-theme-primary-green": "_2u-I7BW0",
                "is-theme-primary-blue": "_1G_ocH1a",
                "is-theme-secondary-green": "_3ZEWDKfF",
                "is-theme-secondary-white": "_2AywhfSi",
                "is-theme-secondary-blue": "_7hPQ_Wwr",
                "is-theme-secondary-grey": "_1Wpamv8F",
                "is-theme-secondary-flat": "Mw_6M_G0"
            }
        }), b = {
            Theme: {
                PrimaryGreen: "primary-green",
                PrimaryBlue: "primary-blue",
                SecondaryGreen: "secondary-green",
                SecondaryBlue: "secondary-blue",
                SecondaryWhite: "secondary-white",
                SecondaryGrey: "secondary-grey",
                SecondaryFlat: "secondary-flat"
            },
            Size: {
                Large: "large",
                Medium: "medium",
                Small: "small"
            }
        }, g = {
            Link: "a",
            Button: "button",
            Span: "span"
        }, v14 = function(e) {
            var t = e.theme, n = void 0 === t ? b.Theme.PrimaryGreen : t, a = e.size, i = void 0 === a ? b.Size.Medium : a, o = e.as, l = void 0 === o ? g.Button : o, d = e.className, v = e.disabled, h = e.hover, y = c()(e, [
                "theme",
                "size",
                "as",
                "className",
                "disabled",
                "hover"
            ]);
            return u.a.createElement(l, r()({
            }, y, {
                className: d,
                disabled: v
            }, {
                className: s()(f()("button", Object(m.a)({
                    theme: n,
                    size: i
                }), Object(m.b)({
                    disabled: v,
                    hover: h
                })), p, {
                    handleMissingStyleName: "warn"
                }) + " " + (y && y.className || "") + " " + (d || "")
            }));
        };
        v14.Variant = b, v14.HtmlElement = g, t156.a = v14;
    },
    438: function(e197, t157, n102) {
        "use strict";
        n102(62);
        var a89 = n102(2), r = n102.n(a89), i50 = n102(0), c = n102.n(i50), o45 = n102(3), s19 = n102.n(o45), l31 = n102(9), u = n102(32), d = n102(31), f = n102(214), m = n102(105), p16 = (n102(535), function(e) {
            var t = e.imageUrl, n = e.jobTitle, a = e.fullName, i = e.publicResumeUrl, o = e.as, s = void 0 === o ? "li" : o, l = e.ga, p = void 0 === l ? {
            } : l;
            return c.a.createElement(m.a, {
                className: "_3VBLq0Cc",
                as: s
            }, c.a.createElement(d.b, {
                className: "_2ZKXqZr2",
                url: i,
                a11yHidden: !0
            }, c.a.createElement("div", {
                className: "_19OFE3Ip"
            }, c.a.createElement(f.a, {
                className: "xA1m7OlH"
            }), c.a.createElement("img", r()({
                className: "_3o_U8Bbj " + (Object(u.b)(p.photo) && Object(u.b)(p.photo).className || ""),
                src: t,
                alt: n
            }, Object(u.b)(p.photo))))), c.a.createElement("div", {
                className: "_2aYTOngo"
            }, c.a.createElement(d.a, r()({
                url: i,
                variant: d.b.Variant.Theme.Link,
                className: "lH2hHdja Eb95r03H " + (p.name && p.name.className || "")
            }, p.name), a), c.a.createElement("p", {
                className: "OVM5MvD3 Eb95r03H"
            }, n)));
        }), b = {
            imageUrl: s19.a.string.isRequired,
            fullName: s19.a.string.isRequired,
            publicResumeUrl: s19.a.string.isRequired,
            jobTitle: s19.a.string.isRequired,
            ga: s19.a.shape({
                photo: l31.d,
                name: l31.d
            })
        };
        p16.dataPropTypes = b, t157.a = p16;
    },
    45: function(e198, t158, n103) {
        "use strict";
        n103(24);
        var a90 = n103(2), r29 = n103.n(a90), i51 = n103(7), c21 = n103.n(i51), o46 = n103(0), s = n103.n(o46), l32 = n103(5), u = n103.n(l32), d = (n103(259), n103(260), n103(22)), f = n103(96), m = function(e) {
            var t = e.srcSet, n = e.type, a = e.media, r = e.sizes, i = e.lazyLoad, c = void 0 === i || i;
            return s.a.createElement("source", {
                type: n,
                key: t,
                sizes: r,
                media: a,
                "data-srcset": c ? t : void 0,
                srcSet: c ? f.a : t
            });
        };
        m.displayName = "ImageSource", n103(206);
        var p17 = Object(o46.forwardRef)(function(e199, t159) {
            var n104 = e199.lazyLoad, a = void 0 === n104 || n104, i = e199.src, o = e199.sources, l = void 0 === o ? [] : o, p = e199.alt, b = void 0 === p ? "" : p, g = e199.a11yHidden, v = void 0 !== g && g, h = e199.className, y = e199.children, E = e199.effect, _ = (e199.onError, c21()(e199, [
                "lazyLoad",
                "src",
                "sources",
                "alt",
                "a11yHidden",
                "className",
                "children",
                "effect",
                "onError", 
            ])), O = d.a, j = y || l.length > 0, w = a && !O, S = s.a.createElement("img", r29()({
                ref: j ? void 0 : t159,
                "data-src": w ? i : void 0,
                src: w ? f.a : i,
                alt: v ? "" : b,
                className: u()("lazyload", {
                    "effect-opacity": !O && "opacity" === E,
                    "effect-blur": !O && "blur" === E
                }, h)
            }, _));
            return j ? s.a.createElement("picture", r29()({
                ref: t159
            }, v && {
                role: "presentation"
            }), l && l.map(function(e) {
                return s.a.createElement(m, {
                    type: e.type,
                    key: e.srcSet,
                    sizes: e.sizes,
                    media: e.media,
                    lazyLoad: a,
                    srcSet: e.srcSet
                });
            }), y && function(e200, t) {
                return (Array.isArray(e200) ? e200 : [
                    e200
                ]).map(function(e, n) {
                    return e && "ImageSource" === e.type.displayName ? s.a.cloneElement(e, {
                        key: e.key || n,
                        lazyLoad: t
                    }) : null;
                });
            }(y, a), S) : S;
        });
        p17.Source = m, p17.displayName = "LazyLoadImage", t158.a = p17;
    },
    46: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "undefined" != typeof STORYBOOK_ENV;
        };
    },
    463: function(e201, t160, n105) {
        "use strict";
        n105(24);
        var a91 = n105(0), r = n105.n(a91), i = (n105(9), n105(31));
        n105(538), t160.a = function(e202) {
            var t161 = e202.items, n106 = e202.className;
            return r.a.createElement("div", {
                className: (n106 ? n106 + " " : "") + "_2IFqmtQT"
            }, t161.map(function(e, t) {
                var n = e.iconUrl, a = e.cta;
                return r.a.createElement(i.b, {
                    url: a.href,
                    className: "_1vA6N8_L",
                    key: t
                }, n && r.a.createElement("div", {
                    className: "_2T3SdvUN"
                }, r.a.createElement("img", {
                    src: n,
                    alt: a.label
                })), r.a.createElement("div", {
                    className: "_2sLv6Awn"
                }, r.a.createElement("h3", {
                    className: "_2Ffdfbv0"
                }, a.label), r.a.createElement("div", {
                    className: "_1_xtZnpk"
                })));
            }));
        };
    },
    464: function(e203, t162, n107) {
        "use strict";
        n107.d(t162, "a", function() {
            return p;
        });
        var a92 = n107(2), r = n107.n(a92), i = n107(6), c = n107.n(i), o = n107(5), s = n107.n(o), l = n107(0), u = n107.n(l), d = n107(8), f = (n107(778), {
            "./info-message.scss": {
                container: "_1S0gsIXK",
                icon: "_2OhygCGb",
                "is-error": "wy7NZIb1"
            }
        }), m = function(e) {
            var t = e.children, n = e.isError, a = e.className;
            return u.a.createElement("div", r()({
                className: a
            }, {
                className: c()(s()("container", Object(d.b)({
                    isError: n
                })), f, {
                    handleMissingStyleName: "warn"
                }) + " " + (a || "")
            }), u.a.createElement("span", {
                className: "_2OhygCGb"
            }), t);
        }, p = function(e) {
            return u.a.createElement(m, r()({
            }, e, {
                isError: !0
            }));
        };
        t162.b = m;
    },
    469: function(e204, t163, n108) {
        "use strict";
        n108(23), n108(56), n108(24), n108(51), n108(27), n108(68);
        var a93 = n108(2), r30 = n108.n(a93), i52 = n108(30), c22 = n108.n(i52), o = n108(0), s = n108.n(o), l = n108(12), u = n108(331), d = n108(336), f = (n108(9), n108(125)), m = n108(69), p = n108(224), b = {
            animationDelay: 1100,
            items: [
                {
                    shift: [
                        "-70px",
                        "-50px"
                    ],
                    postponeTime: 150,
                    startScale: 0.45
                },
                {
                    shift: [
                        "-80px",
                        "-10px"
                    ],
                    postponeTime: 450,
                    startScale: 0.45
                },
                {
                    shift: [
                        "20px",
                        "0"
                    ],
                    postponeTime: 600,
                    startScale: 0.45
                },
                {
                    shift: [
                        "60px",
                        "-60px"
                    ],
                    postponeTime: 550,
                    startScale: 0.45
                },
                {
                    shift: [
                        "0px",
                        "-100px"
                    ],
                    postponeTime: 0,
                    startScale: 0.45
                },
                {
                    shift: [
                        "-10px",
                        "40px"
                    ],
                    postponeTime: 300,
                    startScale: 0.45
                },
                {
                    shift: [
                        "-30px",
                        "-80px"
                    ],
                    postponeTime: 450,
                    startScale: 0.45
                },
                {
                    shift: [
                        "160px",
                        "-60px"
                    ],
                    postponeTime: 600,
                    startScale: 0.45
                }, 
            ]
        }, g = n108(438), v = (n108(536), function(e205) {
            var t = e205.items, n = e205.chunkSize, a94 = Math.ceil(t.length / n);
            return s.a.createElement(p.b, {
                numberOfSlides: a94
            }, function(e) {
                return s.a.createElement(s.a.Fragment, null, c22()(new Array(a94).keys()).map(function(a) {
                    return s.a.createElement(p.a, {
                        active: e === a,
                        key: a
                    }, s.a.createElement(y, {
                        items: t.slice(n * a, n * (a + 1))
                    }));
                }));
            });
        }), h = function(e206) {
            var t = e206.items, n = e206.animationDelay, a = e206.animated, i53 = Object(o.useMemo)(function() {
                return t.map(function(e) {
                    return e.imageUrl;
                });
            }, [
                t
            ]);
            return Object(d.a)(i53) && s.a.createElement("ul", {
                className: "_2FcCzbmX"
            }, t.map(function(e, t) {
                var i = b.items[t];
                return s.a.createElement(f.a, {
                    shiftX: i.shift[0],
                    shiftY: i.shift[1],
                    shiftDuration: 0.8,
                    scale: i.startScale,
                    scaleDuration: 0.4,
                    postponeTransition: Object(u.a)(n),
                    key: e.imageUrl,
                    animated: a,
                    as: "li"
                }, s.a.createElement(f.a, {
                    opacity: 0,
                    shiftX: "-20px",
                    postponeTransition: Object(u.a)(i.postponeTime),
                    animated: a
                }, s.a.createElement(g.a, r30()({
                }, e, {
                    as: "div"
                }))));
            }));
        }, y = function(e207) {
            var t = e207.items;
            return s.a.createElement("ul", {
                className: "_2FcCzbmX"
            }, t.map(function(e) {
                return s.a.createElement(g.a, r30()({
                    key: e.imageUrl
                }, e));
            }));
        };
        t163.a = function(e) {
            var t = e.items, n = e.className, a = e.animated, r = void 0 === a || a, i = e.noMap, c = void 0 !== i && i;
            return s.a.createElement("div", {
                className: (n ? n + " " : "") + "_343Vooik"
            }, s.a.createElement(m.a, {
                query: "(min-width: ".concat(l.b.MOBILE_XLARGE, ") and (max-width: ").concat(parseInt(l.b.DESKTOP, 10) - 1, "px)")
            }, s.a.createElement(v, {
                items: t,
                chunkSize: 4
            })), s.a.createElement(m.a, {
                query: "(max-width: ".concat(parseInt(l.b.MOBILE_XLARGE) - 1, "px)")
            }, s.a.createElement(v, {
                items: t,
                chunkSize: 2
            })), s.a.createElement(m.a, {
                query: "(min-width: ".concat(l.b.DESKTOP, ")"),
                defaultMatch: !0
            }, !c && s.a.createElement("div", {
                className: "_3FEzFDtE"
            }), s.a.createElement(h, {
                items: t,
                animationDelay: b.animationDelay,
                animated: r
            })));
        };
    },
    47: function(e208, t164, n109) {
        "use strict";
        n109(74), n109(36), n109(103), t164.a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, n = e.split(" "), a = n.length;
            return a > t && (n[a - 2] += "В " + n.pop()), n.join(" ");
        };
    },
    477: function(e, t, n) {
        e.exports = {
            container: "_1-dB7gGN",
            title: "_3-FrMagb",
            accordion: "_2-hdF-ol",
            question: "_3iWk1qS2",
            answer: "_1lyKD1TJ"
        };
    },
    48: function(e209, t165, n110) {
        "use strict";
        var a95 = n110(6), r = n110.n(a95), i54 = n110(0), c = n110.n(i54), o47 = n110(3), s20 = n110.n(o47), l33 = n110(5), u = n110.n(l33), d = (n110(186), {
            "./html-content.scss": {
                content: "_2iMRJu_T"
            }
        }), f15 = Object(i54.forwardRef)(function(e, t) {
            var n = e.content, a = e.as, i = void 0 === a ? "div" : a, o = e.className, s = e.isUnstyled, l = e.id, f = e.dataId;
            return c.a.createElement(i, {
                ref: t,
                id: l,
                "data-id": f,
                dangerouslySetInnerHTML: {
                    __html: n
                },
                className: (o ? o + " " : "") + r()(u()({
                    content: !s
                }), d, {
                    handleMissingStyleName: "warn"
                })
            });
        });
        f15.propTypes = {
            content: s20.a.string.isRequired,
            className: s20.a.string,
            as: s20.a.string,
            isUnstyled: s20.a.bool,
            id: s20.a.string,
            dataId: s20.a.string
        }, f15.displayName = "HtmlContent", t165.a = f15;
    },
    49: function(e210, t166, n111) {
        "use strict";
        n111(19), n111(235), n111(17), n111(14), n111(24), n111(51), n111(25), n111(26), n111(20), n111(72), n111(203), n111(254), n111(15);
        var a96 = n111(4), r31 = n111.n(a96), i55 = n111(2), c23 = n111.n(i55), o48 = n111(6), s21 = n111.n(o48), l34 = n111(0), u = n111.n(l34), d22 = n111(5), f = n111.n(d22), m = (n111(9), n111(8)), p18 = n111(48), b16 = n111(7), g8 = n111.n(b16), v15 = n111(91), h12 = (n111(159), {
            "./logo-icon.scss": {
                logo: "NtiSrOkt",
                "is-monotone": "YHup1dJu"
            }
        }), y10 = {
            emblem: v15.b,
            wordmark: v15.d,
            wordmarkpng: function() {
                return u.a.createElement("img", {
                    width: "116",
                    height: "32",
                    src: "https://www.toptal.com/toptal-logo.png",
                    alt: "Toptal"
                });
            }
        }, E7 = {
            Emblem: "emblem",
            Wordmark: "wordmark",
            WordmarkPng: "wordmarkpng"
        }, _7 = function(e) {
            var t = e.type, n = void 0 === t ? E7.Wordmark : t, a = e.isMonotone, r = g8()(e, [
                "type",
                "isMonotone"
            ]), i = y10[n];
            return u.a.createElement("div", c23()({
            }, r, {
                className: s21()(f()("logo", Object(m.b)({
                    isMonotone: a
                })), h12, {
                    handleMissingStyleName: "warn"
                }) + " " + (r && r.className || "")
            }), u.a.createElement(i, null));
        };
        _7.Variant = E7;
        var O = _7, j6 = (n111(110), n111(188), n111(1)), w = n111.n(j6);
        function S6(e, t167) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t167 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function k(e) {
            var t168, n;
            for(t168 = 1; t168 < arguments.length; t168++)n = null != arguments[t168] ? arguments[t168] : {
            }, t168 % 2 ? S6(Object(n), !0).forEach(function(t) {
                r31()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S6(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var N = [
            "wordmark",
            "suffix",
            "headline"
        ];
        function C5(e, t169) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t169 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function P(e) {
            var t170, n;
            for(t170 = 1; t170 < arguments.length; t170++)n = null != arguments[t170] ? arguments[t170] : {
            }, t170 % 2 ? C5(Object(n), !0).forEach(function(t) {
                r31()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C5(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        n111(151);
        var x = {
            "./compound-logo.scss": {
                registered: "_2yx3tQoS",
                "composite-logo": "_27w5BS2q",
                headline: "_1lvdjAD0",
                "headline-text": "_3eQ_EZmB",
                container: "_58Zij-Oo",
                logo: "_1YO-qTkC",
                emblem: "JZBjwybU",
                wordmark: "_1SDD_TaP",
                suffix: "_1KvUc_3R",
                "headline-separator": "cpfvvVen",
                "is-monotone": "_2FUhxoSV",
                "is-size-large": "_1ZjdOUzr",
                "is-size-medium": "_3Qr50Vve",
                "is-size-small": "A1tn-zbg",
                "is-default-hidden": "_27Qp7-0j",
                "is-tablet-hidden": "_2bE-MpfW",
                "is-desktop-hidden": "_1qWPArs6",
                "is-desktop-large-hidden": "_3gIwdeKZ",
                "is-tablet-visible": "aSm5Eu45",
                "is-desktop-visible": "sQf4YFbG",
                "is-desktop-large-visible": "Pr_2B7aa",
                "is-default-align-center-enabled": "_1gM6aSr1",
                "is-tablet-align-center-enabled": "_3oXj0__2",
                "is-desktop-align-center-enabled": "N3vjTBqY",
                "is-desktop-large-align-center-enabled": "_3a2ad5pt",
                "is-tablet-align-center-disabled": "_1YE9rzs1",
                "is-desktop-align-center-disabled": "_3ofkGqyM",
                "is-desktop-large-align-center-disabled": "_2IToekk2"
            }
        }, L = {
            Type: O.Variant,
            Size: {
                Large: "large",
                Medium: "medium",
                Small: "small"
            },
            Layout: {
                Regular: {
                    default: {
                        headline: !1
                    },
                    forTablet: {
                    }
                },
                Gradual: {
                    default: {
                        wordmark: !1,
                        headline: !1
                    },
                    forTablet: {
                        wordmark: !1
                    },
                    forDesktop: {
                    }
                },
                Foldable: {
                    default: {
                        wordmark: !1,
                        suffix: !1
                    },
                    forTablet: {
                    }
                },
                Compact: {
                    default: {
                        wordmark: !1,
                        suffix: !1
                    },
                    forTablet: {
                        wordmark: !1
                    },
                    forDesktop: {
                    }
                }
            }
        }, T = function(e) {
            var t = e.headline, n = e.headlineAs, a = void 0 === n ? "div" : n, r = e.styles, i = e.className, c = t.endsWith("В®");
            return c && (t = t.slice(0, -1).trimEnd(), t += "&nbsp;<span>&reg;</span>"), u.a.createElement("div", {
                className: f()(i, r["headline-container"])
            }, u.a.createElement("div", {
                className: "_1lvdjAD0"
            }, u.a.createElement("span", {
                className: "cpfvvVen"
            }), u.a.createElement("div", null, c ? u.a.createElement(p18.a, {
                isUnstyled: !0,
                as: a,
                content: t,
                className: (r.headline ? r.headline + " " : "") + "_3eQ_EZmB"
            }) : u.a.createElement(a, {
                className: (r.headline ? r.headline + " " : "") + "_3eQ_EZmB"
            }, t))));
        }, I4 = function(e211) {
            var t171 = e211.layout, n112 = void 0 === t171 ? L.Layout.Regular : t171, a97 = e211.type, i56 = e211.size, o49 = e211.href, d = e211.title, p = e211.suffix, b = e211.headline, g = e211.headlineAs, v = e211.styles, h = void 0 === v ? {
            } : v, y = e211.isMonotone, E = Object(l34.useMemo)(function() {
                return (function(e212, t172) {
                    var n113;
                    n113 = e212, e212 = Object.entries({
                        default: n113.default,
                        tablet: n113.forTablet,
                        desktop: n113.forDesktop,
                        "desktop-large": n113.forDesktopLarge
                    }).reduce(function(e, t) {
                        var n = w()(t, 2), a = n[0], i = n[1];
                        return k(k({
                        }, e), i && r31()({
                        }, a, i));
                    }, {
                    }), Object.keys(e212).forEach(function(t) {
                        N.forEach(function(n) {
                            var a, r;
                            null !== (r = (a = e212[t])[n]) && void 0 !== r || (a[n] = !0);
                        });
                    });
                    var a98 = Object.entries(e212).reduce(function(e213, t173) {
                        var n114 = w()(t173, 2), a = n114[0], i = n114[1];
                        return N.forEach(function(t) {
                            var n, c, o = null === (n = i[t]) || void 0 === n || n, s = !(null === (c = Object.values(e213).map(function(e) {
                                return e[t];
                            }).filter(function(e) {
                                return void 0 !== e;
                            }).pop()) || void 0 === c || c), l = null;
                            o ? s && (l = !0) : s || (l = !1), null !== l && (e213[a] = k(k({
                            }, e213[a]), {
                            }, r31()({
                            }, t, l)));
                        }), e213;
                    }, {
                    }), i57 = N.reduce(function(e214, t) {
                        return k(k({
                        }, e214), {
                        }, r31()({
                        }, t, Object.entries(a98).reduce(function(e, n) {
                            var a = w()(n, 2), r = a[0], i = a[1];
                            return void 0 !== i[t] && (e[r] = i[t] ? "visible" : "hidden"), e;
                        }, {
                        })));
                    }, {
                    });
                    return i57.container = Object.entries(e212).reduce(function(e, n) {
                        var a, r = w()(n, 2), i = r[0], c = r[1], o = c.wordmark, s = c.suffix, l = null !== (a = Object.values(e).pop()) && void 0 !== a ? a : "disabled";
                        return o || t172 && s ? l.endsWith("enabled") && (e[i] = "align-center-disabled") : l.endsWith("disabled") && (e[i] = "align-center-enabled"), e;
                    }, {
                    }), i57;
                })(n112, p);
            }, [
                n112,
                p
            ]), _ = {
                isMonotone: y,
                className: h.logo
            }, j = Object.values(n112).map(function(e) {
                return e.wordmark;
            }), S = j.every(Boolean) || j.length > 1 || n112.default.wordmark, C = a97 ? function() {
                return u.a.createElement(O, c23()({
                    type: a97
                }, _, {
                    className: "_1YO-qTkC " + ({
                        type: a97
                    }.className || "") + (_ ? " " + (_.className || "") : "")
                }));
            } : function() {
                return u.a.createElement(u.a.Fragment, null, u.a.createElement(O, c23()({
                }, _, {
                    type: L.Type.Emblem,
                    className: "JZBjwybU " + (_ && _.className || "")
                })), S && u.a.createElement(O, c23()({
                }, _, {
                    type: L.Type.Wordmark,
                    className: s21()(f()("wordmark", Object(m.a)(E.wordmark)), x, {
                        handleMissingStyleName: "warn"
                    }) + " " + (_ && _.className || "")
                })), u.a.createElement("div", {
                    className: "_2yx3tQoS"
                }, u.a.createElement("span", null, "В®")));
            }, I = o49 ? "a" : "div";
            return u.a.createElement("div", {
                className: (h.container ? h.container + " " : "") + s21()(f()("container", P(P({
                }, Object(m.b)({
                    isMonotone: y
                })), Object(m.a)(E.container))), x, {
                    handleMissingStyleName: "warn"
                })
            }, u.a.createElement(I, c23()({
                href: o49,
                title: d
            }, {
                "aria-label": d,
                className: s21()(f()("composite-logo", Object(m.a)(i56, "size")), x, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    href: o49,
                    title: d
                }.className || "")
            }), u.a.createElement(C, null), p && u.a.createElement("div", {
                className: (h.suffix ? h.suffix + " " : "") + s21()(f()("suffix", Object(m.a)(E.suffix)), x, {
                    handleMissingStyleName: "warn"
                })
            }, p)), b && u.a.createElement(T, c23()({
                headline: b,
                headlineAs: g,
                styles: h
            }, {
                className: s21()(f()(Object(m.a)(E.headline)), x, {
                    handleMissingStyleName: "warn"
                }) + " " + ({
                    headline: b,
                    headlineAs: g,
                    styles: h
                }.className || "")
            })));
        };
        I4.Variant = L, t166.a = I4;
    },
    50: function(e, t, n) {
        e.exports = {
            desktopLarge: "1200px",
            desktop: "1024px",
            tabletLarge: "834px",
            tablet: "768px",
            mobileXLarge: "524px",
            mobileLarge: "425px",
            mobile: "320px"
        };
    },
    52: function(e215, t174, n115) {
        "use strict";
        n115.d(t174, "a", function() {
            return f16;
        });
        var a99 = n115(2), r = n115.n(a99), i58 = n115(0), c = n115.n(i58), o50 = n115(5), s = n115.n(o50), l = n115(58), u16 = n115(78), d = n115.n(u16), f16 = function(e) {
            var t = e.children, n = e.className, a = e.mobile, i = void 0 === a ? l.d : a, o = e.tablet, u = e.desktop, f = e.large, m = e.role;
            return c.a.createElement("div", r()({
                className: (s()(n, Object(l.c)(d.a, [
                    i,
                    o,
                    u,
                    f
                ])) ? s()(n, Object(l.c)(d.a, [
                    i,
                    o,
                    u,
                    f
                ])) + " " : "") + "_3jgwFSUz " + ({
                    role: m
                }.className || "")
            }, {
                role: m
            }), t);
        };
        t174.b = function(e) {
            var t = e.className, n = e.children, a = e.gutter, i = void 0 === a ? l.b : a, o = e.role;
            return c.a.createElement("div", r()({
                className: (s()(t, Object(l.c)(d.a, [
                    i.mobile,
                    i.tablet,
                    i.desktop,
                    i.large
                ], "gutter")) ? s()(t, Object(l.c)(d.a, [
                    i.mobile,
                    i.tablet,
                    i.desktop,
                    i.large
                ], "gutter")) + " " : "") + "VRzpBOaS " + ({
                    role: o
                }.className || "")
            }, {
                role: o
            }), n);
        };
    },
    529: function(e, t, n) {
        "use strict";
        var a = n(3), r = n.n(a), i = n(9), c = {
            title: r.a.string.isRequired,
            items: i.e.isRequired
        }, o = r.a.exact(c), s = (Object(i.a)(c), {
            popularResourcesSection: r.a.exact({
                skillList: o.isRequired,
                serviceList: o.isRequired
            }).isRequired,
            searchWidget: r.a.exact({
                placeholder: r.a.string.isRequired
            }).isRequired
        });
        r.a.exact(s);
    },
    53: function(e216, t175, n) {
        "use strict";
        n.d(t175, "c", function() {
            return l;
        }), n.d(t175, "b", function() {
            return u;
        }), n.d(t175, "a", function() {
            return d;
        });
        var a = n(98), r = n(11), i = n(34), c = new a.a(), o = function(e) {
            return "user_agreed_".concat(e);
        }, s = function(e) {
            return Object(r.a)() && c.get(o(e)) || !1;
        }, l = function(e, t) {
            Object(r.a)() && c.set(o(e), t, {
                path: "/",
                expires: new Date(Date.now() + 31536000000)
            });
        }, u = function(e) {
            return e === i.b.GDPR ? !s(i.b.GDPR) : !s(i.b.GDPR) && !s(i.b.PrivacyShield);
        }, d = function(e) {
            return e !== i.b.GDPR || Boolean(s(i.b.GDPR));
        };
    },
    538: function(e, t, n) {
        e.exports = {
            container: "_2IFqmtQT",
            link: "_1vA6N8_L",
            "link-icon": "_2T3SdvUN",
            "link-text": "_2Ffdfbv0",
            "link-icon-right": "_1_xtZnpk",
            "link-title": "_2sLv6Awn"
        };
    },
    547: function(e217, t176, n116) {
        "use strict";
        var a = n116(0), r = n116.n(a), i = n116(47), c = n116(261), o = (n116(9), n116(71)), s = n116(16), l = n116(463);
        n116(596), t176.a = function(e) {
            var t = e.title, n = e.items;
            return r.a.createElement(s.a, {
                semantic: !0,
                width: s.a.Variant.Width.Fixed
            }, r.a.createElement(o.a, {
                className: "_3gphASaH",
                margin: [
                    o.a.Variant.Margin.Standard,
                    o.a.Variant.Margin.Bottom
                ],
                dataId: "cross-vertical-title"
            }, Object(c.b)(Object(i.a)(t))), r.a.createElement(l.a, {
                items: n
            }));
        };
    },
    55: function(e, t, n) {
        "use strict";
        t.a = {
            About: "about",
            AllCities: "all-cities",
            AllServices: "all-services",
            AllLocationSkills: "all-location-skills",
            Branding: "branding",
            Careers: "careers",
            CaseStudyArticle: "case-study-article",
            ClientReviews: "client-reviews",
            Clients: "clients",
            CompanySpotlight: "company-spotlight",
            Contact: "contact",
            CoreTeamJob: "core-team-job",
            DevIndex: "dev-index",
            DynamicQuiz: "dynamic-quiz",
            EmblemChallenge: "emblem-challenge",
            EngineeringManagerReport: "engineering-manager-report",
            EngineeringManagerQuizWelcome: "engineering-manager-quiz-welcome",
            EnterpriseHub: "enterprise-hub",
            EnterpriseHubInformation: "enterprise-hub-information",
            FAQ: "faq",
            Freelance: "freelance",
            FreelanceCalculatorSkill: "freelance-calculator-skill",
            FreelanceCalculatorWidget: "freelance-calculator-widget",
            GatedContent: "gated-content",
            HiringGuide: "hiring-guide",
            Home: "home",
            How: "how",
            Information: "information",
            InternalLinking: "internal-linking",
            InterviewQuestions: "interview-questions",
            JobDescription: "job-description",
            JobPosting: "job-posting",
            LandingTemplate: "landing-template",
            LocationSkill: "location-skill",
            MaturityAssessmentReport: "maturity-assessment-report",
            MediaAssets: "media-assets",
            MediaAssetsHome: "media-assets-home",
            Partnership: "partnership",
            PressCenter: "press-center",
            PressRelease: "press-release",
            Projects: "projects",
            RemoteReadinessQuiz: "remote-readiness-quiz",
            RemoteReadinessQuizWelcome: "remote-readiness-quiz-welcome",
            RemoteReadinessResult: "remote-readiness-result",
            Resources: "resources",
            SearchResults: "search-results",
            ServiceCentric: "service-centric",
            Skill: "skill",
            SkillJobs: "skill-jobs",
            SkillJobsIndex: "skill-jobs-index",
            SkillSem: "skill-sem",
            SkillSemDesigners: "skill-sem-designers",
            TalentAssessmentWelcome: "talent-assessment-welcome",
            TalentAssessmentWelcomeExperiment: "talent-assessment-welcome-experiment",
            TalentAssessmentResults: "talent-assessment-results",
            TalentAssessmentResultsExperiment: "talent-assessment-results-experiment",
            TalentHome: "talent-home",
            TalentFAQ: "talent-faq",
            TalentReviews: "talent-reviews",
            TestPage: "test-page",
            TestPageEtag: "test-page-etag",
            TopThreePercent: "top-three-percent",
            VerticalJobs: "vertical-jobs",
            VerticalLanding: "vertical-landing",
            VerticalLandingExperiment: "vertical-landing-experiment",
            What: "what",
            Why: "why"
        };
    },
    571: function(e218, t177, n117) {
        "use strict";
        n117.d(t177, "a", function() {
            return s22;
        });
        var a100 = n117(763), r = n117.n(a100), i59 = n117(0), c24 = n117(13), o = n117(10);
        function s22(e219, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", s = Object(o.h)(), l = s.state, u = s.updateState, d = s.fetchJSON, f = Object(i59.useCallback)(function() {
                if (!t) return u({
                    status: c24.a.INITIAL,
                    data: {
                    }
                }), !1;
                u({
                    error: !1,
                    status: c24.a.LOADING
                });
            }, [
                t,
                u
            ]), m = Object(i59.useCallback)(function(i) {
                var c = r()({
                    q: t,
                    type: a
                }, function(e) {
                    return !e;
                });
                d(e219, c, {
                    signal: i
                }, {
                    onBeforeSend: f,
                    onSuccess: function(e) {
                        n && n(t, e);
                    }
                });
            }, [
                e219,
                t,
                a,
                f,
                n,
                d
            ]);
            return Object(i59.useEffect)(function() {
                var e = new AbortController();
                return m(e.signal), function() {
                    return e.abort();
                };
            }, [
                m
            ]), l;
        }
    },
    573: function(e220, t, n) {
        var a = n(0);
        function r(e) {
            return a.createElement("svg", e, [
                a.createElement("defs", {
                    key: 0
                }, a.createElement("path", {
                    d: "M9.5 0A9.5 9.5 0 0119 9.5a9.464 9.464 0 01-2.367 6.275L24 23.142l-.858.858-7.367-7.367A9.464 9.464 0 019.5 19a9.5 9.5 0 010-19zm0 1.118a8.382 8.382 0 100 16.764 8.382 8.382 0 000-16.764z",
                    id: "a"
                })),
                a.createElement("use", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    xlinkHref: "#a",
                    key: 1
                }), 
            ]);
        }
        r.defaultProps = {
            viewBox: "0 0 24 24"
        }, e220.exports = r, r.default = r;
    },
    58: function(e221, t178, n118) {
        "use strict";
        n118.d(t178, "a", function() {
            return c;
        }), n118.d(t178, "b", function() {
            return o;
        }), n118.d(t178, "d", function() {
            return s;
        }), n118.d(t178, "c", function() {
            return l;
        }), n118(17), n118(74), n118(24), n118(72);
        var a101 = n118(109), r = n118.n(a101), i = n118(8), c = {
            Mobile: "mobile",
            Tablet: "tablet",
            Desktop: "desktop",
            Large: "large"
        }, o = {
            large: 4,
            desktop: 3,
            tablet: 3,
            mobile: 2
        }, s = 12, l = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", a = Object(i.a)(t, u(n), !1);
            return r()(a, function(t, n) {
                return e[n];
            });
        }, u = function() {
            var e222 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return Object.values(c).map(function(t) {
                return [
                    e222,
                    t
                ].filter(function(e) {
                    return e;
                }).join("-");
            });
        };
    },
    59: function(e223, t179, n119) {
        "use strict";
        n119.d(t179, "b", function() {
            return d;
        }), n119(14), n119(27), n119(33), n119(106), n119(15);
        var a = n119(66), r = n119.n(a), i = n119(63), c = n119.n(i), o = n119(198), s = n119.n(o), l = n119(13), u = n119(39), d = s()(function(e) {
            var t = new f();
            return t.fetch(e), t;
        }), f = function() {
            function e224() {
                r()(this, e224), this.status = l.a.INITIAL, this.value = null, this.listeners = [];
            }
            return c()(e224, [
                {
                    key: "subscribe",
                    value: function(e) {
                        this.status === l.a.SUCCESS || this.status === l.a.ERROR ? e(this.value, this.status) : this.listeners.push(e);
                    }
                },
                {
                    key: "fetch",
                    value: function(e) {
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t.toString = function() {
                            return e.toString();
                        }, t;
                    }(function(e225) {
                        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        };
                        this.status === l.a.INITIAL && (this.status = l.a.LOADING, fetch(e225, n).then(function(e) {
                            return e.json();
                        }).then(function(e) {
                            t.value = e, t.status = l.a.SUCCESS, t._broadcast();
                        }).catch(function(e) {
                            u.a.error("FetchJSONWithCache Error", {
                                error: e
                            }), t.status = l.a.ERROR, t._broadcast();
                        }));
                    })
                },
                {
                    key: "_broadcast",
                    value: function() {
                        var e = this;
                        this.listeners.forEach(function(t) {
                            return t(e.value, e.status);
                        }), this.listeners = [];
                    }
                }, 
            ]), e224;
        }();
        t179.a = f;
    },
    596: function(e, t, n) {
        e.exports = {
            title: "_3gphASaH"
        };
    },
    60: function(e226, t180, n120) {
        "use strict";
        var a102 = n120(6), r = n120.n(a102), i = n120(0), c = n120.n(i), o = n120(5), s = n120.n(o), l = n120(8), u = (n120(9), n120(22)), d = (n120(193), {
            "./spinner.scss": {
                scale: "_2MVUZXqY",
                container: "_2fCaLc8V",
                "is-size-tiny": "S9kGp0pM",
                "is-size-small": "_2IO7YLhY",
                "is-size-medium": "_1aXoWsYQ",
                "is-size-large": "_1foXSAlV",
                circular: "_2OnLG4G0",
                rotate: "_2YfUS-rq",
                "is-static": "_3bQ8Np11",
                path: "_1f5mXS6c",
                dash: "ySzGGupe"
            }
        }), f = {
            Size: {
                Tiny: "tiny",
                Small: "small",
                Medium: "medium",
                Large: "large"
            }
        }, m = function(e) {
            var t = e.className, n = e.size, a = void 0 === n ? f.Size.Medium : n;
            return c.a.createElement("div", {
                className: (t ? t + " " : "") + r()(s()("container", Object(l.a)({
                    size: a
                }), Object(l.b)({
                    isStatic: u.a
                })), d, {
                    handleMissingStyleName: "warn"
                })
            }, c.a.createElement("div", {
                className: "_2MVUZXqY"
            }, c.a.createElement("svg", {
                className: "_2OnLG4G0"
            }, c.a.createElement("circle", {
                className: "_1f5mXS6c",
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                strokeWidth: "3"
            }))));
        };
        m.Variant = f, t180.a = m;
    },
    61: function(e, t, n) {
        "use strict";
        t.a = function() {
            return null;
        };
    },
    65: function(e227, t181, n121) {
        "use strict";
        n121.d(t181, "c", function() {
            return l;
        }), n121.d(t181, "a", function() {
            return u;
        }), n121.d(t181, "b", function() {
            return d;
        }), n121(19), n121(17), n121(14), n121(25), n121(26), n121(20), n121(15);
        var a103 = n121(4), r = n121.n(a103), i = n121(98), c = n121(11);
        function o(e, t182) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t182 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        var s = new i.a();
        function l(e228, t183, n122) {
            Object(c.a)() && s.set(e228, t183, function(e) {
                var t184, n;
                for(t184 = 1; t184 < arguments.length; t184++)n = null != arguments[t184] ? arguments[t184] : {
                }, t184 % 2 ? o(Object(n), !0).forEach(function(t) {
                    r()(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
                return e;
            }({
                path: "/"
            }, n122));
        }
        function u(e) {
            if (Object(c.a)()) return s.get(e);
        }
        var d = function(e) {
            return 24 * e * 3600;
        };
    },
    659: function(e229, t185, n123) {
        "use strict";
        var a104 = n123(2), r = n123.n(a104), i60 = n123(0), c = n123.n(i60), o = n123(47), s = n123(12), l = (n123(9), n123(179)), u = n123(69), d = n123(356), f = n123(238), m = n123(469), p = (n123(438), n123(16));
        n123(631), t185.a = function(e) {
            var t = e.title, n = e.subtitle, a = e.ctas, i = e.ctaSupportText, b = void 0 === i ? l.a : i, g = e.trustbar, v = e.showcaseTalents, h = e.animationDelay, y = e.animated, E = void 0 === y || y, _ = e.noMap, O = e.className;
            return c.a.createElement(p.a, {
                className: (O ? O + " " : "") + "vEXkexC4",
                space: p.a.Variant.Space.Medium,
                forceSpace: !0
            }, c.a.createElement(p.a, {
                width: p.a.Variant.Width.Fixed,
                space: p.a.Variant.Space.None,
                className: "_2ITWOJ8U"
            }, c.a.createElement("div", {
                className: "_2MN3d_Vf"
            }, c.a.createElement(u.a, {
                query: "(max-width: ".concat(parseInt(s.b.DESKTOP) - 1, "px)")
            }, c.a.createElement(m.a, r()({
                className: "_2m1Be_j0 " + ({
                    animated: E,
                    noMap: _
                }.className || ""),
                items: v
            }, {
                animated: E,
                noMap: _
            })))), c.a.createElement("div", {
                className: "_2EOMFsoZ"
            }, c.a.createElement("div", {
                className: "_1gNcFfr2"
            }, c.a.createElement("h1", {
                className: "_1PHP5q1Y",
                "data-id": "hero-title",
                dangerouslySetInnerHTML: {
                    __html: t
                }
            }), c.a.createElement("p", {
                className: "PYUx701H",
                dangerouslySetInnerHTML: {
                    __html: Object(o.a)(n)
                }
            }), c.a.createElement("div", {
                className: "_3jjhfxI1"
            }, c.a.createElement(d.a, r()({
                ctas: a
            }, {
                className: "_1F5eFSRy " + ({
                    ctas: a
                }.className || "")
            })), c.a.createElement("p", {
                className: "_1uVOEIFO"
            }, b))), c.a.createElement(u.a, {
                query: "(min-width: ".concat(s.b.DESKTOP, ")"),
                defaultMatch: !0
            }, c.a.createElement(m.a, r()({
                className: "_2m1Be_j0 " + ({
                    animated: E,
                    noMap: _,
                    animationDelay: h
                }.className || ""),
                items: v
            }, {
                animated: E,
                noMap: _,
                animationDelay: h
            }))))), g && c.a.createElement(f.a, g));
        };
    },
    69: function(e230, t186, n124) {
        "use strict";
        n124(14);
        var a105 = n124(1), r32 = n124.n(a105), i61 = n124(190), c = n124.n(i61), o51 = n124(95), s = n124.n(o51), l = n124(0), u17 = n124(3), d23 = n124.n(u17), f17 = function(e231) {
            var t187 = e231.query, n125 = e231.callback, a106 = e231.children, i62 = e231.defaultMatch, o = e231.queries, u = Object(l.useState)(s()(i62) ? null : {
                matches: i62
            }), d = r32()(u, 2), f = d[0], m = d[1], p = Object(l.useCallback)(function(e) {
                m(e), n125 && n125(e);
            }, [
                n125
            ]), b = function(e) {
                if (!c()(e)) {
                    var t = {
                        matches: {
                        }
                    };
                    for(var n in e)t.matches[n] = e[n].matches;
                    p(t);
                }
            };
            return Object(l.useEffect)(function() {
                var e232;
                if (t187 || o) {
                    if (t187) {
                        o && console.warn("MatchMedia is being called with single and multiple queries at the same time. You should use either one or the other.");
                        var n = window.matchMedia(t187);
                        return p(n), n.addListener(p), function() {
                            return n.removeListener(p);
                        };
                    }
                    return "object" == typeof (e232 = function() {
                        var e233 = {
                        }, t = [];
                        for(var n in o){
                            var a = window.matchMedia(o[n]);
                            e233[n] = a;
                        }
                        b(e233);
                        var r33 = function(n) {
                            var a = e233[n], r = function() {
                                return b(e233);
                            };
                            a.addListener(r), t.push(function() {
                                return a.removeListener(r);
                            });
                        };
                        for(var i in e233)r33(i);
                        return {
                            v: function() {
                                t.forEach(function(e) {
                                    return e();
                                });
                            }
                        };
                    }()) ? e232.v : void 0;
                }
            }, [
                p,
                o,
                t187
            ]), f ? !o || a106 instanceof Function ? a106 instanceof Function ? a106(f) : f.matches && a106 ? a106 : null : (console.error("MatchMedia is being called with multiple queries but children is not a function. Consider using single query or setting children as a function to render components conditionally."), null) : null;
        };
        f17.propTypes = {
            query: d23.a.string,
            queries: d23.a.object,
            callback: d23.a.func,
            defaultMatch: d23.a.bool
        }, t186.a = Object(l.memo)(f17);
    },
    702: function(e234, t, n) {
        "use strict";
        var a = n(2), r = n.n(a), i = n(0), c = n.n(i), o = n(280), s = n(116);
        n(647), t.a = function(e) {
            return c.a.createElement(s.a, {
                forceSpace: !0,
                className: "_1AU3micp"
            }, c.a.createElement("p", {
                className: "_3OR3y5Hs"
            }, e.title), c.a.createElement(o.b, r()({
                width: "100%",
                height: "28px",
                theme: "light"
            }, e)));
        };
    },
    703: function(e235, t188, n126) {
        "use strict";
        n126(24);
        var a107 = n126(1), r = n126.n(a107), i63 = n126(0), c = n126.n(i63), o = n126(31), s = n126(201), l = n126(71), u = (n126(302), n126(16));
        n126(759), t188.a = function(e236) {
            var t189 = e236.title, n = e236.blogPosts, a = r()(e236.ctas, 1)[0], i = a.label, d = a.href;
            return c.a.createElement(u.a, {
                semantic: !0,
                width: u.a.Variant.Width.Fixed
            }, c.a.createElement(l.a, {
                className: "_3464egf9",
                dataId: "trending-articles-title"
            }, t189), c.a.createElement("div", {
                className: "_1v0q4yLn"
            }, n.map(function(e, t) {
                return c.a.createElement("div", {
                    key: t,
                    className: "_2ktNOg9M"
                }, c.a.createElement(s.b, e));
            })), c.a.createElement("div", {
                className: "EYJMZQYK"
            }, c.a.createElement(o.b, {
                type: o.b.Variant.Theme.Secondary,
                url: d
            }, i)));
        };
    },
    704: function(e237, t190, n127) {
        "use strict";
        n127(19), n127(176);
        var a108 = n127(0), r = n127.n(a108), i = n127(262), c = n127(263), o = n127(16);
        n127(851), t190.a = function(e) {
            var t = e.title, n = e.description, a = e.skillJobsPages, s = e.cta;
            return r.a.createElement(o.a, {
                semantic: !0,
                width: o.a.Variant.Width.Fixed,
                className: "UjyfWkT0"
            }, r.a.createElement("div", {
                className: "_1ERCAXNg"
            }, r.a.createElement("h2", {
                className: "_3eaUfUxR",
                "data-id": "job-opportunities-title"
            }, t), r.a.createElement(i.a, {
                copy: n,
                as: "p",
                className: "_2Vt3M80X"
            })), r.a.createElement("div", {
                className: "_22S28k_M"
            }, r.a.createElement(c.a, {
                skillPages: a,
                cta: s
            })));
        };
    },
    705: function(e238, t191, n128) {
        "use strict";
        n128(19), n128(176), n128(24);
        var a109 = n128(2), r = n128.n(a109), i = n128(0), c = n128.n(i), o = n128(71), s = n128(201), l = (n128(302), n128(16));
        n128(760), t191.a = function(e239) {
            var t192 = e239.title, n = e239.description, a = e239.blogPosts;
            return c.a.createElement(l.a, {
                className: "_2Gg2PJaD"
            }, c.a.createElement(l.a, {
                semantic: !0,
                width: l.a.Variant.Width.Fixed
            }, c.a.createElement("span", {
                className: "_32vUdETR"
            }), c.a.createElement("div", {
                className: "_2apRCwP-"
            }, c.a.createElement(o.a, {
                className: "_2u9IMI_c",
                dataId: "hiring-remote-title"
            }, t192), c.a.createElement("p", {
                className: "_1XGKO4db"
            }, n)), c.a.createElement("div", {
                className: "SlY1SJfZ"
            }, a.map(function(e, t) {
                return c.a.createElement("div", {
                    key: t,
                    className: "_2crsyc9a"
                }, c.a.createElement(s.b, r()({
                    size: s.b.Variant.Size.Large
                }, e)));
            }))));
        };
    },
    706: function(e240, t193, n129) {
        "use strict";
        n129(24), n129(51);
        var a110 = n129(2), r34 = n129.n(a110), i64 = n129(1), c25 = n129.n(i64), o52 = n129(6), s = n129.n(o52), l = n129(0), u = n129.n(l), d24 = n129(5), f = n129.n(d24), m = n129(12), p19 = n129(10), b = (n129(9), n129(69)), g = n129(45), v = n129(31), h = n129(231), y = n129(71), E = n129(214), _8 = n129(204), O = n129(16), j = (n129(761), {
            "./meet-talent.scss": {
                container: "_3EDMpBjA",
                title: "_2OI3ylyG",
                "avatar-container": "_3Sc2ujmg",
                avatar: "_3siSP-LC",
                "is-active": "_3rGuf2PF",
                "avatar-name": "_3ToLUych",
                "avatar-image": "_7ng8qnUa",
                "is-inactive": "_3Ex82UXI",
                "card-container": "Jr_hHigZ",
                "card-background": "_3vJ8jGvh",
                "card-picture": "_1M0xqkxu",
                "card-picture-logo": "_2qLRa5LB",
                "card-info": "hBrS_qrV",
                "card-name": "_2A26aCq6",
                "card-role": "_2LQISjlv",
                "card-description": "_3H1wXsRj",
                "card-footer": "_1FEDQdXj",
                "card-company": "_3oAy5t_D",
                "card-company-prefix": "_2r2kMPP2",
                "card-company-logo": "_1qCTwhyt",
                "card-cta": "_7eQ3Urfn",
                "signup-container": "_3Yv-GRbF",
                "signup-text": "_1I9W3EKS",
                "signup-cta": "_2dCHkw-e",
                "hire-cta": "_3zigH5HU",
                "card-picture-overlay": "_3La4lHyP",
                "tags-container": "_3JQi8uDU",
                "skill-tag": "_27d9RBhI"
            }
        }), w = function(e241) {
            var t194 = e241.tags, n = e241.moreHref, a = e241.noOfRows, r = void 0 === a ? 1 : a, i = Object(p19.x)(r), c = i.containerRef, o = i.removedCount;
            return u.a.createElement("div", {
                ref: c,
                className: "_3JQi8uDU"
            }, t194.map(function(e, t) {
                return u.a.createElement(_8.a, {
                    key: t,
                    tag: e,
                    className: "_27d9RBhI"
                });
            }), u.a.createElement(_8.a, {
                className: "_27d9RBhI",
                tag: {
                    label: "+ ".concat(o || "0", " more"),
                    href: n
                },
                style: {
                    display: "none"
                }
            }));
        };
        t193.a = function(e242) {
            var t195 = e242.title, n130 = e242.showcaseTalents, a = e242.footerText, i = e242.footerCta, o = e242.hireCtaInlineStyles, d = e242.hireCtaDataId, p = e242.gaEvent, _ = e242.gaCategory, S = n130.slice(0, 3), k = Object(l.useState)(0), N = c25()(k, 2), C = N[0], P = N[1], x = S[C], L = x.publicResumeUrl, T = x.bigImageUrl, I = x.hireJobTitle, R = x.fullName, M = x.jobTitle, D = x.bio, A = x.skills, U = x.previousCompanyImageUrl, z = x.previousCompanyName, q = x.ctaInlineStyles, V = x.firstName;
            return u.a.createElement(O.a, {
                semantic: !0,
                width: O.a.Variant.Width.Fixed,
                forceSpace: !0
            }, u.a.createElement(y.a, {
                className: "_2OI3ylyG",
                margin: [
                    y.a.Variant.Margin.Standard,
                    y.a.Variant.Margin.Bottom
                ],
                dataId: "meet-talent-title"
            }, t195), u.a.createElement("div", {
                className: "_3Sc2ujmg"
            }, S.map(function(e, t) {
                var n = C === t;
                return u.a.createElement("div", {
                    key: e.fullName,
                    onClick: function() {
                        return P(t);
                    },
                    className: s()(f()("avatar", {
                        "is-active": n,
                        "is-inactive": !n
                    }), j, {
                        handleMissingStyleName: "warn"
                    })
                }, u.a.createElement("div", {
                    className: "_7ng8qnUa"
                }, u.a.createElement(g.a, {
                    src: e.imageUrl,
                    alt: e.hireJobTitle,
                    width: "100%"
                })), u.a.createElement("p", {
                    className: "_3ToLUych"
                }, e.fullName));
            })), u.a.createElement("div", {
                className: "Jr_hHigZ"
            }, u.a.createElement("div", {
                className: "_3vJ8jGvh"
            }), u.a.createElement(v.b, {
                className: "_1M0xqkxu",
                url: L
            }, u.a.createElement(g.a, {
                src: T,
                alt: I,
                width: "100%",
                effect: "opacity",
                key: R
            }), u.a.createElement("span", {
                className: "_2qLRa5LB",
                "data-happo-hide": !0
            }), u.a.createElement(E.a, {
                className: "_3La4lHyP"
            })), u.a.createElement("div", {
                className: "hBrS_qrV"
            }, u.a.createElement(v.b, {
                className: "_2A26aCq6",
                url: L
            }, R), u.a.createElement("p", {
                className: "_2LQISjlv"
            }, M), u.a.createElement("p", {
                className: "_3H1wXsRj"
            }, D), A && u.a.createElement(u.a.Fragment, null, u.a.createElement(b.a, {
                query: "(max-width: ".concat(m.b.TABLET, ")")
            }, u.a.createElement(w, {
                key: R,
                tags: A,
                moreHref: L,
                noOfRows: 2
            })), u.a.createElement(b.a, {
                query: "(min-width: ".concat(parseInt(m.b.TABLET, 10) + 1, "px)"),
                defaultMatch: !0
            }, u.a.createElement(w, {
                key: "large-".concat(R),
                tags: A,
                moreHref: L,
                noOfRows: 1
            }))), u.a.createElement("div", {
                className: "_1FEDQdXj"
            }, U && u.a.createElement("div", {
                className: "_3oAy5t_D"
            }, u.a.createElement("p", {
                className: "_2r2kMPP2"
            }, "Previously at"), u.a.createElement(g.a, {
                className: "_1qCTwhyt",
                src: U,
                alt: z
            })), u.a.createElement(v.a, r34()({
                type: v.b.Variant.Theme.CTA,
                url: i.href,
                className: "_7eQ3Urfn " + ("hire_".concat(V.toLowerCase()), {
                    gaEvent: p,
                    gaCategory: _,
                    gaLabel: "hire_".concat(V.toLowerCase())
                }.className || ""),
                style: q,
                dataId: i.dataId
            }, {
                gaEvent: p,
                gaCategory: _,
                gaLabel: "hire_".concat(V.toLowerCase())
            }), "Hire ", V)))), u.a.createElement(h.a, {
                className: "_3zigH5HU",
                buttonVariant: "cta",
                title: a,
                cta: i,
                inlineStyles: o,
                dataId: d
            }));
        };
    },
    71: function(e243, t196, n131) {
        "use strict";
        var a111 = n131(6), r = n131.n(a111), i65 = n131(0), c = n131.n(i65), o = n131(5), s = n131.n(o), l = n131(8), u = (n131(9), n131(218), {
            "./section-title.scss": {
                root: "GL1BsDfm",
                "is-margin-standard": "Her0Bht-",
                "is-margin-bottom": "K0oC-ssM"
            }
        }), d = function(e) {
            var t = e.children, n = e.className, a = e.margin, i = e.dataId;
            return t ? c.a.createElement("h2", {
                "data-id": i,
                dangerouslySetInnerHTML: {
                    __html: t
                },
                className: (n ? n + " " : "") + "GL1BsDfm " + r()(s()(Object(l.a)({
                    margin: a
                })), u, {
                    handleMissingStyleName: "warn"
                })
            }) : null;
        };
        d.Variant = {
            Margin: {
                Standard: "standard",
                Bottom: "bottom"
            }
        }, t196.a = d;
    },
    759: function(e, t, n) {
        e.exports = {
            title: "_3464egf9",
            "articles-container": "_1v0q4yLn",
            "article-wrapper": "_2ktNOg9M",
            "article-link-container": "EYJMZQYK"
        };
    },
    76: function(e244, t197, n132) {
        "use strict";
        n132.d(t197, "a", function() {
            return l35;
        }), n132.d(t197, "b", function() {
            return u18;
        }), n132(19), n132(17), n132(14), n132(25), n132(26), n132(20), n132(15);
        var a112 = n132(4), r35 = n132.n(a112), i66 = n132(7), c = n132.n(i66);
        function o53(e, t198) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t198 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function s(e) {
            var t199, n;
            for(t199 = 1; t199 < arguments.length; t199++)n = null != arguments[t199] ? arguments[t199] : {
            }, t199 % 2 ? o53(Object(n), !0).forEach(function(t) {
                r35()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o53(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        function l35(e) {
            var t = e.collapsed, n = e.expanded, a = e.collapsing, r = e.expanding;
            return {
                appear: t,
                enter: t,
                enterActive: r,
                appearActive: r,
                enterDone: n,
                exitActive: a,
                exitDone: t
            };
        }
        var u18 = function(e, t) {
            var n, a, r = e.sidebar, i = c()(e, [
                "sidebar"
            ]);
            if (!r) return null;
            var o = r.socialShareSection, l = t.socialMedia;
            if (!o || (null === (n = o.links) || void 0 === n ? void 0 : n.length) || !(null == l ? void 0 : null === (a = l.links) || void 0 === a ? void 0 : a.length)) return r;
            var u = l.links;
            return s(s(s({
            }, r), i), {
            }, {
                socialShareSection: s(s({
                }, o), {
                }, {
                    links: u
                })
            });
        };
    },
    760: function(e, t, n) {
        e.exports = {
            "outer-container": "_2Gg2PJaD",
            background: "_32vUdETR",
            "title-container": "_2apRCwP-",
            title: "_2u9IMI_c",
            description: "_1XGKO4db",
            "blog-posts-container": "SlY1SJfZ",
            "blog-post-wrapper": "_2crsyc9a"
        };
    },
    761: function(e, t, n) {
        e.exports = {
            "card-container": "Jr_hHigZ",
            "card-background": "_3vJ8jGvh",
            "tags-container": "_3JQi8uDU",
            "skill-tag": "_27d9RBhI",
            container: "_3EDMpBjA",
            title: "_2OI3ylyG",
            "avatar-container": "_3Sc2ujmg",
            avatar: "_3siSP-LC",
            "is-active": "_3rGuf2PF",
            "avatar-name": "_3ToLUych",
            "avatar-image": "_7ng8qnUa",
            "is-inactive": "_3Ex82UXI",
            "card-picture": "_1M0xqkxu",
            "card-picture-logo": "_2qLRa5LB",
            "card-info": "hBrS_qrV",
            "card-name": "_2A26aCq6",
            "card-role": "_2LQISjlv",
            "card-description": "_3H1wXsRj",
            "card-footer": "_1FEDQdXj",
            "card-company": "_3oAy5t_D",
            "card-company-prefix": "_2r2kMPP2",
            "card-company-logo": "_1qCTwhyt",
            "card-cta": "_7eQ3Urfn",
            "signup-container": "_3Yv-GRbF",
            "signup-text": "_1I9W3EKS",
            "signup-cta": "_2dCHkw-e",
            "hire-cta": "_3zigH5HU",
            "card-picture-overlay": "_3La4lHyP"
        };
    },
    77: function(e245, t200, n133) {
        "use strict";
        n133(19), n133(17), n133(14), n133(25), n133(26), n133(20), n133(27), n133(33), n133(15);
        var a113 = n133(18), r = n133.n(a113), i67 = n133(4), c = n133.n(i67), o = (n133(67), n133(35)), s = n133.n(o);
        function l(e, t201) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t201 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function u(e) {
            var t202, n;
            for(t202 = 1; t202 < arguments.length; t202++)n = null != arguments[t202] ? arguments[t202] : {
            }, t202 % 2 ? l(Object(n), !0).forEach(function(t) {
                c()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var d = function() {
            var e246 = s()(r.a.mark(function e247() {
                var t, a, i = arguments;
                return r.a.wrap(function(e) {
                    for(;;)switch(e.prev = e.next){
                        case 0:
                            if (t = i.length > 0 && void 0 !== i[0] ? i[0] : window, a = i.length > 1 && void 0 !== i[1] ? i[1] : {
                            }, "scrollBehavior" in document.documentElement.style) {
                                e.next = 8;
                                break;
                            }
                            return e.next = 6, n133.e(207).then(n133.t.bind(null, 242, 7));
                        case 6:
                            e.sent.polyfill();
                        case 8:
                            t.scrollTo(u({
                                behavior: "smooth"
                            }, a));
                        case 9:
                        case "end":
                            return e.stop();
                    }
                }, e247);
            }));
            return function() {
                return e246.apply(this, arguments);
            };
        }();
        t200.a = d;
    },
    778: function(e, t, n) {
        e.exports = {
            container: "_1S0gsIXK",
            icon: "_2OhygCGb",
            "is-error": "wy7NZIb1"
        };
    },
    779: function(e, t, n) {
        e.exports = {
            "link-list-section-title": "_1dhg0W9C",
            "link-list-item": "I0iL1nfG",
            container: "_1-a_9qL8",
            "info-message": "_1Zmsin8p",
            "is-info": "zOls6cTR",
            "is-compact": "_3BTDlKNI",
            "link-list-section": "_6CRLOWhf",
            "link-list-group-list": "MgEtwLcx",
            "is-horizontal": "_14GfLqH1"
        };
    },
    78: function(e, t, n) {
        e.exports = {
            container: "VRzpBOaS",
            cell: "_3jgwFSUz",
            "is-gutter-mobile-1": "a5wuXPKO",
            "is-gutter-mobile-2": "xK1Y6wFp",
            "is-gutter-mobile-3": "h7NHpGkN",
            "is-gutter-mobile-4": "_2lPvBDZI",
            "is-mobile-1": "_1GwNtStZ",
            "is-mobile-2": "_2Mx0cghk",
            "is-mobile-3": "_2NAIDFKi",
            "is-mobile-4": "_2UDh_G12",
            "is-mobile-5": "_3v8dne6s",
            "is-mobile-6": "_2N8pXk9N",
            "is-mobile-7": "jgRVL1If",
            "is-mobile-8": "_1mhTHHWq",
            "is-mobile-9": "_3KmeAScq",
            "is-mobile-10": "_3Jnmt4_u",
            "is-mobile-11": "_3EB6kCHm",
            "is-mobile-12": "RqckegCL",
            "is-gutter-tablet-1": "_1CZDjbCH",
            "is-gutter-tablet-2": "SdDoLGVe",
            "is-gutter-tablet-3": "nSXNjloy",
            "is-gutter-tablet-4": "_2d4v8X-a",
            "is-tablet-1": "_1KQ1Gi0G",
            "is-tablet-2": "_37O2S15T",
            "is-tablet-3": "_1HQVvDUb",
            "is-tablet-4": "_2lgV_Xr9",
            "is-tablet-5": "_1rLP5r_m",
            "is-tablet-6": "_26ebzZtt",
            "is-tablet-7": "_2u3R8p7l",
            "is-tablet-8": "_25gHwGaQ",
            "is-tablet-9": "_2iRj5_FL",
            "is-tablet-10": "_2MdNxXb-",
            "is-tablet-11": "_2xplsVD8",
            "is-tablet-12": "_1s3M2fiC",
            "is-gutter-desktop-1": "_1tysoH_D",
            "is-gutter-desktop-2": "_2Gm6BBoN",
            "is-gutter-desktop-3": "_2hTqIJvN",
            "is-gutter-desktop-4": "_30YsJBkA",
            "is-desktop-1": "_37ljHUaw",
            "is-desktop-2": "_2lRwSs8g",
            "is-desktop-3": "_1ESny7XR",
            "is-desktop-4": "_1ArckmJZ",
            "is-desktop-5": "_30GVQs4v",
            "is-desktop-6": "_1mgQSQLr",
            "is-desktop-7": "_2tDzT42o",
            "is-desktop-8": "_9Ikuko4z",
            "is-desktop-9": "_2fKcTUpf",
            "is-desktop-10": "Hzu-2nHX",
            "is-desktop-11": "_292QmiDj",
            "is-desktop-12": "_1zJaTryD",
            "is-gutter-large-1": "_1Dczv3HK",
            "is-gutter-large-2": "_1Q_5EQUW",
            "is-gutter-large-3": "_23TbfZxP",
            "is-gutter-large-4": "bMWr3Lne",
            "is-large-1": "jds3D0B5",
            "is-large-2": "_1e7s_IuL",
            "is-large-3": "_1q-zcMCw",
            "is-large-4": "_3yg5FqML",
            "is-large-5": "_1Hl0Oco6",
            "is-large-6": "NpIB0GaX",
            "is-large-7": "j7_AHzPn",
            "is-large-8": "_1ZZGIcz-",
            "is-large-9": "s20_q1LG",
            "is-large-10": "_3uX6olga",
            "is-large-11": "_2muXPbLl",
            "is-large-12": "_3nmeTH2Y"
        };
    },
    79: function(e248, t203, n134) {
        "use strict";
        n134.d(t203, "a", function() {
            return m19;
        }), n134.d(t203, "b", function() {
            return b17;
        }), n134(23), n134(17), n134(14), n134(56), n134(74), n134(24), n134(244), n134(20), n134(15);
        var a114 = n134(1), r36 = n134.n(a114), i68 = n134(109), c = n134.n(i68), o54 = n134(199), s = n134.n(o54), l36 = n134(40), u = n134.n(l36), d = n134(0), f18 = n134(12), m19 = function(e, t) {
            var n = [];
            if (e) {
                var a = "(min-width: ".concat(e, ")");
                if (!t) return a;
                n.push(a);
            }
            if (t) {
                var r = "(max-width: calc(".concat(t, " - 1px))");
                if (!e) return r;
                n.push(r);
            }
            if (e && t) return n.join(" and ");
        }, p = {
            forMobileOnly: m19(null, f18.b.TABLET),
            forTablet: m19(f18.b.TABLET),
            forDesktop: m19(f18.b.DESKTOP),
            forDesktopLarge: m19(f18.b.DESKTOP_LARGE),
            forTabletOnly: m19(f18.b.TABLET, f18.b.DESKTOP),
            forDesktopOnly: m19(f18.b.DESKTOP, f18.b.DESKTOP_LARGE)
        };
        function b17(e249, t204) {
            var n135 = function(e250) {
                return c()(s()(e250, function(e) {
                    return "default" !== e;
                }), function(e, t) {
                    return p[t] || t;
                });
            }(e249), a115 = e249.hasOwnProperty("default") ? e249.default : t204, i = Object.keys(n135), o = Object(d.useState)(a115), l = r36()(o, 2), f = l[0], m = l[1], b = Object(d.useRef)(!0), g = Object(d.useRef)(Object.fromEntries(i.map(function(e) {
                return [
                    e,
                    !1
                ];
            }))), v = Object(d.useCallback)(u()(m, 50), []), h = function(e) {
                g.current[e.id] = e.mql.matches;
                var t = [
                    a115
                ].concat(i.filter(function(e) {
                    return g.current[e];
                }).map(function(e) {
                    return n135[e];
                })), r = t[t.length - 1];
                r !== f && v(r);
            };
            return Object(d.useEffect)(function() {
                var e251 = [];
                return i.forEach(function(t) {
                    var n = {
                        id: t,
                        mql: window.matchMedia(t)
                    }, a = function() {
                        return h(n);
                    };
                    n.mql.addListener(a), b.current && h(n), e251.push(function() {
                        return n.mql.removeListener(a);
                    });
                }), b.current = !1, function() {
                    return e251.forEach(function(e) {
                        return e();
                    });
                };
            }), f;
        }
    },
    8: function(e252, t205, n136) {
        "use strict";
        n136.d(t205, "b", function() {
            return g;
        }), n136.d(t205, "c", function() {
            return v;
        }), n136(19), n136(23), n136(17), n136(194), n136(14), n136(110), n136(195), n136(188), n136(25), n136(26), n136(20), n136(72), n136(36), n136(70), n136(15);
        var a116 = n136(4), r37 = n136.n(a116), i69 = n136(1), c = n136.n(i69), o = n136(54), s = n136.n(o), l = n136(177), u = n136.n(l), d = n136(5), f = n136.n(d);
        function m(e, t206) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t206 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function p(e) {
            var t207, n;
            for(t207 = 1; t207 < arguments.length; t207++)n = null != arguments[t207] ? arguments[t207] : {
            }, t207 % 2 ? m(Object(n), !0).forEach(function(t) {
                r37()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var b = function(e, t) {
            var n = "is";
            return e && (n += "-".concat(Array.isArray(e) ? e[t] : e)), n;
        }, g = function(e253) {
            return Object.entries(e253).reduce(function(e, t) {
                var n = c()(t, 2), a = n[0], i = n[1];
                return p(p({
                }, e), {
                }, r37()({
                }, "is-".concat(s()(a.replace(/^is/, ""))), !!i));
            }, {
            });
        }, v = function(e) {
            return f()(e) || void 0;
        };
        t205.a = function(e254) {
            var t208 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!Array.isArray(e254)) {
                if (u()(e254)) {
                    var a = Object.keys(e254), r = Object.values(e254);
                    t208 = r.reduce(function(e, t, n) {
                        return (Array.isArray(t) ? t : [
                            t
                        ]).forEach(function() {
                            e.push(a[n]);
                        }), e;
                    }, []), e254 = r.flat();
                } else e254 = [
                    e254
                ];
            }
            return e254.reduce(function(e, a, r) {
                return (n || a) && (e["".concat(b(t208, r), "-").concat(a)] = !!a), e;
            }, {
            });
        };
    },
    80: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return c;
        });
        var a = n(0), r = Object(a.createContext)({
        }), i = function() {
            return Object(a.useContext)(r);
        }, c = "modal-host";
    },
    81: function(e255, t209, n137) {
        "use strict";
        function a(e256, t) {
            new window.IntersectionObserver(function(e, n) {
                e[0].isIntersecting && (n.disconnect(), t());
            }, {
                rootMargin: "50px"
            }).observe(e256);
        }
        function r() {
            return "function" == typeof window.IntersectionObserver;
        }
        function i(e) {
            if ("function" == typeof window.requestIdleCallback) return window.requestIdleCallback(e, {
                timeout: 250
            });
            e();
        }
        n137.d(t209, "b", function() {
            return a;
        }), n137.d(t209, "c", function() {
            return r;
        }), n137.d(t209, "a", function() {
            return i;
        }), n137(223);
    },
    82: function(e257, t210, n) {
        "use strict";
        n(74), n(51), n(36), n(103), t210.a = function(e) {
            if ("string" != typeof e) return "";
            var t = e.split("/").slice(3);
            return "/".concat(t.join("/"));
        };
    },
    83: function(e258, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i;
        });
        var a, r = n(59), i = function(e) {
            return a || (a = new r.a()).fetch(e, {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            }), a;
        };
    },
    84: function(e259, t211, n138) {
        "use strict";
        n138(19), n138(23), n138(17), n138(14), n138(56), n138(25), n138(26), n138(20), n138(27), n138(33), n138(36), n138(64), n138(103), n138(150), n138(15), n138(68), n138(75);
        var a117 = n138(4), r = n138.n(a117), i = n138(21), c = n138(82), o = n138(90);
        function s(e, t212) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t212 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function l(e) {
            var t213, n;
            for(t213 = 1; t213 < arguments.length; t213++)n = null != arguments[t213] ? arguments[t213] : {
            }, t213 % 2 ? s(Object(n), !0).forEach(function(t) {
                r()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var u = {
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }, d = {
        }, f = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            }, n = new URLSearchParams(t);
            return "".concat(e, "?").concat(n);
        };
        function m(e, t) {
            var n = t;
            return n.startsWith("http") && (n = Object(c.a)(t)), n = n.split("#")[0], l(l({
            }, e), {
            }, r()({
            }, "share_path", n));
        }
        function p(e, t) {
            return l(l({
            }, e), {
            }, r()({
            }, "fullstory_settings_path", t));
        }
        t211.a = function() {
            var e260 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = Object(o.b)(o.a.Info, i.pageInfoUri), n = p({
            }, window.location.pathname);
            n = m(n, e260.shareUrl || window.location.pathname);
            var a = f(t, n);
            return d[a] || (d[a] = window.fetch(a, u).then(function(e) {
                if (!e.ok) throw new Error("Failed to fetch page info");
                return e.json();
            })), d[a];
        };
    },
    85: function(e261, t214, n139) {
        "use strict";
        n139(27), n139(33), n139(158);
        var a = n139(83), r = n139(13);
        t214.a = function(e262, t215) {
            (function(e263) {
                return e263 ? new Promise(function(t) {
                    Object(a.a)(e263).subscribe(function(e, n) {
                        Object(r.c)(n) && t((null == e ? void 0 : e.user) || null);
                    });
                }) : Promise.resolve(null);
            })(e262).then(t215);
        };
    },
    851: function(e, t, n) {
        e.exports = {
            container: "UjyfWkT0",
            "title-container": "_1ERCAXNg",
            title: "_3eaUfUxR",
            description: "_2Vt3M80X",
            "links-container": "_22S28k_M"
        };
    },
    86: function(e264, t216, n140) {
        "use strict";
        var a118, r38 = n140(1), i70 = n140.n(r38), c26 = n140(0), o = n140.n(c26), s23 = n140(57), l37 = n140(11), u = n140(10), d = n140(53), f19 = (n140(9), n140(4)), m20 = n140.n(f19), p20 = n140(54), b18 = n140.n(p20), g9 = n140(38), v16 = n140.n(g9), h13 = n140(6), y11 = n140.n(h13), E8 = n140(5), _9 = n140.n(E8), O7 = n140(8), j = n140(48), w = n140(29), S = n140(34), k = (n140(94), n140(74), n140(51), function(e) {
            if ("string" != typeof e) return null;
            var t = e.indexOf(">");
            return -1 === t ? null : [
                e.slice(0, t),
                ' aria-hidden="true" tabindex="-1"',
                e.slice(t), 
            ].join("");
        }), N = (n140(147), {
            "./cookie-banner.scss": {
                root: "_7QdK4zyR",
                "is-gdpr": "_2_Bs6D8F",
                "is-visible": "_1X5ZYp4i",
                "is-static": "_3jl4op_D",
                text: "_3Wv9utNN",
                "is-privacy-shield": "_1MIke5bW",
                "button-wrapper": "_1WV0LMf5",
                button: "FjKAy-Wz"
            }
        }), C = (a118 = {
        }, m20()(a118, S.b.GDPR, w.a.Variant.Theme.PrimaryGreen), m20()(a118, S.b.PrivacyShield, w.a.Variant.Theme.SecondaryWhite), a118), P = function(e) {
            var t = e.messageText, n = e.buttonText, a = e.policyType, r = e.isVisible, i = e.isStatic, c = e.onAccept, s = void 0 === c ? v16.a : c, l = k(t);
            return o.a.createElement("div", {
                "data-happo-hide": !0,
                className: y11()(_9()("root", Object(O7.b)({
                    isVisible: r,
                    isStatic: i
                }), Object(O7.a)(b18()(a))), N, {
                    handleMissingStyleName: "warn"
                })
            }, o.a.createElement(j.a, {
                as: "div",
                className: "_3Wv9utNN",
                content: r ? t : l,
                isUnstyled: !0
            }), o.a.createElement("div", {
                className: "_1WV0LMf5"
            }, o.a.createElement(w.a, {
                type: w.a.Type.Button,
                onClick: s,
                theme: C[a],
                className: "FjKAy-Wz"
            }, n)));
        };
        t216.a = {
            Container: function(e) {
                var t = e.pageInfo, n = e.onAccept, a = t.cookiePolicyType, r = t.cookiePolicyMessageText, f = t.cookiePolicyAllowText, m = Object(c26.useRef)(Object(d.b)(a)).current, p = Object(c26.useState)(m), b = i70()(p, 2), g = b[0], v = b[1], h = Object(u.o)(), y = i70()(h, 1)[0], E = Object(c26.useCallback)(function() {
                    v(!1), Object(d.c)(a, !0), n();
                }, [
                    a,
                    n
                ]), _ = document.getElementById(S.a), O = o.a.createElement(P, {
                    isVisible: y && g,
                    onAccept: E,
                    messageText: r,
                    buttonText: f,
                    policyType: a
                });
                if (_ && Object(l37.a)()) return Object(s23.createPortal)(O, _);
            },
            Host: function() {
                return o.a.createElement("div", {
                    id: S.a
                });
            }
        };
    },
    87: function(e265, t217, n141) {
        "use strict";
        n141(94), t217.a = function() {
            var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/");
            return t > 0 || n > 0;
        };
    },
    878: function(e266, t218, n142) {
        "use strict";
        n142.d(t218, "b", function() {
            return O;
        }), n142(14), n142(56), n142(74), n142(188), n142(27), n142(64), n142(15), n142(68), n142(75);
        var a119 = n142(2), r39 = n142.n(a119), i71 = n142(1), c = n142.n(i71), o55 = n142(187), s = n142.n(o55), l38 = n142(6), u19 = n142.n(l38), d = n142(0), f20 = n142.n(d), m21 = n142(5), p = n142.n(m21), b = n142(47), g = n142(8), v = n142(22), h = n142(396), y = n142(16), E = n142(48), _ = (n142(529), n142(875), {
            "./search.scss": {
                container: "_12M9rQSD",
                content: "_2JvCq6MR",
                title: "_23-bll2M",
                "search-widget": "_93GgF1wO",
                "is-sticky": "_3TqFNVVh"
            }
        });
        function O(e) {
            return {
                handleSearch: Object(d.useCallback)(function(t) {
                    if (t) {
                        var n = new URLSearchParams({
                            q: t
                        });
                        window.location = [
                            e,
                            n
                        ].join("?");
                    }
                }, [
                    e
                ])
            };
        }
        t218.a = function(e267) {
            var t219 = e267.searchWidgetSection, n143 = e267.title, a120 = e267.resultsPageUrl, i72 = function() {
                var e268 = Object(d.useRef)(), t220 = Object(d.useState)(), n144 = c()(t220, 2), a121 = n144[0], r = n144[1], i = Object(d.useState)(!1), o = c()(i, 2), l = o[0], u = o[1], f = Object(d.useCallback)(function() {
                    if (!l) {
                        var t = e268.current.getBoundingClientRect().top;
                        r(window.pageYOffset + t);
                    }
                }, [
                    l
                ]), m = Object(d.useCallback)(s()(function() {
                    var e = window.pageYOffset + 64 > a121;
                    u(e), e || f();
                }, 150), [
                    a121
                ]);
                return Object(d.useEffect)(function() {
                    f(), m();
                    var e269 = {
                        scroll: m,
                        resize: f
                    };
                    return Object.entries(e269).forEach(function(e) {
                        var t = c()(e, 2), n = t[0], a = t[1];
                        window.addEventListener(n, a);
                    }), function() {
                        return Object.entries(e269).forEach(function(e) {
                            var t = c()(e, 2), n = t[0], a = t[1];
                            window.removeEventListener(n, a);
                        });
                    };
                }, [
                    m,
                    f
                ]), {
                    isSticky: l && !v.a,
                    ref: e268
                };
            }(), o56 = i72.isSticky, l39 = i72.ref, m22 = O(a120).handleSearch;
            return f20.a.createElement(y.a, {
                space: y.a.Variant.Space.None,
                className: u19()(p()("container", Object(g.b)({
                    isSticky: o56
                })), _, {
                    handleMissingStyleName: "warn"
                })
            }, f20.a.createElement(y.a, {
                width: y.a.Variant.Width.Fixed
            }, f20.a.createElement("div", {
                className: "_2JvCq6MR"
            }, !o56 && f20.a.createElement(E.a, {
                as: "h2",
                content: Object(b.a)(n143),
                className: "_23-bll2M",
                isUnstyled: !0
            }), f20.a.createElement(h.b, r39()({
                className: "_93GgF1wO " + (t219 && t219.className || "") + " " + ({
                    ref: l39
                }.className || "") + (o56 && (h.b.Variant.Size.Small, 1) ? " " + ((o56 && {
                    size: h.b.Variant.Size.Small
                }).className || "") : ""),
                onSearch: m22,
                gaCategory: o56 ? h.a.TopSearchSticky : h.a.TopSearchHero
            }, t219, {
                ref: l39
            }, o56 && {
                size: h.b.Variant.Size.Small
            })))));
        };
    },
    88: function(e270, t221, n145) {
        "use strict";
        n145.d(t221, "a", function() {
            return o;
        });
        var a122 = n145(1), r = n145.n(a122), i = n145(0), c = n145(87);
        function o() {
            var e = Object(i.useState)(!1), t = r()(e, 2), n = t[0], a = t[1];
            return Object(i.useEffect)(function() {
                a(Object(c.a)());
            }, []), n;
        }
    },
    89: function(e271, t222, n146) {
        "use strict";
        n146.d(t222, "a", function() {
            return _;
        }), n146.d(t222, "b", function() {
            return O;
        }), n146(23), n146(185);
        var a123 = n146(184), r40 = n146.n(a123), i73 = n146(11), c27 = n146(46), o57 = (n146(19), n146(17), n146(14), n146(25), n146(26), n146(20), n146(15), n146(4)), s = n146.n(o57), l40 = n146(7), u = n146.n(l40), d = n146(0), f = n146.n(d), m = n146(57), p = n146.n(m);
        n146(36), n146(70);
        var b = n146(81);
        function g(e, t223) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t223 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        var v = function(e) {
            return 'div[data-cid="'.concat(e, '"]');
        };
        function h(e272) {
            var t224 = e272.atIdle, n = e272.markers, a = e272.Component, r41 = function() {
                var e273 = n[0].dataset.hid, t = document.querySelectorAll(v(e273));
                n.forEach(function(e, n) {
                    var r, i = (r = e.text, JSON.parse(r.replace(/<\\\/script/gim, "</script")));
                    p.a.hydrate(f.a.createElement(a, i), t[n]);
                });
            };
            if (t224) return Object(b.a)(r41);
            r41();
        }
        var y = f.a.createContext();
        var E = {
            defer: !0,
            atIdle: !1
        };
        function _(e274) {
            var t225 = 0;
            return function(n147, a124) {
                return (function(e275, t226, n148, a125) {
                    var r42 = t226.defer, o = t226.atIdle, l = "".concat(n148, "-").concat(a125);
                    return Object(i73.a)() && !Object(c27.a)() ? (function(e276, t227) {
                        var n149 = e276.defer, a = u()(e276, [
                            "defer"
                        ]), r = document.querySelectorAll('script[data-hid="'.concat(t227, '"]')), i = function(e) {
                            var t228, n;
                            for(t228 = 1; t228 < arguments.length; t228++)n = null != arguments[t228] ? arguments[t228] : {
                            }, t228 % 2 ? g(Object(n), !0).forEach(function(t) {
                                s()(e, t, n[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                            return e;
                        }({
                            markers: r
                        }, a);
                        if (r.length) {
                            if (n149 && Object(b.c)()) {
                                var c = document.querySelector(v(t227));
                                return Object(b.b)(c, function() {
                                    return h(i);
                                });
                            }
                            return h(i);
                        }
                    })({
                        Component: e275,
                        defer: r42,
                        atIdle: o
                    }, l) : (function(e, t) {
                        return function(n) {
                            var a, r = Object(d.useContext)(y);
                            return r && r(t, (a = n, JSON.stringify(a).replace(/<\/script/gim, "<\\/script"))), f.a.createElement("div", {
                                "data-cid": t
                            }, f.a.createElement(e, n));
                        };
                    })(e275, l);
                })(n147, a124 = Object.assign({
                }, E, a124), e274, t225++);
            };
        }
        var O = function(e277, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            }, a = _(e277);
            return r40()(t, function(e, t) {
                return a(e, Object.assign(e.hydrationOptions || {
                }, n[t]));
            });
        };
    },
    9: function(e278, t229, n150) {
        "use strict";
        n150.d(t229, "f", function() {
            return f;
        }), n150.d(t229, "c", function() {
            return m;
        }), n150.d(t229, "d", function() {
            return p;
        }), n150.d(t229, "g", function() {
            return b;
        }), n150.d(t229, "h", function() {
            return g;
        }), n150.d(t229, "i", function() {
            return v;
        }), n150.d(t229, "e", function() {
            return h;
        }), n150.d(t229, "k", function() {
            return E;
        }), n150.d(t229, "a", function() {
            return _;
        }), n150.d(t229, "j", function() {
            return O;
        }), n150.d(t229, "b", function() {
            return j;
        }), n150(19), n150(17), n150(14), n150(25), n150(26), n150(20), n150(72), n150(15);
        var a126 = n150(4), r43 = n150.n(a126), i = n150(3), c = n150.n(i), o = n150(12), s = n150(13), l = n150(32);
        function u(e, t230) {
            var n, a = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t230 && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), a.push.apply(a, n)), a;
        }
        function d(e) {
            var t231, n;
            for(t231 = 1; t231 < arguments.length; t231++)n = null != arguments[t231] ? arguments[t231] : {
            }, t231 % 2 ? u(Object(n), !0).forEach(function(t) {
                r43()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
            return e;
        }
        var f = {
            href: c.a.string.isRequired,
            label: c.a.string.isRequired
        }, m = {
            gaCategory: c.a.string,
            gaEvent: c.a.string,
            gaLabel: c.a.string
        }, p = c.a.shape(m), b = (c.a.shape(Object(l.c)(c.a.string, c.a.string, c.a.string)), c.a.shape(f)), g = d(d({
        }, f), m), v = c.a.shape(g), h = c.a.arrayOf(b), y = c.a.arrayOf(v), E = c.a.oneOf(o.e), _ = (c.a.shape({
            title: c.a.string.isRequired,
            name: E.isRequired,
            publicUrl: c.a.string.isRequired
        }), function(e, t) {
            var n = c.a.arrayOf, a = c.a.shape, r = c.a.exact;
            return n(t ? r(e) : a(e));
        }), O = function(e, t) {
            var n = c.a.oneOf(Object.values(e));
            return t ? c.a.oneOfType([
                n,
                c.a.arrayOf(n)
            ]) : n;
        }, j = _({
            name: c.a.string.isRequired,
            variant: c.a.string.isRequired
        });
        c.a.string.isRequired, c.a.string, y.isRequired, O(s.a);
    },
    90: function(e279, t232, n151) {
        "use strict";
        n151.d(t232, "a", function() {
            return s;
        }), n151.d(t232, "c", function() {
            return l;
        }), n151(44);
        var a, r = n151(4), i = n151.n(r), c = n151(41), o = n151(46), s = {
            Sessions: "cms/sessions",
            GeoTarget: "geo_target",
            BlogSubscription: "blog/subscription",
            Info: "_info",
            CoreTeamJobApplication: "careers/front-end-developer",
            GiorgioLeads: "giorgio/leads",
            InterviewQuestion: "interview-question",
            TalentPrioritizer: "talent-prioritizer",
            Search: "search/full",
            SearchAutocomplete: "search/autocomplete",
            SidebarSkills: "sidebar/skills"
        }, l = (a = {
        }, i()(a, s.Sessions, "logged-out"), i()(a, s.BlogSubscription, "success"), i()(a, s.CoreTeamJobApplication, "success"), i()(a, s.GiorgioLeads, "success"), i()(a, s.InterviewQuestion, "success"), i()(a, s.TalentPrioritizer, "high"), i()(a, s.Search, function(e) {
            var t = e.query.type;
            return [
                "service_centric",
                "skill"
            ].includes(t) ? t : "success";
        }), i()(a, s.SearchAutocomplete, "success"), i()(a, s.SidebarSkills, "success"), function(e, t) {
            if (!c.b && t) return t;
            var n = "/api/".concat(e);
            return Object(o.a)() ? n : "http://localhost:3333".concat(n);
        });
        t232.b = l;
    },
    91: function(e, t, n) {
        "use strict";
        var a = n(152), r = n.n(a);
        n.d(t, "b", function() {
            return r.a;
        });
        var i = n(153), c = n.n(i);
        n.d(t, "d", function() {
            return c.a;
        });
        var o = n(154), s = n.n(o);
        n.d(t, "c", function() {
            return s.a;
        });
        var l = n(155), u = n.n(l);
        n.d(t, "a", function() {
            return u.a;
        });
    },
    93: function(e, t, n) {
        "use strict";
        var a = n(165), r = n.n(a);
        n.d(t, "f", function() {
            return r.a;
        });
        var i = n(166), c = n.n(i);
        n.d(t, "d", function() {
            return c.a;
        });
        var o = n(167), s = n.n(o);
        n.d(t, "g", function() {
            return s.a;
        });
        var l = n(168), u = n.n(l);
        n.d(t, "e", function() {
            return u.a;
        });
        var d = n(169), f = n.n(d);
        n.d(t, "b", function() {
            return f.a;
        }), n(170);
        var m = n(171), p = n.n(m);
        n.d(t, "a", function() {
            return p.a;
        }), n(123);
        var b = n(172), g = n.n(b);
        n.d(t, "c", function() {
            return g.a;
        });
    },
    96: function(e, t, n) {
        "use strict";
        t.a = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    },
    97: function(e280, t233, n152) {
        "use strict";
        n152(27), n152(33);
        var a127 = {
        };
        t233.a = function(e281) {
            return a127[e281] ? console.warn("Script is already in loading queue: " + e281) : a127[e281] = new Promise(function(t, n) {
                var a = document.createElement("script");
                a.type = "text/javascript", a.src = e281, a.async = !0, a.onload = function() {
                    t();
                }, a.onerror = function(e) {
                    n(e);
                }, document.body.appendChild(a);
            }), a127[e281];
        };
    }
});

//# sourceMappingURL=index.0a2342c0.js.map
