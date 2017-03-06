import React, {PropTypes} from 'react';
import styled from 'styled-components';


const Window = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: auto;
  overflow-y: scroll;
  background: magenta;
`;

const Body = styled.div`
  background: green;
`;

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let elements = [];

    for(let i = 0; i < 100; i += 1) {
      elements.push(
        <h1>Element {i}</h1>
      );
    }


    return (
      <Window>
        <Body>
          {elements}
        </Body>
      </Window>
    );
  }
}
Main.propTypes = {
  speed: PropTypes.number.isRequired,
};

export default Main;
