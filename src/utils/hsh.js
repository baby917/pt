"use strict";

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

var _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  return function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
  }
}();
!function (e, t) {
  "undefined" != typeof module && "object" == typeof exports ? module.exports = t(e) : "function" == typeof define ? define("hsh-jsapi", function () {
    return t(e)
  }) : (e.hsh = e.Jheshenghuo = t(e), e.app || (e.app = t(e)))
}(window, function (e) {
  function t() {
    if (!h) {
      h = !0;
      for (var t = 0; t < d.length; t++) d[t].fn.call(e, d[t].ctx);
      d = []
    }
    f = !0
  }

  function n() {
    "complete" === document.readyState && t()
  }

  function r(r, a) {
    return h ? void setTimeout(function () {
      r(a)
    }, 1) : (d.push({
      fn: r,
      ctx: a
    }), void("complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(t, 1) : v || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", t, !1), e.addEventListener("load", t, !1)) : (document.attachEvent("onreadystatechange", n), e.attachEvent("onload", t)), v = !0)))
  }

  function a(e) {
    var t = u(e), n = t;
    return e.Data && (n = u(e.Data)), n
  }

  function i(e) {
    return Object.prototype.toString.call(e).replace(/\[object (\w+)\]/, "$1").toLowerCase()
  }

  function o(e) {
    return "function" === i(e)
  }

  function u(e) {
    var t = "object" == typeof e;
    return t ? e : JSON && JSON.parse ? JSON.parse(e) : new Function("return " + e)()
  }

  function l(e) {
    return "object" == typeof e && "[object object]" == Object.prototype.toString.call(e).toLowerCase() && !e.length
  }

  function c(e) {
    var t = p.split(".");
    e = e.split(".");
    for (var n = 0, r = void 0, a = void 0; n < t.length; n++) {
      if (r = parseInt(e[n], 10) || 0, a = parseInt(t[n], 10) || 0, r > a) return -1;
      if (a > r) return 1
    }
    return 0
  }

  function s(t) {
    if (e.WebViewJavascriptBridge) return t(WebViewJavascriptBridge);
    if (e.WVJBCallbacks) return e.WVJBCallbacks.push(t);
    e.WVJBCallbacks = [t];
    var n = document.createElement("iframe");
    n.style.display = "none", n.src = "wvjbscheme://__BRIDGE_LOADED__", document.documentElement.appendChild(n), setTimeout(function () {
      document.documentElement.removeChild(n)
    }, 0)
  }

  var f = !1, d = [], h = !1, v = !1, g = navigator.userAgent, p = function () {
    var e = g.match(/HARHeshenghuo\/(.*)/);
    return e && e.length ? e[1] : ""
  }(), m = c("5.5.0") > -1, y = function () {
    return m ? !0 : "undefined" != typeof e.app ? !0 : !1
  }(), k = function () {
    function t() {
      _classCallCheck(this, t), this.version = p, this.isApp = y
    }

    return _createClass(t, [{
      key: "noConflict", value: function (t) {
        return e.hsh === C && (e.hsh = C), t && e.hsh === b && (e.Jheshenghuo = b), b
      }
    }, {
      key: "hshReady", value: function (e, t) {
        return f ? void e() : void(m ? r(e, t) : this.ready() ? (f = !0, this.ready(e)) : (f = !0, e()))
      }
    }, {
      key: "ready", value: function (e) {
        return e ? void e() : y
      }
    }, {
      key: "callHandler", value: function (e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
          n = arguments.length <= 2 || void 0 === arguments[2] ? function () {
          } : arguments[2], r = o(t);
        r && (n = t, t = null), s(function (r) {
          r.callHandler(e, t, function (e) {
            var t = a(e);
            n(t)
          })
        })
      }
    }, {
      key: "registerHandler", value: function (e, t) {
        s(function (n) {
          n.registerHandler(e, t)
        })
      }
    }, {
      key: "getToken", value: function (e) {
        if (m) this.callHandler("getToken", function (t) {
          e({HARToken: t.token})
        }); else {
          var t = app.getToken();
          e(u(t))
        }
      }
    }, {
      key: "call", value: function (e, t, n) {
        return l(t) && (t = JSON.stringify(t)), n ? app.call(e, t, n) : app.call(e, t)
      }
    }, {
      key: "callHAR", value: function (e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2];
        l(t) && (t = JSON.stringify(t)), app.callHAR(e, t, n)
      }
    }, {
      key: "share", value: function (t) {
        var n = arguments.length <= 1 || void 0 === arguments[1] ? function () {
        } : arguments[1], r = {};
        r = l(t) && t.desc ? {
          title: t.title,
          text: t.desc,
          imageUrl: t.imgUrl,
          url: t.link
        } : u(t), m ? this.callHandler("share", r, function (e) {
          console.log(e), this.registerHandler("share", function (e) {
            var t = a(e);
            n(t)
          })
        }.bind(this)) : (e.share = function () {
          n.apply(void 0, arguments)
        }, alert(r), this.call("share", r, "share"))
      }
    }, {
      key: "registerShare", value: function (t, n) {
        var r = {};
        r = l(t) && t.desc ? {
          title: t.title,
          text: t.desc,
          imageUrl: t.imgUrl,
          url: t.link
        } : u(t), m ? this.callHandler("registerShare", r, function (e) {
          console.log(e), this.registerHandler("registerShare", function (e) {
            var t = a(e);
            n(t)
          })
        }.bind(this)) : (e.registerShareCallBack = function () {
          n.apply(void 0, arguments)
        }, this.callHAR("registerShare", r, "registerShareCallBack"))
      }
    }]), t
  }(), b = new k, C = new k;
  return C
});
