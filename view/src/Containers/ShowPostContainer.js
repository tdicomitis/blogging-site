import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class ShowPostContainer extends Component {
  state = {
    post: null
  }
  loadPostFromServer() {
    fetch(`/api/posts/${this.props.params.blog_id}`)
      .then(blob => blob.json())
      .then(post => this.setState({ post }))
  }
  componentDidMount() {
    this.loadPostFromServer();
  }
  render() {
    return (
      <div>
        <h1> {this.state.post ? this.state.post.title : "Loading"} </h1>
        <ReactMarkdown source={ this.state.post ? this.state.post.content : "Still Loading"} />
      </div>
    )
  }
};

export default ShowPostContainer;
