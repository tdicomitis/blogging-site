import React, {Component} from 'react';
import PostCard from './PostCard';

class PostList extends Component {
  render() {
    var postCards = this.props.posts.map((item, index) => {
      return <PostCard content={item.content} title={item.title} id={item._id}
              key={index} deletePost={this.props.deletePost}
            />
    });
    return (
      <div className="">
        { postCards }
      </div>
    )
  }
}

export default PostList;
