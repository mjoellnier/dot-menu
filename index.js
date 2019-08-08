"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactScrollPercentage = require("react-scroll-percentage");

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

require("./src/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var pages;

var DotMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DotMenu, _Component);

  function DotMenu(props) {
    var _this;

    _classCallCheck(this, DotMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DotMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "createPages", function () {
      pages = _this.props.children.map(function (content, index) {
        var backgroundColor = "";

        if (content.props.backgroundColor) {
          backgroundColor = content.props.backgroundColor;
        }

        if (content.props.backgroundColor === "RANDOM") {
          backgroundColor = _this.getRandomColor();
        }

        return _react["default"].createElement("div", {
          id: index,
          style: {
            width: "100vw",
            height: "100vh",
            backgroundColor: backgroundColor
          }
        }, content);
      });
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
      var navDots = [];
      var y = 0;
      var refs = [];

      for (var i = 0; i < _this.props.children.length; i++) {
        y = y + 50;
        refs[i] = _react["default"].createRef();
        navDots.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("circle", {
          "data-tip": _this.props.children[i].props.title,
          "data-for": "toolTipRemoteId",
          cx: "50",
          cy: y,
          r: "7",
          stroke: "gray",
          "stroke-width": "2",
          fill: "darkgray",
          className: "navDotCircle",
          ref: refs[i]
        })));
      }

      var pathVariable = "M 50,50  v" + (_this.state.percentage - _this.state.delta) / (1 - _this.state.delta) * y;
      var pathColor = _this.props.pathColor ? _this.props.pathColor : "black";
      return _react["default"].createElement("svg", {
        height: y + 25,
        className: "svgElements " + (_this.state.percentage > 0 ? "fadeIn" : "fadeOut")
      }, _react["default"].createElement("path", {
        id: "menu-path",
        fill: "none",
        stroke: pathColor,
        "stroke-width": "2",
        d: pathVariable,
        pathLength: "15"
      }), navDots);
    });

    _this.state = {
      percentage: 0,
      delta: 1 / (_this.props.children.length + 1),
      ready: false
    };

    _this.createPages();

    return _this;
  }

  _createClass(DotMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_reactScrollPercentage.ScrollPercentage, {
        as: "div",
        threshold: "0",
        onChange: function onChange(percentage, entry) {
          _this2.setState({
            percentage: percentage
          });
        }
      }, _react["default"].createElement("div", {
        className: "svgWrapper",
        style: this.props.right ? {
          alignItems: "flex-end"
        } : {
          alignItems: "flex-start"
        }
      }, this.createDots()), pages, _react["default"].createElement(_reactTooltip["default"], {
        id: "toolTipRemoteId",
        place: "right",
        type: "dark",
        effect: "solid"
      }));
    }
  }]);

  return DotMenu;
}(_react.Component);

exports["default"] = DotMenu;
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
