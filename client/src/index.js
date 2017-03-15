import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import './index.css';
import App from './App';
import Home from './Containers/HomeContainer';
import About from './Containers/AboutContainer';
import Blog from './Containers/BlogContainer';
import Experience from './Containers/ExperienceContainer';
import Post from './Containers/PostContainer';
import ShowPost from './Containers/ShowPostContainer';
import EditPostContainer from './Containers/EditPostContainer';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}>
      </Route>

      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/post" component={Post} />
      <Route path="/experience" component={Experience} />
      <Route path="/viewablog/:blog_id" component={ShowPost} />
      <Route path="/editpost/:blog_id" component={EditPostContainer} />
    </Route>

  </Router>
),document.getElementById('root'));
