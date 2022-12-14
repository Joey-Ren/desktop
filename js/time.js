(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TimeCanvas = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    Object.defineProperty(subClass, "prototype", {
      value: Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      }),
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var digit = [[[0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0]], //0
  [[0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1]], //1
  [[0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1]], //2
  [[1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]], //3
  [[0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0], [0, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 1]], //4
  [[1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]], //5
  [[0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]], //6
  [[1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0]], //7
  [[0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]], //8
  [[0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0]], //9
  [[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]] //:
  ];

  var FORMATS = ['h:i:s', 'h:i', 'i:s', 's'];
  var DEFAULT_OPTIONS = {
    colors: ["#99CCFF", "#0099CC", "#FF9999", "#FF0033", "#FFCC99", "#FF6600", "#99CC33", "#339933", "#CCCCFF", "#993399", "#FFFF66", "#FFCC00", "#FF33CC", "#666633"],
    color: '#0081FF',
    width: 320,
    height: 200,
    center: true,
    middle: true,
    padding: 20,
    size: 0,
    ballCount: 300,
    format: FORMATS[0]
  };
  var pad = function pad(n) {
    return n < 10 ? "0".concat(n) : n;
  };
  var Base = /*#__PURE__*/function () {
    function Base() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Base);

      this.options = Object.assign(DEFAULT_OPTIONS, options);
      this.id = id || 'canvas';
      this._balls = [];
      var canvas = document.getElementById(this.id);
      canvas.width = this.options.width;
      canvas.height = this.options.height;
      this.context = canvas.getContext("2d");

      if (!FORMATS.includes(this.options.format)) {
        this.options.format = FORMATS[0];
      }
    }

    _createClass(Base, [{
      key: "_play",
      value: function _play() {
        var _this = this;

        this._clearTimer();

        this._timer = setInterval(function () {
          _this._render();

          _this._update();
        }, 50);
      }
    }, {
      key: "_pause",
      value: function _pause(reserve) {
        var _this2 = this;

        if (!this._timer) return;

        this._clearTimer();

        if (reserve !== true) {
          this._timer = setInterval(function () {
            _this2._render();

            _this2._updateBalls();
          }, 50);
        }
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        var _this$options = this.options,
            width = _this$options.width,
            height = _this$options.height;

        this._clearTimer();

        this.context.clearRect(0, 0, width, height);
        this._balls = [];
      }
    }, {
      key: "_render",
      value: function _render() {
        var _this$options2 = this.options,
            width = _this$options2.width,
            height = _this$options2.height;

        var renderDigit = this._renderDigit.bind(this);

        var ctx = this.context;

        var renderData = this._getRenderData(this._currentTime);

        this._rect = this._getRect(renderData);
        var top = this._rect.top;
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < renderData.length; i++) {
          renderDigit(this._getOffset(renderData, i), top, renderData[i]);
        }

        this._renderBalls();
      }
    }, {
      key: "_update",
      value: function _update() {
        var nextTime = this.getCurrentTime();

        var nextRenderData = this._getRenderData(nextTime);

        var lastRenderData = this._getRenderData(this._currentTime);

        var top = this._rect.top;

        this._emit('change', nextTime);

        if (nextRenderData.join("") != lastRenderData.join("")) {
          for (var i = 0; i < lastRenderData.length; i++) {
            if (nextRenderData[i] != lastRenderData[i]) {
              this._addBall(this._getOffset(lastRenderData, i), top, lastRenderData[i]);
            }
          }

          this._currentTime = nextTime;
        }

        this._updateBalls(nextTime);
      } // abstract

    }, {
      key: "_getRenderData",
      value: function _getRenderData() {}
    }, {
      key: "_renderBalls",
      value: function _renderBalls() {
        var balls = this._balls;
        var radius = this._rect.radius;
        var ctx = this.context;

        for (var i = 0; i < balls.length; i++) {
          ctx.fillStyle = balls[i].color;
          ctx.beginPath();
          ctx.arc(balls[i].x, balls[i].y, radius, 0, 2 * Math.PI, true);
          ctx.closePath();
          ctx.fill();
        }
      }
    }, {
      key: "_renderDigit",
      value: function _renderDigit(x, y, num) {
        var ctx = this.context;
        var radius = this._rect.radius;
        var size = radius + 1;
        num = num === ":" ? 10 : parseInt(num);
        ctx.fillStyle = this.options.color;

        for (var i = 0; i < digit[num].length; i++) {
          for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
              ctx.beginPath();
              ctx.arc(x + size + j * 2 * size, y + size + i * 2 * size, radius, 0, 2 * Math.PI);
              ctx.closePath();
              ctx.fill();
            }
          }
        }
      }
    }, {
      key: "_addBall",
      value: function _addBall(x, y, num) {
        var radius = this._rect.radius;
        var size = radius + 1;
        var colors = this.options.colors;

        for (var i = 0; i < digit[num].length; i++) {
          for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
              var ball = {
                x: x + j * 2 * size + size,
                y: y + i * 2 * size + size,
                g: 1.5 + Math.random(),
                vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 5,
                vy: -5,
                color: colors[Math.floor(Math.random() * colors.length)]
              };

              this._balls.push(ball);
            }
          }
        }
      } // abstract

    }, {
      key: "_updateBalls",
      value: function _updateBalls() {}
    }, {
      key: "_getRenderBalls",
      value: function _getRenderBalls() {
        var _this$options3 = this.options,
            width = _this$options3.width,
            height = _this$options3.height;
        var balls = this._balls;
        var radius = this._rect.radius;

        for (var i = 0; i < balls.length; i++) {
          balls[i].x += balls[i].vx;
          balls[i].y += balls[i].vy;
          balls[i].vy += balls[i].g; //bound

          if (balls[i].y >= height - radius) {
            balls[i].y = height - radius;
            balls[i].vy = -balls[i].vy * 0.75;
          } else if (balls[i].x >= width - radius) {
            balls[i].x = width - radius;
            balls[i].vx = -balls[i].vx * 3;
          }
        }

        var cnt = 0;

        for (var _i = 0; _i < balls.length; _i++) {
          if (balls[_i].x + radius > 0 && balls[_i].x - radius < width) {
            balls[cnt++] = balls[_i];
          }
        }

        while (balls.length > Math.min(this.options.ballCount, cnt)) {
          balls.pop();
        }

        return cnt;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset(arr, index) {
        var offset = this._rect.left;
        var size = this._rect.radius + 1;

        for (var i = 0; i <= index; i++) {
          var last = arr[i - 1];

          if (last) {
            offset += (last === ':' ? 9 : 15) * size;
          }
        }

        return offset;
      }
    }, {
      key: "_getRect",
      value: function _getRect(arr) {
        var _this$options4 = this.options,
            width = _this$options4.width,
            height = _this$options4.height,
            padding = _this$options4.padding,
            size = _this$options4.size,
            center = _this$options4.center,
            middle = _this$options4.middle;
        var validWidth = width - padding * 2;
        var validHeight = height - padding * 2;
        var left,
            top,
            radius,
            count = 0;

        for (var i = 0; i < arr.length; i++) {
          if (arr[i] !== ':') {
            count += 14;

            if (arr[i + 1] && arr[i + 1] !== ':') {
              count += 2;
            }
          } else {
            count += 9;
          }
        } // 粒子半径


        if (size > 0) {
          radius = size / 14 - 1;
        } else {
          radius = validWidth / count - 1;
        }

        radius = Math.max(1, radius); // 坐标原点

        if (center) {
          left = padding + validWidth / 2 - count / 2 * (radius + 1);
        } else {
          left = padding;
        }

        if (middle) {
          top = padding + validHeight / 2 - 10 * (radius + 1);
        } else {
          top = padding;
        }

        return {
          left: left,
          top: top,
          radius: radius
        };
      }
    }, {
      key: "_clearTimer",
      value: function _clearTimer() {
        clearInterval(this._timer);
        this._timer = null;
      }
    }, {
      key: "_emit",
      value: function _emit(type) {
        var callback = this.options[type];

        if (typeof callback === 'function') {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          return callback.apply(void 0, params);
        }
      }
    }]);

    return Base;
  }();

  var Time = /*#__PURE__*/function (_Base) {
    _inherits(Time, _Base);

    var _super = _createSuper(Time);

    function Time() {
      var _this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Time);

      _this = _super.call(this, id, options);

      _this._init();

      return _possibleConstructorReturn(_this, _this._getInstance());
    }

    _createClass(Time, [{
      key: "_getInstance",
      value: function _getInstance() {
        var _this2 = this;

        var obj = {};
        var keys = ['pause', 'play', 'getCurrentTime', 'destroy'];
        keys.map(function (item) {
          obj[item] = _this2[item].bind(_this2);
        });
        return obj;
      }
    }, {
      key: "_init",
      value: function _init() {
        this.play();

        this._emit("init", this._currentTime);
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        var now = new Date();
        return {
          hours: now.getHours(),
          minutes: now.getMinutes(),
          seconds: now.getSeconds(),
          milliseconds: now.getMilliseconds(),
          now: now
        };
      }
    }, {
      key: "play",
      value: function play() {
        if (!this._currentTime) {
          this._currentTime = this.getCurrentTime();
        }

        return this._play();
      }
    }, {
      key: "pause",
      value: function pause(reserve) {
        return this._pause(reserve);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        return this._destroy();
      }
    }, {
      key: "_getRenderData",
      value: function _getRenderData(time) {
        var hours = time.hours,
            minutes = time.minutes,
            seconds = time.seconds;
        var str = this.options.format;
        str = str.replace('h', pad(hours)).replace('i', pad(minutes)).replace('s', pad(seconds));
        return str.split('');
      }
    }, {
      key: "_updateBalls",
      value: function _updateBalls() {
        this._getRenderBalls();
      }
    }]);

    return Time;
  }(Base);

  return Time;

}));
