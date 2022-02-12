import React from "react";
import L2Construct from "./L2Construct.js";

export default class L2Display extends React.Component {
  constructor(props) {
    super(props);
    document.documentElement.style.setProperty(
      "--max-L2-number",
      this.NumberL2Cols
    );
  }

  getYpos(eachGene) {
    let pos = null;
    pos = this.props.height / (this.props.L2.length + 1);
    pos = pos * (eachGene.index + 1);

    return pos;
  }

  get NumberL2Cols() {
    return Math.max(
      ...this.props.L2.map((el) => {
        //return el.construct.id_ENSA.length;
        return el.construct.length;
      })
    );
  }

  render() {
    return this.props.L2.map((element) => {
      let each_Ypos = this.getYpos(element);

      return (
        <g className="L2" key={element.id_ENSA}>
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
