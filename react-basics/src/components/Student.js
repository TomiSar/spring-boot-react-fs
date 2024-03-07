import React from 'react';

const Student = ({ firstName, lastName, email }) => {
  return (
    <div>
      <h1>Student details</h1>
      <p>Student firstName: {firstName}</p>
      <p>Student lastName: {lastName}</p>
      <p>Student email: {email}</p>
    </div>
  );
};

export default Student;
