import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import PostList from '../PostList';

class BlogContainer extends Component {
  state = {
    posts: null
  }
  deletePost = this.deletePost.bind(this)

  componentDidMount() {
    this.loadAllPostsFromServer();
  }

  loadAllPostsFromServer(){
    fetch(`/api/posts/`)
      .then(blob => blob.json())
      .then(posts => this.setState({ posts }))
  }
  deletePost(id){
    $.ajax({
      url: '/api/posts/' + id,
      method: 'DELETE'
    }).done((data) => {
      this.loadAllPostsFromServer();
    })
  }
  render() {
    return (
      <div>
        <h1 className="blog-header">Welcome to my Blog!</h1>
          { this.state.posts ? <PostList posts={this.state.posts} deletePost={this.deletePost}/> : null }
        <div className="enter-blog">
          <Link to="/post" activeClassName="active-nav-btn" className="nav-item"> Post a Blog </Link>
        </div>
      </div>
    )
  }
};

export default BlogContainer;
