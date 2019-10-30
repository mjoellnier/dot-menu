import React, { Component } from "react";
import { ScrollPercentage } from "react-scroll-percentage";
import ReactTooltip from "react-tooltip";
import "./src/index.css";
import { Link, scroller, Element } from "react-scroll";

let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
let pages;
let index = 0;
let maxIndex = -1;

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function scrollFunction(event) {
  window.removeEventListener("wheel", scrollFunction, { passive: true });
  if (event.deltaY < 0 && index > 0) {
    index--;
    scroller.scrollTo("section_" + index, {
      duration: 1500,
      delay: 0,
      smooth: true,
      isDynamic: true
    });
  } else if (event.deltaY > 0 && index < maxIndex) {
    index++;
    scroller.scrollTo("section_" + index, {
      duration: 1500,
      delay: 0,
      smooth: true,
      isDynamic: true
    });
  }
  setTimeout(() => {
    window.addEventListener("wheel", scrollFunction);
  }, 1500);
}

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

export default class DotMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      delta: 1 / (this.props.children.length + 1),
      ready: false,
      dotBorder: this.props.dotBorder ? this.props.dotBorder : "gray",
      dotFilling: this.props.dotFilling ? this.props.dotFilling : "darkgray",
      pathColor: this.props.pathColor ? this.props.pathColor : "black",
      pathWidth: this.props.pathWidth ? this.props.pathWidth : "2"
    };
    this.createPages();
  }

  componentDidMount() {
    if (this.props.windowScrolling) {
      disableScroll();
      window.addEventListener("wheel", scrollFunction);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", scrollFunction);
  }

  createPages = () => {
    pages = this.props.children.map((content, index) => {
      maxIndex++;
      let backgroundColor = "";
      if (content.props.backgroundColor) {
        backgroundColor = content.props.backgroundColor;
      }
      if (content.props.backgroundColor === "RANDOM") {
        backgroundColor = this.getRandomColor();
      }
      return (
        <Element name={"section_" + index}>
          <div
            id={"section_" + index}
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: backgroundColor
            }}
            onScroll={event => console.log("event: ", event)}
          >
            {content}
          </div>
        </Element>
      );
    });
  };

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  createDots = () => {
    let navDots = [];
    let y = 0;
    let refs = [];
    for (let i = 0; i < this.props.children.length; i++) {
      y = y + 50;
      refs[i] = React.createRef();
      navDots.push(
        <>
          <Link to={"section_" + i} onClick={() => (index = i)}>
            <circle
              data-tip={this.props.children[i].props.title}
              data-for="toolTipRemoteId"
              cx="50"
              cy={y}
              r="7"
              stroke={this.state.dotBorder}
              stroke-width="2"
              fill={this.state.dotFilling}
              className="navDotCircle"
              ref={refs[i]}
            />
          </Link>
        </>
      );
    }
    let pathVariable =
      "M 50,50  v" +
      ((this.state.percentage - this.state.delta) / (1 - this.state.delta)) * y;
    return (
      <svg
        height={y + 25}
        className={
          "svgElements " + (this.state.percentage > 0 ? "fadeIn" : "fadeOut")
        }
      >
        {this.props.hidePath ? null : (
          <path
            id="menu-path"
            fill="none"
            stroke={this.state.pathColor}
            stroke-width={this.state.pathWidth}
            d={pathVariable}
            pathLength="15"
          />
        )}
        {navDots}
      </svg>
    );
  };

  render() {
    return (
      <ScrollPercentage
        as="div"
        threshold="0"
        onChange={(percentage, entry) => {
          this.setState({ percentage: percentage });
        }}
      >
        <div
          className="svgWrapper"
          style={
            this.props.right
              ? { alignItems: "flex-end" }
              : { alignItems: "flex-start" }
          }
        >
          {this.createDots()}
        </div>
        {pages}
        <ReactTooltip
          id="toolTipRemoteId"
          place="right"
          type="dark"
          effect="solid"
        />
      </ScrollPercentage>
    );
  }
}
