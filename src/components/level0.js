import React from "react";
import Axes from "./Axes";
import Display from "./L0Display";

export default class Level0 extends React.Component {
  //static defaultProps = { width: 800, height: 600 };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axes x={0} y="100%" />
        <Display L0={this.props.L0} height={this.props.height} />
      </svg>
    );
  }
}
