import React from 'react';
import { configure, addDecorator } from '@kadira/storybook'; // eslint-disable-line

import StorybookTheme from './StorybookTheme';

addDecorator(story => (
    <StorybookTheme>
        {story()}
    </StorybookTheme>
));

function loadStories() {
    require('../src/elements/Button/Button.story'); // eslint-disable-line
    require('../src/elements/Field/Field.story'); // eslint-disable-line
    require('../src/elements/TextField/TextField.story'); // eslint-disable-line
    require('../src/elements/LocationInput/LocationInput.story'); // eslint-disable-line
    require('../src/elements/CurrencyFormat/CurrencyFormat.story'); // eslint-disable-line
    require('../src/elements/DateFormat/DateFormat.story'); // eslint-disable-line
}

configure(loadStories, module);
