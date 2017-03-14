import React, { Component } from 'react';
import BlogList from './BlogList';

var PostCard = function (props) {
  return (
    <div className="">
      <p>{props.content}</p>
      <p>{props.title}</p>
    </div>
  )
};

export default PostCard;
