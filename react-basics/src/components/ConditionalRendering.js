import { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <br />
      {!isLoggedIn ? (
        <div>
          <h1>Please Login!</h1>
          <button onClick={handleLogin}>Login to App</button>
        </div>
      ) : (
        <div>
          <h1>Welcome to the application!</h1>
          <button onClick={handleLogout}>Logout from app</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;
