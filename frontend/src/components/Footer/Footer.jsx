import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-500 border-t border-gray-200 py-4">
    
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex items-center justify-center lg:justify-start mb-2 lg:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={Logo}
                                className="h-8 w-auto mx-auto lg:mx-0"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-8 text-center lg:text-left">
                        <div className="mb-2 lg:mb-0">
                            <h2 className="mb-1 text-xs font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-xs text-gray-200">
                                <li className="mb-1">
                                    <Link to="/" className="hover:underline text-gray-200">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline text-gray-200">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-2 lg:mb-0">
                            <h2 className="mb-1 text-xs font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-xs text-gray-200">
                                <li className="mb-1">
                                    <a
                                        href="#"
                                        className="hover:underline text-gray-200"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline text-gray-200">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-1 text-xs font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-xs text-gray-200">
                                <li className="mb-1">
                                    <Link to="#" className="hover:underline text-gray-200">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline text-gray-200">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-2 border-gray-200" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center">
                    <span className="text-xs text-gray-200 sm:text-left">
                        © 2023 <a href="#" className="hover:underline text-gray-200">CodersUnited</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
