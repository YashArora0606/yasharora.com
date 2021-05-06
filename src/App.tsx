import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Home from './Home'
import Paths from './paths.json';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        {Paths.map((path) => {
          return <Route path={path.extension} exact component={() => {
            window.location.href = path.url; 
            return null;
          }}/> 
        })}
        <Route path="/" component={ Home }/>
      </Switch>
    </Router>
  );
}

export default App;
