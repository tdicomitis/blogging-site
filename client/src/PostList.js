import React, { Component } from 'react';
import PostCard from './PostCard';


var PostList = React.createClass({
  render: function(){
      var postCards = this.props.posts.map(function(item){
        return <PostCard content={item.content} title={item.title} id={item._id}
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
