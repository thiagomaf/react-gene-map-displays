import React from "react";
import Axes from "./axes";
import Display from "./L1_display";

export default class Level1 extends React.Component {
  //static defaultProps = { width: 800, height: 600 };

  render() {
    let L0Ids = this.props.L0.map((el) => {
      return el.id_ENSA;
    }); //array
    //console.log(L0Ids)
    let L0Positions = this.props.L0.map((el) => {
      return el.L1_position;
    }); //array
    console.log(L0Positions);

    let L1_L0Ids = this.props.L1.map((el) => {
      return el.construct.id_ENSA;
    }); //array
    //console.log(L1_L0Ids);

    let L1_L0Indexes = L1_L0Ids.map((el) => {
      return el.map((subel) => {
        let index = L0Ids.indexOf(subel);

        return this.props.L0.at(index);
      });
    });
    console.log(L1_L0Indexes);

    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axes x={0} y="100%" />
        <Display L1={this.props.L1} height={this.props.height} />
      </svg>
    );
  }
}
