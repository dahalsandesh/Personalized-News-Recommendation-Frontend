// Logout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/styles.css';
import Alert from '../components/Alert/Alert'; 

const Logout = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleCloseAlert = () => {
    setError('');
    setSuccess('');
  };

  const handleLogout = async () => {
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/account/user/Logout');

      if (response.status === 200) {
        setSuccess('Logout successful');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        setError('Logout failed. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-bg bg-cover bg-center bg-blur">
      <div className="transparent-bg p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl text-gray-500 text-center mb-6">Logout</h2>
        <button 
          onClick={handleLogout} 
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Logout
        </button>
        {error && <Alert message={error} type="error" onClose={handleCloseAlert} />} 
        {success && <Alert message={success} type="success" onClose={handleCloseAlert} />}
      </div>
    </div>
  );
};

export default Logout;
