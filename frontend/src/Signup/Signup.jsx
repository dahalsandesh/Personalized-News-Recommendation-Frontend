import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/styles.css'; 
import Logo from '../Images/Logo.png';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-signup-bg bg-cover bg-center bg-blur">
      <div className="transparent-bg p-8 rounded-2xl shadow-md w-full max-w-md">
      <img src={Logo} alt="Logo" className="h-40 mx-auto mb-2" />
                <h2 className="text-xl text-gray-500 text-center mb-6">By CodersUnited</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your username" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your password" required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirm-password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
        </form>
        <div className="mt-6 border-t border-gray-300 pt-4 text-center">
          <button className="w-full py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.1 0 5.6 1 7.8 2.9l5.8-5.8C33.9 3.2 29.3 1.5 24 1.5 14.9 1.5 7.4 7.9 4.8 16.4l6.9 5.4C13.3 16.3 18.2 9.5 24 9.5z"></path>
              <path fill="#4285F4" d="M46.4 24.5c0-1.5-.1-3-.4-4.5H24v9h12.7c-.6 3-2.4 5.5-5 7.2l7.6 5.9C42.8 37.6 46.4 31.6 46.4 24.5z"></path>
              <path fill="#FBBC05" d="M7.3 14.5L.3 8.1C-.3 10.5-1 13.1-1 15.8c0 3.1.7 6 2 8.7l6.8-5.4C7.4 17.5 7.3 16 7.3 14.5z"></path>
              <path fill="#34A853" d="M24 47.5c6.4 0 11.8-2.1 15.7-5.7l-7.6-5.9c-2.1 1.5-4.9 2.5-8.1 2.5-5.7 0-10.5-3.9-12.2-9.2L4.8 31.6C8.1 39.9 15.5 47.5 24 47.5z"></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>
            Sign up with Gmail
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">Already have an account?</p>
          <Link to="/login" className="w-full py-2 px-4 mt-2 inline-block text-center border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
