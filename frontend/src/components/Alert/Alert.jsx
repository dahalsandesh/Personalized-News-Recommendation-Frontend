import React, { useEffect } from 'react';
import './Alert.css';

function Alert({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); 
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
