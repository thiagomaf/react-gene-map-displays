import React    from "react";
import ReactDOM from "react-dom";
import App      from "./app";
import L0_data  from './Level0.json';
import L1_data  from './Level1.json';

ReactDOM.render(
  <App
    L0={L0_data}
    L1={L1_data}
  />,
  document.getElementById("root")
);