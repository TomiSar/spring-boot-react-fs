import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <h1>
        Welcome {this.props.firstName} {this.props.lastName}! From To React
        class component
      </h1>
    );
  }
}

export default Greeting;
