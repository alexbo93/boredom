import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { selectUserName } from 'redux/auth';

interface PrivateRouteModel {
  children: React.ReactNode;
  path: string;
  exact: boolean;
}
const PrivateRoute: React.FC<PrivateRouteModel> = ({
  children,
  path,
  exact,
}) => {
  const nickname = useSelector(selectUserName);
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (!!nickname ? children : <Redirect to={'/login'} />)}
    />
  );
};

export default PrivateRoute;
