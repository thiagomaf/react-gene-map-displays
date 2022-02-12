import React from "react";
import Axes from "./Axes";
import Display from "./L2Display";

export default class Level2 extends React.Component {
  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axes x={0} y="100%" />
        <Display L2={this.props.L2} height={this.props.height} />
      </svg>
    );
  }
}
