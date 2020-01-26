import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

export default ({ children, PageHeading, routerInfo }) => (
  <div>
    <DesktopContainer PageHeading={PageHeading} routerInfo={routerInfo}>
      {children}
    </DesktopContainer>
    <MobileContainer PageHeading={PageHeading} routerInfo={routerInfo}>
      {children}
    </MobileContainer>
  </div>
);
