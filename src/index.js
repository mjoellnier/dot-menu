import React, { Component } from "react";
import { Tooltip } from "react-svg-tooltip";
import "./src/index.css";

export default class DummyComponent extends Component {
  createPages = () => {
    let pages = this.props.children.map(content => {
      let backgroundColor = "";
      console.log(content);
      if (content.props.backgroundColor) {
        backgroundColor = content.props.backgroundColor;
      }
      if (content.props.backgroundColor === "RANDOM") {
        backgroundColor = this.getRandomColor();
      }
      return (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: backgroundColor
          }}
        >
          {content}
        </div>
      );
    });
    return pages;
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
    // Get a reference to the <path>
    // var path = document.querySelector("#star-path");

    // Get length of path... ~577px in this demo
    // var pathLength = path.getTotalLength();

    let navDots = [];
    let y = 0;
    let refs = [];
    console.log("Children: ", this.props.children);
    for (let i = 0; i < this.props.children.length; i++) {
      y = y + 50;
      refs[i] = React.createRef();
      if (i != 0) {
        navDots.push(
          <line
            x1="50"
            y1={y - 43}
            x2="50"
            y2={y}
            stroke="darkgray"
            strokeWidth="2"
          />
        );
      }
      navDots.push(
        <>
          <circle
            cx="50"
            cy={y}
            r="7"
            stroke="gray"
            stroke-width="2"
            fill="darkgray"
            className="navDotCircle"
            ref={refs[i]}
          />
          <Tooltip triggerRef={refs[i]}>
            <rect
              x={2}
              y={2}
              // width={10}
              // height={5}
              rx={0.5}
              ry={0.5}
              fill="black"
            />
            <text x={5} y={5} fill="white">
              {this.props.children[i].props.title}
            </text>
          </Tooltip>
        </>
      );
    }

    return (
      <svg height={y + 25}>
        {navDots}
        {/* <path
          id="menu-path"
          fill="none"
          stroke="black"
          stroke-width="2"
          d=" ... "
        /> */}
      </svg>
    );

    // let dots = this.props.children.map(content => {
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
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          {this.createDots()}
        </div>
        {this.createPages()}
      </div>
    );
  }
}
