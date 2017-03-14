import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router';

import './index.css';
import App from './App';
import Home from './HomeContainer';
import About from './AboutContainer';
import Blog from './BlogContainer';
import Experience from './ExperienceContainer';
import Post from './PostContainer';

ReactDOM.render((
  <Router history={browserHistory}>

    <Route path="/" component={App}>

      <Route path="/home" component={Home}>
      </Route>

      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/post" component={Post} />
      <Route path="experience" component={Experience} />
    </Route>

  </Router>
),document.getElementById('root'));
