import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import BlogList from './BlogList';

var BlogContainer = React.createClass({
  getInitialState: function() {
    return {
      allblogs: null
    }
  },
  componentDidMount: function() {
    this.loadAllPostsFromServer()
  },
  loadAllPostsFromServer: function() {
    var self=this;
    $.ajax({
      url: '/api/posts',
      method: "GET"
    }).done(function(data){
      console.log(data, "POST FROM SERVER!")
      self.setState({ allblogs: data })
    })
  },
  render: function() {
    return (
      <div className="head-title-flex">
        <h1>Welcome to my Blog!</h1>
          { this.state.allblogs ? <BlogList posts={this.state.allblogs} /> : null }
        <div>
          <Link to="/post" activeClassName="active-nav-btn-flex" className="nav-item"> Post a Blog </Link>
        </div>
      </div>
    )
  }
});

export default BlogContainer;
