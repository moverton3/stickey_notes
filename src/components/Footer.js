import React from 'react';
import FilterLink from './FilterLink';
import { Button, Segment, Form, Header, Container, Icon } from 'semantic-ui-react'

const square = { width: 175, height: 175 }

const Footer = () => (
<Segment inverted color ='yellow'>
  <div>
    {/* <Button.Group> */}
    <Button inverted color = 'standard'>
      <FilterLink>All</FilterLink>
      {' '}</Button>
    <Button inverted color = 'standard'>
      <FilterLink>Completed</FilterLink>
      {' '}</Button>
    <Button inverted color = 'standard'>
      <FilterLink>Active</FilterLink>
      </Button>
    {/* </Button.Group> */}
    <Segment floated='right' inverted color ='teal'>
      <Header floated='right' as='h2' icon>
    <Icon name='tasks' />
        Sticky Notes
        <Header.Subheader>
          For all of your To-Do needs!
        </Header.Subheader>
      </Header>
    </Segment>
    <br />

  </div>
</Segment>
)

export default Footer;
