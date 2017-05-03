import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line
import CurrencyFormat from './index';

storiesOf('CurrencyFormat', module)
    .add('default', () => (
        <CurrencyFormat value="1000" />
    ))
    .add('USD format', () => (
        <CurrencyFormat value="1000" currency="$" />
    ));
