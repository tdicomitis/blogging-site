import React, { Component } from 'react';
import $ from 'jquery';

var ShowPostContainer = React.createClass({
  getInitialState: function() {
    return {
      posts: null
    }
  },
  loadPostsFromServer: function() {
    var self=this;
    $.ajax({
      url: '/api/posts/' + this.props.params.blog_id,
      method: "GET"
    }).done(function(data){
      console.log(data, "ONE POST FROM SERVER!")
      self.setState({ posts: data })
    })
  },
  componentDidMount: function() {
    this.loadPostsFromServer()
  },
  render: function() {
    return (
      <div>
        <h1>ONE BLOG!</h1>
        <p> { this.props.params.blog_id } </p>
      </div>
    )
  }
});

export default ShowPostContainer;
