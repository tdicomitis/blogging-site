import React from 'react';
import $ from 'jquery';
import ReactMarkdown from 'react-markdown';

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
        <ReactMarkdown source={ this.state.post ? this.state.post.content : "Still Loading"} />
      </div>
    )
  }
});

export default ShowPostContainer;
