import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Destinations from './Destinations';
import About from './about';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/destinations" component={Destinations} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
