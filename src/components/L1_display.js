import React from "react";

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

class L1Construct extends React.Component {
  //static defaultProps = { DisplayAreaPerc: 80 };

  constructor(props) {
    super(props);
    this.DisplayAreaPerc = 80;
  }

  getProperty(index) {}

  get length() {
    return this.props.L1.construct.length;
  }

  get BlockWidthPerc() {
    return this.DisplayAreaPerc / this.length;
  }

  get MarginPerc() {
    return (100 - this.DisplayAreaPerc) / 2;
  }

  get Labels() {
    return this.props.L1.construct.map((el) => {
      return el.label;
    });
  }

  get Positions() {
    return this.props.L1.construct.map((el) => {
      return el.L1_position;
    });
  }

  get Colors() {
    return this.props.L1.construct.map((el) => {
      return el.color;
    });
  }

  get PositionsMap() {
    return {
      P: { x: 0, width: 14 },
      PU: { x: 0, width: 28 },
      U: { x: 14, width: 14 },
      S: { x: 28, width: 14 },
      C: { x: 42, width: 28 },
      T: { x: 70, width: 10 },
      SC: { x: 28, width: 42 },
      SC1: { x: 28, width: 28 },
      C1: { x: 42, width: 14 },
      C2: { x: 56, width: 14 }
    };
  }

  DrawRect(index) {
    let PosX = this.PositionsMap[this.Positions[index]].x + this.MarginPerc;
    let Width = this.PositionsMap[this.Positions[index]].width;

    return (
      <rect // L0 main body
        x={`${PosX}%`}
        y={this.props.y}
        width={`${Width}%`}
        fill={this.Colors[index]}
        className="module"
      />
    );
  }

  DrawText(index) {
    let PosX = null;
    PosX = this.PositionsMap[this.Positions[index]].x + this.MarginPerc;
    PosX = PosX + this.PositionsMap[this.Positions[index]].width / 2;

    return (
      <text x={`${PosX}%`} y={this.props.y} width={`${this.BlockWidthPerc}%`}>
        {this.Positions[index]}
      </text>
    );
  }

  render() {
    return range(0, this.length - 1).map((index) => {
      return (
        <g key={this.Positions[index]}>
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
    pos = this.props.height / (this.props.L1.length + 1);
    pos = pos * (eachGene.index + 1);

    return pos;
  }

  render() {
    return this.props.L1.map((element) => {
      let each_Ypos = this.getYpos(element);

      return (
        <g key={element.id_ENSA}>
          <rect // track behind
            x="0%"
            y={each_Ypos}
            className="track"
          />

          <L1Construct L1={element} y={each_Ypos} />
        </g>
      );
    });
  }
}
