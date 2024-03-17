import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from './layouts/Main'
import Home from './pages/Home'

const router = createBrowserRouter([{
  path: "/",
  element: <Main />,
  children: [
    {
      index: true,
      element: <Home />
    }
  ]
}])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App