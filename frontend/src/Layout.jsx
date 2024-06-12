import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const Layout = ({ onCategorySelect, onShowVideos }) => {
  return (
    <>
      <Header onCategorySelect={onCategorySelect} onShowVideos={onShowVideos} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
