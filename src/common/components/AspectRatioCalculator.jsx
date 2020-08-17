import React from 'react';
import ratioStyles from './AspectRatioCalculator.module.css';
import classNames from 'classnames';

export default class AspectRatioCalculator extends React.Component {

  constructor(props) {
    super(props);
    this.recalculate = this.recalculate.bind(this);
    this.state = {
      width: 1920,
      height: 1080,
      ratioWidth: 16,
      ratioHeight: 9,
    };
  }

  recalculate(event) {
    this.setState({ [`${event.target.name}`]: event.target.value });
    const ratio = this.state.ratioWidth / this.state.ratioHeight;
    if (event.target.name === 'width') {
      this.setState({ height: event.target.value / ratio });
    }
    if (event.target.name === 'height') {
      this.setState({ width: event.target.value * ratio });
    }
    if (event.target.name === 'ratioWidth') {
      this.setState({ width: this.state.height * (event.target.value / this.state.ratioHeight) });
    }
    if (event.target.name === 'ratioHeight') {
      this.setState({ height: this.state.width / (this.state.ratioWidth / event.target.value) });
    }
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Aspect Ratio</th>
              <td>
                <input
                  className={classNames(ratioStyles.field)}
                  type="text"
                  name="ratioWidth"
                  value={this.state.ratioWidth}
                  onChange={this.recalculate}
                /> :
                <input
                  className={classNames(ratioStyles.field)}
                  type="text"
                  name="ratioHeight"
                  value={this.state.ratioHeight}
                  onChange={this.recalculate}
                />
              </td>
            </tr>
            <tr>
              <th>Resolution</th>
              <td>
                <input
                  className={classNames(ratioStyles.field)}
                  type="text"
                  name="width"
                  value={this.state.width}
                  onChange={this.recalculate}
                />
                x
                <input
                  className={classNames(ratioStyles.field)}
                  type="text"
                  name="height"
                  value={this.state.height}
                  onChange={this.recalculate}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
