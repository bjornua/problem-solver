import React, {PropTypes} from 'react';
import Question from './question';

class Main extends React.PureComponent {
  render() {
    const {data, onCurrentSubmit, onCurrentUpdate} = this.props;
    return <Question
      problems={data.get('problems')}
      value={data.get('current')}
      onCurrentSubmit={onCurrentSubmit}
      onCurrentUpdate={onCurrentUpdate}
    />;
  }
}
Main.propTypes = {
  data: PropTypes.any,
  onCurrentSubmit: PropTypes.any,
  onCurrentUpdate: PropTypes.any,
};


export default Main;
