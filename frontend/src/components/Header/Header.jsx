import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import { handleLogout } from '../Logout/Logout';
import Alert from '../Alert/Alert';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logoutError, setLogoutError] = useState('');
    const [logoutSuccess, setLogoutSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true');

        const handleLoginStateChanged = () => {
            const loggedIn = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loggedIn === 'true');
        };

        window.addEventListener('loginStateChanged', handleLoginStateChanged);

        return () => {
            window.removeEventListener('loginStateChanged', handleLoginStateChanged);
        };
    }, []);

    const handleLogoutClick = async () => {
        try {
            const { success, error } = await handleLogout({ onLogout: () => setIsLoggedIn(false) });
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
        <header className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow sticky top-0 z-50">
            <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-2 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="h-10 sm:h-12" alt="Logo" />
                </Link>
                <div className="flex items-center space-x-4 lg:space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm lg:text-base ${isActive ? 'text-white' : 'text-gray-200'} hover:text-white`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-sm lg:text-base ${isActive ? 'text-white' : 'text-gray-200'} hover:text-white`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-sm lg:text-base ${isActive ? 'text-white' : 'text-gray-200'} hover:text-white`
                        }
                    >
                        Contact
                    </NavLink>
                    <div className="relative">
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogoutClick}
                                className="text-sm lg:text-base text-white hover:text-gray-200 focus:outline-none relative"
                            >
                                Log out
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="text-sm lg:text-base text-white hover:text-gray-200 focus:outline-none relative"
                            >
                                Log in
                                <div className="absolute w-2 h-2 bg-white rounded-full -right-2 top-1/2 transform -translate-y-1/2 transition duration-300 opacity-0 group-hover:opacity-100"></div>
                            </Link>
                        )}
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        className="lg:hidden text-white hover:text-gray-200 focus:outline-none"
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
            </nav>
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block px-4 py-2 ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `block px-4 py-2 ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `block px-4 py-2 ${isActive ? 'text-orange-700' : 'text-gray-700'} hover:text-orange-700`
                        }
                    >
                        Contact
                    </NavLink>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogoutClick}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:text-orange-700"
                        >
                            Log out
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:text-orange-700"
                        >
                            Log in
                        </Link>
                    )}
                </div>
            )}
            {logoutError && <Alert message={logoutError} type="error" onClose={handleCloseAlert} />}
            {logoutSuccess && <Alert message={logoutSuccess} type="success" onClose={handleCloseAlert} />}
        </header>
    );
};

export default Header;
