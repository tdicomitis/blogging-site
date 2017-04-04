import React, {Component} from 'react';
import $ from 'jquery';
import EditForm from '../EditForm';

class EditPostContainer extends Component {
  state = {
    content: null,
    title: null
  }
  componentDidMount = () => this.loadAllPostsFromServer

  updateContent(content) {
    return this.setState({ content })
  }
  updateTitle(title){
    return this.setState({ title })
  }
  loadAllPostsFromServer() {
    fetch(`/api/posts ${this.props.params.blog_id}`)
      .then(blob => blob.json())
      .then(post => this.setState({ post }))
  }
  handleSubmit(e) {
    e.preventDefault();
    var data = {
      content: this.state.content,
      title: this.state.title,
    };
  $.ajax({
    url: `/api/posts/${this.props.params.blog_id}`,
    method: "PUT",
    data: data
  }).done(data)
    }
  render() {
    return (
      <div>
        <h1> Hello From Edit! </h1>
          { this.state.content && this.state.title ?
             <EditForm content={this.state.content}
              title={this.state.title}
              updateContent={this.updateContent}
              updateTitle={this.updateTitle}
              handleSubmit={this.handleSubmit}
            /> : null }
      </div>
      )
    }
  };

export default EditPostContainer;
