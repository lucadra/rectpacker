'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3 = require('d3');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var d3__namespace = /*#__PURE__*/_interopNamespace(d3);

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' width='320' height='160' viewBox='0 0 320 160'%3e %3cdefs%3e %3cstyle%3e .cls-1%2c .cls-2%2c .cls-3%2c .cls-4%2c .cls-5 %7b fill: white%3b %7d .cls-6 %7b fill: %234ba0b1%3b %7d .cls-6%2c .cls-7%2c .cls-8%2c .cls-9%2c .cls-10%2c .cls-11%2c .cls-12%2c .cls-13 %7b stroke: white%3b %7d .cls-7 %7b fill: %235e4fa2%3b %7d .cls-8 %7b fill: %23e1524a%3b %7d .cls-9 %7b fill: %23a0d9a3%3b %7d .cls-10 %7b fill: %239e0142%3b %7d .cls-2 %7b stroke: %235e4fa2%3b %7d .cls-11 %7b fill: %23fba35e%3b %7d .cls-12 %7b fill: %23ebf7a6%3b %7d .cls-3 %7b stroke: %23fba35e%3b %7d .cls-13 %7b fill: %23fee89a%3b %7d .cls-4 %7b stroke: %23ebf7a6%3b %7d .cls-5 %7b stroke: %23e1524a%3b %7d .cls-14 %7b font-family: Helvetica%2c Helvetica%3b font-size: 10px%3b isolation: isolate%3b %7d .cls-15 %7b fill: none%3b stroke: black%3b %7d %3c/style%3e %3c/defs%3e %3crect id='backgorund' class='cls-1' y='0' width='320' height='160'/%3e %3cg id='axis'%3e %3cg transform='translate(0%2c143)'%3e %3cpath class='cls-15' d='M20.5%2c150v-5.5H319.5v5.5'/%3e %3cg transform='translate(0.5%2c0)'%3e %3cline class='cls-15' x1='20.5' y1='144' x2='20.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(17.71924 160.09998)'%3e%3ctspan x='0' y='0'%3e0%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(30.5%2c0)'%3e %3cline class='cls-15' x1='50.5' y1='144' x2='50.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(44.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e10%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(60.5%2c0)'%3e %3cline class='cls-15' x1='80.5' y1='144' x2='80.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(74.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e20%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(90.5%2c0)'%3e %3cline class='cls-15' x1='110.5' y1='144' x2='110.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(104.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e30%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(120.5%2c0)'%3e %3cline class='cls-15' x1='140.5' y1='144' x2='140.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(134.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e40%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(150.5%2c0)'%3e %3cline class='cls-15' x1='170.5' y1='144' x2='170.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(164.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e50%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(179.5%2c0)'%3e %3cline class='cls-15' x1='199.5' y1='144' x2='199.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(193.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e60%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(209.5%2c0)'%3e %3cline class='cls-15' x1='229.5' y1='144' x2='229.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(223.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e70%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(239.5%2c0)'%3e %3cline class='cls-15' x1='259.5' y1='144' x2='259.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(253.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e80%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(269.5%2c0)'%3e %3cline class='cls-15' x1='289.5' y1='144' x2='289.5' y2='150'/%3e %3ctext class='cls-14' transform='translate(283.93848 160.09998)'%3e%3ctspan x='0' y='0'%3e90%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(299.5%2c0)'%3e %3cline class='cls-15' x1='319.5' y1='144' x2='319.5' y2='150'/%3e %3c/g%3e %3c/g%3e %3cg%3e %3cpath class='cls-15' d='M14%2c144.5h6.5V1.5h-6.5'/%3e %3cg transform='translate(0%2c143.5)'%3e %3cline class='cls-15' x1='20' y1='144.5' x2='14' y2='144.5'/%3e %3ctext class='cls-14' transform='translate(5.43848 147.70001)'%3e%3ctspan x='0' y='0'%3e0%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c127.5)'%3e %3cline class='cls-15' x1='20' y1='128.5' x2='14' y2='128.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 131.70001)'%3e%3ctspan x='0' y='0'%3e10%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c111.5)'%3e %3cline class='cls-15' x1='20' y1='112.5' x2='14' y2='112.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 115.70001)'%3e%3ctspan x='0' y='0'%3e20%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c95.5)'%3e %3cline class='cls-15' x1='20' y1='96.5' x2='14' y2='96.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 99.70001)'%3e%3ctspan x='0' y='0'%3e30%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c79.5)'%3e %3cline class='cls-15' x1='20' y1='80.5' x2='14' y2='80.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 83.70001)'%3e%3ctspan x='0' y='0'%3e40%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c64.5)'%3e %3cline class='cls-15' x1='20' y1='65.5' x2='14' y2='65.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 68.70001)'%3e%3ctspan x='0' y='0'%3e50%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c48.5)'%3e %3cline class='cls-15' x1='20' y1='49.5' x2='14' y2='49.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 52.70001)'%3e%3ctspan x='0' y='0'%3e60%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c32.5)'%3e %3cline class='cls-15' x1='20' y1='33.5' x2='14' y2='33.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 36.70001)'%3e%3ctspan x='0' y='0'%3e70%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c16.5)'%3e %3cline class='cls-15' x1='20' y1='17.5' x2='14' y2='17.5'/%3e %3ctext class='cls-14' transform='translate(-.12305 20.70001)'%3e%3ctspan x='0' y='0'%3e80%3c/tspan%3e%3c/text%3e %3c/g%3e %3cg transform='translate(0%2c0.5)'%3e %3cline class='cls-15' x1='20' y1='1.5' x2='14' y2='1.5'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3ccircle class='cls-4' cx='50.5' cy='112.5' r='16'/%3e %3crect class='cls-3' x='80.73422' y='46.56216' width='33.97457' height='33.97457' transform='translate(73.55821 -50.48633) rotate(45)'/%3e %3cpolygon class='cls-5' points='177.50362 104.72659 202.24373 86.75185 192.79385 57.66811 162.2134 57.66811 152.76351 86.75185 177.50362 104.72659'/%3e %3cpolygon class='cls-2' points='282.9192 52.32274 295.18872 69.08321 274.53897 66.83773 266.15873 85.84368 257.77849 66.83773 237.12874 69.08321 249.39826 52.32274 237.12874 35.56227 257.77849 37.80775 266.15873 18.8018 274.53897 37.80775 295.18872 35.56227 282.9192 52.32274'/%3e %3crect class='cls-12' x='22.5' y='1.5' width='16' height='16'/%3e %3crect class='cls-13' x='38.5' y='1.5' width='16' height='16'/%3e %3crect class='cls-11' x='54.5' y='1.5' width='16' height='16'/%3e %3crect class='cls-8' x='70.5' y='1.5' width='16' height='16'/%3e %3crect class='cls-10' x='86.5' y='1.5' width='16' height='16'/%3e %3crect class='cls-7' x='102.5' y='1.5' width='16' height='16'/%3e %3crect class='cls-6' x='118.5' y='1.5' width='16' height='16'/%3e %3crect class='cls-9' x='134.5' y='1.5' width='16' height='16'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg id='rawgraphs-icons' xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3e %3cdefs%3e %3cstyle%3e .cls-1 %7b fill: %2306c26c%3b %7d .cls-2 %7b fill: %2395e5c0%3b %7d %3c/style%3e %3c/defs%3e %3cg id='secundary'/%3e %3cg id='primary'%3e %3cpolygon class='cls-1' points='46.30469 46.80469 44.86523 46.80469 46.06122 48 8 48 8 9.93878 9.19531 11.13477 9.19531 9.69531 7.5 8 5.80469 9.69531 5.80469 11.13477 7 9.93878 7 49 46.06122 49 44.86523 50.19531 46.30469 50.19531 48 48.5 46.30469 46.80469'/%3e %3c/g%3e %3cpath class='cls-2' d='M24.51171%2c20.96213c.92544-.98469%2c2.19511-1.47703%2c3.81004-1.47703%2c1.49439%2c0%2c2.69052%2c.42084%2c3.58838%2c1.26354%2c.89888%2c.8427%2c1.34832%2c1.91932%2c1.34832%2c3.22985%2c0%2c.79469-.16343%2c1.43821-.48928%2c1.9326s-.99286%2c1.22064-2.00308%2c2.17979c-.73443%2c.69663-1.21145%2c1.28602-1.43311%2c1.76917s-.333%2c1.19715-.333%2c2.13995h-2.00001c0-1.07049%2c.12768-1.93362%2c.38203-2.5894%2c.25536-.65475%2c.82125-1.40553%2c1.69971-2.25231l.91727-.88765c.27477-.25434%2c.49847-.51992%2c.66905-.79776%2c.31154-.48621%2c.46681-.99184%2c.46681-1.51687%2c0-.73341-.2237-1.36978-.6711-1.9091s-1.18693-.80899-2.21963-.80899c-1.27682%2c0-2.16038%2c.46374-2.64966%2c1.39327-.27477%2c.51584-.43208%2c1.2615-.46987%2c2.23495h-2.00001c0-1.61799%2c.4617-2.91831%2c1.38714-3.90401Zm2.44333%2c12.90306h2.23597v2.3371h-2.23597v-2.3371Z'/%3e%3c/svg%3e";

var metadata = {
  name: 'Rectpacker',
  thumbnail: img$1,
  icon: img,
  id: 'customrawcharts.hello',
  categories: ['hack3r'],
  description: 'A rectangle packing algorithm that keeps the aspect ratio of the rectangles.',
  code: 'https://rawgraphs.io',
  tutorial: 'https://rawgraphs.io'
};

var dimensions = [{
  id: 'name',
  name: 'Name',
  validTypes: ['string'],
  required: true,
  operation: 'get'
}, {
  id: 'imagePath',
  name: 'Image Path',
  validTypes: ['string'],
  required: true,
  operation: 'get'
}, {
  id: 'aspectRatio',
  name: 'Aspect Ratio',
  validTypes: ['number'],
  required: true
}, {
  id: 'size',
  name: 'Size',
  validTypes: ['number'],
  required: true
}];

var mapData = {
  name: 'get',
  imagePath: 'get',
  aspectRatio: 'get',
  size: 'get'
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
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

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

d3.selection.prototype.styles = styles$1;
d3.transition.prototype.styles = styles$1; //other approach
// export const multiStyles = function (styles) {
//   return function (selection) {
//     for (const property in styles) {
//       selection.style(property, styles[property])
//     }
//   }
// }
//adapted from https://github.com/gka/d3-jetpack/blob/master/src/st.js

function styles$1(name, value) {
  if (_typeof(name) == 'object') {
    for (var key in name) {
      addStyle(this, key, name[key]);
    }

    return this;
  } else if (typeof name === 'function') {
    return this.each(styleFunction(name));
  } else {
    return arguments.length == 1 ? this.style(name) : addStyle(this, name, value);
  }

  function addStyle(sel, style, value) {
    style = style.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
    var pxStyles = 'top left bottom right padding-top padding-left padding-bottom padding-right border-top b-width border-left-width border-botto-width m border-right-width margin-top margin-left margin-bottom margin-right font-size width stroke-width line-height margin padding border border-radius max-width min-width max-height min-height';

    if (~pxStyles.indexOf(style)) {
      sel.style(style, typeof value == 'function' ? wrapPx(value) : addPx(value));
    } else {
      sel.style(style, value);
    }

    return sel;
  }

  function addPx(d) {
    return d.match ? d : d + 'px';
  }

  function wrapPx(fn) {
    return function () {
      var val = fn.apply(this, arguments);
      return addPx(val);
    };
  }

  function styleFunction(value) {
    return function () {
      var v = value.apply(this, arguments);

      for (var key in v) {
        addStyle(d3.select(this), key, v[key]);
      }
    };
  }
}

//The code in this file was written by Claudio Esperanca (cesperanca.org), my contribution is limited to adapting the existing code to my needs.
function _ge(a, y, c, l, h) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c !== undefined ? c(x, y) : x - y;

    if (p >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _gt(a, y, c, l, h) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c !== undefined ? c(x, y) : x - y;

    if (p > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _lt(a, y, c, l, h) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c !== undefined ? c(x, y) : x - y;

    if (p < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _le(a, y, c, l, h) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c !== undefined ? c(x, y) : x - y;

    if (p <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _eq(a, y, c, l, h) {
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c !== undefined ? c(x, y) : x - y;

    if (p === 0) {
      return m;
    }

    if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function norm(a, y, c, l, h, f) {
  if (typeof c === 'function') {
    return f(a, y, c, l === undefined ? 0 : l | 0, h === undefined ? a.length - 1 : h | 0);
  }

  return f(a, y, undefined, c === undefined ? 0 : c | 0, l === undefined ? a.length - 1 : l | 0);
}

var bounds = {
  ge: function ge(a, y, c, l, h) {
    return norm(a, y, c, l, h, _ge);
  },
  gt: function gt(a, y, c, l, h) {
    return norm(a, y, c, l, h, _gt);
  },
  lt: function lt(a, y, c, l, h) {
    return norm(a, y, c, l, h, _lt);
  },
  le: function le(a, y, c, l, h) {
    return norm(a, y, c, l, h, _le);
  },
  eq: function eq(a, y, c, l, h) {
    return norm(a, y, c, l, h, _eq);
  }
};
var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);

  if (idx < 0) {
    return NOT_FOUND;
  }

  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);

  if (this.left) {
    this.left.intervals(result);
  }

  if (this.right) {
    this.right.intervals(result);
  }

  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;

  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = bounds.ge(this.leftPoints, interval, compareBegin);
    var r = bounds.ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;

  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }

    var rw = this.right ? this.right.count : 0;

    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.left.remove(interval);

    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }

    var lw = this.left ? this.left.count : 0;

    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.right.remove(interval);

    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }

    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;

        while (n.right) {
          p = n;
          n = n.right;
        }

        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }

        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }

      return SUCCESS;
    }

    for (var l = bounds.ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }

      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);

        for (var r = bounds.ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }

    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];

  if (d) {
    return d;
  }

  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];

  if (d) {
    return d;
  }

  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }

  var pts = [];

  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }

  pts.sort(compareNumbers);
  var mid = pts[pts.length >> 1];
  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];

  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];

    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  } //Split center intervals


  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);
  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
} //User friendly wrapper that makes it possible to support empty trees


function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);

    if (r === EMPTY) {
      this.root = null;
    }

    return r !== NOT_FOUND;
  }

  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, "count", {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }

    return 0;
  }
});
Object.defineProperty(tproto, "intervals", {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }

    return [];
  }
});

function rectangle() {
  var minCorner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
  var sides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [10, 10];

  var _minCorner = _slicedToArray(minCorner, 2),
      x = _minCorner[0],
      y = _minCorner[1];

  var _sides = _slicedToArray(sides, 2),
      sidex = _sides[0],
      sidey = _sides[1];

  return new VList(new Vertex(+1, [x, y]), new Vertex(-1, [x + sidex, y]), new Vertex(-1, [x, y + sidey]), new Vertex(+1, [x + sidex, y + sidey]));
}

function topo(vlist, d) {
  if (d < 0) return erode(vlist, -d);else return dilate(vlist, d);
}

function union(a, b) {
  return a.add(b).transform(function (w) {
    return +(w > 0);
  });
}

function dilate(vlist, d) {
  var vtx = [];

  var _iterator = _createForOfIteratorHelper(vlist.rectangles()),
      _step;

  try {
    var _loop = function _loop() {
      var r = _step.value;
      [[-d, -d], [d, -d], [-d, d], [d, d]].forEach(function (_ref, i) {
        var _ref2 = _slicedToArray(_ref, 2),
            dx = _ref2[0],
            dy = _ref2[1];

        r[i].p[0] += dx;
        r[i].p[1] += dy;
        vtx.push(r[i]);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return normalizeVList(_construct(VList, vtx)).transform(function (w) {
    return +(w > 0);
  });
}

function normalizeVList(vlist) {
  if (vlist.length < 2) return vlist;
  var result = new VList();
  var prev = vlist[0];

  for (var i = 1; i < vlist.length; i++) {
    var next = vlist[i];

    if (prev.cmp(next) == 0) {
      prev.w += next.w;
    } else {
      if (prev.w != 0) result.push(prev);
      prev = next;
    }
  }

  if (prev.w != 0) result.push(prev);
  return result;
}

function erode(vlist, d) {
  if (vlist.length < 4) return new VList(); // Find bounding box

  var _boundingBox = boundingBox(vlist),
      min = _boundingBox.min,
      max = _boundingBox.max;

  var _iterator2 = _createForOfIteratorHelper(vlist),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var v = _step2.value;

      for (var _i = 0, _arr = [0, 1]; _i < _arr.length; _i++) {
        var i = _arr[_i];
        if (v.p[i] < min[i]) min[i] = v.p[i];
        if (v.p[i] > max[i]) max[i] = v.p[i];
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var m = 10; //margin

  var box = rectangle([min[0] - m, min[1] - m], [max[0] - min[0] + m + m, max[1] - min[1] + m + m]); // subtract 

  var boxMinus = new VList();
  boxMinus.push(box[0], box[1]);

  var _iterator3 = _createForOfIteratorHelper(vlist),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _v = _step3.value;
      boxMinus.push(_v.scale(-1));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  boxMinus.push(box[2], box[3]); // dilate the result

  var result = dilate(boxMinus, d); // Return -hole

  return result.slice(2, result.length - 2).map(function (v) {
    v.w = -v.w;
    return v;
  });
}

function boundingBox(vlist) {
  var min = [Number.MAX_VALUE, Number.MAX_VALUE],
      max = [Number.MIN_VALUE, Number.MIN_VALUE];

  var _iterator4 = _createForOfIteratorHelper(vlist),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var v = _step4.value;

      for (var _i2 = 0, _arr2 = [0, 1]; _i2 < _arr2.length; _i2++) {
        var i = _arr2[_i2];
        if (v.p[i] < min[i]) min[i] = v.p[i];
        if (v.p[i] > max[i]) max[i] = v.p[i];
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return {
    min: min,
    max: max
  };
}

function rectRectIntersect(a, b) {
  return Math.min(a[3].p[0], b[3].p[0]) > Math.max(a[0].p[0], b[0].p[0]) && Math.min(a[3].p[1], b[3].p[1]) > Math.max(a[0].p[1], b[0].p[1]);
}

var VList = /*#__PURE__*/function (_Array) {
  _inherits(VList, _Array);

  var _super = _createSuper(VList);

  // Constructor from an array of vertices
  function VList() {
    var _this;

    _classCallCheck(this, VList);

    for (var _len = arguments.length, l = new Array(_len), _key = 0; _key < _len; _key++) {
      l[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(l));

    _this.sort(function (a, b) {
      return a.cmp(b);
    });

    return _this;
  }

  _createClass(VList, [{
    key: "clone",
    value: function clone() {
      var clone = new VList();

      var _iterator5 = _createForOfIteratorHelper(this),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var v = _step5.value;
          clone.push(v.clone());
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return clone;
    } // Returns a new VList with clockwise rotated vertices

  }, {
    key: "rotAxesClock",
    value: function rotAxesClock() {
      var clone = [];

      var _iterator6 = _createForOfIteratorHelper(this),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var v = _step6.value;
          clone.push(v.clone().rotAxesClock());
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return _construct(VList, clone);
    } // Returns a new VList with counterclockwise rotated vertices

  }, {
    key: "rotAxesCounter",
    value: function rotAxesCounter() {
      var clone = [];

      var _iterator7 = _createForOfIteratorHelper(this),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var v = _step7.value;
          clone.push(v.clone().rotAxesCounter());
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return _construct(VList, clone);
    } // A string representation of a VList

  }, {
    key: "repr",
    value: function repr() {
      var s = "{";

      var _iterator8 = _createForOfIteratorHelper(this),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var x = _step8.value;
          s += x.repr();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return s + "}";
    } // Returns the length of the prefix"

  }, {
    key: "prefixLen",
    value: function prefixLen() {
      if (this.length == 0) return 0;
      var c = this[0].lastCoord;
      var n = 0;

      var _iterator9 = _createForOfIteratorHelper(this),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var v = _step9.value;
          if (v.lastCoord != c) return n;
          n++;
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return n;
    } // Returns a VList containing all vertices from the beginning of the list
    // with the same last coordinate

  }, {
    key: "prefix",
    value: function prefix() {
      var plen = this.prefixLen();
      return this.slice(0, plen);
    } // Returns this VList with its prefix removed

  }, {
    key: "remainder",
    value: function remainder() {
      var plen = this.prefixLen();
      return this.slice(plen);
    } // Combines prefix and remainder in a single operation

  }, {
    key: "split",
    value: function split() {
      var plen = this.prefixLen();
      return [this.slice(0, plen), this.slice(plen)];
    } // Returns this VList with one dimension less

  }, {
    key: "project",
    value: function project() {
      var r = new VList();

      var _iterator10 = _createForOfIteratorHelper(this),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var x = _step10.value;
          r.push(x.project());
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return r;
    } // Returns this VList with one extra dimension, having  h as the additional coordinate

  }, {
    key: "unproject",
    value: function unproject(h) {
      var r = new VList();

      var _iterator11 = _createForOfIteratorHelper(this),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var x = _step11.value;
          r.push(x.unproject(h));
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return r;
    } // Returns the sum of this and other

  }, {
    key: "add",
    value: function add(other) {
      console.assert(other instanceof VList);
      var r = new VList();
      var i = 0,
          j = 0;

      while (i < this.length && j < other.length) {
        var cmp = this[i].cmp(other[j]);
        if (cmp < 0) r.push(this[i++]);else if (cmp > 0) r.push(other[j++]);else {
          var v = new Vertex(this[i].w + other[j].w, this[i].p);
          if (v.w != 0) r.push(v);
          i++;
          j++;
        }
      }

      while (i < this.length) {
        r.push(this[i++]);
      }

      while (j < other.length) {
        r.push(other[j++]);
      }

      return r;
    } // Returns a VList where all vertices have their weights multiplied by scalar

  }, {
    key: "scale",
    value: function scale(scalar) {
      var r = new VList();

      var _iterator12 = _createForOfIteratorHelper(this),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var v = _step12.value;
          r.push(v.scale(scalar));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return r;
    } // Returns the value of the field at point q

  }, {
    key: "value",
    value: function value(q) {
      console.assert(this.length == 0 || this[0].dim == q.length);
      var wsum = 0;

      var _iterator13 = _createForOfIteratorHelper(this),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var v = _step13.value;
          if (v.dominates(q)) wsum += v.w;
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return wsum;
    } // Returns this field transformed by scalar function f

  }, {
    key: "transform",
    value: function transform(f) {
      if (this.length == 0) {
        return new VList();
      }

      if (this[0].dim == 0) {
        var w = f(this[0].w);

        var _r = w != 0 ? new VList(new Vertex(w, [])) : new VList();

        return _r;
      }

      var r = new VList();
      var o = new VList();
      var t = new VList();

      var rem = _construct(VList, _toConsumableArray(this));

      var pref;

      while (rem.length > 0) {
        var _rem$split = rem.split();

        var _rem$split2 = _slicedToArray(_rem$split, 2);

        pref = _rem$split2[0];
        rem = _rem$split2[1];
        var coord = pref[0].lastCoord;
        var proj = pref.project();
        o = o.add(proj);
        var transf = o.transform(f);
        var delta = transf.add(t.scale(-1));

        var _iterator14 = _createForOfIteratorHelper(delta.unproject(coord)),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var x = _step14.value;
            r.push(x);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        t = transf;
      }

      return r;
    } // Returns the decomposition of this list as a list of vlists, each one corresponding to
    // a single (hyper-)rectanble

  }, {
    key: "rectangles",
    value: function rectangles() {
      var r = [];
      if (this.length == 0) return r;
      console.assert(this[0].dim > 0);

      if (this[0].dim == 1) {
        var prevw = 0,
            prevx = Number.MINUS_INFINITY;

        var _iterator15 = _createForOfIteratorHelper(this),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var v = _step15.value;

            if (prevw != 0) {
              r.push(new VList(new Vertex(prevw, [prevx]), new Vertex(-prevw, [v.p[0]])));
            }

            prevw += v.w;
            prevx = v.p[0];
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      } else {
        var rem = _construct(VList, _toConsumableArray(this)),
            pref = new VList();

        var prevpref = new VList(),
            prevcoord;

        while (rem.length > 0) {
          var _rem$split3 = rem.split();

          var _rem$split4 = _slicedToArray(_rem$split3, 2);

          pref = _rem$split4[0];
          rem = _rem$split4[1];
          var coord = pref[0].lastCoord;
          var s = prevpref.project();

          var _iterator16 = _createForOfIteratorHelper(s.rectangles()),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var face = _step16.value;
              var rect = face.unproject(prevcoord);

              var _iterator17 = _createForOfIteratorHelper(face),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var _v2 = _step17.value;

                  var q = _v2.unproject(coord);

                  q.w = -q.w;
                  rect.push(q);
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }

              r.push(rect);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          prevcoord = coord;
          prevpref = s.unproject(coord).add(pref);
        }
      }

      return r;
    } // Returns the horizontal (scanline) faces of this field

  }, {
    key: "faces",
    value: function faces() {
      var r = [];
      if (this.length == 0) return r;
      console.assert(this[0].dim > 1);

      var rem = _construct(VList, _toConsumableArray(this)),
          pref = new VList();

      while (rem.length > 0) {
        var _rem$split5 = rem.split();

        var _rem$split6 = _slicedToArray(_rem$split5, 2);

        pref = _rem$split6[0];
        rem = _rem$split6[1];
        var coord = pref[0].lastCoord;

        var _iterator18 = _createForOfIteratorHelper(pref.project().rectangles()),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var rect = _step18.value;
            r.push(rect.unproject(coord));
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      }

      return r;
    } // Translates all vertices in list by vector u (in place)

  }, {
    key: "translate",
    value: function translate(u) {
      var _iterator19 = _createForOfIteratorHelper(this),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var v = _step19.value;
          v.translate(u);
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      return this;
    }
  }]);

  return VList;
}( /*#__PURE__*/_wrapNativeSuper(Array));

var Vertex = /*#__PURE__*/function () {
  // A vertex with weight w and coordinates p[0],p[1],etc
  function Vertex(w) {
    var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Vertex);

    this.w = w;
    this.p = p.slice();
  } // A deep copy of this Vertex


  _createClass(Vertex, [{
    key: "clone",
    value: function clone() {
      return new Vertex(this.w, this.p);
    } // The dimension of this vertex

  }, {
    key: "dim",
    get: function get() {
      return this.p.length;
    } // Rotates the axes for this vertex coordinates (in place).

  }, {
    key: "rotAxesClock",
    value: function rotAxesClock() {
      this.p.unshift(this.p.pop());
      return this;
    } // Undoes rotAxesClock

  }, {
    key: "rotAxesCounter",
    value: function rotAxesCounter() {
      this.p.push(this.p.shift());
      return this;
    } // The last coordinate of this vertex

  }, {
    key: "lastCoord",
    get: function get() {
      return this.p[this.p.length - 1];
    } // Comparison function for establishing ordering between vertices.
    // Returns -1,0 or 0 according to whether this vertex precedes, is equal, or
    // follows vertex other in scanline order.

  }, {
    key: "cmp",
    value: function cmp(other) {
      if (!(this.dim == other.dim)) {
        console.assert(this.dim == other.dim);
      }

      for (var i = this.p.length - 1; i >= 0; i--) {
        if (this.p[i] < other.p[i]) return -1;
        if (this.p[i] > other.p[i]) return +1;
      }

      return 0;
    } // Returns a new vertex with weight equal to w*scalar

  }, {
    key: "scale",
    value: function scale(scalar) {
      console.assert(scalar != 0);
      return new Vertex(this.w * scalar, this.p);
    } // Returns a new vertex with one dimension less

  }, {
    key: "project",
    value: function project() {
      return new Vertex(this.w, this.p.slice(0, this.p.length - 1));
    } // Returns a new vertex with one extra dimension, having h as the additional coordinate

  }, {
    key: "unproject",
    value: function unproject(h) {
      return new Vertex(this.w, this.p.concat([h]));
    } // Returns true if point q is in the cone of this vertex

  }, {
    key: "dominates",
    value: function dominates(q) {
      for (var i = 0; i < this.p.length; i++) {
        if (q[i] < this.p[i]) return false;
      }

      return true;
    } // Translates this vertex (in place) by vector u

  }, {
    key: "translate",
    value: function translate(u) {
      for (var i = 0; i < this.p.length; i++) {
        this.p[i] += u[i];
      }

      return this;
    }
  }, {
    key: "repr",
    value: function repr() {
      return "(" + this.w + ",[" + this.p + "])";
    }
  }]);

  return Vertex;
}();

var RectList = /*#__PURE__*/function () {
  // Constructor from a vertex list
  function RectList(vlist) {
    _classCallCheck(this, RectList);

    this.rects = vlist.rectangles();
    this.it = createIntervalTree(this.rects.map(function (r) {
      var interval = [r[0].p[1], r[3].p[1]];
      interval.rect = r;
      return interval;
    }));
  }

  _createClass(RectList, [{
    key: "rangeSearch",
    value: function rangeSearch(ymin, ymax) {
      var all = [];
      this.it.queryInterval(ymin, ymax, function (interval) {
        all.push(interval);
      });
      return all;
    } // Returns true if polygon intersects point p

  }, {
    key: "pointIntersection",
    value: function pointIntersection(p) {
      var _iterator20 = _createForOfIteratorHelper(this.rangeSearch(p[1], p[1] + 1)),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var interval = _step20.value;
          var r = interval.rect;
          if (r[3].p[1] > p[1] && r[3].p[0] > p[0] && r[0].p[0] <= p[0]) return true;
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }

      return false;
    } // Returns true if polygon intersects rectangle R

  }, {
    key: "rectIntersection",
    value: function rectIntersection(R) {
      var ymin = R[0].p[1];
      var ymax = R[3].p[1];

      var _iterator21 = _createForOfIteratorHelper(this.rangeSearch(ymin, ymax)),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var interval = _step21.value;
          var r = interval.rect;
          if (rectRectIntersect(r, R)) return true;
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      return false;
    }
  }]);

  return RectList;
}();

var RectArrangement = /*#__PURE__*/function () {
  function RectArrangement() {
    var center = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      metric: "euclidean",
      heuristic: "best",
      closeFactor: 0.1,
      closeFreq: 1
    };

    _classCallCheck(this, RectArrangement);

    this.center = center;
    this.rects = [];
    this.polygon = new VList();
    Object.assign(this, options);
    this.distance = this.metric == "chessboard" ? function (p, q) {
      return Math.max(Math.abs(p[0] - q[0]), Math.abs(p[1] - q[1]));
    } : this.metric == "euclidean" ? function (p, q) {
      return Math.sqrt(Math.pow(p[0] - q[0], 2) + Math.pow(p[1] - q[1], 2));
    } : function (p, q) {
      return Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]);
    };
  }

  _createClass(RectArrangement, [{
    key: "closePolygon",
    value: function closePolygon(amount) {
      this.polygon = topo(topo(this.polygon, amount), -amount);
    }
  }, {
    key: "addRect",
    value: function addRect(area, aspect, src) {
      var _this2 = this;

      var _this$center = _slicedToArray(this.center, 2),
          cx = _this$center[0],
          cy = _this$center[1];

      var sidex = Math.sqrt(area * aspect);
      var sidey = area / sidex;
      var dx = sidex / 2,
          dy = sidey / 2;
      var d = Math.sqrt(dx * dx + dy * dy);
      var s = undefined;

      if (this.rects.length == 0) {
        s = rectangle([cx - dx, cy - dy], [sidex, sidey]);
      } else {
        var distToCenter = Number.MAX_VALUE;

        var vtx = _toConsumableArray(this.polygon).map(function (v) {
          v.dist = _this2.distance(v.p, _this2.center);
          return v;
        });

        vtx.sort(function (a, b) {
          return a.dist - b.dist;
        });
        var rlist = new RectList(this.polygon);

        var _iterator22 = _createForOfIteratorHelper(vtx),
            _step22;

        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var v = _step22.value;

            var _v$p = _slicedToArray(v.p, 2),
                x = _v$p[0],
                y = _v$p[1];

            if (v.dist > distToCenter + d) continue; // Worse than the best so far

            for (var _i3 = 0, _arr3 = [[x, y, -1], [x - sidex, y, +1], [x, y - sidey, +1], [x - sidex, y - sidey, -1]]; _i3 < _arr3.length; _i3++) {
              var _arr3$_i = _slicedToArray(_arr3[_i3], 3),
                  sx = _arr3$_i[0],
                  sy = _arr3$_i[1],
                  sign = _arr3$_i[2];

              if (Math.sign(v.w) != sign) continue; // Wrong sign

              var candidate = rectangle([sx, sy], [sidex, sidey]);
              var scx = sx + dx,
                  scy = sy + dy; // Center of rectangle

              if (rlist.pointIntersection([scx, scy])) continue; // Center inside polygon

              if (rlist.rectIntersection(candidate)) continue; // Polygon intersects rectangl

              var dist = this.distance([scx, scy], [cx, cy]);

              if (!s || dist < distToCenter) {
                s = candidate;
                distToCenter = dist;
              }
            }

            if (this.heuristic == "first" && s) break;
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
      }

      if (s == undefined) throw "Something went wrong : could not find a place for rect";
      this.rects.push([s, src]);
      this.polygon = union(this.polygon, s);
      var factor = d * this.closeFactor;
      if (this.rects.length % 1 == 0) this.closePolygon(factor);
    }
  }]);

  return RectArrangement;
}();

function map2range(value, min, max, newMin, newMax) {
  return (value - min) / (max - min) * (newMax - newMin) + newMin;
}

var arrange = function arrange(rectangles, width, height, config) {
  var sa = new RectArrangement([width / 2, height / 2], config);
  var i = 0;

  var _iterator = _createForOfIteratorHelper(rectangles),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rect = _step.value;
      sa.addRect(rect[0], rect[1], rect[2]);
      i++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return sa;
};

function render(svgNode, data, visualOptions, mapping, originalData, styles) {
  var width = visualOptions.width,
      height = visualOptions.height,
      heuristic = visualOptions.heuristic,
      metric = visualOptions.metric,
      closeFactor = visualOptions.closeFactor,
      minSize = visualOptions.minSize,
      maxSize = visualOptions.maxSize;
  var config = {
    heuristic: heuristic,
    metric: metric,
    closeFactor: closeFactor,
    renderFreq: 10,
    closeFreq: 1
  };
  var min_value = d3__namespace.min(data, function (d) {
    return +d.size;
  });
  var max_value = d3__namespace.max(data, function (d) {
    return +d.size;
  });
  var rectangles = data.map(function (d) {
    return [map2range(+d.size, min_value, max_value, minSize, maxSize), d.aspectRatio, d.imagePath];
  }).sort(function (a, b) {
    return b[0] - a[0];
  }).slice(0, 100);
  var arrangement = arrange(rectangles, width, height, config);
  d3__namespace.select(svgNode).selectAll('image').data(arrangement.rects).enter().append('image').attr('x', function (d) {
    return d[0][0].p[0];
  }).attr('y', function (d) {
    return d[0][0].p[1];
  }).attr('width', function (d) {
    return d[0][1].p[0] - d[0][0].p[0];
  }).attr('height', function (d) {
    return d[0][3].p[1] - d[0][0].p[1];
  }).attr("xlink:href", function (d) {
    return d[1];
  });
}

var visualOptions = {
  heuristic: {
    type: 'text',
    label: 'Heuristic',
    group: 'chart',
    options: ['first', 'best'],
    "default": 'first'
  },
  metric: {
    type: 'text',
    label: 'Metric',
    group: 'chart',
    options: ['euclidean', 'chessboard', 'manhattan'],
    "default": 'euclidean'
  },
  closeFactor: {
    type: 'number',
    label: 'Close Factor',
    group: 'chart',
    "default": 0.3,
    step: 0.1,
    min: 0,
    max: 1
  },
  minSize: {
    type: 'number',
    label: 'Minimum Size',
    group: 'chart',
    "default": 100,
    step: 1,
    min: 0,
    max: 10000
  },
  maxSize: {
    type: 'number',
    label: 'Maximum Size',
    group: 'chart',
    "default": 10000,
    step: 1,
    min: 0,
    max: 10000
  }
};

var styles = {"coolText":{"fontFamily":"Arial, sans-serif","fontSize":"25px","fontWeight":"bold"}};

var rectpacker = {
  metadata: metadata,
  dimensions: dimensions,
  mapData: mapData,
  render: render,
  visualOptions: visualOptions,
  styles: styles
};

exports.rectpacker = rectpacker;
