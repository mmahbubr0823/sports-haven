import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AllRoutes from './routes/allRoutes/AllRoutes.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/features/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={AllRoutes} />
    </Provider>
  </React.StrictMode>,
)
