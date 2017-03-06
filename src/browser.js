import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

export function main(window, targetElement) {
  ReactDOM.render(
    <Main speed={0.1} />, targetElement
  );
}
