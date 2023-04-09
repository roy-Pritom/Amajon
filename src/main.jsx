import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './Components/Layout/Home'
import Order from './Components/Order/Order'
import Shop from './Components/Shop/Shop'
import { cartLoader } from './Components/CaetLoader/cartLoader'
import CheckOut from './Components/CheckOut/CheckOut'

const router=createBrowserRouter([
  {
   path:'/',
   element:<Home></Home>,
   children:[
    {
      path:'/',
      element:<Shop></Shop>
    },
    {
      path:'order',
      element:<Order></Order>,
      loader:cartLoader
    },
    {
     path:'checkout',
     element:<CheckOut></CheckOut>
    },
   ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />

  </React.StrictMode>,
)
