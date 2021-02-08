import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App' 

ReactDOM.render(
    localStorage.getItem('toDos')
        ? <App value={JSON.parse(localStorage.getItem('toDos'))} />
        : <App value={[]} />
    ,
    document.getElementById('root')
);