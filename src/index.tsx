import React from './lib/teact/teact';
import TeactDOM from './lib/teact/teact-dom';

import { DEBUG } from './config';
import { getActions, getGlobal } from './global';

import App from './components/App';

import './styles/index.scss';

import './global/actions';
import './global/init';
import './util/handleError';

if (DEBUG) {
  // eslint-disable-next-line no-console
  console.log('>>> INIT');
}

getActions().init();
getActions().initApi();

if (DEBUG) {
  // eslint-disable-next-line no-console
  console.log('>>> START INITIAL RENDER');
}

TeactDOM.render(
  <App />,
  document.getElementById('root')!,
);

if (DEBUG) {
  // eslint-disable-next-line no-console
  console.log('>>> FINISH INITIAL RENDER');
}

document.addEventListener('dblclick', () => {
  // eslint-disable-next-line no-console
  console.warn('GLOBAL STATE', getGlobal());
});
