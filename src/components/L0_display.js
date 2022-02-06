import React from 'react';

export default class Display extends React.Component {
  static defaultProps = {
    multiplier: 50
  };

  getYpos(eachGene) {
    let pos = null
    pos = this.props.height / (this.props.genes.length + 1)
    pos = pos * (eachGene.index + 1)

    return pos
  };

  getL0Xpos(eachGene) {
    let pos = null
    pos = this.props.x + 0.1*this.props.width

    return pos
  }

  render() {
    return(
      this.props.genes.map((element) => {
        let each_Ypos = this.getYpos(element)

        return(
          <g class="L0_module">       
            <rect // track behind
              x      = "0%"
              y      = {each_Ypos}
              class  = "track"
            />

            <rect // L0 main body
              x     = "10%"
              y     = {each_Ypos}
              fill  = {element.color}
              class = "module"
            />
            
            <text x="50%" y={each_Ypos}>
              {element.label}
            </text>
          </g>
        )
      })
    )
  }
}
