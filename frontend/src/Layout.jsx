import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const Layout = ({ onCategorySelect, onShowVideos, onSearch }) => (
  <>
    <Header
      onCategorySelect={onCategorySelect}
      onSearch={onSearch}
    />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
