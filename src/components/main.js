import React from 'react';
import styled from 'styled-components';
import {setInterval} from '../std';


const Wrapper = styled.div`
  margin: 4em auto;
  font-family: sans;
  font-size: 20pt;
  max-width:20em;
  padding: 1em;
  background-color: hsl(0, 30%, 80%);
  text-align: center;
`;

class Main extends React.PureComponent {
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
    setInterval(this.tick, 10);
  }
  render() {
    const {counter} = this.state;
    return <Wrapper>
      sin({(counter*0.01).toFixed(2)}) = {Math.sin(counter*0.01).toFixed(1)}
    </Wrapper>;
  }
}

export default Main;
