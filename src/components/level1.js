import React   from 'react';
import Axes    from './axes';
import Display from './L1_display';

export default class Level1 extends React.Component {
  //static defaultProps = { width: 800, height: 600 };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axes x={0} y="100%" />

        <Display
          genes  = {this.props.genes}
          height = {this.props.height}
        />
      </svg>
    )
  }
}