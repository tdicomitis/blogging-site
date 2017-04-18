import React from 'react';

const CommentForm = (props) =>
<div>
  <form onSubmit={props.handleSubmit}>
    <h3>A Penny For Your Thoughts?</h3>
    <div>
      <textarea onChange={ (event) => props.updateContent(event.target.value)} placeholder='Thoughts💭' rows='10' />
    </div>
    <button type="submit" className="btn btn-default">Submit Comment!</button>
  </form>
</div>

export default CommentForm;
