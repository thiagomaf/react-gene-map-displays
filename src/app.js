import React from "react";
import Level0 from "./components/level0";
import Level1 from "./components/level1";
import Level2 from "./components/level2";
import "./style.css";

export default class App extends React.Component {
  state = { dataSetIndex: 0 };

  selectDataset(event) {
    this.setState({ dataSetIndex: event.target.value });
  }

  render() {
    return (
      <div id="main">
        <div id="Level0">
          <Level0 L0={this.props.L0} width={"100%"} height={600} />
        </div>
        <div id="Level1">
          <Level1
            L0={this.props.L0}
            L1={this.props.L1}
            width={"100%"}
            height={600}
          />
        </div>
        <div id="Level2">
          <Level2
            L0={this.props.L0}
            L1={this.props.L1}
            L2={this.props.L2}
            width={"100%"}
            height={600}
          />
        </div>
      </div>
    );
  }
}

//<Graph data={this.props.datasets[this.state.dataSetIndex]} />
