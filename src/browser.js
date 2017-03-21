import React from 'react';
import ReactDOM from 'react-dom';
import StatefulMain from './statefulMain';

Error.stackTraceLimit = 1000;

export function main(window, targetElement) {
  ReactDOM.render(
    <StatefulMain />, targetElement
  );
}
