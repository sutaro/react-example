import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './components/styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
