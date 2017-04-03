import React from 'react';
import PostCard from './PostCard';


var PostList = React.createClass({
  render: function(){
    var self=this;
      var postCards = this.props.posts.map(function(item, index){
        return <PostCard content={item.content} title={item.title} id={item._id}
                key={index} deletePost={self.props.deletePost}
              />
      });
      return (
        <div className="">
          { postCards }
        </div>
      )
    }
});

export default PostList;
