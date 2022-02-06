import React from "react";
import Level0 from './components/level0';
import Level1 from './components/level1';
import "./style.css";

export default class App extends React.Component {
  state = { dataSetIndex: 0 }

  selectDataset(event) {
    this.setState({dataSetIndex: event.target.value});
  }

  render() {
    return (
      <div id="main">
        <div id="Level0">
          <Level0
            genes  = {this.props.L0}
            width  = {"100%"}
            height = {600}
          />
        </div>
        <div id="Level1">
          <Level1
            genes  = {this.props.L1}
            width  = {"100%"}
            height = {600}
          />
        </div>
      </div>
    )
  }
}

//<Graph data={this.props.datasets[this.state.dataSetIndex]} />