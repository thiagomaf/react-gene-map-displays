import React from "react";
import Level0 from "./components/level0";
import Level1 from "./components/level1";
import Level2 from "./components/level2";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.L0 = this.props.L0;
    this.L1 = this.props.L1;
    this.L2 = this.props.L2;
  }
  /*L0() {
    return this.props.L0;
  }*/

  UpdatedL1() {
    return this.L1.map((eachL1) => {
      eachL1["construct"] = eachL1.construct.id_ENSA.map((eachL0inL1) => {
        return this.L0.find((el) => el.id_ENSA === eachL0inL1);
      });

      return eachL1;
    });
  }

  UpdatedL2() {
    return this.L2.map((eachL2) => {
      eachL2["construct"] = eachL2.construct.id_ENSA.map((eachL1inL2) => {
        return this.L1.find((el) => el.id_ENSA === eachL1inL2);
      });

      return eachL2;
    });
  }

  render() {
    return (
      <div id="main">
        <div id="Level0">
          <Level0 L0={this.L0} width={"100%"} height={600} />
        </div>
        <div id="Level1">
          <Level1 L1={this.UpdatedL1()} width={"100%"} height={600} />
        </div>
        <div id="Level2">
          <Level2 L2={this.UpdatedL2()} width={"100%"} height={600} />
        </div>
      </div>
    );
  }
}
