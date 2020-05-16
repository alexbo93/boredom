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

const App = () => {
  // const dispatch = useDispatch();

  return (
    <Router>
      <div className='App'>
        {/* <Header /> */}
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
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
