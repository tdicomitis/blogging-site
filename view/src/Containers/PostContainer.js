import React, {Component} from 'react';
import PostForm from '../PostForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

class PostContainer extends Component{
  state = {
    title: null,
    content: null
  }
  updateTitle = (title) => this.setState({ title })
  handleSubmit = this.handleSubmit.bind(this)

  updateContent = (content) => this.setState({ content })

  handleSubmit(e){
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content,
  };
  $.ajax({
    url: '/api/posts/',
    method: 'POST',
    data: data
  }).done((data) => {
    browserHistory.push('/blog')
    })
  }
  render() {
    return (
      <div>
        <h1> Post a New Blog! </h1>
        <PostForm updateTitle={this.updateTitle}
                  updateContent={this.updateContent}
                  handleSubmit={this.handleSubmit}
                  previewContent={this.state.content ? this.state.content : "No content... yet" }
        />
      </div>
    )
  }
}




export default PostContainer;
