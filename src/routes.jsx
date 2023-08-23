import React from 'react';
import { Route } from 'react-router-dom';
import LayoutContainer from './containers/Layout';
import LandingRoutes from './pages/LandingPage/routes';
import UpcomingEventRoutes from './pages/UpcomingEventPage/routes';
import HelpRoutes from './pages/Help/routes';
import ErrorRoutes from './pages/Error/routes';

const routes = [...LandingRoutes, ...UpcomingEventRoutes, ...HelpRoutes, ...ErrorRoutes];

const renderRoute = (route, props) => (
  <Route
    key={route.path}
    path={route.path}
    exact={route.exact}
    render={(restProps) => (
      <LayoutContainer {...props}>
        <route.component {...restProps} {...props} />
      </LayoutContainer>
    )}
  />
);

export const routeGenerator = ({ ...props }) =>
  routes.map((route) =>
    renderRoute(route, {
      ...props
    })
  );
