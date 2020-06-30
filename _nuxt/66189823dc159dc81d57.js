(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        0: function (t, e, n) {
            "use strict";
            n.d(e, "k", (function () {
                return x
            })), n.d(e, "m", (function () {
                return y
            })), n.d(e, "l", (function () {
                return _
            })), n.d(e, "e", (function () {
                return w
            })), n.d(e, "b", (function () {
                return k
            })), n.d(e, "r", (function () {
                return C
            })), n.d(e, "g", (function () {
                return O
            })), n.d(e, "h", (function () {
                return j
            })), n.d(e, "d", (function () {
                return $
            })), n.d(e, "q", (function () {
                return S
            })), n.d(e, "j", (function () {
                return I
            })), n.d(e, "s", (function () {
                return E
            })), n.d(e, "n", (function () {
                return z
            })), n.d(e, "p", (function () {
                return N
            })), n.d(e, "f", (function () {
                return A
            })), n.d(e, "c", (function () {
                return M
            })), n.d(e, "i", (function () {
                return R
            })), n.d(e, "o", (function () {
                return L
            })), n.d(e, "a", (function () {
                return J
            }));
            n(117), n(64), n(39), n(65), n(95), n(125);
            var o = n(76),
                r = (n(150), n(271), n(272), n(36)),
                c = (n(49), n(50), n(96), n(97), n(81), n(47), n(9)),
                l = (n(63), n(38), n(18), n(83), n(28), n(59)),
                d = n(1);

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(
                            object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function h(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ?
                        arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((
                            function (e) {
                                Object(l.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(
                            source)) : f(Object(source)).forEach(
                            (function (e) {
                                Object.defineProperty(t, e,
                                    Object.getOwnPropertyDescriptor(
                                        source, e))
                            }))
                }
                return t
            }

            function m(t) {
                if ("undefined" == typeof Symbol || null == t[
                    Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return
                            v(t, e);
                        var n = Object.prototype.toString
                            .call(t).slice(8, -1);
                        "Object" === n && t.constructor &&
                            (n = t.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(n);
                        if ("Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                            .test(n)) return v(t, e)
                    }(t))) {
                        var i = 0,
                            e = function () {};
                        return {
                            s: e,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            }, e: function (t) {
                                throw t
                            }, f: e
                        }
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    )
                }
                var n, o, r = !0,
                    c = !1;
                return {
                    s: function () {
                        n = t[Symbol.iterator]()
                    }, n: function () {
                        var t = n.next();
                        return r = t.done, t
                    }, e: function (t) {
                        c = !0, o = t
                    }, f: function () {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[
                    i] = t[i];
                return n
            }

            function x(t) {
                d.a.config.errorHandler && d.a.config.errorHandler(
                    t)
            }

            function y(t) {
                return t.then((function (t) {
                    return t.default || t
                }))
            }

            function _(t) {
                return t.$options && "function" == typeof t.$options
                    .fetch && !t.$options.fetch.length
            }

            function w(t) {
                var e, n = arguments.length > 1 && void 0 !==
                    arguments[1] ? arguments[1] : [],
                    o = t.$children || [],
                    r = m(o);
                try {
                    for (r.s(); !(e = r.n()).done;) {
                        var c = e.value;
                        c.$fetch ? n.push(c) : c.$children && w(
                            c, n)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }

            function k(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options
                        .data || function () {
                            return {}
                        };
                    t.options._originDataFn = n, t.options.data =
                        function () {
                            var data = n.call(this, this);
                            return this.$ssrContext && (e =
                                this.$ssrContext.asyncData[
                                    t.cid]), h({}, data, {},
                                e)
                        }, t.options.__hasNuxtData = !0, t._Ctor &&
                        t._Ctor.options && (t._Ctor.options.data =
                            t.options.data)
                }
            }

            function C(t) {
                return t.options && t._Ctor === t || (t.options ?
                    (t._Ctor = t, t.extendOptions = t.options) :
                    (t = d.a.extend(t))._Ctor = t, !t.options
                    .name && t.options.__file && (t.options
                        .name = t.options.__file)), t
            }

            function O(t) {
                var e = arguments.length > 1 && void 0 !==
                    arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !==
                    arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched
                    .map((function (t, o) {
                        return Object.keys(t[n]).map(
                            (function (r) {
                                return e &&
                                    e.push(
                                        o),
                                    t[n][r]
                            }))
                    })))
            }

            function j(t) {
                var e = arguments.length > 1 && void 0 !==
                    arguments[1] && arguments[1];
                return O(t, e, "instances")
            }

            function $(t, e) {
                return Array.prototype.concat.apply([], t.matched
                    .map((function (t, n) {
                        return Object.keys(t.components)
                            .reduce((function (o, r) {
                                return t.components[
                                        r] ?
                                    o.push(
                                        e(t
                                            .components[
                                                r
                                            ],
                                            t
                                            .instances[
                                                r
                                            ],
                                            t,
                                            r,
                                            n
                                        )) :
                                    delete t
                                    .components[
                                        r],
                                    o
                            }), [])
                    })))
            }

            function S(t, e) {
                return Promise.all($(t, function () {
                    var t = Object(c.a)(
                        regeneratorRuntime.mark(
                            (function t(n, o, r,
                                c) {
                                return
                                    regeneratorRuntime
                                    .wrap((
                                            function (
                                                t
                                            ) {
                                                for (;;)
                                                    switch (
                                                        t
                                                        .prev =
                                                        t
                                                        .next
                                                    ) {
                                                    case 0:
                                                        if (
                                                            "function" !=
                                                            typeof n ||
                                                            n
                                                            .options
                                                        ) {
                                                            t
                                                                .next =
                                                                4;
                                                            break
                                                        }
                                                        return
                                                            t
                                                            .next =
                                                            3,
                                                            n();
                                                    case 3:
                                                        n
                                                            =
                                                            t
                                                            .sent;
                                                    case 4:
                                                        return
                                                            r
                                                            .components[
                                                                c
                                                            ] =
                                                            n =
                                                            C(
                                                                n
                                                            ),
                                                            t
                                                            .abrupt(
                                                                "return",
                                                                "function" ==
                                                                typeof e ?
                                                                e(
                                                                    n,
                                                                    o,
                                                                    r,
                                                                    c
                                                                ) :
                                                                n
                                                            );
                                                    case 6:
                                                    case "end":
                                                        return
                                                            t
                                                            .stop()
                                                    }
                                            }
                                        ),
                                        t)
                            })));
                    return function (e, n, o, r) {
                        return t.apply(this,
                            arguments)
                    }
                }()))
            }

            function I(t) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = Object(c.a)(regeneratorRuntime.mark(
                    (function t(e) {
                        return
                            regeneratorRuntime.wrap(
                                (function (t) {
                                    for (;;)
                                        switch (
                                            t
                                            .prev =
                                            t
                                            .next
                                        ) {
                                        case 0:
                                            if (
                                                e
                                            ) {
                                                t
                                                    .next =
                                                    2;
                                                break
                                            }
                                            return
                                                t
                                                .abrupt(
                                                    "return"
                                                );
                                        case 2:
                                            return
                                                t
                                                .next =
                                                4,
                                                S(
                                                    e
                                                );
                                        case 4:
                                            return
                                                t
                                                .abrupt(
                                                    "return",
                                                    h({},
                                                        e, {
                                                            meta: O(
                                                                    e
                                                                )
                                                                .map(
                                                                    (
                                                                        function (
                                                                            t,
                                                                            n
                                                                        ) {
                                                                            return
                                                                                h({},
                                                                                    t
                                                                                    .options
                                                                                    .meta, {}, (
                                                                                        e
                                                                                        .matched[
                                                                                            n
                                                                                        ] || {}
                                                                                    )
                                                                                    .meta
                                                                                )
                                                                        }
                                                                    )
                                                                )
                                                        }
                                                    )
                                                );
                                        case 5:
                                        case "end":
                                            return
                                                t
                                                .stop()
                                        }
                                }), t)
                    })))).apply(this, arguments)
            }

            function E(t, e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = Object(c.a)(regeneratorRuntime.mark(
                    (function t(e, n) {
                        var c, l, d, f;
                        return
                            regeneratorRuntime.wrap(
                                (function (t) {
                                    for (;;)
                                        switch (
                                            t
                                            .prev =
                                            t
                                            .next
                                        ) {
                                        case 0:
                                            return
                                                e
                                                .context ||
                                                (
                                                    e
                                                    .context = {
                                                        isStatic:
                                                            !
                                                            1,
                                                        isDev:
                                                            !
                                                            1,
                                                        isHMR:
                                                            !
                                                            1,
                                                        app: e,
                                                        store: e
                                                            .store,
                                                        payload: n
                                                            .payload,
                                                        error: n
                                                            .error,
                                                        base: "/",
                                                        env: {
                                                            dev:
                                                                !
                                                                1,
                                                            API_ROOT: "https://turtle.wapi.yuanzidian.com/"
                                                        }
                                                    },
                                                    n
                                                    .req &&
                                                    (
                                                        e
                                                        .context
                                                        .req =
                                                        n
                                                        .req
                                                    ),
                                                    n
                                                    .res &&
                                                    (
                                                        e
                                                        .context
                                                        .res =
                                                        n
                                                        .res
                                                    ),
                                                    n
                                                    .ssrContext &&
                                                    (
                                                        e
                                                        .context
                                                        .ssrContext =
                                                        n
                                                        .ssrContext
                                                    ),
                                                    e
                                                    .context
                                                    .redirect =
                                                    function (
                                                        t,
                                                        path,
                                                        n
                                                    ) {
                                                        if (
                                                            t
                                                        ) {
                                                            e
                                                                .context
                                                                ._redirected = !
                                                                0;
                                                            var
                                                                o =
                                                                Object(
                                                                    r
                                                                    .a
                                                                )
                                                                (
                                                                    path
                                                                );
                                                            if (
                                                                "number" ==
                                                                typeof t ||
                                                                "undefined" !==
                                                                o &&
                                                                "object" !==
                                                                o ||
                                                                (
                                                                    n =
                                                                    path || {},
                                                                    path =
                                                                    t,
                                                                    o =
                                                                    Object(
                                                                        r
                                                                        .a
                                                                    )
                                                                    (
                                                                        path
                                                                    ),
                                                                    t =
                                                                    302
                                                                ),
                                                                "object" ===
                                                                o &&
                                                                (
                                                                    path =
                                                                    e
                                                                    .router
                                                                    .resolve(
                                                                        path
                                                                    )
                                                                    .route
                                                                    .fullPath
                                                                ), !
                                                                /(^[.]{1,2}\/)|(^\/(?!\/))/
                                                                .test(
                                                                    path
                                                                )
                                                            )
                                                                throw path =
                                                                Q(
                                                                    path,
                                                                    n
                                                                ),
                                                                window
                                                                .location
                                                                .replace(
                                                                    path
                                                                ),
                                                                new Error(
                                                                    "ERR_REDIRECT"
                                                                );
                                                            e
                                                                .context
                                                                .next({
                                                                    path: path,
                                                                    query: n,
                                                                    status: t
                                                                })
                                                        }
                                                    },
                                                    e
                                                    .context
                                                    .nuxtState =
                                                    window
                                                    .__NUXT__
                                                ),
                                                t
                                                .next =
                                                3,
                                                Promise
                                                .all(
                                                    [
                                                        I(
                                                            n
                                                            .route
                                                        ),
                                                        I(
                                                            n
                                                            .from
                                                        )
                                                    ]
                                                );
                                        case 3:
                                            c
                                                =
                                                t
                                                .sent,
                                                l =
                                                Object(
                                                    o
                                                    .a
                                                )
                                                (
                                                    c,
                                                    2
                                                ),
                                                d =
                                                l[
                                                    0
                                                ],
                                                f =
                                                l[
                                                    1
                                                ],
                                                n
                                                .route &&
                                                (
                                                    e
                                                    .context
                                                    .route =
                                                    d
                                                ),
                                                n
                                                .from &&
                                                (
                                                    e
                                                    .context
                                                    .from =
                                                    f
                                                ),
                                                e
                                                .context
                                                .next =
                                                n
                                                .next,
                                                e
                                                .context
                                                ._redirected = !
                                                1,
                                                e
                                                .context
                                                ._errored = !
                                                1,
                                                e
                                                .context
                                                .isHMR = !
                                                1,
                                                e
                                                .context
                                                .params =
                                                e
                                                .context
                                                .route
                                                .params || {},
                                                e
                                                .context
                                                .query =
                                                e
                                                .context
                                                .route
                                                .query || {};
                                        case 15:
                                        case "end":
                                            return
                                                t
                                                .stop()
                                        }
                                }), t)
                    })))).apply(this, arguments)
            }

            function z(t, e) {
                return !t.length || e._redirected || e._errored ?
                    Promise.resolve() : N(t[0], e).then((
                        function () {
                            return z(t.slice(1), e)
                        }))
            }

            function N(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((
                        function (n) {
                            t(e, (function (t, data) {
                                t && e.error(
                                        t),
                                    n(data =
                                        data || {}
                                    )
                            }))
                        })) : t(e)) && n instanceof Promise &&
                    "function" == typeof n.then ? n : Promise.resolve(
                        n)
            }

            function A(base, t) {
                var path = decodeURI(window.location.pathname);
                return "hash" === t ? window.location.hash.replace(
                    /^#\//, "") : (base && 0 === path.indexOf(
                        base) && (path = path.slice(base.length)), (
                        path || "/") + window.location.search +
                    window.location.hash)
            }

            function M(t, e) {
                return function (t, e) {
                    for (var n = new Array(t.length), i = 0; i <
                        t.length; i++) "object" === Object(
                        r.a)(t[i]) && (n[i] = new RegExp(
                        "^(?:" + t[i].pattern +
                        ")$", F(e)));
                    return function (e, o) {
                        for (var path = "", data = e || {},
                            r = (o || {}).pretty ?
                            U : encodeURIComponent,
                            c = 0; c < t.length; c++) {
                            var l = t[c];
                            if ("string" != typeof l) {
                                var d = data[l.name ||
                                        "pathMatch"],
                                    f = void 0;
                                if (null == d) {
                                    if (l.optional) {
                                        l.partial && (
                                            path +=
                                            l.prefix
                                        );
                                        continue
                                    }
                                    throw new TypeError
                                        ('Expected "' +
                                            l.name +
                                            '" to be defined'
                                        )
                                }
                                if (Array.isArray(d)) {
                                    if (!l.repeat) throw new TypeError(
                                        'Expected "' +
                                        l.name +
                                        '" to not repeat, but received `' +
                                        JSON.stringify(
                                            d) +
                                        "`");
                                    if (0 === d.length) {
                                        if (l.optional)
                                            continue;
                                        throw new TypeError
                                            (
                                                'Expected "' +
                                                l.name +
                                                '" to not be empty'
                                            )
                                    }
                                    for (var h = 0; h <
                                        d.length; h++) {
                                        if (f = r(d[h]), !
                                            n[c].test(f)
                                        ) throw new TypeError(
                                            'Expected all "' +
                                            l.name +
                                            '" to match "' +
                                            l.pattern +
                                            '", but received `' +
                                            JSON.stringify(
                                                f) +
                                            "`");
                                        path += (0 ===
                                            h ? l.prefix :
                                            l.delimiter
                                        ) + f
                                    }
                                } else {
                                    if (f = l.asterisk ?
                                        U(d, !0) : r(d), !
                                        n[c].test(f))
                                        throw new TypeError(
                                            'Expected "' +
                                            l.name +
                                            '" to match "' +
                                            l.pattern +
                                            '", but received "' +
                                            f + '"');
                                    path += l.prefix +
                                        f
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function (t, e) {
                    var n, o = [],
                        r = 0,
                        c = 0,
                        path = "",
                        l = e && e.delimiter || "/";
                    for (; null != (n = B.exec(t));) {
                        var d = n[0],
                            f = n[1],
                            h = n.index;
                        if (path += t.slice(c, h), c =
                            h + d.length, f) path += f[
                            1];
                        else {
                            var m = t[c],
                                v = n[2],
                                x = n[3],
                                y = n[4],
                                _ = n[5],
                                w = n[6],
                                k = n[7];
                            path && (o.push(path), path =
                                "");
                            var C = null != v && null !=
                                m && m !== v,
                                O = "+" === w || "*" ===
                                w,
                                j = "?" === w || "*" ===
                                w,
                                $ = n[2] || l,
                                pattern = y || _;
                            o.push({
                                name: x || r++,
                                prefix: v || "",
                                delimiter: $,
                                optional: j,
                                repeat: O,
                                partial: C,
                                asterisk: Boolean(
                                    k),
                                pattern: pattern ?
                                    H(pattern) : k ?
                                    ".*" : "[^" +
                                    D($) +
                                    "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && o.push(path);
                    return o
                }(t, e), e)
            }

            function R(t, e) {
                var n = {},
                    o = h({}, t, {}, e);
                for (var r in o) String(t[r]) !== String(e[r]) &&
                    (n[r] = !0);
                return n
            }

            function L(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message ||
                    t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return h({}, t, {
                    message: e,
                    statusCode: t.statusCode || t.status ||
                        t.response && t.response.status ||
                        500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady =
                function (t) {
                    window.onNuxtReadyCbs.push(t)
                };
            var B = new RegExp(["(\\\\.)",
                "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
            ].join("|"), "g");

            function U(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function (t) {
                    return "%" + t.charCodeAt(0).toString(
                        16).toUpperCase()
                }))
            }

            function D(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,
                    "\\$1")
            }

            function H(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function F(t) {
                return t && t.sensitive ? "" : "i"
            }

            function Q(t, e) {
                var n, r = t.indexOf("://"); - 1 !== r ? (n = t
                    .substring(0, r), t = t.substring(r + 3)
                ) : t.startsWith("//") && (t = t.substring(
                    2));
                var c, l = t.split("/"),
                    d = (n ? n + "://" : "//") + l.shift(),
                    path = l.filter(Boolean).join("/");
                if (2 === (l = path.split("#")).length) {
                    var f = l,
                        h = Object(o.a)(f, 2);
                    path = h[0], c = h[1]
                }
                return d += path ? "/" + path : "", e && "{}" !==
                    JSON.stringify(e) && (d += (2 === t.split(
                        "?").length ? "&" : "?") + function (
                        t) {
                        return Object.keys(t).sort().map((
                            function (e) {
                                var n = t[e];
                                return null == n ?
                                    "" : Array.isArray(
                                        n) ? n.slice()
                                    .map((function (
                                        t) {
                                        return
                                            [
                                                e,
                                                "=",
                                                t
                                            ]
                                            .join(
                                                ""
                                            )
                                    })).join("&") :
                                    e + "=" + n
                            })).filter(Boolean).join(
                            "&")
                    }(e)), d += c ? "#" + c : ""
            }

            function J(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[
                    e].includes(n) || t.$options[e].push(n)
            }
        }, 104: function (t, e, n) {
            var content = n(280);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("cd8cf052", content, !0, {
                sourceMap: !1
            })
        }, 105: function (t, e, n) {
            var content = n(282);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("62a0fc8e", content, !0, {
                sourceMap: !1
            })
        }, 106: function (t, e, n) {
            var content = n(297);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("06ded769", content, !0, {
                sourceMap: !1
            })
        }, 107: function (t, e, n) {
            var content = n(299);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("365b8570", content, !0, {
                sourceMap: !1
            })
        }, 108: function (t, e, n) {
            var content = n(302);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("1557cc46", content, !0, {
                sourceMap: !1
            })
        }, 109: function (t, e, n) {
            var content = n(304);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("229da892", content, !0, {
                sourceMap: !1
            })
        }, 110: function (t, e, n) {
            var content = n(306);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("ee463018", content, !0, {
                sourceMap: !1
            })
        }, 111: function (t, e, n) {
            var content = n(308);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("15546805", content, !0, {
                sourceMap: !1
            })
        }, 112: function (t, e, n) {
            var content = n(310);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("d1f340e2", content, !0, {
                sourceMap: !1
            })
        }, 116: function (t, e, n) {
            "use strict";
            n(38), n(64), n(39), n(63), n(65), n(28), n(49), n(50),
                n(18), n(95), n(125);
            var o = n(1);

            function r(t) {
                if ("undefined" == typeof Symbol || null == t[
                    Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return
                            c(t, e);
                        var n = Object.prototype.toString
                            .call(t).slice(8, -1);
                        "Object" === n && t.constructor &&
                            (n = t.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(n);
                        if ("Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                            .test(n)) return c(t, e)
                    }(t))) {
                        var i = 0,
                            e = function () {};
                        return {
                            s: e,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            }, e: function (t) {
                                throw t
                            }, f: e
                        }
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    )
                }
                var n, o, r = !0,
                    l = !1;
                return {
                    s: function () {
                        n = t[Symbol.iterator]()
                    }, n: function () {
                        var t = n.next();
                        return r = t.done, t
                    }, e: function (t) {
                        l = !0, o = t
                    }, f: function () {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[
                    i] = t[i];
                return n
            }
            var l = window.requestIdleCallback || function (t) {
                    var e = Date.now();
                    return setTimeout((function () {
                        t({
                            didTimeout: !1,
                            timeRemaining: function () {
                                return Math
                                    .max(0,
                                        50 -
                                        (
                                            Date
                                            .now() -
                                            e
                                        ))
                            }
                        })
                    }), 1)
                },
                d = window.cancelIdleCallback || function (t) {
                    clearTimeout(t)
                },
                f = window.IntersectionObserver && new window.IntersectionObserver(
                    (function (t) {
                        t.forEach((function (t) {
                            var e = t.intersectionRatio,
                                link = t.target;
                            e <= 0 || link.__prefetch()
                        }))
                    }));
            e.a = {
                name: "NuxtLink",
                extends: o.a.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function () {
                    this.prefetch && !this.noPrefetch && (
                        this.handleId = l(this.observe, {
                            timeout: 2e3
                        }))
                }, beforeDestroy: function () {
                    d(this.handleId), this.__observed && (f
                        .unobserve(this.$el), delete this
                        .$el.__prefetch)
                }, methods: {
                    observe: function () {
                        f && this.shouldPrefetch() && (
                            this.$el.__prefetch =
                            this.prefetchLink.bind(
                                this), f.observe(
                                this.$el), this.__observed = !
                            0)
                    }, shouldPrefetch: function () {
                        return this.getPrefetchComponents()
                            .length > 0
                    }, canPrefetch: function () {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline ||
                            t && ((t.effectiveType ||
                                "").includes(
                                "2g") || t.saveData)
                        )
                    }, getPrefetchComponents: function () {
                        return this.$router.resolve(
                                this.to, this.$route,
                                this.append).resolved.matched
                            .map((function (t) {
                                return t.components
                                    .default
                            })).filter((function (t) {
                                return
                                    "function" ==
                                    typeof t &&
                                    !t.options &&
                                    !t.__prefetched
                            }))
                    }, prefetchLink: function () {
                        if (this.canPrefetch()) {
                            f.unobserve(this.$el);
                            var t, e = r(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n())
                                    .done;) {
                                    var n = t.value,
                                        o = n();
                                    o instanceof Promise
                                        && o.catch((
                                            function () {}
                                        )), n.__prefetched = !
                                        0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        }, 129: function (t, e, n) {
            t.exports = n.p + "img/524873c.png"
        }, 143: function (t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                namespaced: !0,
                state: function () {
                    return {
                        helpShowIndex: 0,
                        navShowIndex: 0
                    }
                }, mutations: {
                    changeHelpShowIndex: function (t, e) {
                        t.helpShowIndex = e,
                            sessionStorage.setItem(
                                "helpShowIndex", e)
                    }, changeNavShowIndex: function (t,
                        e) {
                        t.navShowIndex = e,
                            sessionStorage.setItem(
                                "navShowIndex", e)
                    }
                }, actions: {}
            };
            e.default = o
        }, 144: function (t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                namespaced: !0,
                state: function () {
                    return {
                        userInfo: {
                            username: "",
                            session: ""
                        },
                        wapUserInfo: {
                            username: "",
                            session: ""
                        }
                    }
                }, mutations: {
                    saveUserInfo: function (t, e) {
                        t.userInfo = e, localStorage.setItem(
                            "userInfo", JSON.stringify(
                                e))
                    }, logout: function (t) {
                        t.userInfo = {
                            username: "",
                            session: ""
                        }, localStorage.removeItem(
                            "userInfo")
                    }, wapSaveUserInfo: function (t, e) {
                        t.wapUserInfo = e, localStorage
                            .setItem("wapUserInfo",
                                JSON.stringify(e))
                    }, wapLogout: function (t) {
                        t.wapUserInfo = {
                            username: "",
                            session: ""
                        }, localStorage.removeItem(
                            "wapUserInfo")
                    }
                }, actions: {}
            };
            e.default = o
        }, 145: function (t, e, n) {
            "use strict";
            var o = {};
            o.auth = n(246), o.auth = o.auth.default || o.auth, o.common =
                n(247), o.common = o.common.default || o.common, e.a =
                o
        }, 187: function (t, e, n) {
            t.exports = n.p + "img/4ecc358.jpg"
        }, 2: function (t, e, n) {
            "use strict";
            e.a = {
                SITE_INFO: {
                    name: "海龟加速器"
                },
                ARC_CLASS: {},
                CNZZ: {
                    default: "1276096852",
                    "www.haigui666.com": "1272901631",
                    "www.haiguijiasu.com": "1277813908",
                    "www.haiguijsq.com": "1278626806",
                    "haiguijsq.com": "1278626806",
                    "kfclink.com": "1278662114",
                    "www.kfclink.com": "1278662114",
                    "hgjs.jidanjiasu.com": "1278598799"
                },
                CACHE: {
                    PLAT: "B",
                    MAX: 1e3,
                    LENGTH: 1e4
                },
                REQUEST_TIME_OUT: 1e4,
                PRJ_NAME: "haigui",
                OEM: "default",
                PJ_VERSION: 1,
                WAP_OEM: "turtle_wechat",
                BI_TRACK: "https://yonghufenxi.zmip.vip:667/",
                RTB: "http://47.101.156.190:8003",
                API_ROOT: "https://turtle.wapi.yuanzidian.com/",
                TEST: ""
            }
        }, 215: function (t, e, n) {
            "use strict";
            n(18), n(47);
            var o = n(9),
                r = n(1),
                c = n(0),
                l = window.__NUXT__;

            function d() {
                if (!this._hydrated) return this.$fetch()
            }

            function f() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode
                    .elm.dataset && t.$vnode.elm.dataset.fetchKey
                ) {
                    var t;
                    this._hydrated = !0, this._fetchKey = +this
                        .$vnode.elm.dataset.fetchKey;
                    var data = l.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error =
                        data._error;
                    else
                        for (var e in data) r.a.set(this.$data,
                            e, data[e])
                }
            }

            function h() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise =
                    m.call(this).then((function () {
                        delete t._fetchPromise
                    }))), this._fetchPromise
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(o.a)(regeneratorRuntime.mark(
                    (function t() {
                        var e, n, o, r = this;
                        return
                            regeneratorRuntime.wrap(
                                (function (t) {
                                    for (;;)
                                        switch (
                                            t
                                            .prev =
                                            t
                                            .next
                                        ) {
                                        case 0:
                                            return
                                                this
                                                .$nuxt
                                                .nbFetching++,
                                                this
                                                .$fetchState
                                                .pending = !
                                                0,
                                                this
                                                .$fetchState
                                                .error =
                                                null,
                                                this
                                                ._hydrated = !
                                                1,
                                                e =
                                                null,
                                                n =
                                                Date
                                                .now(),
                                                t
                                                .prev =
                                                6,
                                                t
                                                .next =
                                                9,
                                                this
                                                .$options
                                                .fetch
                                                .call(
                                                    this
                                                );
                                        case 9:
                                            t
                                                .next =
                                                14;
                                            break;
                                        case 11:
                                            t
                                                .prev =
                                                11,
                                                t
                                                .t0 =
                                                t
                                                .catch(
                                                    6
                                                ),
                                                e =
                                                Object(
                                                    c
                                                    .o
                                                )
                                                (
                                                    t
                                                    .t0
                                                );
                                        case 14:
                                            if (!
                                                (
                                                    (
                                                        o =
                                                        this
                                                        ._fetchDelay -
                                                        (
                                                            Date
                                                            .now() -
                                                            n
                                                        )
                                                    ) >
                                                    0
                                                )
                                            ) {
                                                t
                                                    .next =
                                                    18;
                                                break
                                            }
                                            return
                                                t
                                                .next =
                                                18,
                                                new Promise(
                                                    (
                                                        function (
                                                            t
                                                        ) {
                                                            return
                                                                setTimeout(
                                                                    t,
                                                                    o
                                                                )
                                                        }
                                                    )
                                                );
                                        case 18:
                                            this
                                                .$fetchState
                                                .error =
                                                e,
                                                this
                                                .$fetchState
                                                .pending = !
                                                1,
                                                this
                                                .$fetchState
                                                .timestamp =
                                                Date
                                                .now(),
                                                this
                                                .$nextTick(
                                                    (
                                                        function () {
                                                            return
                                                                r
                                                                .$nuxt
                                                                .nbFetching--
                                                        }
                                                    )
                                                );
                                        case 22:
                                        case "end":
                                            return
                                                t
                                                .stop()
                                        }
                                }), t, this, [
                                    [6, 11]
                                ])
                    })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function () {
                    Object(c.l)(this) && (this._fetchDelay =
                        "number" == typeof this.$options
                        .fetchDelay ? this.$options.fetchDelay :
                        200, r.a.util.defineReactive(
                            this, "$fetchState", {
                                pending: !1,
                                error: null,
                                timestamp: Date.now()
                            }), this.$fetch = h.bind(
                            this), Object(c.a)(this,
                            "created", f), Object(c.a)(
                            this, "beforeMount", d))
                }
            }
        }, 220: function (t, e, n) {
            t.exports = n(221)
        }, 221: function (t, e, n) {
            "use strict";
            n.r(e),
                function (t) {
                    n(64), n(39), n(65), n(49), n(50), n(63);
                    var e = n(36),
                        o = (n(47), n(66), n(9)),
                        r = (n(95), n(125), n(38), n(18), n(83), n(
                                28), n(171), n(235), n(243), n(245),
                            n(1)),
                        c = n(204),
                        l = n(145),
                        d = n(0),
                        f = n(27),
                        h = n(215),
                        m = n(116);

                    function v(t) {
                        if ("undefined" == typeof Symbol ||
                            null == t[Symbol.iterator]) {
                            if (Array.isArray(t) || (t =
                                function (t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t)
                                        return x(t, e);
                                    var n = Object.prototype
                                        .toString.call(t).slice(
                                            8, -1);
                                    "Object" === n && t.constructor &&
                                        (n = t.constructor.name);
                                    if ("Map" === n ||
                                        "Set" === n) return
                                        Array.from(n);
                                    if ("Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                                        .test(n)) return x(
                                        t, e)
                                }(t))) {
                                var i = 0,
                                    e = function () {};
                                return {
                                    s: e,
                                    n: function () {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    }, e: function (t) {
                                        throw t
                                    }, f: e
                                }
                            }
                            throw new TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            )
                        }
                        var n, o, r = !0,
                            c = !1;
                        return {
                            s: function () {
                                n = t[Symbol.iterator]()
                            }, n: function () {
                                var t = n.next();
                                return r = t.done, t
                            }, e: function (t) {
                                c = !0, o = t
                            }, f: function () {
                                try {
                                    r || null == n.return ||
                                        n.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                        }
                    }

                    function x(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++)
                            n[i] = t[i];
                        return n
                    }
                    r.a.__nuxt__fetch__mixin__ || (r.a.mixin(h.a),
                        r.a.__nuxt__fetch__mixin__ = !0), r.a.component(
                        m.a.name, m.a), r.a.component("NLink",
                        m.a), t.fetch || (t.fetch = c.a);
                    var y, _, w = [],
                        k = window.__NUXT__ || {};
                    Object.assign(r.a.config, {
                        silent: !0,
                        performance: !1
                    });
                    var C = r.a.config.errorHandler || console.error;

                    function O(t, e, n) {
                        for (var o = function (component) {
                                var t = function (component,
                                    t) {
                                    if (!component || !
                                        component.options ||
                                        !component.options[
                                            t]) return {};
                                    var option =
                                        component.options[
                                            t];
                                    if ("function" ==
                                        typeof option) {
                                        for (var e =
                                                arguments
                                                .length,
                                                n = new Array(
                                                    e >
                                                    2 ?
                                                    e -
                                                    2 :
                                                    0),
                                                o = 2; o <
                                            e; o++) n[o -
                                                2] =
                                            arguments[o];
                                        return option.apply(
                                            void 0,
                                            n)
                                    }
                                    return option
                                }(component,
                                    "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, r = n ? Object(d.g)(n) : [],
                            c = Math.max(t.length, r.length),
                            l = [], f = function (i) {
                                var e = Object.assign({}, o(
                                        t[i])),
                                    n = Object.assign({}, o(
                                        r[i]));
                                Object.keys(e).filter((
                                    function (t) {
                                        return void 0 !==
                                            e[t] &&
                                            !t.toLowerCase()
                                            .includes(
                                                "leave"
                                            )
                                    })).forEach((
                                    function (t) {
                                        n[t] = e[t]
                                    })), l.push(n)
                            }, i = 0; i < c; i++) f(i);
                        return l
                    }

                    function j(t, e, n) {
                        return $.apply(this, arguments)
                    }

                    function $() {
                        return ($ = Object(o.a)(
                            regeneratorRuntime.mark((
                                function t(e, n, o) {
                                    var r, c, l, f,
                                        h = this;
                                    return
                                        regeneratorRuntime
                                        .wrap((
                                                function (
                                                    t
                                                ) {
                                                    for (;;)
                                                        switch (
                                                            t
                                                            .prev =
                                                            t
                                                            .next
                                                        ) {
                                                        case 0:
                                                            if (
                                                                this
                                                                ._routeChanged =
                                                                Boolean(
                                                                    y
                                                                    .nuxt
                                                                    .err
                                                                ) ||
                                                                n
                                                                .name !==
                                                                e
                                                                .name,
                                                                this
                                                                ._paramChanged = !
                                                                this
                                                                ._routeChanged &&
                                                                n
                                                                .path !==
                                                                e
                                                                .path,
                                                                this
                                                                ._queryChanged = !
                                                                this
                                                                ._paramChanged &&
                                                                n
                                                                .fullPath !==
                                                                e
                                                                .fullPath,
                                                                this
                                                                ._diffQuery =
                                                                this
                                                                ._queryChanged ?
                                                                Object(
                                                                    d
                                                                    .i
                                                                )
                                                                (
                                                                    e
                                                                    .query,
                                                                    n
                                                                    .query
                                                                ) : [], (
                                                                    this
                                                                    ._routeChanged ||
                                                                    this
                                                                    ._paramChanged
                                                                ) &&
                                                                this
                                                                .$loading
                                                                .start &&
                                                                !
                                                                this
                                                                .$loading
                                                                .manual &&
                                                                this
                                                                .$loading
                                                                .start(),
                                                                t
                                                                .prev =
                                                                5, !
                                                                this
                                                                ._queryChanged
                                                            ) {
                                                                t
                                                                    .next =
                                                                    12;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .next =
                                                                9,
                                                                Object(
                                                                    d
                                                                    .q
                                                                )
                                                                (
                                                                    e, (
                                                                        function (
                                                                            t,
                                                                            e
                                                                        ) {
                                                                            return {
                                                                                Component: t,
                                                                                instance: e
                                                                            }
                                                                        }
                                                                    )
                                                                );
                                                        case 9:
                                                            r
                                                                =
                                                                t
                                                                .sent,
                                                                r
                                                                .some(
                                                                    (
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            var
                                                                                o =
                                                                                t
                                                                                .Component,
                                                                                r =
                                                                                t
                                                                                .instance,
                                                                                c =
                                                                                o
                                                                                .options
                                                                                .watchQuery;
                                                                            return
                                                                                !
                                                                                0 ===
                                                                                c ||
                                                                                (
                                                                                    Array
                                                                                    .isArray(
                                                                                        c
                                                                                    ) ?
                                                                                    c
                                                                                    .some(
                                                                                        (
                                                                                            function (
                                                                                                t
                                                                                            ) {
                                                                                                return
                                                                                                    h
                                                                                                    ._diffQuery[
                                                                                                        t
                                                                                                    ]
                                                                                            }
                                                                                        )
                                                                                    ) :
                                                                                    "function" ==
                                                                                    typeof c &&
                                                                                    c
                                                                                    .apply(
                                                                                        r, [
                                                                                            e
                                                                                            .query,
                                                                                            n
                                                                                            .query
                                                                                        ]
                                                                                    )
                                                                                )
                                                                        }
                                                                    )
                                                                ) &&
                                                                this
                                                                .$loading
                                                                .start &&
                                                                !
                                                                this
                                                                .$loading
                                                                .manual &&
                                                                this
                                                                .$loading
                                                                .start();
                                                        case 12:
                                                            o
                                                                (),
                                                                t
                                                                .next =
                                                                26;
                                                            break;
                                                        case 15:
                                                            if (
                                                                t
                                                                .prev =
                                                                15,
                                                                t
                                                                .t0 =
                                                                t
                                                                .catch(
                                                                    5
                                                                ),
                                                                c =
                                                                t
                                                                .t0 || {},
                                                                l =
                                                                c
                                                                .statusCode ||
                                                                c
                                                                .status ||
                                                                c
                                                                .response &&
                                                                c
                                                                .response
                                                                .status ||
                                                                500,
                                                                f =
                                                                c
                                                                .message ||
                                                                "", !
                                                                /^Loading( CSS)? chunk (\d)+ failed\./
                                                                .test(
                                                                    f
                                                                )
                                                            ) {
                                                                t
                                                                    .next =
                                                                    23;
                                                                break
                                                            }
                                                            return
                                                                window
                                                                .location
                                                                .reload(!
                                                                    0
                                                                ),
                                                                t
                                                                .abrupt(
                                                                    "return"
                                                                );
                                                        case 23:
                                                            this
                                                                .error({
                                                                    statusCode: l,
                                                                    message: f
                                                                }),
                                                                this
                                                                .$nuxt
                                                                .$emit(
                                                                    "routeChanged",
                                                                    e,
                                                                    n,
                                                                    c
                                                                ),
                                                                o();
                                                        case 26:
                                                        case "end":
                                                            return
                                                                t
                                                                .stop()
                                                        }
                                                }),
                                            t, this, [
                                                [5,
                                                    15
                                                ]
                                            ])
                                })))).apply(this, arguments)
                    }

                    function S(t, e) {
                        return k.serverRendered && e && Object(
                            d.b)(t, e), t._Ctor = t, t
                    }

                    function I(t) {
                        var path = Object(d.f)(t.options.base,
                            t.options.mode);
                        return Object(d.d)(t.match(path),
                            function () {
                                var t = Object(o.a)(
                                    regeneratorRuntime.mark(
                                        (function t(e,
                                            n, o, r,
                                            c) {
                                            var l;
                                            return
                                                regeneratorRuntime
                                                .wrap(
                                                    (
                                                        function (
                                                            t
                                                        ) {
                                                            for (;;)
                                                                switch (
                                                                    t
                                                                    .prev =
                                                                    t
                                                                    .next
                                                                ) {
                                                                case 0:
                                                                    if (
                                                                        "function" !=
                                                                        typeof e ||
                                                                        e
                                                                        .options
                                                                    ) {
                                                                        t
                                                                            .next =
                                                                            4;
                                                                        break
                                                                    }
                                                                    return
                                                                        t
                                                                        .next =
                                                                        3,
                                                                        e();
                                                                case 3:
                                                                    e
                                                                        =
                                                                        t
                                                                        .sent;
                                                                case 4:
                                                                    return
                                                                        l =
                                                                        S(
                                                                            Object(
                                                                                d
                                                                                .r
                                                                            )
                                                                            (
                                                                                e
                                                                            ),
                                                                            k
                                                                            .data ?
                                                                            k
                                                                            .data[
                                                                                c
                                                                            ] :
                                                                            null
                                                                        ),
                                                                        o
                                                                        .components[
                                                                            r
                                                                        ] =
                                                                        l,
                                                                        t
                                                                        .abrupt(
                                                                            "return",
                                                                            l
                                                                        );
                                                                case 7:
                                                                case "end":
                                                                    return
                                                                        t
                                                                        .stop()
                                                                }
                                                        }
                                                    ),
                                                    t
                                                )
                                        })));
                                return function (e, n, o, r,
                                    c) {
                                    return t.apply(this,
                                        arguments)
                                }
                            }())
                    }

                    function T(t, e, n) {
                        var o = this,
                            r = ["common", "auth"],
                            c = !1;
                        if (void 0 !== n && (r = [], (n =
                                Object(d.r)(n)).options.middleware &&
                            (r = r.concat(n.options.middleware)),
                            t.forEach((function (t) {
                                t.options.middleware &&
                                    (r = r.concat(t
                                        .options
                                        .middleware
                                    ))
                            }))), r = r.map((function (t) {
                            return "function" ==
                                typeof t ? t : (
                                    "function" !=
                                    typeof l.a[t] &&
                                    (c = !0, o.error({
                                        statusCode: 500,
                                        message: "Unknown middleware " +
                                            t
                                    })), l.a[t])
                        })), !c) return Object(d.n)(r, e)
                    }

                    function E(t, e, n) {
                        return P.apply(this, arguments)
                    }

                    function P() {
                        return (P = Object(o.a)(
                            regeneratorRuntime.mark((
                                function t(e, n, o) {
                                    var r, c, l, h,
                                        m, x, _, k,
                                        C, j, $, S,
                                        I, E, P, z =
                                        this;
                                    return
                                        regeneratorRuntime
                                        .wrap((
                                                function (
                                                    t
                                                ) {
                                                    for (;;)
                                                        switch (
                                                            t
                                                            .prev =
                                                            t
                                                            .next
                                                        ) {
                                                        case 0:
                                                            if (!
                                                                1 !==
                                                                this
                                                                ._routeChanged ||
                                                                !
                                                                1 !==
                                                                this
                                                                ._paramChanged ||
                                                                !
                                                                1 !==
                                                                this
                                                                ._queryChanged
                                                            ) {
                                                                t
                                                                    .next =
                                                                    2;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return",
                                                                    o()
                                                                );
                                                        case 2:
                                                            return
                                                                e ===
                                                                n ?
                                                                w = [] :
                                                                (
                                                                    r = [],
                                                                    w =
                                                                    Object(
                                                                        d
                                                                        .g
                                                                    )
                                                                    (
                                                                        n,
                                                                        r
                                                                    )
                                                                    .map(
                                                                        (
                                                                            function (
                                                                                t,
                                                                                i
                                                                            ) {
                                                                                return
                                                                                    Object(
                                                                                        d
                                                                                        .c
                                                                                    )
                                                                                    (
                                                                                        n
                                                                                        .matched[
                                                                                            r[
                                                                                                i
                                                                                            ]
                                                                                        ]
                                                                                        .path
                                                                                    )
                                                                                    (
                                                                                        n
                                                                                        .params
                                                                                    )
                                                                            }
                                                                        )
                                                                    )
                                                                ),
                                                                c = !
                                                                1,
                                                                l =
                                                                function (
                                                                    path
                                                                ) {
                                                                    n
                                                                        .path ===
                                                                        path
                                                                        .path &&
                                                                        z
                                                                        .$loading
                                                                        .finish &&
                                                                        z
                                                                        .$loading
                                                                        .finish(),
                                                                        n
                                                                        .path !==
                                                                        path
                                                                        .path &&
                                                                        z
                                                                        .$loading
                                                                        .pause &&
                                                                        z
                                                                        .$loading
                                                                        .pause(),
                                                                        c ||
                                                                        (
                                                                            c = !
                                                                            0,
                                                                            o(
                                                                                path
                                                                            )
                                                                        )
                                                                },
                                                                t
                                                                .next =
                                                                7,
                                                                Object(
                                                                    d
                                                                    .s
                                                                )
                                                                (
                                                                    y, {
                                                                        route: e,
                                                                        from: n,
                                                                        next: l
                                                                            .bind(
                                                                                this
                                                                            )
                                                                    }
                                                                );
                                                        case 7:
                                                            if (
                                                                this
                                                                ._dateLastError =
                                                                y
                                                                .nuxt
                                                                .dateErr,
                                                                this
                                                                ._hadError =
                                                                Boolean(
                                                                    y
                                                                    .nuxt
                                                                    .err
                                                                ),
                                                                h = [], (
                                                                    m =
                                                                    Object(
                                                                        d
                                                                        .g
                                                                    )
                                                                    (
                                                                        e,
                                                                        h
                                                                    )
                                                                )
                                                                .length
                                                            ) {
                                                                t
                                                                    .next =
                                                                    26;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .next =
                                                                14,
                                                                T
                                                                .call(
                                                                    this,
                                                                    m,
                                                                    y
                                                                    .context
                                                                );
                                                        case 14:
                                                            if (!
                                                                c
                                                            ) {
                                                                t
                                                                    .next =
                                                                    16;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return"
                                                                );
                                                        case 16:
                                                            return
                                                                x =
                                                                (
                                                                    f
                                                                    .a
                                                                    .options ||
                                                                    f
                                                                    .a
                                                                )
                                                                .layout,
                                                                t
                                                                .next =
                                                                19,
                                                                this
                                                                .loadLayout(
                                                                    "function" ==
                                                                    typeof x ?
                                                                    x
                                                                    .call(
                                                                        f
                                                                        .a,
                                                                        y
                                                                        .context
                                                                    ) :
                                                                    x
                                                                );
                                                        case 19:
                                                            return
                                                                _ =
                                                                t
                                                                .sent,
                                                                t
                                                                .next =
                                                                22,
                                                                T
                                                                .call(
                                                                    this,
                                                                    m,
                                                                    y
                                                                    .context,
                                                                    _
                                                                );
                                                        case 22:
                                                            if (!
                                                                c
                                                            ) {
                                                                t
                                                                    .next =
                                                                    24;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return"
                                                                );
                                                        case 24:
                                                            return
                                                                y
                                                                .context
                                                                .error({
                                                                    statusCode: 404,
                                                                    message: "This page could not be found"
                                                                }),
                                                                t
                                                                .abrupt(
                                                                    "return",
                                                                    o()
                                                                );
                                                        case 26:
                                                            return
                                                                m
                                                                .forEach(
                                                                    (
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            t
                                                                                ._Ctor &&
                                                                                t
                                                                                ._Ctor
                                                                                .options &&
                                                                                (
                                                                                    t
                                                                                    .options
                                                                                    .asyncData =
                                                                                    t
                                                                                    ._Ctor
                                                                                    .options
                                                                                    .asyncData,
                                                                                    t
                                                                                    .options
                                                                                    .fetch =
                                                                                    t
                                                                                    ._Ctor
                                                                                    .options
                                                                                    .fetch
                                                                                )
                                                                        }
                                                                    )
                                                                ),
                                                                this
                                                                .setTransitions(
                                                                    O(
                                                                        m,
                                                                        e,
                                                                        n
                                                                    )
                                                                ),
                                                                t
                                                                .prev =
                                                                28,
                                                                t
                                                                .next =
                                                                31,
                                                                T
                                                                .call(
                                                                    this,
                                                                    m,
                                                                    y
                                                                    .context
                                                                );
                                                        case 31:
                                                            if (!
                                                                c
                                                            ) {
                                                                t
                                                                    .next =
                                                                    33;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return"
                                                                );
                                                        case 33:
                                                            if (!
                                                                y
                                                                .context
                                                                ._errored
                                                            ) {
                                                                t
                                                                    .next =
                                                                    35;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return",
                                                                    o()
                                                                );
                                                        case 35:
                                                            return
                                                                "function" ==
                                                                typeof (
                                                                    k =
                                                                    m[
                                                                        0
                                                                    ]
                                                                    .options
                                                                    .layout
                                                                ) &&
                                                                (
                                                                    k =
                                                                    k(
                                                                        y
                                                                        .context
                                                                    )
                                                                ),
                                                                t
                                                                .next =
                                                                39,
                                                                this
                                                                .loadLayout(
                                                                    k
                                                                );
                                                        case 39:
                                                            return
                                                                k =
                                                                t
                                                                .sent,
                                                                t
                                                                .next =
                                                                42,
                                                                T
                                                                .call(
                                                                    this,
                                                                    m,
                                                                    y
                                                                    .context,
                                                                    k
                                                                );
                                                        case 42:
                                                            if (!
                                                                c
                                                            ) {
                                                                t
                                                                    .next =
                                                                    44;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return"
                                                                );
                                                        case 44:
                                                            if (!
                                                                y
                                                                .context
                                                                ._errored
                                                            ) {
                                                                t
                                                                    .next =
                                                                    46;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return",
                                                                    o()
                                                                );
                                                        case 46:
                                                            C
                                                                = !
                                                                0,
                                                                t
                                                                .prev =
                                                                47,
                                                                j =
                                                                v(
                                                                    m
                                                                ),
                                                                t
                                                                .prev =
                                                                49,
                                                                j
                                                                .s();
                                                        case 51:
                                                            if (
                                                                (
                                                                    $ =
                                                                    j
                                                                    .n()
                                                                )
                                                                .done
                                                            ) {
                                                                t
                                                                    .next =
                                                                    62;
                                                                break
                                                            }
                                                            if (
                                                                "function" ==
                                                                typeof (
                                                                    S =
                                                                    $
                                                                    .value
                                                                )
                                                                .options
                                                                .validate
                                                            ) {
                                                                t
                                                                    .next =
                                                                    55;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "continue",
                                                                    60
                                                                );
                                                        case 55:
                                                            return
                                                                t
                                                                .next =
                                                                57,
                                                                S
                                                                .options
                                                                .validate(
                                                                    y
                                                                    .context
                                                                );
                                                        case 57:
                                                            if (
                                                                C =
                                                                t
                                                                .sent
                                                            ) {
                                                                t
                                                                    .next =
                                                                    60;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "break",
                                                                    62
                                                                );
                                                        case 60:
                                                            t
                                                                .next =
                                                                51;
                                                            break;
                                                        case 62:
                                                            t
                                                                .next =
                                                                67;
                                                            break;
                                                        case 64:
                                                            t
                                                                .prev =
                                                                64,
                                                                t
                                                                .t0 =
                                                                t
                                                                .catch(
                                                                    49
                                                                ),
                                                                j
                                                                .e(
                                                                    t
                                                                    .t0
                                                                );
                                                        case 67:
                                                            return
                                                                t
                                                                .prev =
                                                                67,
                                                                j
                                                                .f(),
                                                                t
                                                                .finish(
                                                                    67
                                                                );
                                                        case 70:
                                                            t
                                                                .next =
                                                                76;
                                                            break;
                                                        case 72:
                                                            return
                                                                t
                                                                .prev =
                                                                72,
                                                                t
                                                                .t1 =
                                                                t
                                                                .catch(
                                                                    47
                                                                ),
                                                                this
                                                                .error({
                                                                    statusCode: t
                                                                        .t1
                                                                        .statusCode ||
                                                                        "500",
                                                                    message: t
                                                                        .t1
                                                                        .message
                                                                }),
                                                                t
                                                                .abrupt(
                                                                    "return",
                                                                    o()
                                                                );
                                                        case 76:
                                                            if (
                                                                C
                                                            ) {
                                                                t
                                                                    .next =
                                                                    79;
                                                                break
                                                            }
                                                            return
                                                                this
                                                                .error({
                                                                    statusCode: 404,
                                                                    message: "This page could not be found"
                                                                }),
                                                                t
                                                                .abrupt(
                                                                    "return",
                                                                    o()
                                                                );
                                                        case 79:
                                                            return
                                                                t
                                                                .next =
                                                                81,
                                                                Promise
                                                                .all(
                                                                    m
                                                                    .map(
                                                                        (
                                                                            function (
                                                                                t,
                                                                                i
                                                                            ) {
                                                                                t
                                                                                    ._path =
                                                                                    Object(
                                                                                        d
                                                                                        .c
                                                                                    )
                                                                                    (
                                                                                        e
                                                                                        .matched[
                                                                                            h[
                                                                                                i
                                                                                            ]
                                                                                        ]
                                                                                        .path
                                                                                    )
                                                                                    (
                                                                                        e
                                                                                        .params
                                                                                    ),
                                                                                    t
                                                                                    ._dataRefresh = !
                                                                                    1;
                                                                                var
                                                                                    o =
                                                                                    t
                                                                                    ._path !==
                                                                                    w[
                                                                                        i
                                                                                    ];
                                                                                if (
                                                                                    z
                                                                                    ._routeChanged &&
                                                                                    o
                                                                                )
                                                                                    t
                                                                                    ._dataRefresh = !
                                                                                    0;
                                                                                else if (
                                                                                    z
                                                                                    ._paramChanged &&
                                                                                    o
                                                                                ) {
                                                                                    var
                                                                                        r =
                                                                                        t
                                                                                        .options
                                                                                        .watchParam;
                                                                                    t
                                                                                        ._dataRefresh = !
                                                                                        1 !==
                                                                                        r
                                                                                } else if (
                                                                                    z
                                                                                    ._queryChanged
                                                                                ) {
                                                                                    var
                                                                                        c =
                                                                                        t
                                                                                        .options
                                                                                        .watchQuery;
                                                                                    !
                                                                                    0
                                                                                        ===
                                                                                        c ?
                                                                                        t
                                                                                        ._dataRefresh = !
                                                                                        0 :
                                                                                        Array
                                                                                        .isArray(
                                                                                            c
                                                                                        ) ?
                                                                                        t
                                                                                        ._dataRefresh =
                                                                                        c
                                                                                        .some(
                                                                                            (
                                                                                                function (
                                                                                                    t
                                                                                                ) {
                                                                                                    return
                                                                                                        z
                                                                                                        ._diffQuery[
                                                                                                            t
                                                                                                        ]
                                                                                                }
                                                                                            )
                                                                                        ) :
                                                                                        "function" ==
                                                                                        typeof c &&
                                                                                        (
                                                                                            I ||
                                                                                            (
                                                                                                I =
                                                                                                Object(
                                                                                                    d
                                                                                                    .h
                                                                                                )
                                                                                                (
                                                                                                    e
                                                                                                )
                                                                                            ),
                                                                                            t
                                                                                            ._dataRefresh =
                                                                                            c
                                                                                            .apply(
                                                                                                I[
                                                                                                    i
                                                                                                ], [
                                                                                                    e
                                                                                                    .query,
                                                                                                    n
                                                                                                    .query
                                                                                                ]
                                                                                            )
                                                                                        )
                                                                                }
                                                                                if (
                                                                                    z
                                                                                    ._hadError ||
                                                                                    !
                                                                                    z
                                                                                    ._isMounted ||
                                                                                    t
                                                                                    ._dataRefresh
                                                                                ) {
                                                                                    var
                                                                                        l = [],
                                                                                        f =
                                                                                        t
                                                                                        .options
                                                                                        .asyncData &&
                                                                                        "function" ==
                                                                                        typeof t
                                                                                        .options
                                                                                        .asyncData,
                                                                                        m =
                                                                                        Boolean(
                                                                                            t
                                                                                            .options
                                                                                            .fetch
                                                                                        ) &&
                                                                                        t
                                                                                        .options
                                                                                        .fetch
                                                                                        .length,
                                                                                        v =
                                                                                        f &&
                                                                                        m ?
                                                                                        30 :
                                                                                        45;
                                                                                    if (
                                                                                        f
                                                                                    ) {
                                                                                        var
                                                                                            x =
                                                                                            Object(
                                                                                                d
                                                                                                .p
                                                                                            )
                                                                                            (
                                                                                                t
                                                                                                .options
                                                                                                .asyncData,
                                                                                                y
                                                                                                .context
                                                                                            )
                                                                                            .then(
                                                                                                (
                                                                                                    function (
                                                                                                        e
                                                                                                    ) {
                                                                                                        Object
                                                                                                            (
                                                                                                                d
                                                                                                                .b
                                                                                                            )
                                                                                                            (
                                                                                                                t,
                                                                                                                e
                                                                                                            ),
                                                                                                            z
                                                                                                            .$loading
                                                                                                            .increase &&
                                                                                                            z
                                                                                                            .$loading
                                                                                                            .increase(
                                                                                                                v
                                                                                                            )
                                                                                                    }
                                                                                                )
                                                                                            );
                                                                                        l
                                                                                            .push(
                                                                                                x
                                                                                            )
                                                                                    }
                                                                                    if (
                                                                                        z
                                                                                        .$loading
                                                                                        .manual = !
                                                                                        1 ===
                                                                                        t
                                                                                        .options
                                                                                        .loading,
                                                                                        m
                                                                                    ) {
                                                                                        var
                                                                                            p =
                                                                                            t
                                                                                            .options
                                                                                            .fetch(
                                                                                                y
                                                                                                .context
                                                                                            );
                                                                                        p
                                                                                            &&
                                                                                            (
                                                                                                p instanceof Promise ||
                                                                                                "function" ==
                                                                                                typeof p
                                                                                                .then
                                                                                            ) ||
                                                                                            (
                                                                                                p =
                                                                                                Promise
                                                                                                .resolve(
                                                                                                    p
                                                                                                )
                                                                                            ),
                                                                                            p
                                                                                            .then(
                                                                                                (
                                                                                                    function (
                                                                                                        t
                                                                                                    ) {
                                                                                                        z
                                                                                                            .$loading
                                                                                                            .increase &&
                                                                                                            z
                                                                                                            .$loading
                                                                                                            .increase(
                                                                                                                v
                                                                                                            )
                                                                                                    }
                                                                                                )
                                                                                            ),
                                                                                            l
                                                                                            .push(
                                                                                                p
                                                                                            )
                                                                                    }
                                                                                    return
                                                                                        Promise
                                                                                        .all(
                                                                                            l
                                                                                        )
                                                                                }
                                                                            }
                                                                        )
                                                                    )
                                                                );
                                                        case 81:
                                                            c
                                                                ||
                                                                (
                                                                    this
                                                                    .$loading
                                                                    .finish &&
                                                                    !
                                                                    this
                                                                    .$loading
                                                                    .manual &&
                                                                    this
                                                                    .$loading
                                                                    .finish(),
                                                                    o()
                                                                ),
                                                                t
                                                                .next =
                                                                98;
                                                            break;
                                                        case 84:
                                                            if (
                                                                t
                                                                .prev =
                                                                84,
                                                                t
                                                                .t2 =
                                                                t
                                                                .catch(
                                                                    28
                                                                ),
                                                                "ERR_REDIRECT" !==
                                                                (
                                                                    E =
                                                                    t
                                                                    .t2 || {}
                                                                )
                                                                .message
                                                            ) {
                                                                t
                                                                    .next =
                                                                    89;
                                                                break
                                                            }
                                                            return
                                                                t
                                                                .abrupt(
                                                                    "return",
                                                                    this
                                                                    .$nuxt
                                                                    .$emit(
                                                                        "routeChanged",
                                                                        e,
                                                                        n,
                                                                        E
                                                                    )
                                                                );
                                                        case 89:
                                                            return
                                                                w = [],
                                                                Object(
                                                                    d
                                                                    .k
                                                                )
                                                                (
                                                                    E
                                                                ),
                                                                "function" ==
                                                                typeof (
                                                                    P =
                                                                    (
                                                                        f
                                                                        .a
                                                                        .options ||
                                                                        f
                                                                        .a
                                                                    )
                                                                    .layout
                                                                ) &&
                                                                (
                                                                    P =
                                                                    P(
                                                                        y
                                                                        .context
                                                                    )
                                                                ),
                                                                t
                                                                .next =
                                                                95,
                                                                this
                                                                .loadLayout(
                                                                    P
                                                                );
                                                        case 95:
                                                            this
                                                                .error(
                                                                    E
                                                                ),
                                                                this
                                                                .$nuxt
                                                                .$emit(
                                                                    "routeChanged",
                                                                    e,
                                                                    n,
                                                                    E
                                                                ),
                                                                o();
                                                        case 98:
                                                        case "end":
                                                            return
                                                                t
                                                                .stop()
                                                        }
                                                }),
                                            t, this, [
                                                [28,
                                                    84
                                                ],
                                                [47,
                                                    72
                                                ],
                                                [49,
                                                    64,
                                                    67,
                                                    70
                                                ]
                                            ])
                                })))).apply(this, arguments)
                    }

                    function z(t, n) {
                        Object(d.d)(t, (function (t, n, o, c) {
                            return "object" !==
                                Object(e.a)(t) || t
                                .options || ((t = r
                                    .a.extend(t)
                                )._Ctor = t, o.components[
                                    c] = t), t
                        }))
                    }

                    function N(t) {
                        this._hadError && this._dateLastError ===
                            this.$options.nuxt.dateErr && this.error();
                        var e = this.$options.nuxt.err ? (f.a.options ||
                                f.a).layout : t.matched[0].components
                            .default.options.layout;
                        "function" == typeof e && (e = e(y.context)),
                            this.setLayout(e)
                    }

                    function A(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !==
                            this._paramChanged || !1 !== this._queryChanged
                        ) {
                            var o = Object(d.h)(t),
                                c = Object(d.g)(t);
                            r.a.nextTick((function () {
                                o.forEach((function (
                                    t,
                                    i) {
                                    if (
                                        t &&
                                        !
                                        t
                                        ._isDestroyed &&
                                        t
                                        .constructor
                                        ._dataRefresh &&
                                        c[
                                            i
                                        ] ===
                                        t
                                        .constructor &&
                                        !
                                        0 !==
                                        t
                                        .$vnode
                                        .data
                                        .keepAlive &&
                                        "function" ==
                                        typeof t
                                        .constructor
                                        .options
                                        .data
                                    ) {
                                        var
                                            e =
                                            t
                                            .constructor
                                            .options
                                            .data
                                            .call(
                                                t
                                            );
                                        for (
                                            var
                                                n in
                                                e
                                        )
                                            r
                                            .a
                                            .set(
                                                t
                                                .$data,
                                                n,
                                                e[
                                                    n
                                                ]
                                            );
                                        window
                                            .$nuxt
                                            .$nextTick(
                                                (
                                                    function () {
                                                        window
                                                            .$nuxt
                                                            .$emit(
                                                                "triggerScroll"
                                                            )
                                                    }
                                                )
                                            )
                                    }
                                })), N.call(n,
                                    t)
                            }))
                        }
                    }

                    function M(t) {
                        window.onNuxtReadyCbs.forEach((function (
                                e) {
                                "function" == typeof e
                                    && e(t)
                            })), "function" == typeof window._onNuxtLoaded &&
                            window._onNuxtLoaded(t), _.afterEach(
                                (function (e, n) {
                                    r.a.nextTick((function () {
                                        return t
                                            .$nuxt
                                            .$emit(
                                                "routeChanged",
                                                e,
                                                n
                                            )
                                    }))
                                }))
                    }

                    function R() {
                        return (R = Object(o.a)(
                            regeneratorRuntime.mark((
                                function t(e) {
                                    var n, o, c, l,
                                        f;
                                    return
                                        regeneratorRuntime
                                        .wrap((
                                                function (
                                                    t
                                                ) {
                                                    for (;;)
                                                        switch (
                                                            t
                                                            .prev =
                                                            t
                                                            .next
                                                        ) {
                                                        case 0:
                                                            return
                                                                y =
                                                                e
                                                                .app,
                                                                _ =
                                                                e
                                                                .router,
                                                                e
                                                                .store,
                                                                n =
                                                                new r
                                                                .a(
                                                                    y
                                                                ),
                                                                o =
                                                                k
                                                                .layout ||
                                                                "default",
                                                                t
                                                                .next =
                                                                7,
                                                                n
                                                                .loadLayout(
                                                                    o
                                                                );
                                                        case 7:
                                                            return
                                                                n
                                                                .setLayout(
                                                                    o
                                                                ),
                                                                c =
                                                                function () {
                                                                    n
                                                                        .$mount(
                                                                            "#__nuxt"
                                                                        ),
                                                                        _
                                                                        .afterEach(
                                                                            z
                                                                        ),
                                                                        _
                                                                        .afterEach(
                                                                            A
                                                                            .bind(
                                                                                n
                                                                            )
                                                                        ),
                                                                        r
                                                                        .a
                                                                        .nextTick(
                                                                            (
                                                                                function () {
                                                                                    M
                                                                                        (
                                                                                            n
                                                                                        )
                                                                                }
                                                                            )
                                                                        )
                                                                },
                                                                t
                                                                .next =
                                                                11,
                                                                Promise
                                                                .all(
                                                                    I(
                                                                        _
                                                                    )
                                                                );
                                                        case 11:
                                                            if (
                                                                l =
                                                                t
                                                                .sent,
                                                                n
                                                                .setTransitions =
                                                                n
                                                                .$options
                                                                .nuxt
                                                                .setTransitions
                                                                .bind(
                                                                    n
                                                                ),
                                                                l
                                                                .length &&
                                                                (
                                                                    n
                                                                    .setTransitions(
                                                                        O(
                                                                            l,
                                                                            _
                                                                            .currentRoute
                                                                        )
                                                                    ),
                                                                    w =
                                                                    _
                                                                    .currentRoute
                                                                    .matched
                                                                    .map(
                                                                        (
                                                                            function (
                                                                                t
                                                                            ) {
                                                                                return
                                                                                    Object(
                                                                                        d
                                                                                        .c
                                                                                    )
                                                                                    (
                                                                                        t
                                                                                        .path
                                                                                    )
                                                                                    (
                                                                                        _
                                                                                        .currentRoute
                                                                                        .params
                                                                                    )
                                                                            }
                                                                        )
                                                                    )
                                                                ),
                                                                n
                                                                .$loading = {},
                                                                k
                                                                .error &&
                                                                n
                                                                .error(
                                                                    k
                                                                    .error
                                                                ),
                                                                _
                                                                .beforeEach(
                                                                    j
                                                                    .bind(
                                                                        n
                                                                    )
                                                                ),
                                                                _
                                                                .beforeEach(
                                                                    E
                                                                    .bind(
                                                                        n
                                                                    )
                                                                ), !
                                                                k
                                                                .serverRendered ||
                                                                k
                                                                .routePath !==
                                                                n
                                                                .context
                                                                .route
                                                                .path
                                                            ) {
                                                                t
                                                                    .next =
                                                                    21;
                                                                break
                                                            }
                                                            return
                                                                c(),
                                                                t
                                                                .abrupt(
                                                                    "return"
                                                                );
                                                        case 21:
                                                            f
                                                                =
                                                                function () {
                                                                    z
                                                                        (
                                                                            _
                                                                            .currentRoute,
                                                                            _
                                                                            .currentRoute
                                                                        ),
                                                                        N
                                                                        .call(
                                                                            n,
                                                                            _
                                                                            .currentRoute
                                                                        ),
                                                                        c()
                                                                },
                                                                E
                                                                .call(
                                                                    n,
                                                                    _
                                                                    .currentRoute,
                                                                    _
                                                                    .currentRoute, (
                                                                        function (
                                                                            path
                                                                        ) {
                                                                            if (
                                                                                path
                                                                            ) {
                                                                                var
                                                                                    t =
                                                                                    _
                                                                                    .afterEach(
                                                                                        (
                                                                                            function (
                                                                                                e,
                                                                                                n
                                                                                            ) {
                                                                                                t
                                                                                                    (),
                                                                                                    f()
                                                                                            }
                                                                                        )
                                                                                    );
                                                                                _
                                                                                    .push(
                                                                                        path,
                                                                                        void 0, (
                                                                                            function (
                                                                                                t
                                                                                            ) {
                                                                                                t
                                                                                                    &&
                                                                                                    C(
                                                                                                        t
                                                                                                    )
                                                                                            }
                                                                                        )
                                                                                    )
                                                                            } else
                                                                                f()
                                                                        }
                                                                    )
                                                                );
                                                        case 23:
                                                        case "end":
                                                            return
                                                                t
                                                                .stop()
                                                        }
                                                }),
                                            t)
                                })))).apply(this, arguments)
                    }
                    Object(f.b)().then((function (t) {
                        return R.apply(this, arguments)
                    })).catch(C)
                }.call(this, n(29))
        }, 246: function (t, e, n) {
            "use strict";
            n.r(e), e.default = function (t) {
                t.store, t.redirect, t.route
            }
        }, 247: function (t, e, n) {
            "use strict";
            n.r(e);
            n(47);
            var o = n(9),
                r = n(3);
            n(2);

            function c() {
                return (c = Object(o.a)(regeneratorRuntime.mark(
                    (function t(e) {
                        var n;
                        return
                            regeneratorRuntime.wrap(
                                (function (t) {
                                    for (;;)
                                        switch (
                                            t
                                            .prev =
                                            t
                                            .next
                                        ) {
                                        case 0:
                                            if (!
                                                e
                                                .req ||
                                                !
                                                e
                                                .req
                                                .headers[
                                                    "x-real-ip"
                                                ] &&
                                                !
                                                e
                                                .req
                                                .headers[
                                                    "x-forward-for"
                                                ]
                                            ) {
                                                t
                                                    .next =
                                                    4;
                                                break
                                            }
                                            return
                                                n =
                                                e
                                                .req
                                                .headers[
                                                    "x-forward-for"
                                                ] ?
                                                e
                                                .req
                                                .headers[
                                                    "x-forward-for"
                                                ] :
                                                e
                                                .headers[
                                                    "x-real-ip"
                                                ],
                                                t
                                                .next =
                                                4,
                                                r
                                                .a
                                                .accessCheck({
                                                    ip: n
                                                })
                                                .then(
                                                    (
                                                        function (
                                                            t
                                                        ) {
                                                            if (
                                                                0 !=
                                                                t
                                                                .data
                                                                .code
                                                            )
                                                                return
                                                                    e
                                                                    .error({
                                                                        statusCode: 999
                                                                    })
                                                        }
                                                    )
                                                );
                                        case 4:
                                        case "end":
                                            return
                                                t
                                                .stop()
                                        }
                                }), t)
                    })))).apply(this, arguments)
            }
            e.default = function (t) {
                return c.apply(this, arguments)
            }
        }, 27: function (t, e, n) {
            "use strict";
            n.d(e, "b", (function () {
                return Mt
            })), n.d(e, "a", (function () {
                return I
            }));
            n(47), n(117), n(39), n(38), n(18), n(83);
            var o = n(9),
                r = n(59),
                c = (n(28), n(1)),
                l = n(206),
                d = n(146),
                f = n.n(d),
                h = n(62),
                m = n.n(h),
                v = n(80),
                x = n(0);
            "scrollRestoration" in window.history && (window.history
                .scrollRestoration = "manual", window.addEventListener(
                    "beforeunload", (function () {
                        window.history.scrollRestoration =
                            "auto"
                    })), window.addEventListener("load", (
                    function () {
                        window.history.scrollRestoration =
                            "manual"
                    })));
            var y = function () {},
                _ = v.a.prototype.push;
            v.a.prototype.push = function (t) {
                var e = arguments.length > 1 && void 0 !==
                    arguments[1] ? arguments[1] : y,
                    n = arguments.length > 2 ? arguments[2] :
                    void 0;
                return _.call(this, t, e, n)
            }, c.a.use(v.a);
            var w = {
                mode: "history",
                base: decodeURI("/"),
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function (t, e, n) {
                    var o = !1,
                        r = Object(x.g)(t);
                    (r.length < 2 && r.every((function (t) {
                        return !1 !== t.options
                            .scrollToTop
                    })) || r.some((function (t) {
                        return t.options.scrollToTop
                    }))) && (o = {
                        x: 0,
                        y: 0
                    }), n && (o = n);
                    var c = window.$nuxt;
                    return t.path === e.path && t.hash !==
                        e.hash && c.$nextTick((function () {
                            return c.$emit(
                                "triggerScroll"
                            )
                        })), new Promise((function (e) {
                            c.$once("triggerScroll", (
                                function () {
                                    if (t.hash) {
                                        var
                                            n =
                                            t
                                            .hash;
                                        void 0
                                            !==
                                            window
                                            .CSS &&
                                            void 0 !==
                                            window
                                            .CSS
                                            .escape &&
                                            (
                                                n =
                                                "#" +
                                                window
                                                .CSS
                                                .escape(
                                                    n
                                                    .substr(
                                                        1
                                                    )
                                                )
                                            );
                                        try {
                                            document
                                                .querySelector(
                                                    n
                                                ) &&
                                                (
                                                    o = {
                                                        selector: n
                                                    }
                                                )
                                        } catch (
                                            t
                                        ) {
                                            console
                                                .warn(
                                                    "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                                                )
                                        }
                                    }
                                    e(o)
                                }))
                        }))
                }, routes: [{
                    path: "/about",
                    component: function () {
                        return Object(x.m)(n.e(1).then(
                            n.bind(null,
                                700)))
                    }, children: [{
                        path: "",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                3).then(
                                n.bind(
                                    null,
                                    701
                                )))
                        }, name: "about"
                    }, {
                        path: "page/:page?",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                4).then(
                                n.bind(
                                    null,
                                    702
                                )))
                        }, name: "about-page-page"
                    }, {
                        path: ":id",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                2).then(
                                n.bind(
                                    null,
                                    703
                                )))
                        }, name: "about-id"
                    }]
                }, {
                    path: "/activity",
                    component: function () {
                        return Object(x.m)(n.e(8).then(
                            n.bind(null,
                                698)))
                    }, name: "activity"
                }, {
                    path: "/buy",
                    component: function () {
                        return Object(x.m)(Promise.all(
                            [n.e(62), n.e(9)]
                        ).then(n.bind(null,
                            704)))
                    }, name: "buy"
                }, {
                    path: "/buy_newyear",
                    component: function () {
                        return Object(x.m)(n.e(10).then(
                            n.bind(null,
                                705)))
                    }, name: "buy_newyear"
                }, {
                    path: "/download",
                    component: function () {
                        return Object(x.m)(n.e(13).then(
                            n.bind(null,
                                706)))
                    }, name: "download"
                }, {
                    path: "/news",
                    component: function () {
                        return Object(x.m)(n.e(16).then(
                            n.bind(null,
                                707)))
                    }, name: "news"
                }, {
                    path: "/novice",
                    component: function () {
                        return Object(x.m)(n.e(18).then(
                            n.bind(null,
                                708)))
                    }, children: [{
                        path: "",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    20)
                                .then(n
                                    .bind(
                                        null,
                                        709
                                    )))
                        }, name: "novice"
                    }, {
                        path: "page/:page?",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    21)
                                .then(n
                                    .bind(
                                        null,
                                        710
                                    )))
                        }, name: "novice-page-page"
                    }, {
                        path: ":id",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    19)
                                .then(n
                                    .bind(
                                        null,
                                        711
                                    )))
                        }, name: "novice-id"
                    }]
                }, {
                    path: "/problem",
                    component: function () {
                        return Object(x.m)(n.e(22).then(
                            n.bind(null,
                                712)))
                    }, children: [{
                        path: "",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    24)
                                .then(n
                                    .bind(
                                        null,
                                        713
                                    )))
                        }, name: "problem"
                    }, {
                        path: "page/:page?",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    25)
                                .then(n
                                    .bind(
                                        null,
                                        714
                                    )))
                        }, name: "problem-page-page"
                    }, {
                        path: ":id",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    23)
                                .then(n
                                    .bind(
                                        null,
                                        715
                                    )))
                        }, name: "problem-id"
                    }]
                }, {
                    path: "/tutorial",
                    component: function () {
                        return Object(x.m)(n.e(30).then(
                            n.bind(null,
                                716)))
                    }, children: [{
                        path: "",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    32)
                                .then(n
                                    .bind(
                                        null,
                                        717
                                    )))
                        }, name: "tutorial"
                    }, {
                        path: "page/:page?",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    33)
                                .then(n
                                    .bind(
                                        null,
                                        718
                                    )))
                        }, name: "tutorial-page-page"
                    }, {
                        path: ":id",
                        component: function () {
                            return Object(x
                                .m)(n.e(
                                    31)
                                .then(n
                                    .bind(
                                        null,
                                        719
                                    )))
                        }, name: "tutorial-id"
                    }]
                }, {
                    path: "/user",
                    component: function () {
                        return Object(x.m)(n.e(36).then(
                            n.bind(null,
                                720)))
                    }, name: "user"
                }, {
                    path: "/wap",
                    component: function () {
                        return Object(x.m)(n.e(45).then(
                            n.bind(null,
                                721)))
                    }, name: "wap"
                }, {
                    path: "/activity/act_191201",
                    component: function () {
                        return Object(x.m)(n.e(6).then(
                            n.bind(null,
                                722)))
                    }, name: "activity-act_191201"
                }, {
                    path: "/activity/christmas",
                    component: function () {
                        return Object(x.m)(n.e(7).then(
                            n.bind(null,
                                723)))
                    }, name: "activity-christmas"
                }, {
                    path: "/client/checkorder",
                    component: function () {
                        return Object(x.m)(n.e(11).then(
                            n.bind(null,
                                724)))
                    }, name: "client-checkorder"
                }, {
                    path: "/client/meal_mac",
                    component: function () {
                        return Object(x.m)(n.e(12).then(
                            n.bind(null,
                                725)))
                    }, name: "client-meal_mac"
                }, {
                    path: "/spread/game",
                    component: function () {
                        return Object(x.m)(n.e(26).then(
                            n.bind(null,
                                726)))
                    }, name: "spread-game"
                }, {
                    path: "/spread/live",
                    component: function () {
                        return Object(x.m)(n.e(27).then(
                            n.bind(null,
                                727)))
                    }, name: "spread-live"
                }, {
                    path: "/spread/music",
                    component: function () {
                        return Object(x.m)(n.e(28).then(
                            n.bind(null,
                                728)))
                    }, name: "spread-music"
                }, {
                    path: "/spread/video",
                    component: function () {
                        return Object(x.m)(n.e(29).then(
                            n.bind(null,
                                729)))
                    }, name: "spread-video"
                }, {
                    path: "/user/down",
                    component: function () {
                        return Object(x.m)(n.e(34).then(
                            n.bind(null,
                                730)))
                    }, name: "user-down"
                }, {
                    path: "/user/favourable",
                    component: function () {
                        return Object(x.m)(n.e(35).then(
                            n.bind(null,
                                731)))
                    }, name: "user-favourable"
                }, {
                    path: "/user/pwd",
                    component: function () {
                        return Object(x.m)(n.e(37).then(
                            n.bind(null,
                                732)))
                    }, name: "user-pwd"
                }, {
                    path: "/user/record",
                    component: function () {
                        return Object(x.m)(n.e(38).then(
                            n.bind(null,
                                733)))
                    }, name: "user-record"
                }, {
                    path: "/wap/activity",
                    component: function () {
                        return Object(x.m)(n.e(39).then(
                            n.bind(null,
                                734)))
                    }, name: "wap-activity"
                }, {
                    path: "/wap/blank",
                    component: function () {
                        return Object(x.m)(n.e(40).then(
                            n.bind(null,
                                735)))
                    }, name: "wap-blank"
                }, {
                    path: "/wap/buy",
                    component: function () {
                        return Object(x.m)(n.e(41).then(
                            n.bind(null,
                                736)))
                    }, name: "wap-buy"
                }, {
                    path: "/wap/forget_pwd",
                    component: function () {
                        return Object(x.m)(n.e(42).then(
                            n.bind(null,
                                737)))
                    }, name: "wap-forget_pwd"
                }, {
                    path: "/wap/game",
                    component: function () {
                        return Object(x.m)(n.e(43).then(
                            n.bind(null,
                                738)))
                    }, name: "wap-game"
                }, {
                    path: "/wap/gocn",
                    component: function () {
                        return Object(x.m)(n.e(44).then(
                            n.bind(null,
                                739)))
                    }, name: "wap-gocn"
                }, {
                    path: "/wap/login",
                    component: function () {
                        return Object(x.m)(n.e(47).then(
                            n.bind(null,
                                740)))
                    }, name: "wap-login"
                }, {
                    path: "/wap/login_activity",
                    component: function () {
                        return Object(x.m)(n.e(46).then(
                            n.bind(null,
                                741)))
                    }, name: "wap-login_activity"
                }, {
                    path: "/wap/music",
                    component: function () {
                        return Object(x.m)(n.e(48).then(
                            n.bind(null,
                                742)))
                    }, name: "wap-music"
                }, {
                    path: "/wap/notice",
                    component: function () {
                        return Object(x.m)(n.e(50).then(
                            n.bind(null,
                                743)))
                    }, name: "wap-notice"
                }, {
                    path: "/wap/o_reg",
                    component: function () {
                        return Object(x.m)(n.e(51).then(
                            n.bind(null,
                                744)))
                    }, name: "wap-o_reg"
                }, {
                    path: "/wap/problem",
                    component: function () {
                        return Object(x.m)(n.e(53).then(
                            n.bind(null,
                                745)))
                    }, name: "wap-problem"
                }, {
                    path: "/wap/share_url",
                    component: function () {
                        return Object(x.m)(n.e(54).then(
                            n.bind(null,
                                746)))
                    }, name: "wap-share_url"
                }, {
                    path: "/wap/sign_in",
                    component: function () {
                        return Object(x.m)(n.e(55).then(
                            n.bind(null,
                                747)))
                    }, name: "wap-sign_in"
                }, {
                    path: "/wap/sport",
                    component: function () {
                        return Object(x.m)(n.e(56).then(
                            n.bind(null,
                                748)))
                    }, name: "wap-sport"
                }, {
                    path: "/wap/ucenter",
                    component: function () {
                        return Object(x.m)(n.e(57).then(
                            n.bind(null,
                                749)))
                    }, name: "wap-ucenter"
                }, {
                    path: "/wap/waplive",
                    component: function () {
                        return Object(x.m)(n.e(58).then(
                            n.bind(null,
                                750)))
                    }, name: "wap-waplive"
                }, {
                    path: "/wap/wapvideo",
                    component: function () {
                        return Object(x.m)(n.e(59).then(
                            n.bind(null,
                                751)))
                    }, name: "wap-wapvideo"
                }, {
                    path: "/news/page/:page?",
                    component: function () {
                        return Object(x.m)(n.e(17).then(
                            n.bind(null,
                                752)))
                    }, name: "news-page-page"
                }, {
                    path: "/wap/notice/:sn",
                    component: function () {
                        return Object(x.m)(n.e(49).then(
                            n.bind(null,
                                753)))
                    }, name: "wap-notice-sn"
                }, {
                    path: "/wap/problem/:sn",
                    component: function () {
                        return Object(x.m)(n.e(52).then(
                            n.bind(null,
                                754)))
                    }, name: "wap-problem-sn"
                }, {
                    path: "/activity/:id",
                    component: function () {
                        return Object(x.m)(n.e(5).then(
                            n.bind(null,
                                755)))
                    }, name: "activity-id"
                }, {
                    path: "/news/:id",
                    component: function () {
                        return Object(x.m)(n.e(15).then(
                            n.bind(null,
                                756)))
                    }, name: "news-id"
                }, {
                    path: "/",
                    component: function () {
                        return Object(x.m)(n.e(14).then(
                            n.bind(null,
                                699)))
                    }, name: "index"
                }],
                fallback: !1
            };

            function k() {
                return new v.a(w)
            }
            var C = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function (t, e) {
                        var n = e.parent,
                            data = e.data,
                            o = e.props,
                            r = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, l = n.$nuxt.nuxt.transitions,
                            d = n.$nuxt.nuxt.defaultTransition,
                            f = 0; n;) n.$vnode && n.$vnode.data
                            .nuxtChild && f++, n = n.$parent;
                        data.nuxtChildDepth = f;
                        var h = l[f] || d,
                            m = {};
                        O.forEach((function (t) {
                            void 0 !== h[t] && (m[t] =
                                h[t])
                        }));
                        var v = {};
                        j.forEach((function (t) {
                            "function" == typeof h[
                                t] && (v[t] = h[
                                t].bind(c))
                        }));
                        var x = v.beforeEnter;
                        if (v.beforeEnter = function (t) {
                            if (window.$nuxt.$nextTick((
                                function () {
                                    window.$nuxt.$emit(
                                        "triggerScroll"
                                    )
                                })), x) return x.call(c, t)
                        }, !1 === h.css) {
                            var y = v.leave;
                            (!y || y.length < 2) && (v.leave =
                                function (t, e) {
                                    y && y.call(c, t), c.$nextTick(
                                        e)
                                })
                        }
                        var _ = r("routerView", data);
                        return o.keepAlive && (_ = r(
                            "keep-alive", {
                                props: o.keepAliveProps
                            }, [_])), r("transition", {
                            props: m,
                            on: v
                        }, [_])
                    }
                },
                O = ["name", "mode", "appear", "css", "type",
                    "duration", "enterClass", "leaveClass",
                    "appearClass", "enterActiveClass",
                    "enterActiveClass", "leaveActiveClass",
                    "appearActiveClass", "enterToClass",
                    "leaveToClass", "appearToClass"
                ],
                j = ["beforeEnter", "enter", "afterEnter",
                    "enterCancelled", "beforeLeave", "leave",
                    "afterLeave", "leaveCancelled", "beforeAppear",
                    "appear", "afterAppear", "appearCancelled"
                ],
                $ = {
                    layout: "simple",
                    props: ["error"]
                },
                S = (n(279), n(6)),
                I = Object(S.a)($, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "error-con"
                    }, [n("div", {
                            staticClass: "logo-e"
                        }), t._v(" "), 404 == t.error
                        .statusCode ? n("h2", [t._v(
                            "404 - 页面不存在")]) : t._e(),
                        t._v(" "), 500 == t.error.statusCode ?
                        n("h2", [t._v("500 - 服务器错误")]) :
                        t._e(), t._v(" "), 999 == t
                        .error.statusCode ? n("h2", [
                            t._v("网站正在备案...")
                        ]) : t._e(), t._v(" "), 999 !=
                        t.error.statusCode ? n("ul", [
                            n("li", [n(
                                "nuxt-link", {
                                    attrs: {
                                        to: "/"
                                    }
                                }, [t._v(
                                    "返回首页"
                                )])], 1)
                        ]) : t._e()
                    ])
                }), [], !1, null, "777c955d", null).exports,
                T = (n(49), n(50), n(81), n(76)),
                E = {
                    name: "Nuxt",
                    components: {
                        NuxtChild: C,
                        NuxtError: I
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function (t) {
                        this.displayingNuxtError && (this.errorFromNuxtError =
                            t, this.$forceUpdate())
                    }, computed: {
                        routerViewKey: function () {
                            if (void 0 !== this.nuxtChildKey ||
                                this.$route.matched.length >
                                1) return this.nuxtChildKey ||
                                Object(x.c)(this.$route
                                    .matched[0].path)(
                                    this.$route.params);
                            var t = Object(T.a)(this.$route
                                .matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" ==
                                    typeof n.key ? n.key(
                                        this.$route) :
                                    n.key
                            }
                            return /\/$/.test(t.path) ?
                                this.$route.path : this.$route
                                .path.replace(/\/$/, "")
                        }
                    }, beforeCreate: function () {
                        c.a.util.defineReactive(this, "nuxt",
                            this.$root.$options.nuxt)
                    }, render: function (t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ?
                            (this.$nextTick((function () {
                                return e.errorFromNuxtError = !
                                    1
                            })), t("div", {}, [t("h2",
                                    "An error occured while showing the error page"
                                ), t("p",
                                    "Unfortunately an error occured and while showing the error page another error occured"
                                ), t("p",
                                    "Error details: ".concat(
                                        this.errorFromNuxtError
                                        .toString())),
                                t("nuxt-link", {
                                        props: {
                                            to: "/"
                                        }
                                    },
                                    "Go back to home")
                            ])) : (this.displayingNuxtError = !
                                0, this.$nextTick((function () {
                                    return e.displayingNuxtError = !
                                        1
                                })), t(I, {
                                    props: {
                                        error: this.nuxt.err
                                    }
                                })) : t("NuxtChild", {
                                key: this.routerViewKey,
                                props: this.$props
                            })
                    }
                },
                P = (n(64), n(65), n(63), {
                    name: "NuxtLoading",
                    data: function () {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    }, computed: {
                        left: function () {
                            return !(!this.continuous &&
                                !this.rtl) && (this
                                .rtl ? this.reversed ?
                                "0px" : "auto" :
                                this.reversed ?
                                "auto" : "0px")
                        }
                    }, beforeDestroy: function () {
                        this.clear()
                    }, methods: {
                        clear: function () {
                            clearInterval(this._timer),
                                clearTimeout(this._throttle),
                                this._timer = null
                        }, start: function () {
                            var t = this;
                            return this.clear(), this.percent =
                                0, this.reversed = !1,
                                this.skipTimerCount = 0,
                                this.canSucceed = !0,
                                this.throttle ? this._throttle =
                                setTimeout((function () {
                                    return t.startTimer()
                                }), this.throttle) :
                                this.startTimer(), this
                        }, set: function (t) {
                            return this.show = !0, this
                                .canSucceed = !0, this.percent =
                                Math.min(100, Math.max(
                                    0, Math.floor(t)
                                )), this
                        }, get: function () {
                            return this.percent
                        }, increase: function (t) {
                            return this.percent = Math.min(
                                100, Math.floor(
                                    this.percent +
                                    t)), this
                        }, decrease: function (t) {
                            return this.percent = Math.max(
                                0, Math.floor(this.percent -
                                    t)), this
                        }, pause: function () {
                            return clearInterval(this._timer),
                                this
                        }, resume: function () {
                            return this.startTimer(),
                                this
                        }, finish: function () {
                            return this.percent = this.reversed ?
                                0 : 100, this.hide(),
                                this
                        }, hide: function () {
                            var t = this;
                            return this.clear(),
                                setTimeout((function () {
                                    t.show = !1,
                                        t.$nextTick(
                                            (
                                                function () {
                                                    t
                                                        .percent =
                                                        0,
                                                        t
                                                        .reversed = !
                                                        1
                                                }
                                            ))
                                }), 500), this
                        }, fail: function (t) {
                            return this.canSucceed = !1,
                                this
                        }, startTimer: function () {
                            var t = this;
                            this.show || (this.show = !
                                    0), void 0 === this
                                ._cut && (this._cut =
                                    1e4 / Math.floor(
                                        this.duration)),
                                this._timer =
                                setInterval((function () {
                                    t.skipTimerCount >
                                        0 ? t.skipTimerCount--
                                        : (t.reversed ?
                                            t.decrease(
                                                t
                                                ._cut
                                            ) :
                                            t.increase(
                                                t
                                                ._cut
                                            ),
                                            t.continuous &&
                                            (t.percent >=
                                                100 ||
                                                t
                                                .percent <=
                                                0
                                            ) &&
                                            (t.skipTimerCount =
                                                1,
                                                t
                                                .reversed = !
                                                t
                                                .reversed
                                            ))
                                }), 100)
                        }
                    }, render: function (t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this
                                    .skipTimerCount >
                                    0,
                                "nuxt-progress-failed":
                                    !this.canSucceed
                            },
                            style: {
                                width: this.percent +
                                    "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                z = (n(281), Object(S.a)(P, void 0, void 0, !1,
                    null, null, null).exports),
                N = (n(283), n(290), n(292), n(97), n(96), n(66), [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "footer-main-top"
                        }, [n("span", {
                            staticClass: "item"
                        }, [n("i", {
                            staticClass: "iconfont"
                        }, [t._v("")]), t._v(
                            "\n        关注公众号领时长\n      "
                        )]), t._v(" "), n("span", {
                            staticClass: "item"
                        }, [n("i", {
                            staticClass: "iconfont"
                        }, [t._v("")]), t._v(
                            "\n        AES安全和加密\n      "
                        )]), t._v(" "), n("span", {
                            staticClass: "item"
                        }, [n("i", {
                            staticClass: "iconfont"
                        }, [t._v("")]), t._v(
                            "\n        全球网络节点覆盖\n      "
                        )]), t._v(" "), n("span", {
                            staticClass: "item"
                        }, [n("i", {
                            staticClass: "iconfont"
                        }, [t._v("")]), t._v(
                            "\n        多平台系统支持\n      "
                        )]), t._v(" "), n("span", {
                            staticClass: "item"
                        }, [n("i", {
                            staticClass: "iconfont"
                        }, [t._v("")]), t._v(
                            "\n        专业客服技术支持\n      "
                        )])])
                    },
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", {
                            staticClass: "left"
                        }, [e("img", {
                            staticClass: "logo-img logo-die",
                            attrs: {
                                src: n(294),
                                alt: "海龟LOGO"
                            }
                        }), this._v(" "), e("span", {
                            staticClass: "img-item"
                        }, [e("img", {
                            attrs: {
                                src: n(
                                    295
                                ),
                                alt: "微博"
                            }
                        }), this._v(" "), e(
                            "p", [this._v(
                                "微博二维码"
                            )])]), this._v(" "), e(
                            "span", {
                                staticClass: "img-item"
                            }, [e("img", {
                                attrs: {
                                    src: n(
                                        187
                                    ),
                                    alt: "微信"
                                }
                            }), this._v(" "), e(
                                "p", [this._v(
                                    "微信二维码"
                                )])])])
                    },
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("li", [e("a", {
                            attrs: {
                                title: "关于我们"
                            }
                        }, [this._v("关于我们")])])
                    },
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("li", [e("a", {
                            attrs: {
                                title: "使用说明"
                            }
                        }, [this._v("使用说明")])])
                    }
                ]),
                A = n(3),
                M = {
                    data: function () {
                        return {
                            about_links: [],
                            use_links: [],
                            oem: ""
                        }
                    }, created: function () {
                        var t = this;
                        A.a.getHelpArticleList({
                            code: "sys_article_about",
                            page: 1,
                            pre_page: 5
                        }).then((function (e) {
                            e.data.ret && (t.about_links =
                                e.data.ret.list
                            )
                        })), A.a.getHelpArticleList({
                            code: "sys_article_help_insall",
                            page: 1,
                            pre_page: 5,
                            _oem: "default"
                        }).then((function (e) {
                            e.data.ret && (t.use_links =
                                e.data.ret.list
                            )
                        }))
                    }, mounted: function () {
                        console.log(void 0)
                    }
                },
                footer = (n(296), n(298), Object(S.a)(M, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("footer", {
                        staticClass: "footer"
                    }, [n("div", {
                            staticClass: "footer-main"
                        }, [t._m(0), t._v(
                            " "), n(
                            "div", {
                                staticClass: "footer-main-content"
                            }, [t._m(1),
                                t._v(
                                    " "
                                ), n(
                                    "div", {
                                        staticClass: "right"
                                    }, [
                                        n(
                                            "ul", {
                                                staticClass: "abouts_us"
                                            }, [
                                                t
                                                ._m(
                                                    2
                                                ),
                                                t
                                                ._v(
                                                    " "
                                                ),
                                                t
                                                .about_links[
                                                    0
                                                ] ?
                                                t
                                                ._l(
                                                    t
                                                    .about_links, (
                                                        function (
                                                            e
                                                        ) {
                                                            return
                                                                n(
                                                                    "li", {
                                                                        key: e
                                                                            .id
                                                                    }, [
                                                                        n(
                                                                            "nuxt-link", {
                                                                                staticClass: "mylink",
                                                                                attrs: {
                                                                                    to: {
                                                                                        path: "/about/",
                                                                                        name: "about-id",
                                                                                        params: {
                                                                                            id: e
                                                                                                .id
                                                                                        }
                                                                                    },
                                                                                    title: e
                                                                                        .name,
                                                                                    target: "_blank"
                                                                                }
                                                                            }, [
                                                                                t
                                                                                ._v(
                                                                                    t
                                                                                    ._s(
                                                                                        e
                                                                                        .name
                                                                                    )
                                                                                )
                                                                            ]
                                                                        )
                                                                    ],
                                                                    1
                                                                )
                                                        }
                                                    )
                                                ) :
                                                t
                                                ._e()
                                            ],
                                            2
                                        ),
                                        t
                                        ._v(
                                            " "
                                        ),
                                        n(
                                            "ul", [
                                                t
                                                ._m(
                                                    3
                                                ),
                                                t
                                                ._v(
                                                    " "
                                                ),
                                                t
                                                .use_links[
                                                    0
                                                ] ?
                                                t
                                                ._l(
                                                    t
                                                    .use_links, (
                                                        function (
                                                            e
                                                        ) {
                                                            return
                                                                n(
                                                                    "li", {
                                                                        key: e
                                                                            .id
                                                                    }, [
                                                                        n(
                                                                            "nuxt-link", {
                                                                                staticClass: "mylink",
                                                                                attrs: {
                                                                                    to: {
                                                                                        path: "/novice/",
                                                                                        name: "novice-id",
                                                                                        params: {
                                                                                            id: e
                                                                                                .id
                                                                                        }
                                                                                    },
                                                                                    title: e
                                                                                        .name,
                                                                                    target: "_blank"
                                                                                }
                                                                            }, [
                                                                                t
                                                                                ._v(
                                                                                    t
                                                                                    ._s(
                                                                                        e
                                                                                        .name
                                                                                    )
                                                                                )
                                                                            ]
                                                                        )
                                                                    ],
                                                                    1
                                                                )
                                                        }
                                                    )
                                                ) :
                                                t
                                                ._e()
                                            ],
                                            2
                                        )
                                    ])
                            ])]), t._v(" "), t._e(),
                        t._v(" "), t._e(), t._v(
                            " "), n("div", {
                            staticClass: "address"
                        }, [t._v(
                            "\n    版权所有 江苏乐而思蜀信息科技有限公司   |  \n    "
                        ), n("a", {
                            attrs: {
                                target: "_blank",
                                href: "http://www.beian.miit.gov.cn/",
                                title: "苏ICP备19052236号-8 "
                            }
                        }, [t._v(
                            "苏ICP备19052236号-8 "
                        )])])
                    ])
                }), N, !1, null, "5fd57f34", null).exports),
                R = n(82),
                L = {
                    data: function () {
                        return {
                            user: {
                                name: ""
                            },
                            img_url: "",
                            tips: "",
                            toa_show: "",
                            navShowIndex: 0,
                            activity: {},
                            buy: {}
                        }
                    }, components: {
                        myToast: R.a
                    }, methods: {
                        login: function () {
                            this._modal.login()
                        }, topTip: function () {
                            var t = this;
                            A.a.topTip({
                                _oem: "default"
                            }).then((function (e) {
                                t.activity = e.data
                                    .ret.activity,
                                    t.buy = e.data
                                    .ret.buy
                            }))
                        }, logout: function () {
                            this.tips = "退出登录", this.toa_show =
                                1;
                            var t = this;
                            setTimeout((function () {
                                    t.toa_show = 0
                                }), 3e3), this.$store.commit(
                                    "user/logout"), this.$store
                                .commit(
                                    "app/changeNavShowIndex",
                                    0), t.$router.go(0)
                        }, register: function () {
                            this._modal.register()
                        }, changeNavShowIndex: function (t) {
                            var e = t.target.dataset.index;
                            this.navShowIndex = e, this.$store
                                .commit(
                                    "app/changeNavShowIndex",
                                    e), this.$store.commit(
                                    "app/changeHelpShowIndex",
                                    0)
                        }
                    }, computed: {
                        getNavShowIndex: function () {
                            return this.$store.state.app.navShowIndex
                        }, getUserName: function () {
                            return this.$store.state.user.userInfo
                                .username
                        }
                    }, watch: {
                        getNavShowIndex: function (i) {
                            this.navShowIndex = i
                        }, getUserName: function (t) {
                            this.$set(this.user, "name", t)
                        }
                    }, mounted: function () {
                        var t = this;
                        t.topTip(), t.navShowIndex =
                            sessionStorage.getItem(
                                "navShowIndex") || t.$store.state
                            .app.navShowIndex;
                        var e = {
                            username: "",
                            session: ""
                        };
                        (e = "undefined" != localStorage.getItem(
                            "userInfo") && localStorage.getItem(
                            "userInfo") ? JSON.parse(
                            localStorage.getItem("userInfo")
                        ) : t.$store.state.user.userInfo).session
                            && A.a.verifyUser({
                                _session: e.session
                            }).then((function (n) {
                                1 == n.data.code ? t.$store
                                    .commit(
                                        "user/logout") :
                                    (t.$set(t.user,
                                        "name", e.username
                                    ), t.$store.commit(
                                        "user/saveUserInfo",
                                        e))
                            }))
                    }
                },
                header = (n(303), Object(S.a)(L, (function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("header", {
                        staticClass: "header"
                    }, [o("div", {
                        staticClass: "header_main"
                    }, [o("nuxt-link", {
                            staticClass: "logo",
                            attrs: {
                                to: "/"
                            }
                        }, [o("img", {
                            attrs: {
                                src: n(
                                    300
                                ),
                                alt: "海龟加速器"
                            }
                        })]), t._v(" "),
                        t.user.name ? t
                        ._e() : o("div", {
                            staticClass: "nav-u"
                        }, [o("a", {
                            directives: [{
                                name: "action-track",
                                rawName: "v-action-track",
                                value: {
                                    code: "nav-u1",
                                    type: "nav"
                                },
                                expression: "{code:'nav-u1',type:'nav'}"
                            }],
                            staticClass: "loginBtn active",
                            on: {
                                click: t
                                    .login
                            }
                        }, [
                            t
                            ._v(
                                "登录"
                            )
                        ]), t._v(
                            " "
                        ), o(
                            "a", {
                                directives: [{
                                    name: "action-track",
                                    rawName: "v-action-track",
                                    value: {
                                        code: "nav-u1",
                                        type: "nav"
                                    },
                                    expression: "{code:'nav-u1',type:'nav'}"
                                }],
                                staticClass: "regBtn",
                                on: {
                                    click: t
                                        .register
                                }
                            }, [
                                t
                                ._v(
                                    "注册"
                                )
                            ])]), t._v(
                            " "), t.user
                        .name ? o("div", {
                            staticClass: "nav-user",
                            class: {
                                acuser: t
                                    .user
                                    .name
                            }
                        }, [o("div", {
                                    directives: [{
                                        name: "action-track",
                                        rawName: "v-action-track",
                                        value: {
                                            code: "user",
                                            type: "nav"
                                        },
                                        expression: "{code:'user',type:'nav'}"
                                    }],
                                    staticClass: "name"
                                }, [
                                    o(
                                        "nuxt-link", {
                                            staticClass: "logo",
                                            attrs: {
                                                to: "/user"
                                            }
                                        }, [
                                            t
                                            ._v(
                                                t
                                                ._s(
                                                    t
                                                    .user
                                                    .name
                                                )
                                            )
                                        ]
                                    ),
                                    t
                                    ._v(
                                        " "
                                    ),
                                    o(
                                        "i", {
                                            staticClass: "user-head"
                                        }
                                    )
                                ],
                                1),
                            t._v(
                                " "
                            ), o(
                                "div", {
                                    staticClass: "nav-user-select"
                                }, [
                                    o(
                                        "nuxt-link", {
                                            directives: [{
                                                name: "action-track",
                                                rawName: "v-action-track",
                                                value: {
                                                    code: "user1",
                                                    type: "nav"
                                                },
                                                expression: "{code:'user1',type:'nav'}"
                                            }],
                                            attrs: {
                                                to: "/user/"
                                            }
                                        }, [
                                            t
                                            ._v(
                                                "个人中心"
                                            )
                                        ]
                                    ),
                                    t
                                    ._v(
                                        " "
                                    ),
                                    o(
                                        "nuxt-link", {
                                            directives: [{
                                                name: "action-track",
                                                rawName: "v-action-track",
                                                value: {
                                                    code: "user2",
                                                    type: "nav"
                                                },
                                                expression: "{code:'user2',type:'nav'}"
                                            }],
                                            attrs: {
                                                to: "/user/pwd/"
                                            }
                                        }, [
                                            t
                                            ._v(
                                                "修改密码"
                                            )
                                        ]
                                    ),
                                    t
                                    ._v(
                                        " "
                                    ),
                                    o(
                                        "nuxt-link", {
                                            directives: [{
                                                name: "action-track",
                                                rawName: "v-action-track",
                                                value: {
                                                    code: "user3",
                                                    type: "nav"
                                                },
                                                expression: "{code:'user3',type:'nav'}"
                                            }],
                                            attrs: {
                                                to: "/user/favourable/"
                                            }
                                        }, [
                                            t
                                            ._v(
                                                "优惠券"
                                            )
                                        ]
                                    ),
                                    t
                                    ._v(
                                        " "
                                    ),
                                    o(
                                        "nuxt-link", {
                                            directives: [{
                                                name: "action-track",
                                                rawName: "v-action-track",
                                                value: {
                                                    code: "user4",
                                                    type: "nav"
                                                },
                                                expression: "{code:'user4',type:'nav'}"
                                            }],
                                            attrs: {
                                                to: "/user/record/"
                                            }
                                        }, [
                                            t
                                            ._v(
                                                "充值记录"
                                            )
                                        ]
                                    ),
                                    t
                                    ._v(
                                        " "
                                    ),
                                    o(
                                        "a", {
                                            directives: [{
                                                name: "action-track",
                                                rawName: "v-action-track",
                                                value: {
                                                    code: "nav5",
                                                    type: "nav"
                                                },
                                                expression: "{code:'nav5',type:'nav'}"
                                            }],
                                            staticClass: "user_exit",
                                            attrs: {
                                                title: "退出登录"
                                            },
                                            on: {
                                                click: t
                                                    .logout
                                            }
                                        }, [
                                            t
                                            ._v(
                                                "退出登录"
                                            )
                                        ]
                                    )
                                ],
                                1)
                        ]) : t._e(), t._v(
                            " "), o(
                            "div", {
                                staticClass: "nav",
                                on: {
                                    click: t
                                        .changeNavShowIndex
                                }
                            }, [o(
                                    "nuxt-link", {
                                        class: {
                                            "nuxt-link-exact-active": 0 ==
                                                t
                                                .navShowIndex
                                        },
                                        attrs: {
                                            to: "/",
                                            "data-index": "0"
                                        }
                                    }, [
                                        t
                                        ._v(
                                            "首页"
                                        )
                                    ]),
                                t._v(
                                    " "
                                ), o(
                                    "nuxt-link", {
                                        directives: [{
                                            name: "action-track",
                                            rawName: "v-action-track",
                                            value: {
                                                code: "nav1",
                                                type: "nav"
                                            },
                                            expression: "{code:'nav1',type:'nav'}"
                                        }, {
                                            name: "track-submit",
                                            rawName: "v-track-submit",
                                            value: {
                                                code: 4
                                            },
                                            expression: "{code:4}"
                                        }],
                                        class: {
                                            "nuxt-link-exact-active": 1 ==
                                                t
                                                .navShowIndex
                                        },
                                        attrs: {
                                            to: "/download",
                                            "data-index": "1"
                                        }
                                    }, [
                                        t
                                        ._v(
                                            "下载"
                                        )
                                    ]),
                                t._v(
                                    " "
                                ), o(
                                    "nuxt-link", {
                                        directives: [{
                                            name: "action-track",
                                            rawName: "v-action-track",
                                            value: {
                                                code: "nav2",
                                                type: "nav"
                                            },
                                            expression: "{code:'nav2',type:'nav'}"
                                        }, {
                                            name: "track-submit",
                                            rawName: "v-track-submit",
                                            value: {
                                                code: 21
                                            },
                                            expression: "{code:21}"
                                        }],
                                        class: {
                                            "nuxt-link-exact-active": 2 ==
                                                t
                                                .navShowIndex
                                        },
                                        attrs: {
                                            to: "/buy",
                                            "data-index": "2"
                                        }
                                    }, [
                                        t
                                        ._v(
                                            "\n        套餐购买\n        "
                                        ),
                                        1 ==
                                        t
                                        .buy
                                        .btn_show ?
                                        o(
                                            "img", {
                                                attrs: {
                                                    src: t
                                                        .buy
                                                        .img_url,
                                                    alt: ""
                                                }
                                            }
                                        ) :
                                        t
                                        ._e()
                                    ]),
                                t._v(
                                    " "
                                ), o(
                                    "nuxt-link", {
                                        directives: [{
                                            name: "action-track",
                                            rawName: "v-action-track",
                                            value: {
                                                code: "nav3",
                                                type: "nav"
                                            },
                                            expression: "{code:'nav3',type:'nav'}"
                                        }, {
                                            name: "track-submit",
                                            rawName: "v-track-submit",
                                            value: {
                                                code: 12
                                            },
                                            expression: "{code:12}"
                                        }],
                                        class: {
                                            "nuxt-link-exact-active": 3 ==
                                                t
                                                .navShowIndex
                                        },
                                        attrs: {
                                            to: "/activity",
                                            "data-index": "3"
                                        }
                                    }, [
                                        t
                                        ._v(
                                            "\n        热门活动\n        "
                                        ),
                                        1 ==
                                        t
                                        .activity
                                        .btn_show ?
                                        o(
                                            "img", {
                                                attrs: {
                                                    src: t
                                                        .activity
                                                        .img_url,
                                                    alt: ""
                                                }
                                            }
                                        ) :
                                        t
                                        ._e()
                                    ]),
                                t._v(
                                    " "
                                ), o(
                                    "nuxt-link", {
                                        directives: [{
                                            name: "action-track",
                                            rawName: "v-action-track",
                                            value: {
                                                code: "nav4",
                                                type: "nav"
                                            },
                                            expression: "{code:'nav4',type:'nav'}"
                                        }, {
                                            name: "track-submit",
                                            rawName: "v-track-submit",
                                            value: {
                                                code: 13
                                            },
                                            expression: "{code:13}"
                                        }],
                                        class: {
                                            "nuxt-link-exact-active": 4 ==
                                                t
                                                .navShowIndex
                                        },
                                        attrs: {
                                            to: "/problem",
                                            "data-index": "4"
                                        }
                                    }, [
                                        t
                                        ._v(
                                            "帮助中心"
                                        )
                                    ])
                            ], 1), t._v(
                            " "), o(
                            "myToast", {
                                attrs: {
                                    title: t
                                        .tips,
                                    bottom: "150px",
                                    show: t
                                        .toa_show
                                }
                            })
                    ], 1)])
                }), [], !1, null, "650ca326", null).exports),
                B = {
                    data: function () {
                        return {
                            toTop: "",
                            server_qq_group: "",
                            service_qqurl: ""
                        }
                    }, methods: {
                        backTop: function () {
                            var t = this,
                                e = setInterval((function () {
                                    t.toTop =
                                        document.documentElement
                                        .scrollTop ||
                                        document.body
                                        .scrollTop;
                                    var n = Math.floor(-
                                        t.toTop /
                                        6);
                                    0 == t.toTop &&
                                        clearInterval(
                                            e),
                                        document.documentElement
                                        .scrollTop =
                                        document.body
                                        .scrollTop =
                                        t.toTop + n
                                }), 30)
                        }, rightLink: function () {
                            var t = this;
                            A.a.rightLink({
                                _oem: this._Settings
                                    .OEM
                            }).then((function (e) {
                                t.server_qq_group =
                                    e.data.ret.server_qq_group,
                                    t.service_qqurl =
                                    e.data.ret.service_qqurl,
                                    t.server_qq_group =
                                    "https://jq.qq.com/?_wv=1027&k=54zmawi"
                            }))
                        }
                    }, mounted: function () {
                        this.rightLink()
                    }
                },
                U = Object(S.a)(B, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "right-link"
                    }, [t._m(0), t._v(" "),
                        n("a", {
                            staticClass: "qq",
                            attrs: {
                                href: t
                                    .server_qq_group,
                                target: "_blank"
                            }
                        }, [n("i", {
                                staticClass: "iconfont"
                            }, [t._v(
                                ""
                            )]), t._v(
                                " "), n(
                                "span", [
                                    t._v(
                                        "用户交流群"
                                    )
                                ]), t._v(
                                " "), t
                            ._m(1)
                        ]), t._v(" "), n(
                            "a", {
                                staticClass: "return-top",
                                on: {
                                    click: function (
                                        e
                                    ) {
                                        return
                                            t
                                            .backTop()
                                    }
                                }
                            }, [n("i", {
                                staticClass: "iconfont"
                            }, [t._v(
                                ""
                            )]), t._v(
                                " "), n(
                                "span", [
                                    t._v(
                                        "返回顶部"
                                    )
                                ])])
                    ])])
                }), [
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("a", {
                            staticClass: "wechat"
                        }, [e("i", {
                                staticClass: "iconfont"
                            }, [this._v("")]), this._v(
                                " "), e("span", [this._v(
                                "微信公众号")]), this._v(" "),
                            e("p", [e("img", {
                                attrs: {
                                    src: "/img/wx.jpg",
                                    alt: ""
                                }
                            })])
                        ])
                    },
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("p", [e("img", {
                            attrs: {
                                src: "/img/qq.png",
                                alt: ""
                            }
                        })])
                    }
                ], !1, null, null, null).exports,
                D = n(2),
                H = n(7),
                F = n.n(H),
                Q = {
                    visit: function () {
                        var s = F.a.get("source"),
                            t = F.a.get("keyword"),
                            e = F.a.get("orgin");
                        e && F.a.set("orgin", ""), A.a.user_event_track({
                            code: s + "_code_" + t,
                            oem: D.a.OEM,
                            device_os: "web",
                            type: "keywords",
                            origin: e
                        })
                    }, agent_click: function () {
                        var t = F.a.get("agent");
                        t && A.a.agentSubmit({
                            type: "click",
                            url: "agent=" + t
                        })
                    }, reg: function () {
                        var s = F.a.get("source"),
                            t = F.a.get("keyword"),
                            e = F.a.get("agent");
                        t & s && A.a.user_event_track({
                            code: s + "_code_" + t,
                            oem: D.a.OEM,
                            device_os: "web",
                            type: "keywords_reg"
                        }), e && A.a.agentSubmit({
                            type: "reg",
                            url: "agent=" + e
                        })
                    }, download: function () {
                        var s = F.a.get("source"),
                            t = F.a.get("keyword"),
                            e = F.a.get("agent");
                        A.a.user_event_track({
                            code: s + "_code_" + t,
                            oem: D.a.OEM,
                            device_os: "web",
                            type: "keywords_down"
                        }), A.a.agentSubmit({
                            type: "reg",
                            url: "agent=" + e
                        })
                    }
                },
                J = n(35);

            function X(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(
                            object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var Y = {
                    data: function () {
                        return {
                            stat: {
                                login: !1,
                                forget: !1,
                                register: !1,
                                coupon: !1,
                                regwin: !1,
                                paywin: !1,
                                edit: !1
                            },
                            registerInfo: {
                                username: "",
                                password: ""
                            },
                            registerErrorMsg: "",
                            registerBtn: !0,
                            loginBtn: !0,
                            emailCodeBtn: !0,
                            forgetPsdBtn: !0,
                            exchangeSnBtn: !0,
                            loginInfo: {
                                username: "",
                                password: ""
                            },
                            loginErrorMsg: "",
                            userInfo: {},
                            forgetInfo: {
                                username: "",
                                newPsd: "",
                                verify: "",
                                code: ""
                            },
                            forgetErrorMsg: "",
                            code_url: "",
                            actimer: !1,
                            timeNum: 60,
                            timer: null,
                            exchange_sn: "",
                            getCouponErrorMsg: ""
                        }
                    }, methods: {
                        toggle: function (t) {
                            this.stat[t] = !this.stat[t]
                        }, show: function (t, e) {
                            if (!e) {
                                var n = this;
                                Object.keys(n.stat).map((
                                    function (s) {
                                        n.stat[s] = !
                                            1
                                    }))
                            }
                            this.stat[t] = !0
                        }, hide: function (t) {
                            this.stat[t] = !1, "register" ==
                                t && (this.registerInfo = {
                                    username: "",
                                    password: ""
                                }), "login" == t && (this.loginInfo = {
                                    username: "",
                                    password: ""
                                }), "forget" == t && (this.forgetInfo = {
                                        username: "",
                                        newPsd: "",
                                        verify: "",
                                        code: ""
                                    }, this.actimer = !1,
                                    this.timeNum = 60,
                                    clearInterval(this.timer)
                                ), "coupon" == t && (this.exchange_sn =
                                    "")
                        }, do_login: function () {
                            var t = this,
                                e = t.loginInfo;
                            if (e.username && e.password) {
                                if (!t.loginBtn) return t.loginErrorMsg =
                                    "登录中...", void t.$children[
                                        1].$emit(
                                        "bridge");
                                t.loginBtn = !1, A.a.login(
                                    function (t) {
                                        for (var i = 1; i <
                                            arguments.length; i++
                                        ) {
                                            var source =
                                                null !=
                                                arguments[
                                                    i] ?
                                                arguments[
                                                    i] : {};
                                            i % 2 ? X(
                                                    Object(
                                                        source
                                                    ), !
                                                    0).forEach(
                                                    (
                                                        function (
                                                            e
                                                        ) {
                                                            Object
                                                                (
                                                                    r
                                                                    .a
                                                                )
                                                                (
                                                                    t,
                                                                    e,
                                                                    source[
                                                                        e
                                                                    ]
                                                                )
                                                        }
                                                    )) :
                                                Object.getOwnPropertyDescriptors ?
                                                Object.defineProperties(
                                                    t,
                                                    Object
                                                    .getOwnPropertyDescriptors(
                                                        source
                                                    )) :
                                                X(
                                                    Object(
                                                        source
                                                    )).forEach(
                                                    (
                                                        function (
                                                            e
                                                        ) {
                                                            Object
                                                                .defineProperty(
                                                                    t,
                                                                    e,
                                                                    Object
                                                                    .getOwnPropertyDescriptor(
                                                                        source,
                                                                        e
                                                                    )
                                                                )
                                                        }
                                                    ))
                                        }
                                        return t
                                    }({}, e, {
                                        _language: "_zh_cn",
                                        _oem: D.a.OEM
                                    })).then((function (
                                    e) {
                                    t.loginBtn = !
                                        0, 0 ==
                                        e.data.code ?
                                        (t.loginErrorMsg =
                                            "登录成功",
                                            t.$children[
                                                1
                                            ].$emit(
                                                "bridge"
                                            ),
                                            t.userInfo =
                                            e.data
                                            .ret,
                                            t.$store
                                            .commit(
                                                "user/saveUserInfo",
                                                t
                                                .userInfo
                                            ),
                                            J.a
                                            .track_click(
                                                1
                                            ),
                                            setTimeout(
                                                (
                                                    function () {
                                                        t
                                                            .$set(
                                                                t
                                                                .stat,
                                                                "login", !
                                                                1
                                                            )
                                                    }
                                                ),
                                                1e3
                                            )) :
                                        (t.loginErrorMsg =
                                            e.data
                                            .msg,
                                            t.$children[
                                                1
                                            ].$emit(
                                                "bridge"
                                            ))
                                }))
                            } else t.loginErrorMsg =
                                "请输入账户或密码！", t.$children[1]
                                .$emit("bridge")
                        }, change_code: function () {
                            var t = this;
                            A.a.getVerifyImg().then((
                                function (e) {
                                    t.code_url = e.config
                                        .url + "?" +
                                        parseInt(
                                            100 *
                                            Math.random()
                                        )
                                }))
                        }, getEmailCode: function () {
                            var t = this;
                            return t.forgetInfo.username ?
                                t.emailCodeBtn ? (t.emailCodeBtn = !
                                    1, void A.a.getEmailCode({
                                        username: t.forgetInfo
                                            .username,
                                        code_type: "find_pass",
                                        verify: t.forgetInfo
                                            .verify,
                                        _oem: D.a.OEM,
                                        _device_os: "web",
                                        _language: "_zh_cn"
                                    }).then((function (e) {
                                        t.emailCodeBtn = !
                                            0, t.change_code(),
                                            0 == e.data
                                            .code ?
                                            (t.forgetErrorMsg =
                                                "获取成功",
                                                t.startTimer()
                                            ) : t.forgetErrorMsg =
                                            e.data.msg,
                                            t.$children[
                                                2].$emit(
                                                "bridge"
                                            )
                                    }))) : (t.forgetErrorMsg =
                                    "获取中...", void t.$children[
                                        2].$emit("bridge")) :
                                (t.forgetErrorMsg =
                                    "邮箱不能为空", void t.$children[
                                        2].$emit("bridge"))
                        }, startTimer: function () {
                            var t = this;
                            t.actimer = !0, t.timer =
                                setInterval((function () {
                                    t.timeNum--, 0 ==
                                        t.timeNum &&
                                        (t.actimer = !
                                            1, t.timeNum =
                                            60,
                                            clearInterval(
                                                t.timer
                                            ))
                                }), 1e3)
                        }, do_forget: function () {
                            var t = this;
                            return t.forgetInfo.username ?
                                t.forgetInfo.verify ? t.forgetInfo
                                .code ? t.forgetPsdBtn ? (t
                                    .forgetPsdBtn = !1,
                                    void A.a.forgetPsd({
                                        username: t.forgetInfo
                                            .username,
                                        password: t.forgetInfo
                                            .newPsd,
                                        verify: t.forgetInfo
                                            .verify,
                                        code: t.forgetInfo
                                            .code,
                                        _oem: D.a.OEM,
                                        _language: "_zh_cn"
                                    }).then((function (e) {
                                        t.forgetPsdBtn = !
                                            0, 0 ==
                                            e.data.code ?
                                            (t.forgetErrorMsg =
                                                "修改成功",
                                                t.$children[
                                                    2
                                                ].$emit(
                                                    "bridge"
                                                ),
                                                t.forgetInfo = {
                                                    username: "",
                                                    newPsd: "",
                                                    verify: "",
                                                    code: ""
                                                },
                                                t.change_code(),
                                                t.actimer = !
                                                1,
                                                t.timeNum =
                                                60,
                                                clearInterval(
                                                    t
                                                    .timer
                                                ),
                                                setTimeout(
                                                    (
                                                        function () {
                                                            t
                                                                .$set(
                                                                    t
                                                                    .stat,
                                                                    "forget", !
                                                                    1
                                                                )
                                                        }
                                                    ),
                                                    1e3
                                                ),
                                                t._modal
                                                .login(),
                                                J.a
                                                .track_click(
                                                    6
                                                )) :
                                            (t.forgetErrorMsg =
                                                e.data
                                                .msg,
                                                t.$children[
                                                    2
                                                ].$emit(
                                                    "bridge"
                                                ))
                                    }))) : (t.forgetErrorMsg =
                                    "等待中...", void t.$children[
                                        2].$emit("bridge")) :
                                (t.forgetErrorMsg =
                                    "邮箱验证码不能为空", void t.$children[
                                        2].$emit("bridge")) :
                                (t.forgetErrorMsg =
                                    "图形验证码不能为空", void t.$children[
                                        2].$emit("bridge")) :
                                (t.forgetErrorMsg =
                                    "邮箱不能为空", void t.$children[
                                        2].$emit("bridge"))
                        }, do_register: function () {
                            var t = this,
                                e = t.registerInfo;
                            return e.username ? t.registerBtn ?
                                (t.registerBtn = !1, void A
                                    .a.register({
                                        username: e.username,
                                        password: e.password,
                                        _oem: D.a.OEM,
                                        q: "web",
                                        _language: "_zh_cn"
                                    }).then((function (e) {
                                        t.registerBtn = !
                                            0, 0 ==
                                            e.data.code ?
                                            (t.registerErrorMsg =
                                                "注册成功",
                                                t.$children[
                                                    0
                                                ].$emit(
                                                    "bridge"
                                                ),
                                                t.userInfo =
                                                e.data
                                                .ret,
                                                Q.reg(),
                                                t.$store
                                                .commit(
                                                    "user/saveUserInfo",
                                                    t
                                                    .userInfo
                                                ),
                                                "function" ==
                                                typeof t
                                                .gtag_report_conversion &&
                                                t.gtag_report_conversion(
                                                    window
                                                    .location
                                                    .href,
                                                    "register"
                                                ),
                                                setTimeout(
                                                    (
                                                        function () {
                                                            t
                                                                .$set(
                                                                    t
                                                                    .stat,
                                                                    "register", !
                                                                    1
                                                                ),
                                                                t
                                                                .$router
                                                                .go(
                                                                    0
                                                                )
                                                        }
                                                    ),
                                                    1e3
                                                ),
                                                J.a
                                                .track_click(
                                                    2
                                                )) :
                                            (t.registerErrorMsg =
                                                e.data
                                                .msg,
                                                t.$children[
                                                    0
                                                ].$emit(
                                                    "bridge"
                                                ))
                                    }))) : (t.registerErrorMsg =
                                    "等待中...", void t.$children[
                                        0].$emit("bridge")) :
                                (t.registerErrorMsg =
                                    "邮箱不能为空!", void t.$children[
                                        0].$emit("bridge"))
                        }, getCoupon: function () {
                            var t = this,
                                e = JSON.parse(localStorage
                                    .getItem("userInfo")) ||
                                t.$store.state.user.userInfo;
                            if (e.username) {
                                var n = e.username;
                                if (!t.exchange_sn) return t
                                    .getCouponErrorMsg =
                                    "兑换券不能为空", void t.$children[
                                        3].$emit(
                                        "bridge");
                                t.exchangeSnBtn && (t.exchangeSnBtn = !
                                    1, A.a.getNewCoupons({
                                        username: n,
                                        exchange_sn: t
                                            .exchange_sn,
                                        _oem: D.a.OEM,
                                        _language: "_zh_cn"
                                    }).then((function (
                                        e) {
                                        t.exchangeSnBtn = !
                                            0,
                                            t.getCouponErrorMsg =
                                            e.data
                                            .msg,
                                            t.$children[
                                                3
                                            ].$emit(
                                                "bridge"
                                            ),
                                            0 ==
                                            e.data
                                            .code &&
                                            (t.exchange_sn =
                                                ""
                                            )
                                    })))
                            }
                        }, tologin: function () {
                            this._modal.login(), this.$set(
                                this.stat, "register", !
                                1), this.$set(this.stat,
                                "forget", !1)
                        }, toRegister: function () {
                            this._modal.register(), this.$set(
                                this.stat, "login", !1)
                        }, toForget: function () {
                            this._modal.forget(), this.$set(
                                this.stat, "login", !1)
                        }
                    }, computed: {
                        myTimeNum: function () {
                            return "重新获取(".concat(this.timeNum,
                                "s)")
                        }
                    }, created: function () {
                        var t = this;
                        A.a.getVerifyImg({
                            _device_os: "web"
                        }).then((function (e) {
                            t.code_url = e.config.url
                        }))
                    }, components: {
                        myToast: R.a
                    }
                },
                W = (n(305), {
                    components: {
                        Footer: footer,
                        Header: header,
                        Modal: Object(S.a)(Y, (function () {
                                var t = this,
                                    e = t.$createElement,
                                    o = t._self._c || e;
                                return o("div", [o(
                                    "transition", {
                                        attrs: {
                                            name: "modal"
                                        }
                                    }, [o(
                                        "div", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t
                                                    .stat
                                                    .register,
                                                expression: "stat.register"
                                            }],
                                            staticClass: "layer-conetnt layerReg"
                                        }, [
                                            o(
                                                "div", {
                                                    staticClass: "inner"
                                                }, [
                                                    o(
                                                        "div", {
                                                            directives: [{
                                                                name: "track-submit",
                                                                rawName: "v-track-submit",
                                                                value: {
                                                                    code: 15
                                                                },
                                                                expression: "{code:15}"
                                                            }],
                                                            staticClass: "close closestyle",
                                                            on: {
                                                                click: function (
                                                                    e
                                                                ) {
                                                                    return
                                                                        t
                                                                        .hide(
                                                                            "register"
                                                                        )
                                                                }
                                                            }
                                                        }, [
                                                            o(
                                                                "i", {
                                                                    staticClass: "iconfont"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        ""
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    t
                                                    ._v(
                                                        " "
                                                    ),
                                                    o(
                                                        "div", {
                                                            staticClass: "inner-content"
                                                        }, [
                                                            o(
                                                                "div", {
                                                                    staticClass: "logo-img-content",
                                                                    attrs: {
                                                                        title: "海龟加速器"
                                                                    }
                                                                }, [
                                                                    o(
                                                                        "img", {
                                                                            staticClass: "logo-img",
                                                                            attrs: {
                                                                                src: n(
                                                                                    129
                                                                                ),
                                                                                alt: "海龟加速器"
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "p", {
                                                                    staticClass: "inner-h1"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "立即注册"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .registerInfo
                                                                                    .username,
                                                                                expression: "registerInfo.username"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                autocomplete: "off",
                                                                                name: "reg_email",
                                                                                id: "reg_email",
                                                                                placeholder: "请输入邮箱"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .registerInfo
                                                                                    .username
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .registerInfo,
                                                                                            "username",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .registerInfo
                                                                                    .password,
                                                                                expression: "registerInfo.password"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            staticStyle: {
                                                                                "ime-mode": "active"
                                                                            },
                                                                            attrs: {
                                                                                type: "password",
                                                                                autocomplete: "new-password",
                                                                                name: "password",
                                                                                id: "password",
                                                                                placeholder: "请输入密码"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .registerInfo
                                                                                    .password
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .registerInfo,
                                                                                            "password",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "myToast", {
                                                                    attrs: {
                                                                        title: t
                                                                            .registerErrorMsg,
                                                                        bottom: "150px"
                                                                    }
                                                                }
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            t
                                                            .registerBtn ?
                                                            o(
                                                                "button", {
                                                                    staticClass: "submit reg",
                                                                    attrs: {
                                                                        id: "reg"
                                                                    },
                                                                    on: {
                                                                        click: t
                                                                            .do_register
                                                                    }
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "立即注册"
                                                                    )
                                                                ]
                                                            ) :
                                                            o(
                                                                "button", {
                                                                    staticClass: "submit reg disable"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "注册中..."
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "p", {
                                                                    staticClass: "agree"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "\n            注册即代表同意\n            "
                                                                    ),
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "toagreement",
                                                                            attrs: {
                                                                                href: "http://com-download.oss-cn-hangzhou.aliyuncs.com/turtle/User%20Agreement_TomszO.html",
                                                                                target: "_blank"
                                                                            }
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "《用户协议》"
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "span", [
                                                                            t
                                                                            ._v(
                                                                                "\n              已有账号，\n              "
                                                                            ),
                                                                            o(
                                                                                "a", {
                                                                                    staticClass: "loginBtn",
                                                                                    on: {
                                                                                        click: t
                                                                                            .tologin
                                                                                    }
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        "立即登录"
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    )]), t._v(
                                    " "), o(
                                    "transition", {
                                        attrs: {
                                            name: "modal"
                                        }
                                    }, [o(
                                        "div", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t
                                                    .stat
                                                    .login,
                                                expression: "stat.login"
                                            }],
                                            staticClass: "layer-conetnt layerLogin"
                                        }, [
                                            o(
                                                "div", {
                                                    staticClass: "inner"
                                                }, [
                                                    o(
                                                        "div", {
                                                            directives: [{
                                                                name: "track-submit",
                                                                rawName: "v-track-submit",
                                                                value: {
                                                                    code: 15
                                                                },
                                                                expression: "{code:15}"
                                                            }],
                                                            staticClass: "close closestyle",
                                                            on: {
                                                                click: function (
                                                                    e
                                                                ) {
                                                                    return
                                                                        t
                                                                        .hide(
                                                                            "login"
                                                                        )
                                                                }
                                                            }
                                                        }, [
                                                            o(
                                                                "i", {
                                                                    staticClass: "iconfont"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        ""
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    t
                                                    ._v(
                                                        " "
                                                    ),
                                                    o(
                                                        "div", {
                                                            staticClass: "inner-content"
                                                        }, [
                                                            o(
                                                                "div", {
                                                                    staticClass: "logo-img-content",
                                                                    attrs: {
                                                                        title: "海龟加速器"
                                                                    }
                                                                }, [
                                                                    o(
                                                                        "img", {
                                                                            staticClass: "logo-img",
                                                                            attrs: {
                                                                                src: n(
                                                                                    129
                                                                                ),
                                                                                alt: "海龟加速器"
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "p", {
                                                                    staticClass: "inner-h1"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "登录"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .loginInfo
                                                                                    .username,
                                                                                expression: "loginInfo.username"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                name: "login_email",
                                                                                id: "login_email",
                                                                                placeholder: "请输入邮箱"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .loginInfo
                                                                                    .username
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .loginInfo,
                                                                                            "username",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .loginInfo
                                                                                    .password,
                                                                                expression: "loginInfo.password"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            staticStyle: {
                                                                                "ime-mode": "active"
                                                                            },
                                                                            attrs: {
                                                                                type: "password",
                                                                                name: "password",
                                                                                id: "login_password",
                                                                                placeholder: "请输入密码"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .loginInfo
                                                                                    .password
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .loginInfo,
                                                                                            "password",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "myToast", {
                                                                    attrs: {
                                                                        title: t
                                                                            .loginErrorMsg,
                                                                        bottom: "150px"
                                                                    }
                                                                }
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            t
                                                            .loginBtn ?
                                                            o(
                                                                "button", {
                                                                    staticClass: "submit reg",
                                                                    attrs: {
                                                                        id: "login"
                                                                    },
                                                                    on: {
                                                                        click: t
                                                                            .do_login
                                                                    }
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "立即登录"
                                                                    )
                                                                ]
                                                            ) :
                                                            o(
                                                                "button", {
                                                                    staticClass: "submit reg disable"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "登录中..."
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "p", {
                                                                    staticClass: "agree"
                                                                }, [
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "forgetBtn",
                                                                            on: {
                                                                                click: t
                                                                                    .toForget
                                                                            }
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "忘记密码？"
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "span", [
                                                                            t
                                                                            ._v(
                                                                                "\n              没有账号，\n              "
                                                                            ),
                                                                            o(
                                                                                "a", {
                                                                                    staticClass: "regBtn",
                                                                                    on: {
                                                                                        click: t
                                                                                            .toRegister
                                                                                    }
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        "立即注册"
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    )]), t._v(
                                    " "), o(
                                    "transition", {
                                        attrs: {
                                            name: "modal"
                                        }
                                    }, [o(
                                        "div", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t
                                                    .stat
                                                    .forget,
                                                expression: "stat.forget"
                                            }],
                                            staticClass: "layer-conetnt layerForget"
                                        }, [
                                            o(
                                                "div", {
                                                    staticClass: "inner"
                                                }, [
                                                    o(
                                                        "div", {
                                                            staticClass: "close closestyle",
                                                            on: {
                                                                click: function (
                                                                    e
                                                                ) {
                                                                    return
                                                                        t
                                                                        .hide(
                                                                            "forget"
                                                                        )
                                                                }
                                                            }
                                                        }, [
                                                            o(
                                                                "i", {
                                                                    staticClass: "iconfont"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        ""
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    t
                                                    ._v(
                                                        " "
                                                    ),
                                                    o(
                                                        "div", {
                                                            staticClass: "inner-content"
                                                        }, [
                                                            o(
                                                                "div", {
                                                                    staticClass: "logo-img-content",
                                                                    attrs: {
                                                                        title: "海龟加速器"
                                                                    }
                                                                }, [
                                                                    o(
                                                                        "img", {
                                                                            staticClass: "logo-img",
                                                                            attrs: {
                                                                                src: n(
                                                                                    129
                                                                                ),
                                                                                alt: "海龟加速器"
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "p", {
                                                                    staticClass: "inner-h1"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "忘记密码"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .username,
                                                                                expression: "forgetInfo.username"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                autocomplete: "off",
                                                                                id: "forget_email",
                                                                                name: "forget_email",
                                                                                placeholder: "请输入邮箱"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .username
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .forgetInfo,
                                                                                            "username",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .newPsd,
                                                                                expression: "forgetInfo.newPsd"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "password",
                                                                                autocomplete: "off",
                                                                                id: "forget_password",
                                                                                name: "forget_password",
                                                                                placeholder: "请输入新密码"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .newPsd
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .forgetInfo,
                                                                                            "newPsd",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", {
                                                                    attrs: {
                                                                        for: "img-code"
                                                                    }
                                                                }, [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .verify,
                                                                                expression: "forgetInfo.verify"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                autocomplete: "off",
                                                                                name: "forget_verify",
                                                                                id: "forget_verify",
                                                                                placeholder: "请输入图形验证码"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .verify
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .forgetInfo,
                                                                                            "verify",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "img", {
                                                                            staticClass: "verify verify_forget",
                                                                            attrs: {
                                                                                src: t
                                                                                    .code_url
                                                                            },
                                                                            on: {
                                                                                click: t
                                                                                    .change_code
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .code,
                                                                                expression: "forgetInfo.code"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                autocomplete: "off",
                                                                                name: "forget_code",
                                                                                id: "forget_code",
                                                                                placeholder: "请输入邮箱验证码"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .forgetInfo
                                                                                    .code
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        t
                                                                                        .$set(
                                                                                            t
                                                                                            .forgetInfo,
                                                                                            "code",
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    t
                                                                    .actimer ?
                                                                    t
                                                                    ._e() :
                                                                    o(
                                                                        "input", {
                                                                            staticClass: "forget_email_code",
                                                                            attrs: {
                                                                                type: "button",
                                                                                id: "btn",
                                                                                value: "获取验证码"
                                                                            },
                                                                            on: {
                                                                                click: t
                                                                                    .getEmailCode
                                                                            }
                                                                        }
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    t
                                                                    .actimer ?
                                                                    o(
                                                                        "input", {
                                                                            staticClass: "forget_email_code",
                                                                            staticStyle: {
                                                                                cursor: "auto"
                                                                            },
                                                                            attrs: {
                                                                                type: "button",
                                                                                id: "btn",
                                                                                value: t
                                                                                    .myTimeNum
                                                                            }
                                                                        }
                                                                    ) :
                                                                    t
                                                                    ._e()
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "myToast", {
                                                                    attrs: {
                                                                        title: t
                                                                            .forgetErrorMsg,
                                                                        bottom: "250px"
                                                                    }
                                                                }
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            t
                                                            .forgetPsdBtn ?
                                                            o(
                                                                "a", {
                                                                    staticClass: "submit",
                                                                    attrs: {
                                                                        id: "forget_submit"
                                                                    },
                                                                    on: {
                                                                        click: t
                                                                            .do_forget
                                                                    }
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "立即找回"
                                                                    )
                                                                ]
                                                            ) :
                                                            o(
                                                                "a", {
                                                                    staticClass: "submit disable"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "加载中..."
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "p", {
                                                                    staticClass: "agree"
                                                                }, [
                                                                    o(
                                                                        "span", {
                                                                            staticClass: "main"
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "\n              记起密码，\n              "
                                                                            ),
                                                                            o(
                                                                                "a", {
                                                                                    staticClass: "loginBtn",
                                                                                    on: {
                                                                                        click: t
                                                                                            .tologin
                                                                                    }
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        "立即登录"
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    )]), t._v(
                                    " "), o(
                                    "transition", {
                                        attrs: {
                                            name: "modal"
                                        }
                                    }, [o(
                                        "div", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t
                                                    .stat
                                                    .coupon,
                                                expression: "stat.coupon"
                                            }],
                                            staticClass: "layer-conetnt layerCoupon"
                                        }, [
                                            o(
                                                "div", {
                                                    staticClass: "inner"
                                                }, [
                                                    o(
                                                        "div", {
                                                            staticClass: "close closestyle",
                                                            on: {
                                                                click: function (
                                                                    e
                                                                ) {
                                                                    return
                                                                        t
                                                                        .hide(
                                                                            "coupon"
                                                                        )
                                                                }
                                                            }
                                                        }, [
                                                            o(
                                                                "i", {
                                                                    staticClass: "iconfont"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        ""
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    t
                                                    ._v(
                                                        " "
                                                    ),
                                                    o(
                                                        "div", {
                                                            staticClass: "inner-content"
                                                        }, [
                                                            o(
                                                                "p", {
                                                                    staticClass: "inner-h1"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "兑换优惠券"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "input", {
                                                                            directives: [{
                                                                                name: "model",
                                                                                rawName: "v-model",
                                                                                value: t
                                                                                    .exchange_sn,
                                                                                expression: "exchange_sn"
                                                                            }],
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                name: "",
                                                                                id: "exchange",
                                                                                placeholder: "请输入兑换码"
                                                                            },
                                                                            domProps: {
                                                                                value: t
                                                                                    .exchange_sn
                                                                            },
                                                                            on: {
                                                                                input: function (
                                                                                    e
                                                                                ) {
                                                                                    e
                                                                                        .target
                                                                                        .composing ||
                                                                                        (
                                                                                            t
                                                                                            .exchange_sn =
                                                                                            e
                                                                                            .target
                                                                                            .value
                                                                                        )
                                                                                }
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "myToast", {
                                                                    attrs: {
                                                                        title: t
                                                                            .getCouponErrorMsg,
                                                                        bottom: "70px"
                                                                    }
                                                                }
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "div", {
                                                                    staticClass: "layerCouponChoose"
                                                                }, [
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "submit close",
                                                                            on: {
                                                                                click: function (
                                                                                    e
                                                                                ) {
                                                                                    return
                                                                                        t
                                                                                        .hide(
                                                                                            "coupon"
                                                                                        )
                                                                                }
                                                                            }
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "取消"
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    t
                                                                    .exchangeSnBtn ?
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "submit submitCoupon",
                                                                            on: {
                                                                                click: t
                                                                                    .getCoupon
                                                                            }
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "确定"
                                                                            )
                                                                        ]
                                                                    ) :
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "submit submitCoupon disable"
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "加载中..."
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    )]), t._v(
                                    " "), o(
                                    "transition", {
                                        attrs: {
                                            name: "modal"
                                        }
                                    }, [o(
                                        "div", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t
                                                    .stat
                                                    .regwin,
                                                expression: "stat.regwin"
                                            }],
                                            staticClass: "layer-conetnt layerRegWin"
                                        }, [
                                            o(
                                                "div", {
                                                    staticClass: "inner layer-reg-win"
                                                }, [
                                                    o(
                                                        "div", {
                                                            staticClass: "inner-content"
                                                        }, [
                                                            o(
                                                                "i", {
                                                                    staticClass: "iconfont iconfont-win"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        ""
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "h1", [
                                                                    t
                                                                    ._v(
                                                                        "注册成功"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "h2", [
                                                                    t
                                                                    ._v(
                                                                        "扫码关注公众号，免费领取VIP和海外生活大礼包"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "div", {
                                                                    staticClass: "code-content"
                                                                }, [
                                                                    o(
                                                                        "img", {
                                                                            attrs: {
                                                                                src: n(
                                                                                    187
                                                                                ),
                                                                                alt: "扫描二维码，关注海龟公众号，免费领会员"
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "div", {
                                                                    staticClass: "layerCouponChoose"
                                                                }, [
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "submit close",
                                                                            on: {
                                                                                click: function (
                                                                                    e
                                                                                ) {
                                                                                    return
                                                                                        t
                                                                                        .hide(
                                                                                            "regwin"
                                                                                        )
                                                                                }
                                                                            }
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "我知道了"
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    )]), t._v(
                                    " "), o(
                                    "transition", {
                                        attrs: {
                                            name: "modal"
                                        }
                                    }, [o(
                                        "div", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t
                                                    .stat
                                                    .paywin,
                                                expression: "stat.paywin"
                                            }],
                                            staticClass: "layer-conetnt layerPayWin"
                                        }, [
                                            o(
                                                "div", {
                                                    staticClass: "inner layer-reg-win"
                                                }, [
                                                    o(
                                                        "div", {
                                                            staticClass: "inner-content"
                                                        }, [
                                                            o(
                                                                "i", {
                                                                    staticClass: "iconfont iconfont-win"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        ""
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "h1", [
                                                                    t
                                                                    ._v(
                                                                        "支付成功"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "h2", [
                                                                    t
                                                                    ._v(
                                                                        "恭喜您获得快帆大礼包"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "div", {
                                                                    staticClass: "layer-conetnt-win"
                                                                }, [
                                                                    o(
                                                                        "p", [
                                                                            o(
                                                                                "span", [
                                                                                    t
                                                                                    ._v(
                                                                                        "一、15个月加速时长"
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t
                                                                            ._v(
                                                                                " "
                                                                            ),
                                                                            o(
                                                                                "span", [
                                                                                    t
                                                                                    ._v(
                                                                                        "请至个人中心查看"
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "p", [
                                                                            o(
                                                                                "span", [
                                                                                    t
                                                                                    ._v(
                                                                                        "二、VIP求职绿色通道"
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t
                                                                            ._v(
                                                                                " "
                                                                            ),
                                                                            o(
                                                                                "span", [
                                                                                    t
                                                                                    ._v(
                                                                                        "联系客服QQ：8585855888"
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "p", [
                                                                            o(
                                                                                "span", [
                                                                                    t
                                                                                    ._v(
                                                                                        "三、携程经济仓优惠券"
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t
                                                                            ._v(
                                                                                " "
                                                                            ),
                                                                            o(
                                                                                "span", [
                                                                                    t
                                                                                    ._v(
                                                                                        "请至个人中心-我的优惠券查看"
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "div", {
                                                                    staticClass: "layerCouponChoose"
                                                                }, [
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "submit close",
                                                                            on: {
                                                                                click: function (
                                                                                    e
                                                                                ) {
                                                                                    return
                                                                                        t
                                                                                        .hide(
                                                                                            "paywin"
                                                                                        )
                                                                                }
                                                                            }
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "我知道了"
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    )]), t._v(
                                    " "), o(
                                    "transition", {
                                        attrs: {
                                            name: "modal"
                                        }
                                    }, [o(
                                        "div", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t
                                                    .stat
                                                    .edit,
                                                expression: "stat.edit"
                                            }],
                                            staticClass: "layer-conetnt layerEdit"
                                        }, [
                                            o(
                                                "div", {
                                                    staticClass: "inner"
                                                }, [
                                                    o(
                                                        "div", {
                                                            staticClass: "close closestyle",
                                                            on: {
                                                                click: function (
                                                                    e
                                                                ) {
                                                                    return
                                                                        t
                                                                        .hide(
                                                                            "edit"
                                                                        )
                                                                }
                                                            }
                                                        }, [
                                                            o(
                                                                "i", {
                                                                    staticClass: "iconfont"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        ""
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    t
                                                    ._v(
                                                        " "
                                                    ),
                                                    o(
                                                        "div", {
                                                            staticClass: "inner-content"
                                                        }, [
                                                            o(
                                                                "p", {
                                                                    staticClass: "inner-h1"
                                                                }, [
                                                                    t
                                                                    ._v(
                                                                        "填写手机号"
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                id: "edit_phone",
                                                                                name: "edit_phone",
                                                                                placeholder: "请输入手机号"
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "label", [
                                                                    o(
                                                                        "span", [
                                                                            o(
                                                                                "i", {
                                                                                    staticClass: "iconfont"
                                                                                }, [
                                                                                    t
                                                                                    ._v(
                                                                                        ""
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            staticClass: "input unified-input",
                                                                            attrs: {
                                                                                type: "text",
                                                                                name: "edit_phone_code",
                                                                                placeholder: "请输入手机验证码"
                                                                            }
                                                                        }
                                                                    ),
                                                                    t
                                                                    ._v(
                                                                        " "
                                                                    ),
                                                                    o(
                                                                        "input", {
                                                                            staticClass: "forget_email_code",
                                                                            attrs: {
                                                                                type: "button",
                                                                                value: "获取验证码"
                                                                            }
                                                                        }
                                                                    )
                                                                ]
                                                            ),
                                                            t
                                                            ._v(
                                                                " "
                                                            ),
                                                            o(
                                                                "div", {
                                                                    staticClass: "layerCouponChoose"
                                                                }, [
                                                                    o(
                                                                        "a", {
                                                                            staticClass: "submit close"
                                                                        }, [
                                                                            t
                                                                            ._v(
                                                                                "保存"
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    )])], 1)
                            }), [], !1, null, "0a701055",
                            null).exports,
                        contacts: U
                    },
                    head: function () {
                        return {
                            title: "海龟加速器",
                            meta: [{
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }]
                        }
                    }, watch: {
                        $route: function (t, e) {
                            document.body.scrollTop = 0,
                                document.documentElement
                                .scrollTop = 0
                        }
                    }, mounted: function () {
                        var t = this.$refs.modal,
                            data = t.stat,
                            e = {
                                getModalStatus: function () {
                                    return t.stat
                                }
                            },
                            n = function (n) {
                                e[n] = function (e) {
                                    "show" == e && t.show(
                                            n), "hide" ==
                                        e && t.hide(n),
                                        e || t.toggle(n)
                                }
                            };
                        for (var o in data) n(o);
                        var r = this.getQueryString(
                                "utm-source"),
                            l = this.getQueryString(
                                "utm-keyword"),
                            d = this.getQueryString("agent"),
                            f = document.referrer;
                        f && f.match(
                                /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
                            ) !== window.location.origin ?
                            F.a.set("orgin", f, "1d") : F.a
                            .set("orgin", ""), d && (F.a.set(
                                "agent", d, "1d"), Q.agent_click()),
                            r && (F.a.set("source", r, "1d"),
                                F.a.set("keyword", l, "1d"),
                                Q.visit()), c.a.prototype._modal =
                            e
                    }, methods: {
                        modalFun: function (t, e) {},
                            getQueryString: function (t) {
                                var e = new RegExp("(^|&)" +
                                        t + "=([^&]*)(&|$)",
                                        "i"),
                                    n = window.location.search
                                    .substr(1).match(e);
                                return null != n ? unescape(
                                    n[2]).replace("?",
                                    "") : null
                            }
                    }
                }),
                G = (n(307), Object(S.a)(W, (function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "body"
                    }, [e("Header"), this._v(
                            " "), e("nuxt"),
                        this._v(" "), e(
                            "contacts"), this._v(
                            " "), e("Footer"),
                        this._v(" "), e("Modal", {
                            ref: "modal",
                            on: {
                                modalEmit: this
                                    .modalFun
                            }
                        })
                    ], 1)
                }), [], !1, null, "0409bdf2", null).exports),
                K = Object(S.a)({}, void 0, void 0, !1, null, null,
                    null).exports,
                V = {},
                Z = Object(S.a)(V, (function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "body"
                    }, [e("nuxt")], 1)
                }), [], !1, null, null, null).exports,
                tt = {
                    components: {
                        Footer: footer,
                        Header: header,
                        UcMenu: Object(S.a)({}, (function () {
                            var t = this.$createElement;
                            this._self._c;
                            return this._m(0)
                        }), [
                            function () {
                                var t = this,
                                    e = t.$createElement,
                                    n = t._self._c || e;
                                return n("div", {
                                    staticClass: "left"
                                }, [n("div", {
                                        staticClass: "item index"
                                    }, [n("i", {
                                            staticClass: "iconfont"
                                        }, [
                                            t
                                            ._v(
                                                ""
                                            )
                                        ]), t._v(
                                            " "
                                        ), n(
                                            "p", [
                                                t
                                                ._v(
                                                    "个人中心"
                                                )
                                            ]),
                                        t._v(
                                            " "
                                        ), n(
                                            "a", {
                                                attrs: {
                                                    href: "/user/"
                                                }
                                            })
                                    ]), t._v(" "),
                                    n("div", {
                                        staticClass: "item edit"
                                    }, [n("i", {
                                            staticClass: "iconfont"
                                        }, [
                                            t
                                            ._v(
                                                ""
                                            )
                                        ]), t._v(
                                            " "
                                        ), n(
                                            "p", [
                                                t
                                                ._v(
                                                    "修改密码"
                                                )
                                            ]),
                                        t._v(
                                            " "
                                        ), n(
                                            "a", {
                                                attrs: {
                                                    href: "/user/pwd/"
                                                }
                                            })
                                    ]), t._v(" "),
                                    n("div", {
                                        staticClass: "item favourable"
                                    }, [n("i", {
                                            staticClass: "iconfont"
                                        }, [
                                            t
                                            ._v(
                                                ""
                                            )
                                        ]), t._v(
                                            " "
                                        ), n(
                                            "p", [
                                                t
                                                ._v(
                                                    "优惠券"
                                                )
                                            ]),
                                        t._v(
                                            " "
                                        ), n(
                                            "a", {
                                                attrs: {
                                                    href: "/user/favourable/"
                                                }
                                            })
                                    ]), t._v(" "),
                                    n("div", {
                                        staticClass: "item record"
                                    }, [n("i", {
                                            staticClass: "iconfont"
                                        }, [
                                            t
                                            ._v(
                                                ""
                                            )
                                        ]), t._v(
                                            " "
                                        ), n(
                                            "p", [
                                                t
                                                ._v(
                                                    "购买记录"
                                                )
                                            ]),
                                        t._v(
                                            " "
                                        ), n(
                                            "a", {
                                                attrs: {
                                                    href: "/user/record/"
                                                }
                                            })
                                    ]), t._v(" "),
                                    n("div", {
                                        staticClass: "item down"
                                    }, [n("i", {
                                            staticClass: "iconfont"
                                        }, [
                                            t
                                            ._v(
                                                ""
                                            )
                                        ]), t._v(
                                            " "
                                        ), n(
                                            "p", [
                                                t
                                                ._v(
                                                    "下载中心"
                                                )
                                            ]),
                                        t._v(
                                            " "
                                        ), n(
                                            "a", {
                                                attrs: {
                                                    href: "/user/down/"
                                                }
                                            })
                                    ])
                                ])
                            }
                        ], !1, null, null, null).exports
                    },
                    head: function () {
                        return {
                            title: "海龟加速器",
                            meta: []
                        }
                    }
                },
                et = Object(S.a)(tt, (function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "body"
                    }, [e("Header"), this._v(" "),
                        e("div", {
                            staticClass: "ucenter-content"
                        }, [e("UcMenu"), this._v(
                            " "), e("div", {
                                staticClass: "right"
                            }, [e("nuxt")],
                            1)], 1), this._v(" "),
                        e("Footer")
                    ], 1)
                }), [], !1, null, null, null).exports,
                nt = {
                    head: function () {
                        return {
                            title: "海龟加速器",
                            meta: [{
                                hid: "viewport",
                                name: "viewport",
                                content: "width=750, user-scalable=no"
                            }, {
                                hid: "renderer",
                                name: "renderer",
                                content: "webkit"
                            }]
                        }
                    }, mounted: function () {}
                },
                at = (n(309), Object(S.a)(nt, (function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "body"
                    }, [e("nuxt")], 1)
                }), [], !1, null, "06f2da9e", null).exports);

            function ot(t) {
                if ("undefined" == typeof Symbol || null == t[
                    Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return
                            it(t, e);
                        var n = Object.prototype.toString
                            .call(t).slice(8, -1);
                        "Object" === n && t.constructor &&
                            (n = t.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(n);
                        if ("Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                            .test(n)) return it(t, e)
                    }(t))) {
                        var i = 0,
                            e = function () {};
                        return {
                            s: e,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            }, e: function (t) {
                                throw t
                            }, f: e
                        }
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    )
                }
                var n, o, r = !0,
                    c = !1;
                return {
                    s: function () {
                        n = t[Symbol.iterator]()
                    }, n: function () {
                        var t = n.next();
                        return r = t.done, t
                    }, e: function (t) {
                        c = !0, o = t
                    }, f: function () {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function it(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[
                    i] = t[i];
                return n
            }
            var st = {
                    _default: Object(x.r)(G),
                    _null: Object(x.r)(K),
                    _simple: Object(x.r)(Z),
                    _uc_layout: Object(x.r)(et),
                    _wap: Object(x.r)(at)
                },
                ct = {
                    render: function (t, e) {
                        var n = t("NuxtLoading", {
                            ref: "loading"
                        });
                        if (this.nuxt.err && I) {
                            var o = (I.options || I).layout;
                            o && this.setLayout("function" ==
                                typeof o ? o.call(I, this.context) :
                                o)
                        }
                        var r = t(this.layout || "nuxt"),
                            c = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            l = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function (
                                        t) {
                                        window.$nuxt.$nextTick(
                                            (
                                                function () {
                                                    window
                                                        .$nuxt
                                                        .$emit(
                                                            "triggerScroll"
                                                        )
                                                }))
                                    }
                                }
                            }, [c]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, l])
                    }, data: function () {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    }, beforeCreate: function () {
                        c.a.util.defineReactive(this, "nuxt",
                            this.$options.nuxt)
                    }, created: function () {
                        c.a.prototype.$nuxt = this, window.$nuxt =
                            this, this.refreshOnlineStatus(),
                            window.addEventListener("online",
                                this.refreshOnlineStatus),
                            window.addEventListener("offline",
                                this.refreshOnlineStatus), this
                            .error = this.nuxt.error, this.context =
                            this.$options.context
                    }, mounted: function () {
                        this.$loading = this.$refs.loading
                    }, watch: {
                        "nuxt.err": "errorChanged"
                    }, computed: {
                        isOffline: function () {
                            return !this.isOnline
                        }, isFetching: function () {
                            return this.nbFetching > 0
                        }
                    }, methods: {
                        refreshOnlineStatus: function () {
                            void 0 === window.navigator.onLine ?
                                this.isOnline = !0 : this.isOnline =
                                window.navigator.onLine
                        }, refresh: function () {
                            var t = this;
                            return Object(o.a)(
                                regeneratorRuntime.mark(
                                    (function e() {
                                        var n, o;
                                        return
                                            regeneratorRuntime
                                            .wrap((
                                                    function (
                                                        e
                                                    ) {
                                                        for (;;)
                                                            switch (
                                                                e
                                                                .prev =
                                                                e
                                                                .next
                                                            ) {
                                                            case 0:
                                                                if (
                                                                    (
                                                                        n =
                                                                        Object(
                                                                            x
                                                                            .h
                                                                        )
                                                                        (
                                                                            t
                                                                            .$route
                                                                        )
                                                                    )
                                                                    .length
                                                                ) {
                                                                    e
                                                                        .next =
                                                                        3;
                                                                    break
                                                                }
                                                                return
                                                                    e
                                                                    .abrupt(
                                                                        "return"
                                                                    );
                                                            case 3:
                                                                return
                                                                    t
                                                                    .$loading
                                                                    .start(),
                                                                    o =
                                                                    n
                                                                    .map(
                                                                        (
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                var
                                                                                    p = [];
                                                                                if (
                                                                                    e
                                                                                    .$options
                                                                                    .fetch &&
                                                                                    e
                                                                                    .$options
                                                                                    .fetch
                                                                                    .length &&
                                                                                    p
                                                                                    .push(
                                                                                        Object(
                                                                                            x
                                                                                            .p
                                                                                        )
                                                                                        (
                                                                                            e
                                                                                            .$options
                                                                                            .fetch,
                                                                                            t
                                                                                            .context
                                                                                        )
                                                                                    ),
                                                                                    e
                                                                                    .$fetch
                                                                                )
                                                                                    p
                                                                                    .push(
                                                                                        e
                                                                                        .$fetch()
                                                                                    );
                                                                                else {
                                                                                    var
                                                                                        n,
                                                                                        o =
                                                                                        ot(
                                                                                            Object(
                                                                                                x
                                                                                                .e
                                                                                            )
                                                                                            (
                                                                                                e
                                                                                                .$vnode
                                                                                                .componentInstance
                                                                                            )
                                                                                        );
                                                                                    try {
                                                                                        for (
                                                                                            o
                                                                                            .s(); !
                                                                                            (
                                                                                                n =
                                                                                                o
                                                                                                .n()
                                                                                            )
                                                                                            .done;
                                                                                        ) {
                                                                                            var
                                                                                                component =
                                                                                                n
                                                                                                .value;
                                                                                            p
                                                                                                .push(
                                                                                                    component
                                                                                                    .$fetch()
                                                                                                )
                                                                                        }
                                                                                    } catch (
                                                                                        t
                                                                                    ) {
                                                                                        o
                                                                                            .e(
                                                                                                t
                                                                                            )
                                                                                    } finally {
                                                                                        o
                                                                                            .f()
                                                                                    }
                                                                                }
                                                                                return
                                                                                    e
                                                                                    .$options
                                                                                    .asyncData &&
                                                                                    p
                                                                                    .push(
                                                                                        Object(
                                                                                            x
                                                                                            .p
                                                                                        )
                                                                                        (
                                                                                            e
                                                                                            .$options
                                                                                            .asyncData,
                                                                                            t
                                                                                            .context
                                                                                        )
                                                                                        .then(
                                                                                            (
                                                                                                function (
                                                                                                    t
                                                                                                ) {
                                                                                                    for (
                                                                                                        var
                                                                                                            n in
                                                                                                            t
                                                                                                    )
                                                                                                        c
                                                                                                        .a
                                                                                                        .set(
                                                                                                            e
                                                                                                            .$data,
                                                                                                            n,
                                                                                                            t[
                                                                                                                n
                                                                                                            ]
                                                                                                        )
                                                                                                }
                                                                                            )
                                                                                        )
                                                                                    ),
                                                                                    Promise
                                                                                    .all(
                                                                                        p
                                                                                    )
                                                                            }
                                                                        )
                                                                    ),
                                                                    e
                                                                    .prev =
                                                                    5,
                                                                    e
                                                                    .next =
                                                                    8,
                                                                    Promise
                                                                    .all(
                                                                        o
                                                                    );
                                                            case 8:
                                                                e
                                                                    .next =
                                                                    15;
                                                                break;
                                                            case 10:
                                                                e
                                                                    .prev =
                                                                    10,
                                                                    e
                                                                    .t0 =
                                                                    e
                                                                    .catch(
                                                                        5
                                                                    ),
                                                                    t
                                                                    .$loading
                                                                    .fail(
                                                                        e
                                                                        .t0
                                                                    ),
                                                                    Object(
                                                                        x
                                                                        .k
                                                                    )
                                                                    (
                                                                        e
                                                                        .t0
                                                                    ),
                                                                    t
                                                                    .error(
                                                                        e
                                                                        .t0
                                                                    );
                                                            case 15:
                                                                t
                                                                    .$loading
                                                                    .finish();
                                                            case 16:
                                                            case "end":
                                                                return
                                                                    e
                                                                    .stop()
                                                            }
                                                    }
                                                ),
                                                e,
                                                null, [
                                                    [
                                                        5,
                                                        10
                                                    ]
                                                ])
                                    })))()
                        }, errorChanged: function () {
                            this.nuxt.err && this.$loading &&
                                (this.$loading.fail && this
                                    .$loading.fail(this.nuxt
                                        .err), this.$loading
                                    .finish && this.$loading
                                    .finish())
                        }, setLayout: function (t) {
                            return t && st["_" + t] || (t =
                                    "default"), this.layoutName =
                                t, this.layout = st["_" + t],
                                this.layout
                        }, loadLayout: function (t) {
                            return t && st["_" + t] || (t =
                                "default"), Promise.resolve(
                                st["_" + t])
                        }
                    }, components: {
                        NuxtLoading: z
                    }
                },
                lt = (n(95), n(150), n(61));

            function ut(t) {
                if ("undefined" == typeof Symbol || null == t[
                    Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return
                            pt(t, e);
                        var n = Object.prototype.toString
                            .call(t).slice(8, -1);
                        "Object" === n && t.constructor &&
                            (n = t.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(n);
                        if ("Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                            .test(n)) return pt(t, e)
                    }(t))) {
                        var i = 0,
                            e = function () {};
                        return {
                            s: e,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            }, e: function (t) {
                                throw t
                            }, f: e
                        }
                    }
                    throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    )
                }
                var n, o, r = !0,
                    c = !1;
                return {
                    s: function () {
                        n = t[Symbol.iterator]()
                    }, n: function () {
                        var t = n.next();
                        return r = t.done, t
                    }, e: function (t) {
                        c = !0, o = t
                    }, f: function () {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function pt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[
                    i] = t[i];
                return n
            }
            c.a.use(lt.a);
            var ft = ["state", "getters", "actions", "mutations"],
                ht = {};
            (ht = function (t, e) {
                if ((t = t.default || t).commit) throw new Error(
                    "[nuxt] ".concat(e,
                        " should export a method that returns a Vuex instance."
                    ));
                return "function" != typeof t && (t = Object.assign({},
                    t)), gt(t, e)
            }(n(313), "store/index.js")).modules = ht.modules || {},
                vt(n(143), "modules/app.js"), vt(n(144),
                    "modules/user.js");
            var mt = ht instanceof Function ? ht : function () {
                return new lt.a.Store(Object.assign({
                    strict: !1
                }, ht))
            };

            function gt(t, e) {
                if (t.state && "function" != typeof t.state) {
                    console.warn(
                        "'state' should be a method that returns an object in "
                        .concat(e));
                    var n = Object.assign({}, t.state);
                    t = Object.assign({}, t, {
                        state: function () {
                            return n
                        }
                    })
                }
                return t
            }

            function vt(t, e) {
                t = t.default || t;
                var n = e.replace(/\.(js|mjs)$/, "").split("/"),
                    o = n[n.length - 1],
                    r = "store/".concat(e);
                if (t = "state" === o ? function (t, e) {
                    if ("function" != typeof t) {
                        console.warn("".concat(e,
                            " should export a method that returns an object"
                        ));
                        var n = Object.assign({}, t);
                        return function () {
                            return n
                        }
                    }
                    return gt(t, e)
                }(t, r) : gt(t, r), ft.includes(o)) {
                    var c = o;
                    xt(bt(ht, n, {
                        isProperty: !0
                    }), t, c)
                } else {
                    "index" === o && (n.pop(), o = n[n.length -
                        1]);
                    var l, d = bt(ht, n),
                        f = ut(ft);
                    try {
                        for (f.s(); !(l = f.n()).done;) {
                            var h = l.value;
                            xt(d, t[h], h)
                        }
                    } catch (t) {
                        f.e(t)
                    } finally {
                        f.f()
                    }!1 === t.namespaced && delete d.namespaced
                }
            }

            function bt(t, e) {
                var n = arguments.length > 2 && void 0 !==
                    arguments[2] ? arguments[2] : {},
                    o = n.isProperty,
                    r = void 0 !== o && o;
                if (!e.length || r && 1 === e.length) return t;
                var c = e.shift();
                return t.modules[c] = t.modules[c] || {}, t.modules[
                        c].namespaced = !0, t.modules[c].modules =
                    t.modules[c].modules || {}, bt(t.modules[c],
                        e, {
                            isProperty: r
                        })
            }

            function xt(t, e, n) {
                e && ("state" === n ? t.state = e || t.state :
                    t[n] = Object.assign({}, t[n], e))
            }
            c.a.use({
                install: function (t) {
                    t.prototype._Settings = D.a
                }
            }), c.a.use({
                install: function (t) {
                    var e = arguments;
                    window.dataLayer = window.dataLayer || [],
                        window.gtag = function () {
                            dataLayer.push(e)
                        }, gtag("js", new Date), gtag(
                            "config", "AW-746290448"),
                        t.prototype.gtag_report_conversion =
                        function (t, e) {
                            var n = function () {
                                void 0 !== t && (
                                    window.location =
                                    t)
                            };
                            return "buy" == e && gtag(
                                    "event",
                                    "conversion", {
                                        send_to: "AW-746290448/q_72CP7mzcQBEJD67eMC",
                                        transaction_id: "",
                                        event_callback: n
                                    }), "register" == e &&
                                gtag("event",
                                    "conversion", {
                                        send_to: "AW-746290448/UVFvCNWf1cQBEJD67eMC",
                                        event_callback: n
                                    }), !1
                        }
                }
            }), c.a.use({
                install: function (t) {
                    t.prototype._API = A.a
                }
            });
            var yt = n(36),
                _t = {
                    formatDate: function (t) {
                        var e = new Date(t),
                            n = e.getFullYear(),
                            o = e.getMonth() + 1;
                        o = o < 10 ? "0" + o : o;
                        var r = e.getDate();
                        r = r < 10 ? "0" + r : r;
                        var c = e.getHours();
                        c = c < 10 ? "0" + c : c;
                        var l = e.getMinutes();
                        l = l < 10 ? "0" + l : l;
                        var s = e.getSeconds();
                        return s = s < 10 ? "0" + s : s, n +
                            "年" + o + "月" + r + "日"
                    }, nullOrEmpty: function (t) {
                        return null == t || "" == t || null ==
                            Object(yt.a)(t) ? (arguments.length <=
                                1 ? void 0 : arguments[1]) ?
                            arguments.length <= 1 ? void 0 :
                            arguments[1] : "--" : t
                    }, JTS: function (t) {
                        return JSON.stringify(t)
                    }
                },
                wt = function (t) {
                    for (var i in _t) t.filter(i, _t[i])
                },
                kt = {
                    username: function (t) {
                        return /^[0-9A-Za-z]{4,20}$/.test(t)
                    }, password: function (t) {
                        return
                            /^[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/
                            .test(t)
                    }, phone: function (t) {
                        return
                            /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
                            .test(t)
                    }, email: function (t) {
                        return
                            /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                            .test(t)
                    }
                },
                Ct = function (t) {
                    t.prototype._validate = kt
                },
                Ot = {
                    install: function (t) {
                        wt(t), Ct(t), t.prototype.UserTrack = Q,
                            t.prototype.Track_Sub = J.a.track_click,
                            t.prototype.GQS = function (t) {
                                var e = new RegExp("(^|&)" + t +
                                        "=([^&]*)(&|$)", "i"),
                                    n = location.search.substr(
                                        1).match(e);
                                return null != n ? unescape(
                                    decodeURI(n[2])) : null
                            }
                    }
                };
            c.a.use(Ot);
            var jt = n(208),
                $t = n.n(jt);
            c.a.use($t.a);
            var St = n(209),
                It = n.n(St);
            c.a.use(It.a);
            n(79);
            var Tt = n(46),
                Et = n(367),
                Pt = {
                    "source-track": {
                        inserted: function (t, e) {
                            t.addEventListener("click", (
                                function () {
                                    var s = F.a.get(
                                            "source"),
                                        t = F.a.get(
                                            "keyword"),
                                        n = F.a.get(
                                            "agent");
                                    s & t && A.a.user_event_track({
                                        code: s +
                                            "_code_" +
                                            t,
                                        oem: D.a
                                            .OEM,
                                        device_os: "web",
                                        type: e
                                            .value
                                    }), n && A.a.agentSubmit({
                                        type: e
                                            .value,
                                        url: "agent=" +
                                            n
                                    })
                                }), !0)
                        }
                    },
                    "action-track": {
                        inserted: function (t, e) {
                            t.addEventListener("click", (
                                function () {
                                    var t, n, o = {},
                                        r = (t = new RegExp(
                                                "(^|&)" +
                                                "agent" +
                                                "=([^&]*)(&|$)",
                                                "i"),
                                            null != (n =
                                                location
                                                .search
                                                .substr(
                                                    1).match(
                                                    t)) ?
                                            unescape(
                                                decodeURI(
                                                    n[2]
                                                )) :
                                            null);
                                    r || (r = ""), o.code =
                                        e.value.code, o
                                        .type = e.value
                                        .type, o.agent_sn =
                                        r, o.q = window
                                        .location.host,
                                        o._prj_name = D
                                        .a.PRJ_NAME, o._oem =
                                        D.a.OEM, o._version =
                                        D.a.PJ_VERSION,
                                        o._device_os =
                                        "web", A.a.clickTrack(
                                            o)
                                }), !0)
                        }
                    },
                    "track-submit": {
                        inserted: function (t, e, n) {
                            t.addEventListener("click", (
                                function () {
                                    var t = e.value.page ||
                                        0,
                                        code = e.value.code ||
                                        0,
                                        o = n.context.$route
                                        .name;
                                    !t && Tt.a.pageCode[
                                            o] && (t =
                                            Tt.a.pageCode[
                                                o]), J.a
                                        .track_click(
                                            code, t)
                                }), !0)
                        }
                    },
                    mtips: {
                        inserted: function (t, e) {
                            t.addEventListener("click", (
                                function () {
                                    Et.a.destroy(), Et.a
                                        .info(e.value)
                                }), !0)
                        }
                    }
                };

            function zt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(
                            object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function Nt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ?
                        arguments[i] : {};
                    i % 2 ? zt(Object(source), !0).forEach((
                            function (e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(
                            source)) : zt(Object(source)).forEach(
                            (function (e) {
                                Object.defineProperty(t, e,
                                    Object.getOwnPropertyDescriptor(
                                        source, e))
                            }))
                }
                return t
            }
            c.a.use({
                install: function (t) {
                    for (var e in Pt) t.directive(e, Pt[
                        e])
                }
            }), c.a.use({
                install: function (t) {
                    var e = document.domain,
                        n = D.a.CNZZ.default;
                    n = D.a.CNZZ[e] || n;
                    var script = document.createElement(
                        "script");
                    script.type = "text/javascript",
                        script.src =
                        "https://s23.cnzz.com/z_stat.php?id="
                        .concat(n, "&web_id=").concat(n),
                        setTimeout((function () {
                            document.body.appendChild(
                                script)
                        }), 100)
                }
            }), c.a.use({
                install: function (t) {
                    var e = window.location.host;
                    "haiguijsq.com" != e &&
                        "www.haiguijsq.com" != e && (
                            // window.location.href =
                            // "https://www.haiguijsq.com/"
                        )
                }
            }), c.a.component(f.a.name, f.a), c.a.component(m.a
                .name, Nt({}, m.a, {
                    render: function (t, e) {
                        return m.a._warned || (m.a._warned = !
                            0, console.warn(
                                "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                            )), m.a.render(t, e)
                    }
                })), c.a.component(C.name, C), c.a.component(
                "NChild", C), c.a.component(E.name, E), c.a.use(
                l.a, {
                    keyName: "head",
                    attribute: "data-n-head",
                    ssrAttribute: "data-n-head-ssr",
                    tagIDKeyName: "hid"
                });
            var At = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            };

            function Mt(t) {
                return Rt.apply(this, arguments)
            }

            function Rt() {
                return (Rt = Object(o.a)(regeneratorRuntime.mark(
                    (function t(e) {
                        var n, o, r, l, d, f,
                            path;
                        return
                            regeneratorRuntime.wrap(
                                (function (t) {
                                    for (;;)
                                        switch (
                                            t
                                            .prev =
                                            t
                                            .next
                                        ) {
                                        case 0:
                                            return
                                                t
                                                .next =
                                                2,
                                                k();
                                        case 2:
                                            return
                                                n =
                                                t
                                                .sent, (
                                                    o =
                                                    mt(
                                                        e
                                                    )
                                                )
                                                .$router =
                                                n,
                                                r =
                                                o
                                                .registerModule,
                                                o
                                                .registerModule =
                                                function (
                                                    path,
                                                    t,
                                                    e
                                                ) {
                                                    return
                                                        r
                                                        .call(
                                                            o,
                                                            path,
                                                            t,
                                                            Object
                                                            .assign({
                                                                    preserveState:
                                                                        !
                                                                        0
                                                                },
                                                                e
                                                            )
                                                        )
                                                },
                                                l =
                                                Nt({
                                                        head: {
                                                            title: "simple",
                                                            meta: [{
                                                                charset: "utf-8"
                                                            }, {
                                                                "baidu-gxt-verify-token": "db1ef7d8eda973eb27bf02fc7a14a774"
                                                            }, {
                                                                name: "google-site-verification",
                                                                content: "ZfNWrTJ32B_rrsj5Y5iUbB4EKgXbB4okYLgrdCv939Q"
                                                            }, {
                                                                hid: "description",
                                                                name: "description",
                                                                content: "simple"
                                                            }, {
                                                                hid: "keywords",
                                                                name: "keywords",
                                                                content: "王者荣耀加速器，国服游戏加速器，腾讯视频加速器，爱奇艺加速器，海外玩国服，海外听歌，优酷视频，手游加速器，海外华人加速器，网易云音乐，海外回国vpn，留学生云回国，海外回国加速器，酷狗音乐，QQ音乐，B站，虎牙直播，回国加速器，解除ip限制，网络加速器，视频加速器，游戏加速器，手游加速，海外游戏加速器，王者荣耀国服，国服加速，和平精英国服，第五人格国服，第五人格国服加速，荒野行动国服，和平精英加速器，第五人格加速器，荒野行动加速器，奇迹暖暖加速器，奇迹暖暖国服，剑网国服，剑网加速器，碧海蓝线加速器，碧海蓝线国服，碧海蓝线"
                                                            }],
                                                            link: [{
                                                                rel: "icon",
                                                                type: "image/x-icon",
                                                                href: "/favicon.ico"
                                                            }],
                                                            script: [{
                                                                async: "async",
                                                                src: "https://www.googletagmanager.com/gtag/js?id=AW-746290448"
                                                            }],
                                                            style: []
                                                        },
                                                        store: o,
                                                        router: n,
                                                        nuxt: {
                                                            defaultTransition: At,
                                                            transitions: [
                                                                At
                                                            ],
                                                            setTransitions: function (
                                                                    t
                                                                ) {
                                                                    return
                                                                        Array
                                                                        .isArray(
                                                                            t
                                                                        ) ||
                                                                        (
                                                                            t = [
                                                                                t
                                                                            ]
                                                                        ),
                                                                        t =
                                                                        t
                                                                        .map(
                                                                            (
                                                                                function (
                                                                                    t
                                                                                ) {
                                                                                    return
                                                                                        t =
                                                                                        t ?
                                                                                        "string" ==
                                                                                        typeof t ?
                                                                                        Object
                                                                                        .assign({},
                                                                                            At, {
                                                                                                name: t
                                                                                            }
                                                                                        ) :
                                                                                        Object
                                                                                        .assign({},
                                                                                            At,
                                                                                            t
                                                                                        ) :
                                                                                        At
                                                                                }
                                                                            )
                                                                        ),
                                                                        this
                                                                        .$options
                                                                        .nuxt
                                                                        .transitions =
                                                                        t,
                                                                        t
                                                                },
                                                                err: null,
                                                            dateErr: null,
                                                            error: function (
                                                                t
                                                            ) {
                                                                t
                                                                    =
                                                                    t ||
                                                                    null,
                                                                    l
                                                                    .context
                                                                    ._errored =
                                                                    Boolean(
                                                                        t
                                                                    ),
                                                                    t =
                                                                    t ?
                                                                    Object(
                                                                        x
                                                                        .o
                                                                    )
                                                                    (
                                                                        t
                                                                    ) :
                                                                    null;
                                                                var
                                                                    n =
                                                                    l
                                                                    .nuxt;
                                                                return
                                                                    this &&
                                                                    (
                                                                        n =
                                                                        this
                                                                        .nuxt ||
                                                                        this
                                                                        .$options
                                                                        .nuxt
                                                                    ),
                                                                    n
                                                                    .dateErr =
                                                                    Date
                                                                    .now(),
                                                                    n
                                                                    .err =
                                                                    t,
                                                                    e &&
                                                                    (
                                                                        e
                                                                        .nuxt
                                                                        .error =
                                                                        t
                                                                    ),
                                                                    t
                                                            }
                                                        }
                                                    },
                                                    ct
                                                ),
                                                o
                                                .app =
                                                l,
                                                d =
                                                e ?
                                                e
                                                .next :
                                                function (
                                                    t
                                                ) {
                                                    return
                                                        l
                                                        .router
                                                        .push(
                                                            t
                                                        )
                                                },
                                                e ?
                                                f =
                                                n
                                                .resolve(
                                                    e
                                                    .url
                                                )
                                                .route :
                                                (
                                                    path =
                                                    Object(
                                                        x
                                                        .f
                                                    )
                                                    (
                                                        n
                                                        .options
                                                        .base,
                                                        n
                                                        .options
                                                        .mode
                                                    ),
                                                    f =
                                                    n
                                                    .resolve(
                                                        path
                                                    )
                                                    .route
                                                ),
                                                t
                                                .next =
                                                13,
                                                Object(
                                                    x
                                                    .s
                                                )
                                                (
                                                    l, {
                                                        store: o,
                                                        route: f,
                                                        next: d,
                                                        error: l
                                                            .nuxt
                                                            .error
                                                            .bind(
                                                                l
                                                            ),
                                                        payload: e ?
                                                            e
                                                            .payload : void 0,
                                                        req: e ?
                                                            e
                                                            .req : void 0,
                                                        res: e ?
                                                            e
                                                            .res : void 0,
                                                        beforeRenderFns: e ?
                                                            e
                                                            .beforeRenderFns : void 0,
                                                        ssrContext: e
                                                    }
                                                );
                                        case 13:
                                            (
                                                function (
                                                    t,
                                                    e
                                                ) {
                                                    if (!
                                                        t
                                                    )
                                                        throw new Error(
                                                            "inject(key, value) has no key provided"
                                                        );
                                                    if (
                                                        void 0 ===
                                                        e
                                                    )
                                                        throw new Error(
                                                            "inject('"
                                                            .concat(
                                                                t,
                                                                "', value) has no value provided"
                                                            )
                                                        );
                                                    l
                                                        [
                                                            t =
                                                            "$" +
                                                            t
                                                        ] =
                                                        e,
                                                        o[
                                                            t
                                                        ] =
                                                        l[
                                                            t
                                                        ];
                                                    var
                                                        n =
                                                        "__nuxt_" +
                                                        t +
                                                        "_installed__";
                                                    c
                                                        .a[
                                                            n
                                                        ] ||
                                                        (
                                                            c
                                                            .a[
                                                                n
                                                            ] = !
                                                            0,
                                                            c
                                                            .a
                                                            .use(
                                                                (
                                                                    function () {
                                                                        Object
                                                                            .prototype
                                                                            .hasOwnProperty
                                                                            .call(
                                                                                c
                                                                                .a,
                                                                                t
                                                                            ) ||
                                                                            Object
                                                                            .defineProperty(
                                                                                c
                                                                                .a
                                                                                .prototype,
                                                                                t, {
                                                                                    get: function () {
                                                                                        return
                                                                                            this
                                                                                            .$root
                                                                                            .$options[
                                                                                                t
                                                                                            ]
                                                                                    }
                                                                                }
                                                                            )
                                                                    }
                                                                )
                                                            )
                                                        )
                                                }
                                            ),
                                            window
                                                .__NUXT__ &&
                                                window
                                                .__NUXT__
                                                .state &&
                                                o
                                                .replaceState(
                                                    window
                                                    .__NUXT__
                                                    .state
                                                ),
                                                t
                                                .next =
                                                18;
                                            break;
                                        case 18:
                                            t
                                                .next =
                                                21;
                                            break;
                                        case 21:
                                            t
                                                .next =
                                                24;
                                            break;
                                        case 24:
                                            t
                                                .next =
                                                27;
                                            break;
                                        case 27:
                                            t
                                                .next =
                                                30;
                                            break;
                                        case 30:
                                            t
                                                .next =
                                                33;
                                            break;
                                        case 33:
                                            t
                                                .next =
                                                36;
                                            break;
                                        case 36:
                                            t
                                                .next =
                                                39;
                                            break;
                                        case 39:
                                            t
                                                .next =
                                                42;
                                            break;
                                        case 42:
                                            t
                                                .next =
                                                45;
                                            break;
                                        case 45:
                                            return
                                                t
                                                .abrupt(
                                                    "return", {
                                                        store: o,
                                                        app: l,
                                                        router: n
                                                    }
                                                );
                                        case 46:
                                        case "end":
                                            return
                                                t
                                                .stop()
                                        }
                                }), t)
                    })))).apply(this, arguments)
            }
        }, 279: function (t, e, n) {
            "use strict";
            var o = n(104);
            n.n(o).a
        }, 280: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                ".error-con[data-v-777c955d]{width:100%;height:400px;position:fixed;z-index:99;top:calc(50% - 200px);left:0;text-align:center;box-sizing:border-box;padding:10px}.logo-e[data-v-777c955d]{position:relative;margin:60px auto 0;width:80px;height:80px;display:block;background:url(/img/login_logo.png) 50% no-repeat;background-size:contain}h2[data-v-777c955d]{line-height:30px;color:rgba(0,0,0,.6);font-size:16px;margin:20px auto 0}a[data-v-777c955d]{color:#1587fa;margin:20px auto;cursor:pointer}",
                ""
            ]), t.exports = e
        }, 281: function (t, e, n) {
            "use strict";
            var o = n(105);
            n.n(o).a
        }, 282: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#01a8ff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",
                ""
            ]), t.exports = e
        }, 283: function (t, e, n) {
            var content = n(284);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(15).default)("3781bd70", content, !0, {
                sourceMap: !1
            })
        }, 284: function (t, e, n) {
            var o = n(14),
                r = n(149),
                c = n(285),
                l = n(286),
                d = n(287),
                f = n(288),
                h = n(289);
            e = o(!1);
            var m = r(c),
                v = r(l),
                x = r(d),
                y = r(f),
                _ = r(h);
            e.push([t.i,
                '.footer .footer-main>.footer-main-content,.footer .footer-main>.footer-main-content>.right,.footer .footer-main>.footer-main-top,.header .header_main,.header .header_main .nav,.header .header_main .nav-u,.header .header_main .nav-user,.layer-conetnt.layerCoupon>.inner>.inner-content .layerCouponChoose,.layer-conetnt>.inner>.inner-content>.agree{*zoom:1}.footer .footer-main>.footer-main-content:after,.footer .footer-main>.footer-main-content:before,.footer .footer-main>.footer-main-content>.right:after,.footer .footer-main>.footer-main-content>.right:before,.footer .footer-main>.footer-main-top:after,.footer .footer-main>.footer-main-top:before,.header .header_main .nav-u:after,.header .header_main .nav-u:before,.header .header_main .nav-user:after,.header .header_main .nav-user:before,.header .header_main .nav:after,.header .header_main .nav:before,.header .header_main:after,.header .header_main:before,.layer-conetnt.layerCoupon>.inner>.inner-content .layerCouponChoose:after,.layer-conetnt.layerCoupon>.inner>.inner-content .layerCouponChoose:before,.layer-conetnt>.inner>.inner-content>.agree:after,.layer-conetnt>.inner>.inner-content>.agree:before{content:"";display:table}.footer .footer-main>.footer-main-content:after,.footer .footer-main>.footer-main-content>.right:after,.footer .footer-main>.footer-main-top:after,.header .header_main .nav-u:after,.header .header_main .nav-user:after,.header .header_main .nav:after,.header .header_main:after,.layer-conetnt.layerCoupon>.inner>.inner-content .layerCouponChoose:after,.layer-conetnt>.inner>.inner-content>.agree:after{clear:both}.iconfont,.modal.activities .modal-main .close-btn:after{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}body{margin:0;color:#333;background-color:#fff}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline;*display:inline;*zoom:1}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent;text-decoration:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0;vertical-align:middle;-ms-interpolation-mode:bicubic}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto;white-space:pre;white-space:pre-wrap;word-wrap:break-word}code,kbd,pre,samp{font-family:monospace,monospace;_font-family:courier new,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;*margin-left:-7px}textarea{overflow:auto;resize:vertical}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}q{quotes:none}button,html,input,select,textarea{font-family:Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Helvetica Neue,Helvetica,Tahoma,sans-serif}blockquote,figure,form,h1,h2,h3,h4,h5,h6,p{margin:0}dd,dl,li,ol,ul{margin:0;padding:0}ol,ul{list-style:none outside none}h1,h2,h3{line-height:2;font-weight:400}h1{font-size:21px}h2{font-size:18.2px}h3{font-size:16.38px}h4{font-size:14px}h5,h6{font-size:11.9px;text-transform:uppercase}input:-moz-placeholder,input::-moz-placeholder,textarea:-moz-placeholder,textarea::-moz-placeholder{color:#e6e6e6}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#e6e6e6}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#e6e6e6}body{font-family:Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;font-size:14px;line-height:1.5}@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_951033_1c0hnnmj6ap.eot);src:url(//at.alicdn.com/t/font_951033_1c0hnnmj6ap.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_951033_1c0hnnmj6ap.woff2) format("woff2"),url(//at.alicdn.com/t/font_951033_1c0hnnmj6ap.woff) format("woff"),url(//at.alicdn.com/t/font_951033_1c0hnnmj6ap.ttf) format("truetype"),url(//at.alicdn.com/t/font_951033_1c0hnnmj6ap.svg#iconfont) format("svg")}.iconfont,.modal.activities .modal-main .close-btn:after{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconfont{font-size:16px}.swiper-content{overflow:hidden}.header{position:fixed;left:0;top:0;z-index:100;width:100%;height:auto;background:#fff}.header.active{box-shadow:0 0 10px 1px rgba(0,0,0,.15)}.header .header_main{position:relative;margin:0 auto;width:1200px;height:69px}.header .header_main .logo{cursor:pointer;position:absolute;width:306px;height:48px;left:0;top:50%;transform:translateY(-50%)}.header .header_main .logo>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.header .header_main .nav{margin-right:25px;position:relative;top:20px;float:right}.header .header_main .nav .mealBuytop{position:absolute;display:block;padding:0 8px;height:22px;line-height:20px;background:url(' +
                m +
                ') no-repeat 50%;background-size:100% 100%;color:#fff;font-size:12px;left:178px;top:-20px;-webkit-animation:topTips 1.2s infinite;animation:topTips 1.2s infinite}.header .header_main .nav a{float:left;display:block;position:relative;color:#333;font-size:14px;width:90px;height:34px;line-height:34px;margin-left:20px}.header .header_main .nav a>img{display:block;position:absolute;max-width:70px;max-height:24px;color:#fff;top:-20px;left:calc(50% - 43px);padding:0 5px;-webkit-animation:swing 1s infinite;animation:swing 1s infinite}.header .header_main .nav a:nth-child(3),.header .header_main .nav a:nth-child(4){padding:0 13px}.header .header_main .nav a:nth-child(3).active,.header .header_main .nav a:nth-child(3):hover,.header .header_main .nav a:nth-child(4).active,.header .header_main .nav a:nth-child(4):hover{color:#fff;background:#01a8ff}.header .header_main .nav a.nuxt-link-exact-active,.header .header_main .nav a:hover{color:#fff;border-radius:4px;background:#01a8ff;background-size:contain}.header .header_main .nav-u{position:relative;top:0;float:right}.header .header_main .nav-u a{cursor:pointer;margin-right:10px;float:left;display:block;color:#333;width:65px;height:70px;line-height:70px}.header .header_main .nav-u a.active,.header .header_main .nav-u a:hover{color:#fff;background:#01a8ff;background-size:contain}.header .header_main .nav-user{display:none;position:relative;text-align:left;box-sizing:border-box;padding:20px 0;width:auto;float:right;height:69px}.header .header_main .nav-user:hover>.nav-user-select{display:block}.header .header_main .nav-user>.name{position:relative}.header .header_main .nav-user>.name:before{float:right;position:relative;content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #b3b3b3;top:13px;margin-left:14px}.header .header_main .nav-user>.name i{float:right;margin-right:10px;box-sizing:border-box;border:1px solid #e6e6e6;display:block;width:30px;height:30px;border-radius:50%;background:url(' +
                v +
                ') no-repeat 50%;background-size:cover}.header .header_main .nav-user>.name>a{float:right;position:relative;top:4px;font-size:14px;color:#333;display:block;cursor:pointer}.header .header_main .nav-user>.nav-user-select{display:none;box-sizing:border-box;padding:8px 0;position:absolute;top:62px;right:-15px;width:110px;height:auto;border-radius:5px;background:#fff;border:1px solid #e6e6e6}.header .header_main .nav-user>.nav-user-select:before{display:block;position:absolute;right:12px;top:-10px;content:"";width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:9px solid #e6e6e6}.header .header_main .nav-user>.nav-user-select:after{display:block;position:absolute;right:13px;top:-8px;content:"";width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid #fff}.header .header_main .nav-user>.nav-user-select>a{color:#333;display:block;cursor:pointer;height:30px;text-align:center;line-height:30px;transition:all .3s ease}.header .header_main .nav-user>.nav-user-select>a:hover{background:#faeaea}.layer-conetnt{display:block;position:fixed;z-index:123;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6)}.layer-conetnt>.inner{position:absolute;left:50%;top:calc(50% - 20px);transform:translate(-50%,-50%);width:480px;height:auto;border-radius:8px;background-color:#fff;transition:.3s}.layer-conetnt>.inner.christmas{height:542px;background:#fff4e2}.layer-conetnt>.inner.christmas:before{content:"";position:absolute;top:-149px;left:-83px;width:630px;height:729px;background:url(' +
                x +
                ") no-repeat 50%}.layer-conetnt>.inner.layer-reg-win{box-sizing:border-box}.layer-conetnt>.inner.layer-reg-win .iconfont-win{font-size:70px;color:#6dca6e}.layer-conetnt>.inner.layer-reg-win .inner-content>h1{font-size:20px;color:#333;line-height:30px}.layer-conetnt>.inner.layer-reg-win .inner-content>h2{font-size:14px;line-height:36px;color:#333}.layer-conetnt>.inner.layer-reg-win .layerCouponChoose .submit{margin:0 auto;width:160px}.layer-conetnt>.inner.layer-reg-win .code-content{padding:5px;position:relative;width:116px;height:116px;margin:10px auto 20px;box-sizing:border-box;border-radius:5px;background:#8fd9ff}.layer-conetnt>.inner.layer-reg-win .code-content>img{display:block;position:absolute;top:5px;left:5px;width:106px;height:106px}.layer-conetnt>.inner.spring-festival{background-color:#cb2f31}.layer-conetnt>.inner.spring-festival .chinese-knot>a{position:absolute;width:30px;height:30px;background:url(" +
                y +
                ") no-repeat -3px -3px}.layer-conetnt>.inner.spring-festival .chinese-knot>a.top-left{top:20px;left:20px}.layer-conetnt>.inner.spring-festival .chinese-knot>a.right-bottom{right:20px;bottom:20px;transform:rotate(180deg)}.layer-conetnt>.inner>.pig{display:block;position:absolute;top:-93px;left:0;width:216px;height:93px;background:url(" +
                y +
                ") no-repeat 0 -54px}.layer-conetnt>.inner>.closestyle{cursor:pointer;position:absolute;top:14px;right:14px;height:35px;line-height:35px;z-index:123}.layer-conetnt>.inner>.closestyle>i{color:#ccc;font-size:25px}.layer-conetnt>.inner>.inner-content{position:relative;box-sizing:border-box;padding:0 65px 35px}.layer-conetnt>.inner>.inner-content .submit{cursor:pointer;display:block;border-radius:8px;width:353px;height:50px;line-height:50px;color:#fff;font-size:20px;overflow:hidden;background-color:#01a8ff;border:none;transition:all .3s ease}.layer-conetnt>.inner>.inner-content .submit:hover{background-color:#0095e2}.layer-conetnt>.inner>.inner-content>.agree{text-align:left;margin-top:25px;color:#999;font-size:12px}.layer-conetnt>.inner>.inner-content>.agree a{cursor:pointer;color:#01a8ff}.layer-conetnt>.inner>.inner-content>.agree>span{float:right}.layer-conetnt>.inner>.inner-content>.agree>span.main{float:inherit;text-align:center;display:block}.layer-conetnt>.inner>.inner-content .logo-img-content{margin:35px auto 10px;width:60px;height:60px;border-radius:8px;background-color:#fff;box-sizing:border-box;padding-top:15px}.layer-conetnt>.inner>.inner-content .logo-img{margin:0 auto;width:60px;display:block;-o-object-fit:cover;object-fit:cover}.layer-conetnt>.inner>.inner-content>.inner-h1{margin-bottom:18px;color:#333;line-height:40px;font-size:20px}.layer-conetnt>.inner>.inner-content>label{position:relative;margin-bottom:18px;display:block;border:1px solid #e6e6e6;border-radius:8px;width:353px;height:49px;overflow:hidden;background-color:#fff}.layer-conetnt>.inner>.inner-content>label>span{position:absolute;left:17px;color:#999;font-size:14px;top:11px}.layer-conetnt>.inner>.inner-content>label>span>i{font-size:20px}.layer-conetnt>.inner>.inner-content>label>.input{position:absolute;top:0;color:#333;font-size:14px;left:55px;border:none;width:80%;height:100%;outline:none;box-shadow:inset 0 0 0 30px #fff}.layer-conetnt>.inner>.inner-content>label>.input::-webkit-input-placeholder{color:#999}.layer-conetnt>.inner>.inner-content>label>.input:-moz-placeholder,.layer-conetnt>.inner>.inner-content>label>.input::-moz-placeholder{color:#999}.layer-conetnt>.inner>.inner-content>label>.input:-ms-input-placeholder{color:#999}.layer-conetnt>.inner>.inner-content>label #btn{position:absolute;top:14px;color:#00a8fe;right:9px;outline:none;border:none;box-shadow:inset 0 0 0 15px #fff;background:none}.layer-conetnt>.inner>.inner-content>label #btn:active{opacity:.8}.layer-conetnt>.inner .verify{position:absolute;top:5px;color:#01a8ff;right:9px;outline:none;border:none;box-shadow:inset 0 0 0 25px #fff;background:none;width:90px;height:40px;cursor:pointer}.layer-conetnt>.inner .verify:active{opacity:.8}.layer-conetnt.layerCoupon>.inner>.inner-content{padding-top:30px}.layer-conetnt.layerCoupon>.inner>.inner-content .err-tips{font-size:14px;color:#eb1212;margin:-19px 0 10px}.layer-conetnt.layerCoupon>.inner>.inner-content>label>.input{left:20px}.layer-conetnt.layerCoupon>.inner>.inner-content .layerCouponChoose a{display:inline-block;width:160px}.layer-conetnt.layerCoupon>.inner>.inner-content .layerCouponChoose a:first-child{box-shadow:inset 0 0 0 1px #e6e6e6;float:left;background:#fff;color:#333}.layer-conetnt.layerCoupon>.inner>.inner-content .layerCouponChoose a:last-child{float:right}.layer-conetnt.layer-conetnt .layer-conetnt-win{text-align:left;margin:10px auto 0;width:323px;box-sizing:border-box;padding-left:59px}.layer-conetnt.layer-conetnt .layer-conetnt-win p{margin-bottom:20px}.layer-conetnt.layer-conetnt .layer-conetnt-win span{display:block}.layer-conetnt.layer-conetnt .layer-conetnt-win span:first-child{color:#333;font-size:14px}.layer-conetnt.layer-conetnt .layer-conetnt-win span:nth-child(2){font-size:12px;margin-top:5px;color:grey;box-sizing:border-box;padding-left:27px}.layer-conetnt.layerEdit>.inner>.inner-content{padding-top:30px}.footer{width:100%;height:auto;background:#1a1a1a}.footer .footer-main{margin:0 auto;width:1200px;box-sizing:border-box}.footer .footer-main>.footer-main-top{width:100%;height:auto}.footer .footer-main>.footer-main-top>.item{font-size:14px;color:#fff;line-height:89px;width:20%;height:94px;float:left}.footer .footer-main>.footer-main-top>.item>i{margin-right:5px;position:relative;top:7px;font-size:34px}.footer .footer-main>.footer-main-content{box-sizing:border-box;padding:13px 0 54px}.footer .footer-main>.footer-main-content>.left{float:left;width:270px;height:auto}.footer .footer-main>.footer-main-content>.left>.logo-img{margin-bottom:35px;float:left;width:auto;display:block;-o-object-fit:cover;object-fit:cover}.footer .footer-main>.footer-main-content>.left>.img-item{float:left;display:block;box-sizing:border-box;width:100px;height:100px;padding:8px;margin-right:20px;border-radius:8px;background-color:#fff}.footer .footer-main>.footer-main-content>.left>.img-item>img{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.footer .footer-main>.footer-main-content>.left>.img-item p{margin-top:22px;color:#fff}.footer .footer-main>.footer-main-content>.right{width:720px;float:right}.footer .footer-main>.footer-main-content>.right ul{float:left;width:240px;text-align:left}.footer .footer-main>.footer-main-content>.right ul:last-child{width:220px}.footer .footer-main>.footer-main-content>.right ul>li{line-height:30px}.footer .footer-main>.footer-main-content>.right ul>li a{width:50%;display:inline-block;font-size:14px;color:hsla(0,0%,100%,.6);transition:all .3s ease;white-space:nowrap}.footer .footer-main>.footer-main-content>.right ul>li a:hover{color:#fff}.footer .footer-main>.footer-main-content>.right ul>li:first-child{margin-bottom:15px;line-height:40px}.footer .footer-main>.footer-main-content>.right ul>li:first-child a{font-size:16px;color:#fff}.footer>.address{line-height:40px;text-align:center;color:#fff;font-size:12px;border-top:1px solid #4d4d4d;padding:6px 0 15px}.footer>.address a{cursor:pointer;color:#fff}.layer-content{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;background:rgba(0,0,0,.45)}.right-link{width:90px;height:210px;border-radius:5px;position:fixed;right:0;top:400px;z-index:10;background:#01a8ff}.right-link>a{display:block;width:100%;height:70px;border-radius:5px;position:relative;text-decoration:none;z-index:5}.right-link>a>i{display:block;width:100%;color:#fff;font-size:25px;padding-top:5px}.right-link>a>span{display:block;width:70%;padding-bottom:8px;margin:0 auto;color:#fff;box-sizing:border-box;border-bottom:2px solid #80c8ff;font-size:12px}.right-link>a>p{width:210px;height:60px;position:absolute;background:url(/img/show-bg.png) no-repeat 50%;background-size:100% 100%;top:calc(50% - 30px);left:-220px;color:#0190ff;line-height:60px;font-size:14px;letter-spacing:1px;display:none}.right-link>a>p>img{display:block;width:130px;margin-left:15px;margin-top:12px}.right-link>a:hover{background:#0190ff;cursor:pointer}.right-link>a:hover>p{display:block}.right-link .return-top>span{border:none}.right-link .qq>p,.right-link .wechat>p{background:url(/img/show-big.png) no-repeat 50%;width:170px;height:156px;top:calc(50% - 78px);left:-180px}.wx-code{position:fixed;z-index:10;left:50%;top:600px;transform:translateX(-812px);border-radius:8px;box-shadow:0 0 20px 0 rgba(1,168,255,.2);width:147px;height:235px;background-color:#01a8ff}.wx-code>.wx-code-h1{display:block;line-height:42px;font-size:14px;color:#fff}.wx-code>.code-img{display:block;margin:0 auto;width:127px;padding:8px;height:127px;border-radius:8px;background:#fff;box-sizing:border-box;-o-object-fit:cover;object-fit:cover}.wx-code>.code-img img{display:block;width:100%;height:100%}.wx-code .join-in{cursor:default;display:block;width:127px;height:37px;line-height:34px;color:#01a8ff;font-size:14px;margin:15px auto 0;border-radius:8px;background-color:#fff;transition:all .3s ease}.wx-code .join-in>i{position:relative;top:3px;font-size:22px}.wx-code .join-in:hover{color:rgba(1,168,255,.7)}.qq-serve{z-index:999;top:630px;color:#fff;right:50%;transform:translateX(728px);width:115px;height:148px;background:url(" +
                _ +
                ') no-repeat 50%}.qq-serve,.returnTop{cursor:pointer;position:fixed}.returnTop{display:none;width:45px;height:65px;line-height:65px;right:50px;text-align:center;bottom:50px;color:#e6e6e6;transition:all .3s ease}.returnTop:hover{color:#03a9ff}.returnTop>i{position:relative;left:-4px;font-size:55px}.returnTop.active{color:#03a9ff}.modal{position:fixed;width:100%;height:100%;z-index:1000;background:rgba(0,0,0,.6);top:0;left:0;display:block;opacity:0;filter:alpha(opacity=0);display:none}.modal.activities .modal-main{position:absolute;width:600px;height:400px;display:block}.modal.activities .modal-main>.bg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.modal.activities .modal-main .close-btn{position:absolute;width:36px;height:36px;display:block;z-index:2;border:2px solid hsla(0,0%,93.3%,.7);color:hsla(0,0%,93.3%,.7);top:-30px;right:-30px;line-height:34px;text-align:center;box-sizing:border-box;font-size:24px;border-radius:100%;cursor:pointer;transition:all .3s ease}.modal.activities .modal-main .close-btn:after{content:"\\e604"}.modal.activities .modal-main .close-btn:hover{color:#fff;border:2px solid #fff}.modal.activities .modal-main .button{position:absolute;bottom:-20px;width:264px;height:84px;left:calc(50% - 132px);line-height:84px;cursor:pointer;text-align:center;display:block;border:none;background:none;outline:none}.modal.activities .modal-main .button img{position:absolute;left:50%;top:50%;z-index:1;transform:translate(-50%,-50%)}.modal.activities .modal-main .button span{font-size:26px;letter-spacing:2px;color:#fff;position:relative;z-index:2}.modal .modal-main{position:absolute;left:50%;top:0;transition:.5s;transform:translate(-50%,-50%)}.modal.active{opacity:1;filter:alpha(opacity=100);display:block}.modal.active .modal-main{top:50%}.abouts_us{display:none}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.modal-enter-active .inner,.modal-leave-active .inner{transition:.4s}.modal-enter .inner,.modal-leave-to .inner{transform:translate(-50%,-70%);opacity:0;filter:alpha(opacity=0)}.modal-enter-to .inner,.modal-leave .inner{transform:translate(-50%,-50%);opacity:1;filter:alpha(opacity=100)}@media screen and (max-width:1500px){.wx-code{left:20px}.qq-serve,.wx-code{transform:translateX(0)}.qq-serve{right:20px}}.fadeInUpMountain{-webkit-animation:fadeInUpMountain 1s ease 0s both;-moz-animation:fadeInUpMountain 1s 0s ease both}@-webkit-keyframes fadeInUpMountain{0%{opacity:0;-webkit-transform:translateY(20px)}to{opacity:.3;-webkit-transform:translateY(0)}}.fadeInUp{-webkit-animation:fadeInUp 1s ease 0s both;-moz-animation:fadeInUp 1s 0s ease both}@-webkit-keyframes fadeInUp{0%{-webkit-transform:translateY(0)}to{opacity:1;-webkit-transform:translateY(-50px)}}.fadeInBlock{-webkit-animation:fadeInBlock 2s ease .5s both;-moz-animation:fadeInBlock 2s .5s ease both}@-webkit-keyframes fadeInBlock{0%{opacity:0}to{opacity:1}}.fadeInRight{-webkit-animation:fadeInRight 1s ease .2s both;-moz-animation:fadeInRight 1s .2s ease both}.fadeInDown{-webkit-animation:fadeInDown 1s ease .5s both;-moz-animation:fadeInDown 1s .5s ease both}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0)}}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(100px)}to{opacity:1;-webkit-transform:translateX(0)}}.fadeInTop{-webkit-animation:fadeInTop .5s ease-in .5s both;-moz-animation:fadeInTop .5s .5s ease-in both}@-webkit-keyframes fadeInTop{to{transform:translateY(275px)}}.fadeInTopRight{-webkit-animation:fadeInTopRight 1s ease .8s both;-moz-animation:fadeInTopRight 1s .8s ease both}@-webkit-keyframes fadeInTopRight{0%{opacity:0;transform:scale(.7)}50%{transform:translate(105px,58px)}to{opacity:1;transform:scale(1);transform:translate(81px,55px)}}@-webkit-keyframes topTips{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}@keyframes topTips{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}@-webkit-keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}',
                ""
            ]), t.exports = e
        }, 285: function (t, e, n) {
            t.exports = n.p + "img/13f114a.png"
        }, 286: function (t, e, n) {
            t.exports = n.p + "img/aaef1f0.png"
        }, 287: function (t, e, n) {
            t.exports = n.p + "img/04904d1.png"
        }, 288: function (t, e, n) {
            t.exports = n.p + "img/420c877.png"
        }, 289: function (t, e, n) {
            t.exports = n.p + "img/cfcbe9e.png"
        }, 294: function (t, e, n) {
            t.exports = n.p + "img/100c707.png"
        }, 295: function (t, e, n) {
            t.exports = n.p + "img/86c0f0f.jpg"
        }, 296: function (t, e, n) {
            "use strict";
            var o = n(106);
            n.n(o).a
        }, 297: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                ".footer .abouts_us[data-v-5fd57f34]{display:block}.footer .abouts_us .mylink[data-v-5fd57f34]{text-decoration:none}",
                ""
            ]), t.exports = e
        }, 298: function (t, e, n) {
            "use strict";
            var o = n(107);
            n.n(o).a
        }, 299: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                "a[data-v-5fd57f34]{text-decoration:none}",
                ""
            ]), t.exports = e
        }, 3: function (t, e, n) {
            "use strict";
            var o = n(79),
                r = n(2),
                c = {
                    verifyUser: {
                        url: "wapi/account/chk_user_session",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getUserInfo: {
                        url: "wapi/account/get_account_info",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    login: {
                        url: "wapi/account/login",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getOriginInfo: {
                        url: "wapi/uc/get_origin",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    register: {
                        url: "wapi/account/reg_email",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    changePwd: {
                        url: "wapi/account/change_pwd",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    forgetPsd: {
                        url: "wapi/account/find_pass",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getVerifyImg: {
                        url: "wapi/account/verify_new",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getEmailCode: {
                        url: "wapi/account/web_get_email_code_new",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getWapEmailCode: {
                        url: "wapi/account/web_get_email_code",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getCouponList: {
                        url: "wapi/uc/web_get_coupon",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getGiftCoupons: {
                        url: "wapi/uc/web_parcel",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getNewCoupons: {
                        url: "wapi/uc/set_exchange",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getOrderList: {
                        url: "wapi/uc/web_get_orders",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getDownList: {
                        url: "wapi/download/get_list_web",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getUserNum: {
                        url: "wapi/stats/get_reg_num",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getActivityList: {
                        url: "wapi/article/get_activity_list",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getActivityDetail: {
                        url: "wapi/article/get_activity_info",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getArticleList: {
                        url: "wapi/article/get_list",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getArticleInfo: {
                        url: "wapi/article/get_info",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getSearchInfo: {
                        url: "wapi/article/wap_search",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getHelpArticleCode: {
                        url: "wapi/article/get_cate_list",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getHelpArticleList: {
                        url: "wapi/article/get_list",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getHelpArticleInfo: {
                        url: "wapi/article/get_info",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getIndexInfo: {
                        url: "wapi/ad/get_index_ad_info",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getMealList: {
                        url: "wapi/ad/pak_list",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    createOrder: {
                        url: "wapi/pay/order",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    createPay: {
                        url: "wapi/pay/gateway",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    checkPayState: {
                        url: "wapi/pay/chk_pay_success",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getWapDownList: {
                        url: "wapi/download/get_down_info",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getSignList: {
                        url: "wapi/account/sign_list",
                        method: "GET",
                        root: "",
                        cache: ""
                    },
                    wapSignIn: {
                        url: "wapi/account/sign",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    canSignIn: {
                        url: "wapi/account/get_sign",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getGocnInfo: {
                        url: "wapi/ad/ad",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    getInviteCode: {
                        url: "wapi/ad/get_invite_code",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    setInvite: {
                        url: "wapi/ad/set_invite",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    clickTrack: {
                        url: "wapi/stats/web_down_stats",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    user_event_track: {
                        url: "wapi/stats/web_channal_stats",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    rightLink: {
                        url: "wapi/plugin/get_service",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    activity_detail: {
                        url: "wapi/article/get_activity_detail",
                        method: "GET",
                        root: "",
                        cache: !0
                    },
                    track_submit: {
                        url: "upbehavior",
                        method: "POST",
                        root: "BI_TRACK",
                        cache: ""
                    },
                    getChoiceTime: {
                        url: "wapi/ad/user_draw_number",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getRewardInf: {
                        url: "wapi/ad/get_draw_active",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    getRedBag: {
                        url: "wapi/ad/get_red_package",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    buyMealNum: {
                        url: "wapi/ad/order_get_num",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    topTip: {
                        url: "wapi/ad/get_pendant_info",
                        method: "POST",
                        root: "",
                        cache: !0
                    },
                    accessCheck: {
                        url: "wapi/beian/index",
                        method: "POST",
                        root: "",
                        cache: !1
                    },
                    agentSubmit: {
                        url: "wapi/agent/save",
                        method: "POST",
                        root: "",
                        cache: ""
                    },
                    embed_order_list: {
                        url: "wapi/rtb/order_list",
                        method: "POST",
                        root: "RTB",
                        cache: ""
                    },
                    embed_pak_list: {
                        url: "wapi/rtb/pak_list",
                        method: "POST",
                        root: "RTB",
                        cache: ""
                    },
                    get_client_orders: {
                        url: "wapi/uc/get_client_orders",
                        method: "POST",
                        root: "",
                        cache: ""
                    }
                },
                l = {},
                d = function (t) {
                    var e = t.method,
                        n = t.root,
                        c = r.a[n] ? r.a[n] + t.url :
                        "https://turtle.wapi.yuanzidian.com/" + t.url;
                    return function (n) {
                        return n || (n = {}), n.cache = t.cache,
                            "POST" == e ? o.a.post(c, n) :
                            "JSONP" == e ? o.a.ajax(c, n) : o.a
                            .get(c, n)
                    }
                };
            for (var f in c) l[f] = d(c[f]);
            e.a = l
        }, 300: function (t, e, n) {
            t.exports = n.p + "img/0d953e0.jpg"
        }, 301: function (t, e, n) {
            "use strict";
            var o = n(108);
            n.n(o).a
        }, 302: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                ".toast[data-v-33902900]{display:none;position:fixed;left:50%;transform:translateX(-50%);background-color:#000;opacity:.7;padding:0 20px;height:48px;font-size:14px;line-height:48px;color:#fff;border-radius:3px;z-index:1000}.ac[data-v-33902900]{display:block}",
                ""
            ]), t.exports = e
        }, 303: function (t, e, n) {
            "use strict";
            var o = n(109);
            n.n(o).a
        }, 304: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                ".header .header_main .nav-user .name .logo[data-v-650ca326]{top:30px;width:auto}.header .header_main .acuser[data-v-650ca326]{display:block}.header .header_main .nav a[data-v-650ca326]{text-decoration:none}",
                ""
            ]), t.exports = e
        }, 305: function (t, e, n) {
            "use strict";
            var o = n(110);
            n.n(o).a
        }, 306: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                "button[data-v-0a701055]{outline:none}.closestyle .iconfont[data-v-0a701055]:hover,.toagreement[data-v-0a701055]{color:#01a8ff}.toagreement[data-v-0a701055]{cursor:pointer}.disable[data-v-0a701055]{cursor:default!important}.disable[data-v-0a701055],.disable[data-v-0a701055]:hover{background:rgba(1,168,255,.5)!important}",
                ""
            ]), t.exports = e
        }, 307: function (t, e, n) {
            "use strict";
            var o = n(111);
            n.n(o).a
        }, 308: function (t, e, n) {
            (e = n(14)(!1)).push([t.i,
                ".body[data-v-0409bdf2]{width:100%;text-align:center;position:relative;min-width:1200px;margin:0 auto;box-sizing:border-box;padding-top:69px}",
                ""
            ]), t.exports = e
        }, 309: function (t, e, n) {
            "use strict";
            var o = n(112);
            n.n(o).a
        }, 310: function (t, e, n) {
            var o = n(14),
                r = n(149),
                c = n(311),
                l = n(312);
            e = o(!1);
            var d = r(c),
                f = r(l);
            e.push([t.i,
                '.body[data-v-06f2da9e]{width:100%;text-align:center;position:relative;min-width:750px;margin:0 auto}.iconfont[data-v-06f2da9e]{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}html[data-v-06f2da9e]{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}body[data-v-06f2da9e]{margin:0;color:#333;background-color:#fff}article[data-v-06f2da9e],aside[data-v-06f2da9e],details[data-v-06f2da9e],figcaption[data-v-06f2da9e],figure[data-v-06f2da9e],footer[data-v-06f2da9e],header[data-v-06f2da9e],hgroup[data-v-06f2da9e],main[data-v-06f2da9e],nav[data-v-06f2da9e],section[data-v-06f2da9e],summary[data-v-06f2da9e]{display:block}audio[data-v-06f2da9e],canvas[data-v-06f2da9e],progress[data-v-06f2da9e],video[data-v-06f2da9e]{display:inline-block;vertical-align:baseline;*display:inline;*zoom:1}audio[data-v-06f2da9e]:not([controls]){display:none;height:0}[hidden][data-v-06f2da9e],template[data-v-06f2da9e]{display:none}a[data-v-06f2da9e]{background:transparent;text-decoration:none}a[data-v-06f2da9e]:active,a[data-v-06f2da9e]:hover{outline:0}abbr[title][data-v-06f2da9e]{border-bottom:1px dotted}b[data-v-06f2da9e],strong[data-v-06f2da9e]{font-weight:700}dfn[data-v-06f2da9e]{font-style:italic}mark[data-v-06f2da9e]{background:#ff0;color:#000}small[data-v-06f2da9e]{font-size:80%}sub[data-v-06f2da9e],sup[data-v-06f2da9e]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup[data-v-06f2da9e]{top:-.5em}sub[data-v-06f2da9e]{bottom:-.25em}img[data-v-06f2da9e]{border:0;vertical-align:middle;-ms-interpolation-mode:bicubic}svg[data-v-06f2da9e]:not(:root){overflow:hidden}hr[data-v-06f2da9e]{box-sizing:content-box;height:0}pre[data-v-06f2da9e]{overflow:auto;white-space:pre;white-space:pre-wrap;word-wrap:break-word}code[data-v-06f2da9e],kbd[data-v-06f2da9e],pre[data-v-06f2da9e],samp[data-v-06f2da9e]{font-family:monospace,monospace;_font-family:courier new,monospace;font-size:1em}button[data-v-06f2da9e],input[data-v-06f2da9e],optgroup[data-v-06f2da9e],select[data-v-06f2da9e],textarea[data-v-06f2da9e]{color:inherit;font:inherit;margin:0}button[data-v-06f2da9e]{overflow:visible}button[data-v-06f2da9e],select[data-v-06f2da9e]{text-transform:none}button[data-v-06f2da9e],html input[type=button][data-v-06f2da9e],input[type=reset][data-v-06f2da9e],input[type=submit][data-v-06f2da9e]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled][data-v-06f2da9e],html input[disabled][data-v-06f2da9e]{cursor:default}button[data-v-06f2da9e]::-moz-focus-inner,input[data-v-06f2da9e]::-moz-focus-inner{border:0;padding:0}input[data-v-06f2da9e]{line-height:normal}input[type=checkbox][data-v-06f2da9e],input[type=radio][data-v-06f2da9e]{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type=number][data-v-06f2da9e]::-webkit-inner-spin-button,input[type=number][data-v-06f2da9e]::-webkit-outer-spin-button{height:auto}input[type=search][data-v-06f2da9e]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search][data-v-06f2da9e]::-webkit-search-cancel-button,input[type=search][data-v-06f2da9e]::-webkit-search-decoration{-webkit-appearance:none}fieldset[data-v-06f2da9e]{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend[data-v-06f2da9e]{border:0;padding:0;*margin-left:-7px}textarea[data-v-06f2da9e]{overflow:auto;resize:vertical}optgroup[data-v-06f2da9e]{font-weight:700}table[data-v-06f2da9e]{border-collapse:collapse;border-spacing:0}td[data-v-06f2da9e],th[data-v-06f2da9e]{padding:0}q[data-v-06f2da9e]{quotes:none}button[data-v-06f2da9e],html[data-v-06f2da9e],input[data-v-06f2da9e],select[data-v-06f2da9e],textarea[data-v-06f2da9e]{font-family:Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Helvetica Neue,Helvetica,Tahoma,sans-serif}blockquote[data-v-06f2da9e],figure[data-v-06f2da9e],form[data-v-06f2da9e],h1[data-v-06f2da9e],h2[data-v-06f2da9e],h3[data-v-06f2da9e],h4[data-v-06f2da9e],h5[data-v-06f2da9e],h6[data-v-06f2da9e],p[data-v-06f2da9e]{margin:0}dd[data-v-06f2da9e],dl[data-v-06f2da9e],li[data-v-06f2da9e],ol[data-v-06f2da9e],ul[data-v-06f2da9e]{margin:0;padding:0}ol[data-v-06f2da9e],ul[data-v-06f2da9e]{list-style:none outside none}h1[data-v-06f2da9e],h2[data-v-06f2da9e],h3[data-v-06f2da9e]{line-height:2;font-weight:400}h1[data-v-06f2da9e]{font-size:21px}h2[data-v-06f2da9e]{font-size:18.2px}h3[data-v-06f2da9e]{font-size:16.38px}h4[data-v-06f2da9e]{font-size:14px}h5[data-v-06f2da9e],h6[data-v-06f2da9e]{font-size:11.9px;text-transform:uppercase}input[data-v-06f2da9e]:-moz-placeholder,input[data-v-06f2da9e]::-moz-placeholder,textarea[data-v-06f2da9e]:-moz-placeholder,textarea[data-v-06f2da9e]::-moz-placeholder{color:#e6e6e6}input[data-v-06f2da9e]:-ms-input-placeholder,textarea[data-v-06f2da9e]:-ms-input-placeholder{color:#e6e6e6}input[data-v-06f2da9e]::-webkit-input-placeholder,textarea[data-v-06f2da9e]::-webkit-input-placeholder{color:#e6e6e6}html[data-v-06f2da9e]{width:100%;min-height:100%}body[data-v-06f2da9e],html[data-v-06f2da9e]{position:relative}body[data-v-06f2da9e]{font-family:Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;font-size:14px;line-height:1.5;width:750px;text-align:center;background:#fff;margin:auto}.iconfont[data-v-06f2da9e]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a[href*="www.cnzz.com"][data-v-06f2da9e]{display:none}a[data-v-06f2da9e]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.banner[data-v-06f2da9e]{width:750px;height:412px;background:url(' +
                d +
                ") no-repeat 50%;background-size:cover;color:#fff}.banner>h1[data-v-06f2da9e]{box-sizing:border-box;padding-top:252px;font-size:36px;line-height:75px}.banner>h2[data-v-06f2da9e]{font-size:24px}.hg-layer[data-v-06f2da9e]{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;background:rgba(0,0,0,.5)}.hg-layer .hg-layer-main[data-v-06f2da9e]{display:none;box-sizing:border-box;padding:35px 0 40px;position:relative;margin:0 auto;top:45%;transform:translateY(-50%);border-radius:20px;background:#fff}.hg-layer .hg-layer-main.active[data-v-06f2da9e]{display:block}.hg-layer .hg-layer-main.no-login[data-v-06f2da9e]{width:540px}.hg-layer .hg-layer-main.prize[data-v-06f2da9e]{width:460px}.hg-layer .hg-layer-main .logo-top[data-v-06f2da9e]{position:absolute;top:-130px;left:50%;transform:translateX(-50%);width:260px;height:260px;border-radius:50%;background:url(" +
                f +
                ") no-repeat center 23px #fff}.hg-layer .hg-layer-main p[data-v-06f2da9e]{position:relative;z-index:1}.hg-layer .hg-layer-main p.tip-1[data-v-06f2da9e]{font-size:39px;color:#646464;line-height:100px}.hg-layer .hg-layer-main p.tip-2[data-v-06f2da9e]{font-size:30px;color:#949494}.hg-layer .hg-layer-main p.tip-3[data-v-06f2da9e]{padding-top:20px;line-height:105px;font-size:24px;color:#999}.hg-layer .hg-layer-main p.tip-4[data-v-06f2da9e]{font-size:50px;color:#ff6f43}.hg-layer .hg-layer-main a[data-v-06f2da9e]{display:block}.hg-layer .hg-layer-main a.go-login[data-v-06f2da9e]{cursor:pointer;width:320px;margin:70px auto 0;line-height:80px;border-radius:40px;background:#ffc343;color:#fff;font-size:36px}.hg-layer .hg-layer-main a.go-login[data-v-06f2da9e]:active{background:#cc9c35}.hg-layer .hg-layer-main a.go-down[data-v-06f2da9e]{cursor:pointer;width:320px;margin:45px auto 0;line-height:70px;border-radius:35px;background:#ffc343;color:#fff;font-size:28px}.hg-layer .hg-layer-main a.go-down[data-v-06f2da9e]:active{background:#cc9c35}.hg-layer .hg-layer-main a.go-reg[data-v-06f2da9e]{line-height:105px;font-size:30px;color:#ffc343}.hg-layer .hg-layer-main a.close[data-v-06f2da9e]{cursor:pointer;position:absolute;left:50%;width:60px;height:60px;line-height:60px;color:#fff;bottom:-88px;transform:translateX(-50%)}.hg-layer .hg-layer-main a.close>i[data-v-06f2da9e]{font-size:60px}",
                ""
            ]), t.exports = e
        }, 311: function (t, e, n) {
            t.exports = n.p + "img/a953e26.jpg"
        }, 312: function (t, e, n) {
            t.exports = n.p + "img/011df57.png"
        }, 313: function (t, e, n) {
            "use strict";
            n.r(e);
            var o = n(1),
                r = n(61),
                c = (n(314), n(143)),
                l = n(144);
            o.a.use(r.a), e.default = function () {
                return new r.a.Store({
                    namespaced: !0,
                    modules: {
                        user: l.default,
                        app: c.default
                    },
                    state: {},
                    mutations: {},
                    actions: {},
                    plugins: []
                })
            }
        }, 35: function (t, e, n) {
            "use strict";
            n(28), n(66), n(3), n(45);
            var o = n(46),
                r = (n(142), 7),
                c = "",
                l = function (t) {
                    var e = {
                            dt: "H",
                            t1: 1,
                            t2: 1,
                            t4: 1,
                            t3: r
                        },
                        n = [];
                    if (t.constructor === Array)
                        for (var i = 0; i < t.length; i++) Object.assign(
                            t[i], e), n.push(t);
                    else Object.assign(t, e), n.push(t)
                },
                d = function () {
                    if (c = document.referrer)
                        for (var i = 0; i < o.a.ref_reg.length; i++)
                            if (c.match(o.a.ref_reg[i])) {
                                r = i;
                                break
                            }
                };
            e.a = {
                track_click: function (t, e) {
                    d(), $nuxt && (e = e || o.a.pageCode[
                        $nuxt.$route.name] || 0), l({
                        t5: e,
                        t9: t
                    })
                }, ref_fun: d,
                track_fun: l,
                ref_code: r
            }
        }, 46: function (t, e, n) {
            "use strict";
            e.a = {
                pageCode: {
                    index: 1,
                    download: 2,
                    buy: 3,
                    activity: 4,
                    "activity-id": 5,
                    problem: 6,
                    "problem-id": 7,
                    tutorial: 6,
                    "tutorial-id": 7,
                    novice: 6,
                    "novice-id": 7,
                    about: 6,
                    "about-id": 7,
                    "user-pwd": 10,
                    user: 11,
                    "user-favourable": 11,
                    "user-record": 11,
                    "user-down": 11
                },
                ref_reg: [/baidu.com\//i,
                    /hao.360.com\/|so.com\//i,
                    /facebook.com\//i, /google.com\//i,
                    /bing.com\//i, /sogou.com\//i
                ]
            }
        }, 79: function (t, e, n) {
            "use strict";
            n(18);
            var o = n(45),
                r = n.n(o),
                c = n(142),
                l = n.n(c),
                d = n(2),
                f = n(115),
                h = n.n(f),
                m = n(205),
                v = n.n(m);
            r.a.defaults.timeout = d.a.REQUEST_TIME_OUT ? d.a.REQUEST_TIME_OUT :
                1e4, r.a.defaults.headers.post["Content-Type"] =
                "application/x-www-form-urlencoded;charset=UTF-8";
            var x = new v.a({
                max: d.a.CACHE.MAX,
                maxAge: d.a.CACHE.MAXAGE,
                length: d.a.CACHE.LENGTH
            });
            r.a.interceptors.request.use((function (t) {
                return "post" === t.method && (t.data =
                    t.data ? t.data : {}, t.data.stringify ||
                    (t.data = l.a.stringify(t.data))
                ), t.method, t
            }), (function (t) {
                return console.log("错误的传参"), Promise.reject(
                    t)
            })), e.a = {
                post: function (t, e, n) {
                    var o;
                    if (t = (d.a[n] || "") + t, e.cache &&
                        ("A" == d.a.CACHE.PLAT || "B" == d.a
                            .CACHE.PLAT || (d.a.CACHE.PLAT,
                                0)) && (o = h()(t + JSON.stringify(
                            e)), x.has(o))) {
                        var c = x.get(o);
                        return c.cache = "cache", Promise.resolve(
                            c)
                    }
                    return n && (e.stringify = 1), new Promise(
                        (function (n, o) {
                            r.a.post(t, e).then((
                                function (o) {
                                    if (e.cache &&
                                        (
                                            "A" ==
                                            d
                                            .a
                                            .CACHE
                                            .PLAT ||
                                            "B" ==
                                            d
                                            .a
                                            .CACHE
                                            .PLAT ||
                                            (
                                                d
                                                .a
                                                .CACHE
                                                .PLAT,
                                                0
                                            )
                                        )) {
                                        var
                                            r =
                                            h()
                                            (
                                                t +
                                                JSON
                                                .stringify(
                                                    e
                                                )
                                            );
                                        x.set(
                                            r,
                                            o
                                        )
                                    }
                                    n(o)
                                }), (
                                function (t) {
                                    o(t)
                                })).catch((
                                function (t) {
                                    o(t)
                                }))
                        }))
                }, get: function (t, e, n) {
                    var o;
                    return t = (d.a[n] || "") + t, e.cache &&
                        (o = h()(t + JSON.stringify(e)), x.has(
                            o)) ? Promise.resolve(x.get(o)) :
                        (n && (e.stringify = 1), new Promise(
                            (function (n, o) {
                                r.a.get(t, {
                                    params: e
                                }).then((
                                    function (
                                        t) {
                                        n(t)
                                    }), (
                                    function (
                                        t) {
                                        o(t)
                                    })).catch((
                                    function (
                                        t) {
                                        o(t)
                                    }))
                            })))
                }
            }
        }, 82: function (t, e, n) {
            "use strict";
            var o = {
                    data: function () {
                        return {
                            acModal: !1
                        }
                    }, props: ["title", "left", "bottom",
                        "show"
                    ],
                    methods: {
                        childAction: function () {
                            var t = this;
                            t.acModal = !0, setTimeout((
                                function () {
                                    t.acModal = !1
                                }), 1e3)
                        }
                    },
                    mounted: function () {
                        var t = this;
                        this.$on("bridge", (function () {
                            t.childAction()
                        }))
                    }
                },
                r = (n(301), n(6)),
                component = Object(r.a)(o, (function () {
                    var t = this.$createElement;
                    return (this._self._c || t)("div", {
                        staticClass: "toast",
                        class: {
                            ac: this.acModal ||
                                this.show
                        },
                        style: {
                            left: this.left,
                            bottom: this.bottom
                        }
                    }, [this._v(this._s(this.title))])
                }), [], !1, null, "33902900", null);
            e.a = component.exports
        }
    },
    [
        [220, 60, 61]
    ]
]);