import React from "react";
import range from "./range.js";

export default class L2Construct extends React.Component {
  constructor(props) {
    super(props);
    this.DisplayAreaPerc = 80;
    this.L2BlockMargin = 5;
  }

  get length() {
    return this.props.L2.construct.length;
  }

  /*get BlockWidthPerc() {
    return (this.DisplayAreaPerc - this.L2BlockMargin) / this.props.ncol;
  }*/

  BlockPositionPerc(index) {
    return (
      this.MarginPerc +
      index * ((this.DisplayAreaPerc + this.L2BlockMargin) / this.props.ncol)
    );
  }

  get Labels() {
    return this.props.L2.construct.map((el) => {
      return el.id_ENSA;
    });
  }

  get Ids() {
    return this.props.L2.construct.map((el) => {
      return el.id_ENSA;
    });
  }

  get MarginPerc() {
    return (100 - this.DisplayAreaPerc) / 2;
  }

  DrawL0(index, y) {
    let PosX = this.BlockPositionPerc(index);

    return this.props.L2.construct[index].construct.map((el) => {
      return (
        <rect
          key={el.L1_position} // L0 modules
          x={`${PosX}%`}
          y={y}
          fill={el.color}
          className={`L0 module ${el.L1_position}`}
        />
      );
    });
  }

  DrawRect(index) {
    //let PosX = this.BlockPositionPerc(index);

    return (
      <g>
        {this.DrawL0(index, this.props.y)}
        <rect // L2 main body
          //x={`${PosX}%`}
          x={index}
          y={this.props.y}
          fill="transparent"
          className="L1 module border"
        />
      </g>
    );
  }

  DrawText(index) {
    let PosX = this.BlockPositionPerc(index);

    return (
      <text
        x={`${PosX}%`}
        //x={index}
        y={this.props.y}
        className="L1 module"
      >
        {this.Labels[index]}
      </text>
    );
  }

  render() {
    return range(0, this.length - 1).map((index) => {
      return (
        <g
          key={this.Ids[index]}
          className="L1"
          style={{ "--index": `${index}` }}
        >
          {this.DrawRect(index)}
          {this.DrawText(index)}
        </g>
      );
    });
  }
}
