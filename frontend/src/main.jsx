import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import OpeningPage from './pages/OpeningPage'


const router = createBrowserRouter([{
  path: '/', element: <OpeningPage/>,
  errorElement: <ErrorPage/>,
  children: [
  ],
},])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>)