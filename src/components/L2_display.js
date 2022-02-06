import React from "react";

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

class L2Construct extends React.Component {
  constructor(props) {
    super(props);
    this.DisplayAreaPerc = 80;
  }

  get length() {
    return this.props.L2.construct.id_ENSA.length;
  }

  get BlockWidthPerc() {
    return this.DisplayAreaPerc / this.props.L2.construct.id_ENSA.length;
  }

  get Labels() {
    return this.props.L2.construct.id_ENSA;
  }

  get MarginPerc() {
    return (100 - this.DisplayAreaPerc) / 2;
  }

  DrawRect(index) {
    let PosX = this.MarginPerc + index * this.BlockWidthPerc;
    console.log(this.BlockWidthPerc);

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
    let PosX =
      this.MarginPerc + index * this.BlockWidthPerc + this.BlockWidthPerc / 2;

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

export default class Display extends React.Component {
  getYpos(eachGene) {
    let pos = null;
    pos = this.props.height / (this.props.L2.length + 1);
    pos = pos * (eachGene.index + 1);

    return pos;
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

          <L2Construct L2={element} y={each_Ypos} />
        </g>
      );
    });
  }
}
