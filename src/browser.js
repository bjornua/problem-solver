import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState(({counter}) => ({
      counter: counter + 1,
    }));
  }
  componentDidMount() {
    this.props.window.setInterval(this.tick, 1000);
  }
  render() {
    const {counter} = this.state;
    return <div>Counter: {counter}</div>;
  }
}
TestComponent.propTypes = {
  window: PropTypes.object.isRequired,
};


export function main(window, targetElement) {
  ReactDOM.render(<TestComponent window={window} />, targetElement);
}
