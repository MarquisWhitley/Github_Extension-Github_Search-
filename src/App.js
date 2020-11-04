import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
