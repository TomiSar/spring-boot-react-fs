import React, { useState } from 'react';

const User = () => {
  //   const [firstName, setFirstName] = useState('Chuck');
  //   const [lastName, setLastName] = useState('Norris');
  //   const [email, setEmail] = useState('mrsensei@gmail.com');

  const [user, setUser] = useState({
    firstName: 'Chuck',
    lastName: 'Norris',
    email: 'mrsensei@gmail.com',
  });

  function updateUser() {
    setUser({
      firstName: 'Steven',
      lastName: 'Seagal',
      email: 'mraikido@sensei.com',
    });

    // setFirstName('Steven');
    // setLastName('Seagal');
    // setEmail('mraikido@sensei.com');
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default User;
