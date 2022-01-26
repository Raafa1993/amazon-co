import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute, Redirect
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const PrivateRoutes: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  console.log(user)

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{
            pathname: isPrivate ? '/' : '/home',
            state: { from: location }
          }} />
        )
      }}
    />
  );
}

export default PrivateRoutes;