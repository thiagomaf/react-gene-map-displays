import React from "react";

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

export default class Display extends React.Component {
  getYpos(eachGene) {
    let pos = null;
    pos = this.props.height / (this.props.L2.length + 1);
    pos = pos * (eachGene.index + 1);

    return pos;
  }

  get NumberL2Cols() {
    return Math.max(
      ...this.props.L2.map((el) => {
        return el.construct.id_ENSA.length;
      })
    );
  }

  render() {
    return this.props.L2.map((element) => {
      let each_Ypos = this.getYpos(element);

      return (
        <g key={element.id_ENSA}>
          <rect // track behind
            x="0%"
            y={each_Ypos}
            className="track"
          />

          <L2Construct L2={element} y={each_Ypos} ncol={this.NumberL2Cols} />
        </g>
      );
    });
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
class L2Construct extends React.Component {
  constructor(props) {
    super(props);
    this.DisplayAreaPerc = 80;
    this.L2BlockMargin = 2;
  }

  get length() {
    return this.props.L2.construct.id_ENSA.length;
  }

  get BlockWidthPerc() {
    //return this.DisplayAreaPerc / this.props.L2.construct.id_ENSA.length;
    return (this.DisplayAreaPerc - this.L2BlockMargin) / this.props.ncol;
    //return (this.DisplayAreaPerc - this.L2BlockMargin*(this.props.ncol-1)) / this.props.ncol
  }

  BlockPositionPerc(index) {
    //return index * this.BlockWidthPerc;
    //return index*(this.DisplayAreaPerc+this.L2BlockMargin)/this.props.ncol;
    return (
      this.MarginPerc +
      index * ((this.DisplayAreaPerc + this.L2BlockMargin) / this.props.ncol)
    );
  }

  get Labels() {
    return this.props.L2.construct.id_ENSA;
  }

  get MarginPerc() {
    return (100 - this.DisplayAreaPerc) / 2;
  }

  DrawRect(index) {
    let PosX = this.BlockPositionPerc(index);
    //console.log(this.BlockWidthPerc);

    return (
      <rect // L2 main body
        x={`${PosX}%`}
        y={this.props.y}
        width={`${this.BlockWidthPerc}%`}
        fill="white"
        className="module"
      />
    );
  }

  DrawText(index) {
    let PosX = this.BlockPositionPerc(index) + this.BlockWidthPerc / 2;

    return (
      <text x={`${PosX}%`} y={this.props.y} width={`${this.BlockWidthPerc}%`}>
        {this.Labels[index]}
      </text>
    );
  }

  render() {
    return range(0, this.length - 1).map((index) => {
      return (
        <g key={this.Labels[index]}>
          {this.DrawRect(index)}
          {this.DrawText(index)}
        </g>
      );
    });
  }
}
