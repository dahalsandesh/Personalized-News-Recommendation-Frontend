import React, { useEffect } from 'react';
import './Alert.css';

function Alert({ message, type, onClose }) {
    useEffect(() => {
        console.log("Alert mounted"); // Debug statement
        const timer = setTimeout(() => {
            onClose(); // Call the onClose function after 3 seconds
        }, 3000); 
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`alert ${type}`}>
            <p>{message}</p>
            <div className="countdown"></div>
        </div>
    );
}

export default Alert;
