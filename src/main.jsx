import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {   createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Tshirts,ErrorPage, CustomDesign, HomePage, Hoodies} from './components/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'tshirt',
        element: <Tshirts/>
      },
      {
        path:'hoodie',
        element: <Hoodies/>
      },
      {
        path:'customdesign',
        element: <CustomDesign/>
      }
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
   
  </React.StrictMode>,
)
