import { useState } from 'react'
import './App.css'
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
