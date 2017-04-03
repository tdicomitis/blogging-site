import React from 'react';
import PostForm from '../PostForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

var PostContainer = React.createClass({
  getInitialState: function() {
    return {
      content: null,
      title: null,
    }
  },
  updateContent: function(content){
    return this.setState({ content: content });
  },
  updateTitle: function(title){
    return this.setState({ title: title })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      content: this.state.content,
      title: this.state.title,
    };
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: data
    }).done(function(data){
      browserHistory.push('/blog')
      console.log(data, "SUCCESSFULLY CREATED A POST!!")
    })
  },
  render: function() {
    return (
      <div className="">
        <h1> Post a New Blog! </h1>
        <PostForm updateTitle={this.updateTitle}
          updateContent={this.updateContent}
          handleSubmit={this.handleSubmit}
          previewContent={this.state.content ? this.state.content : "No content, yet" }
        />
      </div>
    )
  }
});

export default PostContainer;
