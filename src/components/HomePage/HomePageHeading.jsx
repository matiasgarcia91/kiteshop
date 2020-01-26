/* eslint-disable object-curly-newline */
import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import { Button, Container, Header, Icon } from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Kite web shop"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="Compare and buy kites easily"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size="huge" style={{ marginTop: '1em' }}>
      Go to shop
      <Icon name="right arrow" />
    </Button>
  </Container>
);

export default HomepageHeading;
