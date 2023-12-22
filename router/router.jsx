import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../src/layouts/MainLayout'
import Home from '../src/Pages/Home'
import Me from '../src/Pages/Me'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/me',
        element: <Me />
      }
    ]
  }
])

export default router
