import React, { Component } from "react";
import { Element, Link, scroller } from "react-scroll";
import { ScrollPercentage } from "react-scroll-percentage";
import ReactTooltip from "react-tooltip";
import "./src/index.css";

let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
let pages;
let index = 0;
let maxIndex = -1;

class DotMenu extends Component {
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
        if (content.props.backgroundColor === "RANDOM") {
          backgroundColor = getRandomColor();
        } else {
          backgroundColor = content.props.backgroundColor;
        }
      }
      let backgroundImage;
      if (content.props.backgroundImage) {
        if (content.props.backgroundImage === "RANDOM") {
          backgroundImage = "https://source.unsplash.com/random/1280x800";
        } else {
          backgroundImage = content.props.backgroundImage;
        }
      }
      let customStyle = {
        width: "100vw",
        height: "100vh",
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };
      if (content.props.style) {
        customStyle = { ...customStyle, ...content.props.style };
      }
      return (
        <Element name={"section_" + index} key={"element_" + index}>
          <div
            id={"section_" + index}
            style={customStyle}
            onScroll={event => console.log("event: ", event)}
          >
            {content}
          </div>
        </Element>
      );
    });
  };

  createDots = () => {
    if (!this.props.hideDots) {
      let navDots = [];
      let y = 0;
      let refs = [];
      for (let i = 0; i < this.props.children.length; i++) {
        y = y + 50;
        refs[i] = React.createRef();
        navDots.push(
          <Link smooth to={"section_" + i} onClick={() => (index = i)} key={i}>
            <circle
              data-tip={this.props.children[i].props.title}
              data-for="toolTipRemoteId"
              key={"circle_" + i}
              cx="50"
              cy={y}
              r="7"
              stroke={this.state.dotBorder}
              strokeWidth="2"
              fill={this.state.dotFilling}
              className="navDotCircle"
              ref={refs[i]}
            />
          </Link>
        );
      }
      let pathVariable =
        "M 50,50  v" +
        ((this.state.percentage - this.state.delta) / (1 - this.state.delta)) *
          y;
      return (
        <svg
          key="svgBox"
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
              strokeWidth={this.state.pathWidth}
              d={pathVariable}
              pathLength="15"
              key="svgPath"
            />
          )}
          {navDots}
        </svg>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <ScrollPercentage
        as="div"
        threshold="0"
        key="scrollPercentage"
        onChange={(percentage, entry) => {
          this.setState({ percentage: percentage });
        }}
      >
        <div
          className="svgWrapper"
          key="svgWrapperDiv"
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

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const preventDefault = e => {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
};

const preventDefaultForScrollKeys = e => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

const scrollFunction = event => {
  window.removeEventListener("wheel", scrollFunction, { passive: true });
  if (event.deltaY < 0 && index > 0) {
    index--;
    scroller.scrollTo("section_" + index, {
      duration: 1500,
      delay: 0,
      smooth: true,
      isDynamic: false,
      ignoreCancelEvents: true,
      spy: true,
      hashSpy: true
    });
  } else if (event.deltaY > 0 && index < maxIndex) {
    index++;
    scroller.scrollTo("section_" + index, {
      duration: 1500,
      delay: 0,
      smooth: true,
      isDynamic: false,
      ignoreCancelEvents: true,
      spy: true,
      hashSpy: true
    });
  }
  setTimeout(() => {
    window.addEventListener("wheel", scrollFunction);
  }, 1500);
};

const disableScroll = () => {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
};

export default DotMenu;
