import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login/Login.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'




function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
   

    

    </>
  )
}

export default Layout