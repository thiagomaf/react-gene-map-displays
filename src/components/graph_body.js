/*import React from 'react';

export default class GraphBody extends React.Component {
  static defaultProps = { multiplier: 20 };

  prepareData(data) {
    
    let d = [`M ${this.props.x} ${this.props.y}`];
    
    let collector = data.map(chunk => {
      let xNext = this.props.x + chunk[0] * this.props.multiplier;
      let yNext = this.props.y - chunk[1] * this.props.multiplier;
      return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
  };
  
  render() {
    return(  
      this.props.data.map((element, index) => {
        let dd = this.prepareData(element.points)

        return(
            <path d={dd}
              stroke      = {element.color}
              strokeWidth = {1}
              fill        = "none"
            />
        )
      })
    )
  }
}*/