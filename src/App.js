import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './views/layout/layout';
import Login from './views/login/login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Layout}></Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
