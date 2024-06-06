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
    <header className="bg-gray-200 shadow-md sticky top-0 z-50 w-full">
      <nav className="bg-gray-200 border-b border-gray-300 mx-8 py-3">
        <div className="flex justify-between items-center w-full mx-auto px-4">
          <div className="flex items-center ">
            <img src={Logo} className="h-10 mr-3 cursor-pointer transform hover:scale-110 transition duration-300" alt="Logo" />
           
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 duration-200 font-bold ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"} border-b-2 border-transparent hover:border-blue-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600`
              }
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 duration-200 font-bold ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"} border-b-2 border-transparent hover:border-blue-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600`
              }
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 duration-200 font-bold ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"} border-b-2 border-transparent hover:border-blue-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600`
              }
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center">
            {token ? (
              <button
                onClick={handleLogoutClick}
                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-2 focus:outline-none"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Log out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-semibold rounded-lg text-sm px-4 py-2 mr-2 focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden bg-gray-200 shadow-md">
          <NavLink
            to="/"
            className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contact
          </NavLink>
          {token ? (
            <button
              onClick={handleLogoutClick}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Log out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 focus:outline-none font-bold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-gray-700 hover:text-gray-900 focus:outline-none font-bold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
      {logoutError && <Alert message={logoutError} type="error" onClose={handleCloseAlert} />}
      {logoutSuccess && <Alert message={logoutSuccess} type="success" onClose={handleCloseAlert} />}
    </header>
  );
};

export default Header;
