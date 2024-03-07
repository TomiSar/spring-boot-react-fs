import React from 'react';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Chuck',
      lastName: 'Norris',
      email: 'senseioftheworld@com',
    };
  }

  updateEmployee() {
    console.log('Employee update');
    this.setState({
      firstName: 'Jack',
      lastName: 'Nicholson',
      email: 'actor@hollywood.com',
    });
  }

  render() {
    return (
      <div>
        <h1>Employee details</h1> <hr />
        <p>Employee firstName: {this.state.firstName}</p>
        <p>Employee lastName: {this.state.lastName}</p>
        <p>Employee email: {this.state.email}</p>
        <button onClick={() => this.updateEmployee()}>Update Employee</button>
      </div>
    );
  }
}

export default Employee;
