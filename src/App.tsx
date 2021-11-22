import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";

import Paths from "./paths.json";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        {Paths.map((path) => {
          return (
            <Route
              key={path.extension}
              path={path.extension}
              exact
              component={() => {
                window.location.href = path.url;
                return null;
              }}
            />
          );
        })}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
