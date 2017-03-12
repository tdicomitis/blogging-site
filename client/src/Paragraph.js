import React from 'react';

var ParagraphItem = React.createClass({
  render: function() {
    return (
      <p> {this.props.item} </p>
    )
  }
});

var Paragraph = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.data.map(function(item) {
          return <ParagraphItem item={item}/>
        })}
      </p>
    )
  }
});


export default Paragraph;
