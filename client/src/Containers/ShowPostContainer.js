import React from 'react';
import $ from 'jquery';

var ShowPostContainer = React.createClass({
  getInitialState: function() {
    return {
      post: null
    }
  },
  loadPostFromServer: function() {
    var self=this;
    $.ajax({
      url: '/api/posts/' + this.props.params.blog_id,
      method: "GET"
    }).done(function(data){
      console.log (data, "THIS IS DATA FOR ONE POST")
      self.setState({ post: data })
    })
  },
  componentDidMount: function() {
    this.loadPostFromServer()
  },
  render: function() {
    return (
      <div>
        <h1> {this.state.post ? this.state.post.title : "Loading"} </h1>
        <p> { this.props.params.blog_id } </p>
      </div>
    )
  }
});

export default ShowPostContainer;
