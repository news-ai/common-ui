import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {muiTheme} from 'storybook-addon-material-ui';

import { Button, Welcome } from '@storybook/react/demo';
import Tag from '../components/Tags/Tag';
import './index.css';
import './foundation-flex.css';
import {teal400, teal900} from 'material-ui/styles/colors';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const TAG_PLACEHOLDER = 'New York Times';
storiesOf('Tag', module)
  .addDecorator(muiTheme())
  .add('Plain with text', () => <Tag text={TAG_PLACEHOLDER} />)
  .add('Contact Profile Tag', () => (
    <Tag
    hideDelete
    whiteLabel
    text={TAG_PLACEHOLDER}
    color={teal400}
    borderColor={teal900}
    />)
  );
