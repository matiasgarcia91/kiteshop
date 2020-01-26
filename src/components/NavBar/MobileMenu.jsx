import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const items = [
  { name: 'homepage', displayName: 'Home', path: '/' },
  { name: 'kiteshop', displayName: 'Kites', path: '/kites' },
  { name: 'accessories', displayName: 'Accessories', path: '/accessories' },
  { name: 'aboutus', displayName: 'Us', path: '/aboutUs' },
];

const MobileMenu = () => {
  const MenuItems = items.map((item, i) => (
    <Menu.Item as={Link} to={item.path} key={i}>
      {item.displayName}
    </Menu.Item>
  ));
  return <>{MenuItems}</>;
};

export default MobileMenu;
