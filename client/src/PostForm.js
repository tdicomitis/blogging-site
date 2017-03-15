import React from 'react';

var PostForm = React.createClass({
  render: function() {
    return (
      <div className="">
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>title</label>
            <input onChange={ (event) => this.props.updateTitle(event.target.value)} type="text" className="form-control" id="" />
          </div>
          <div className="form-group">
            <label>content</label>
            <input onChange={ (event) => this.props.updateContent(event.target.value)} type="text-area" className="form-control" id="" />
          </div>
        <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
});

export default PostForm;
