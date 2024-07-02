import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import EmailValid from './Emailvalidate/EmailValid';
import ValidError from './Emailvalidate/ValidError';
import ForgetPassword from './Forget-Password/ForgetPassword';
import OtpVerification from './Forget-Password/OtpVerify';
import NewPassword from './Forget-Password/SetNewPassword';
import Videos from './components/Home/Video';
import SingleNews from './components/NewsCard/SingleNews';
import DashboardHome from './Dashboard/Components/DashboardHome';
import AddPosts from './Dashboard/Components/AddPosts';
import AddUsers from './Dashboard/Components/AddUser';
import AddCategory from './Dashboard/Components/AddCategory';
import Profile from './Dashboard/Components/Profile';
import DashboardLayout from './Dashboard/Components/shared/Layout';
import NewsPosts from './Dashboard/Components/NewsPosts';


const App = () => {
  const [state, setState] = useState({
    categoryId: null,
    categoryName: '',
    searchQuery: '',
  });

  const handleCategorySelect = (id, name) => {
    setState((prevState) => ({ ...prevState, categoryId: id, categoryName: name, showVideos: false, searchQuery: '' }));
  };


  const handleSearch = (query) => {
    setState((prevState) => ({ ...prevState, searchQuery: query, categoryId: null, categoryName: '' }));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout onCategorySelect={handleCategorySelect}  onSearch={handleSearch} />,
      children: [
        {
          path: '',
          element: <Home categoryId={state.categoryId} categoryName={state.categoryName} searchQuery={state.searchQuery} />,
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
        {
          path: 'video',
          element: <Videos />,
         },
        ,{
          path: '/news/:postId',
          element: <SingleNews />,
        
        },
        {
          path: '/dashboard/*',
          element: <DashboardLayout />,
          children: [
            {
              path: '',
              element: <DashboardHome />,
            },
            {
              path: 'news',
              element: <NewsPosts />,
            },
            {
              path: 'addusers',
              element: <AddUsers />,
            },
            {
              path: 'addposts',
              element: <AddPosts />,
            },
            {
              path: 'editcategory',
              element: <AddCategory />,
            },
            
          ],
        },
      ],
    },
    {
      path: 'profile',
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

