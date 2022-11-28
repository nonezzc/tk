// ==UserScript==
// @name         TikTokShop小店达人定向邀约自动化工具
// @namespace    http://tiktok114.com/
// @icon    data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAwQzlBMjUzQTE4MTFFRDgzRDlGNEQ1OTFDQUI1NzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAwQzlBMjYzQTE4MTFFRDgzRDlGNEQ1OTFDQUI1NzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMDBDOUEyMzNBMTgxMUVEODNEOUY0RDU5MUNBQjU3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMDBDOUEyNDNBMTgxMUVEODNEOUY0RDU5MUNBQjU3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAoK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
// @version      2.0
// @description  TikTok小店达人带货是被验证过的最拒爆发力、且行之有效的带货模式。如英国小店的水杯（70万单）、印尼小店的补水仪（160万单）、东南亚小店的漱口水（200万单）。懂行的卖家都开始投入大量人力进行达人达人带货建联，而如何如何提高达人建联效率变得尤其重要。本工具就是基于以上市场需求，为TikTok小店卖家量身定制的产品。在完全不违反TikTok平台规则的情况下，帮助大家提升达人建联效率！
// @author      TikTok114
// @include    https://*.tiktokglobalshop.com/*
// @include    https://affiliate.tiktok.com/*
// @include    *://localhost*
// @include    *://49.235.95.92*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_getResourceURL
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_getResourceText
// @run-at      document-body
// @require http://code.jquery.com/jquery-2.1.1.min.js
// @require https://greasyfork.org/scripts/434540-layerjs-gm-with-css/code/layerjs-gm-with-css.js?version=1065982
// @connect     localhost
// @connect     49.235.95.92
// @connect     raw.githubusercontent.com
// @antifeature  payment
// @license Creative Commons
// ==/UserScript==
(function () {
  // @run-at      document-start

  let $jq = $;
  unsafeWindow.$jq = $;
  let baseConfig = {
    project: {
      id: "tk",
      version: "202210032149",
    },
    url: {
      login: "http://49.235.95.92:92",
      resource: "http://49.235.95.92:91",
      base: "http://49.235.95.92:90/api",
    },
  };
  var getUrlParam = function (name) {
    // 获取url参数
    let reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.href.substr(1).match(reg);
    if (r != null) {
      return decodeURI(r[2]);
    }
    return undefined;
  };

  var filterTag = function (str) {
    // 过滤html代码(把<>转换)
    str = str.replace(/&/gi, "&amp;");
    str = str.replace(/</gi, "&lt;");
    str = str.replace(/>/gi, "&gt;");
    str = str.replace(" ", "&nbsp;");
    return str;
  };

  var numberToChinese = function (num) {
    // 将阿拉伯数字翻译成中文的大写数字
    let AA = new Array(
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十"
    );
    let BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
    let a = ("" + num).replace(/(^0*)/g, "").split(".");
    let k = 0;
    let re = "";
    for (let i = a[0].length - 1; i >= 0; i--) {
      switch (k) {
        case 0:
          re = BB[7] + re;
          break;
        case 4:
          if (
              !new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])
          ) {
            re = BB[4] + re;
          }
          break;
        case 8:
          re = BB[5] + re;
          BB[7] = BB[5];
          k = 0;
          break;
      }
      if (k % 4 === 2 && a[0].charAt(i + 2) !== 0 && a[0].charAt(i + 1) === 0) {
        re = AA[0] + re;
      }
      if (a[0].charAt(i) !== 0) {
        re = AA[a[0].charAt(i)] + BB[k % 4] + re;
      }
      k++;
    }
    if (a.length > 1) {
      // 加上小数部分(如果有小数部分)
      re += BB[6];
      for (let i = 0; i < a[1].length; i++) {
        re += AA[a[1].charAt(i)];
      }
    }
    if (re === "一十") {
      re = "十";
    }
    if (re.match(/^一/) && re.length === 3) {
      re = re.replace("一", "");
    }
    return re;
  };

  var throttle = function (func, wait, type) {
    //函数节流 [func 函数 wait 延迟执行毫秒数 type 1 表时间戳版，2 表定时器版]
    if (type === 1) {
      let previous = 0;
    } else if (type === 2) {
      let timeout;
    }
    return function () {
      let context = this;
      let args = arguments;
      if (type === 1) {
        let now = Date.now();
        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      } else if (type === 2) {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        }
      }
    };
  };

  var store = {
    set: function (name, value, day) {
      // 设置
      let d = new Date();
      let time = 0;
      day = typeof day === "undefined" || !day ? 1 : day; // 时间,默认存储1天
      time = d.setHours(d.getHours() + 24 * day); // 毫秒
      localStorage.setItem(
          name,
          JSON.stringify({
            data: value,
            time: time,
          })
      );
    },
    get: function (name) {
      // 获取
      let data = localStorage.getItem(name);
      if (!data) {
        return null;
      }
      let obj = JSON.parse(data);
      if (new Date().getTime() > obj.time) {
        // 过期
        localStorage.removeItem(name);
        return null;
      } else {
        return obj.data;
      }
    },
    clear: function (name) {
      // 清空
      if (name) {
        // 删除键为name的缓存
        localStorage.removeItem(name);
      } else {
        // 清空全部
        localStorage.clear();
      }
    },
  };

  var isPC = function () {
    // 是否为PC端
    let userAgentInfo = navigator.userAgent;
    let Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod",
    ];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  var formatDate = function (fmt, date) {
    // 时间格式化 【'yyyy-MM-dd hh:mm:ss',时间】
    if (typeof date !== "object") {
      date = !date ? new Date() : new Date(date);
    }
    var o = {
      "M+": date.getMonth() + 1, // 月份
      "d+": date.getDate(), // 日
      "h+": date.getHours(), // 小时
      "m+": date.getMinutes(), // 分
      "s+": date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  };

  var isSupportWebP = function () {
    //判断浏览器是否支持webP格式图片
    return (
        !![].map &&
        document
            .createElement("canvas")
            .toDataURL("image/webp")
            .indexOf("data:image/webp") == 0
    );
  };

  var checkStr = function (str, type) {
    // 常用正则验证，注意type大小写
    switch (type) {
      case "phone": // 手机号码
        return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
      case "tel": // 座机
        return /^(0d{2,3}-d{7,8})(-d{1,4})?$/.test(str);
      case "card": // 身份证
        return /(^d{15}$)|(^d{18}$)|(^d{17}(d|X|x)$)/.test(str);
      case "pwd": // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]w{5,17}$/.test(str);
      case "postal": // 邮政编码
        return /[1-9]d{5}(?!d)/.test(str);
      case "QQ": // QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case "email": // 邮箱
        return /^[w-]+(.[w-]+)*@[w-]+(.[w-]+)+$/.test(str);
      case "money": // 金额(小数点2位)
        return /^d*(?:.d{0,2})?$/.test(str);
      case "IP": // IP
        return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(
            str
        );
      case "date": // 日期时间
        return (
            /^(d{4})-(d{2})-(d{2}) (d{2})(?::d{2}|:(d{2}):(d{2}))$/.test(str) ||
            /^(d{4})-(d{2})-(d{2})$/.test(str)
        );
      case "number": // 数字
        return /^[0-9]$/.test(str);
      case "english": // 英文
        return /^[a-zA-Z]+$/.test(str);
      case "chinese": // 中文
        return /^[一-龥]+$/.test(str);
      case "lower": // 小写
        return /^[a-z]+$/.test(str);
      case "upper": // 大写
        return /^[A-Z]+$/.test(str);
      case "HTML": // HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      default:
        return true;
    }
  };

  var arrayEqual = function (arr1, arr2) {
    //判断两个数组是否相等
    if (arr1 === arr2) return true;
    if (arr1.length != arr2.length) return false;
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  var imgLoadAll = function (arr, callback) {
    // 图片加载
    let arrImg = [];
    for (let i = 0; i < arr.length; i++) {
      let img = new Image();
      img.src = arr[i];
      img.onload = function () {
        arrImg.push(this);
        if (arrImg.length == arr.length) {
          callback && callback();
        }
      };
    }
  };

  var debounce = function (func, wait, immediate) {
    //函数防抖[func 函数,wait 延迟执行毫秒数,immediate true 表立即执行,false 表非立即执行,立即执行是触发事件后函数会立即执行，然后n秒内不触发事件才能继续执行函数的效果]
    let timeout;
    return function () {
      let context = this;
      let args = arguments;
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(() => {
          timeout = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      }
    };
  };

  var changeCase = function (str, type) {
    // 字符串大小写转换 type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
    type = type || 4;
    switch (type) {
      case 1:
        return str.replace(/w+/g, function (word) {
          return (
              word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
          );
        });
      case 2:
        return str.replace(/w+/g, function (word) {
          return (
              word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
          );
        });
      case 3:
        return str
            .split("")
            .map(function (word) {
              if (/[a-z]/.test(word)) {
                return word.toUpperCase();
              } else {
                return word.toLowerCase();
              }
            })
            .join("");
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  };

  var getBase64 = function (img) {
    //传入图片路径，返回base64，使用getBase64(url).then(function(base64){},function(err){});
    let getBase64Image = function (img, width, height) {
      //width、height调用时传入具体像素值，控制大小,不传则默认图像大小
      let canvas = document.createElement("canvas");
      canvas.width = width ? width : img.width;
      canvas.height = height ? height : img.height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      let dataURL = canvas.toDataURL();
      return dataURL;
    };
    let image = new Image();
    image.crossOrigin = "";
    image.src = img;
    let deferred = $.Deferred();
    if (img) {
      image.onload = function () {
        deferred.resolve(getBase64Image(image));
      };
      return deferred.promise();
    }
  };
  var isArray = function (arr) {
    // 判断是否是一个数组
    return Object.prototype.toString.call(arr) === "[object Array]";
  };

  var downloadFile = function (base64, fileName) {
    //base64图片下载功能
    let base64ToBlob = function (code) {
      let parts = code.split(";base64,");
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], {
        type: contentType,
      });
    };
    let aLink = document.createElement("a");
    let blob = base64ToBlob(base64); //new Blob([content]);
    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true); //initEvent不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
  };
  !(function (t, e) {
    for (var n in e) t[n] = e[n];
  })(
      window,
      (function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { i: r, l: !1, exports: {} });
          return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
        }
        var n = {};
        return (
            (e.m = t),
                (e.c = n),
                (e.i = function (t) {
                  return t;
                }),
                (e.d = function (t, n, r) {
                  e.o(t, n) ||
                  Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r,
                  });
                }),
                (e.n = function (t) {
                  var n =
                      t && t.__esModule
                          ? function () {
                            return t.default;
                          }
                          : function () {
                            return t;
                          };
                  return e.d(n, "a", n), n;
                }),
                (e.o = function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (e.p = ""),
                e((e.s = 3))
        );
      })([
        function (t, e, n) {
          "use strict";
          function r(t, e) {
            var n = {};
            for (var r in t) n[r] = t[r];
            return (n.target = n.currentTarget = e), n;
          }
          function o(t, e) {
            function n(e) {
              return function () {
                var n = this.hasOwnProperty(e + "_")
                        ? this[e + "_"]
                        : this.xhr[e],
                    r = (t[e] || {}).getter;
                return (r && r(n, this)) || n;
              };
            }
            function o(e) {
              return function (n) {
                var o = this.xhr,
                    i = this,
                    s = t[e];
                if ("on" === e.substring(0, 2))
                  (i[e + "_"] = n),
                      (o[e] = function (s) {
                        (s = r(s, i)), (t[e] && t[e].call(i, o, s)) || n.call(i, s);
                      });
                else {
                  var u = (s || {}).setter;
                  (n = (u && u(n, i)) || n), (this[e + "_"] = n);
                  try {
                    o[e] = n;
                  } catch (t) {}
                }
              };
            }
            function i(e) {
              return function () {
                var n = [].slice.call(arguments);
                if (t[e]) {
                  var r = t[e].call(this, n, this.xhr);
                  if (r) return r;
                }
                return this.xhr[e].apply(this.xhr, n);
              };
            }
            return (
                (e = e || window),
                    (e[u] = e[u] || e.XMLHttpRequest),
                    (e.XMLHttpRequest = function () {
                      for (var t = new e[u](), r = 0; r < a.length; ++r) {
                        var c = "on" + a[r];
                        void 0 === t[c] && (t[c] = null);
                      }
                      for (var f in t) {
                        var h = "";
                        try {
                          h = s(t[f]);
                        } catch (t) {}
                        "function" === h
                            ? (this[f] = i(f))
                            : Object.defineProperty(this, f, {
                              get: n(f),
                              set: o(f),
                              enumerable: !0,
                            });
                      }
                      var d = this;
                      (t.getProxy = function () {
                        return d;
                      }),
                          (this.xhr = t);
                    }),
                    Object.assign(e.XMLHttpRequest, {
                      UNSENT: 0,
                      OPENED: 1,
                      HEADERS_RECEIVED: 2,
                      LOADING: 3,
                      DONE: 4,
                    }),
                    e[u]
            );
          }
          function i(t) {
            (t = t || window), t[u] && (t.XMLHttpRequest = t[u]), (t[u] = void 0);
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (t) {
                    return typeof t;
                  }
                  : function (t) {
                    return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                  };
          (e.configEvent = r), (e.hook = o), (e.unHook = i);
          var u = "__xhr",
              a = (e.events = [
                "load",
                "loadend",
                "timeout",
                "error",
                "readystatechange",
                "abort",
              ]);
        },
        function (t, e, n) {
          "use strict";
          function r(t, e) {
            if (((e = e || window), e.__xhr)) throw "Ajax is already hooked.";
            return f(t, e);
          }
          function o(t) {
            (0, h.unHook)(t);
          }
          function i(t) {
            return t.replace(/^\s+|\s+$/g, "");
          }
          function s(t) {
            return t.watcher || (t.watcher = document.createElement("a"));
          }
          function u(t, e) {
            var n = t.getProxy(),
                r = "on" + e + "_",
                o = (0, h.configEvent)({ type: e }, n);
            n[r] && n[r](o);
            var i;
            "function" == typeof Event
                ? (i = new Event(e, { bubbles: !1 }))
                : ((i = document.createEvent("Event")), i.initEvent(e, !1, !0)),
                s(t).dispatchEvent(i);
          }
          function a(t) {
            (this.xhr = t), (this.xhrProxy = t.getProxy());
          }
          function c(t) {
            function e(t) {
              a.call(this, t);
            }
            return (e[g] = Object.create(a[g])), (e[g].next = t), e;
          }
          function f(t, e) {
            function n(t, e) {
              var n = new w(t),
                  r = {
                    response: e.response || e.responseText,
                    status: e.status,
                    statusText: e.statusText,
                    config: t.config,
                    headers:
                        t.resHeader ||
                        t
                            .getAllResponseHeaders()
                            .split("\r\n")
                            .reduce(function (t, e) {
                              if ("" === e) return t;
                              var n = e.split(":");
                              return (t[n.shift()] = i(n.join(":"))), t;
                            }, {}),
                  };
              if (!d) return n.resolve(r);
              d(r, n);
            }
            function r(t, e, n, r) {
              var o = new E(t);
              (n = { config: t.config, error: n, type: r }),
                  v ? v(n, o) : o.next(n);
            }
            function o() {
              return !0;
            }
            function a(t) {
              return function (e, n) {
                return r(e, this, n, t), !0;
              };
            }
            function c(t, e) {
              return (
                  4 === t.readyState && 0 !== t.status
                      ? n(t, e)
                      : 4 !== t.readyState && u(t, y),
                      !0
              );
            }
            var f = t.onRequest,
                d = t.onResponse,
                v = t.onError;
            return (0, h.hook)(
                {
                  onload: o,
                  onloadend: o,
                  onerror: a(p),
                  ontimeout: a(l),
                  onabort: a(x),
                  onreadystatechange: function (t) {
                    return c(t, this);
                  },
                  open: function (t, e) {
                    var n = this,
                        r = (e.config = { headers: {} });
                    (r.method = t[0]),
                        (r.url = t[1]),
                        (r.async = t[2]),
                        (r.user = t[3]),
                        (r.password = t[4]),
                        (r.xhr = e);
                    var o = "on" + y;
                    if (
                        (e[o] ||
                        (e[o] = function () {
                          return c(e, n);
                        }),
                            f)
                    )
                      return !0;
                  },
                  send: function (t, e) {
                    var n = e.config;
                    if (
                        ((n.withCredentials = e.withCredentials), (n.body = t[0]), f)
                    ) {
                      var r = function () {
                        f(n, new b(e));
                      };
                      return !1 === n.async ? r() : setTimeout(r), !0;
                    }
                  },
                  setRequestHeader: function (t, e) {
                    if (((e.config.headers[t[0].toLowerCase()] = t[1]), f))
                      return !0;
                  },
                  addEventListener: function (t, e) {
                    var n = this;
                    if (-1 !== h.events.indexOf(t[0])) {
                      var r = t[1];
                      return (
                          s(e).addEventListener(t[0], function (e) {
                            var o = (0, h.configEvent)(e, n);
                            (o.type = t[0]), (o.isTrusted = !0), r.call(n, o);
                          }),
                              !0
                      );
                    }
                  },
                  getAllResponseHeaders: function (t, e) {
                    var n = e.resHeader;
                    if (n) {
                      var r = "";
                      for (var o in n) r += o + ": " + n[o] + "\r\n";
                      return r;
                    }
                  },
                  getResponseHeader: function (t, e) {
                    var n = e.resHeader;
                    if (n) return n[(t[0] || "").toLowerCase()];
                  },
                },
                e
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.proxy = r),
              (e.unProxy = o);
          var h = n(0),
              d = h.events[0],
              v = h.events[1],
              l = h.events[2],
              p = h.events[3],
              y = h.events[4],
              x = h.events[5],
              g = "prototype";
          a[g] = Object.create({
            resolve: function (t) {
              var e = this.xhrProxy,
                  n = this.xhr;
              (e.readyState = 4),
                  (n.resHeader = t.headers),
                  (e.response = e.responseText = t.response),
                  (e.statusText = t.statusText),
                  (e.status = t.status),
                  u(n, y),
                  u(n, d),
                  u(n, v);
            },
            reject: function (t) {
              (this.xhrProxy.status = 0), u(this.xhr, t.type), u(this.xhr, v);
            },
          });
          var b = c(function (t) {
                var e = this.xhr;
                (t = t || e.config),
                    (e.withCredentials = t.withCredentials),
                    e.open(t.method, t.url, !1 !== t.async, t.user, t.password);
                for (var n in t.headers) e.setRequestHeader(n, t.headers[n]);
                e.send(t.body);
              }),
              w = c(function (t) {
                this.resolve(t);
              }),
              E = c(function (t) {
                this.reject(t);
              });
        },
        ,
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }), (e.ah = void 0);
          var r = n(0),
              o = n(1);
          e.ah = {
            proxy: o.proxy,
            unProxy: o.unProxy,
            hook: r.hook,
            unHook: r.unHook,
          };
        },
      ])
  );
  var ajax = function (conf) {
    // ajax操作
    let url = conf.url,
        data = conf.data,
        senData = [], // 封装后的数据
        async = conf.async !== undefined ? conf.async : true, // ture为异步请求
        type = conf.type || "get", // 默认请求方式get
        dataType = conf.dataType || "json",
        contenType = conf.contenType || "application/x-www-form-urlencoded",
        success = conf.success,
        error = conf.error,
        isForm = conf.isForm || false, // 是否formdata
        header = conf.header || {}, // 头部信息
        xhr = ""; // 创建ajax引擎对象
    if (data == null) {
      senData = "";
    } else if (typeof data === "object" && !isForm) {
      // 如果data是对象，转换为字符串
      for (var k in data) {
        senData.push(encodeURIComponent(k) + "=" + encodeURIComponent(data[k]));
      }
      senData = senData.join("&");
    } else {
      senData = data;
    }
    try {
      xhr = new ActiveXObject("microsoft.xmlhttp"); // IE内核系列浏览器
    } catch (e1) {
      try {
        xhr = new XMLHttpRequest(); // 非IE内核浏览器
      } catch (e2) {
        if (error != null) {
          error("不支持ajax请求");
        }
      }
    }
    xhr.open(type, type !== "get" ? url : url + "?" + senData, async);
    if (type !== "get" && !isForm) {
      xhr.setRequestHeader("content-type", contenType);
    }
    for (var h in header) {
      xhr.setRequestHeader(h, header[h]);
    }
    xhr.send(type !== "get" ? senData : null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          if (dataType === "json" && success != null) {
            let res = "";
            try {
              res = eval("(" + xhr.responseText + ")");
            } catch (e) {
              console.log(e);
            }
            success(res); // 将json字符串转换为js对象
          }
        } else {
          if (error != null) {
            error("通讯失败!" + xhr.status);
          }
        }
      }
    };
  };

  var insertAtCursor = function (dom, val) {
    // 光标所在位置插入字符
    if (document.selection) {
      dom.focus();
      let sel = document.selection.createRange();
      sel.text = val;
      sel.select();
    } else if (dom.selectionStart || dom.selectionStart == "0") {
      let startPos = dom.selectionStart;
      let endPos = dom.selectionEnd;
      let restoreTop = dom.scrollTop;
      dom.value =
          dom.value.substring(0, startPos) +
          val +
          dom.value.substring(endPos, dom.value.length);
      if (restoreTop > 0) {
        dom.scrollTop = restoreTop;
      }
      dom.focus();
      dom.selectionStart = startPos + val.length;
      dom.selectionEnd = startPos + val.length;
    } else {
      dom.value += val;
      dom.focus();
    }
  };

  let loadFun = function () {
    let code = GM_getValue("code", null);
    if (Number(baseConfig.project.version) < "202210042051") {
      code = null;
    }
    if (code != null) {
      console.log("使用缓存");
      eval(code);
      return;
    }
    console.log("使用在线");

    GM_xmlhttpRequest({
      method: "get",
      url: "https://raw.githubusercontent.com/nonezzc/tk/main/tk.txt?t=" + new Date().getTime(),
      responseType: "text",
      onload: function (res) {
        let data = res.response;
        eval(data);
        GM_setValue("code", data);
      },
      onerror: function (response) {
        console.log(response);
      },
    });
  };

  var stringfyQueryString = function (obj) {
    //对象序列化【对象转url参数】
    if (!obj) return "";
    let pairs = [];
    for (let key in obj) {
      let value = obj[key];
      if (value instanceof Array) {
        for (let i = 0; i < value.length; ++i) {
          pairs.push(
              encodeURIComponent(key + "[" + i + "]") +
              "=" +
              encodeURIComponent(value[i])
          );
        }
        continue;
      }
      pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
    return pairs.join("&");
  };

  var loadAudio = function (src, callback) {
    // 音频加载
    var audio = new Audio(src);
    audio.onloadedmetadata = callback;
    audio.src = src;
  };

  var random = function (min, max) {
    // 生成随机数范围
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
      return null;
    }
  };

  var getRealStyle = function (obj, styleName) {
    // Js获取元素样式【支持内联】
    var realStyle = null;
    if (obj.currentStyle) {
      realStyle = obj.currentStyle[styleName];
    } else if (window.getComputedStyle) {
      realStyle = window.getComputedStyle(obj, null)[styleName];
    }
    return realStyle;
  };

  var isWx = function () {
    // 判断是否为微信
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) === "micromessenger") {
      return true;
    }
    return false;
  };

  var h5Resize = function (downCb, upCb) {
    //当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化 [downCb 当软键盘弹起后，缩回的回调,upCb 当软键盘弹起的回调]
    var clientHeight = window.innerHeight;
    downCb = typeof downCb === "function" ? downCb : function () {};
    upCb = typeof upCb === "function" ? upCb : function () {};
    window.addEventListener("resize", () => {
      var height = window.innerHeight;
      if (height === clientHeight) {
        downCb();
      }
      if (height < clientHeight) {
        upCb();
      }
    });
  };

  var isDevice = function () {
    // 判断是android还是ios还是web
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      // ios
      return "iOS";
    }
    if (/(Android)/i.test(navigator.userAgent)) {
      return "Android";
    }
    return "Web";
  };

  loadFun();

  var loadRes = function (name, type, fn) {
    // 加载js || css || style
    let ref;
    if (type === "js") {
      // 外部js
      ref = document.createElement("script");
      ref.setAttribute("type", "text/javascript");
      ref.setAttribute("src", name);
    } else if (type === "css") {
      // 外部css
      ref = document.createElement("link");
      ref.setAttribute("rel", "stylesheet");
      ref.setAttribute("type", "text/css");
      ref.setAttribute("href", name);
    } else if (type === "style") {
      // style
      ref = document.createElement("style");
      ref.innerHTML = name;
    }
    if (typeof ref !== "undefined") {
      document.getElementsByTagName("head")[0].appendChild(ref);
      ref.onload = function () {
        // 加载完成执行
        typeof fn === "function" && fn();
      };
    }
  };

  var trim = function (str, type) {
    // 去除空格， type:  1-所有空格  2-前后空格  3-前空格 4-后空格
    type = type || 1;
    switch (type) {
      case 1:
        return str.replace(/s+/g, "");
      case 2:
        return str.replace(/(^s*)|(s*$)/g, "");
      case 3:
        return str.replace(/(^s*)/g, "");
      case 4:
        return str.replace(/(s*$)/g, "");
      default:
        return str;
    }
  };

  var copyTxt = function (text, fn) {
    // 复制功能
    if (typeof document.execCommand !== "function") {
      console.log("复制失败，请长按复制");
      return;
    }
    var dom = document.createElement("textarea");
    dom.value = text;
    dom.setAttribute("style", "display: block;width: 1px;height: 1px;");
    document.body.appendChild(dom);
    dom.select();
    var result = document.execCommand("copy");
    document.body.removeChild(dom);
    if (result) {
      console.log("复制成功");
      typeof fn === "function" && fn();
      return;
    }
    if (typeof document.createRange !== "function") {
      console.log("复制失败，请长按复制");
      return;
    }
    var range = document.createRange();
    var div = document.createElement("div");
    div.innerHTML = text;
    div.setAttribute("style", "height: 1px;fontSize: 1px;overflow: hidden;");
    document.body.appendChild(div);
    range.selectNode(div);
    var selection = window.getSelection();
    console.log(selection);
    if (selection.rangeCount > 0) {
      selection.removeAllRanges();
    }
    selection.addRange(range);
    document.execCommand("copy");
    typeof fn === "function" && fn();
    console.log("复制成功");
  };

  var parseQueryString = function (url) {
    //url参数转对象
    url = !url ? window.location.href : url;
    if (url.indexOf("?") === -1) {
      return {};
    }
    let search =
        url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
    if (search === "") {
      return {};
    }
    search = search.split("&");
    let query = {};
    for (let i = 0; i < search.length; i++) {
      let pair = search[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  };
})();
