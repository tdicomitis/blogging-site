import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <div className="">
        <form>
          <div className="form-group">
            <label>title</label>
            <input type="text" className="form-control" id="" />
          </div>
          <div className="form-group">
            <label>content</label>
            <input type="text-area" className="form-control" id="" />
          </div>
        <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
