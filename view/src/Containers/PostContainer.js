import React, {Component} from 'react';
import PostForm from '../PostForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

class PostContainer extends Component{
  state = {
    content: null,
    title: null
  }
  updateContent = (content) => this.setState({ content })

  updateTitle = (title) => this.setState({ title })
  handleSubmit = this.handleSubmit.bind(this)

  handleSubmit(e){
    e.preventDefault();
    const data = {
      content: this.state.content,
      title: this.state.title,
  };
  $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: data
  }).done((data) => {
    browserHistory.push('/blog')
    })
  }
  render() {
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
}




export default PostContainer;
