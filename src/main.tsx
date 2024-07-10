import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AllRoutes from './routes/allRoutes/AllRoutes.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={AllRoutes} />
  </React.StrictMode>,
)
