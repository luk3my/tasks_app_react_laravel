import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EditTask from './EditTask';

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
} else if (document.getElementById('edit')) {
    ReactDOM.render(<EditTask />, document.getElementById('edit'));
}
