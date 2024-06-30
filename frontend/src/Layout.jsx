import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const Layout = ({ onCategorySelect, onSearch }) => {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboardRoute && (
        <Header onCategorySelect={onCategorySelect} onSearch={onSearch} />
      )}
      <main>
        <Outlet />
      </main>
      {!isDashboardRoute && <Footer />}
    </>
  );
};

export default Layout;
