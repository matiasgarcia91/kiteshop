import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';

import { Responsive, Segment, Visibility } from 'semantic-ui-react';

import DesktopMenu from '../NavBar/DesktopMenu';

export default class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, PageHeading, routerInfo } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
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
  }
}
