import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import { handleLogout } from '../Logout/Logout';
import Alert from '../Alert/Alert'; // Import the Alert component

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logoutError, setLogoutError] = useState('');
    const [logoutSuccess, setLogoutSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = () => {
            const loggedIn = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loggedIn === 'true');
        };

        checkLoginStatus();

        const handleLoginStateChanged = () => {
            checkLoginStatus();
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
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="mr-4 h-20 my-0 mb-0" alt="Logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogoutClick}
                                className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log out
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                        )}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${
                            menuOpen ? 'block' : 'hidden'
                        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700' : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700' : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-orange-700' : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {logoutError && <Alert message={logoutError} type="error" onClose={handleCloseAlert} />}
            {logoutSuccess && <Alert message={logoutSuccess} type="success" onClose={handleCloseAlert} />}
        </header>
    );
};

export default Header;
