import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/layout/Layout';
import Home from './components/pages/Home';


function App() {
  return (
    <Layout>
      <Switch>
          <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
      </Switch>
    </Layout>
  );
}

export default App;
