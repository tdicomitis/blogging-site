import React from 'react';
import { Link } from 'react-router';

var PostCard = function (props) {
  return (
    <div className="">
      <Link to={"/viewablog/" + props.id} > {props.content}</Link>
      <p> {props.title} </p>
      <button onClick={ () => props.deletePost(props.id)} className="btn btn-alarm">Delete Post</button>
    </div>
  )
};

export default PostCard;
