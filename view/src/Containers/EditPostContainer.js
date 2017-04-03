import React from 'react';
import $ from 'jquery';
import EditForm from '../EditForm';

var EditPostContainer = React.createClass({
  getInitialState: function() {
    return {
      content: null,
      title: null,
    }
  },
  componentWillMount: function() {
    this.loadAllPostsFromServer();
  },
  updateContent: function(content) {
    return this.setState({ content: content })
  },
  updateTitle: function(title) {
    return this.setState({ title: title })
  },
  loadAllPostsFromServer: function() {
    console.log("FUNCTION BEING TRIGGERED")
    var self=this;
    $.ajax({
      url: `/api/posts/${this.props.params.blog_id}`,
      method: "GET"
    }).done(function(data){
      console.log(data, "I AM DEAD")
      self.setState({ content: data.content, title: data.title})
    })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      content: this.state.content,
      title: this.state.title,
    };
    $.ajax({
      url: `/api/posts/${this.props.params.blog_id}`,
      method: "PUT",
      data: data
    }).done(function(data){
      console.log(data, 'SUCCESS EDITING POST')
    })
  },
  render: function() {
    return (
      <div>
        <h1> Hello From Edit! </h1>
          { this.state.content && this.state.title ?
             <EditForm content={this.state.content}
              title={this.state.title}
              updateContent={this.updateContent}
              updateTitle={this.updateTitle}
              handleSubmit={this.handleSubmit}
            /> : null }
      </div>
    )
  }
});

export default EditPostContainer;
