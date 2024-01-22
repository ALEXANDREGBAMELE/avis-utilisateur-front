import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout/App.jsx'
import Home from './pages/Home.jsx'
import Avis from './pages/Avis.jsx'
import AvisEdit from './pages/AvisEdit.jsx'
import Login  from './pages/Login.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

 const routes = createBrowserRouter(
  [
   { 
    path:'/',
    element:<App/>,
    children: [
      {
        path:'',
        element:<Home/>,
      },
      {
        path:'avis-edit',
        element:<AvisEdit/>,
      },
      {
        path:'avis',
        element:<Avis/>,
      },
      
    ]
  },
  {
    path:'login',
    element:<Login/>,
  },

  ]
 )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routes} />
  </React.StrictMode>,
)
