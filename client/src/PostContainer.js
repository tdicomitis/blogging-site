import React, { Component } from 'react';
import PostForm from './PostForm';
import $ from 'jquery';

var PostContainer = React.createClass({
  getInitialState: function() {
    return {
      content: null,
      title: null,
    }
  },
  updateName: function(content){
    return this.setState({ content: content });
  },
  updateSpecies: function(title){
    return this.setState({ title: title })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var self = this;
    var data = {
      content: this.state.content,
      title: this.state.title,
    };
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: data
    }).done(function(data){
      console.log(data, "SUCCESSFULLY CREATED A POST!!")
    })
  },
  render: function() {
    return (
      <div className="jumbotron">
        <h1> Post a New Blog! </h1>
        <PostForm updateTitle={this.updateTitle}
          updateContent={this.updateContene}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
});

export default PostContainer;
