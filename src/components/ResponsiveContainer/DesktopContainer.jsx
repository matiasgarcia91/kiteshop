import React, { useState } from 'react';

import 'semantic-ui-css/semantic.min.css';

import { Responsive, Segment, Visibility } from 'semantic-ui-react';

import DesktopMenu from '../NavBar/DesktopMenu';

const DesktopContainer = props => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);

  const showFixedMenu = () => setFixed(true);

  const { children, PageHeading, routerInfo } = props;

  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{
            paddingTop: '0px',
            minHeight: 700,
            backgroundImage:
              'url(https://www.wanderlife.nl/wp-content/uploads/2019/01/Kitesurf-vakantie-februari.jpg)',
          }}
          vertical
        >
          <DesktopMenu fixed={fixed} routerInfo={routerInfo} />
          <PageHeading />
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
};

export default DesktopContainer;
