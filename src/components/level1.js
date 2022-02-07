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

    let L1_L0Ids = this.props.L1.map((el) => {
      return el.construct.id_ENSA;
    }); //array

    let L1_L0Positions = L1_L0Ids.map((el) => {
      return el.map((subel) => {
        let index = L0Ids.indexOf(subel);
        return this.props.L0.at(index).L1_position;
      });
    });
    //console.log(L1_L0Positions);

    let L1_L0Labels = L1_L0Ids.map((el) => {
      return el.map((subel) => {
        let index = L0Ids.indexOf(subel);
        return this.props.L0.at(index).label;
      });
    });
    //console.log(L1_L0Labels)

    let updatedL1 = this.props.L1.map((el, index) => {
      return {
        index: el.index,
        id_ENSA: el.id_ENSA,
        label: el.label,
        construct: {
          id_ENSA: el.construct.id_ENSA,
          label: L1_L0Labels[index],
          L1_position: L1_L0Positions[index]
        }
      };
    });
    //console.log(updatedL1);

    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axes x={0} y="100%" />
        <Display L1={updatedL1} height={this.props.height} />
      </svg>
    );
  }
}
//<Display L1={this.props.L1} height={this.props.height} />
