import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// I've just set up test since they're not required in the task
test ('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})