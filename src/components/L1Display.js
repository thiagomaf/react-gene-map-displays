import React from "react";
import L1Construct from "./L1Construct.js";

export default class L1Display extends React.Component {
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
