import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable-next-line */
injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    background: #1FF0DA;
    color: #007367;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
registerServiceWorker();
