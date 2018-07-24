import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './Components/List';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
