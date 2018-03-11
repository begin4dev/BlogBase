import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.scss';

ReactDOM.render(<Root />,
  document.getElementById('react-root'),
);
registerServiceWorker();
