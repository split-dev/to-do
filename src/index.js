import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import * as serviceWorker from './serviceWorker';

import './styles/app.scss';

// Get Taks from memory
const memory = localStorage.getItem('toDos');

// Load if saved || load clear app
ReactDOM.render(
    memory
        ? <App value={JSON.parse(memory)} />
        : <App value={[]} />
    ,
    document.getElementById('root')
);

serviceWorker.register();