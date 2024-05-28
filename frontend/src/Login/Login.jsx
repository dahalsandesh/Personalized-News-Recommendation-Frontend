import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/styles.css';
import Logo from '../Images/Logo.png';
import Alert from '../components/Alert/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleCloseAlert = () => {
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/account/user/Login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        window.dispatchEvent(new Event('loginStateChanged'));
        setSuccess('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      setError('Incorrect Credentials. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-bg bg-cover bg-center bg-blur">
      <div className="transparent-bg p-8 rounded-2xl shadow-md w-full max-w-md">
        <img src={Logo} alt="Logo" className="h-40 mx-auto mb-2" />
        <h2 className="text-xl text-gray-500 text-center mb-6">By CodersUnited</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Enter your email" 
              required 
              autoComplete="current-email"

            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Enter your password" 
              required 
           
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
        {error && <Alert message={error} type="error" onClose={handleCloseAlert} />} 
        {success && <Alert message={success} type="success" onClose={handleCloseAlert} />}
        <div className="mt-6 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-700">Don't have an account?</p>
          <Link to="/signup" className="w-full py-2 px-4 mt-2 inline-block text-center border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
