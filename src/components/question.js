import React, {PropTypes} from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 20pt;
  line-height: 150%;
  font-family: sans;
  width: 20em;
  margin: 4em auto;
  border: 1px solid #000;
  padding: 4em;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-size: inherit;
  line-height: 150%;
`;

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onCurrentSubmit();
  }
  onChange(e) {
    this.props.onCurrentUpdate(e.target.value);
  }
  render() {
    const {value} = this.props;

    return (
      <Wrapper>
        <div>It is a problem that:</div>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            value={value}
            onChange={this.onChange}
          />
        </form>
      </Wrapper>
    );
  }
}
Question.propTypes = {
  problems: PropTypes.any.isRequired,
  value: PropTypes.string.isRequired,
  onCurrentSubmit: PropTypes.func.isRequired,
  onCurrentUpdate: PropTypes.func.isRequired,
};

export default Question;
