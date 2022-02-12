import React from "react";

export default class L0Display extends React.Component {
  static defaultProps = {
    multiplier: 50
  };

  getYpos(eachGene) {
    let pos = null;
    pos = this.props.height / (this.props.L0.length + 1);
    pos = pos * (eachGene.index + 1);

    return pos;
  }

  getL0Xpos(eachGene) {
    let pos = null;
    pos = this.props.x + 0.1 * this.props.width;

    return pos;
  }

  render() {
    return this.props.L0.map((element, index) => {
      let each_Ypos = this.getYpos(element);

      return (
        <g key={element.id_ENSA}>
          <rect // track behind
            x="0%"
            y={each_Ypos}
            className="track"
          />

          <rect // L0 main body
            x="10%"
            y={each_Ypos}
            fill={element.color}
            className="module border"
          />

          <text x="50%" y={each_Ypos}>
            {element.label}
          </text>
        </g>
      );
    });
  }
}
