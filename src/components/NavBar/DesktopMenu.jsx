import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import { Button, Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const items = [
  { name: 'homepage', displayName: 'Home', path: '/' },
  { name: 'kiteshop', displayName: 'Kites', path: '/kites' },
  { name: 'accessories', displayName: 'Accessories', path: '/accessories' },
  { name: 'aboutus', displayName: 'Us', path: '/aboutUs' },
];

const DesktopMenu = ({ fixed, routerInfo }) => {
  const MenuItems = items.map((item, i) => {
    const active = item.path === routerInfo.url;
    return (
      <Menu.Item
        as={Link}
        to={item.path}
        key={i}
        active={active}
        style={{ paddingTop: '5px' }}
      >
        {item.displayName}
      </Menu.Item>
    );
  });
  const fixedStyle = !fixed
    ? {
        backgroundColor: 'black',
        opacity: 0.7,
        paddingBottom: '10px',
      }
    : {};
  return (
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size="large"
      style={fixedStyle}
    >
      <Container>
        {MenuItems}
        <Menu.Item position="right" style={{ borderBottom: '0px' }}>
          <Button as="a" inverted={!fixed}>
            Log in
          </Button>
          <Button
            as="a"
            inverted={!fixed}
            primary={fixed}
            style={{ marginLeft: '0.5em' }}
          >
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default DesktopMenu;
