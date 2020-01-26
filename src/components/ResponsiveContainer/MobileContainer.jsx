import React, { useState } from 'react';

import 'semantic-ui-css/semantic.min.css';

import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

import MobileMenu from '../NavBar/MobileMenu';

const MobileContainer = ({ children, PageHeading, routerInfo }) => {
  const [sidebarOpened, setSidebar] = useState(false);

  const handlePusherClick = () => {
    if (sidebarOpened) setSidebar(false);
  };

  const handleToggle = () => setSidebar(!sidebarOpened);

  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="uncover"
          inverted
          vertical
          visible={sidebarOpened}
        >
          <MobileMenu routerInfo={routerInfo} />
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher
          dimmed={sidebarOpened}
          onClick={handlePusherClick}
          style={{ minHeight: '100vh' }}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <PageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Responsive>
  );
};

export default MobileContainer;
