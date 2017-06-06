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
    require('../src/elements/Loading/Loading.story'); // eslint-disable-line
    require('../src/elements/Breadcrumb/Breadcrumb.story'); // eslint-disable-line
    require('../src/elements/Header/Header.story'); // eslint-disable-line
    require('../src/elements/SubHeader/SubHeader.story'); // eslint-disable-line
    require('../src/elements/DateField/DateField.story'); // eslint-disable-line
    require('../src/elements/FileInputField/FileInputField.story'); // eslint-disable-line
}

configure(loadStories, module);