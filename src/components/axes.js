import React from 'react';

export default class Axes extends React.Component {
  prepareCords() {
    return {
      horizontal: {
        x1: this.props.x,
        x2: "100%",
        y1: this.props.y,
        y2: this.props.y      
      },
      vertical: {
        x1: this.props.x,
        x2: this.props.x,
        y1: 0,
        y2: "100%"  
      }
    }
  }

  render() {
    let coords = this.prepareCords();
    
    return (      
      <g>
        <line {...coords.horizontal} stroke="black" strokeWidth="2" />
        <line {...coords.vertical}   stroke="black" strokeWidth="2" />
      </g>
    )
  }
}