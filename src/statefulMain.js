import React from 'react';
import {Map, List} from 'immutable';
import Main from './components/main';

class StatefulMain extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: new Map({
        problems: new List(),
        current: '',
      }),
    };
    this.onCurrentUpdate = this.onCurrentUpdate.bind(this);
    this.onCurrentSubmit = this.onCurrentSubmit.bind(this);
  }
  onCurrentUpdate(value) {
    this.setState(({data}) => ({data: data.set('current', value)}));
  }
  onCurrentSubmit() {
    this.setState(({data}) => {
      const current = data.get('current');
      if (current === '') {
        return {};
      }
      return {
        data: (
          data.update('problems', (problems) => problems.push(current))
          .set('current', '')
        ),
      };
    });
  }
  render() {
    const {data} = this.state;
    return <Main
      data={data}
      onCurrentSubmit={this.onCurrentSubmit}
      onCurrentUpdate={this.onCurrentUpdate}
    />;
  }
}


export default StatefulMain;
