import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { MyAwesomeDataTest } from '../providers/My-Awesome-Data-Provider.provider'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )); 

storiesOf('NewComponent', module)
  .add('Halleiuja', () => (
    <MyAwesomeDataTest></MyAwesomeDataTest>
  ))

  