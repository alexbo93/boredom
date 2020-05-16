import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import NotFound from './pages/not-found';

import PrivateRoute from 'hoc/private-route';

// import Header from './components/header';
// import Footer from './components/footer';

import './App.css';
import { getActivities } from 'redux/activities';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' exact>
            <Login />
          </Route>
          <PrivateRoute path='/' exact>
            <Dashboard />
          </PrivateRoute>
          <Route path='/not-found'>
            <NotFound />
          </Route>
          <Redirect to='/not-found' />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
