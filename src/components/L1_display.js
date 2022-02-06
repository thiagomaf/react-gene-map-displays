import React from 'react';

class L1_blocks extends React.Component {
  render() {
    console.log(this.props.construct)
    return(
      this.props.construct.label.map((element) => {
        return(
          <g>
            <rect // L0 main body
              x     = "10%"
              y     = {this.props.y}
              width = "5%"
              //fill  = {element.color}
              fill = "white"
              class = "module"
            />

            <text x="50%" y={this.props.y}>
              {element}
            </text>

            <rect // L0 main body
              x     = "30%"
              y     = {this.props.y}
              width = "5%"
              //fill  = {element.color}
              fill = "white"
              class = "module"
            />
          </g>
        )
      })
    )
  }
}

export default class L1_display extends React.Component {
  getYpos(eachGene) {
    let pos = null
    pos = this.props.height / (this.props.genes.length + 1)
    pos = pos * (eachGene.index + 1)

    return pos
  };

  render() {
    return(
      this.props.genes.map((element) => {
        let each_Ypos = this.getYpos(element)
        
        return(
          <g class="L1_module">       
            <rect // track behind
              x      = "0%"
              y      = {each_Ypos}
              class  = "track"
            />

        <L1_blocks
          construct = {element.construct}
          y         = {each_Ypos}
        />
          </g>
        )
      })
    )
  }
}