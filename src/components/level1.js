import React from "react";
import Axes from "./axes";
import Display from "./L1_display";

export default class Level1 extends React.Component {
  //static defaultProps = { width: 800, height: 600 };

  render() {
    let updatedL1 = this.props.L1.map((eachL1) => {
      let construct = eachL1.construct.id_ENSA.map((eachL0inL1) => {
        return this.props.L0.find((el) => el.id_ENSA === eachL0inL1);
      });

      eachL1["construct"] = construct;

      return eachL1;
    });
    //console.log(updatedL1);
    //console.log(this.props.L1);

    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axes x={0} y="100%" />
        <Display L1={updatedL1} height={this.props.height} />
      </svg>
    );
  }
}
