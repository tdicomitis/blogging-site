import React, {Component} from 'react';
import $ from 'jquery';
import EditForm from '../EditForm';

class EditPostContainer extends Component {
  state = {
    title: null,
    content: null
  }
  componentDidMount = () => this.loadAllPostsFromServer();

  updateTitle = (title) => this.setState({ title })
  handleSubmit = this.handleSubmit.bind(this)

  updateContent = (content) => this.setState({ content })


  loadAllPostsFromServer() {
    fetch(`/api/posts/${this.props.params.blog_id}`)
      .then(blob => blob.json())
      .then(post => this.setState({ title: post.title, content: post.content }))
  }
  handleSubmit(e) {
    e.preventDefault();
    var data = {
      title: this.state.title,
      content: this.state.content,
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
