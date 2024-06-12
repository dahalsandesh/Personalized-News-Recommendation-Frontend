import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import EmailValid from './Emailvalidate/EmailValid.jsx';
import ValidError from './Emailvalidate/ValidError.jsx';
import ForgetPassword from './Forget-Password/ForgetPassword.jsx';
import OtpVerification from './Forget-Password/OtpVerify.jsx';
import NewPassword from './Forget-Password/SetNewPassword.jsx';

const App = () => {
  const [categoryId, setCategoryId] = useState(null);
  const [showVideos, setShowVideos] = useState(false);

  const handleCategorySelect = (id) => {
    setCategoryId(id);
    setShowVideos(false);
  };

  const handleShowVideos = () => {
    setShowVideos(true);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout onCategorySelect={handleCategorySelect} onShowVideos={handleShowVideos} />,
      children: [
        {
          path: '',
          element: <Home categoryId={categoryId} showVideos={showVideos} />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: 'verify-email',
          element: <EmailValid />,
        },
        {
          path: 'valid-error',
          element: <ValidError />,
        },
        {
          path: 'forget-password',
          element: <ForgetPassword />,
        },
        {
          path: 'otp-verification',
          element: <OtpVerification />,
        },
        {
          path: 'new-password',
          element: <NewPassword />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
