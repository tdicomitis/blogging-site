import React from 'react';

var AboutContainer = React.createClass({
  render() {
    return (
      <div>
        <div>
          <h1>About Me</h1>
          <img className="my-pic" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuuaYUAGXOuV73wC2gykNs_exvgQqdbJo97WfQ9bYJGnh4Q9MvNw" alt="presentation" />
          <h5> Contact Information </h5>
            <ul>
              <li> Email: dicomitis13@gmail.com </li>
              <li> Phone: 406-396-6094 </li>
            </ul>
        </div>
        <div className="para-flex">
          <p> "Here is a bunch of random stuff about me" </p>
        </div>
      </div>
    );
  }
});

export default AboutContainer;
