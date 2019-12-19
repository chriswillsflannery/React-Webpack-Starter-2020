import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import * as serviceWorker from './serviceWorker';
import styles from './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

//enable service worker for offline-first by changing to 
//serviceWorker.register();
serviceWorker.unregister();