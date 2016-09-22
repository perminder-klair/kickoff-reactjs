import React from 'react';
import ReactDOM from 'react-dom';

import App from '../containers/App';

it('renders without crashing', () => {
    //expect(3).toEqual(3);
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
