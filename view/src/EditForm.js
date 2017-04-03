import React from 'react';

var EditForm = React.createClass({
  render: function() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>content</label>
          <input onChange={(event) => this.props.updateContent(event.target.value)} value={this.props.content} type="text" className="form-control" id="" placeholder="content"/>
        </div>
        <div>
          <label>title</label>
          <input onChange={(event) => this.props.updateTitle(event.target.value)} value={this.props.title} type="text" className="form-control" id="" placeholder="title"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
});

export default EditForm;
