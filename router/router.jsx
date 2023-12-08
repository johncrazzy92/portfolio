import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../src/layouts/MainLayout'
import Home from '../src/Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export default router
