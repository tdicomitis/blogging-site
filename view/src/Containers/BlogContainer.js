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
        <div className="blog-header">
          <h1>Welcome to my Blog!</h1>
        </div>
        <div className="all-of-posts">
          { this.state.posts ? <PostList posts={this.state.posts} deletePost={this.deletePost}/> : null }
        </div>
        <div className="enter-blog">
          <Link to="/post" activeClassName="active-nav-btn" className="nav-item"> Post a Blog </Link>
          <Link to="/login" activeClassName="active-nav-btn" className="nav-item"> Log In </Link>
        </div>
      </div>
    )
  }
};

export default BlogContainer;
