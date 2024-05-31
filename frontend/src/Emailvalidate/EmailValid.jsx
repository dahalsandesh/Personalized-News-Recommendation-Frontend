import React from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert/Alert'; 


const EmailValid = () => {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Alert message="Email validation success" type="success" />
            <button
                onClick={redirectToHome}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Go to Home Page
            </button>
        </div>
    );
};

export default EmailValid;
