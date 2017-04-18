import React, {Component} from 'react';
import CommentForm from '../CommentForm';
import $ from 'jquery';

class CommentContainer extends Component{
  state = {
    content: null
  }

  handleSubmit = this.handleSubmit.bind(this)
  updateContent = (content) => this.setState({ content })

  handleSubmit(e){
    e.preventDefault();
    const data = {
      content: this.state.content
    };
    $.ajax({
      url: `/api/posts/${this.props.id}/comment`,
      method: 'POST',
      data: data
    }).done((done) => {
      console.log("COMMENTS ARE FUN!!!")
    })
  }
render() {
  return(
    <CommentForm updateContent={this.updateContent}
                  handleSubmit={this.handleSubmit}
    />
  )
}
}

export default CommentContainer;
