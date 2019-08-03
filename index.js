"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSvgTooltip = require("react-svg-tooltip");

require("./src/index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DummyComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DummyComponent, _Component);

  function DummyComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DummyComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DummyComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createPages", function () {
      var pages = _this.props.children.map(function (content) {
        var backgroundColor = "";
        console.log(content);

        if (content.props.backgroundColor) {
          backgroundColor = content.props.backgroundColor;
        }

        if (content.props.backgroundColor === "RANDOM") {
          backgroundColor = _this.getRandomColor();
        }

        return _react["default"].createElement("div", {
          style: {
            width: "100vw",
            height: "100vh",
            backgroundColor: backgroundColor
          }
        }, content);
      });

      return pages;
    });

    _defineProperty(_assertThisInitialized(_this), "getRandomColor", function () {
      var letters = "0123456789ABCDEF";
      var color = "#";

      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    });

    _defineProperty(_assertThisInitialized(_this), "createDots", function () {
      // Get a reference to the <path>
      // var path = document.querySelector("#star-path");
      // Get length of path... ~577px in this demo
      // var pathLength = path.getTotalLength();
      var navDots = [];
      var y = 0;
      var refs = [];
      console.log("Children: ", _this.props.children);

      for (var i = 0; i < _this.props.children.length; i++) {
        y = y + 50;
        refs[i] = _react["default"].createRef();

        if (i != 0) {
          navDots.push(_react["default"].createElement("line", {
            x1: "50",
            y1: y - 43,
            x2: "50",
            y2: y,
            stroke: "darkgray",
            strokeWidth: "2"
          }));
        }

        navDots.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("circle", {
          cx: "50",
          cy: y,
          r: "7",
          stroke: "gray",
          "stroke-width": "2",
          fill: "darkgray",
          className: "navDotCircle",
          ref: refs[i]
        }), _react["default"].createElement(_reactSvgTooltip.Tooltip, {
          triggerRef: refs[i]
        }, _react["default"].createElement("rect", {
          x: 2,
          y: 2 // width={10}
          // height={5}
          ,
          rx: 0.5,
          ry: 0.5,
          fill: "black"
        }), _react["default"].createElement("text", {
          x: 5,
          y: 5,
          fill: "white"
        }, _this.props.children[i].props.title))));
      }

      return _react["default"].createElement("svg", {
        height: y + 25
      }, navDots); // let dots = this.props.children.map(content => {
      //   return (
      //     <svg width="100" height="200">
      //       <circle
      //         cx="50"
      //         cy="50"
      //         r="40"
      //         stroke="green"
      //         stroke-width="4"
      //         fill="yellow"
      //       />
      //       <line
      //         x1="50"
      //         y1="100"
      //         x2="50"
      //         y2="200"
      //         stroke="rgb(255,0,0)"
      //         strokeWidth="2"
      //       />
      //     </svg>
      //   );
      // });
      // return dots;
    });

    return _this;
  }

  _createClass(DummyComponent, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }
      }, this.createDots()), this.createPages());
    }
  }]);

  return DummyComponent;
}(_react.Component);

exports["default"] = DummyComponent;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DotMenuPage = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DotMenuPage =
/*#__PURE__*/
function (_Component) {
  _inherits(DotMenuPage, _Component);

  function DotMenuPage() {
    _classCallCheck(this, DotMenuPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(DotMenuPage).apply(this, arguments));
  }

  _createClass(DotMenuPage, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, this.props.children);
    }
  }]);

  return DotMenuPage;
}(_react.Component);

exports.DotMenuPage = DotMenuPage;
