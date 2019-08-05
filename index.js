"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactScrollPercentage = require("react-scroll-percentage");

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

var pages;

var DummyComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DummyComponent, _Component);

  function DummyComponent(props) {
    var _this;

    _classCallCheck(this, DummyComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DummyComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "createPages", function () {
      pages = _this.props.children.map(function (content) {
        var backgroundColor = "";

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
      }); // return pages;
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

      for (var i = 0; i < _this.props.children.length; i++) {
        y = y + 50;
        refs[i] = _react["default"].createRef(); // if (i != 0) {
        //   navDots.push(
        //     <line
        //       x1="50"
        //       y1={y - 43}
        //       x2="50"
        //       y2={y}
        //       stroke="darkgray"
        //       strokeWidth="2"
        //     />
        //   );
        // }

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

      var pathVariable = "M 50,50  v" + (_this.state.percentage - _this.state.delta) / (1 - _this.state.delta) * y; // let pathVariable = "M 50,50  v" + this.state.percentage * y;

      return _react["default"].createElement("svg", {
        height: y + 25
      }, navDots, _react["default"].createElement("path", {
        id: "menu-path",
        fill: "none",
        stroke: "black",
        "stroke-width": "2",
        d: pathVariable,
        pathLength: "15"
      })); // let dots = this.props.children.map(content => {
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

    _this.state = {
      percentage: 0,
      delta: 1 / (_this.props.children.length + 1)
    };

    _this.createPages();

    return _this;
  }

  _createClass(DummyComponent, [{
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
        style: {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }
      }, this.createDots()), pages);
    }
  }]);

  return DummyComponent;
}(_react.Component);

exports["default"] = DummyComponent;
// class DynamicBezierCurve extends React.Component {
//   constructor(props) {
//     super(props);
//     // As the user scrolls through our scrollable area,
//     // the scrollRatio represents the amount completed,
//     // from 0 (way at the bottom) to 1 (at the top).
//     this.state = {
//       scrollRatio: 0
//     };
//     // This live-editing environment doesn't support
//     // property-initializer syntax, so I'm doing my
//     // binds in the constructor. 🤷
//     this.handleScroll = this.handleScroll.bind(this);
//   }
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }
//   handleScroll(ev) {
//     const windowHeight = window.innerHeight;
//     const svgBB = this.node.getBoundingClientRect();
//     const pixelsScrolled = windowHeight - svgBB.top;
//     let scrollRatio = pixelsScrolled / windowHeight;
//     // We don't care about the negative values when it's
//     // below the viewport, or the greater-than-1 values when
//     // it's above the viewport.
//     scrollRatio = clamp(scrollRatio, 0, 1);
//     // Small optimization, avoid re-rendering when the
//     // SVG isn't in the viewport.
//     if (this.state.scrollRatio !== scrollRatio) {
//       this.setState({ scrollRatio });
//     }
//   }
//   render() {
//     const { scrollRatio } = this.state;
//     // Use our `getInterpolatedValue` function from the
//     // previous code snippet to figure out the values for
//     // the start point and the control points.
//     const startPoint = getInterpolatedValue(
//       300, // curvy value
//       0, // flat value
//       scrollRatio
//     );
//     const firstControlPoint = getInterpolatedValue(
//       -100, // curvy value
//       0, // flat value
//       scrollRatio
//     );
//     const secondControlPoint = getInterpolatedValue(
//       450, // curvy value
//       0, // flat value
//       scrollRatio
//     );
//     // Unlike the other 3 points, the `endPoint` is
//     // constant, and doesn't need interpolation.
//     const endPoint = 0;
//     // Create the SVG path instructions, using our
//     // interpolated values.
//     // Unlike previous examples, we want to fill this one
//     // in, not just make a stroked line. So we need to add
//     // a couple other lines after the curve, to make sure
//     // the box fills in correctly.
//     const instructions = `
//         M 0,${startPoint}
//         C 100,${firstControlPoint}
//           200,${secondControlPoint}
//           300,${endPoint}
//         L 300,300
//         L 0,300
//       `;
//     // NOTE: the instructions created assume a 300x300
//     // viewBox. To make this component more flexible, you
//     // could set `viewBoxWidth` and `viewBoxHeight`
//     // variables as props.
//     return (
//       <svg ref={node => (this.node = node)} viewBox="0 0 300 300">
//         <path d={instructions} fill="hotpink" />
//       </svg>
//     );
//   }
// }
// // Utility function that clamps a given value to a
// // specific range (inclusive, between min and max).
// const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
// export class DotMenuPage extends Component {
//   render() {
//     return <DynamicBezierCurve headerHeight={55} />;
//   }
// }
"use strict";
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
