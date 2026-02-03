import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/homepage/HomePage'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import ListPage from './pages/listpage/ListPage'
import Layout from './pages/layout/Layout'
import SinglePage from './pages/singlepage/SinglePage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        }
      ] 
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App