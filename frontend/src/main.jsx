import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './Login/Login.jsx'
import Signup from './Signup/Signup.jsx'
import EmailValid from './Emailvalidate/EmailValid.jsx'
import ValidError from './Emailvalidate/ValidError.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {path: "about",
      element: <About />
      },
      {path: "contact",
      element: <Contact />
      },
      {path: "login",
      element: <Login />
      },
      {path: "signup",
      element: <Signup />
      },
      {path: "email-valid",
      element: <EmailValid />
      },
      {path: "valid-error",
      element: <ValidError />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
