(() => {
  var e = { 517: (e, t, r) => {
      var n = {};e.exports = n, n.themes = {};var o = r(669), s = n.styles = r(784), i = Object.defineProperties, a = new RegExp(/[\r\n]+/g);n.supportsColor = r(561).supportsColor, void 0 === n.enabled && (n.enabled = !1 !== n.supportsColor()), n.enable = function() {
        n.enabled = !0;
      }, n.disable = function() {
        n.enabled = !1;
      }, n.stripColors = n.strip = function(e) {
        return ('' + e).replace(/\x1B\[\d+m/g, '');
      }, n.stylize = function(e, t) {
        if (!n.enabled) {
          return e + '';
        } var r = s[t];return !r && t in n ? n[t](e) : r.open + e + r.close;
      };var u = /[|\\{}()[\]^$+*?.]/g;function c(e) {
        var t = function e() {
          return p.apply(e, arguments);
        };return t._styles = e, t.__proto__ = h, t;
      } var l, f = (l = {}, s.grey = s.gray, Object.keys(s).forEach(function(e) {
          s[e].closeRe = new RegExp(function(e) {
            if ('string' != typeof e) {
              throw new TypeError('Expected a string');
            } return e.replace(u, '\\$&');
          }(s[e].close), 'g'), l[e] = { get: function() {
            return c(this._styles.concat(e));
          } };
        }), l), h = i(function() {}, f);function p() {
        var e = Array.prototype.slice.call(arguments), t = e.map(function(e) {
          return null != e && e.constructor === String ? e : o.inspect(e);
        }).join(' ');if (!n.enabled || !t) {
          return t;
        } for (var r = -1 != t.indexOf('\n'), i = this._styles, u = i.length;u--;) {
          var c = s[i[u]];t = c.open + t.replace(c.closeRe, c.open) + c.close, r && (t = t.replace(a, function(e) {
            return c.close + e + c.open;
          }));
        } return t;
      }n.setTheme = function(e) {
        if ('string' != typeof e) {
          for (var t in e) {
            !function(t) {
              n[t] = function(r) {
                if ('object' == typeof e[t]) {
                  var o = r;for (var s in e[t]) {
                    o = n[e[t][s]](o);
                  } return o;
                } return n[e[t]](r);
              };
            }(t);
          }
        } else {
          console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
        }
      };var d = function(e, t) {
        var r = t.split('');return (r = r.map(e)).join('');
      };for (var m in n.trap = r(117), n.zalgo = r(492), n.maps = {}, n.maps.america = r(260)(n), n.maps.zebra = r(270)(n), n.maps.rainbow = r(920)(n), n.maps.random = r(449)(n), n.maps) {
        !function(e) {
          n[e] = function(t) {
            return d(n.maps[e], t);
          };
        }(m);
      }i(n, function() {
        var e = {};return Object.keys(f).forEach(function(t) {
          e[t] = { get: function() {
            return c([t]);
          } };
        }), e;
      }());
    },
    117: e => {
      e.exports = function(e, t) {
        var r = '';e = (e = e || 'Run the trap, drop the bass').split('');var n = { a: ['@', 'Ą', 'Ⱥ', 'Ʌ', 'Δ', 'Λ', 'Д'], b: ['ß', 'Ɓ', 'Ƀ', 'ɮ', 'β', '฿'], c: ['©', 'Ȼ', 'Ͼ'], d: ['Ð', 'Ɗ', 'Ԁ', 'ԁ', 'Ԃ', 'ԃ'], e: ['Ë', 'ĕ', 'Ǝ', 'ɘ', 'Σ', 'ξ', 'Ҽ', '੬'], f: ['Ӻ'], g: ['ɢ'], h: ['Ħ', 'ƕ', 'Ң', 'Һ', 'Ӈ', 'Ԋ'], i: ['༏'], j: ['Ĵ'], k: ['ĸ', 'Ҡ', 'Ӄ', 'Ԟ'], l: ['Ĺ'], m: ['ʍ', 'Ӎ', 'ӎ', 'Ԡ', 'ԡ', '൩'], n: ['Ñ', 'ŋ', 'Ɲ', 'Ͷ', 'Π', 'Ҋ'], o: ['Ø', 'õ', 'ø', 'Ǿ', 'ʘ', 'Ѻ', 'ם', '۝', '๏'], p: ['Ƿ', 'Ҏ'], q: ['্'], r: ['®', 'Ʀ', 'Ȑ', 'Ɍ', 'ʀ', 'Я'], s: ['§', 'Ϟ', 'ϟ', 'Ϩ'], t: ['Ł', 'Ŧ', 'ͳ'], u: ['Ʊ', 'Ս'], v: ['ט'], w: ['Ш', 'Ѡ', 'Ѽ', '൰'], x: ['Ҳ', 'Ӿ', 'Ӽ', 'ӽ'], y: ['¥', 'Ұ', 'Ӌ'], z: ['Ƶ', 'ɀ'] };return e.forEach(function(e) {
          e = e.toLowerCase();var t = n[e] || [' '], o = Math.floor(Math.random() * t.length);r += void 0 !== n[e] ? n[e][o] : e;
        }), r;
      };
    },
    492: e => {
      e.exports = function(e, t) {
        e = e || '   he is here   ';var r = { up: ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'], down: ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'], mid: ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', ' ҉'] }, n = [].concat(r.up, r.down, r.mid);function o(e) {
          return Math.floor(Math.random() * e);
        } function s(e) {
          var t = !1;return n.filter(function(r) {
            t = r === e;
          }), t;
        } return function(e, t) {
          var n, i, a = '';for (i in (t = t || {}).up = void 0 === t.up || t.up, t.mid = void 0 === t.mid || t.mid, t.down = void 0 === t.down || t.down, t.size = void 0 !== t.size ? t.size : 'maxi', e = e.split('')) {
            if (!s(i)) {
              switch (a += e[i], n = { up: 0, down: 0, mid: 0 }, t.size) {
                case 'mini':n.up = o(8), n.mid = o(2), n.down = o(8);break;case 'maxi':n.up = o(16) + 3, n.mid = o(4) + 1, n.down = o(64) + 3;break;default:n.up = o(8) + 1, n.mid = o(6) / 2, n.down = o(8) + 1;
              } var u = ['up', 'mid', 'down'];for (var c in u) {
                for (var l = u[c], f = 0;f <= n[l];f++) {
                  t[l] && (a += r[l][o(r[l].length)]);
                }
              }
            }
          } return a;
        }(e, t);
      };
    },
    883: (e, t, r) => {
      var n = r(517);e.exports = function() {
        var e = function(e, t) {
          String.prototype.__defineGetter__(e, t);
        };e('strip', function() {
          return n.strip(this);
        }), e('stripColors', function() {
          return n.strip(this);
        }), e('trap', function() {
          return n.trap(this);
        }), e('zalgo', function() {
          return n.zalgo(this);
        }), e('zebra', function() {
          return n.zebra(this);
        }), e('rainbow', function() {
          return n.rainbow(this);
        }), e('random', function() {
          return n.random(this);
        }), e('america', function() {
          return n.america(this);
        }), Object.keys(n.styles).forEach(function(t) {
          e(t, function() {
            return n.stylize(this, t);
          });
        }), n.setTheme = function(t) {
          'string' != typeof t ? function(t) {
            var r = ['__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', 'charAt', 'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf', 'charCodeAt', 'indexOf', 'lastIndexOf', 'length', 'localeCompare', 'match', 'repeat', 'replace', 'search', 'slice', 'split', 'substring', 'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight'];Object.keys(t).forEach(function(o) {
              if (-1 !== r.indexOf(o)) {
                console.log('warn: '.red + ('String.prototype' + o).magenta + " is probably something you don't want to override.  Ignoring style name");
              } else if ('string' == typeof t[o]) {
                n[o] = n[t[o]], e(o, function() {
                  return n[o](this);
                });
              } else {
                var s = function(e) {
                  for (var r = e || this, s = 0;s < t[o].length;s++) {
                    r = n[t[o][s]](r);
                  } return r;
                };e(o, s), n[o] = function(e) {
                  return s(e);
                };
              }
            });
          }(t) : console.log("colors.setTheme now only accepts an object, not a string. If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
        };
      };
    },
    196: (e, t, r) => {
      var n = r(517);e.exports = n, r(883)();
    },
    260: e => {
      e.exports = function(e) {
        return function(t, r, n) {
          if (' ' === t) {
            return t;
          } switch (r % 3) {
            case 0:return e.red(t);case 1:return e.white(t);case 2:return e.blue(t);
          }
        };
      };
    },
    920: e => {
      e.exports = function(e) {
        var t = ['red', 'yellow', 'green', 'blue', 'magenta'];return function(r, n, o) {
          return ' ' === r ? r : e[t[n++ % t.length]](r);
        };
      };
    },
    449: e => {
      e.exports = function(e) {
        var t = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed', 'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];return function(r, n, o) {
          return ' ' === r ? r : e[t[Math.round(Math.random() * (t.length - 2))]](r);
        };
      };
    },
    270: e => {
      e.exports = function(e) {
        return function(t, r, n) {
          return r % 2 == 0 ? t : e.inverse(t);
        };
      };
    },
    784: e => {
      var t = {};e.exports = t;var r = { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29], black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], grey: [90, 39], brightRed: [91, 39], brightGreen: [92, 39], brightYellow: [93, 39], brightBlue: [94, 39], brightMagenta: [95, 39], brightCyan: [96, 39], brightWhite: [97, 39], bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgGray: [100, 49], bgGrey: [100, 49], bgBrightRed: [101, 49], bgBrightGreen: [102, 49], bgBrightYellow: [103, 49], bgBrightBlue: [104, 49], bgBrightMagenta: [105, 49], bgBrightCyan: [106, 49], bgBrightWhite: [107, 49], blackBG: [40, 49], redBG: [41, 49], greenBG: [42, 49], yellowBG: [43, 49], blueBG: [44, 49], magentaBG: [45, 49], cyanBG: [46, 49], whiteBG: [47, 49] };Object.keys(r).forEach(function(e) {
        var n = r[e], o = t[e] = [];o.open = '[' + n[0] + 'm', o.close = '[' + n[1] + 'm';
      });
    },
    340: e => {
      'use strict';e.exports = function(e, t) {
        var r = (t = t || process.argv).indexOf('--'), n = /^-{1,2}/.test(e) ? '' : '--', o = t.indexOf(n + e);return -1 !== o && (-1 === r || o < r);
      };
    },
    561: (e, t, r) => {
      'use strict';var n = r(87), o = r(340), s = process.env, i = void 0;function a(e) {
        return 0 !== (t = function(e) {
          if (!1 === i) {
            return 0;
          } if (o('color=16m') || o('color=full') || o('color=truecolor')) {
            return 3;
          } if (o('color=256')) {
            return 2;
          } if (e && !e.isTTY && !0 !== i) {
            return 0;
          } var t = i ? 1 : 0;if ('win32' === process.platform) {
            var r = n.release().split('.');return Number(process.versions.node.split('.')[0]) >= 8 && Number(r[0]) >= 10 && Number(r[2]) >= 10586 ? Number(r[2]) >= 14931 ? 3 : 2 : 1;
          } if ('CI' in s) {
            return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(e) {
              return e in s;
            }) || 'codeship' === s.CI_NAME ? 1 : t;
          } if ('TEAMCITY_VERSION' in s) {
            return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
          } if ('TERM_PROGRAM' in s) {
            var a = parseInt((s.TERM_PROGRAM_VERSION || '').split('.')[0], 10);switch (s.TERM_PROGRAM) {
              case 'iTerm.app':return a >= 3 ? 3 : 2;case 'Hyper':return 3;case 'Apple_Terminal':return 2;
            }
          } return /-256(color)?$/i.test(s.TERM) ? 2 : /^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM) || 'COLORTERM' in s ? 1 : (s.TERM, t);
        }(e)) && { level: t, hasBasic: !0, has256: t >= 2, has16m: t >= 3 };var t;
      }o('no-color') || o('no-colors') || o('color=false') ? i = !1 : (o('color') || o('colors') || o('color=true') || o('color=always')) && (i = !0), 'FORCE_COLOR' in s && (i = 0 === s.FORCE_COLOR.length || 0 !== parseInt(s.FORCE_COLOR, 10)), e.exports = { supportsColor: a, stdout: a(process.stdout), stderr: a(process.stderr) };
    },
    280: (e, t, r) => {
      'use strict';const n = class extends class {} {
          constructor(e) {
            super(), this.CI = 'true' === e.CI, this.CI_MERGE_REQUEST_IID = e.CI_MERGE_REQUEST_IID, this.API_URL = e.CI_API_V4_URL, this.CI_PROJECT_ID = e.CI_PROJECT_ID, this.ACCESS_TOKEN = e.CI_ACCESS_TOKEN, this.BRANCH_NAME = e.CI_COMMIT_BRANCH;
          }isCI() {
            return this.CI;
          }
        }, o = require('stream'), s = require('http'), i = require('url'), a = require('https'), u = require('zlib'), c = o.Readable, l = Symbol('buffer'), f = Symbol('type');class h {
        constructor() {
          this[f] = '';const e = arguments[0], t = arguments[1], r = [];let n = 0;if (e) {
            const t = e, o = Number(t.length);for (let e = 0;e < o;e++) {
              const o = t[e];let s;s = o instanceof Buffer ? o : ArrayBuffer.isView(o) ? Buffer.from(o.buffer, o.byteOffset, o.byteLength) : o instanceof ArrayBuffer ? Buffer.from(o) : o instanceof h ? o[l] : Buffer.from('string' == typeof o ? o : String(o)), n += s.length, r.push(s);
            }
          } this[l] = Buffer.concat(r);let o = t && void 0 !== t.type && String(t.type).toLowerCase();o && !/[^\u0020-\u007E]/.test(o) && (this[f] = o);
        } get size() {
          return this[l].length;
        } get type() {
          return this[f];
        }text() {
          return Promise.resolve(this[l].toString());
        }arrayBuffer() {
          const e = this[l], t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);return Promise.resolve(t);
        }stream() {
          const e = new c;return e._read = function() {}, e.push(this[l]), e.push(null), e;
        }toString() {
          return '[object Blob]';
        }slice() {
          const e = this.size, t = arguments[0], r = arguments[1];let n, o;n = void 0 === t ? 0 : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), o = void 0 === r ? e : r < 0 ? Math.max(e + r, 0) : Math.min(r, e);const s = Math.max(o - n, 0), i = this[l].slice(n, n + s), a = new h([], { type: arguments[2] });return a[l] = i, a;
        }
      } function p(e, t, r) {
        Error.call(this, e), this.message = e, this.type = t, r && (this.code = this.errno = r.code), Error.captureStackTrace(this, this.constructor);
      } let d;Object.defineProperties(h.prototype, { size: { enumerable: !0 }, type: { enumerable: !0 }, slice: { enumerable: !0 } }), Object.defineProperty(h.prototype, Symbol.toStringTag, { value: 'Blob', writable: !1, enumerable: !1, configurable: !0 }), p.prototype = Object.create(Error.prototype), p.prototype.constructor = p, p.prototype.name = 'FetchError';try {
        d = require('encoding').convert;
      } catch (e) {} const m = Symbol('Body internals'), g = o.PassThrough;function b(e) {
        var t = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = r.size;let s = void 0 === n ? 0 : n;var i = r.timeout;let a = void 0 === i ? 0 : i;null == e ? e = null : v(e) ? e = Buffer.from(e.toString()) : w(e) || Buffer.isBuffer(e) || ('[object ArrayBuffer]' === Object.prototype.toString.call(e) ? e = Buffer.from(e) : ArrayBuffer.isView(e) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : e instanceof o || (e = Buffer.from(String(e)))), this[m] = { body: e, disturbed: !1, error: null }, this.size = s, this.timeout = a, e instanceof o && e.on('error', function(e) {
          const r = 'AbortError' === e.name ? e : new p(`Invalid response body while trying to fetch ${t.url}: ${e.message}`, 'system', e);t[m].error = r;
        });
      } function y() {
        var e = this;if (this[m].disturbed) {
          return b.Promise.reject(new TypeError(`body used already for: ${this.url}`));
        } if (this[m].disturbed = !0, this[m].error) {
          return b.Promise.reject(this[m].error);
        } let t = this.body;if (null === t) {
          return b.Promise.resolve(Buffer.alloc(0));
        } if (w(t) && (t = t.stream()), Buffer.isBuffer(t)) {
          return b.Promise.resolve(t);
        } if (!(t instanceof o)) {
          return b.Promise.resolve(Buffer.alloc(0));
        } let r = [], n = 0, s = !1;return new b.Promise(function(o, i) {
          let a;e.timeout && (a = setTimeout(function() {
            s = !0, i(new p(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, 'body-timeout'));
          }, e.timeout)), t.on('error', function(t) {
            'AbortError' === t.name ? (s = !0, i(t)) : i(new p(`Invalid response body while trying to fetch ${e.url}: ${t.message}`, 'system', t));
          }), t.on('data', function(t) {
            if (!s && null !== t) {
              if (e.size && n + t.length > e.size) {
                return s = !0, void i(new p(`content size at ${e.url} over limit: ${e.size}`, 'max-size'));
              }n += t.length, r.push(t);
            }
          }), t.on('end', function() {
            if (!s) {
              clearTimeout(a);try {
                o(Buffer.concat(r, n));
              } catch (t) {
                i(new p(`Could not create Buffer from response body for ${e.url}: ${t.message}`, 'system', t));
              }
            }
          });
        });
      } function v(e) {
        return 'object' == typeof e && 'function' == typeof e.append && 'function' == typeof e.delete && 'function' == typeof e.get && 'function' == typeof e.getAll && 'function' == typeof e.has && 'function' == typeof e.set && ('URLSearchParams' === e.constructor.name || '[object URLSearchParams]' === Object.prototype.toString.call(e) || 'function' == typeof e.sort);
      } function w(e) {
        return 'object' == typeof e && 'function' == typeof e.arrayBuffer && 'string' == typeof e.type && 'function' == typeof e.stream && 'function' == typeof e.constructor && 'string' == typeof e.constructor.name && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag]);
      } function E(e) {
        let t, r, n = e.body;if (e.bodyUsed) {
          throw new Error('cannot clone body after it is used');
        } return n instanceof o && 'function' != typeof n.getBoundary && (t = new g, r = new g, n.pipe(t), n.pipe(r), e[m].body = t, n = r), n;
      } function T(e) {
        return null === e ? null : 'string' == typeof e ? 'text/plain;charset=UTF-8' : v(e) ? 'application/x-www-form-urlencoded;charset=UTF-8' : w(e) ? e.type || null : Buffer.isBuffer(e) || '[object ArrayBuffer]' === Object.prototype.toString.call(e) || ArrayBuffer.isView(e) ? null : 'function' == typeof e.getBoundary ? `multipart/form-data;boundary=${e.getBoundary()}` : e instanceof o ? null : 'text/plain;charset=UTF-8';
      } function O(e) {
        const t = e.body;return null === t ? 0 : w(t) ? t.size : Buffer.isBuffer(t) ? t.length : t && 'function' == typeof t.getLengthSync && (t._lengthRetrievers && 0 == t._lengthRetrievers.length || t.hasKnownLength && t.hasKnownLength()) ? t.getLengthSync() : null;
      }b.prototype = { get body() {
        return this[m].body;
      },
      get bodyUsed() {
        return this[m].disturbed;
      },
      arrayBuffer() {
        return y.call(this).then(function(e) {
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        });
      },
      blob() {
        let e = this.headers && this.headers.get('content-type') || '';return y.call(this).then(function(t) {
          return Object.assign(new h([], { type: e.toLowerCase() }), { [l]: t });
        });
      },
      json() {
        var e = this;return y.call(this).then(function(t) {
          try {
            return JSON.parse(t.toString());
          } catch (t) {
            return b.Promise.reject(new p(`invalid json response body at ${e.url} reason: ${t.message}`, 'invalid-json'));
          }
        });
      },
      text() {
        return y.call(this).then(function(e) {
          return e.toString();
        });
      },
      buffer() {
        return y.call(this);
      },
      textConverted() {
        var e = this;return y.call(this).then(function(t) {
          return function(e, t) {
            if ('function' != typeof d) {
              throw new Error('The package `encoding` must be installed to use the textConverted() function');
            } const r = t.get('content-type');let n, o, s = 'utf-8';return r && (n = /charset=([^;]*)/i.exec(r)), o = e.slice(0, 1024).toString(), !n && o && (n = /<meta.+?charset=(['"])(.+?)\1/i.exec(o)), !n && o && (n = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o), n || (n = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o), n && n.pop()), n && (n = /charset=(.*)/i.exec(n.pop()))), !n && o && (n = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)), n && (s = n.pop(), 'gb2312' !== s && 'gbk' !== s || (s = 'gb18030')), d(e, 'UTF-8', s).toString();
          }(t, e.headers);
        });
      } }, Object.defineProperties(b.prototype, { body: { enumerable: !0 }, bodyUsed: { enumerable: !0 }, arrayBuffer: { enumerable: !0 }, blob: { enumerable: !0 }, json: { enumerable: !0 }, text: { enumerable: !0 } }), b.mixIn = function(e) {
        for (const t of Object.getOwnPropertyNames(b.prototype)) {
          if (!(t in e)) {
            const r = Object.getOwnPropertyDescriptor(b.prototype, t);Object.defineProperty(e, t, r);
          }
        }
      }, b.Promise = global.Promise;const x = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/, C = /[^\t\x20-\x7e\x80-\xff]/;function _(e) {
        if (e = `${e}`, x.test(e) || '' === e) {
          throw new TypeError(`${e} is not a legal HTTP header name`);
        }
      } function S(e) {
        if (e = `${e}`, C.test(e)) {
          throw new TypeError(`${e} is not a legal HTTP header value`);
        }
      } function R(e, t) {
        t = t.toLowerCase();for (const r in e) {
          if (r.toLowerCase() === t) {
            return r;
          }
        }
      } const j = Symbol('map');class B {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;if (this[j] = Object.create(null), e instanceof B) {
            const t = e.raw(), r = Object.keys(t);for (const e of r) {
              for (const r of t[e]) {
                this.append(e, r);
              }
            }
          } else if (null == e) {

          } else {
            if ('object' != typeof e) {
              throw new TypeError('Provided initializer must be an object');
            } {const t = e[Symbol.iterator];if (null != t) {
              if ('function' != typeof t) {
                throw new TypeError('Header pairs must be iterable');
              } const r = [];for (const t of e) {
                if ('object' != typeof t || 'function' != typeof t[Symbol.iterator]) {
                  throw new TypeError('Each header pair must be iterable');
                }r.push(Array.from(t));
              } for (const e of r) {
                if (2 !== e.length) {
                  throw new TypeError('Each header pair must be a name/value tuple');
                } this.append(e[0], e[1]);
              }
            } else {
              for (const t of Object.keys(e)) {
                const r = e[t];this.append(t, r);
              }
            }}
          }
        }get(e) {
          _(e = `${e}`);const t = R(this[j], e);return void 0 === t ? null : this[j][t].join(', ');
        }forEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, r = P(this), n = 0;for (;n < r.length;) {
            var o = r[n];const s = o[0], i = o[1];e.call(t, i, s, this), r = P(this), n++;
          }
        }set(e, t) {
          t = `${t}`, _(e = `${e}`), S(t);const r = R(this[j], e);this[j][void 0 !== r ? r : e] = [t];
        }append(e, t) {
          t = `${t}`, _(e = `${e}`), S(t);const r = R(this[j], e);void 0 !== r ? this[j][r].push(t) : this[j][e] = [t];
        }has(e) {
          return _(e = `${e}`), void 0 !== R(this[j], e);
        }delete(e) {
          _(e = `${e}`);const t = R(this[j], e);void 0 !== t && delete this[j][t];
        }raw() {
          return this[j];
        }keys() {
          return A(this, 'key');
        }values() {
          return A(this, 'value');
        }[Symbol.iterator]() {
          return A(this, 'key+value');
        }
      } function P(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'key+value';const r = Object.keys(e[j]).sort();return r.map('key' === t ? function(e) {
          return e.toLowerCase();
        } : 'value' === t ? function(t) {
          return e[j][t].join(', ');
        } : function(t) {
          return [t.toLowerCase(), e[j][t].join(', ')];
        });
      }B.prototype.entries = B.prototype[Symbol.iterator], Object.defineProperty(B.prototype, Symbol.toStringTag, { value: 'Headers', writable: !1, enumerable: !1, configurable: !0 }), Object.defineProperties(B.prototype, { get: { enumerable: !0 }, forEach: { enumerable: !0 }, set: { enumerable: !0 }, append: { enumerable: !0 }, has: { enumerable: !0 }, delete: { enumerable: !0 }, keys: { enumerable: !0 }, values: { enumerable: !0 }, entries: { enumerable: !0 } });const I = Symbol('internal');function A(e, t) {
        const r = Object.create(M);return r[I] = { target: e, kind: t, index: 0 }, r;
      } const M = Object.setPrototypeOf({ next() {
        if (!this || Object.getPrototypeOf(this) !== M) {
          throw new TypeError('Value of `this` is not a HeadersIterator');
        } var e = this[I];const t = e.target, r = e.kind, n = e.index, o = P(t, r);return n >= o.length ? { value: void 0, done: !0 } : (this[I].index = n + 1, { value: o[n], done: !1 });
      } }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));function L(e) {
        const t = Object.assign({ __proto__: null }, e[j]), r = R(e[j], 'Host');return void 0 !== r && (t[r] = t[r][0]), t;
      }Object.defineProperty(M, Symbol.toStringTag, { value: 'HeadersIterator', writable: !1, enumerable: !1, configurable: !0 });const k = Symbol('Response internals'), $ = s.STATUS_CODES;class z {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};b.call(this, e, t);const r = t.status || 200, n = new B(t.headers);if (null != e && !n.has('Content-Type')) {
            const t = T(e);t && n.append('Content-Type', t);
          } this[k] = { url: t.url, status: r, statusText: t.statusText || $[r], headers: n, counter: t.counter };
        } get url() {
          return this[k].url || '';
        } get status() {
          return this[k].status;
        } get ok() {
          return this[k].status >= 200 && this[k].status < 300;
        } get redirected() {
          return this[k].counter > 0;
        } get statusText() {
          return this[k].statusText;
        } get headers() {
          return this[k].headers;
        }clone() {
          return new z(E(this), { url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected });
        }
      }b.mixIn(z.prototype), Object.defineProperties(z.prototype, { url: { enumerable: !0 }, status: { enumerable: !0 }, ok: { enumerable: !0 }, redirected: { enumerable: !0 }, statusText: { enumerable: !0 }, headers: { enumerable: !0 }, clone: { enumerable: !0 } }), Object.defineProperty(z.prototype, Symbol.toStringTag, { value: 'Response', writable: !1, enumerable: !1, configurable: !0 });const q = Symbol('Request internals'), G = i.parse, N = i.format, U = 'destroy' in o.Readable.prototype;function F(e) {
        return 'object' == typeof e && 'object' == typeof e[q];
      } class H {
        constructor(e) {
          let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};F(e) ? t = G(e.url) : (t = e && e.href ? G(e.href) : G(`${e}`), e = {});let n = r.method || e.method || 'GET';if (n = n.toUpperCase(), (null != r.body || F(e) && null !== e.body) && ('GET' === n || 'HEAD' === n)) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
          } let o = null != r.body ? r.body : F(e) && null !== e.body ? E(e) : null;b.call(this, o, { timeout: r.timeout || e.timeout || 0, size: r.size || e.size || 0 });const s = new B(r.headers || e.headers || {});if (null != o && !s.has('Content-Type')) {
            const e = T(o);e && s.append('Content-Type', e);
          } let i = F(e) ? e.signal : null;if ('signal' in r && (i = r.signal), null != i && !function(e) {
            const t = e && 'object' == typeof e && Object.getPrototypeOf(e);return !(!t || 'AbortSignal' !== t.constructor.name);
          }(i)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal');
          } this[q] = { method: n, redirect: r.redirect || e.redirect || 'follow', headers: s, parsedURL: t, signal: i }, this.follow = void 0 !== r.follow ? r.follow : void 0 !== e.follow ? e.follow : 20, this.compress = void 0 !== r.compress ? r.compress : void 0 === e.compress || e.compress, this.counter = r.counter || e.counter || 0, this.agent = r.agent || e.agent;
        } get method() {
          return this[q].method;
        } get url() {
          return N(this[q].parsedURL);
        } get headers() {
          return this[q].headers;
        } get redirect() {
          return this[q].redirect;
        } get signal() {
          return this[q].signal;
        }clone() {
          return new H(this);
        }
      } function D(e) {
        Error.call(this, e), this.type = 'aborted', this.message = e, Error.captureStackTrace(this, this.constructor);
      }b.mixIn(H.prototype), Object.defineProperty(H.prototype, Symbol.toStringTag, { value: 'Request', writable: !1, enumerable: !1, configurable: !0 }), Object.defineProperties(H.prototype, { method: { enumerable: !0 }, url: { enumerable: !0 }, headers: { enumerable: !0 }, redirect: { enumerable: !0 }, clone: { enumerable: !0 }, signal: { enumerable: !0 } }), D.prototype = Object.create(Error.prototype), D.prototype.constructor = D, D.prototype.name = 'AbortError';const V = o.PassThrough, Y = i.resolve;function K(e, t) {
        if (!K.Promise) {
          throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
        } return b.Promise = K.Promise, new K.Promise(function(r, n) {
          const i = new H(e, t), c = function(e) {
              const t = e[q].parsedURL, r = new B(e[q].headers);if (r.has('Accept') || r.set('Accept', '*/*'), !t.protocol || !t.hostname) {
                throw new TypeError('Only absolute URLs are supported');
              } if (!/^https?:$/.test(t.protocol)) {
                throw new TypeError('Only HTTP(S) protocols are supported');
              } if (e.signal && e.body instanceof o.Readable && !U) {
                throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
              } let n = null;if (null == e.body && /^(POST|PUT)$/i.test(e.method) && (n = '0'), null != e.body) {
                const t = O(e);'number' == typeof t && (n = String(t));
              }n && r.set('Content-Length', n), r.has('User-Agent') || r.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)'), e.compress && !r.has('Accept-Encoding') && r.set('Accept-Encoding', 'gzip,deflate');let s = e.agent;return 'function' == typeof s && (s = s(t)), r.has('Connection') || s || r.set('Connection', 'close'), Object.assign({}, t, { method: e.method, headers: L(r), agent: s });
            }(i), l = ('https:' === c.protocol ? a : s).request, f = i.signal;let h = null;const d = function() {
            let e = new D('The user aborted a request.');n(e), i.body && i.body instanceof o.Readable && i.body.destroy(e), h && h.body && h.body.emit('error', e);
          };if (f && f.aborted) {
            return void d();
          } const m = function() {
              d(), y();
            }, g = l(c);let b;function y() {
            g.abort(), f && f.removeEventListener('abort', m), clearTimeout(b);
          }f && f.addEventListener('abort', m), i.timeout && g.once('socket', function(e) {
            b = setTimeout(function() {
              n(new p(`network timeout at: ${i.url}`, 'request-timeout')), y();
            }, i.timeout);
          }), g.on('error', function(e) {
            n(new p(`request to ${i.url} failed, reason: ${e.message}`, 'system', e)), y();
          }), g.on('response', function(e) {
            clearTimeout(b);const t = function(e) {
              const t = new B;for (const r of Object.keys(e)) {
                if (!x.test(r)) {
                  if (Array.isArray(e[r])) {
                    for (const n of e[r]) {
                      C.test(n) || (void 0 === t[j][r] ? t[j][r] = [n] : t[j][r].push(n));
                    }
                  } else {
                    C.test(e[r]) || (t[j][r] = [e[r]]);
                  }
                }
              } return t;
            }(e.headers);if (K.isRedirect(e.statusCode)) {
              const o = t.get('Location'), s = null === o ? null : Y(i.url, o);switch (i.redirect) {
                case 'error':return n(new p(`uri requested responds with a redirect, redirect mode is set to error: ${i.url}`, 'no-redirect')), void y();case 'manual':if (null !== s) {
                  try {
                    t.set('Location', s);
                  } catch (e) {
                    n(e);
                  }
                } break;case 'follow':if (null === s) {
                  break;
                } if (i.counter >= i.follow) {
                    return n(new p(`maximum redirect reached at: ${i.url}`, 'max-redirect')), void y();
                  } const o = { headers: new B(i.headers), follow: i.follow, counter: i.counter + 1, agent: i.agent, compress: i.compress, method: i.method, body: i.body, signal: i.signal, timeout: i.timeout, size: i.size };return 303 !== e.statusCode && i.body && null === O(i) ? (n(new p('Cannot follow redirect with body being a readable stream', 'unsupported-redirect')), void y()) : (303 !== e.statusCode && (301 !== e.statusCode && 302 !== e.statusCode || 'POST' !== i.method) || (o.method = 'GET', o.body = void 0, o.headers.delete('content-length')), r(K(new H(s, o))), void y());
              }
            }e.once('end', function() {
              f && f.removeEventListener('abort', m);
            });let o = e.pipe(new V);const s = { url: i.url, status: e.statusCode, statusText: e.statusMessage, headers: t, size: i.size, timeout: i.timeout, counter: i.counter }, a = t.get('Content-Encoding');if (!i.compress || 'HEAD' === i.method || null === a || 204 === e.statusCode || 304 === e.statusCode) {
              return h = new z(o, s), void r(h);
            } const c = { flush: u.Z_SYNC_FLUSH, finishFlush: u.Z_SYNC_FLUSH };if ('gzip' == a || 'x-gzip' == a) {
              return o = o.pipe(u.createGunzip(c)), h = new z(o, s), void r(h);
            } if ('deflate' != a && 'x-deflate' != a) {
              if ('br' == a && 'function' == typeof u.createBrotliDecompress) {
                return o = o.pipe(u.createBrotliDecompress()), h = new z(o, s), void r(h);
              }h = new z(o, s), r(h);
            } else {
              e.pipe(new V).once('data', function(e) {
                o = 8 == (15 & e[0]) ? o.pipe(u.createInflate()) : o.pipe(u.createInflateRaw()), h = new z(o, s), r(h);
              });
            }
          }), function(e, t) {
            const r = t.body;null === r ? e.end() : w(r) ? r.stream().pipe(e) : Buffer.isBuffer(r) ? (e.write(r), e.end()) : r.pipe(e);
          }(g, i);
        });
      }K.isRedirect = function(e) {
        return 301 === e || 302 === e || 303 === e || 307 === e || 308 === e;
      }, K.Promise = global.Promise;const J = K, Q = class {
          constructor({ name: e }) {
            this.name = e;
          }
        }, W = require('fs');var Z = r.n(W);var X, ee, te = r(196), re = r.n(te);(ee = X || (X = {})).PASS = 'PASS', ee.FAIL = 'FAIL';class ne {
        constructor({ code: e, rule: t, message: r }) {
          this.code = e, this.rule = t, this.message = r;
        } static pass(e) {
          return new ne({ rule: e, code: X.PASS });
        } static fail(e, t) {
          return new ne({ rule: e, code: X.FAIL, message: t });
        }hasFail() {
          return this.code === X.FAIL;
        }describe() {
          return [re().bold(this.rule), '-', this.hasFail() ? re().bgRed.white(this.code) : re().bgGreen.white(this.code), this.hasFail() && this.message ? re().red(this.message) : null].filter(Boolean).join(' ');
        }
      } const oe = ne, se = class extends class {} {
          constructor(e) {
            super(), this.ruleName = 'MergeRequestName', this.configuration = e;
          }apply(e) {
            const { regex: t } = this.configuration;return t.test(e.name) ? oe.pass(this.ruleName) : oe.fail(this.ruleName, 'Merge request name does not respect regexp');
          }
        }, ie = class {
          static log(e) {
            console.log(e);
          } static warn(e) {
            console.log(re().yellow(e));
          } static error(e) {
            console.log(re().red(e));
          } static info(e) {
            console.log(re().blue(e));
          } static special(e) {
            console.log(re().magenta(e));
          }
        };var ae;ae = function*() {
        ie.log('========================='), ie.special('\tPUSH-RULES'), ie.info('\t  v1.0.2'), ie.log('=========================');const e = process.env;let t, r, o, s;ie.info('Preparing configuration...');try {
          t = class {
            static parse(e) {
              var t, r;if (!Z().existsSync(e)) {
                throw new Error('No configuration file found at project root. Add a .push-rulesrc file.');
              } const n = Z().readFileSync(e).toString(), o = JSON.parse(n);return new class {
                constructor(e) {
                  this.rules = e;
                }
              }([new se({ regex: new RegExp(null == (r = null == (t = o.rules) ? void 0 : t.title) ? void 0 : r.regExp) })]);
            }
          }.parse('.push-rulesrc'), r = class {
            static create(e) {
              if (this.isGitlabEnvironment(e)) {
                return new n(e);
              } throw new Error("Can't detect git provider");
            } static isGitlabEnvironment(e) {
              const t = /GITLAB/;return Object.keys(e).some(e => t.test(e));
            }
          }.create(e), o = class {
            static create(e) {
              if (this.isGitlab(e)) {
                return new class extends class {} {
                  constructor(e) {
                    super(), this.environment = e, this.headers = { headers: { 'PRIVATE-TOKEN': this.environment.ACCESS_TOKEN } };
                  }getMergeRequests() {
                    return e = this, t = function*() {
                      if (!this.environment.ACCESS_TOKEN) {
                        throw new Error('No access token');
                      } const e = `${this.environment.API_URL}/projects/${this.environment.CI_PROJECT_ID}/merge_requests`;if (this.environment.CI_MERGE_REQUEST_IID) {
                        const t = yield J(`${e}/${this.environment.CI_MERGE_REQUEST_IID}`, this.headers), r = yield t.json();return [new Q({ name: r.title })];
                      } if (this.environment.BRANCH_NAME) {
                        const t = yield J(`${e}?source_branch=${this.environment.BRANCH_NAME}`, this.headers);return (yield t.json()).map(e => new Q({ name: e.title }));
                      } return [];
                    }, new Promise((r, n) => {
                      var o = e => {
                          try {
                            i(t.next(e));
                          } catch (e) {
                            n(e);
                          }
                        }, s = e => {
                          try {
                            i(t.throw(e));
                          } catch (e) {
                            n(e);
                          }
                        }, i = e => (e.done ? r(e.value) : Promise.resolve(e.value).then(o, s));i((t = t.apply(e, null)).next());
                    });var e, t;
                  }
                }(e);
              } throw new Error("Can't detect git provider");
            } static isGitlab(e) {
              return e instanceof n;
            }
          }.create(r);
        } catch (e) {
          const t = e;ie.error(t.message), process.exit(1);
        }r.isCI() || (ie.warn("Does not seem to run on a CI. Can't check any rules"), process.exit(0)), ie.info('Fetching merge requests information...');try {
          s = yield o.getMergeRequests();
        } catch (e) {
          const t = e;ie.error(t.message), process.exit(1);
        }0 === s.length && (ie.warn('No merge requests found for branch'), process.exit(0));const i = class {
            static on(e, t) {
              return e.reduce((e, r) => {
                const n = r.apply(t);return e[n.rule] = n, e;
              }, {});
            } static onMultiple(e, t) {
              return t.reduce((t, r) => {
                const n = this.on(e, r);return t[r.name] = n, t;
              }, {});
            } static chain(...e) {
              return { on: t => this.on(e, t), onMultiple: t => this.onMultiple(e, t) };
            }
          }.chain(...t.rules).onMultiple(s), a = new class {
            constructor(e) {
              this.responseByMergeRequest = e;
            }describe() {
              return Object.entries(this.responseByMergeRequest).reduce((e, [t, r]) => [...e, (Object.values(r).some(e => e.hasFail()) ? '❌' : '✔️') + ' ' + re().cyan(t), ...Object.values(r).map(e => e.describe())], []).join('\n');
            }hasFailedMergeRequest() {
              return Object.values(this.responseByMergeRequest).some(e => Object.values(e).some(e => e.hasFail()));
            }
          }(i);ie.log(a.describe()), a.hasFailedMergeRequest() && process.exit(1), process.exit(0);
      }, new Promise((e, t) => {
        var r = e => {
            try {
              o(ae.next(e));
            } catch (e) {
              t(e);
            }
          }, n = e => {
            try {
              o(ae.throw(e));
            } catch (e) {
              t(e);
            }
          }, o = t => (t.done ? e(t.value) : Promise.resolve(t.value).then(r, n));o((ae = ae.apply(undefined, null)).next());
      });
    },
    87: e => {
      'use strict';e.exports = require('os');
    },
    669: e => {
      'use strict';e.exports = require('util');
    } }, t = {};function r(n) {
    var o = t[n];if (void 0 !== o) {
      return o.exports;
    } var s = t[n] = { exports: {} };return e[n](s, s.exports, r), s.exports;
  }r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;return r.d(t, { a: t }), t;
  }, r.d = (e, t) => {
    for (var n in t) {
      r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
  }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r(280);
})();