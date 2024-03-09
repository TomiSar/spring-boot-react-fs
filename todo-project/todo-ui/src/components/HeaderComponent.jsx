import { NavLink, useNavigate } from 'react-router-dom';
import { isUserLoggedIn, logout } from '../services/AuthService';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const isAuth = isUserLoggedIn();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div>
            <a className='navbar-brand px-2 ' href='http://localhost:3000/'>
              Todo Management Application
            </a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav '>
              {isAuth && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/todos'>
                    Todos
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <ul className='navbar-nav '>
            {!isAuth && (
              <li className='nav-item'>
                <NavLink className='nav-link' to='/register'>
                  Register
                </NavLink>
              </li>
            )}

            {!isAuth && (
              <li className='nav-item'>
                <NavLink className='nav-link' to='/login'>
                  Login
                </NavLink>
              </li>
            )}

            {isAuth && (
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/login'
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
