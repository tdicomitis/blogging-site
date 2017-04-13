import React from 'react';

const EditForm = (props) =>
  <div>
    <form onSubmit={props.handleSubmit}>
    <div>
      <label>title</label>
      <input onChange={(event) => props.updateTitle(event.target.value)} value={props.title} type="text" className="form-control" id="" placeholder="title"/>
    </div>
    <div>
      <label>content</label>
      <input onChange={(event) => props.updateContent(event.target.value)} value={props.content} type="text" className="form-control" id="" placeholder="content"/>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>



export default EditForm;
