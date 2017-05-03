import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook'; // eslint-disable-line
import Button from './index';

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    ))
    .add('disabled', () => (
        <Button onClick={action('clicked')} disabled>Disabled button</Button>
    ));
