import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {muiTheme} from 'storybook-addon-material-ui';
import StoryRouter from 'storybook-router';
import './index.css';
import './foundation-flex.css';
import {teal50, teal200, teal400, teal900} from 'material-ui/styles/colors';

import { Button, Welcome } from '@storybook/react/demo';
import Tag from '../components/Tags/Tag';
import Tags from '../components/Tags/Tags';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const TAG_PLACEHOLDER = 'New York Times';
storiesOf('Tabulae Use of Tag', module)
  .addDecorator(muiTheme())
  .addDecorator(StoryRouter())
  .add('Plain with text', () => <Tag text={TAG_PLACEHOLDER} />)
  .add('Contact Tag', () =>
    <Tag
    hideDelete
    whiteLabel
    text={TAG_PLACEHOLDER}
    color={teal400}
    borderColor={teal900}
    link={`/contacts?tag=${TAG_PLACEHOLDER}`}
    />
  )
  .add('ListItem Public Tag', () =>
    <Tag
    hideDelete
    text='Public'
    color={teal50}
    borderColor={teal200}
    />
  )
  .add('Tags', () => 
    <Tags
    whiteLabel
    color={teal400}
    borderColor={teal900}
    onDeleteTag={action('clicked')}
    tags={['NYPost', 'NYTimes']}
    createLink={name => `/contacts?tag=${name}`}
    textStyle={{fontSize: '1em'}}
    />
    );

