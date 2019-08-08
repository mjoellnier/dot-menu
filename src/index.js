import React, { Component } from "react";
import { ScrollPercentage } from "react-scroll-percentage";
import ReactTooltip from "react-tooltip";
import "./src/index.css";

let pages;

export default class DummyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      delta: 1 / (this.props.children.length + 1)
    };
    this.createPages();
  }

  createPages = () => {
    pages = this.props.children.map((content, index) => {
      let backgroundColor = "";
      if (content.props.backgroundColor) {
        backgroundColor = content.props.backgroundColor;
      }
      if (content.props.backgroundColor === "RANDOM") {
        backgroundColor = this.getRandomColor();
      }
      return (
        <div
          id={index}
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
          <circle
            data-tip={this.props.children[i].props.title}
            data-for="helloWorldTest"
            cx="50"
            cy={y}
            r="7"
            stroke="gray"
            stroke-width="2"
            fill="darkgray"
            className="navDotCircle"
            ref={refs[i]}
          />
        </>
      );
    }
    let pathVariable =
      "M 50,50  v" +
      ((this.state.percentage - this.state.delta) / (1 - this.state.delta)) * y;
    // let pathVariable = "M 50,50  v" + this.state.percentage * y;
    return (
      <svg height={y + 25}>
        <path
          id="menu-path"
          fill="none"
          stroke="black"
          stroke-width="2"
          d={pathVariable}
          pathLength="15"
        />
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
        {pages}
        <ReactTooltip
          id="helloWorldTest"
          place="right"
          type="dark"
          effect="solid"
        />
      </ScrollPercentage>
    );
  }
}
