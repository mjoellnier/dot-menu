import React, { Component } from "react";

export default class DummyComponent extends Component {
  createPages = () => {
    let backgroundColor;
    let pages = this.props.children.map(content => {
      console.log(content);
      if (content.props.backgroundColor) {
        backgroundColor = content.props.backgroundColor;
      } else {
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

  createDots = () => {};

  render() {
    return <div>{this.createPages()}</div>;
  }
}
