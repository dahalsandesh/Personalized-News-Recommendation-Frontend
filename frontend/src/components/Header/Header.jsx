import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import { handleLogout } from '../Logout/Logout';
import Alert from '../Alert/Alert';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutError, setLogoutError] = useState('');
  const [logoutSuccess, setLogoutSuccess] = useState('');
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleLoginStateChanged = () => {
      setToken(localStorage.getItem('token'));
    };

    window.addEventListener('loginStateChanged', handleLoginStateChanged);

    return () => {
      window.removeEventListener('loginStateChanged', handleLoginStateChanged);
    };
  }, []);

  const handleLogoutClick = async () => {
    try {
      const { success, error } = await handleLogout({ onLogout: () => setToken(null) });
      if (success) {
        setLogoutSuccess(success);
        navigate('/');
      } else if (error) {
        setLogoutError(error);
      }
    } catch (error) {
      console.error('Logout failed', error);
      setLogoutError('Logout failed. Please try again.');
    }
  };

  const handleCloseAlert = () => {
    setLogoutError('');
    setLogoutSuccess('');
  };

  return (
    <header className="bg-gray-800 shadow sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-2 flex justify-between items-center text-white">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-10 sm:h-12" alt="Logo" />
        </Link>
        <div className="flex items-center space-x-4 lg:space-x-8 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <NavLink
            to="/"
            className="text-sm lg:text-base hover:text-white"
            activeClassName="text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm lg:text-base hover:text-white"
            activeClassName="text-gray-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm lg:text-base hover:text-white"
            activeClassName="text-gray-300"
          >
            Contact
          </NavLink>
          {!token && (
            <Link
              to="/login"
              className="text-gray-200 hover:bg-gray-600 focus:ring-2 focus:ring-green-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
          )}
          {token && (
            <button
              onClick={handleLogoutClick}
              className="text-gray-200 hover:bg-red-300 focus:ring-2 focus:ring-red-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log out
            </button>
          )}
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <NavLink
            to="/"
            className="block px-4 py-2 text-gray-800 hover:text-gray-900"
            activeClassName="text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:text-gray-900"
            activeClassName="text-gray-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:text-gray-900"
            activeClassName="text-gray-300"
          >
            Contact
          </NavLink>
          {!token && (
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-800 hover:text-gray-900 focus:outline-none"
            >
              Log in
            </Link>
          )}
          {token && (
            <button
              onClick={handleLogoutClick}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:text-gray-900"
            >
              Log out
            </button>
          )}
        </div>
      )}
      {logoutError && <Alert message={logoutError} type="error" onClose={handleCloseAlert} />}
      {logoutSuccess && <Alert message={logoutSuccess} type="success" onClose={handleCloseAlert} />}
    </header>
  );
};

export default Header;
