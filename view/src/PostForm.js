import React from 'react';
import ReactMarkdown from 'react-markdown';

const PostForm = (props) =>
  <div className="">
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>title</label>
        <input onChange={ (event) => props.updateTitle(event.target.value)} type="text" className="form-control" id="" />
      </div>
      <div className="form-group">
        <label>content</label>
        <textarea onChange={ (event) => props.updateContent(event.target.value)} type="text-area" className="form-control" rows="10" />
      </div>
    <button type="submit" className="btn btn-default">Submit</button>
    </form>
    <div>
      <ReactMarkdown source={props.previewContent} />
    </div>
  </div>

export default PostForm;
