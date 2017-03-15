import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import PostList from '../PostList';

var BlogContainer = React.createClass({
  getInitialState: function() {
    return {
      posts: null
    }
  },
  componentDidMount: function() {
    this.loadAllPostsFromServer()
  },
  loadAllPostsFromServer: function() {
    var self=this;
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done(function(data){
      console.log(data, "POST FROM SERVER!")
      self.setState({ posts: data })
    })
  },
  deletePost: function(id) {
    var self=this;
    $.ajax({
      url: '/api/posts/' + id,
      method: 'DELETE'
    }).done(function(data){
      console.log(data, "SUCCESS IN DELETING POST!");
      self.loadAllPostsFromServer();
    })
  },
  render: function() {
    return (
      <div>
        <h1 className="blog-header">Welcome to my Blog!</h1>
          { this.state.posts ? <PostList posts={this.state.posts} deletePost={this.deletePost}/> : null }
        <div>
          <Link to="/post" activeClassName="active-nav-btn" className="nav-item"> Post a Blog </Link>
        </div>
      </div>
    )
  }
});

export default BlogContainer;
